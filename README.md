# cartes.gouv.fr-edito

Ce dépôt constitue un site statique associé à [cartes.gouv.fr](https://cartes.gouv.fr/) et aux services de la Géoplateforme.

Il contient des pages éditoriales décrivant les services proposés sur cartes.gouv.fr, le plan du site, des mentions légales (accessibilité, conditions d'utilisation, données personnelles...)...

Ces pages étaient originellement gérées dans le dépôt principal [IGNF/cartes.gouv.fr](https://github.com/IGNF/cartes.gouv.fr), dont le front est en React JS. Elles ont été déplacées dans ce dépôt pour : réduire la latence de leur affichage, simplifier leur mise à jour et améliorer leur indexation par les moteurs de recherche.

L'intégralité des pages n'est pas statique :
- les actualités dépendent d'un endpoint servant les contenus html à injecter
- les alertes sur la page `/niveau-de-service/` dépendent d'un fichier JSON déposé dans un espace annexe de la Géoplateforme
- le header réagit au fait que l'utilisateur est connecté ou non à la Géoplateforme en utilisant un workflow openid-connect avec [keycloak/keycloak-js](https://github.com/keycloak/keycloak-js)

Les pages sont sur la base des templates de [codegouvfr/eleventy-dsfr](https://github.com/codegouvfr/eleventy-dsfr) et sur le générateur de site statique [Eleventy](https://www.11ty.dev/), de la même façon que l'[aide de cartes.gouv.fr](https://github.com/IGNF/cartes.gouv.fr-documentation).

## Lancer le projet en local

```sh
npm install
npm start
```

## Licence

Le dépôt est publié sous licence MIT pour le code et sous licence Etalab 2.0 pour les autres contenus.
