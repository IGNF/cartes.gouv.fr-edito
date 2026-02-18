let href = window.location.href;

//Redirection quand on annule un tag
if(href == window.origin + "/actualites/liste") {
    window.location.replace(window.origin + "/actualites");
}

//page article
if(!href.match(/actualites\$/) && href.match(/actualites\/.*/)) {
    let slug = href.match(/actualites\/.*/)[0].replace("actualites/","");
    if(!slug.match(/\?page=/) && !href.match(/actualites\/liste\//)) {
        fetch(window.origin + "/files/articles/" + slug + ".html", {
            method: "GET",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
            },
        }).then(async function (res) {
            if (res.ok) {
                let result = await res.text();
                document.getElementById("actualites-container").innerHTML = result;
            }
        });
                

    }
} 

//page tag
else if(href.match(/actualites\/liste\//)) {
    let tag = href.match(/\/liste\/.*/)[0].replace("/liste/", "");
    let page = "0";

    if(window.location.href.match(/page=[0-9]+/)) {
        page = window.location.href.match(/page=[0-9]+/)[0].replace("page=","");
    }

    fetch(window.origin + "/files/articles/list/tags/" + tag + "/" + page + ".html", {
        method: "GET",
        headers: {
            "X-Requested-With": "XMLHttpRequest",
        },
    }).then(async function (res) {
        if (res.ok) {
            let result = await res.text();
            result = result.replace("<h1>Actualités</h1>", ""); 
            document.getElementById("actualites-container").innerHTML = result;
        }
    });
}
//page racine actualités
else {
    let page = "0";

    if(window.location.href.match(/page=[0-9]+/)) {
        page = window.location.href.match(/page=[0-9]+/)[0].replace("page=","");
    }

    fetch(window.origin + "/files/articles/list/" + page + ".html", {
        method: "GET",
        headers: {
            "X-Requested-With": "XMLHttpRequest",
        },
    }).then(async function (res) {
        if (res.ok) {
            let result = await res.text();
            result = result.replace("<h1>Actualités</h1>", "");
            document.getElementById("actualites-container").innerHTML = result;
        }
    });
}

