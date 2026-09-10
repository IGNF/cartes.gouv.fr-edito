//initialise le formulaire d'opt-out Eulerian

if(document.getElementById("trackVisits-eulerian")) {
  document.documentElement.addEventListener("dsfr.start", () => {
    if(window.dsfr.analytics.opt.isDisabled) {
    document.getElementById("trackVisits-eulerian").checked = false;
    } else {
      document.getElementById("trackVisits-eulerian").checked = true;
    }

    document.getElementById("trackVisits-eulerian").addEventListener("change", ()=>{ window.dsfr.analytics.opt.toggle(); });
  });
}


