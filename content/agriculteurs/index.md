---
title: Gérez votre exploitation agricole avec précision grâce à cartes.gouv.fr
hideNewsletterBanner: true
layout: layouts/page_usage.njk
---

{% from "components/component.njk" import component with context %}

Vous souhaitez suivre vos parcelles, préparer vos déclarations PAC ou adapter vos pratiques agricoles ? Grâce à cartes.gouv.fr, pas besoin d’être expert en cartographie, vous visualisez simplement toutes les informations utiles pour gérer votre exploitation. 

En quelques clics, croisez vos parcelles avec des données agricoles, environnementales et réglementaires pour mieux comprendre votre territoire, anticiper les contraintes et appuyer vos décisions. 

<a href="/explorer-les-cartes?c=0.843813,49.494093&z=9&l=LANDUSE.AGRICULTURE.LATEST$GEOPORTAIL:OGC:WMTS(2;1;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes" class="fr-btn fr-mb-6v">Explorez votre parcelle</a>

<figure role="group" class="fr-content-media" aria-label="© Tomfry - stock.adobe.com">
    <div class="fr-content-media__img content-bleed">
        <img src="/img/page-usage/agriculteurs/cartes-gouv-agriculteurs.jpeg" alt="" eleventy:ignore/>
        <figcaption class="fr-content-media__caption fr-ml-4v">© Tomfry - stock.adobe.com</figcaption>
    </div>
</figure>

## Repérez les informations essentielles pour vos parcelles

