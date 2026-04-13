//Récupération des alertes
const md = window.markdownit();

let params = {
    resource: "bdtopo-osrm", //bdtopo-pgr, bdtopo-valhalla ou bdtopo-osrm
    profile:"car",
    optimization: "fastest",
    start: "3.054596,44.084184",
    end: "3.02344,44.079439",
    crs: "EPSG:4326",
    getSteps: "true",
    distanceUnit: "kilometer",
    timeUnit: "second"
    //waysAttributes: "cpx_gestionnaire" //attribut utilisé uniquement pour la resource bdtopo-pgr
};

const p = new URLSearchParams();

for(let i in params) {
    p.append(i, params[i]);
}

fetch(`https://data.geopf.fr/navigation/itineraire?${p}`, {
    method: "GET",
}).then(async function(resp) {
    let result = await resp.json();
    let routes=[];
    result.portions[0].steps.forEach((element) => {
        var route = {};
        route.nom_gestionnaire = element.attributes.cpx_gestionnaire?element.attributes.cpx_gestionnaire:""; //ne fonctionne qu'avec la ressource bdtopopgr
        route.gestionnaire = administratorFinder(route.nom_gestionnaire); //ne fonctionne qu'avec la ressource bdtopopgr
        route.numero = element.attributes.cpx_numero?element.attributes.cpx_numero:"";
        route.numero = element.attributes.name?element.attributes.name.cpx_numero:element.attributes.cpx_numero;
        route.longueur = element.distance;
        routes.push(route);
    });

    let feature = gppRouteToFeature(result);
    feature.properties.route = routes;
    return feature
    
}).then((feature) => {
    return isInDep(feature, "12");
})

let isInDep = function(feature, dep) {
    let cql_filter = "code_insee='" + dep + "' AND CONTAINS(geometrie, " + geoJSONToWKT(feature.geometry) + ")";
    let params = {
        service: "WFS",
        version: "2.0.0",
        request: "GetFeature",
        srsName: "CRS:84",
        outputFormat: "application/json",
        typeName: "ADMINEXPRESS-COG.LATEST:departement"
    };

    const p = new URLSearchParams();

    for(let i in params) {
        p.append(i, params[i]);
    }
    
    fetch(`https://data.geopf.fr/wfs/ows?${p}`,
         {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "cql_filter=" + cql_filter
        })
        .then(async function(resp) {
        let result = await resp.json();
        if(result.features.length) {
            feature.properties.in_dept = true;
        } else {
            feature.properties.in_dept = false;
        }
        console.log(feature);
    })
}

let geoJSONToWKT = function(geom) {
    let wkt = "LINESTRING (";
    for(let i in geom.coordinates) {
        wkt += geom.coordinates[i][1] + " " + geom.coordinates[i][0] + ",";
    }
    wkt = wkt.replace(/,$/, ")");
    return wkt;
};

let gppRouteToFeature = function(gppRoute) {
    let duration = gppRoute.duration;
    let hours = Math.floor(duration/3600);
    duration %= 3600;
    let minutes = Math.floor(duration/60);
    const seconds = Math.floor(duration % 60);

    return {
        'type': 'Feature',
        'properties': {
            distance: gppRoute.distance + 'Km',
            duration: hours + ':' + minutes + ':' + seconds
        },
        'geometry': gppRoute.geometry
    }
};

