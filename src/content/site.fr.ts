import type { Site } from './schema';

export const site: Site = {
  name: 'REZICS',
  url: 'https://about.rezics.com',
  productUrl: 'https://rezics.com',
  meta: {
    title: 'REZICS | Index universel et communauté',
    description:
      'Livres, anime, manga, jeux, logiciels, romans visuels, serveurs MCP, compétences et API : chaque élément a une identité sur REZICS. Les communautés en discutent, les notent, en font des listes et rédigent des Wiki+.',
  },
  nav: {
    products: 'Produits',
    engine: 'Modules',
    developers: 'Développeurs',
    roadmap: 'Feuille de route',
    menu: 'Menu',
    close: 'Fermer',
    skip: 'Aller au contenu principal',
    action: 'Accéder à REZICS',
    productsIntro: {
      title: 'Neuf domaines, un seul index',
      body: 'Chacun a ses pages et repose sur les mêmes fonctions et le même index.',
      all: 'Tout voir',
    },
    engineIntro: {
      title: 'Cinq modules, quinze fonctions',
      body: 'Ces modules composent chaque domaine et servent aussi aux communautés et aux développeurs.',
      all: 'Voir l’ensemble du moteur',
    },
    groups: { works: 'Œuvres et logiciels', agents: 'Agents IA et développeurs' },
  },
  home: {
    hero: {
      headline: 'Tout ce qui vous intéresse dans un même index.',
      lede: 'Livres, anime, manga, jeux, logiciels, romans visuels et outils pour agents IA : chaque élément possède une identité unique, à laquelle se rattachent discussions, notes et Wiki.',
      primary: 'Accéder à REZICS',
      imageAlt: 'Neuf feuilles de couleur se chevauchent sur un fond blanc chaud, sous la lumière d’une fenêtre en haut à gauche.',
    },
    kinds: {
      eyebrow: 'Neuf domaines',
      headline: ['Chaque domaine a sa place ;', 'tous reposent sur le même index et le même compte.'],
      lines: {
        anime: 'Saisons, épisodes et calendrier',
        manga: 'Volumes, chapitres et traductions',
        software: 'Compatibilité et téléchargement',
      },
    },
    statement: {
      text: 'Un roman, son manga, son anime et son jeu,',
      sub: 'ont quatre identités reliées dans REZICS. Une correction dans une langue met à jour toutes les pages concernées.',
    },
    identity: {
      eyebrow: 'Index universel',
      headline: 'Des noms différents, une seule identité.',
      body: [
        'Une même œuvre porte un nom en chinois, en japonais et en anglais. Dans REZICS, tous renvoient à la même identité. Éditions, traductions et adaptations restent distinctes et liées entre elles.',
        'Votre Bibliothèque, vos notes et votre progression restent liées à cette identité, quelle que soit la langue d’affichage.',
      ],
      link: 'Voir l’index universel',
      imageAlt: 'Cinq feuilles de même taille et de couleurs différentes sont décalées les unes sur les autres.',
    },
    community: {
      eyebrow: 'Communautés et Zones',
      headline: 'Réunissez-vous autour des œuvres et créez votre site.',
      body: [
        'Discussions, notes et listes sont liées aux œuvres. Chaque communauté rassemble des personnes autour d’une histoire, d’une langue ou d’un intérêt commun, avec ses membres, ses règles et sa gouvernance.',
        'Créez un site complet avec une Zone et choisissez ses pages, sa navigation et son thème. Les données proviennent toujours du même index.',
      ],
      link: 'Voir les communautés et les Zones',
      imageAlt: 'Une feuille bleu canard pliée en maison se dresse sur le papier, entourée de petites feuilles colorées.',
    },
    platform: {
      eyebrow: 'Cinq modules',
      headline: 'Une plateforme qui fait office de bibliothèque, de boutique, de catalogue, de forum et de Wiki.',
      lead: 'Les neuf domaines reposent sur les mêmes cinq modules. Pour en ajouter un, il suffit de le configurer, sans créer une autre application.',
      modules: {
        'universal-index': 'Une identité, toutes les éditions, des noms et des liens entre les langues',
        community: 'Communautés, discussions, notes, listes et abonnements',
        zones: 'Chaque communauté crée son site et son Wiki+ sur l’index partagé',
        create: 'Écriture, lecture, éditions, vente et licences',
        trust: 'Sources et preuves, droits, règles de gouvernance et vie privée',
      },
    },
    agents: {
      eyebrow: 'Développeurs et agents IA',
      headline: 'La même API, du site à votre application.',
      lead: 'L’API, le serveur MCP et le SDK permettent à votre application ou à votre agent de lire les données, de gérer votre Bibliothèque et de soumettre des propositions. Les agents agissent selon vos autorisations, et leurs propositions sont examinées par une personne avant application.',
      link: 'Voir les ressources pour les développeurs',
      code: ['# Rechercher dans le catalogue sans se connecter', 'curl -G \\', '  "$REZICS_API/v1/search/catalogue" \\', '  --data-urlencode "q=roman léger" \\', '  -d language=fr -d limit=5'].join('\n'),
      codeLabel: 'Exemple de requête curl pour rechercher dans le catalogue REZICS',
      caption: 'Définissez REZICS_API sur l’adresse du service API. Le paramètre language choisit la langue des résultats.',
    },
    principles: {
      eyebrow: 'Principes',
      headline: 'Nos engagements envers chaque personne.',
      items: [
        { title: 'Code source ouvert', body: 'REZICS publie son code source sous licence AGPL-3.0. Chacun peut le consulter, l’héberger et l’améliorer.' },
        { title: 'Aucun suivi publicitaire', body: 'Nous n’utilisons pas de traceurs publicitaires et ne vendons pas de données personnelles.' },
        { title: 'Vos données privées ne servent pas à entraîner des modèles', body: 'Par défaut, les brouillons privés et l’historique de lecture ne servent pas à entraîner des modèles d’IA. Vous devez donner votre accord séparément.' },
        { title: 'Vos données restent exportables', body: 'Vous pouvez exporter votre Bibliothèque, vos listes et vos brouillons. La participation de base et les exports sont gratuits.' },
        { title: 'Les automatisations sont signalées', body: 'Les automatisations de REZICS et de tiers indiquent clairement qu’elles sont automatisées et nomment leur responsable.' },
      ],
    },
    finale: {
      headline: 'Retrouvez ici ce qui compte pour vous.',
      body: 'Avec un compte, votre Bibliothèque, vos listes et vos notes se retrouvent dans le même index.',
    },
  },
  engine: {
    meta: {
      title: 'Moteur REZICS : modules et fonctions',
      description:
        'Les neuf domaines de REZICS utilisent les mêmes fonctions, réparties entre cinq modules. Découvrez les huit fonctions de chaque domaine et le rôle de chaque module.',
    },
    hero: {
      headline: 'Un seul moteur pour neuf domaines.',
      lede: 'Ajouter un domaine demande un vocabulaire, des correspondances, des données de départ et une Zone, pas une nouvelle application. Chaque fonction est créée une seule fois et sert au premier comme au dixième domaine.',
    },
    parts: {
      headline: 'Chaque domaine choisit huit des quinze fonctions.',
      body: 'Chaque domaine choisit huit fonctions, avec l’identité toujours en premier. D’un domaine à l’autre, les fonctions communes gardent leur place ; seules les fonctions propres au domaine changent.',
      pick: 'Choisir un domaine',
    },
    modules: {
      headline: 'Les fonctions viennent de cinq modules.',
      body: 'L’index universel gère les identités, les communautés les échanges, les Zones les sites, la création et la diffusion les œuvres, et la confiance les sources, les droits et la vie privée.',
    },
  },
  kindPage: {
    featuresHeading: 'Ce que vous pouvez faire',
    partsHeading: 'Les huit fonctions utilisées',
    partsCaption: 'Chaque domaine choisit dans le même ensemble de fonctions.',
    connectionsHeading: 'Domaines associés',
    next: 'Domaine suivant',
  },
  modulePage: { usedByHeading: 'Domaines qui l’utilisent le plus', next: 'Module suivant' },
  developers: {
    meta: {
      title: 'REZICS pour les développeurs : API et MCP',
      description:
        'Chaque fonction de REZICS est d’abord une opération API. Découvrez la documentation OpenAPI, le serveur MCP, les applications OAuth, l’outil Wiki local et le code source ouvert.',
    },
    hero: {
      headline: 'L’API peut faire tout ce que le site peut faire.',
      lede: 'Chaque fonction est d’abord une opération API, et le site n’est qu’un client parmi d’autres. Votre application, vos scripts et vos agents IA utilisent les mêmes opérations et autorisations, avec les mêmes résultats.',
    },
    facts: [
      {
        title: 'HTTP API',
        body: 'Les chemins, paramètres et réponses sont définis dans la documentation OpenAPI publique. Les erreurs suivent le format Problem Details et utilisent des codes stables que votre programme peut traiter.',
      },
      {
        title: 'Serveur MCP',
        body: 'Le serveur MCP distant expose les opérations API sous forme d’outils. Chaque appel suit le même traitement HTTP et respecte les autorisations, accusés de réception et limites de débit. Un agent IA peut s’enregistrer comme client, sans obtenir pour autant l’accès à une ressource.',
      },
      {
        title: 'SDK TypeScript',
        body: 'Les types du client proviennent directement de la définition de l’API. Champs, résultats et erreurs correspondent à ceux du serveur.',
      },
      {
        title: 'Applications OAuth',
        body: 'Les applications externes obtiennent une autorisation avec le flux de code d’autorisation et PKCE. Les permissions sont détaillées et révocables à tout moment.',
      },
      {
        title: 'Outil Wiki local',
        body: 'Sur son propre ordinateur, le détenteur du texte utilise l’agent IA de son choix pour lire des fichiers TXT, EPUB ou des scripts de roman visuel. Il en extrait les personnages, lieux et événements chapitre par chapitre, ajoute les références et soumet une proposition. Cet outil est sous licence Apache-2.0, ne demande pas de compte REZICS et n’envoie aucune télémétrie.',
      },
      {
        title: 'Code source ouvert',
        body: 'Le code source du cœur de la plateforme est publié sous licence AGPL-3.0. Vous pouvez l’étudier, l’héberger et proposer des modifications.',
      },
    ],
    sample: {
      caption: 'La recherche publique ne demande aucun jeton. Le terme « roman léger » renvoie des résultats classés, un nombre précis ou minimal de résultats et le curseur de la page suivante.',
      language: 'sh',
      code: [
        'curl -G "$REZICS_API/v1/search/catalogue" \\',
        '  --data-urlencode "q=roman léger" \\',
        '  -d language=fr \\',
        '  -d limit=5',
      ].join('\n'),
    },
    statement: 'Un clic ou un appel déclenche la même opération.',
  },
  roadmap: {
    meta: {
      title: 'REZICS Feuille de route',
      description:
        'REZICS ouvre ses communautés une à une, avec un seul moteur. Le parcours part des romans légers et des romans visuels, puis s’étend aux Wiki+ des œuvres, à la création en série, à d’autres domaines, aux événements et lieux, puis à la diffusion directe.',
    },
    hero: {
      headline: 'Des romans légers à tous les domaines.',
      lede: 'REZICS ouvre ses communautés l’une après l’autre sur le même index et les mêmes fonctions. Chaque nouvelle étape reprend les identités et les liens déjà établis.',
    },
    steps: [
      {
        title: 'Un index, un moteur',
        body: 'Chaque œuvre, personne et organisation possède une identité dans l’index partagé. Chaque fonction est créée une fois, puis utilisée par les domaines qui en ont besoin.',
      },
      {
        title: 'Romans légers et romans visuels',
        body: 'Les premiers domaines s’adressent aux lecteurs qui suivent des séries dans plusieurs langues et aux joueurs qui cherchent des versions jouables. Ils partagent le catalogue et la Bibliothèque, avec une vue adaptée à chacun. Chaque œuvre a son Wiki. L’interface est disponible en huit langues, sur mobile et sur ordinateur.',
      },
      {
        title: 'Un Wiki+ pour chaque œuvre',
        body: 'Le même processus s’applique à chaque œuvre. Les détenteurs de textes préparent des propositions chapitre par chapitre avec leur agent IA. Après vérification, les faits sont publiés dans la Zone Wiki de l’œuvre et s’affichent selon la progression du lecteur.',
      },
      {
        title: 'Séries et créateurs',
        body: 'Les communautés de romans en série et les créateurs de romans visuels rejoignent REZICS avec leurs œuvres et leur calendrier de publication. Les auteurs gèrent leur univers à côté du manuscrit, et les lecteurs discutent au fil des chapitres.',
      },
      {
        title: 'Un domaine après l’autre',
        body: 'Les catalogues de science-fiction et de fantasy, les fictions interactives, les serveurs MCP et compétences d’agent, puis les modèles et évaluations s’ajoutent au fil du temps. Chacun demande un vocabulaire, des correspondances, des données de départ et une Zone, sans code dédié dans le système.',
      },
      {
        title: 'Dans le monde réel',
        body: 'Les festivals, séances de dédicaces et événements de lancement sont liés aux œuvres. Les lieux publics associés à une œuvre s’affichent selon votre progression, sans révéler la suite.',
      },
      {
        title: 'Diffusion directe',
        body: 'REZICS diffuse les livres numériques et petits jeux des créateurs sous contrat, sans DRM. Les lecteurs peuvent retélécharger leurs achats selon les conditions de vente. Les créateurs voient chaque versement.',
      },
      {
        title: 'Un site pour chaque communauté',
        body: 'Les responsables de communautés et les petits éditeurs créent un site complet avec une Zone, importent des données et gèrent les éditions. Les développeurs utilisent l’API et le flux de mises à jour.',
      },
    ],
    statement: 'Chaque communauté ajoute de nouveaux liens à l’index, que la suivante peut utiliser.',
  },
  product: {
    headline: 'Neuf domaines sur REZICS.',
    body: 'Avec un seul compte, suivez vos lectures, vos anime et vos jeux, ajoutez des notes et créez des listes. Vous pouvez aussi bâtir le site de votre communauté avec une Zone.',
  },
  notFound: {
    meta: {
      title: 'Page introuvable',
      description:
        'Aucune page ne correspond à cette adresse. Elle contient peut-être une erreur ou la page a été déplacée. Revenez à l’accueil de REZICS pour parcourir les neuf domaines et les cinq modules.',
    },
    eyebrow: '404',
    headline: 'Cette page est introuvable.',
    body: 'L’adresse contient peut-être une erreur ou la page a été déplacée. Revenez à l’accueil ou parcourez les neuf domaines.',
    back: 'Retour à l’accueil',
    imageAlt: 'Une feuille bleu clair découpée en son centre laisse voir le papier dessous.',
    restart: 'Parcourir les neuf domaines',
  },
  ui: {
    pause: 'Mettre l’animation en pause',
    play: 'Lancer l’animation',
    pick: 'Changer de domaine',
  },
  footer: {
    tagline: 'Index universel ouvert et communautés',
    sitemap: 'Plan du site',
    agents: 'Agents IA',
    source: 'Code source',
    sourceUrl: 'https://github.com/rezics/rezics-next',
    colophon: 'Ce site ne mesure pas le trafic et ne charge aucune ressource tierce.',
    copyright: '© 2026 REZICS Inc.',
  },
};
