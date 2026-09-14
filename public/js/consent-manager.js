/*
 * Fonction d'initialisation de la checkbox d'opt-out
 */

const isMatomoReady = () => typeof window.Matomo !== "undefined" && typeof window.Matomo.getTracker === "function";

// Désactivation du suivi Matomo
function disableMatomoTracking() {
    var _paq = (window._paq = window._paq || []);
    // 13 mois ≈ 396 jours (durée recommandée par la CNIL) = 396 × 24 = 9504 heures
    _paq.push(["optUserOut", 9504]);
}

// Réactivation du suivi Matomo
function enableMatomoTracking() {
    var _paq = (window._paq = window._paq || []);
    _paq.push(["forgetUserOptOut"]);
}

let setConsentCheckbox = function () {
    if (!window.dsfr.analytics.opt || !isMatomoReady()) {
        return;
    }

    const tracker = window.Matomo.getTracker();
    if (!tracker || typeof tracker.hasConsent !== "function") {
        return;
    }

    if (window.dsfr.analytics.opt.isDisabled && !tracker.hasConsent()) {
        document.getElementById("trackVisits").checked = false;
    } else {
        document.getElementById("trackVisits").checked = true;
    }
};

//Gestion du formulaire d'opt-out Eulerian/Matomo
if (document.getElementById("trackVisits")) {
    //si eulerian et matomo sont déjà chargés
    if (window.dsfr.analytics.opt && isMatomoReady()) {
        setConsentCheckbox();
    }
    //sinon, on attend que les deux services soient initialisés
    else {
        document.documentElement.addEventListener("dsfr.start", () => {
            setConsentCheckbox();
        });
        window.addEventListener("matomo.ready", setConsentCheckbox);
    }

    //listener "on change" de la checkbox
    document.getElementById("trackVisits").addEventListener("change", () => {
        if (document.getElementById("trackVisits").checked == false) {
            window.dsfr.analytics.opt.disable();
            disableMatomoTracking();
        } else {
            window.dsfr.analytics.opt.enable();
            enableMatomoTracking();
        }
    });
}
