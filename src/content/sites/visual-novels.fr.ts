// The 視覺小說 site: every visible string of /visual-novels/ and its six inner pages. Design
// record: src/sites/visual-novels/SITE.md; claims and sources: src/sites/visual-novels/facts.md.
// The six releases below are one illustrative dataset (labelled 示意資料 on the pages), shared by
// the landing's three queries and the releases table so both agree.
import type { Item, Meta, MiniSite, PartId } from '../schema';

/** The four conditions a release is qualified by. */
export type Dim = 'language' | 'platform' | 'region' | 'coverage';

export interface VnRelease {
  id: 'r1' | 'r2' | 'r3' | 'r4' | 'r5' | 'r6';
  /** Full name, as in the table. */
  name: string;
  /** Option keys of `options`, one per condition (the content, not the box). */
  values: Record<Dim, string>;
  /** Option key of the title language when it differs from the content language. */
  titleLanguage?: string;
  coverageNote?: string;
  translator: string;
  source: string;
  status: string;
}

const meta = (title: string, description: string): Meta => ({ title, description });

const releases: VnRelease[] = [
  { id: 'r1', name: 'Version d’origine (1.02)', values: { language: 'ja', platform: 'pc', region: 'jp', coverage: 'full' }, translator: 'Aucun', source: 'Aucun', status: 'Officielle' },
  { id: 'r2', name: 'Version officielle en chinois', values: { language: 'zh', platform: 'console', region: 'tw', coverage: 'full' }, translator: 'Éditeur', source: 'Version d’origine', status: 'Officielle' },
  { id: 'r3', name: 'Patch de traduction non officiel, version 1', values: { language: 'zh', platform: 'pc', region: 'any', coverage: 'partial' }, coverageNote: 'Route commune et deux routes', translator: 'Équipe de traduction de lecteurs', source: 'Version d’origine 1.02', status: 'Non officielle' },
  { id: 'r4', name: 'Patch de traduction non officiel, version 2', values: { language: 'zh', platform: 'pc', region: 'any', coverage: 'full' }, translator: 'Équipe de traduction de lecteurs', source: 'Version d’origine 1.02', status: 'Non officielle' },
  { id: 'r5', name: 'Version de démonstration en anglais', values: { language: 'en', platform: 'pc', region: 'any', coverage: 'trial' }, translator: 'Éditeur', source: 'Version d’origine', status: 'Officielle' },
  { id: 'r6', name: 'Version mobile', values: { language: 'ja', platform: 'mobile', region: 'tw', coverage: 'full' }, titleLanguage: 'zh', translator: 'Aucun', source: 'Aucun', status: 'Officielle' },
];

