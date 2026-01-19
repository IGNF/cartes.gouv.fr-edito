//Récupération des alertes
fetch("https://data.geopf.fr/annexes/cartes.gouv.fr-config/public/alerts.json", { method: "GET" }).then(async function (res) {
//fetch("https://gpf-annex-qua.priv.geopf.fr/annexes/cartes.gouv.fr-config/public/alerts.json", { method: "GET" }).then(async function (res) {
    let result = await res.json();
    if(!result.length) {
        document.getElementById("service-alert").innerHTML = "<p>Aucune alerte en cours.</p>"
    } else {
        document.getElementById("service-alert").innerHTML = "";
        for (let i in result) {
            if (result[i].visibility.serviceLevel) {
                createAlertHTML(result[i]);
            }
        }
    }
});

let stopLoader = function() {
    document.getElementById("loader").style.display = "none";
};

let createAlertHTML = function(alert) {
    let div = document.createElement("div");
    div.classList.add("fr-alert");
    div.classList.add("fr-alert--" + alert.severity);
    let titre = document.createElement("h3");
    titre.classList.add("fr-alert__title");
    titre.innerText = alert.title?alert.title:"";
    let desc = document.createElement("p");
    desc.innerText = alert.description?alert.description:"";
    div.append(titre);
    div.append(desc);
    document.getElementById("service-alert").append(div);
};