import type { Module } from './schema';

/** The five engine modules, in DESIGN.md's order. */
export const modules: Module[] = [
  {
    id: 'universal-index',
    name: 'Index universel',
    summary: 'Une identité par élément, liée entre les langues',
    meta: {
      title: 'Index universel : chaque élément est enregistré une seule fois',
      description:
        'L’index universel de REZICS donne une identité unique à chaque œuvre, logiciel et créateur. Les noms dans chaque langue, les éditions, les crédits et les relations y sont rattachés.',
    },
    hero: {
      headline: 'Chaque élément est enregistré une seule fois.',
      lede: 'Chaque œuvre, logiciel, personne et organisation a une identité dans un graphe partagé. Les noms dans chaque langue, les éditions, les crédits et les relations y sont rattachés. Chaque communauté et chaque site consultent les mêmes données.',
    },
    points: [
      {
        title: 'Comprendre sans lire la langue d’origine',
        body: 'Les données conservent leur langue d’origine et s’affichent dans la vôtre. Recherchez une œuvre par son titre traduit, son alias ou sa prononciation. Sans traduction disponible, l’interface l’indique au lieu d’en inventer une.',
      },
      {
        title: 'Des éditions bien distinctes',
        body: 'Chaque édition imprimée, traduction, omnibus, édition régionale ou publication sur une plateforme a sa propre fiche. Les fiches décrivent le contenu réellement publié. Une traduction publiée plus tard a sa propre fiche, liée à sa source.',
      },
      {
        title: 'Crédits et relations',
        body: 'Les personnes et les organisations sont créditées selon leur rôle. Adaptations, suites, séries et dépendances ont une direction et une source. Un nom identique ne suffit pas à confondre deux éléments.',
      },
      {
        title: 'Des filtres complets',
        body: 'Combinez les champs disponibles pour filtrer les résultats. Le nombre affiché est exact ou indiqué comme minimum, et tous les résultats sont accessibles. Enregistrez vos critères dans une vue pour la suivre ensuite.',
      },
      {
        title: 'Corrections et fusions',
        body: 'Les doublons sont traités au moyen d’une proposition de fusion étayée. Prévisualisez les notes, les données de Bibliothèque et les faits Wiki concernés. Les anciennes adresses restent valides et une fusion peut être annulée.',
      },
    ],
    statement: 'Une correction dans n’importe quelle langue met à jour toutes les pages qui affichent cette donnée.',
    usedBy: ['books', 'anime', 'visual-novels', 'software'],
  },
  {
    id: 'community',
    name: 'Communauté',
    summary: 'Communautés, discussions, notes et listes',
    meta: {
      title: 'Communauté : communautés, discussions, notes et listes',
      description:
        'Sur REZICS, une communauté rassemble des personnes autour d’une histoire, d’une langue ou d’une idée. Discussions, notes et listes sont liées aux œuvres. Votre identité et votre réputation vous suivent d’une communauté à l’autre.',
    },
    hero: {
      headline: 'Discussions, notes et listes sont liées aux œuvres.',
      lede: 'Une communauté rassemble des personnes autour d’une histoire, d’une langue ou d’une idée. Ses membres discutent, notent et créent des listes autour des œuvres. Une personne conserve sa Bibliothèque, ses œuvres et sa réputation dans toutes les communautés.',
    },
    points: [
      {
        title: 'Communauté',
        body: 'Chaque communauté a ses membres, ses rôles et ses règles, que l’on peut rédiger dans toutes les langues utilisées. Elle appartient aussi à ses membres : son propriétaire ne peut pas la fermer ou la supprimer à sa guise.',
      },
      {
        title: 'Suivre et rejoindre sont deux choses différentes',
        body: 'Suivre une communauté ne demande pas son accord. La rejoindre donne le statut de membre et le droit de participer. Chaque option a ses propres réglages de notification : toutes, sélectionnées ou aucune.',
      },
      {
        title: 'Une note précise son objet',
        body: 'Chaque note précise la question et l’objet évalués. La note d’un épisode n’entre pas dans celle de la saison, et celle d’une traduction ne change pas celle de l’histoire.',
      },
      {
        title: 'Les listes portent sur les œuvres',
        body: 'Une liste rassemble des œuvres, et non des titres mentionnés dans des publications. Livres, anime et jeux peuvent figurer ensemble ; triez-les, ajoutez des notes et exportez la liste.',
      },
      {
        title: 'Votre identité vous appartient',
        body: 'Votre Bibliothèque, vos listes, vos œuvres et votre réputation sont rattachées à la même identité, dans toutes les communautés. Les autres peuvent vous suivre comme ils suivent une communauté.',
      },
    ],
    statement: 'Une communauté appartient à ses membres. Chaque personne garde son identité.',
    usedBy: ['anime', 'manga', 'games', 'visual-novels'],
  },
  {
    id: 'zones',
    name: 'Zones',
    summary: 'Chaque communauté peut créer son propre site',
    meta: {
      title: 'Zones : un site pour chaque communauté',
      description:
        'Une Zone est un site complet qui utilise les données partagées de REZICS. La communauté choisit ses routes, sa navigation, ses pages et son thème. Le Wiki+ d’une œuvre est aussi une Zone et toute correction revient au même graphe.',
    },
    hero: {
      headline: 'Chaque communauté peut avoir son propre site.',
      lede: 'Une Zone est un site complet avec accueil, documents, index, pages détaillées et navigation. La communauté en choisit les routes. Le contenu n’est pas dupliqué et chaque correction revient au même graphe.',
    },
    points: [
      {
        title: 'Vous choisissez les routes',
        body: 'La table des routes d’une Zone gère chaque adresse de son site, y compris l’accueil. Les pages de la plateforme ne prennent pas la place de ses pages.',
      },
      {
        title: 'Wiki+',
        body: 'Le Wiki de chaque œuvre est une Zone avec des pages de personnages, de lieux, de chronologie, de guide des chapitres et de relations. Les encadrés reprennent les faits du graphe et les lecteurs ne voient que ce qu’ils ont lu.',
      },
      {
        title: 'Thème et mise en page',
        body: 'Le thème définit l’identité visuelle et la mise en page. L’identité, la recherche, les langues, les sources et l’accessibilité restent protégées dans tous les thèmes.',
      },
      {
        title: 'Révisions, aperçu et restauration',
        body: 'Une révision du site comprend les routes, la navigation, les modèles, le thème et les requêtes. Vous pouvez la prévisualiser, la valider, la restaurer ou l’exporter. Les personnes et les agents IA modifient le site avec la même API.',
      },
      {
        title: 'Une identité, plusieurs sites',
        body: 'Une Zone peut réunir plusieurs domaines et un même domaine apparaître dans plusieurs Zones. Les sites chinois et japonais de romans visuels partagent chaque identité, tout en choisissant leurs noms, textes et ordre d’affichage.',
      },
    ],
    statement: 'Chaque site a son apparence, tous reposent sur le même moteur.',
    usedBy: ['books', 'anime', 'manga', 'visual-novels'],
  },
  {
    id: 'create',
    name: 'Création et diffusion',
    summary: 'Écriture, lecture, éditions et diffusion',
    meta: {
      title: 'Création et diffusion : du premier chapitre à la publication',
      description:
        'Sur REZICS, les auteurs rédigent, planifient et publient des chapitres, invitent des collaborateurs à les modifier, gardent leur univers à côté du manuscrit et diffusent directement des livres numériques et de petits jeux sans DRM.',
    },
    hero: {
      headline: 'Du premier chapitre à la diffusion, au même endroit.',
      lede: 'Les auteurs rédigent, planifient et publient des chapitres. Les lecteurs reprennent au passage où ils s’étaient arrêtés. Traductions, droits et publications sont consignés séparément.',
    },
    points: [
      {
        title: 'Vos manuscrits sont conservés',
        body: 'Chaque enregistrement crée une révision restaurable. Vous pouvez exporter puis réimporter l’œuvre entière, avec ses révisions, ses notes et son univers.',
      },
      {
        title: 'Planification et collaboration',
        body: 'La publication planifiée suit le fuseau horaire de l’auteur et continue même quand le navigateur est fermé. Les collaborateurs peuvent recevoir des droits distincts de lecture, de suggestion, de modification ou de publication.',
      },
      {
        title: 'Votre univers à côté du manuscrit',
        body: 'Personnages, lieux, organisations, événements et paramètres restent privés à côté du manuscrit. Publiez les pages choisies dans le Wiki de l’œuvre sans rendre publique l’historique privé des modifications.',
      },
      {
        title: 'La traduction appartient à son traducteur',
        body: 'Une œuvre peut avoir plusieurs traductions, chacune appartenant à son traducteur. Les traductions des utilisateurs restent privées par défaut. Elles ne peuvent être publiées que si l’œuvre est dans le domaine public ou sous une licence libre autorisant la traduction, si l’auteur y consent ou s’il accorde publiquement ce droit.',
      },
      {
        title: 'Diffusion directe',
        body: 'REZICS diffuse les livres numériques EPUB et PDF, ainsi que les petits jeux des créateurs sous contrat, avec des droits vérifiés et sans DRM. Les lecteurs peuvent les découvrir avant l’achat, puis recevoir les mises à jour et retélécharger les fichiers ou demander un remboursement selon les conditions.',
      },
    ],
    statement: 'Publier sur REZICS ne cède pas vos droits d’auteur.',
    usedBy: ['books', 'manga', 'games', 'visual-novels'],
  },
  {
    id: 'trust',
    name: 'Confiance',
    summary: 'Sources, droits, gouvernance et vie privée',
    meta: {
      title: 'Confiance : sources, droits, gouvernance et vie privée',
      description:
        'Chaque affirmation sur REZICS indique ses sources et ses preuves. L’usage de l’IA est signalé, les signalements sont ouverts à tous, les décisions de gouvernance peuvent faire l’objet d’un recours et les brouillons privés et historiques de lecture restent privés.',
    },
    hero: {
      headline: 'Les informations ont des sources et les décisions des motifs.',
      lede: 'Chaque information indique sa source, chaque droit son fondement et chaque décision la règle appliquée. Vos brouillons privés et votre historique de lecture ne sont pas visibles par défaut.',
    },
    points: [
      {
        title: 'Sources et preuves',
        body: 'Chaque affirmation indique ses sources, ses preuves et son état de vérification. Une donnée peut être vérifiée et contestée à la fois. Les inconnues sont signalées comme telles.',
      },
      {
        title: 'IA et automatisation',
        body: 'Les textes, images et traductions indiquent si l’IA a été utilisée et si une personne les a vérifiés. Les lecteurs peuvent filtrer selon ces informations. Les automatisations nomment leur responsable et une détection par IA ne suffit jamais à elle seule pour prendre une décision.',
      },
      {
        title: 'Signalements et recours',
        body: 'Vous pouvez signaler un contenu sans compte. Signalements, preuves, décisions et annulations sont consignés séparément. Chaque décision de gouvernance peut faire l’objet d’un recours examiné par une personne.',
      },
      {
        title: 'Droits consignés un à un',
        body: 'Chaque licence indique qui l’a déclarée, quand et pour quel périmètre. Une contestation des droits est d’abord traitée comme une allégation ; une personne l’examine avant de décider quels contenus et usages sont concernés.',
      },
      {
        title: 'Vie privée',
        body: 'Vos brouillons privés et votre historique de lecture restent privés. Confier la gestion de votre identité publique ou de votre communauté à quelqu’un ne lui donne pas accès à votre historique de lecture.',
      },
    ],
    statement: 'Les règles sont appliquées sur le serveur. Le site, l’application et les agents IA obtiennent le même résultat.',
    usedBy: ['visual-novels', 'mcp', 'skills', 'apis'],
  },
];
/** Shared labels for the five-module navigation at the end of every module page. */
export const moduleRing = { label: 'Cinq modules', current: 'Vous êtes ici', overview: 'Retour aux modules' };
