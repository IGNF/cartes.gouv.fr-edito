---
title: "Immobilier : préparez vos projets avec cartes.gouv.fr"
effectiveTitle: "Préparez votre projet immobilier simplement avec cartes.gouv.fr"
description: "Préparez votre projet immobilier en consultant les cartes, le cadastre et les données utiles sur cartes.gouv.fr."
hideNewsletterBanner: true
layout: layouts/page_usage.njk
---

{% from "components/component.njk" import component with context %}

Que vous soyez déjà propriétaire, à la recherche d’un terrain ou en pleine réflexion pour un projet de construction, cartes.gouv.fr vous accompagne à chaque étape pour préparer votre projet sereinement.

En quelques clics, explorez les lieux, visualisez et mesurez votre parcelle, et découvrez les informations utiles avant de vous lancer.

<a href="/explorer-les-cartes/?c=4.066897,48.301893&z=18&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,MeasureArea,ElevationPath&permalink=yes" class="fr-btn fr-mb-6v">Explorez votre (future) propriété</a>

<figure role="group" class="fr-content-media" aria-label="© Halfpoint - stock.adobe.com">
    <div class="fr-content-media__img content-bleed">
        <img src="/img/page-usage/proprietaires/proprietaire-preparer-projet-immobilier.jpg" alt="" eleventy:ignore/>
        <figcaption class="fr-content-media__caption fr-ml-4v">© Halfpoint - stock.adobe.com</figcaption>
    </div>
</figure>

## Trouvez un bien, explorez son environnement et projetez-vous

{{ component("accordionsgroup", {
    items: [
    {
        title: "Situer précisément un terrain, une maison ou un immeuble",
        content: '
            <p>
                Le <a href="/explorer-les-cartes/?c=4.077005%2C48.297315&z=17&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2%24GEOPORTAIL%3AOGC%3AWMTS%281%3B1%3B1%3B0%29&w=Isocurve%2CMeasureLength%2CMeasureArea%2CMeasureAzimuth%2CMousePosition%2CElevationPath%2CDrawing%2CRoute%2CReverseGeocode">Plan IGN</a> offre une cartographie nationale homogène, mise à jour en continu, jusqu’à une échelle d’environ 1 : 1 000. Adresse, lieu-dit, commune : cette carte vous permet de localiser simplement le bien qui vous intéresse. En zoomant sur la carte, les parcelles cadastrales et leurs références apparaissent automatiquement.
            </p>
            <p>
                <a href="/explorer-les-cartes/?c=4.098135,48.301044&z=12&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0),LIMITES_ADMINISTRATIVES_EXPRESS.LATEST$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,MeasureArea,ElevationPath&permalink=yes" class="fr-link">Consultez la carte des limites administratives</a>
            </p>
            <p>
                <a href="/aide/fr/guides-utilisateur/visualiseur-cartographique/choisir-un-fond-de-carte/" class="fr-link">Guide : comment choisir un fond de carte</a>
            </p>
        '
    },
    {
        title: "Prendre de la hauteur pour explorer les alentours",
        content: '
            <p>
                Avant d’acheter ou de lancer des travaux, il est essentiel de comprendre ce qui entoure votre terrain ou votre logement. Pour vérifier la nature des terrains voisins, repérer les axes routiers, la présence de zones boisées ou inondables, activez les <a href="/explorer-les-cartes/?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">photographies aériennes</a> et profitez d’une vue d’ensemble pour appréhender le contexte paysager d’un bien.
            </p>
        '
    },
    {
        title: "Visiter votre futur quartier sans vous déplacer",
        content: '
            <p>
                Promenez-vous virtuellement dans un quartier comme si vous y étiez, grâce aux vues immersives Panoramax. Depuis la rue, vous pouvez observer l’environnement immédiat de votre bien, évaluer l’ambiance du quartier ou repérer des éléments de contexte difficiles à percevoir sur une carte.
            </p>
        '
    },
    {
        title: "Repérer les services à proximité",
        content: '
            <p>
                À combien de temps se trouve l’école ou la boulangerie ? Utilisez l’outil « Zone selon temps de trajet » pour afficher d’un coup d’œil tout ce qui est accessible à moins de 5, 10 ou 20 minutes à pied ou en voiture. Idéal pour valider l’emplacement de votre futur chez-vous !
            </p>
            <p>
                Superposez le <a href="/explorer-les-cartes/?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">Plan IGN</a>, les <a href="/explorer-les-cartes/?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">photographies aériennes</a> (ou tout autre fond de plan de votre choix) et ajustez la transparence pour un rendu personnalisé.
            </p>
            <a href="/aide/fr/guides-utilisateur/visualiseur-cartographique/calculer-une-isochrone/" class="fr-link">Guide : comment calculer une isochrone</a>
        '
    },
    {
        title: "Estimer vos trajets du quotidien",
        content: '
            <p>
                Combien de temps pour rejoindre votre travail ou la gare la plus proche ? Calculez facilement votre itinéraire idéal ou mesurez la distance exacte entre votre domicile et votre travail, à pied ou en voiture, grâce aux outils de mesure de cartes.gouv.fr.
            </p>
            <p>
                L’outil Itinéraire permet de trouver le meilleur chemin entre deux ou plusieurs points et de le tracer sur la carte. Vous pouvez aussi mesurer directement une distance à vol d’oiseau ou le long d’un tracé personnalisé.
            </p>
            <p>
                Superposez le <a href="/explorer-les-cartes/?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">Plan IGN</a>, les <a href="/explorer-les-cartes/?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">photographies aériennes</a> (ou tout autre fond de plan de votre choix) et ajustez la transparence pour un rendu personnalisé.
            </p>
            <p>
                <a href="/aide/fr/guides-utilisateur/visualiseur-cartographique/calculer-un-itineraire/" class="fr-link">Guide : comment calculer un itinéraire</a>
            </p>
            <p>
                <a href="/aide/fr/guides-utilisateur/visualiseur-cartographique/utiliser-les-outils-de-mesure/" class="fr-link">Guide : comment utiliser les outils de mesure</a>
            </p>
        '
    },
    {
        title: "Schématiser votre projet immobilier directement sur la carte",
        content: '
            <p>
                Vous imaginez une extension, une clôture, ou un réaménagement ? Créez votre compte gratuitement sur cartes.gouv.fr puis dessinez points, lignes, surfaces ou texte directement sur la carte de votre choix grâce à l’outil « Annoter la carte ». Idéal pour préparer un dossier, visualiser une idée d’aménagement ou annoter une parcelle avant une réunion ou une visite. Vous pouvez ensuite sauvegarder vos annotations, les imprimer ou les partager avec vos proches ou votre artisan.
            </p>
            <p>
                <a href="/aide/fr/guides-utilisateur/visualiseur-cartographique/annoter-la-carte/" class="fr-link">Guide : comment annoter la carte</a>
            </p>
            <p>
                <a href="/aide/fr/guides-utilisateur/visualiseur-cartographique/imprimer-une-carte/" class="fr-link">Guide : comment imprimer votre carte</a>
            </p>
            <p>
                <a href="/aide/fr/guides-utilisateur/visualiseur-cartographique/partager-une-carte/" class="fr-link">Guide : comment partager votre carte</a>
            </p>
        '
    }]
}) }}

