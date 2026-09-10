/*
 * Fonction d'initialisation de la checkbox d'opt-out
 */

let setConsentCheckbox = function() {
  
  if(!window.dsfr.analytics.opt || !Matomo) { //Si il y a un problème de chargement des tracker, on ne fait rien
    return;
  }
  if(window.dsfr.analytics.opt.isDisabled && !Matomo.getTracker().hasConsent()) {
      document.getElementById("trackVisits").checked = false;
      } else {
        document.getElementById("trackVisits").checked = true;
      }
};

//Gestion du formulaire d'opt-out Eulerian/Matomo
if(document.getElementById("trackVisits")) {
  //si eulerian et matomo sont déjà chargés
  if(window.dsfr.analytics.opt && Matomo) {
    setConsentCheckbox();
  } 
  //sinon, on attend l'event signalant la mise en route d'eulerian (normalement Matomo se charge plus rapidement)
  else {
    document.documentElement.addEventListener("dsfr.start", () => {
      setConsentCheckbox();
    });
  }

  //listener "on change" de la checkbox
  document.getElementById("trackVisits").addEventListener("change", ()=>{ 
      if(document.getElementById("trackVisits").checked == false) {
        window.dsfr.analytics.opt.disable();
        disableMatomoTracking();
      } else {
        window.dsfr.analytics.opt.enable();
        enableMatomoTracking();
      }
     });
}


