---
title: Cartes.gouv.fr pour les randonneurs
hideNewsletterBanner: true
layout: layouts/page_usage.njk
---

{% from "components/component.njk" import component with context %}

Un sentier peu visible, une pente plus raide que prévu, une source pour faire une pause ou un panorama à ne pas manquer… Quand on part en randonnée, chaque détail compte.

Avec cartes.gouv.fr, explorez votre itinéraire avant même d’enfiler vos chaussures de randonnée. Accédez **gratuitement à la carte SCAN 25® touristique** pour planifier et sécuriser vos aventures.

<a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes" class="fr-btn fr-mb-6v">Préparez votre randonnée</a>

<figure role="group" class="fr-content-media" aria-label="© Tomfry - stock.adobe.com">
    <div class="fr-content-media__img content-bleed">
        <img src="/img/page-usage/randonneurs/AdobeStock_68558548.jpg" alt="" eleventy:ignore/>
        <figcaption class="fr-content-media__caption fr-ml-4v">© Tomfry - stock.adobe.com</figcaption>
    </div>
</figure>

## Trouvez votre prochaine randonnée sur cartes.gouv.fr

{{ component("accordionsgroup", {
    items: [
    {
        title: "Rechercher le parcours parfait partout en France",
        content: '
            <p>
                Quand on prépare une randonnée, la carte topographique est un indispensable pour repérer avec précision les sentiers de randonnée balisés (GR®, itinéraires du Club Vosgien, etc.) mais aussi le relief, les cours d’eau, les réserves naturelles ou encore les points d’intérêt touristique.
            </p>
            <p>
                Sur cartes.gouv.fr, consultez la <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">carte SCAN 25® touristique</a> pour choisir un parcours adapté à vos envies et à votre niveau de pratique. La <a href="https://cartes.gouv.fr/explorer-les-cartes?c=4.232604,44.399625&z=8&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0),POI.TOURISM_INFORMATION$GEOPORTAIL:OGC:WMS(3;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">carte des offices du tourisme</a> accessible dans le catalogue de cartes vous permet de compléter vos recherches par des recommandations locales.
            </p>
            <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/choisir-un-fond-de-carte/" class="fr-link">Guide : comment choisir un fond de carte</a>
        '
    },
    {
        title: "Trouver un parcours selon votre temps disponible",
        content: '
            <p>
                Vous n’avez que deux heures ou un rayon de 10 km maximum pour votre sortie dominicale ? Utilisez notre outil « Zone selon temps de trajet » pour rechercher un parcours autour de vous ou d’une adresse précise. Entrez votre point de départ, fixez vos limites, et la carte affiche instantanément le périmètre souhaité.
            </p>
            <p>
                Superposez la carte <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">SCAN 25® touristique</a>, <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">Plan IGN</a> ou les <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">photographies aériennes</a> (ou tout autre fond de plan de votre choix) et ajustez la transparence pour un rendu personnalisé.
            </p>
            <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/calculer-une-isochrone/" class="fr-link">Guide : comment calculer une isochrone</a>
        '
    },
    {
        title: "Importer une trace GPS en quelques clics",
        content: '
            <p>
                Vous disposez déjà d’un parcours sous la forme d’une trace au format GPX ou KML ? Importez-la très simplement sur cartes.gouv.fr. Vous pourrez ainsi la superposer avec les fonds de cartes et la croiser avec n’importe quelle donnée de votre choix.
            </p>
            <p>
                Où trouver l’outil ? Rendez-vous dans le menu « Accéder à d’autres outils » situé en haut à gauche de votre écran pour télécharger votre tracé.
            </p>
            <img class="fr-responsive-img" srcset="/img/page-usage/randonneurs/importer-une-trace.jpg" alt=""/>
        '
    }]
}) }}

<br>

## Partez l’esprit léger : préparez et sécurisez votre sortie

