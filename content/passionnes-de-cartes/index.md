---
title: "Passionnés de cartes : explorez les territoires et leur histoire"
effectiveTitle: "Des cartes à contempler, pour le plaisir des yeux"
description: "Cartes IGN, Cassini, État-Major, vues aériennes et reliefs LiDAR : découvrez plus de 1 000 cartes en accès libre pour explorer les paysages, comparer les époques et révéler les secrets du territoire français."
hideNewsletterBanner: true
layout: layouts/page_usage.njk
---

{% from "components/component.njk" import component with context %}

Certaines cartes servent à se repérer. D’autres donnent envie de s’attarder.\
Observer les méandres d’une rivière, admirer le relief d’un territoire, comparer les paysages d’hier et d’aujourd’hui, ou deviner l’histoire d’un village à travers ses noms de lieux : pour les passionnés, chaque carte raconte une histoire.

Grâce à cartes.gouv.fr, vous ne consultez plus seulement des cartes, vous prenez le temps d’explorer, de vous étonner, de voyager sans bouger.

<figure role="group" class="fr-content-media" aria-label="© Halfpoint - stock.adobe.com">
    <div class="fr-content-media__img content-bleed">
        <img src="/img/page-usage/passionnes-de-cartes/aiguille-verte.jpg" alt="Aiguille verte, extrait d’une série de cartes au 1 : 10 000 de la région du Mont Blanc (IGN, 1940-1950)" eleventy:ignore/>
        <figcaption class="fr-content-media__caption fr-ml-4v">© IGN</figcaption>
    </div>
</figure>

## Voyagez sans vous déplacer

Un vallon caché, un ancien chemin, un hameau oublié, une curiosité toponymique… La carte devient un récit où chaque détail vous raconte une histoire.

Avec plus de 1 000 cartes et données en accès libre, cartes.gouv.fr vous ouvre un terrain d’exploration unique. Superposez les cartes, les époques et variez les échelles pour révéler tous les secrets du paysage :
- La richesse de Plan IGN.
- La poésie des cartes de Cassini (XVIIIe siècle) ou des cartes d’État-Major.
- La réalité des vues aériennes d’aujourd’hui et d’autrefois.
- Les reliefs sculptés en haute définition grâce aux données LiDAR.

<br>

Que vous soyez amateur d’histoire, de géographie, d’architecture, de randonnée ou simplement curieux, posez un nouveau regard sur les paysages de France.

<a href="/aide/fr/guides-utilisateur/visualiseur-cartographique/choisir-un-fond-de-carte/" class="fr-link">Guide : comment choisir un fond de carte</a>

<br>

## Remontez le temps

Et si vous compariez le même lieu… à des siècles d’écart depuis un même écran ? Sur cartes.gouv.fr, glissez d’une époque à l’autre grâce aux cartes anciennes et aux photographies historiques et observez l’évolution des villages, des forêts, des routes ou des cours d’eau.

<br>

## Créez et partagez vos coups de cœur

Vous avez déniché une curiosité géographique ? Un tracé insolite ? Personnalisez votre vue, ajoutez vos propres repères ou vos annotations textuelles en toute simplicité. Vous pouvez ensuite partager vos plus belles découvertes et vos cartes personnalisées avec d’autres passionnés.

<p>
    <a href="/aide/fr/guides-utilisateur/visualiseur-cartographique/annoter-la-carte/" class="fr-link">Guide : comment annoter la carte</a>
</p>
<p>
    <a href="/aide/fr/guides-utilisateur/visualiseur-cartographique/partager-une-carte/" class="fr-link">Guide : comment partager votre carte</a>
</p>

<br>

## Les cartes indispensables pour les passionnés

{{ component("card_list", {
    items: [
        {
            url: "/explorer-les-cartes/?c=-2.333382,47.699966&z=14&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes",
            data: {
                title: "Plan IGN",
                description: "La carte de référence pour une lecture synthétique, moderne et multi-échelle du paysage",
                image: {
                    src: "/img/page-usage/passionnes-de-cartes/vignette-plan-ign.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes/?c=4.387455,43.984552&z=9&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;0.4;1;0),GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode,Isocurve&permalink=yes",
            data: {
                title: "SCAN 25® touristique",
                description: "Une carte détaillée pour apprécier la richesse graphique (échelle 1 : 25 000)",
                image: {
                    src: "/img/page-usage/passionnes-de-cartes/vignette-scan-25.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes/?c=1.176301,47.897594&z=11&l=BNF-IGNF_GEOGRAPHICALGRIDSYSTEMS.CASSINI$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=&permalink=yes",
            data: {
                title: "Carte de Cassini",
                description: "Une carte ancienne pour voyager dans la France du XVIIIe siècle",
                image: {
                    src: "/img/page-usage/passionnes-de-cartes/vignette-cassini.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes/?c=1.176301,47.897594&z=11&l=GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=&permalink=yes",
            data: {
                title: "Carte de l’État-Major",
                description: "Une carte historique pour plonger dans la France du XIXe siècle",
                image: {
                    src: "/img/page-usage/passionnes-de-cartes/vignette-etat-major.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes/?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=Isocurve,MeasureLength,MeasureArea,MeasureAzimuth,MousePosition,ElevationPath,Drawing,Route,ReverseGeocode&permalink=yes",
            data: {
                title: "Photographies aériennes",
                description: "Une vue du ciel détaillée pour admirer le territoire (résolution jusqu’à 20 cm)",
                image: {
                    src: "/img/page-usage/passionnes-de-cartes/vignette-pva.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes/?c=-2.333382,47.699966&z=14&l=ORTHOIMAGERY.ORTHOPHOTOS.1950-1965$GEOPORTAIL:OGC:WMTS(1;1;1;0)&w=&permalink=yes",
            data: {
                title: "Photographies aériennes historiques",
                description: "Pour remonter le temps et observer les paysages tels qu’ils étaient réellement",
                image: {
                    src: "/img/page-usage/passionnes-de-cartes/vignette-scan-historique.jpg",
                    alt: ""
                }
            }
        },
        {
            url: "/explorer-les-cartes/?c=2.788475,43.483341&z=16&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0),IGNF_LIDAR-HD_MNT_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=&permalink=yes",
            data: {
                title: "Relief du terrain haute définition issu du LiDAR",
                description: "Pour révéler les détails du relief invisibles à l’œil nu",
                image: {
                    src: "/img/page-usage/passionnes-de-cartes/vignette-lidar.jpg",
                    alt: ""
                }
            }
        }
    ],
    ratio_cards: "16x9"
}) }}