let administratorFinder = function(value) {
    const administrators = {
    "01": "Ain",
    "02": "Aisne",
    "03": "Allier",
    "04": "Alpes-de-Haute-Provence",
    "05": "Hautes-Alpes",
    "06": "Alpes-Maritimes",
    "07": "Ardèche",
    "08": "Ardennes",
    "09": "Ariège",
    "10": "Aube",
    "11": "Aude",
    "12": "Aveyron",
    "13": "Bouches-du-Rhône",
    "14": "Calvados",
    "15": "Cantal",
    "16": "Charente",
    "17": "Charente-Maritime",
    "18": "Cher",
    "19": "Corrèze",
    "20": "Corse",
    "2A": "Corse-du-Sud",
    "2B": "Haute-Corse",
    "21": "Côte-d'Or",
    "22": "Côtes-d'Armor",
    "23": "Creuse",
    "24": "Dordogne",
    "25": "Doubs",
    "26": "Drôme",
    "27": "Eure",
    "28": "Eure-et-Loir",
    "29": "Finistère",
    "30": "Gard",
    "31": "Haute-Garonne",
    "32": "Gers",
    "33": "Gironde",
    "34": "Hérault",
    "35": "Ille-et-Vilaine",
    "36": "Indre",
    "37": "Indre-et-Loire",
    "38": "Isère",
    "39": "Jura",
    "40": "Landes",
    "41": "Loir-et-Cher",
    "42": "Loire",
    "43": "Haute-Loire",
    "44": "Loire-Atlantique",
    "45": "Loiret",
    "46": "Lot",
    "47": "Lot-et-Garonne",
    "48": "Lozère",
    "49": "Maine-et-Loire",
    "50": "Manche",
    "51": "Marne",
    "52": "Haute-Marne",
    "53": "Mayenne",
    "54": "Meurthe-et-Moselle",
    "55": "Meuse",
    "56": "Morbihan",
    "57": "Moselle",
    "58": "Nièvre",
    "59": "Nord",
    "60": "Oise",
    "61": "Orne",
    "62": "Pas-de-Calais",
    "63": "Puy-de-Dôme",
    "64": "Pyrénées-Atlantiques",
    "65": "Hautes-Pyrénées",
    "66": "Pyrénées-Orientales",
    "67": "Bas-Rhin",
    "68": "Haut-Rhin",
    "69": "Rhône",
    "70": "Haute-Saône",
    "71": "Saône-et-Loire",
    "72": "Sarthe",
    "73": "Savoie",
    "74": "Haute-Savoie",
    "75": "Paris",
    "76": "Seine-Maritime",
    "77": "Seine-et-Marne",
    "78": "Yvelines",
    "79": "Deux-Sèvres",
    "80": "Somme",
    "81": "Tarn",
    "82": "Tarn-et-Garonne",
    "83": "Var",
    "84": "Vaucluse",
    "85": "Vendée",
    "86": "Vienne",
    "87": "Haute-Vienne",
    "88": "Vosges",
    "89": "Yonne",
    "90": "Territoire de Belfort",
    "91": "Essonne",
    "92": "Hauts-de-Seine",
    "93": "Seine-Saint-Denis",
    "94": "Val-de-Marne",
    "95": "Val-d'Oise",
    "971": "Guadeloupe",
    "972": "Collectivité territoriale de Martinique",
    "973": "Guyane",
    "974": "Réunion",
    "975": "St-Pierre-et-Miquelon",
    "976": "Mayotte",
    "R04": "Région Réunion",
    "R94": "Collectivité territoriale de Corse",
    "CCI": "CCI du Havre",
    "GAM": "Grenoble Alpes Métropole",
    "MLY": "Métropole de Lyon",
    "MNCA": "Métropole Nice Côte d'Azur",
    "DN":  "DIR Nord",
    "DIF": "DIR Île-de-France",
    "DE":  "DIR Est",
    "DCE": "DIR Centre Est",
    "DM":  "DIR Méditerranée",
    "DMC": "DIR Massif Central",
    "DSO": "DIR Sud Ouest",
    "DA":  "DIR Atlantique",
    "DCO": "DIR Centre Ouest",
    "DO":  "DIR Ouest",
    "DNO": "DIR Nord Ouest",
    "ADE": "ADELAC",
    "ALB": "ALBEA",
    "ALC": "ALICORNE",
    "ALI": "ALIS",
    "ALN": "A'LIENOR",
    "APR": "APRR",
    "ARC": "ARCOUR",
    "ARE": "AREA",
    "ASF": "ASF",
    "ATL": "ATLANDES",
    "ATM": "ATMB",
    "CEV": "CEVM",
    "COF": "COFIROUTE",
    "ESC": "ESCOTA",
    "SAN": "SANEF",
    "SAP": "SAPN",
    "SFT": "SFTRF",
    "AND": "Principauté d'Andorre",
    "B": "Belgique",
    "CH": "Suisse",
    "D": "Allemagne",
    "E": "Espagne",
    "GB": "Royaume-Uni",
    "I": "Italie",
    "MC": "Principauté de Monaco"
  };

  const index = Object.values(administrators).indexOf(value);
  if (index > -1) {
    return Object.keys(administrators)[index];
  }

  return ''; /* Code gestionnaire inconnu. */
}


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

    // severity peut valoir "info" | "warning" | "alert"
    // les classes DSFR sont "fr-alert--info" | "fr-alert--warning" | "fr-alert--error"
    let severity = alert.severity === "alert" ? "error": alert.severity;
    div.classList.add("fr-alert--" + severity);

    let titre = document.createElement("h3");
    titre.classList.add("fr-alert__title");
    titre.innerText = alert.title?alert.title:"";
    div.append(titre);

    if (alert.description) {
        let desc = document.createElement("p");
        desc.innerText = alert.description;
        div.append(desc);
    }

    if (alert.details) {
        let details = document.createElement("div");
        details.innerHTML = md.render(alert.details);
        div.append(details);
    }

    document.getElementById("service-alert").append(div);
};