{{ component("accordionsgroup", {
    items: [
    {
        title: "Tracer et mesurer votre chemin",
        content: '
            <p>
                Point de départ, étapes intermédiaires, arrivée : l’outil « Itinéraire » trace le meilleur chemin sur la carte. Vous préférez tracer vous-même un parcours personnalisé ? L’outil « Mesurer une distance » vous donne le kilométrage exact, en plaçant directement des points sur la carte.
            </p>
            <p>
                Consultez la <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">carte SCAN 25® touristique</a>, <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">Plan IGN</a>, <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">les photographies aériennes</a> ou tout autre fond de plan de votre choix.
            </p>
            <p>
                <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/calculer-un-itineraire/" class="fr-link">Guide : comment calculer un itinéraire</a>
            </p>
            <p>
                <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/utiliser-les-outils-de-mesure/" class="fr-link">Guide : comment utiliser les outils de mesure</a>
            </p>
        '
    },
    {
        title: "Évaluer la difficulté de votre parcours",
        content: '
            <p>
                Le dénivelé est l’un des premiers critères pour évaluer la difficulté d’un itinéraire et le temps de parcours. Visualiser le profil altimétrique d’un itinéraire avant de partir permet d’ajuster ses ambitions à sa forme du jour et à celle de ses compagnons de route, notamment s’il s’agit d’enfants ou de marcheurs débutants. L’outil "Profil altimétrique" offre un aperçu de la distance totale, du dénivelé positif et négatif, de la pente moyenne et de la pente maximum.
            </p>
            <p>
                Utilisez la <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">carte SCAN 25® touristique</a> ou <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">Plan IGN</a> pour tracer l’itinéraire, la couche « Courbes de niveau » pour n’afficher que le détail du relief ou pour la superposer sur les cartes, les <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">photographies aériennes</a>.
            </p>
            <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/calculer-un-profil-altimetrique/" class="fr-link">Guide : comment calculer un profil altimétrique</a>
        '
    },
    {
        title: "Repérer parking, toilettes et aires de pique-nique",
        content: '
            <p>
                Partir du bon pied, c’est aussi savoir où garer la voiture et où faire une pause. La <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">carte SCAN 25® touristique</a> vous permet de choisir le point de départ de votre randonnée en fonction des commodités et équipements à proximité de votre parcours : pratique quand on part en famille ou en groupe.
            </p>
        '
    },
    {
        title: "Localiser les points d’eau ",
        content: '
            <p>
                Pour déjeuner, remplir la gourde ou tremper les pieds dans l’eau, pensez à consulter la <a href="https://cartes.gouv.fr/explorer-les-cartes?c=4.387455,43.984552&z=9&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;0.4;1;0),GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(2;1;0;0),HYDROGRAPHY.BCAE.2025$GEOPORTAIL:OGC:WMTS(3;1;1;0)&w=MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve&permalink=yes">carte des cours d’eau</a>. Superposez-la à <a href="https://cartes.gouv.fr/explorer-les-cartes?c=4.387455,43.984552&z=9&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;0.4;1;0),GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(2;1;0;0)&w=MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve&permalink=yes">Plan IGN</a> ou <a href="https://cartes.gouv.fr/explorer-les-cartes?c=4.387455,43.984552&z=9&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;0.4;1;0),GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve&permalink=yes">SCAN 25® touristique</a>.
            </p>
        '
    },
    {
        title: "Sécuriser vos randonnées en montagne",
        content: '
            <p>
                Vous êtes adeptes de ski de randonnée ou des raquettes à neige ? Sécurisez votre parcours en consultant la <a href="https://cartes.gouv.fr/explorer-les-cartes?c=6.363633,45.321934&z=11&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0),TRACES.RANDO.HIVERNALE$GEOPORTAIL:OGC:WMTS(2;1;1;0),GEOGRAPHICALGRIDSYSTEMS.SLOPES.MOUNTAIN$GEOPORTAIL:OGC:WMTS(3;1;0;0)&w=MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength&permalink=yes">carte des traces de randonnée hivernale</a> éditées par la Fondation Petzl. Ces traces ont été conçues pour limiter l’exposition aux avalanches et aux passages sensibles exigeant, par exemple, le port de crampons ou un encadrement pour les débutants. Elles tiennent aussi compte de certaines contraintes environnementales propres au milieu montagnard. 
            </p>
            <p>
                Explorez également la <a href="https://cartes.gouv.fr/explorer-les-cartes?c=6.364752,45.332201&z=11&l=TRACES.RANDO.HIVERNALE$GEOPORTAIL:OGC:WMTS(2;1;0;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0),GEOGRAPHICALGRIDSYSTEMS.SLOPES.MOUNTAIN$GEOPORTAIL:OGC:WMTS(3;1;1;0)&w=MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength&permalink=yes">carte des pentes</a> à plus de 30° pour visualiser les secteurs les plus raides. Ces cartes sont superposables au <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">Plan IGN</a> ou <a href="https://cartes.gouv.fr/explorer-les-cartes?c=4.387455,43.984552&z=9&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;0.4;1;0),GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve&permalink=yes">SCAN 25® touristique</a>.
            </p>
            <p>
                Attention : les traces hivernales ne sont pas des chemins ou sentiers visibles. Recouvertes de neige par définition, elles ne sont en général praticables qu’en raquettes ou à ski et disparaissent à la belle saison. Les emprunter suppose de disposer du matériel adapté. Vous restez seul responsable de vos choix et comportements sur la neige.
            </p>
        '
    },
    {
        title: "Garder le cap, même sans réseau ni batterie",
        content: '
            <p>
                Pour s’assurer une progression en toute sécurité sur un parcours qui peut comporter des zones blanches coupées du réseau 4G, il est prudent de s’équiper d’un parcours imprimé. En quelques clics, vous pouvez l’imprimer sur cartes.gouv.fr et la partager très simplement avec vos compagnons de route.
            </p>
            <p>
                <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/imprimer-une-carte/" class="fr-link">Guide : comment imprimer votre carte</a>
            </p>
            <p>
                <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/partager-une-carte/" class="fr-link">Guide : comment partager votre carte</a>
            </p>
        '
    },
    {
        title: "Anticiper les obstacles",
        content: '
            <p>
                Un doute sur l’accessibilité d’un chemin ? Vérifiez la présence d’obstacles et l’état de la végétation en comparant la carte <a href="https://cartes.gouv.fr/explorer-les-cartes?c=4.387455,43.984552&z=9&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;0.4;1;0),GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve&permalink=yes">SCAN 25® touristique</a> et les <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes">photographies aériennes.</a>
            </p>
        '
    },
    {
        title: "Personnaliser votre carte",
        content: '
            <p>
                Créez votre compte gratuitement et utilisez l’outil « Annoter la carte » pour dessiner des points, des lignes, des surfaces ou du texte directement sur votre carte. Vous pouvez ainsi ajouter des informations personnalisées ou des précisions utiles pour la préparation de votre parcours ou pendant votre sortie.
            </p>
            <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/annoter-la-carte/" class="fr-link">Guide : comment annoter la carte</a>
        '
    }]
}) }}

