---
title: "Accessibilité"
effectiveTitle: "Accessibilité : non conforme"
layout: layouts/page.njk
showBreadcrumb: true
showTitle: true
slugOverride: accessibilite
---

<div class="fr-col-md-8">

  L’IGN s’engage à rendre ses sites Internet, intranet, extranet et ses applications mobiles accessibles conformément à l’article 47 de la loi n° 2005-102 du 11 février 2005.

  Les non-conformités énumérées ci-dessous sont en cours de correction et un nouvel audit de contrôle est planifié fin 2026.

  ## État de conformité

  Le site cartes.gouv.fr **n’est pas conforme** avec le référentiel général d’amélioration de l’accessibilité (RGAA), version 4.1.2 en raison des non-conformités mentionnées ci-dessous.

  ## Résultats des tests
  
  L’audit de conformité réalisé par **SMILE (OURI Maroua)** révèle que :

  - **46,77%** des critères du RGAA version 4.1.2 sont respectés

  ## Contenus non accessibles

  ### Non-conformités

  - De nombreuses anomalies vont pénaliser les utilisateurs en situation de handicap, naviguant ou non à l’aide de technologies d’assistance.
  - Les principales non-conformités ayant un impact significatif sur les utilisateurs concernent :
      - Images dépourvues d’attribut alt.
      - Images décoratives non correctement ignorées par les technologies d’assistance.
      - Image nécessitant une description détaillée sans description associée.
      - Cadres (`iframe`) dépourvus d’attribut title.
      - Contraste insuffisant entre certains textes, composants d’interface et leur arrière-plan.
      - Lien non fonctionnel et lien vide.
      - Certains composants d’interface riches ne respectent pas les bonnes pratiques d’accessibilité 
(structuration, navigation, interactions).
      - Certains composants d’interface ne sont pas entièrement utilisables au clavier.
      - Absence de bouton de validation sur certaines zones de filtre.
      - Messages de statut non restitués aux technologies d’assistance.
      - Intitulé de la page (`<title>`) peu pertinent sur certaines pages (formulaires, recherche, 
pagination, etc.).
      - Code de langue (lang) incorrectement défini (en sur une page en français).
      - Présence de termes en anglais dans un contenu rédigé en français. 
      - Utilisation de certaines balises HTML uniquement à des fins de présentation, au détriment de 
la sémantique.
      - La structuration des contenus (titres, sous-titres) est incorrecte ou insuffisante, rendant la 
navigation difficile avec un lecteur d’écran.
      - Structure du document non homogène sur l’ensemble des pages. 
      - Certaines informations deviennent difficilement compréhensibles lorsque les feuilles de style 
(CSS) sont désactivées.
      - Indicateur de focus clavier insuffisamment visible sur certains éléments interactifs.
      - À une largeur d’affichage de 320 px, un défilement horizontal apparaît lors de l’ouverture du 