const strings = {
  /** Labels shared by several pages of this site. */
  shared: {
    demo: 'Exemple de données',
    dims: { language: 'Langue', platform: 'Plateforme', region: 'Région', coverage: 'Contenu' } as Record<Dim, string>,
    columns: { name: 'Version', translator: 'Traducteur', source: 'Source', status: 'Statut' },
    options: {
      language: { zh: 'Chinois traditionnel', ja: 'Japonais', en: 'Anglais' },
      platform: { pc: 'Ordinateur', console: 'Console', mobile: 'Mobile' },
      region: { jp: 'Japon', tw: 'Taïwan', any: 'Toutes les régions' },
      coverage: { full: 'Complète', partial: 'Partielle', trial: 'Démo' },
    } as Record<Dim, Record<string, string>>,
    /** Followed by the name of the condition a release fails. */
    fails: 'Non conforme : ',
    titleOnly: 'Titre en chinois uniquement',
    match: 'Correspondance',
    closed: 'Pas encore lu',
    nextPage: 'Page suivante',
    nextSite: 'Domaine suivant',
    nextSiteLine: 'Choisissez un serveur MCP adapté à partir de ses versions et de ses relevés de compatibilité.',
    /** The closing statement on every page of the site. */
    closing: 'Votre prochain roman visuel commence avec la bonne version.',
    releases,
  },

  images: {
    routes: 'Une bande de papier violet se divise sur un fond blanc chaud. Une branche bleue se prolonge vers la droite.',
    window: 'Des feuilles violettes, bleues et roses se superposent, traversées par une même ouverture.',
    thread: 'Deux feuilles violettes, l’une claire et l’autre foncée, sont reliées par des trous, comme une traduction et sa source.',
    fold: 'Une bande de papier violet se déplie par étapes, avec une extrémité encore pliée.',
    sites: 'Une même feuille violette forme deux structures distinctes qui partagent une base reliée.',
  },

  landing: {
    hero: {
      headline: 'La langue disponible est indiquée pour chaque version.',
      lede: 'Pour chaque version de chaque roman visuel, REZICS précise la langue, la plateforme, la région et le contenu inclus. Les traductions de lecteurs créditent leur équipe et indiquent leur version source.',
    },
    match: {
      label: 'Une même version',
      headline: 'Trois critères pour une seule version.',
      body: 'Choisir un roman visuel ressemble à suivre un itinéraire : chaque critère élimine une branche qui ne convient pas. La langue, la plateforme et le contenu doivent être indiqués pour une même édition. Une version en chinois, une autre sur ordinateur et une troisième complète ne sont pas combinées pour créer une réponse.',
      queriesLabel: 'Trois critères, trois réponses',
      /** A match: the release's name, then its translator and source. */
      answer: '{name}. Traducteur : {translator}, source : {source}.',
      none: 'Aucune version ne correspond. Une version mobile dont seul le titre est en chinois ne compte pas.',
      caption: 'Exemple : six éditions d’un roman visuel.',
    },
    statement: { text: 'Un titre traduit en chinois', more: 'ne signifie pas que le jeu est en chinois.' },
    parts: {
      label: 'Composants',
      headline: 'Les composants partagés ont chacun leur rôle dans les romans visuels.',
      body: 'Chaque domaine utilise les mêmes composants. Les romans visuels en utilisent ces huit.',
      notes: {
        identity: 'Une œuvre a une seule identité, à laquelle les versions d’origine, portages, traductions et correctifs sont liés.',
        editions: 'Chaque édition précise sa langue, sa plateforme, sa région et son contenu.',
        names: 'Les noms japonais d’origine, traductions chinoises, transcriptions et alias coexistent, chacun avec sa langue.',
        credits: 'Scénaristes, illustrateurs, musiciens, comédiens et traducteurs sont crédités sur leur propre page.',
        relations: 'Les suites, œuvres dérivées, portages et adaptations renvoient aux romans, anime et mangas associés.',
        facets: 'Filtrez par langue, plateforme, région et contenu, tous pour une même édition.',
        progress: 'Suivez votre progression par route et choisissez le niveau de révélation affiché.',
        wiki: 'Les personnages, lieux et événements proviennent du même graphe et restent limités à votre route.',
      } as Partial<Record<PartId, string>>,
    },
    pagesIndex: {
      label: 'Le site',
      headline: 'Six pages, chacune consacrée à un sujet.',
      rows: {
        releases: 'Comparez chaque version par langue, plateforme, région et contenu.',
        translations: 'Qui a traduit, depuis quelle version et jusqu’où.',
        characters: 'Personnages et comédiens ont chacun une identité.',
        spoilers: 'Filtrez les tags et découvrez les fins à votre rythme.',
        wiki: 'Un Wiki préparé à partir du script de l’œuvre.',
        zones: 'Sites chinois et japonais, identités partagées.',
      } as Record<string, string>,
    },
    neighbours: {
      label: 'Domaines associés',
      headline: 'Les adaptations restent liées à leurs œuvres d’origine.',
      body: 'Les romans visuels partagent leur catalogue avec les romans, les anime, les mangas et les jeux. Par exemple, « A Certain Magical Index » est un roman léger adapté en manga et en anime, ainsi qu’en roman visuel. Sur REZICS, le roman visuel a sa propre fiche, reliée à l’œuvre d’origine par la relation « adapté de ». Les notes et la progression sont distinctes.',
      items: [
        { kind: 'books', label: 'Les romans d’une même histoire dans la même Bibliothèque.' },
        { kind: 'anime', label: 'L’anime adapté renvoie à l’œuvre d’origine, avec les mêmes comédiens.' },
        { kind: 'manga', label: 'Manga et œuvre d’origine sont liés, avec des progressions distinctes.' },
        { kind: 'games', label: 'Plateformes, éditions et disponibilité suivent les mêmes règles que les jeux.' },
      ] as { kind: 'books' | 'anime' | 'manga' | 'games'; label: string }[],
    },
  },

  releases: {
    hero: {
      headline: 'Une ligne par version, avec tous ses critères.',
      lede: 'Un roman visuel peut exister en version d’origine, en portage, en traduction officielle, en patch non officiel ou en démo. REZICS consigne chaque version séparément et précise sa langue, ses plateformes, sa région de publication et le contenu inclus.',
    },
    matrix: {
      label: 'Filtres',
      headline: 'Chaque résultat correspond à une même version.',
      body: 'Si vous choisissez le chinois traditionnel, l’ordinateur et une version complète, les éditions affichées doivent remplir les trois critères. Chaque critère non rempli est indiqué à côté de l’édition concernée.',
      filtersLabel: 'Critères',
      any: 'Toutes',
      count: '{n} versions correspondantes sur {total}',
      note: 'Si une combinaison de critères n’est pas prise en charge, la raison est indiquée au lieu d’afficher une page vide.',
      caption: 'Exemple : six éditions d’un roman visuel filtrées selon les critères sélectionnés.',
    },
    languages: {
      text: 'La langue du titre',
      more: 'est distincte de celle du contenu.',
      body: 'Chaque édition précise deux langues : celle de l’emballage et du titre, puis celle du texte du jeu. Une édition dont seul le titre est traduit n’apparaît pas dans les filtres en chinois traditionnel. Les versions bilingues chinois-japonais sont indiquées dans les deux langues.',
    },
    coverage: {
      label: 'Contenu',
      headline: 'Complet, partiel ou démo : le contenu est indiqué.',
      body: 'Une version dont le contenu est inconnu est signalée comme non renseignée, jamais comme complète.',
      items: [
        { title: 'Complet', body: 'Cette version contient toute l’œuvre et toutes ses routes.' },
        { title: 'Partiel', body: 'Les parties incluses sont précisées, par exemple la route commune et deux routes.' },
        { title: 'Démo', body: 'Une démo a sa propre fiche et reste indiquée comme démo. Les avis sur une démo sont distincts de ceux sur la version complète.' },
      ] as Item[],
    },
    status: {
      label: 'Statut',
      headline: 'Une même version peut être vendue à plusieurs endroits.',
      body: 'Une édition reste une seule publication même si elle est proposée dans plusieurs boutiques. Chaque point d’accès est indiqué. Les annonces, dates prévues, reports et sorties sont consignés séparément, sans être confondus avec « disponible ».',
      items: [
        { title: 'Officielle', body: 'Une édition reconnue par le détenteur des droits.' },
        { title: 'Non officielle', body: 'Une édition non reconnue par le détenteur des droits. Elle est consignée séparément, sans être fusionnée avec la version officielle.' },
        { title: 'Retirée', body: 'Une édition retirée après sa sortie reste consignée.' },
        { title: 'Annulée', body: 'Une édition annoncée mais jamais publiée est indiquée comme annulée, et non comme sortie.' },
      ] as Item[],
    },
    follow: {
      label: 'Suivi',
      headline: 'Soyez averti des sorties dans les langues que vous lisez.',
      body: 'Suivez une œuvre pour recevoir dans votre boîte de réception les nouvelles versions dans vos langues. Vous pouvez aussi suivre séparément une version précise.',
    },
    finale: 'Retrouvez la source de chaque traduction.',
  },

  translations: {
    hero: {
      headline: 'Chaque traduction indique sa version source.',
      lede: 'Les traductions chinoises et l’original japonais appartiennent à la même œuvre. Les notes, personnages et pages Wiki+ sont réunis. La traduction a son propre relevé : REZICS indique le traducteur, la version source et le contenu traduit.',
    },
    lineage: {
      label: 'Origine',
      headline: 'Les traductions de lecteurs restent distinctes des traductions officielles.',
      body: 'Une traduction de lecteurs a sa propre fiche, liée à sa version source, et n’est jamais présentée comme officielle. Une traduction officielle a une fiche distincte. Les deux sont présentées côte à côte.',
    },
    record: {
      label: 'Détails de la traduction',
      headline: 'Traducteur, source et portée sont précisés.',
      items: [
        { title: 'Traducteur', body: 'Les équipes et les traducteurs ont chacun leur page. Retrouvez toutes les œuvres traduites par une même personne sur cette page.' },
        { title: 'Source', body: 'La traduction indique sa version source, par exemple la version d’origine 1.02, et non une référence vague à « l’original ». Si la source n’est pas confirmée, elle est signalée comme telle.' },
        { title: 'Portée', body: 'L’édition précise les routes incluses, comme la route commune, les routes disponibles et les éventuels suppléments. Vous savez avant de commencer si le texte revient au japonais en cours de route.' },
        { title: 'Mise à jour', body: 'Chaque nouvelle version d’un patch a sa propre fiche. L’ancienne conserve la portée qu’elle avait, pour savoir quelle version chaque personne a utilisée.' },
      ] as Item[],
    },
    reviews: {
      text: 'La qualité de la traduction',
      more: 's’évalue séparément.',
      body: 'Choisissez ce que vous évaluez : l’histoire, la traduction ou la réalisation. Un scénario prenant et une traduction maladroite reçoivent des notes distinctes. Vous pouvez aussi voir uniquement les avis des personnes qui lisent en chinois.',
    },
    several: {
      label: 'Plusieurs traductions',
      headline: 'Une œuvre peut avoir plusieurs traductions.',
      body: 'Plusieurs équipes peuvent traduire la même œuvre, chacune sous son nom et avec sa propre maintenance. Leurs relevés ne se remplacent pas. Les lecteurs peuvent choisir une traduction, et une communauté peut en recommander une.',
    },
    teams: {
      label: 'Pour les équipes de traduction',
      headline: 'Chaque version d’un patch a sa propre page.',
      items: [
        { title: 'Page de l’équipe', body: 'L’équipe et ses membres ont chacun une identité. Les œuvres traduites et chaque édition sont réunies sur la page de l’équipe.' },
        { title: 'Page de l’édition', body: 'Chaque version d’un patch a sa page et son fil de discussion. Les retours des joueurs sont réunis au même endroit.' },
        { title: 'Suivi', body: 'Les joueurs peuvent suivre votre équipe et être avertis de la sortie de nouveaux patchs.' },
        { title: 'Corrections', body: 'Si les informations d’une édition sont incorrectes, proposez une correction. Elle prend effet après vérification.' },
      ] as Item[],
    },
    finale: 'Chaque personnage et chaque comédien ont une identité unique.',
  },

  characters: {
    hero: {
      headline: 'Un personnage garde la même identité dans chaque version.',
      lede: 'Dans les suites, les portages, les adaptations en anime et les traductions, un même personnage conserve une identité unique. Son âge, son apparence et ses appellations peuvent varier selon l’œuvre, sans créer plusieurs personnages.',
    },
    variants: {
      label: 'Variantes',
      headline: 'Autre personnalité, autre ligne temporelle.',
      body: 'Les personnages ne sont séparés que lorsque c’est nécessaire. Une autre personnalité ou une version de la même personne dans une autre ligne temporelle devient une variante reliée au personnage principal. La relation précise aussi où elle est révélée dans l’histoire, afin que les personnes qui n’y sont pas encore restent protégées.',
      items: [
        { title: 'Personnage A', body: 'Le personnage principal. A conserve cette identité dans les suites, les portages et les adaptations.' },
        { title: 'Autre personnalité de A', body: 'Une variante de personnalité reliée au personnage A.' },
        { title: 'A dans une autre ligne temporelle', body: 'Une variante correspondante reliée au personnage A.' },
      ] as Item[],
      caption: 'Exemple de données. Une variante n’est reliée qu’à un personnage principal, qui n’est pas lui-même une variante.',
    },
    names: {
      label: 'Noms',
      headline: 'Les noms indiquent aussi le niveau de révélation.',
      body: 'Un personnage peut avoir un nom d’origine, un nom traduit, un surnom et un vrai nom. Chaque nom précise sa langue, les œuvres où il apparaît et son niveau de révélation. Selon vos préférences, la page affiche le nom courant ou celui qui en révèle le moins.',
      columns: { kind: 'Type', language: 'Langue', where: 'Œuvre', spoiler: 'Révélation' },
      rows: [
        { kind: 'Nom réel', language: 'Japonais', where: 'Œuvre et suite', spoiler: 'Sans révélation' },
        { kind: 'Nom traduit en chinois', language: 'Chinois traditionnel', where: 'Version officielle en chinois', spoiler: 'Sans révélation' },
        { kind: 'Surnom', language: 'Japonais', where: 'À partir de la route commune', spoiler: 'Sans révélation' },
      ],
      hidden: { kind: 'Nom véritable', spoiler: 'Visible après la seconde moitié de la route 2' },
      caption: 'Exemple de données. Le nom utilisé dans chaque œuvre est conservé avec son apparition.',
    },
    credits: {
      label: 'Équipe de production',
      headline: 'Les crédits de doublage renvoient aux personnages.',
      body: [
        'L’équipe de production est organisée par rôle : scénario, illustration, musique, doublage et traduction. Un crédit de doublage renvoie au comédien et au personnage, et précise la version concernée, par exemple lorsqu’un portage change de comédien.',
        'Les romans visuels et romans légers d’un même scénariste sont réunis sur sa page.',
      ],
    },
    query: {
      label: 'Recherche',
      headline: 'Les critères doivent s’appliquer au même personnage.',
      body: 'La recherche « héroïne rousse » trouve les œuvres où le personnage est à la fois une héroïne et rousse. Une œuvre avec un personnage secondaire roux et une héroïne brune n’apparaît pas dans les résultats.',
      items: [
        { title: 'Œuvre 1 : correspondance', body: 'L’héroïne est rousse. Les deux critères s’appliquent au même personnage.' },
        { title: 'Œuvre 2 : aucun résultat', body: 'Le personnage roux est secondaire et l’héroïne a les cheveux noirs. Les critères s’appliquent à deux personnes différentes.' },
      ] as Item[],
      caption: 'Exemple de données. Le protagoniste, les personnages principaux et les personnages secondaires sont des rôles distincts : un antagoniste peut être un personnage principal sans être le protagoniste.',
    },
    finale: 'Choisissez vos tags et découvrez l’histoire à votre rythme.',
  },

  spoilers: {
    hero: {
      headline: 'Les routes que vous n’avez pas lues restent cachées.',
      lede: 'Dans un roman visuel, les révélations arrivent souvent dans les routes ultérieures. REZICS adapte les contenus affichés à votre progression : tags, fiches de personnages et pages Wiki+ s’arrêtent là où vous en êtes.',
    },
    fold: {
      label: 'Contenu masqué',
      headline: 'La suite reste pliée.',
      body: 'Les passages lus sont visibles, tandis que les parties suivantes restent pliées. Aucun nom n’est révélé avant que vous y arriviez.',
    },
    route: {
      label: 'Progression',
      headline: 'La page s’ouvre jusqu’à votre position.',
      here: 'Vous en êtes ici',
      nodes: [
        { name: 'Prologue', fact: '' },
        { name: 'Route commune', fact: 'Le personnage A apparaît' },
        { name: 'Choix', fact: '' },
        { name: 'Route 1', fact: 'A et B sont des amis d’enfance' },
        { name: 'Fin de la route 1', fact: '' },
        { name: 'Route 2', fact: 'Le vrai nom de A' },
        { name: 'Vraie fin', fact: 'L’autre personnalité de A' },
      ],
      /** Index of the reader's position in `nodes`. */
      at: 3,
      caption: 'Exemple de données.',
      rules: [
        { title: 'Visiteurs', body: 'Les visiteurs non connectés voient les contenus jusqu’à la première révélation.' },
        { title: 'Après connexion', body: 'Par défaut, la limite suit votre progression la plus avancée. Une œuvre marquée comme terminée est considérée comme lue en entier.' },
        { title: 'Votre choix', body: 'Tout le monde peut choisir une position ou afficher l’ensemble du contenu.' },
        { title: 'Chaque route', body: 'La progression se compare au sein d’une même route. Les contenus des autres routes restent masqués, tandis que le reste de la page demeure visible.' },
      ] as Item[],
    },
    votes: {
      label: 'Deux votes',
      headline: 'La pertinence et les révélations font l’objet de deux votes distincts.',
      body: 'Quand un tag est associé à une œuvre, la communauté évalue séparément sa pertinence et le risque de révélation. Un tag pertinent qui révèle l’intrigue reste masqué jusqu’à ce que vous arriviez au passage concerné.',
      columns: { tag: 'Tag', fit: 'Pertinent', spoiler: 'Révélation' },
      rows: [
        { tag: 'Vie scolaire', fit: 'Majorité d’accord', spoiler: 'Non' },
        { tag: 'Fins multiples', fit: 'Majorité d’accord', spoiler: 'Non' },
      ],
      hidden: { fit: 'Majorité d’accord', spoiler: 'Oui, visible à partir de la route 2' },
      caption: 'Exemple de données.',
    },
    filters: {
      label: 'Filtres',
      headline: 'Incluez ou excluez des tags.',
      body: [
        'Pour chaque tag, choisissez de l’inclure ou de l’exclure. Pour plusieurs tags d’une même catégorie, vous pouvez demander qu’ils correspondent tous ou qu’un seul corresponde. Ouvrez un tag pour voir sa description, ses tags parents et enfants, et toutes les œuvres qui le portent.',
        'Suivez vos tags préférés et épinglez-les dans un onglet de la page d’accueil.',
      ],
    },
    apart: {
      text: 'Révélations, classification d’âge et masquage',
      more: 'restent distincts.',
      body: 'Les votes sur les révélations ne changent pas la classification d’âge, qui ne détermine pas non plus ce qui constitue une révélation. Les images et passages masqués s’affichent seulement si vous le choisissez. Cela ne compte pas comme un vote. Les niveaux général, R15, R18 et R18G sont réglés séparément. Les contenus non évalués portent la mention « non évalué » et ne sont pas considérés comme tout public.',
    },
    readings: {
      label: 'Interprétation des communautés',
      headline: 'Chaque communauté peut interpréter un tag à sa manière.',
      body: 'Chaque communauté peut définir ses propres critères et choisir les tags qu’elle accepte. Une définition plus stricte dans une communauté ne change pas l’usage ailleurs et ne supprime pas le tag d’origine.',
    },
    finale: 'Un Wiki préparé à partir du script et vérifié par une personne.',
  },

  wiki: {
    hero: {
      headline: 'Le script devient un Wiki après vérification.',
      lede: 'L’histoire d’un roman visuel se trouve dans son script. La personne qui le détient, comme le créateur de l’œuvre, peut utiliser la boîte à outils libre de REZICS avec son propre agent IA pour organiser les personnages et les événements, puis envoyer une proposition à vérifier. Une fois approuvée, elle devient le Wiki+ de l’œuvre.',
    },
    steps: {
      label: 'Cinq étapes',
      headline: 'Du script aux lecteurs, en cinq étapes.',
      items: [
        { title: 'Lire', body: 'La boîte à outils lit les scripts textuels pris en charge. Elle n’exécute jamais leur code.' },
        { title: 'Organiser', body: 'L’agent de votre choix relève les personnages, alias, relations, événements et lieux, section par section. Chaque élément comprend une position et une courte citation.' },
        { title: 'Comparer', body: 'La boîte à outils utilise l’API de REZICS pour rechercher les personnages et lieux existants. Chaque élément est indiqué comme rapproché, nouveau, incertain ou inaccessible.' },
        { title: 'Vérifier', body: 'Une personne vérifie la proposition. Déclarer que deux fiches désignent le même personnage est aussi une proposition, jamais une fusion silencieuse.' },
        { title: 'Publier', body: 'Le contenu approuvé est publié dans le Wiki+ de l’œuvre. Les mises à jour du script n’envoient que les différences, sans supprimer en silence le contenu déjà accepté.' },
      ] as Item[],
    },
    locator: {
      label: 'Repères',
      headline: 'Chaque information renvoie à une ligne de dialogue.',
      body: 'Un repère comprend trois éléments : l’empreinte du script, le tag et la position de la ligne. Le critère de route indique à quelle route cette ligne appartient. Les personnes qui détiennent la même version peuvent vérifier le texte sur leur propre ordinateur.',
      fields: [
        { label: 'Empreinte du script (préfixe)', value: 'sha256 9f2c04b7', code: true },
        { label: 'Tag', value: 'route_two_day3', code: true },
        { label: 'Dialogue', value: 'Ligne 142', code: false },
        { label: 'Route', value: 'Route 2', code: false },
      ],
      caption: 'Exemple de données. Les versions différentes doivent être mises en correspondance explicitement ; aucune information n’est appliquée automatiquement à une autre version.',
    },
    local: {
      text: 'Vous choisissez le modèle',
      more: 'qui lit le texte complet.',
      body: [
        'REZICS ne reçoit jamais le script complet, seulement les données organisées et de courtes citations. Le modèle que vous choisissez lit le script. En mode strict, l’inférence a lieu uniquement sur votre propre machine.',
        'La boîte à outils est libre sous licence Apache-2.0. Aucun compte REZICS n’est nécessaire, aucune donnée d’utilisation n’est renvoyée et l’outil ne récupère rien en ligne de lui-même. Il ne contourne aucune protection : les fichiers chiffrés ou protégés ne peuvent pas être lus.',
        'La longueur des citations est limitée par la plateforme. Le calcul s’applique à tous les comptes, traductions et sites.',
      ],
    },
    zone: {
      label: 'Site',
      headline: 'Wiki+ est un espace consacré à l’œuvre.',
      body: [
        'Les personnages, lieux, chronologies, guides de chapitres et relations ont leurs propres pages. Les encadrés et les listes utilisent le même graphe : corrigez un fait dans un Wiki et les filtres, listes et autres sites sont mis à jour. Les lecteurs ne voient que les contenus jusqu’à leur progression dans la route.',
        'La page de l’œuvre reste le point d’entrée, avec les notes, critiques, progression et résumé Wiki+. Chaque communauté décide si les agents peuvent rédiger des brouillons et si les textes générés sont autorisés. Par défaut, seules les données factuelles et la structure sont conservées.',
      ],
    },
    finale: 'Les communautés chinoise et japonaise ont chacune leur site.',
  },

  zones: {
    hero: {
      headline: 'Deux sites dans deux langues, avec les mêmes identités.',
      lede: 'Une communauté sinophone et une communauté japonaise peuvent chacune créer un site consacré aux romans visuels. Elles choisissent leurs titres, descriptions, classements et conventions, tout en partageant les mêmes œuvres, personnages et équipes de production.',
    },
    mirror: {
      label: 'Deux sites',
      headline: 'Une correction aux données partagées met les deux sites à jour.',
      body: 'Chaque site choisit ses titres, descriptions et classements. Les identités des œuvres, personnages et équipes de production sont partagées.',
      columns: { field: '', zh: 'Site chinois', ja: 'Site japonais' },
      rows: [
        { field: 'Titre', zh: 'Titre en chinois (exemple)', ja: 'Titre en japonais (exemple)' },
        { field: 'Présentation', zh: 'Rédigée par la communauté chinoise', ja: 'Rédigée par la communauté japonaise' },
        { field: 'Classement', zh: 'Selon la date de sortie en chinois', ja: 'Selon la date de sortie en japonais' },
      ],
      /** The row both sites share, set across both columns. */
      shared: { field: 'Identité', value: 'Même identité d’œuvre sur les deux sites' },
      caption: 'Exemple de données.',
    },
    zone: {
      label: 'Zone',
      headline: 'Une Zone est un site complet.',
      items: [
        { title: 'Pages et adresses', body: 'Le site choisit les adresses et la mise en page de l’accueil, des œuvres, des personnages et des éditions.' },
        { title: 'Navigation', body: 'Créez votre barre de navigation et vos pages, comme un guide de démarrage.' },
        { title: 'Apparence', body: 'Choisissez votre identité visuelle et votre mise en page. Les identités, la recherche, les langues, les sources et l’accessibilité restent cohérentes sur tous les sites.' },
        { title: 'Versions', body: 'Prévisualisez et vérifiez les changements du site avant publication. Vous pouvez annuler une erreur et exporter le site entier.' },
        { title: 'API', body: 'Les personnes et les agents IA gèrent le site avec la même API.' },
      ] as Item[],
    },
    space: {
      label: 'Espaces',
      headline: 'Le site présente la communauté et rassemble ses membres.',
      items: [
        { title: 'Site', body: 'Une Zone présente le site, avec ses pages et sa navigation. Elle peut aussi être privée.' },
        { title: 'Communauté', body: 'Une communauté a ses discussions, ses règles et ses membres. Elle choisit aussi les conventions qu’elle adopte.' },
        { title: 'Ensemble ou séparément', body: 'Un espace peut réunir le site et la communauté, ou n’en avoir qu’un seul.' },
        { title: 'Un seul suivi', body: 'Suivez l’espace une fois pour recevoir les actualités des deux côtés.' },
      ] as Item[],
    },
    community: {
      label: 'Communauté',
      headline: 'Discussions, notes et listes sont liées aux œuvres.',
      items: [
        { title: 'Discussions', body: 'Chaque œuvre et chaque version peut avoir son fil de discussion, lisible sans rejoindre la communauté.' },
        { title: 'Notes', body: 'Les notes indiquent qui les a données : tout le monde, une communauté ou vous seul.' },
        { title: 'Listes', body: 'Organisez des recommandations de départ ou un ordre de jeu, ajoutez des explications et exportez vos listes.' },
        { title: 'Bibliothèque', body: 'Une œuvre marquée comme terminée sur le site chinois l’est aussi sur le site japonais. Votre bibliothèque et vos listes vous suivent.',
        },
      ] as Item[],
    },
    script: {
      text: 'Le chinois traditionnel',
      more: 'reste du chinois traditionnel.',
      body: 'Les titres et descriptions indiquent leur langue. En l’absence de chinois traditionnel, une conversion automatique est clairement présentée comme une solution de remplacement, pas comme une traduction vérifiée. Les noms de personnes et d’œuvres ne sont pas modifiés.',
    },
    creators: {
      label: 'Créateurs',
      headline: 'Les créateurs de romans visuels peuvent aussi les publier ici.',
      body: 'Les créateurs sous contrat avec REZICS peuvent vendre des romans visuels conformes aux règles de vente : fichiers sans DRM, version de démonstration et achat unique. Les mises à jour et les nouveaux téléchargements suivent les conditions d’achat. La page de l’œuvre, la communauté et Wiki+ sont liés à une même identité.',
    },
    finale: 'Les serveurs MCP ont aussi leur propre index.',
  },
};

