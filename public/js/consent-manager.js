/**
 * Gestionnaire de consentement
 * 
 * Le consentement de l'utilisateur est stocké dans le localStorage
 * sous la forme d'un JSON. Exemple :
 *   {"eulerianAnalytics":false,"isFullConsent":false}
 *
 * La modale de consentement est dans `_includes/templates/display.njk`
 * C'est une modale DSFR qui porte l'id "fr-consent-modal".
 */

(function () {
  'use strict';

  // Utilise le même cookie que react-dsfr utilisé dans d'autres composants du site
  const KEY = "@codegouvfr/react-dsfr finalityConsent eulerianAnalytics matomoAnalytics";

  /**
   * Récupère le consentement du localStorage.
   * Renvoie null si la clé est absente ou illisible
   */
  function readConsent() {
    const json = localStorage.getItem(KEY);
    if (!json) return null;
    try {
      return JSON.parse(json);
    } catch (_e) {
      return null;
    }
  }

  /**
   * Enregistre l'objet de consentement dans le localStorage. Le paramètre
   * `states` est un dictionnaire dont les clés correspondent aux attributs
   * `data-consent-key` présents sur les inputs. La propriété
   * `isFullConsent` est calculée automatiquement (toutes les valeurs doivent
   * être `true`).
   *
   * @param {Object<string,boolean>} states
   */
  function writeConsent(states) {
    const full = Object.values(states).every(v => v === true);
    const value = Object.assign({}, states, {
      isFullConsent: full,
    });
    localStorage.setItem(KEY, JSON.stringify(value));
  }

  /**
   * Récupère l'état de tous les inputs de consentement qui possèdent un "data-consent-key"
   * Renvoit un objet dont les clés sont les "data-consent-key" et les valeurs l'état des inputs
   * Exemple : {eulerianAnalytics: true, someOtherFinality: false}
   */
  function collectConsentStates() {
    const result = {};
    document.querySelectorAll('input[data-consent-key]').forEach(input => {
      const key = input.getAttribute('data-consent-key');
      result[key] = !!input.checked;
    });
    return result;
  }

  /**
   * Met à jour les inputs de consentement pour refléter l'état du localStorage
   */
  function hydrateInputs() {
    const stored = readConsent();
    if (!stored) return;
    Object.keys(stored).forEach(key => {
      const selector = `input[data-consent-key="${key}"]`;
      const input = document.querySelector(selector);
      if (input) {
        const value = !!stored[key];
        input.checked = value;
        // si on a décoché un bouton d'acceptation, alors on doit cocher le bouton de refus correspondant
        if (!value && input.type === 'radio' && input.name) {
          const refuse = document.querySelector(
            `input[type="radio"][name="${input.name}"][id$="-refuse"]`
          );
          if (refuse) refuse.checked = true;
        }
      }
    });
  }

  /**
   * Coche tous les consentements au même état
   * @param {boolean} checked
   */
  function setAllConsents(checked) {
    document.querySelectorAll('input[data-consent-key]').forEach(input => {
      const bool = !!checked;
      input.checked = bool;
      if (!bool && input.type === 'radio' && input.name) {
        const refuse = document.querySelector(
          `input[type="radio"][name="${input.name}"][id$="-refuse"]`
        );
        if (refuse) refuse.checked = true;
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('fr-consent-modal');
    const acceptAll = document.getElementById('fr-consent-modal-button-accept-all');
    const refuseAll = document.getElementById('fr-consent-modal-button-refuse-all');
    const confirmBtn = document.getElementById('fr-consent-modal-button-confirm');

    if (acceptAll) {
      acceptAll.addEventListener('click', function () {
        setAllConsents(true);
        const states = collectConsentStates();
        writeConsent(states);
        window.dsfr(modal).modal.conceal();
        enableMatomoTracking();
      });
    }

    if (refuseAll) {
      refuseAll.addEventListener('click', function () {
        setAllConsents(false);
        const states = collectConsentStates();
        writeConsent(states);
        window.dsfr(modal).modal.conceal();
        disableMatomoTracking();
      });
    }

    if (confirmBtn) {
      confirmBtn.addEventListener('click', function () {
        const states = collectConsentStates();
        writeConsent(states);
        if(states.matomoAnalytics) {
          enableMatomoTracking();
        } else {
          disableMatomoTracking();
        }
        window.dsfr(modal).modal.conceal();
      });
    }

    // Initialise le formulaire de la modale de consentement
    hydrateInputs();
  });
})();


