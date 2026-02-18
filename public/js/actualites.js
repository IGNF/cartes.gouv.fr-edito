let href = window.location.href;

// Redirection quand on annule un tag, la page /liste n'existe pas
if (href == window.origin + "/actualites/liste") {
    window.location.replace(window.origin + "/actualites");
}

let url = new URL(href);

let parts = url.pathname.split("/actualites/");
let slug = parts[1] ?? null;

let page = url.searchParams.get("page") ?? "0";

// Mise à jour du fil d'ariane
function updateBreadcrumb(newLabel) {
    const ol = document.querySelector('.fr-breadcrumb__list');
    if (!ol) return;
    const items = Array.from(ol.children);
    let idx = items.findIndex(li => li.textContent.trim() === 'Actualités');
    if (idx === -1) {
        idx = items.findIndex(li => li.textContent.trim().includes('Actualités'));
    }
    if (idx === -1) return;

    // Remplace le segment 'Actualités' par le lien vers la page d'accueil des actualités
    items[idx].innerHTML = '<a class="fr-breadcrumb__link" href="/actualites">Actualités</a>';

    // Ajoute un nouveau segment pour la page courante
    const newLi = document.createElement('li');
    newLi.innerHTML = '<a class="fr-breadcrumb__link" aria-current="page">' + newLabel + '</a>';
    ol.appendChild(newLi);
}

// Récupération et insertion du contenu
function fetchAndInsert(path) {
    fetch(path, {
        method: "GET",
        headers: {
            "X-Requested-With": "XMLHttpRequest",
        },
    }).then(async function (res) {
        if (res.ok) {
            let result = await res.text();

            const tmp = document.createElement('div');
            tmp.innerHTML = result;

            // Modifie tous les liens absolus sortants pour ouvrir une nouvelle fenêtre
            tmp.querySelectorAll('a[href]').forEach(function (a) {
                const href = a.getAttribute('href') || '';
                if (/^https?:\/\//i.test(href)) {
                    a.setAttribute('target', '_blank');
                    let rel = a.getAttribute('rel') || '';
                    if (!/\bnoopener\b/i.test(rel)) rel = (rel + ' noopener').trim();
                    if (!/\bnoreferrer\b/i.test(rel)) rel = (rel + ' noreferrer').trim();
                    a.setAttribute('rel', rel);

                    const suffix = ' - ouvre une nouvelle fenêtre';
                    const existingTitle = a.getAttribute('title');
                    const baseTitle = existingTitle ? existingTitle.replace(suffix, '') : a.textContent.trim();
                    if (!baseTitle.endsWith(suffix)) {
                        a.setAttribute('title', baseTitle + suffix);
                    }
                }
            });

            // Retire le h1 Actualités (qui ferait doublon avec le titre réel de la page)
            result = tmp.innerHTML.replace("<h1>Actualités</h1>", "");

            // Insère le contenu
            document.getElementById("actualites-container").innerHTML = result;

            // Met à jour le fil d'ariane si le h1 n'est pas "Actualités"
            let label = null;
            const h1 = tmp.querySelector('h1');
            if (h1) label = h1.textContent.trim();

            if (label && label !== 'Actualités') {
                updateBreadcrumb(label);
            }
        } else {
            // Redirige vers la page d'accueil des actualités si le contenu n'est pas trouvé
            // => Jamais de 404 sur les actus
            // En évitant une boucle de redirection si la liste des actus est réellement indisponible
            const currentPath = window.location.pathname.replace(/\/$/, '');
            if (currentPath === '/actualites') {
                const container = document.getElementById("actualites-container");
                if (container) {
                    container.innerHTML = '<div class="fr-callout fr-callout--error">Le contenu est temporairement indisponible. Veuillez réessayer plus tard.</div>';
                }
            } else {
                window.location.replace(window.origin + "/actualites");
            }
        }
    });
}

if (slug === "" || slug === null) {
    // liste des actualités
    fetchAndInsert(window.origin + "/files/articles/list/" + page + ".html");
} else if (slug.startsWith("liste/")) {
    // page tag
    let tag = slug.replace("liste/", "");
    fetchAndInsert(window.origin + "/files/articles/list/tags/" + tag + "/" + page + ".html");
} else {
    // page article
    fetchAndInsert(window.origin + "/files/articles/" + slug + ".html");
}