export type VnStrings = typeof strings;

export default {
  id: 'visual-novels',
  base: '/visual-novels/',
  name: 'Romans visuels',
  theme: { kind: 'visual-novels' },
  next: 'mcp',
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: meta(
        'Romans visuels : chaque version précisée',
        'Choisissez des romans visuels par langue, plateforme, région et contenu. Les traductions de lecteurs indiquent leur traducteur et leur version source. Personnages, équipes de production, progression par route et Wiki+ restent liés à la même œuvre.',
      ),
    },
    {
      slug: 'releases',
      label: 'Éditions',
      meta: meta(
        'Éditions : des critères pour une même version',
        'Chaque édition d’un roman visuel indique sa langue, sa plateforme, sa région et si son contenu est complet, partiel ou une démo. Tous les critères doivent correspondre à une même version. Une version dont seul le titre est traduit ne compte pas comme une version chinoise.',
      ),
    },
    {
      slug: 'translations',
      label: 'Traductions et traducteurs',
      meta: meta(
        'Traductions : préciser les sources',
        'Chaque traduction de roman visuel indique son traducteur, sa version source exacte et sa portée. Les traductions de lecteurs ne sont pas présentées comme officielles. Chaque mise à jour d’un patch est consignée séparément, et la traduction peut être évaluée indépendamment de l’histoire.',
      ),
    },
    {
      slug: 'characters',
      label: 'Personnages et production',
      meta: meta(
        'Personnages et équipes : une identité par personne',
        'Un personnage garde une identité unique dans les suites, portages et adaptations. Les noms affichés dépendent de la langue et du niveau de révélation. Les crédits du scénario, de l’illustration, de la musique et du doublage renvoient à la page de chaque personne.',
      ),
    },
    {
      slug: 'spoilers',
      label: 'Tags et révélations',
      meta: meta(
        'Tags et révélations : selon votre progression',
        'Incluez ou excluez des tags. Les communautés évaluent séparément leur pertinence et leur niveau de révélation. Les personnages et Wiki+ s’arrêtent à votre progression dans chaque route. Vous choisissez d’afficher l’ensemble.',
      ),
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: meta(
        'Wiki+ : un wiki préparé à partir du script',
        'Sur son propre ordinateur, la personne qui détient le script utilise une boîte à outils libre et son agent IA pour organiser les personnages, lieux et événements, avec un repère de dialogue pour chaque élément. REZICS ne reçoit pas le texte complet et la publication nécessite une vérification humaine.',
      ),
    },
    {
      slug: 'zones',
      label: 'Communautés et sites',
      meta: meta(
        'Communautés et sites : une même donnée, deux sites',
        'Les communautés chinoise et japonaise peuvent chacune créer un site consacré aux romans visuels. Elles choisissent leurs noms, descriptions, classements et conventions, tout en partageant les identités des œuvres, personnages et équipes de production.',
      ),
    },
  ],
  strings,
} satisfies MiniSite<VnStrings>;
