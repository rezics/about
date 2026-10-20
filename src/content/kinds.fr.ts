import type { Kind } from './schema';

/** The nine kinds (products), in DESIGN.md's order. Sources: kinds-facts.md. */
export const kinds: Kind[] = [
  {
    id: 'books',
    name: 'Bibliothèque',
    tag: 'Books',
    group: 'works',
    summary: 'Une œuvre, toutes ses éditions et traductions',
    meta: {
      title: 'Bibliothèque : éditions et historique de lecture',
      description:
        'Chaque œuvre a une identité unique, distincte de ses traductions, réimpressions et omnibus. Suivez vos lectures et vos livres, trouvez le prochain volume d’une série, achetez des livres numériques sans DRM et consultez le Wiki jusqu’à votre progression.',
    },
    hero: {
      headline: 'Chaque édition garde sa propre fiche.',
      lede: 'Broché, livre numérique, traduction et omnibus sont des éditions d’une même œuvre. REZICS indique ce que vous lisez, votre progression et le prochain volume, tout en reliant l’œuvre à son anime, à son manga et à son Wiki.',
    },
    features: [
      {
        title: 'Distinguer éditions et traductions',
        body: 'Chaque réimpression, édition brochée ou numérique et traduction a sa propre fiche. Les omnibus indiquent les volumes inclus sans créer de doublon.',
      },
      {
        title: 'Suivre chaque lecture',
        body: 'Relectures, pauses, abandons et passage du papier au livre audio sont consignés. La progression peut se compter en pages, en pourcentage ou en minutes.',
      },
      {
        title: 'Le prochain volume',
        body: 'Choisissez votre langue de lecture pour voir le prochain volume disponible dans une série. Les séries à jour, terminées ou dont vous avez lu tous les volumes parus ont des statuts distincts.',
      },
      {
        title: 'Vos livres et vos prêts',
        body: 'Vous seul voyez quels livres sont sur vos étagères, à qui vous les avez prêtés et quand ils doivent être rendus. Posséder un livre ne signifie pas l’avoir lu.',
      },
      {
        title: 'Importer votre historique',
        body: 'Importez un export d’un autre service. Les éditions et données correspondantes sont conservées et peuvent être exportées à nouveau.',
      },
      {
        title: 'Acheter directement aux créateurs',
        body: 'Les livres numériques EPUB ou PDF des créateurs partenaires sont vendus avec les droits nécessaires et sans DRM. Vous pouvez les lire en extrait, puis retrouver mises à jour et téléchargements dans votre Bibliothèque.',
      },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'progress', 'ratings', 'wiki', 'offers'],
    partNotes: {
      identity: 'Une œuvre garde la même identité dans chaque langue et communauté. L’ISBN identifie une édition précise.',
      editions: 'Traductions, réimpressions, livres brochés, éditions numériques et omnibus sont des éditions distinctes de la même œuvre.',
      credits: 'Auteurs, traducteurs, illustrateurs et éditeurs sont crédités selon leur rôle. Une même personne garde son identité d’un livre à l’autre.',
      relations: 'Séries, suites, œuvres dérivées et adaptations ont leur propre relation. Les versions en ligne et les réécritures publiées sont aussi liées.',
      progress: 'Votre progression par volume et par page, ainsi que le prochain volume, vous suivent lorsque vous changez de langue.',
      ratings: 'L’histoire, la traduction et la narration ont des notes distinctes, avec leur nombre de notes et leur périmètre.',
      wiki: 'Le Wiki cite les chapitres sources des personnages, lieux et événements. Il s’arrête à votre progression.',
      offers: 'Achetez ici les livres numériques des créateurs partenaires. Pour les autres éditions, les offres indiquent leur date d’observation ou sont marquées comme inconnues.',
    },
    connections: [
      { to: 'anime', label: 'Adapté en anime' },
      { to: 'manga', label: 'Adapté en manga' },
      { to: 'games', label: 'Adapté en jeu' },
    ],
    community: {
      headline: 'Des éditions différentes, une même œuvre à discuter.',
      body: 'Les lecteurs du texte d’origine, d’une traduction ou d’une édition numérique publient notes et discussions sur la même œuvre. Un club de lecture peut créer sa communauté, et une communauté de livres peut bâtir son site avec une Zone. Les données bibliographiques restent les mêmes.',
    },
    imageAlt: 'Quelques livres empilés',
  },
  {
    id: 'anime',
    name: 'Anime',
    tag: 'Anime',
    group: 'works',
    summary: 'Saisons, épisodes, calendrier et œuvre d’origine',
    meta: {
      title: 'Anime : suivi des épisodes et discussions sans révélation',
      description:
        'Les épisodes et dates de diffusion de chaque saison sont clairement indiqués, avec les sous-titres et doublages séparés. Suivez votre progression épisode par épisode, discutez dans chaque fil sans voir la suite et retrouvez l’œuvre d’origine par ses relations.',
    },
    hero: {
      headline: 'Suivez les épisodes, les discussions suivent votre progression.',
      lede: 'Les épisodes, dates de diffusion, sous-titres et doublages sont répertoriés séparément pour chaque saison. Marquez les épisodes vus ; discussions et Wiki s’arrêtent à votre progression. L’œuvre d’origine en roman ou en manga est à portée de lien.',
    },
    features: [
      {
        title: 'Saisons, épisodes et diffusion',
        body: 'Les épisodes, spéciaux et dates de diffusion sont réunis dans un calendrier. Reports, interruptions et mises en ligne sont consignés séparément.',
      },
      {
        title: 'Sous-titres et doublage',
        body: 'Les langues disponibles en sous-titres et en doublage sont indiquées séparément. La langue de l’interface est distincte de celle du visionnage.',
      },
      {
        title: 'Le prochain épisode',
        body: 'Marquez les épisodes vus et retrouvez le prochain en tête de l’accueil. Les spéciaux et contenus facultatifs ne retardent pas le statut « terminé ».',
      },
      {
        title: 'Discuter de l’épisode',
        body: 'Chaque épisode a son fil de discussion. Les révélations sur la suite sont masquées, sauf si vous choisissez de les afficher.',
      },
      {
        title: 'Une note distincte par épisode',
        body: 'La note d’un épisode ne compte pas dans celle de l’œuvre entière. Consultez les notes par épisode pour savoir lesquels sont les mieux reçus.',
      },
      {
        title: 'Retrouver l’œuvre d’origine',
        body: 'Passez de l’anime au manga, puis au roman d’origine. Regarder l’anime ne marque pas le roman comme lu.',
      },
    ],
    parts: ['identity', 'schedule', 'credits', 'relations', 'progress', 'ratings', 'discussion', 'wiki'],
    partNotes: {
      identity: 'Les titres traduits renvoient au même anime. L’adaptation et l’œuvre d’origine gardent des identités distinctes.',
      schedule: 'Les dates de diffusion et épisodes de chaque saison sont réunis dans un calendrier. Annonces, reports et interruptions sont consignés séparément.',
      credits: 'Les comédiens de doublage, personnages et œuvres figurent dans les mêmes crédits. Réalisateurs, scénaristes et studios ont chacun leur rôle.',
      relations: 'Saisons suivantes, œuvres dérivées et œuvres d’origine ont des relations distinctes, qui mènent au roman ou au manga.',
      progress: 'Votre épisode actuel et le suivant sont enregistrés. Les spéciaux facultatifs ne comptent pas pour terminer une série.',
      ratings: 'L’œuvre entière et chaque épisode ont leurs propres notes et nombres de participants.',
      discussion: 'Chaque épisode a son fil ; les contenus qui dépassent votre progression sont masqués par défaut.',
      wiki: 'Le Wiki indique dans quel épisode apparaissent les personnages, lieux et événements, et s’arrête aux épisodes que vous avez vus.',
    },
    connections: [
      { to: 'books', label: 'Roman d’origine' },
      { to: 'manga', label: 'Manga d’origine' },
      { to: 'games', label: 'Même comédien de doublage' },
    ],
    community: {
      headline: 'Une saison d’anime peut aussi avoir son propre site.',
      body: 'Une communauté peut créer un site dédié à une saison d’anime avec une Zone, et y publier le calendrier, des critiques et des discussions. Les données viennent du même catalogue. Une correction de date de diffusion s’applique aussi ici.',
    },
    imageAlt: 'Une feuille de celluloïd et un cadre d’animation',
  },
  {
    id: 'manga',
    name: 'Manga',
    tag: 'Manga',
    group: 'works',
    summary: 'Volumes, chapitres et traductions',
    meta: {
      title: 'Manga : volumes, chapitres et traductions',
      description:
        'Suivez volumes et chapitres de la série. Chaque traduction indique son traducteur et l’édition source. Recevez une notification quand un nouveau chapitre paraît dans votre langue. Chaque chapitre a un fil de discussion, et les adaptations en anime et le roman d’origine sont liés.',
    },
    hero: {
      headline: 'Chaque chapitre et chaque traduction est distinct.',
      lede: 'La série en japonais, les volumes locaux, les traductions officielles et celles des fans sont rattachés au même manga, avec leur langue et leur traducteur. Suivez votre progression chapitre par chapitre et recevez une notification à la sortie d’un nouveau chapitre dans votre langue.',
    },
    features: [
      {
        title: 'Chapitres et volumes',
        body: 'Chaque chapitre occupe une place précise dans la série. Chaque volume est une édition distincte. Les nouvelles éditions et omnibus sont répertoriés séparément, avec la numérotation de l’éditeur.',
      },
      {
        title: 'Suivre chaque chapitre',
        body: 'Marquez les chapitres lus. Si la suite existe dans votre langue, elle apparaît en premier ; sinon, vous voyez quel chapitre manque.',
      },
      {
        title: 'Indiquer la source des traductions',
        body: 'Chaque traduction indique son traducteur et l’édition d’origine. Les traductions de fans ne sont pas présentées comme officielles, et celles qui ne sont pas vérifiées sont signalées.',
      },
      {
        title: 'Être informé des nouveaux chapitres',
        body: 'Suivez un manga pour recevoir une notification quand un chapitre ou un volume paraît dans votre langue. Les autres langues ne vous envoient pas de notification.',
      },
      {
        title: 'Discuter après lecture',
        body: 'Chaque chapitre a son fil de discussion. Les révélations ultérieures restent masquées jusqu’à ce que vous les ayez lues.',
      },
      {
        title: 'Après l’adaptation',
        body: 'L’adaptation en anime, les œuvres dérivées et le roman d’origine sont liés, avec des progressions distinctes.',
      },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'progress', 'ratings', 'discussion', 'offers'],
    partNotes: {
      identity: 'Le titre d’origine, ses traductions et sa romanisation renvoient au même manga.',
      editions: 'Les volumes imprimés ou numériques, nouvelles éditions et omnibus sont répertoriés séparément, en conservant leur numérotation.',
      credits: 'Auteur d’origine, dessinateur, traducteur et éditeur sont crédités séparément. Les romans et mangas d’une même personne figurent sur sa page.',
      relations: 'Roman d’origine, anime, œuvre dérivée et suite ont des relations distinctes, consultables depuis chaque fiche.',
      progress: 'Suivez votre lecture par chapitre et voyez les volumes que vous avez terminés.',
      ratings: 'Notez séparément l’œuvre, un chapitre ou une traduction. La note de la série ne se confond pas avec celle d’un chapitre.',
      discussion: 'Chaque chapitre a son fil ; les révélations sur la suite sont masquées par défaut.',
      offers: 'Les régions de vente et les prix de chaque édition linguistique indiquent la date d’observation.',
    },
    connections: [
      { to: 'books', label: 'Adapté d’un roman' },
      { to: 'anime', label: 'Adaptation en anime' },
    ],
    community: {
      headline: 'Traducteurs et lecteurs ont leur propre identité.',
      body: 'Les équipes de traduction de fans sont créditées pour chaque version. Suivez un traducteur pour découvrir ses prochains projets. Les critiques, listes et réputation des lecteurs restent liées à la même identité dans toutes les communautés.',
    },
    imageAlt: 'Une page de manga avec trame',
  },
  {
    id: 'games',
    name: 'Jeux',
    tag: 'Games',
    group: 'works',
    summary: 'Plateformes, éditions, notes et achats',
    meta: {
      title: 'Jeux : éditions, spécifications et notes par plateforme',
      description:
        'Chaque jeu a une identité unique. Éditions par plateforme et région, DLC et configuration requise sont répertoriés séparément. Les notes indiquent leur période et leur public, les sélections des communautés sont motivées et les petits jeux de développeurs partenaires s’achètent sans DRM.',
    },
    hero: {
      headline: 'Chaque édition du jeu, sur chaque plateforme.',
      lede: 'Les éditions par plateforme et région indiquent les langues disponibles et la configuration requise. Les notes précisent leur période et le groupe de joueurs. Mods, adaptations et suites sont aussi liés au jeu.',
    },
    features: [
      {
        title: 'Une fiche par plateforme',
        body: 'Les éditions d’un jeu sur chaque plateforme et région indiquent langues, date de sortie et DLC. Un remake est un jeu distinct, lié à l’original.',
      },
      {
        title: 'Configuration requise',
        body: 'La configuration requise est indiquée pour chaque plateforme. Les données manquantes sont signalées comme inconnues, sans déductions à partir d’une autre plateforme.',
      },
      {
        title: 'Notes par période et par public',
        body: 'Les notes récentes et l’ensemble des notes sont affichées séparément, avec leur nombre, leur répartition et le groupe de joueurs concerné.',
      },
      {
        title: 'Les sélections sont motivées',
        body: 'Chaque jeu sélectionné par une communauté renvoie à la décision correspondante, avec le nom des personnes qui l’ont choisi et leurs raisons.',
      },
      {
        title: 'Acheter sans DRM',
        body: 'Achetez une fois et téléchargez les petits jeux et romans visuels sous licence de développeurs partenaires. Mises à jour, reçus et téléchargements restent dans votre Bibliothèque.',
      },
      {
        title: 'Trouver des mods compatibles',
        body: 'Choisissez la version du jeu et son chargeur pour trouver des mods. Seuls les fichiers compatibles sont affichés, avec le sens des dépendances.',
      },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'specs', 'ratings', 'discussion', 'offers'],
    partNotes: {
      identity: 'Un jeu garde la même identité sur toutes les plateformes et régions. Remakes et redémarrages ont leur propre fiche et restent liés à l’original.',
      editions: 'Les éditions par plateforme, région et langue, ainsi que les DLC, sont répertoriés séparément.',
      credits: 'Développeurs, éditeurs, scénaristes, compositeurs et comédiens de doublage ont chacun leur rôle. Les livres et jeux d’un même créateur sont liés.',
      relations: 'Suites, œuvres dérivées, adaptations et mods ont des relations distinctes qui indiquent leurs dépendances.',
      specs: 'La configuration requise et les langues disponibles sont indiquées par plateforme. Inconnu et non applicable sont deux statuts distincts.',
      ratings: 'Une note peut viser l’édition d’une plateforme précise. La méthode de calcul d’une note globale entre éditions est indiquée.',
      discussion: 'Le jeu, ses DLC et ses éditions sur une plateforme donnée ont chacun leur discussion.',
      offers: 'Achetez directement les petits jeux de développeurs partenaires. Les offres des autres boutiques sont aussi répertoriées.',
    },
    connections: [
      { to: 'software', label: 'Mods et outils' },
      { to: 'anime', label: 'Adaptation en anime' },
      { to: 'visual-novels', label: 'Même développeur' },
    ],
    community: {
      headline: 'Discussions, critiques et corrections ont leur place.',
      body: 'Discussions informelles, réponses aux critiques et corrections de données sont séparées. Suivez simplement un jeu ou rejoignez sa communauté pour publier et participer aux sélections.',
    },
    imageAlt: 'Une manette de jeu',
  },
  {
    id: 'software',
    name: 'Logiciels',
    tag: 'Software',
    group: 'works',
    summary: 'Compatibilité, téléchargement et alternatives',
    meta: {
      title: 'Logiciels : versions, plateformes et alternatives',
      description:
        'Chaque logiciel a une identité unique. Versions prises en charge, systèmes, architectures, notes de mise à jour et licences sont indiqués. Trouvez où le télécharger, comparez des alternatives motivées et suivez ses nouvelles versions.',
    },
    hero: {
      headline: 'Vérifiez d’abord si le logiciel fonctionne sur votre appareil.',
      lede: 'Chaque version indique ses systèmes et architectures pris en charge, ses sources de téléchargement et sa licence. Les alternatives sont accompagnées de leurs raisons. Paquets et dépendances suivent les règles de leur écosystème.',
    },
    features: [
      {
        title: 'Versions et plateformes',
        body: 'Les systèmes d’exploitation et architectures pris en charge sont indiqués pour chaque version, sans déduction entre systèmes.',
      },
      {
        title: 'Où le télécharger',
        body: 'Téléchargements officiels, boutiques et dépôts de paquets sont répertoriés avec leurs sources. Les liens externes sont clairement signalés.',
      },
      {
        title: 'Notes de mise à jour par version',
        body: 'Les modifications et canaux de publication restent associés à chaque version. Suivez le logiciel pour recevoir une notification à chaque nouvelle version.',
      },
      {
        title: 'Des alternatives expliquées',
        body: 'Chaque alternative est une relation attribuée à une personne, avec le cas d’usage et sa justification. D’autres peuvent la contester.',
      },
      {
        title: 'Paquets et dépendances',
        body: 'Les paquets conservent leur nom, leur version et le sens de leurs dépendances dans chaque écosystème. Deux paquets de même nom ne sont pas confondus.',
      },
      {
        title: 'Licences et déclarations de confidentialité',
        body: 'Les licences et déclarations de confidentialité et d’accessibilité indiquent leur auteur. Les déclarations d’un développeur ne sont pas présentées comme une vérification de REZICS.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'offers', 'follow'],
    partNotes: {
      identity: 'Un logiciel garde la même identité sur les plateformes et dépôts. Les projets dérivés ont leur propre fiche et indiquent leur origine.',
      editions: 'Les numéros de version, canaux de publication et notes de mise à jour sont conservés, y compris pour les anciennes versions.',
      specs: 'Systèmes d’exploitation, architectures et dépendances sont consignés par version, avec leurs sources.',
      credits: 'Mainteneurs, équipes et organisations ont chacun une identité. Les projets auxquels ils ont contribué figurent sur leur page.',
      ratings: 'Les notes peuvent porter sur une version ou une plateforme, avec leur nombre et leur répartition.',
      discussion: 'Questions d’usage, retours sur les mises à jour et alternatives se discutent sur la page du logiciel.',
      offers: 'Téléchargements officiels, boutiques et dépôts sont présentés avec leurs prix et licences.',
      follow: 'Suivez un logiciel ou ses mainteneurs pour ne rien manquer des nouvelles versions et annonces.',
    },
    connections: [
      { to: 'games', label: 'Versions de jeu compatibles' },
      { to: 'mcp', label: 'Également serveur MCP' },
      { to: 'skills', label: 'Dépendance d’une compétence' },
    ],
    community: {
      headline: 'Des sélections utiles, organisées par la communauté.',
      body: 'Les communautés peuvent rassembler des logiciels dans des guides ou des sélections, préciser leur environnement et indiquer si leur compatibilité a été testée. Les recommandations obsolètes sont signalées pour vérification.',
    },
    imageAlt: 'Une fenêtre de logiciel',
  },
  {
    id: 'visual-novels',
    name: 'Romans visuels',
    tag: 'Visual novels',
    group: 'works',
    summary: 'Une édition dans la bonne langue et sur la bonne plateforme',
    meta: {
      title: 'Romans visuels : trouvez une édition jouable',
      description:
        'Trouvez une édition qui réunit votre langue, plateforme, région et couverture de traduction. Le traducteur et l’édition source sont indiqués. Suivez votre progression par route, sans révéler les embranchements ni la fin.',
    },
    hero: {
      headline: 'Langue, plateforme et traduction réunies dans une édition.',
      lede: 'Un titre traduit ne garantit pas une édition jouable. REZICS vérifie la langue, la plateforme et la couverture de chaque édition, indique le traducteur et sa source, et masque routes et fins au-delà de votre progression.',
    },
    features: [
      {
        title: 'Tous les critères dans une même édition',
        body: 'Pour filtrer, langue, plateforme, région et couverture doivent correspondre à une seule édition. Une langue d’une édition n’est pas associée à la plateforme d’une autre.',
      },
      {
        title: 'Traducteurs et éditions sources',
        body: 'Chaque traduction indique l’équipe, l’édition d’origine et si elle couvre l’œuvre entière, une partie ou une démo seulement.',
      },
      {
        title: 'Routes et fins sans révélation',
        body: 'Routes, fins et secrets des personnages sont masqués. Le Wiki s’arrête aux routes que vous avez suivies.',
      },
      {
        title: 'Créer un Wiki à partir du script',
        body: 'Le détenteur du script peut le lire avec son agent IA, relever les personnages, événements et références passage par passage, et tout traiter sur son propre ordinateur. La publication intervient après vérification humaine. REZICS ne reçoit pas le script complet.',
      },
      {
        title: 'Démos, sorties et correctifs de langue',
        body: 'Suivez une œuvre pour recevoir des notifications sur les démos, les sorties et les nouveaux correctifs de langue, chacun lié à son édition précise.',
      },
    ],
    parts: ['identity', 'editions', 'names', 'credits', 'relations', 'facets', 'progress', 'wiki'],
    partNotes: {
      identity: 'Les communautés chinoises et japonaises de romans visuels partagent la même identité d’œuvre, avec leurs propres noms et leur ordre d’affichage.',
      editions: 'L’édition d’origine, les traductions officielles, les correctifs de fans et les démos ont chacun leur fiche avec langue, plateforme, région et couverture.',
      names: 'Titre d’origine, alias et traductions sont conservés séparément. Un titre traduit ne signifie pas qu’une édition traduite est jouable.',
      credits: 'Scénaristes, artistes, compositeurs et comédiens de doublage sont crédités séparément. Les comédiens sont liés aux personnages qu’ils interprètent.',
      relations: 'Suites, œuvres dérivées, adaptations en anime et adaptations en roman sont liées entre elles.',
      facets: 'Chaque filtre de langue, plateforme, région ou couverture doit s’appliquer à la même édition.',
      progress: 'Suivez votre progression par route et voyez lesquelles sont terminées ou à poursuivre.',
      wiki: 'Le Wiki indique la route d’origine des personnages et événements, et masque celles que vous n’avez pas suivies.',
    },
    connections: [
      { to: 'anime', label: 'Adapté en anime' },
      { to: 'books', label: 'Adapté en roman' },
      { to: 'games', label: 'Même illustrateur' },
    ],
    community: {
      headline: 'Communautés chinoises et japonaises, mêmes données.',
      body: 'Deux communautés peuvent créer chacune une Zone et choisir leurs traductions, descriptions et ordre d’affichage. Les œuvres, éditions et crédits restent communs. Une correction dans l’une s’applique aussi à l’autre.',
    },
    imageAlt: 'Une boîte de dialogue devant un décor',
  },
  {
    id: 'mcp',
    name: 'MCP Hub',
    tag: 'MCP',
    group: 'agents',
    summary: 'Versions et compatibilité des serveurs MCP',
    meta: {
      title: 'MCP Hub : serveurs, versions et preuves de compatibilité',
      description:
        'Répertoriez projets, versions de paquets et points de terminaison de serveurs MCP. Chaque preuve de compatibilité indique la tâche, le client, sa version, la langue et la date. Les outils sont consignés par version, avec notes, discussions, listes et suivi des mises à jour.',
    },
    hero: {
      headline: 'Pour choisir un serveur MCP, consultez les retours d’usage.',
      lede: 'Projets, versions de paquets, points de terminaison et outils observés sont consignés séparément. Chaque preuve de compatibilité indique la tâche réalisée, le client, sa version, la langue et la date.',
    },
    features: [
      {
        title: 'Quatre éléments distincts',
        body: 'Projet, version de paquet, point de terminaison et outils observés ont chacun leur fiche. Un point de terminaison accessible ne confirme ni son propriétaire, ni sa compatibilité, ni les autorisations d’usage.',
      },
      {
        title: 'Preuves de compatibilité datées',
        body: 'Chaque preuve indique la tâche, le client, sa version, la langue et la date. Un succès de l’an dernier porte la date de l’an dernier.',
      },
      {
        title: 'Les outils suivent les versions',
        body: 'Chaque observation répertorie les outils et schémas fournis par le serveur à cette date. Les outils ajoutés ou modifiés sont visibles d’une version à l’autre.',
      },
      {
        title: 'Répertorier ne vaut pas approbation',
        body: 'La fiche décrit le serveur sans garantir sa sécurité au nom de REZICS. Les preuves portent sur une version donnée à une date donnée.',
      },
      {
        title: 'Créer et partager une liste',
        body: 'Rassemblez des serveurs dans une liste et indiquez l’usage et les paramètres de chacun. Vous pouvez la publier, la garder privée ou l’exporter.',
      },
      {
        title: 'Accessible aux agents IA',
        body: 'Le même index est accessible depuis l’API et le serveur MCP de REZICS. Votre agent peut choisir les serveurs qui lui conviennent.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'lists', 'follow'],
    partNotes: {
      identity: 'Un projet de serveur MCP a une seule identité, à laquelle se rattachent ses paquets, points de terminaison et observations.',
      editions: 'Chaque publication de paquet a sa fiche. Les anciennes versions et leurs changements restent consultables.',
      specs: 'Chaque preuve est datée et indique le client, sa version, la langue et la tâche réalisée.',
      credits: 'Les mainteneurs et leurs organisations ont une identité. Les compétences et API d’une même personne sont aussi liées.',
      ratings: 'Les notes précisent la version concernée, avec leur nombre et leur répartition.',
      discussion: 'Configuration, signalements d’erreur et retours d’usage se discutent sur la page du serveur.',
      lists: 'Rassemblez les serveurs que vous utilisez dans une liste, ajoutez des notes et partagez-la ou exportez-la.',
      follow: 'Suivez un serveur et recevez les nouvelles versions et annonces selon vos préférences de notification.',
    },
    connections: [
      { to: 'software', label: 'Projets et paquets' },
      { to: 'apis', label: 'API exposée' },
      { to: 'skills', label: 'Même mainteneur' },
    ],
    community: {
      headline: 'Chaque utilisation peut fournir une preuve.',
      body: 'Signalez un succès ou un échec sur un client donné, avec sa version et la date. Les agents IA envoient leurs retours au même format ; une personne les vérifie avant leur affichage.',
    },
    imageAlt: 'Quelques connecteurs et une prise',
  },
  {
    id: 'skills',
    name: 'Skill Hub',
    tag: 'Skills',
    group: 'agents',
    summary: 'Fichiers, dépendances et compatibilité des compétences',
    meta: {
      title: 'Skill Hub : index de compétences pour agents IA',
      description:
        'Chaque compétence répertorie ses fichiers, scripts et dépendances déclarées. Chaque publication fixe son contenu, sa licence et sa source. Les scripts ne sont jamais exécutés à l’importation. Les preuves de compatibilité sont datées ; notes, discussions et listes figurent sur la même page.',
    },
    hero: {
      headline: 'Voyez le contenu d’une compétence avant de l’utiliser.',
      lede: 'Le fichier de description, les scripts, références et ressources de chaque compétence sont répertoriés, avec les fichiers exécutables signalés. La page indique les paquets requis, les clients et versions compatibles, ainsi que les retours d’usage.',
    },
    features: [
      {
        title: 'Tous les fichiers répertoriés',
        body: 'Description, scripts, références et ressources sont classés. Chaque fichier a une empreinte, et les fichiers exécutables sont signalés.',
      },
      {
        title: 'Dépendances déclarées clairement',
        body: 'Les paquets requis sont classés par écosystème et distingués entre obligatoires et facultatifs. Les informations manquantes ou formats non pris en charge sont signalés.',
      },
      {
        title: 'Aucun script exécuté à l’import',
        body: 'Quand vous importez une compétence depuis un dossier ou un dépôt, les scripts sont enregistrés sans être exécutés. Un dossier non conforme n’est pas transformé de force en compétence.',
      },
      {
        title: 'Chaque publication est figée',
        body: 'Chaque publication fixe le contenu des fichiers, la licence et la source. Toute modification crée une nouvelle version ; les anciennes restent consultables.',
      },
      {
        title: 'Qui l’a utilisée et où',
        body: 'Les preuves de compatibilité indiquent la tâche, le client, sa version, la langue et la date, pour voir dans quelles conditions la compétence a été utilisée.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'lists', 'follow'],
    partNotes: {
      identity: 'Chaque compétence a une seule identité. Son dépôt d’origine et ses modifications restent visibles.',
      editions: 'Chaque publication fixe les fichiers, la licence et la source. Le téléchargement correspond à la version indiquée.',
      specs: 'Les paquets requis sont distingués des paquets facultatifs. Les déclarations manquantes et formats non pris en charge sont signalés.',
      credits: 'Auteurs et mainteneurs ont chacun une identité. Leurs autres compétences et serveurs sont liés à leur page.',
      ratings: 'Tant que le seuil n’est pas atteint, les notes ne sont pas moyennées. Seuls leur nombre et leur répartition sont affichés.',
      discussion: 'Usages, limites et signalements se discutent sur la page de la compétence.',
      lists: 'Organisez les compétences par flux de travail dans une liste et décrivez chacune.',
      follow: 'Suivez une compétence ou son auteur pour connaître ses nouvelles versions.',
    },
    connections: [
      { to: 'software', label: 'Paquets requis' },
      { to: 'mcp', label: 'Serveurs du même auteur' },
    ],
    community: {
      headline: 'Les auteurs de compétences sont identifiés.',
      body: 'Chaque auteur a une seule identité sur REZICS. Ses compétences, les serveurs qu’il maintient et les autres œuvres auxquelles il contribue figurent sur la même page. Suivez-le pour connaître ses prochaines publications.',
    },
    imageAlt: 'Une trousse avec de petits outils',
  },
  {
    id: 'apis',
    name: 'API Hub',
    tag: 'APIs',
    group: 'agents',
    summary: 'Versions, spécifications et notes des API publiques',
    meta: {
      title: 'API Hub : index des API publiques',
      description:
        'Répertoriez les versions des API publiques et leur historique. Les spécifications indiquent les méthodes de mesure et les dates pour permettre une comparaison. Notes et discussions sont liées à chaque version ; suivez une API pour recevoir ses changements.',
    },
    hero: {
      headline: 'Avant de choisir une API, consultez ses versions et ses preuves.',
      lede: 'Les versions, notes de mise à jour et retraits des API publiques sont réunis. Spécifications et tests indiquent méthodes, conditions et dates. Chaque version précise ses méthodes d’authentification et sa documentation. Notes et discussions indiquent la version concernée.',
    },
    features: [
      {
        title: 'Versions côte à côte',
        body: 'Versions et mises à jour sont répertoriées dans l’ordre. Les versions retirées ou annulées restent visibles avec leur statut.',
      },
      {
        title: 'Des mesures documentées',
        body: 'Chaque mesure indique sa méthode, ses conditions, son unité et sa date. Les chiffres restent liés à leur source.',
      },
      {
        title: 'Comparer côte à côte',
        body: 'Filtrez par usage, licence ou autre champ et comparez plusieurs API dans un tableau.',
      },
      {
        title: 'Authentification et documentation',
        body: 'Chaque version indique ses méthodes d’authentification et les sources de sa documentation. Filtrez directement sur ces informations, qui restent liées à leur version.',
      },
      {
        title: 'Recevoir les changements',
        body: 'Suivez une API pour recevoir dans votre boîte de réception les nouvelles versions et annonces de retrait, ou choisissez un résumé.',
      },
      {
        title: 'Organiser les API d’un projet',
        body: 'Rassemblez les API d’un projet dans une liste, indiquez leur usage, puis partagez-la ou exportez-la.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'follow', 'lists'],
    partNotes: {
      identity: 'Une API publique garde une identité unique à laquelle renvoient ses identifiants et anciens noms.',
      editions: 'Versions et mises à jour sont réunies, avec le statut des versions retirées.',
      specs: 'Les mesures indiquent méthode, conditions, unité et date, et peuvent être comparées dans un tableau.',
      credits: 'Les organisations et équipes de maintenance ont leur propre identité. Retrouvez leurs logiciels et serveurs MCP.',
      ratings: 'Les notes indiquent la question posée et le groupe qui a répondu.',
      discussion: 'Retours d’intégration, limites et alternatives sont discutés sur la page de l’API.',
      follow: 'Suivez une API pour recevoir les nouvelles versions et annonces de retrait.',
      lists: 'Rassemblez les API d’un projet dans une liste avec des notes sur leur usage.',
    },
    connections: [
      { to: 'mcp', label: 'Exposer comme serveur MCP' },
      { to: 'software', label: 'Logiciels de la même organisation' },
    ],
    community: {
      headline: 'Les intégrateurs partagent leurs retours.',
      body: 'Les développeurs peuvent discuter des limites, de la tarification et des alternatives sur la page de l’API. Les faits confirmés peuvent être proposés pour la fiche et sont publiés après vérification humaine.',
    },
    imageAlt: 'Quelques points de terminaison reliés',
  },
];