{{ component("accordionsgroup", {
    items: [
    {
        title: "Vérifier vos obligations PAC sans vous perdre dans les règles",
        content: '
            <p>
                En tant qu’exploitant agricole, il est indispensable de connaître précisément les règles applicables à vos parcelles. En quelques clics sur cartes.gouv.fr, vous localisez les zonages réglementaires (Bonnes Conditions Agricoles et Environnementales (BCAE)) indispensables pour bénéficier des aides de la PAC.
            </p>
            <p>
                Sélectionnez <a href="/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">Plan IGN</a> ou les <a href="/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">photographies aériennes</a> en fond de carte et superposez :
                <ul>
                    <li>les <a href="/explorer-les-cartes?c=-0.656512,46.308121&z=13&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(3;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(1;1;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0),HYDROGRAPHY.BCAE.2026$GEOPORTAIL:OGC:WMTS(4;1;1;0),TOURBIERES_ZONES-HUMIDES.BCAE$GEOPORTAIL:OGC:WMTS(5;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">cours d’eau (BCAE 4)</a>, pour repérer les bandes tampons à respecter autour des cours d’eau et plans d’eau concernés ;</li>
                    <li>les <a href="/explorer-les-cartes?c=-0.651220,46.313121&z=13&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(3;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(1;1;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0),HYDROGRAPHY.BCAE.2026$GEOPORTAIL:OGC:WMTS(4;1;0;0),PRAIRIES.SENSIBLES.BCAE$GEOPORTAIL:OGC:WMTS(5;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">prairies sensibles (BCAE 9)</a>, pour identifier les prairies permanentes situées en zone Natura 2000, où le labour et la conversion sont interdits ;  </li>
                    <li>les <a href="/explorer-les-cartes?c=-0.638906,46.304419&z=13&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(3;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(1;1;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0),HYDROGRAPHY.BCAE.2026$GEOPORTAIL:OGC:WMTS(4;1;0;0),TOURBIERES_ZONES-HUMIDES.BCAE$GEOPORTAIL:OGC:WMTS(5;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">zones humides et tourbières (BCAE 2)</a>, pour localiser les surfaces concernées par des mesures de protection spécifiques.  </li>
                </ul>
            </p>
            <p>En croisant ces informations avec le plan cadastral ou le <a href="/explorer-les-cartes?c=0.843813,49.494093&z=9&l=LANDUSE.AGRICULTURE.LATEST$GEOPORTAIL:OGC:WMTS(2;1;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">registre parcellaire graphique (RPG)</a>, vous visualisez, parcelle par parcelle, les règles qui s’appliquent à votre exploitation.</p>
            <p>
                <a href="/aide/fr/guides-utilisateur/visualiseur-cartographique/choisir-un-fond-de-carte/" class="fr-link">Guide : comment choisir un fond de carte</a>
            </p>
            <p>
                <a href="/aide/fr/guides-utilisateur/visualiseur-cartographique/utiliser-les-outils-de-mesure/" class="fr-link">Guide : comment utiliser les outils de mesure</a>
            </p>
        '
    },
    {
        title: "Vérifier vos obligations de débroussaillement pour limiter les incendies",
        content: '
            <p>
                Dans les zones exposées au risque incendie, certaines parcelles sont soumises à des obligations légales de débroussaillement (OLD).
            </p>
            <p>
                Consultez la <a href="/explorer-les-cartes?c=4.756415,44.077688&z=8&l=DEBROUSSAILLEMENT$GEOPORTAIL:OGC:WMTS(3;1;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,ElevationPath,MeasureArea&permalink=yes">carte dédiée à cette obligation sur cartes.gouv.fr</a> pour identifier si votre exploitation est concernée, et anticiper les actions nécessaires pour sécuriser vos parcelles.
            </p>
        '
    },
    {
        title: "Localiser et valoriser vos haies bocagères",
        content: '
            <p>
                Les haies bocagères jouent un rôle essentiel pour la biodiversité, la protection des sols et la structuration du paysage agricole. Les haies sont également un atout pour vos aides.
            </p>
            <p>
                Sur cartes.gouv.fr, vous pouvez les localiser précisément en croisant :
                <ul>
                    <li><a href="/explorer-les-cartes?c=1.973017,47.029540&z=13&l=CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(2;1;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),HAIES.BOCAGES$GEOPORTAIL:OGC:WMS(3;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">les données issues du suivi des bocages</a>,</li>
                    <li><a href="/explorer-les-cartes?c=0.843813,49.494093&z=9&l=LANDUSE.AGRICULTURE.LATEST$GEOPORTAIL:OGC:WMTS(2;1;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),OCSGE.COUVERTURE.2021-2023$GEOPORTAIL:OGC:WMTS(3;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">la carte d’occupation du sol,</a></li>
                    <li><a href="/explorer-les-cartes?c=1.597386,46.934727&z=11&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(2;1;1;0),LANDUSE.AGRICULTURE2024$GEOPORTAIL:OGC:WMTS(3;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">les parcelles cadastrales</a> ou le <a href="/explorer-les-cartes?c=0.843813,49.494093&z=9&l=LANDUSE.AGRICULTURE.LATEST$GEOPORTAIL:OGC:WMTS(2;1;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">registre parcellaire graphique (RPG)</a>,</li>
                    <li>et les <a href="/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">photographies aériennes</a> pour affiner l’analyse.</li>
                </ul>
            </p>
        '
    },
    {
        title: "Analyser vos espaces forestiers et zones boisées",
        content: '
            <p>
                Les surfaces boisées influencent directement la biodiversité, la gestion des risques (incendie, chute d’arbres), la protection des sols et l’organisation de vos parcelles.
            </p>
            <p>
                Avec cartes.gouv.fr, localisez ces espaces précisément grâce à ces sources :
                <ul>
                    <li>Le <a href="/explorer-les-cartes?c=0.843813,49.494093&z=9&l=LANDUSE.AGRICULTURE.LATEST$GEOPORTAIL:OGC:WMTS(2;1;1;0),IGNF_MASQUE-FORET.2021-2023$GEOPORTAIL:OGC:WMTS(3;1;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">Masque Forêt</a> pour repérer rapidement les surfaces boisées.</li>
                    <li>La <a href="/explorer-les-cartes?c=1.953416,45.644441&z=12&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;0.53;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),LANDCOVER.FORESTINVENTORY.V2$GEOPORTAIL:OGC:WMTS(3;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">BD Forêt</a> pour connaitre les types de forêts et les essences.</li>
                    <li>La <a href="/explorer-les-cartes?c=1.940610,47.024140&z=6&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),ONF_FORETS-PUBLIQUES_2021$GEOPORTAIL:OGC:WMS(3;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">carte des forêts publiques (ONF)</a> pour identifier les limites des forêts publiques qui ne seraient pas visibles sur le terrain.</li>
                </ul>
            </p>
        '
    }]
}) }}

<br>

## Simplifiez vos démarches administratives