<br>

## Visualisez et mesurez votre parcelle cadastrale

{{ component("accordionsgroup", {
    items: [
    {
        title: "Vérifier où s’arrête précisément votre terrain",
        content: '
            <p>
                Lorsque l’on possède un terrain ou que l’on prépare un achat, connaître les limites exactes d’une parcelle est souvent indispensable.
            </p>
            <p>
                Sur cartes.gouv.fr, vous disposez d’un accès libre au plan cadastral. Vous pouvez localiser facilement votre parcelle en effectuant une recherche par adresse ou en saisissant sa référence cadastrale directement dans l’outil de recherche. Les limites s’affichent en superposition sur le fond de carte de votre choix - <a href="/explorer-les-cartes/?c=4.092880,48.286371&z=18&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;0;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(3;1;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,MeasureArea,ElevationPath&permalink=yes">Plan IGN</a>, <a href="/explorer-les-cartes/?c=4.092880,48.286371&z=18&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=&permalink=yes">photographies aériennes</a> ou autre - pour une lecture claire et contextualisée.
            </p>
            <img class="fr-responsive-img" srcset="/img/page-usage/proprietaires/parcelles-localiser.jpg" alt=""/>
        '
    },
    {
        title: "Mesurer votre parcelle vous-même en quelques clics",
        content: '
            <p>
                Pour évaluer la valeur de votre terrain, initier un projet de construction ou instruire un dossier d’urbanisme, vous pouvez avoir besoin de mesurer la longueur d’une façade ou la superficie exacte d’une parcelle. Les outils de mesure intégrés à cartes.gouv.fr vous permettent de le faire directement sur la carte, simplement et sans logiciel spécialisé.
            </p>
            <p>
                Superposez le <a href="/explorer-les-cartes/?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">Plan IGN</a>, les <a href="/explorer-les-cartes/?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">photographies aériennes</a> (ou n’importe quel fond de carte de votre choix), et les <a href="/explorer-les-cartes/?c=4.066740,48.301908&z=18&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,MeasureArea,ElevationPath&permalink=yes">cartes des parcelles cadastrales</a>.
            </p>
            <a href="/aide/fr/guides-utilisateur/visualiseur-cartographique/utiliser-les-outils-de-mesure/" class="fr-link">Guide : comment utiliser les outils de mesure</a>
        '
    }]
}) }}

<br>

## Anticipez les contraintes de votre terrain avant de vous lancer