<br>

## Enrichissez votre découverte du territoire

{{ component("accordionsgroup", {
    items: [
    {
        title: "Observer les évolutions des lieux explorés",
        content: '
            <p>
                Que diriez-vous de découvrir à quoi ressemblait le paysage que vous vous apprêtez à sillonner au siècle dernier ? Les cartes et photographies aériennes anciennes vous en donnent un aperçu. En les superposant aux fonds récents, vous pourrez observer comment le territoire parcouru a évolué au fil du temps. Un coup d’œil à la Carte de Cassini ou de l’état-major indique par ailleurs comment les lieux étaient figurés au 17e et au 19e siècles.
            </p>
            <p>
                Consultez Plan IGN, les photographies aériennes historiques 1950-1965, <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-1.982445,47.275209&z=12&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;0.4;1;0),ORTHOIMAGERY.ORTHOPHOTOS.1950-1965$GEOPORTAIL:OGC:WMTS(2;1;0;0),GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN50.1950$GEOPORTAIL:OGC:WMTS(3;1;1;0),BNF-IGNF_GEOGRAPHICALGRIDSYSTEMS.CASSINI$GEOPORTAIL:OGC:WMTS(4;1;1;0),GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40$GEOPORTAIL:OGC:WMTS(5;1;0;0)&w=MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve&permalink=yes">Carte de Cassini</a>, <a href="https://cartes.gouv.fr/explorer-les-cartes?c=-1.982445,47.275209&z=12&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;0.4;1;0),ORTHOIMAGERY.ORTHOPHOTOS.1950-1965$GEOPORTAIL:OGC:WMTS(2;1;0;0),GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN50.1950$GEOPORTAIL:OGC:WMTS(3;1;1;0),BNF-IGNF_GEOGRAPHICALGRIDSYSTEMS.CASSINI$GEOPORTAIL:OGC:WMTS(4;1;0;0),GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40$GEOPORTAIL:OGC:WMTS(5;1;1;0)&w=MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve&permalink=yes">Carte de l’état-major (1820-1866)</a>, SCAN historique (1950).
            </p>
        '
    },
    {
        title: "Découvrir la faune et la flore sur votre parcours",
        content: '
            <p>
                Avant de partir, renseignez-vous sur les richesses naturelles à découvrir sur place et les mesures de protection de la biodiversité locale. Cartes.gouv.fr recense par exemple l’ensemble des zones protégées au titre des <a href="https://cartes.gouv.fr/explorer-les-cartes?c=3.520135,49.346784&z=9&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0),Patrinat_ZNIEFF1$GEOPORTAIL:OGC:WMTS(2;1;1;0),Patrinat_ZNIEFF1_MER$GEOPORTAIL:OGC:WMTS(3;1;1;0),Patrinat_ZNIEFF2$GEOPORTAIL:OGC:WMTS(4;1;1;0),Patrinat_ZNIEFF2_MER$GEOPORTAIL:OGC:WMTS(5;1;1;0),TOURBIERES_ZONES-HUMIDES.BCAE$GEOPORTAIL:OGC:WMTS(6;1;0;0),FORETS.PUBLIQUES$GEOPORTAIL:OGC:WMTS(7;1;0;0)&w=MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength&permalink=yes">Zones naturelles d’intérêt écologique faunistique et floristique</a> (ZNIEFF) identifiées par le Museum national d’histoire naturelle.
            </p>
            <p>
                Consultez aussi la <a href="https://cartes.gouv.fr/explorer-les-cartes?c=1.070034,49.379839&z=11&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0),Patrinat_ZNIEFF1$GEOPORTAIL:OGC:WMTS(2;1;0;0),Patrinat_ZNIEFF1_MER$GEOPORTAIL:OGC:WMTS(3;1;0;0),Patrinat_ZNIEFF2$GEOPORTAIL:OGC:WMTS(4;1;0;0),Patrinat_ZNIEFF2_MER$GEOPORTAIL:OGC:WMTS(5;1;1;0),TOURBIERES_ZONES-HUMIDES.BCAE$GEOPORTAIL:OGC:WMTS(6;1;0;0),FORETS.PUBLIQUES$GEOPORTAIL:OGC:WMTS(7;1;1;0)&w=MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength&permalink=yes">carte des forêts publiques domaniales et non domaniales</a> gérées par l’Office national des forêts (ONF) ou le Masque forêt qui représente toutes les surfaces forestières en France.
            </p>
        '
    }]
}) }}

