---
title: Préparez votre projet immobilier simplement avec cartes.gouv.fr
hideNewsletterBanner: true
layout: layouts/page_usage.njk
---

{% from "components/component.njk" import component with context %}

Que vous soyez déjà propriétaire, à la recherche d’un terrain ou en pleine réflexion pour un projet de construction, cartes.gouv.fr vous accompagne à chaque étape pour préparer votre projet sereinement.

En quelques clics, explorez les lieux, visualisez et mesurez votre parcelle, et découvrez les informations utiles avant de vous lancer.

<a href="https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton" class="fr-btn fr-mb-6v">Explorez votre (future) propriété</a>

<div class="content-bleed fr-mb-14v">
    <img src="/img/proprietaires/proprietaire-preparer-projet-immobilier.jpeg" eleventy:ignore>
    <figcaption class="fr-content-media__caption fr-ml-4v">© Halfpoint - stock.adobe.com</figcaption>
</div>

## Trouvez un bien, explorez son environnement et projetez-vous

{{ component("accordionsgroup", {
    items: [
    {
        title: "Situer précisément un terrain, une maison ou un immeuble",
        content: '
            <div>
                <p>
                    <a href="https://cartes.gouv.fr/explorer-les-cartes/?c=4.077005%2C48.297315&z=17&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2%24GEOPORTAIL%3AOGC%3AWMTS%281%3B1%3B1%3B0%29&w=Isocurve%2CMeasureLength%2CMeasureArea%2CMeasureAzimuth%2CMousePosition%2CElevationPath%2CDrawing%2CRoute%2CReverseGeocode">Plan IGN</a> offre une cartographie nationale homogène, mise à jour en continu, jusqu’à une échelle d’environ 1 : 1000. Adresse, lieu-dit, commune : cette carte vous permet de localiser simplement le bien qui vous intéresse. En zoomant sur la carte, les parcelles cadastrales et leurs références apparaissent automatiquement.
                </p>
                <p>
                    <a href="https://cartes.gouv.fr/explorer-les-cartes?c=4.098135,48.301044&z=12&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0),LIMITES_ADMINISTRATIVES_EXPRESS.LATEST$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,MeasureArea,ElevationPath&permalink=yes" class="fr-link">Consultez la carte des limites administratives</a>
                </p>
                <p>
                    <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/choisir-un-fond-de-carte/" class="fr-link">Guide : comment choisir un fond de carte</a>
                </p>
            </div>
        '
    },
    {
        title: "Prendre de la hauteur pour explorer les alentours",
        content: '
            <div>
                <p>
                    Avant d’acheter ou de lancer des travaux, il est essentiel de comprendre ce qui entoure votre terrain ou votre logement. Pour vérifier la nature des terrains voisins, repérer les axes routiers, la présence de zones boisées ou inondables, activez les <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">photographies aériennes</a> et profitez d’une vue d’ensemble pour appréhender le contexte paysager d’un bien.
                </p>
            </div>
        '
    },
    {
        title: "Visiter votre futur quartier sans vous déplacer",
        content: '
            <div>
                <p>
                    Promenez-vous virtuellement dans un quartier comme si vous y étiez, grâce aux vues immersives Panoramax. Depuis la rue, vous pouvez observer l’environnement immédiat de votre bien, évaluer l’ambiance du quartier ou repérer des éléments de contexte difficiles à percevoir sur une carte.
                </p>
            </div>
        '
    },
    {
        title: "Repérer les services à proximité",
        content: '
            <div>
                <p>
                    À combien de temps se trouve l’école ou la boulangerie ? Utilisez l’outil "Zone selon temps de trajet" pour afficher d’un coup d’œil tout ce qui est accessible à moins de 5, 10 ou 20 minutes à pied ou en voiture. Idéal pour valider l’emplacement de votre futur chez-vous !
                </p>
                <p>
                    Superposez <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">Plan IGN</a>, les <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">photographies aériennes</a> (ou tout autre fond de plan de votre choix) et ajustez la transparence pour un rendu personnalisé.
                </p>
                <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/calculer-une-isochrone/" class="fr-link">Guide : comment calculer une isochrone</a>
            </div>
        '
    },
    {
        title: "Estimer vos trajets du quotidien",
        content: '
            <div>
                <p>
                    Combien de temps pour rejoindre votre travail ou la gare la plus proche ? Calculez facilement votre itinéraire idéal ou mesurez la distance exacte entre votre domicile et votre travail, à pied ou en voiture, grâce aux outils de mesure cartes.gouv.fr.
                </p>
                <p>
                    L’outil Itinéraire permet de trouver le meilleur chemin entre deux ou plusieurs points et de le tracer sur la carte. Vous pouvez aussi mesurer directement une distance à vol d’oiseau ou le long d’un tracé personnalisé. 
                </p>
                <p>
                    Superposez <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">Plan IGN</a>, les <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">photographies aériennes</a> (ou tout autre fond de plan de votre choix) et ajustez la transparence pour un rendu personnalisé.
                </p>
                <p>
                    <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/calculer-un-itineraire/" class="fr-link">Guide : comment calculer un itinéraire</a>
                </p>
                <p>
                    <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/utiliser-les-outils-de-mesure/" class="fr-link">Guide : comment utiliser les outils de mesure</a>
                </p>
            </div>
        '
    },
    {
        title: "Schématiser votre projet immobilier directement sur la carte",
        content: '
            <div>
                <p>
                    Vous imaginez une extension, une clôture, ou un réaménagement ? Créez votre compte gratuitement sur cartes.gouv.fr puis dessinez points, lignes, surfaces ou texte directement sur la carte de votre choix grâce à l’outil « Annoter la carte ». Idéal pour préparer un dossier, visualiser une idée d’aménagement ou annoter une parcelle avant une réunion ou une visite. Vous pouvez ensuite sauvegarder vos annotations, les imprimer ou les partager avec vos proches ou votre artisan.
                </p>
                <p>
                    <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/annoter-la-carte/" class="fr-link">Guide : comment annoter la carte</a>
                </p>
                <p>
                    <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/imprimer-une-carte/" class="fr-link">Guide : comment imprimer votre carte</a>
                </p>
                <p>
                    <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/partager-une-carte/" class="fr-link">Guide : comment partager votre carte</a>
                </p>
            </div>
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
            <div>
                <p>
                    Lorsque l’on possède un terrain ou que l’on prépare un achat, connaître les limites exactes d’une parcelle est souvent indispensable.
                </p>
                <p>
                    Sur cartes.gouv.fr, vous disposez d’un accès libre au plan cadastral. Vous pouvez localiser facilement votre parcelle en effectuant une recherche par adresse ou en saisissant sa référence cadastrale directement dans l’outil de recherche. Les limites s’affichent en superposition sur le fond de carte de votre choix - <a href="https://cartes.gouv.fr/explorer-les-cartes?c=4.092880,48.286371&z=18&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;0;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(3;1;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,MeasureArea,ElevationPath&permalink=yes">Plan IGN</a>, <a href="https://cartes.gouv.fr/explorer-les-cartes?c=4.092880,48.286371&z=18&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,MeasureArea,ElevationPath&permalink=yes">Photographies aériennes</a> ou autre - pour une lecture claire et contextualisée.
                </p>
                <img class="fr-responsive-img" srcset="/img/proprietaires/parcelles-localiser.png"/>
            </div>
        '
    },
    {
        title: "Mesurer votre parcelle vous-même en quelques clics",
        content: '
            <div>
                <p>
                    Pour évaluer la valeur de votre terrain, initier un projet de construction ou instruire un dossier d’urbanisme, vous pouvez avoir besoin de mesurer la longueur d’une façade ou la superficie exacte d’une parcelle. Les outils de mesure intégrés à cartes.gouv.fr vous permettent de le faire directement sur la carte, simplement et sans logiciel spécialisé.
                </p>
                <p>
                    Superposez <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">Plan IGN</a>, les <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">photographies aériennes</a> (ou n’importe quel fond de carte de votre choix), et les <a href="https://cartes.gouv.fr/explorer-les-cartes?c=4.066740,48.301908&z=18&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0),CADASTRALPARCELS.PARCELLAIRE_EXPRESS$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,MeasureArea,ElevationPath&permalink=yes">cartes des parcelles cadastrales</a>.
                </p>
                <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/utiliser-les-outils-de-mesure/" class="fr-link">Guide : comment utiliser les outils de mesure</a>
            </div>
        '
    }]
}) }}

<br>

## Anticipez les contraintes de votre terrain avant de vous lancer