{{ component("accordionsgroup", {
    items: [
    {
        title: "Suivre vos déclarations PAC grâce au RPG ",
        content: '
            <p>
                Sur <a href="/explorer-les-cartes/">cartes.gouv.fr</a>, vous accédez librement au <a href="/explorer-les-cartes?c=0.843813,49.494093&z=9&l=LANDUSE.AGRICULTURE.LATEST$GEOPORTAIL:OGC:WMTS(2;1;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">Registre parcellaire graphique (RPG)</a> qui vous permet de localiser vos parcelles agricoles, consulter vos cultures déclarées et suivre leurs évolutions dans le temps en consultant les anciennes cartes du RPG.  
                Vous pouvez croiser ces informations avec le <a href="/explorer-les-cartes?c=1.955405,47.035754&z=16&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(2;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(3;1;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">plan cadastral</a>, les cartes topographiques, les <a href="/explorer-les-cartes?c=1.973017,47.029540&z=13&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(3;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(2;1;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">photographies aériennes</a> récentes ou anciennes, ou encore des données environnementales.
            </p>
            <p>
                Grâce aux outils intégrés, vous pouvez :

                <ul>
                    <li>vérifier et ajuster les contours de vos parcelles,</li>
                    <li>mesurer précisément surfaces et périmètres,</li>
                    <li>annoter des éléments du paysage (haies, mares, bosquets…) directement sur la carte.</li>
                </ul>
            </p>
            <p>Résultat : vous fiabilisez vos déclarations PAC et suivez vos évolutions facilement.</p>
            <p>
                <a href="/rechercher-une-donnee/dataset/IGNF_RPG" class="fr-link">En savoir plus sur le Registre parcellaire graphique</a>
            </p>
            <p>
                <a href="/aide/fr/guides-utilisateur/visualiseur-cartographique/annoter-la-carte/" class="fr-link">Guide : comment annoter la carte</a>
            </p>
        '
    },
    {
        title: "Identifier vos surfaces valorisables (IAE)",
        content: '
            <p>
                Certaines composantes du paysage agricole peuvent contribuer à vos engagements environnementaux. Visualisez immédiatement les parcelles reconnues comme <a href="/explorer-les-cartes?c=-0.330126,45.346612&z=13&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(3;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(1;1;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0),IGNF_RPG_PARCELLES-ELIGIBLES-IAE$GEOPORTAIL:OGC:WMTS(4;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">infrastructures agroécologiques (IAE)</a>, dans le cadre de l’écorégime ou de la BCAE 8.
            </p>
            <p>
                Ces informations vous permettent d’optimiser votre stratégie de déclaration PAC et de valoriser les éléments favorables à la biodiversité présents sur votre exploitation.
            </p>
        '
    }]
}) }}

<br>

## Les cartes indispensables pour votre exploitation

{{ component("card_list", {
    items: [
        {
            url: "/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes",
            data: {
                title: "Plan IGN",
                description: "Une carte claire et précise pour localiser votre exploitation et comprendre son environnement.",
                image: {
                    src: "/img/page-usage/plan-ign.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes",
            data: {
                title: "Photographies aériennes",
                description: "Une vue du ciel très détaillée pour visualiser finement vos parcelles et leurs évolutions (résolution jusqu’à 20 cm).",
                image: {
                    src: "/img/page-usage//vignette-photo-aerienne.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes?c=4.066740,48.301908&z=18&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,MeasureArea,ElevationPath&permalink=yes",
            data: {
                title: "Parcelles cadastrales",
                description: "Le référentiel officiel pour identifier précisément les limites de votre exploitation.",
                image: {
                    src: "/img/page-usage/vignette_cadastre.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes?c=0.843813,49.494093&z=9&l=LANDUSE.AGRICULTURE.LATEST$GEOPORTAIL:OGC:WMTS(2;1;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes",
            data: {
                title: "Le Registre parcellaire graphique (RPG)",
                description: "La référence pour identifier les parcelles agricoles et suivre vos aides de la PAC.",
                image: {
                    src: "/img/page-usage/agriculteurs/vignette-RPG.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes?c=-0.656512,46.308121&z=13&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(3;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(1;1;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0),HYDROGRAPHY.BCAE.2026$GEOPORTAIL:OGC:WMTS(4;1;0;0),PRAIRIES.SENSIBLES.BCAE$GEOPORTAIL:OGC:WMTS(5;1;1;0),TOURBIERES_ZONES-HUMIDES.BCAE$GEOPORTAIL:OGC:WMTS(6;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes",
            data: {
                title: "Zonages BCAE",
                description: "Des informations réglementaires pour identifier précisément les contraintes environnementales applicables à vos parcelles.",
                image: {
                    src: "/img/page-usage/agriculteurs/BCAE.png",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes?c=4.756415,44.077688&z=8&l=DEBROUSSAILLEMENT$GEOPORTAIL:OGC:WMTS(3;1;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,ElevationPath,MeasureArea&permalink=yes",
            data: {
                title: "Zonage informatif des obligations légales de débroussaillement (OLD)",
                description: "Pour vérifier rapidement vos obligations face au risque incendie.",
                image: {
                    src: "/img/page-usage/vignette_old.jpg",
                    alt: ""
                }
            }
        }
    ],
    ratio_cards: "16x9"
}) }}