<br>

## Les cartes et données incontournables

{{ component("card_list", {
    items: [
        {
            url: "https://cartes.gouv.fr/explorer-les-cartes?c=4.387455,43.984552&z=9&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;0.4;1;0),GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve&permalink=yes",
            data: {
                title: "SCAN 25® touristique",
                description: "La carte de référence pour s’orienter sur les sentiers balisés (échelle 1 : 25 000)",
                image: {
                    src: "/img/page-usage/randonneurs/scan_25-touristique.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes",
            data: {
                title: "Photographies aériennes",
                description: "Pour vérifier le terrain en vrai vu du ciel (résolution : 20 cm)",
                image: {
                    src: "/img/page-usage/randonneurs/photo-aerienne.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "https://cartes.gouv.fr/explorer-les-cartes?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes",
            data: {
                title: "Plan IGN",
                description: "Pour explorer le territoire grâce à une carte claire, précise et régulièrement mise à jour",
                image: {
                    src: "/img/page-usage/plan-ign.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "https://cartes.gouv.fr/explorer-les-cartes?c=5.998506,45.435902&z=12&l=ELEVATION.CONTOUR.LINE$GEOPORTAIL:OGC:WMTS(2;1;1;0),GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.3;1;0)&w=MeasureAzimuth,MousePosition,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength,ElevationPath,MeasureArea&permalink=yes",
            data: {
                title: "Courbes de niveau",
                description: "Pour visualiser le relief précis et anticiper l’effort",
                image: {
                    src: "/img/page-usage/randonneurs/courbes-niveau-vignette.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "https://cartes.gouv.fr/explorer-les-cartes?c=6.363633,45.321934&z=11&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0),TRACES.RANDO.HIVERNALE$GEOPORTAIL:OGC:WMTS(2;1;1;0),GEOGRAPHICALGRIDSYSTEMS.SLOPES.MOUNTAIN$GEOPORTAIL:OGC:WMTS(3;1;0;0)&w=MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength&permalink=yes",
            data: {
                title: "Carte des traces de randonnée hivernale",
                description: "Pour sécuriser vos randonnées à ski ou en raquettes",
                image: {
                    src: "/img/page-usage/randonneurs/traces_rando-hivernale.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "https://cartes.gouv.fr/explorer-les-cartes?c=6.364752,45.332201&z=11&l=TRACES.RANDO.HIVERNALE$GEOPORTAIL:OGC:WMTS(2;1;0;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0),GEOGRAPHICALGRIDSYSTEMS.SLOPES.MOUNTAIN$GEOPORTAIL:OGC:WMTS(3;1;1;0)&w=MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve,MeasureLength&permalink=yes",
            data: {
                title: "Carte des pentes",
                description: "Pour identifier les sentiers les plus raides (> 30°)",
                image: {
                    src: "/img/page-usage/randonneurs/carte-pentes.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "https://cartes.gouv.fr/explorer-les-cartes?c=4.232604,44.399625&z=8&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;0.99;1;0),GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(2;1;1;0),POI.TOURISM_INFORMATION$GEOPORTAIL:OGC:WMS(3;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes",
            data: {
                title: "Carte des offices de tourisme",
                description: "Pour localiser les points d’information touristique",
                image: {
                    src: "/img/page-usage/randonneurs/offices-tourisme.jpg",
                    alt: ""
                }
            }
        }
    ],
    ratio_cards: "16x9"
}) }}