menu.
      - En cas d’augmentation des espacements de texte, certains contenus sont tronqués.
      - Champs de formulaire dépourvus d’étiquette.
      - Intitulé de certains boutons de formulaire imprécis ou insuffisamment explicite.
      - Absence de regroupement pour certains champs identiques de formulaire.
      - Contrôle de saisie inadapté ou incomplet sur certains champs.
      - Absence d’aide à la saisie (format attendu, exemple, contraintes, etc.) sur certains champs.
      - L’attribut « autocomplete » est manquant sur un champ de saisie personnel.
      - Rôles absents ou incorrectement utilisés sur certaines régions de la page.
      - Absence des liens d’accès rapide au contenu sur le site.
      - Ordre de tabulation incohérent dans certaines zones de la page.
      - En version réduite (mobile), certaines zones de contenu sont tronquées ou mal affichées.

  #### Contenus non soumis à l’obligation d’accessibilité

  Les exemptions « contenus de tiers »

  - Composant « Statut du service »
  - Carte et fonctionnalités associées (infobulles, traçage, affichage des informations, etc.).

  ### Établissement de cette déclaration d’accessibilité

  Cette déclaration a été établie le 08/09/2026.

  ### Technologies utilisées pour la réalisation de cartes.gouv.fr

  - HTML5
  - CSS
  - Javascript
  - React

  ### Environnement de test

  Les vérifications de restitution de contenus ont été réalisées sur la base de la combinaison fournie par la base de référence du RGAA, avec les versions suivantes :

  - Agent utilisateur : Firefox
  - Technologie d’assistance : NVDA

  ### Outils pour évaluer l’accessibilité

  - Inspecteur du navigateur
  - Wave
  - Stylus
  - WCAG color contrast checker
  - Headings maps
  - web développer toolbar

  ### Pages du site ayant fait l’objet de la vérification de conformité

  1. Page Accessibilité : [https://cartes.gouv.fr/accessibilite/](/accessibilite/)
  2. Page mention légales : [https://cartes.gouv.fr/mentions-legales/](/mentions-legales/)
  3. Page plan du site : [https://cartes.gouv.fr/plan-du-site/](/plan-du-site/)
  4. Page partenaires : [https://cartes.gouv.fr/aide/fr/partenaires/](/aide/fr/partenaires/)
  5. Page faq : [https://cartes.gouv.fr/aide/fr/](/aide/fr/)
  6. Page contact : [https://cartes.gouv.fr/aide/fr/nous-ecrire/](/aide/fr/nous-ecrire/)
  7. Page lettre d’information : [https://cartes.gouv.fr/lettre-d-information/](/lettre-d-information/)
  8. Page actualités : [https://cartes.gouv.fr/actualites/](/actualites/)
  9. Page découvrir : [https://cartes.gouv.fr/decouvrir/](/decouvrir/)
  10. Page actualité : [https://cartes.gouv.fr/actualites/ma-carte-un-guichet-cartographe-du-service-public](/actualites/ma-carte-un-guichet-cartographe-du-service-public/)
  11. Page guide utilisateur : [https://cartes.gouv.fr/aide/fr/guides-utilisateur/](/aide/fr/guides-utilisateur/)
  12. Page détail guide : [https://cartes.gouv.fr/aide/fr/guides-utilisateur/visualiseur-cartographique/choisir-un-fond-de-carte/](/aide/fr/guides-utilisateur/visualiseur-cartographique/choisir-un-fond-de-carte/)
  13. Page recherche catalogue et service : [https://cartes.gouv.fr/rechercher-une-donnee/search](/rechercher-une-donnee/search)
  14. Page niveau de service : [https://cartes.gouv.fr/aide/fr/niveau-de-service/](/aide/fr/niveau-de-service/)
  15. Espace découverte > Fiches de données : [https://cartes.gouv.fr/tableau-de-bord/entrepots/122b878c-aad8-4507-87b2-465e664467d3/donnees](/tableau-de-bord/entrepots/122b878c-aad8-4507-87b2-465e664467d3/donnees)
  16. Page d’accueil - Explorer les cartes : [https://cartes.gouv.fr/explorer-les-cartes/](/explorer-les-cartes/)

  ### Retour d’information et contact

  Si vous n’arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter le responsable de cartes.gouv.fr pour être orienté vers une alternative accessible ou obtenir le contenu sous une autre forme.

  - Envoyer un message par le biais du [formulaire de contact en ligne](/aide/fr/nous-ecrire)
  - ou contacter l’IGN par courrier ou par téléphone :  
  Institut national de l’information géographique et forestière  
  73 avenue de Paris<br>94165 Saint-Mandé Cedex<br>Tél. : 01 43 98 80 00

  ## Voies de recours

  Cette procédure est à utiliser dans le cas suivant.

  Vous avez signalé au responsable du site internet un défaut d’accessibilité qui vous empêche d’accéder à un contenu ou à un des services du portail et vous n’avez pas obtenu de réponse satisfaisante.

  - Écrire un message au Défenseur des droits&nbsp;: <a href="https://formulaire.defenseurdesdroits.fr/" target="_blank" title="Saisir le Défenseur des droits - ouvre une nouvelle fenêtre" rel="noreferrer">formulaire.defenseurdesdroits.fr/</a>
  - Contacter le délégué du Défenseur des droits dans votre région&nbsp;: <a href="https://www.defenseurdesdroits.fr/saisir/delegues" target="_blank" title="Trouver un délégué du Défenseur des droits - ouvre une nouvelle fenêtre" rel="noreferrer">www.defenseurdesdroits.fr/saisir/delegues</a>
  - Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre)&nbsp;:  
  Défenseur des droits  
  Libre réponse 71120  
  75342 Paris CEDEX 07
</div>