{{ component("accordionsgroup", {
    items: [
    {
        title: "Comprendre la nature de votre terrain",
        content: '
            <p>
                Avec cartes.gouv.fr, explorez les caractéristiques de votre parcelle et ses particularités : nature du sol, relief, zones protégées ou réglementations pouvant influencer vos travaux ou votre achat. 
            </p>
            <p>
                En un clic, superposez différentes cartes à votre parcelle pour obtenir une vision plus complète de votre terrain :
                <ul>
                    <li>identifiez le type de couverture du sol et son usage (urbain ou agricole par exemple) avec la <a href="/explorer-les-cartes/?c=3.748558,46.800584&z=6&l=PLAN.IGN$GEOPORTAIL:GPP:TMS(1;1;1;0;standard),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(2;1;1;0),OCSGE.COUVERTURE.2021-2023$GEOPORTAIL:OGC:WMTS(3;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">carte d’occupation du sol</a>,</li>
                    <li>visualisez le relief, évaluez par exemple les risques d’érosion ou d’écoulement de l’eau grâce au <a href="/explorer-les-cartes/?c=1.640247,45.007830&z=17&l=IGNF_LIDAR-HD_MNT_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW$GEOPORTAIL:OGC:WMTS(2;1;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(3;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">modèle 3D du relief</a>,</li>
                    <li>vérifiez si votre terrain touche à des espaces naturels sensibles, pour éviter que votre demande de permis de construire ne soit refusée, en consultant les <a href="/explorer-les-cartes/?c=3.276054,46.869280&z=8&l=PLAN.IGN$GEOPORTAIL:GPP:TMS(1;1;1;0;standard),Patrinat_ZNIEFF1$GEOPORTAIL:OGC:WMTS(2;1;1;0),Patrinat_ZNIEFF2$GEOPORTAIL:OGC:WMTS(3;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">zones naturelles d’intérêt écologique, faunistique et floristique</a> ou les <a href="/explorer-les-cartes/?c=-1.002202,44.644121&z=11&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(2;1;1;0),Patrinat_Conservatoire_littoral$GEOPORTAIL:OGC:WMS(3;1;1;0)&w=MeasureArea,MeasureLength,ReverseGeocode,ElevationPath&permalink=yes">zones de protection du Conservatoire du littoral</a> qui limitent parfois les aménagements.</li>
                </ul>
            </p>
            <p>
                Ces informations vous donnent un premier aperçu utile pour préparer votre projet et vos échanges avec un notaire, un géomètre ou un service d’urbanisme.
            </p>
        '
    },
    {
        title: "Vérifier si votre terrain est concerné par une obligation de débroussaillement",
        content: '
            <p>
                Si votre terrain est proche d’une zone sensible aux incendies, vous avez peut-être l’obligation légale de débroussailler ses abords pour protéger votre propriété. 
            </p>
            <p>
                Sur cartes.gouv.fr, la <a href="/explorer-les-cartes/?c=4.756415,44.077688&z=8&l=DEBROUSSAILLEMENT$GEOPORTAIL:OGC:WMTS(3;1;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,ElevationPath,MeasureArea&permalink=yes">carte relative au débroussaillement</a> vous permet de vérifier rapidement si votre terrain est concerné - que vous soyez déjà propriétaire ou non. Une information utile à anticiper avant tout projet d’aménagement ou de construction sur une parcelle en zone sensible.
            </p>
        '
    }]
}) }}

<br>

## Les cartes indispensables pour les propriétaires

{{ component("card_list", {
    items: [
        {
            url: "/explorer-les-cartes/?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes",
            data: {
                title: "Plan IGN",
                description: "Une carte claire et précise pour localiser un bien et comprendre son environnement",
                image: {
                    src: "/img/page-usage/vignette-plan-ign.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes/?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes",
            data: {
                title: "Photographies aériennes",
                description: "Une vue du ciel réaliste pour visualiser votre terrain et ses alentours (résolution : 20 cm)",
                image: {
                    src: "/img/page-usage/vignette-photo-aerienne.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes/?c=4.066740,48.301908&z=18&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,MeasureArea,ElevationPath&permalink=yes",
            data: {
                title: "Parcelles cadastrales",
                description: "Le plan officiel pour vérifier précisément les limites de votre terrain",
                image: {
                    src: "/img/page-usage/vignette-cadastre.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes/?c=4.098135,48.301044&z=12&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0),LIMITES_ADMINISTRATIVES_EXPRESS.LATEST$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,MeasureArea,ElevationPath&permalink=yes",
            data: {
                title: "La carte des limites administratives",
                description: "Pour repérer les limites administratives autour de votre bien",
                image: {
                    src: "/img/page-usage/proprietaires/vignette-admin.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes/?c=4.756415,44.077688&z=8&l=DEBROUSSAILLEMENT$GEOPORTAIL:OGC:WMTS(3;1;1;0),ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,ElevationPath,MeasureArea&permalink=yes",
            data: {
                title: "Zonage informatif des obligations légales de débroussaillement (OLD)",
                description: "Pour vérifier si vous devez débroussailler votre terrain pour le protéger des incendies",
                image: {
                    src: "/img/page-usage/vignette-old.jpg",
                    alt: ""
                }
            }
        }
    ],
    ratio_cards: "16x9"
}) }}