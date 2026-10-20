// 書庫 (books): every visible string of the books site. Design record and sources:
// src/sites/books/SITE.md and src/sites/books/facts.md. The eight part notes and the kind's
// name come from src/content/kinds.ts and are imported by the pages, never copied here.
// Shapes follow the v3 parts (V3-SPEC): hero, sections (eyebrow, heading, lead), photo rows,
// facts lists (title left, text right), statements (a line and its muted continuation), tile
// masonry and the closing.
import type { MiniSite } from '../schema';

export type TitledText = {
  title: string;
  body: string;
};

/** A section: eyebrow label, serif heading, lead text. */
type Head = { label: string; headline: string; lead?: string };

/** A large serif statement: `text`, then its muted continuation `sub`; `note` sits under it. */
export type StatementText = { text: string; sub: string; note?: string };

/** A paper still-life picture: its alt text. Files live in public/images/sites/books/. */
type Picture = { alt: string };

export type BooksStrings = {
  /** Shared labels across the site's pages; `closing` ends every page. */
  common: { contents: string; nextPage: string; nextSite: string; closing: { title: string; body: string } };
  landing: {
    hero: { headline: string; lede: string } & Picture;
    /** Photo row: the editions picture beside one fictional series' editions (示意). */
    editions: Head & { lead: string; caption: string; link: string } & Picture;
    /** Facts list: how the bookmark counts across editions and languages (示意). */
    progress: Head & { steps: TitledText[] };
    reading: StatementText;
    /** Photo row: the folded strip beside writing and publishing. */
    writing: Head & { body: string[]; link: string } & Picture;
    /** Tile masonry of the site's own pages: a short line per tile. */
    pages: Head & { rows: { slug: string; line: string }[] };
    parts: Head;
    /** Tile masonry of neighbouring kinds. */
    connections: Head & { tiles: { kind: 'anime' | 'manga' | 'visual-novels' | 'games'; line: string }[] };
  };
  work: {
    hero: { headline: string; lede: string };
    /** The example's title page (text only, per EXAMPLE-WORK.md). */
    example: { title: string; original: string; author: string; caption: string };
    sections: Head & { rows: (TitledText & { example: string })[] };
    action: Head & { rows: TitledText[]; caption: string };
    ratings: Head & { rows: TitledText[] };
    edit: Head & { rows: TitledText[] };
    languages: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  wiki: {
    /** The page head beside the cut-out picture. */
    hero: { headline: string; lede: string } & Picture;
    flow: Head & { steps: TitledText[] };
    position: Head & {
      control: string;
      positions: { label: string; chapter: number }[];
      groups: { people: string; events: string };
      source: string;
      aliases: string;
      entries: { group: 'people' | 'events'; name: string; aliases?: string; chapter: number; note: string }[];
      /** What a folded entry says: the chapter it appears in (`{n}`). */
      later: string;
      status: string;
      statusAll: string;
      rail: string;
      rules: string[];
    };
    text: StatementText & { facts: TitledText[] };
    /** Tile masonry of a wiki's own pages (示意, not links). */
    zone: Head & { tiles: { name: string; line?: string }[]; caption: string };
    review: Head & { states: TitledText[]; rules: string[] };
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  editions: {
    /** The page head beside the stack picture. */
    hero: { headline: string; lede: string } & Picture;
    releases: Head & { kinds: TitledText[] };
    translations: Head & { rows: TitledText[]; stateLabel: string; states: string[]; notes: string[] };
    sameWork: Head & { rows: TitledText[]; caption: string };
    orders: Head & {
      rows: [string, string];
      tiles: string[];
      /** Reading order as indexes into `tiles`. */
      reading: number[];
      notes: TitledText[];
    };
    isbn: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  library: {
    /** The page head beside the three strips. */
    hero: { headline: string; lede: string } & Picture;
    /** Three reads of one book as three strips, the photograph seen flat (`share`: its length). */
    reads: Head & { rows: (TitledText & { share: number })[]; caption: string };
    move: Head & { steps: TitledText[]; retention: string };
    continue: StatementText;
    shelf: Head & { rows: TitledText[] };
    privacy: Head & { rows: TitledText[] };
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  serial: {
    /** The page head beside the folded strip. */
    hero: { headline: string; lede: string } & Picture;
    safe: Head & { rows: TitledText[] };
    mirror: Head & { rows: TitledText[]; notes: string[] };
    ai: Head & { rows: TitledText[]; notes: string[] };
    world: Head & { items: string[] };
    backup: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  publish: {
    hero: { headline: string; lede: string };
    buy: Head & { steps: TitledText[]; caption: string };
    statement: Head & { rows: TitledText[]; note: string };
    distributed: Head & { rows: TitledText[]; policy: TitledText[] };
    community: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
};

const strings: BooksStrings = {
  common: {
    contents: 'Contenu de cette page',
    nextPage: 'Page suivante',
    nextSite: 'Domaines associés',
    closing: {
      title: 'Pour trouver votre prochaine lecture, ouvrez la Bibliothèque.',
      body: 'Chaque livre, chaque édition et chaque lecture sont réunis dans le même compte.',
    },
  },

  landing: {
    hero: {
      headline: 'Une œuvre, toutes ses éditions et votre progression.',
      lede: 'Textes d’origine et traductions, volumes et omnibus sont distincts et liés à la même œuvre. Prochain volume, Wiki et discussions suivent votre progression.',
      alt: 'Une rangée de feuilles vert foncé se déploie autour d’une bande vert clair, comme un marque-page.',
    },
    editions: {
      label: 'Éditions',
      headline: 'Chaque publication a sa fiche.',
      lead: 'Pour un même roman léger, l’original japonais, les éditions en chinois traditionnel et en anglais, ainsi que l’omnibus chinois, sont des publications distinctes aux contenus différents. Avec ou sans ISBN, un texte publié en ligne reste une œuvre dans la Bibliothèque.',
      caption: 'Exemple : une série fictive de douze volumes de roman léger.',
      link: 'Voir les éditions et les séries',
      alt: 'Des feuilles vertes de tailles différentes sont empilées, alignées en bas à gauche. L’une est bleu clair.',
    },
    progress: {
      label: 'Progression de lecture',
      headline: 'Votre marque-page indique la suite.',
      lead: 'Reprenons cette série de douze volumes : le chinois traditionnel est paru jusqu’au volume 6, le japonais jusqu’au volume 12, et vous venez de terminer le volume 6 en chinois traditionnel.',
      steps: [
        { title: 'Chaque volume est une œuvre', body: 'Chaque volume d’une série est une œuvre. Le volume 7 reste la même œuvre, quelle que soit sa langue de publication.' },
        { title: 'Un omnibus compte une fois', body: 'L’omnibus en chinois traditionnel rassemble les volumes 1 à 3 et compte comme une publication. Une fois lu, chacun des trois volumes est marqué comme lu, sans doublon.' },
        { title: 'Le prochain volume dans votre langue', body: 'Le volume 7 n’est pas encore paru en chinois traditionnel. La Bibliothèque indique que vous êtes à jour dans cette langue et vous prévient à sa sortie.' },
        { title: 'Changer de langue compte aussi', body: 'Si vous lisez les volumes 7 et 8 en japonais avant de reprendre le chinois traditionnel, ils restent marqués comme lus. Les traductions sont des textes d’une même œuvre et votre progression est conservée.' },
        { title: 'Posséder un livre ne signifie pas l’avoir lu', body: 'La présence d’un livre sur votre étagère est distincte de son statut de lecture.' },
      ],
    },
    reading: {
      text: 'Le Wiki et les discussions suivent votre lecture ;',
      sub: 'personnages, événements et discussions à venir restent masqués, sauf si vous choisissez de tout afficher.',
    },
    writing: {
      label: 'Écriture et publication',
      headline: 'Les auteurs sont aussi dans la Bibliothèque.',
      body: [
        'Les auteurs écrivent, planifient et publient leurs chapitres ici. Les lecteurs reprennent à l’endroit où ils se sont arrêtés.',
        'Les créateurs sous contrat vendent directement aux lecteurs leurs livres numériques sous licence, sans DRM. La page de vente se trouve à côté des discussions de l’œuvre.',
      ],
      link: 'Voir comment écrire en série',
      alt: 'Une longue bande de papier vert foncé est pliée en pages, puis s’étend à plat. Un petit papier vert clair repose sur le pli.',
    },
    pages: {
      label: 'Pages de la Bibliothèque',
      headline: 'Trouvez, lisez et écrivez des livres ici.',
      rows: [
        { slug: 'work', line: 'Tout sur une œuvre, sur une seule page' },
        { slug: 'wiki', line: 'Créez le Wiki d’un livre avec votre agent IA' },
        { slug: 'editions', line: 'Distinguer traductions, omnibus et séries' },
        { slug: 'library', line: 'Consigner chaque lecture' },
        { slug: 'serial', line: 'Écrire et lire chapitre par chapitre' },
        { slug: 'publish', line: 'Vendre des livres numériques sans DRM' },
      ],
    },
    parts: {
      label: 'Fonctions',
      headline: 'Huit fonctions pour la Bibliothèque.',
      lead: 'Les anime, les mangas et les jeux reposent sur ces mêmes fonctions. La Bibliothèque en choisit huit.',
    },
    connections: {
      label: 'Domaines associés',
      headline: 'Les histoires des livres se retrouvent dans d’autres domaines.',
      lead: 'Depuis la page de l’œuvre d’origine, retrouvez chacune de ses adaptations.',
      tiles: [
        { kind: 'anime', line: 'L’anime adapté est relié à l’œuvre d’origine' },
        { kind: 'manga', line: 'Le manga adapté a ses propres notes' },
        { kind: 'visual-novels', line: 'Un même catalogue et une même Bibliothèque pour les romans légers' },
        { kind: 'games', line: 'Les jeux du même auteur sous la même identité' },
      ],
    },
  },

  work: {
    hero: {
      headline: 'Tout sur une œuvre commence sur cette page.',
      lede: 'La page de l’œuvre est le centre de la Bibliothèque. Faits, notes, éditions et progression, séries et adaptations, Wiki et discussions sont organisés dans l’ordre utile à la lecture.',
    },
    example: {
      title: 'A Certain Magical Index',
      original: 'とある魔術の禁書目録',
      author: 'Kazuma Kamachi',
      caption: 'Le titre s’affiche dans votre langue, tandis que l’original reste visible à côté. Voici un exemple de page, parcourue de haut en bas.',
    },
    sections: {
      label: 'Huit sections',
      headline: 'Huit sections, de haut en bas.',
      lead: 'Les sections inutiles à un type d’œuvre sont omises. L’ordre et les liens des autres restent stables.',
      rows: [
        {
          title: 'Identité et prochaine étape',
          body: 'Couverture, titre, auteur et notes avec leur échelle, leur nombre et leur périmètre. À côté figurent l’édition choisie, votre statut de lecture et votre progression.',
          example: 'Vous êtes au volume 5 ; le bouton principal indique « Continuer la lecture ».',
        },
        {
          title: 'Présentation',
          body: 'Un résumé sans révélation, les informations principales, quelques tags et des avertissements de contenu. Développez la section pour voir tous les faits, leurs sources et l’option « Proposer une correction ».',
          example: 'Roman léger écrit par Kazuma Kamachi et illustré par Kiyotaka Haimura. La série principale est publiée depuis 2004.',
        },
        {
          title: 'Vos éditions et où les trouver',
          body: 'L’édition choisie apparaît d’abord, puis quelques éditions correspondantes et enfin la liste complète, consultable par pages.',
          example: 'L’original japonais et les traductions en chinois traditionnel et en anglais, chacune avec le nom du traducteur.',
        },
        {
          title: 'Volumes et relations',
          body: 'La prochaine partie à lire apparaît en premier, suivie des volumes dans l’ordre, puis des suites et adaptations. Ordre de publication et ordre de lecture recommandé sont séparés.',
          example: 'Les trois séries, A Certain Magical Index, New Testament et Genesis Testament, sont liées comme suites.',
        },
        {
          title: 'Explorer le Wiki',
          body: 'Personnages principaux, crédits essentiels, chronologie ou guide des chapitres jusqu’à votre progression, avec des liens vers les pages du Wiki.',
          example: 'Si vous êtes au volume 5, la chronologie s’arrête au volume 5.',
        },
        {
          title: 'Notes et critiques',
          body: 'Répartition et nombre de notes, avec la question posée, le public et l’objet évalué. Filtrez par édition ou langue de critique. Une note n’est pas nécessaire pour rédiger une critique.',
          example: 'La note de l’histoire est distincte de celle d’une traduction.',
        },
        {
          title: 'Discussions et communautés',
          body: 'L’œuvre, ses volumes et ses éditions ont chacun leurs discussions. Il n’est pas nécessaire de rejoindre une communauté pour les lire.',
          example: 'Pour parler du volume 5, ouvrez la discussion depuis sa page.',
        },
        {
          title: 'Listes et découverte',
          body: 'Les listes et ordres de lecture qui incluent l’œuvre sont accompagnés de leurs raisons. Plus bas figurent identifiants, sources et historique des révisions.',
          example: 'Une liste de romans légers pour débuter explique pourquoi elle inclut cette œuvre.',
        },
      ],
    },
    action: {
      label: 'Bouton principal',
      headline: 'Un seul bouton principal en haut de page.',
      lead: 'Le texte du bouton dépend de votre relation à l’œuvre. Suivi et ajout à une liste sont deux actions distinctes.',
      rows: [
        { title: 'Aucune édition choisie', body: 'Le bouton indique « Choisir une édition ».' },
        { title: 'Édition choisie, lecture non commencée', body: 'Le bouton indique « Commencer la lecture ».' },
        { title: 'Lecture en cours', body: 'Le bouton indique « Continuer la lecture » et vous ramène à votre progression.' },
      ],
      caption: 'Sur mobile, la couverture est une petite image à côté du titre. Identité, édition, statut et bouton apparaissent sur le premier écran.',
    },
    ratings: {
      label: 'Notes',
      headline: 'Chaque note précise ce qu’elle évalue.',
      lead: 'Les lecteurs de l’original notent l’histoire, ceux d’une traduction peuvent aussi noter la traduction, et les auditeurs d’un livre audio la narration.',
      rows: [
        { title: 'Objet de la note', body: 'Histoire, traduction et narration sont notées séparément.' },
        { title: 'Qui a noté', body: 'Chaque moyenne précise qui a noté : tout le monde, une communauté que vous avez rejointe ou une autre communauté.' },
        { title: 'Série et volumes', body: 'La note de la série est distincte de celles de ses volumes.' },
      ],
    },
    edit: {
      label: 'Modifications',
      headline: 'Modifiez vos données ; proposez une correction des faits partagés.',
      rows: [
        { title: 'Modification directe, annulable', body: 'Statut de lecture, progression, notes et listes. Annulez une modification en un clic.' },
        { title: 'Correction vérifiée par une personne', body: 'Faits, relations, titres et alias. Chaque proposition cite ses sources et est appliquée après vérification humaine.' },
      ],
    },
    languages: {
      text: 'Langue de l’interface, des titres et des éditions,',
      sub: 'chacune se règle séparément.',
      note: 'Passer l’interface en anglais ne change pas la traduction chinoise que vous lisez. Un titre traduit en chinois ne signifie pas qu’une édition chinoise existe. Les critiques indiquent aussi leur langue.',
    },
    finaleLead: 'Explorez les pages de l’œuvre chapitre par chapitre, selon votre progression.',
  },

  wiki: {
    hero: {
      headline: 'Chaque livre a son Wiki.',
      lede: 'Le détenteur du livre utilise son agent IA sur son ordinateur pour relever personnages, lieux et événements chapitre par chapitre. Après vérification humaine, le Wiki est publié. Chaque lecteur ne voit que les chapitres qu’il a lus.',
      alt: 'Des fentes de différentes longueurs sont découpées dans une feuille vert foncé. Les morceaux sont rangés sur un carton bleu clair.',
    },
    flow: {
      label: 'Du fichier au Wiki',
      headline: 'D’un fichier à un Wiki.',
      steps: [
        { title: 'Votre fichier', body: 'Le fichier TXT ou EPUB reste sur votre ordinateur.' },
        {
          title: 'Votre agent IA',
          body: 'L’outil découpe le texte en passages avec des références précises. Votre agent le lit chapitre par chapitre et relève les personnages et leurs alias, leurs relations, les événements et les lieux.',
        },
        {
          title: 'Proposition avec sources',
          body: 'Chaque fait indique sa position dans le texte et un bref extrait comme preuve. L’agent utilise d’abord l’API pour retrouver les personnages et lieux déjà répertoriés, puis soumet tous les résultats ensemble.',
        },
        {
          title: 'Publication après vérification',
          body: 'Une personne valide la proposition entière et le Wiki de l’œuvre est mis à jour. Pour un nouveau chapitre, seuls les ajouts et modifications sont soumis.',
        },
      ],
    },
    position: {
      label: 'Progression de lecture',
      headline: 'Le Wiki suit votre progression chapitre par chapitre.',
      lead: 'Exemple illustratif avec un roman fictif : la liste des personnages et événements affichée varie selon votre progression.',
      control: 'Progression de lecture',
      positions: [
        { label: 'Chapitre 1', chapter: 1 },
        { label: 'Chapitre 3', chapter: 3 },
        { label: 'Chapitre 9', chapter: 9 },
        { label: 'Chapitre 16', chapter: 16 },
        { label: 'Chapitre 22', chapter: 22 },
        { label: 'Tout', chapter: 30 },
      ],
      groups: { people: 'Personnages', events: 'Événements' },
      source: 'Source : chapitre {n}',
      aliases: 'Alias :',
      entries: [
        { group: 'people', name: 'Personnage principal', aliases: 'Surnoms, pseudonyme', chapter: 1, note: 'Narrateur de l’histoire, il a grandi dans une ville portuaire.' },
        { group: 'people', name: 'Sœur du personnage principal', chapter: 1, note: 'Elle travaille dans une librairie en ville.' },
        { group: 'people', name: 'Nouveau voisin', chapter: 3, note: 'Un jeune homme vient d’emménager dans la maison d’en face.' },
        { group: 'people', name: 'Peintre en voyage', chapter: 16, note: 'Il séjourne dans un hôtel près du port.' },
        { group: 'events', name: 'Réouverture de la librairie', chapter: 1, note: 'La librairie où travaille sa sœur a une nouvelle enseigne.' },
        { group: 'events', name: 'Réception au port', chapter: 9, note: 'Le personnage principal adresse la parole à son voisin pour la première fois lors d’une réception.' },
        { group: 'events', name: 'Une longue lettre', chapter: 16, note: 'La lettre révèle leur passé commun.' },
        { group: 'events', name: 'Le navire quitte le port', chapter: 22, note: 'La nouvelle arrive dans une lettre de sa sœur.' },
      ],
      later: 'Apparaît au chapitre {n}. Masqué pour l’instant.',
      status: 'Progression : chapitre {n}. La suite n’apparaît pas ici.',
      statusAll: 'Tout le contenu est affiché, y compris la fin.',
      rail: 'Le livre compte 30 chapitres.',
      rules: [
        'Sans connexion, les révélations sont masquées par défaut et la page le précise.',
        'Une fois connecté, votre progression par défaut est le dernier chapitre lu. Marquer un livre comme « lu » dans la Bibliothèque signifie que vous l’avez terminé.',
        'Chacun peut choisir sa progression ou afficher tout le contenu.',
        'La progression ne vaut que pour une même continuité. Votre lecture de la version en ligne ne révèle pas le contenu de l’édition publiée.',
      ],
    },
    text: {
      text: 'REZICS ne reçoit pas le texte intégral ;',
      sub: 'il ne reçoit que des propositions, avec leur position dans le texte et un bref extrait.',
      facts: [
        { title: 'Vous choisissez le modèle', body: 'Avec un modèle en ligne, le texte est transmis au service que vous choisissez. Avec un modèle local, il reste sur votre ordinateur.' },
        { title: 'Code source ouvert', body: 'L’outil est sous licence Apache-2.0. Aucun compte n’est nécessaire. Il n’envoie pas de données d’utilisation et ne télécharge rien depuis Internet de lui-même.' },
        { title: 'Aucun déchiffrement ni contournement', body: 'Les fichiers protégés ne peuvent pas être ouverts. L’outil ne contient aucune fonction de déchiffrement ou de contournement, et n’en appelle pas d’autres.' },
        { title: 'Des extraits limités', body: 'La longueur de chaque extrait et leur volume total par livre sont limités par l’API de REZICS.' },
      ],
    },
    zone: {
      label: 'Zone',
      headline: 'Un Wiki est une Zone de l’œuvre.',
      lead: 'Chaque fait des encadrés et des listes est la même donnée que consultent filtres, listes et autres Zones. Corrigez un nom ici, il sera corrigé partout.',
      tiles: [
        { name: 'Page de l’œuvre', line: 'La page centrale, avec le Wiki en détail' },
        { name: 'Personnages' },
        { name: 'Lieux' },
        { name: 'Chronologie' },
        { name: 'Guide des chapitres' },
        { name: 'Relations' },
      ],
      caption: 'Exemple : pages du Wiki d’une œuvre.',
    },
    review: {
      label: 'Vérification',
      headline: 'Un agent IA propose, une personne vérifie.',
      lead: 'Chaque personnage et lieu trouvé par l’agent est comparé aux données du graphe. Quatre résultats sont possibles.',
      states: [
        { title: 'Correspondance', body: 'Correspond à un personnage ou un lieu déjà répertorié.' },
        { title: 'Nouveau', body: 'Absent du graphe ; la proposition crée une fiche.' },
        { title: 'Incertain', body: 'Plusieurs correspondances possibles ; la personne qui vérifie tranche.' },
        { title: 'Indisponible', body: 'Aucune correspondance disponible pour l’instant ; à vérifier lors de l’examen.' },
      ],
      rules: [
        'Les correspondances sont des propositions ; les données ne sont jamais fusionnées automatiquement.',
        'Une proposition pour un nouveau chapitre ne supprime pas les faits déjà acceptés. Toute révocation doit être motivée.',
        'Les références des extraits sont vérifiables : avec le même fichier, la personne qui vérifie peut comparer chaque passage à l’original.',
        'Chaque communauté décide si les agents peuvent rédiger des entrées et si les textes générés sont acceptés. Par défaut, le Wiki n’accepte que des faits et une structure.',
        'Chaque élément visible par les lecteurs a d’abord été vérifié par une personne.',
      ],
    },
    finaleLead: 'Comment distinguer les éditions d’une même œuvre.',
  },

  editions: {
    hero: {
      headline: 'Une œuvre peut avoir plusieurs éditions.',
      lede: 'Textes d’origine et traductions, livres brochés et numériques, omnibus et feuilletons en ligne sont répertoriés séparément et liés à la même œuvre. Vous savez quelle édition vous avez et gardez votre progression dans la série.',
      alt: 'Des feuilles vertes de tailles différentes sont empilées, alignées en bas à gauche. L’une est bleu clair.',
    },
    releases: {
      label: 'Quatre formes de publication',
      headline: 'Chaque publication est identifiée.',
      lead: 'Un livre vendu dans trois boutiques garde une seule fiche d’édition, avec trois lieux d’achat. Les copies non autorisées sont consignées séparément et ne sont pas confondues avec l’édition officielle.',
      kinds: [
        { title: 'Édition publiée', body: 'Édition en volume, brochée, numérique ou spéciale d’un éditeur. La fiche consigne le contenu réellement publié à cette date, sans ajout ultérieur.' },
        { title: 'Publication en ligne', body: 'Un feuilleton en ligne est aussi une publication réelle. Son adresse d’origine et ses archives datées sont conservées.' },
        { title: 'Édition figée de REZICS', body: 'Une sélection de contenu sur REZICS est archivée comme édition à un instant donné. Les révisions ultérieures ne la modifient pas.' },
        { title: 'Édition virtuelle', body: 'Une traduction d’utilisateur suit la structure d’une publication et précise sa couverture, par exemple les chapitres 1 à 20 d’un livre qui en compte 100. Elle ne signifie pas qu’une édition a réellement été publiée.' },
      ],
    },
    translations: {
      label: 'Traductions',
      headline: 'Chaque traduction indique son auteur et sa source.',
      rows: [
        { title: 'Traduction officielle', body: 'La traduction d’un éditeur est une publication à part entière, avec le nom du traducteur et les droits indiqués.' },
        { title: 'Traduction de fans', body: 'Elle appartient à son traducteur, correspond à une édition du texte d’origine et n’est jamais indiquée comme officielle.' },
        { title: 'Traduction automatique', body: 'C’est un nouveau texte comme les autres traductions, avec la mention « générée automatiquement ».' },
        { title: 'Traduction assistée par IA', body: 'Une personne reste à l’origine de la traduction, avec une aide de l’IA signalée pour permettre le filtrage.' },
      ],
      stateLabel: 'Un statut pour chaque passage traduit',
      states: ['À traduire', 'Traduit', 'Vérifié', 'Finalisé'],
      notes: [
        'Quand un passage source est modifié, la traduction correspondante est signalée comme à mettre à jour. Elle n’est ni supprimée ni rattachée à un nouveau texte en douce.',
        'Au départ, vous seul voyez votre traduction. Pour la publier, il faut un fondement : l’œuvre est dans le domaine public, sa licence libre autorise la traduction, l’auteur y consent ou a déjà accordé ce droit.',
        'L’auteur peut aussi refuser que l’œuvre d’origine soit liée à une traduction.',
        'Le chinois traditionnel n’est pas converti en chinois simplifié sans avertissement. Le texte converti est signalé et les noms propres restent inchangés.',
      ],
    },
    sameWork: {
      label: 'Une œuvre ou deux',
      headline: 'Quels changements gardent la même œuvre ?',
      lead: 'Tout dépend de la continuité de l’histoire ou de la volonté de la raconter à nouveau. Le nombre de mots, la langue, l’ISBN et le texte promotionnel ne sont pas des critères.',
      rows: [
        { title: 'Correction de fautes, révision légère ou ajout de chapitres compatibles', body: 'Même œuvre, éditions et publications distinctes.' },
        { title: 'Ordre de présentation modifié, événements inchangés', body: 'Même œuvre, les deux ordres sont conservés.' },
        { title: 'Un nouvel ordre change les causes ou rend les fins incompatibles', body: 'Deux œuvres liées par une « réécriture ».' },
        { title: 'Le personnage principal change de nom', body: 'S’il s’agit seulement d’un alias, l’œuvre reste la même.' },
        { title: 'L’histoire est racontée à nouveau depuis le début', body: 'Deux œuvres liées par un « redémarrage ».' },
        { title: 'La version en ligne est supprimée ou sa suite reste en ligne', body: 'Seuls la couverture et l’accès changent, pas l’identité de l’œuvre.' },
      ],
      caption: 'Votre progression dans la version en ligne ne marque pas comme lu le texte réécrit dans l’édition publiée. Une personne doit vérifier la correspondance entre les chapitres.',
    },
    orders: {
      label: 'Ordre',
      headline: 'Ordre de publication et ordre de lecture peuvent différer.',
      lead: 'Exemple : deux ordres de lecture pour une série. L’identifiant de chaque volume reste le même.',
      rows: ['Ordre de publication', 'Ordre de lecture recommandé'],
      tiles: ['Volume 1', 'Œuvre dérivée', 'Volume 2', 'Volume 3'],
      reading: [0, 2, 1, 3],
      notes: [
        { title: 'Omnibus', body: 'Un omnibus est une publication qui rassemble plusieurs volumes. Chaque volume reste une œuvre avec ses propres notes et sa propre progression.' },
        { title: 'Sous-série', body: 'Les sous-séries peuvent chacune commencer au volume 1, tout en étant reliées par un ordre général.' },
        { title: 'Terminer une série', body: 'La progression d’une série ne compte que les volumes obligatoires. Les œuvres dérivées et épisodes spéciaux facultatifs ne changent pas son statut de lecture.' },
        { title: 'Statut de la série', body: 'À jour, tous les volumes parus lus, série terminée et correspondance des chapitres à confirmer sont quatre états distincts.' },
      ],
    },
    isbn: {
      text: 'Saisissez un ISBN,',
      sub: 'retrouvez l’édition.',
      note: 'Un ISBN identifie une publication, pas l’œuvre elle-même. À partir d’un ISBN ou d’une fiche d’édition numérique, retrouvez l’édition, les textes ou traductions qu’elle contient et l’œuvre correspondante. Pour A Certain Magical Index, les éditions japonaise, chinoise traditionnelle et anglaise ont chacune leur ISBN et renvoient à la même œuvre.',
    },
    finaleLead: 'Découvrez ensuite votre propre historique.',
  },

  library: {
    hero: {
      headline: 'Votre historique suit votre lecture.',
      lede: 'Vous interrompez une lecture, la reprenez deux ans plus tard ou passez au livre audio pendant vos trajets. REZICS consigne chaque situation. Votre historique est privé par défaut et exportable en entier.',
      alt: 'Trois bandes vert foncé de longueurs différentes sont alignées. Un petit papier vert clair se trouve près de la plus courte.',
    },
    reads: {
      label: 'Chaque lecture',
      headline: 'Trois lectures d’un même livre, trois entrées.',
      lead: 'Une pause est enregistrée comme telle, tout comme un abandon ; aucun des deux ne compte comme une lecture terminée. Une relecture crée une nouvelle entrée sans remplacer la première.',
      rows: [
        { title: 'Première lecture', body: 'Livre imprimé, pause au chapitre 20.', share: 0.62 },
        { title: 'Deuxième lecture', body: 'Livre numérique, puis livre audio pour la seconde moitié. Lecture terminée.', share: 1 },
        { title: 'Troisième lecture', body: 'Relecture en cours.', share: 0.24 },
      ],
      caption: 'Exemple : chaque entrée correspond à l’édition réellement lue. Une relecture d’une autre édition crée une nouvelle entrée.',
    },
    move: {
      label: 'Import et export',
      headline: 'Importez et exportez votre historique de lecture.',
      steps: [
        { title: 'Importer un fichier', body: 'Un export d’un autre service ou un tableur préparé par vos soins.' },
        { title: 'Associer à l’édition lue', body: 'Chaque entrée est associée à l’édition réellement lue, sans déduction à partir du titre. Les données sans correspondance ne sont pas attribuées à un autre livre.' },
        { title: 'Conserver votre progression', body: 'Statut de lecture, dates, notes et critiques sont importés selon les données correspondantes.' },
        { title: 'Exporter à tout moment', body: 'Exportez votre historique, vos livres, notes et critiques dans un fichier réimportable.' },
      ],
      retention: 'Le fichier importé vous appartient. Les champs d’origine sont conservés sept jours à partir de l’envoi, puis leur lecture et leur export sont désactivés avant leur suppression planifiée. Exportez votre Bibliothèque pour les garder.',
    },
    continue: {
      text: 'Ouvrez REZICS,',
      sub: 'la suite vous attend.',
      note: 'La ligne « Continuer » en haut de l’accueil ouvre directement le prochain chapitre que vous n’avez pas lu.',
    },
    shelf: {
      label: 'Étagères',
      headline: 'Vos étagères font aussi partie de votre historique.',
      rows: [
        { title: 'Livres possédés', body: 'L’édition que vous possédez est clairement indiquée. Avoir acheté un livre ne signifie pas l’avoir lu.' },
        { title: 'Prêts et emprunts', body: 'Indiquez à qui vous avez prêté un livre, la date du prêt, celle du retour prévu et celle du retour réel. Le nom de l’emprunteur est du texte libre, sans lien vers un compte.' },
        { title: 'Notes de lecture', body: 'Une note privée est rattachée à un passage d’une édition précise. Si vous changez d’édition, elle reste liée au passage d’origine.' },
        { title: 'Le suivi des lectures en cours', body: 'Ajoutez un livre à « En cours » ou « À lire » pour le suivre. Vous recevez une notification quand un chapitre ou une édition paraît dans votre langue.' },
        { title: 'Listes', body: 'Une liste peut réunir romans, manga et jeux. Organisez-les, ajoutez des notes et exportez-la.' },
      ],
    },
    privacy: {
      label: 'Vie privée',
      headline: 'Votre historique de lecture est privé.',
      rows: [
        { title: 'Privé par défaut', body: 'Vos brouillons et votre historique de lecture restent privés, sauf si vous choisissez de les partager.' },
        { title: 'Pas de profil publicitaire', body: 'REZICS n’utilise pas votre historique privé pour créer un profil publicitaire ni en déduire des informations sensibles à des fins marketing.' },
        { title: 'Aucun consentement implicite à l’entraînement', body: 'Créer un compte, accepter les conditions d’utilisation ou utiliser une fonction d’IA ne vaut pas consentement à entraîner des modèles avec vos données.' },
        { title: 'Quand vous déléguez la gestion', body: 'Confier à quelqu’un la gestion de votre compte ou de votre communauté ne partage pas votre historique de lecture.' },
      ],
    },
    finaleLead: 'Passez maintenant à l’écriture.',
  },

  serial: {
    hero: {
      headline: 'Écrivez et lisez chapitre par chapitre.',
      lede: 'Sur REZICS, écrivez, planifiez et publiez un feuilleton en ligne, une version en série d’un roman léger ou votre propre roman. Vos manuscrits sont conservés et les lecteurs reprennent à l’endroit où ils se sont arrêtés.',
      alt: 'Une longue bande de papier vert foncé est pliée en pages, puis s’étend à plat. Un petit papier vert clair repose sur le pli.',
    },
    safe: {
      label: 'Manuscrits',
      headline: 'Vos manuscrits sont conservés.',
      rows: [
        { title: 'Chaque sauvegarde crée une version', body: 'Chaque version est conservée pour comparaison ou restauration. Vider un chapitre enregistre une version vide, mais un chapitre vide ne peut pas être publié.' },
        { title: 'Planifier selon votre fuseau horaire', body: 'Choisissez l’heure de publication locale. Le serveur publie les chapitres à l’heure prévue, même si le navigateur est fermé.' },
        { title: 'Quatre rôles pour les collaborateurs', body: 'Lecture, suggestions, modification et publication sont des droits distincts. Une personne qui peut modifier le texte ne peut pas forcément le publier.' },
        { title: 'La note de l’auteur est séparée du texte', body: 'La note de l’auteur à la fin d’un chapitre est une section distincte. Elle ne compte pas dans le nombre de mots, n’est pas traduite et ne figure pas dans une future édition.' },
      ],
    },
    mirror: {
      label: 'Auteurs et lecteurs',
      headline: 'Ce que les lecteurs voient quand l’auteur agit.',
      rows: [
        { title: 'Publier le chapitre 12', body: 'Les lecteurs qui suivent l’œuvre reçoivent une notification pour le nouveau chapitre dans leur langue.' },
        { title: 'Réviser le chapitre 3', body: 'Les commentaires restent rattachés au passage de la version qu’ils visaient, sans se déplacer.' },
        { title: 'Inclure le chapitre 5 dans un recueil', body: 'Le texte et les discussions restent uniques, tandis que la progression est enregistrée séparément dans chaque endroit.' },
        { title: 'Publier le chapitre 13', body: 'Les lecteurs qui ne l’ont pas encore lu ne voient pas de révélation dans leur fil.' },
      ],
      notes: [
        'Les lecteurs peuvent régler la taille du texte, la largeur des lignes, la police, l’indentation, les couleurs et l’espacement entre caractères chinois et japonais.',
        'Les œuvres japonaises peuvent se lire à la verticale, avec furigana et points de mise en relief.',
        'Les messages des lecteurs arrivent dans la boîte de réception de l’auteur.',
      ],
    },
    ai: {
      label: 'Déclaration sur l’IA',
      headline: 'Indiquez clairement l’usage de l’IA.',
      rows: [
        { title: 'Aucune', body: 'Aucune IA générative n’a contribué de manière substantielle à ce texte.' },
        { title: 'Assistance', body: 'Le texte est principalement écrit par une personne, avec une aide de l’IA pour trouver des idées, reformuler, réviser ou rédiger certains passages.' },
        { title: 'Génération', body: 'La majeure partie du texte a été générée par l’IA, y compris les traductions automatiques, même si une personne l’a ensuite modifiée.' },
      ],
      notes: ['La vérification humaine est indiquée séparément. Les lecteurs peuvent filtrer selon ces mentions.', 'Cette mention relève de la déclaration de l’auteur. REZICS ne considère pas un détecteur d’IA comme une preuve.'],
    },
    world: {
      label: 'Univers',
      headline: 'Votre univers, à côté du manuscrit.',
      lead: 'Organisez personnages, lieux, organisations, événements, objets et paramètres avec des modèles. Tout reste privé. Vous pouvez publier certaines pages dans le Wiki sans révéler l’historique privé des révisions.',
      items: [
        'Placez les lieux sur vos propres cartes.',
        'Les relations entre personnages peuvent être visualisées ou consultées sous forme de liste.',
        'Organisez la chronologie selon le calendrier de l’histoire, même lorsque les dates sont incertaines.',
        'L’outil de cohérence signale les contradictions entre vos notes et votre manuscrit sans écrire de chapitre à votre place.',
      ],
    },
    backup: {
      text: 'Tout votre manuscrit,',
      sub: 'exportable à tout moment.',
      note: 'Les révisions, notes et éléments de votre univers peuvent être exportés dans une sauvegarde réimportable. Les exports et les fonctions principales de création d’univers ne sont pas réservés à une offre payante.',
    },
    finaleLead: 'Quand votre texte est prêt, remettez-le à vos lecteurs.',
  },

  publish: {
    hero: {
      headline: 'Le livre est vendu, le fichier reste au lecteur.',
      lede: 'Sur REZICS, les créateurs sous contrat vendent directement leurs livres numériques, petits jeux et romans visuels autorisés. Les lecteurs reçoivent des fichiers sans DRM. La page de vente se trouve à côté des discussions et du Wiki de l’œuvre.',
    },
    buy: {
      label: 'Achat',
      headline: 'Choisissez une édition pour commencer.',
      steps: [
        { title: 'Choisir une édition', body: 'Choisissez la langue et l’édition, vérifiez le nom du traducteur, puis lisez un extrait.' },
        { title: 'Payer une fois', body: 'Payez une fois, sans abonnement. La licence accordée est indiquée avant l’achat.' },
        { title: 'Garder le fichier', body: 'Téléchargez un fichier EPUB ou PDF sans DRM. Aucun lanceur ni activation de DRM n’est nécessaire.' },
        { title: 'Recevoir les mises à jour', body: 'La Bibliothèque vous informe quand l’auteur publie une mise à jour prévue. Votre reçu est conservé et le fichier peut être téléchargé à nouveau selon les conditions d’achat.' },
      ],
      caption: 'Sans DRM ne signifie pas que vous pouvez revendre ou distribuer le fichier. La licence indiquée avant l’achat précise les usages autorisés.',
    },
    statement: {
      label: 'Relevé de paiement',
      headline: 'Le relevé du créateur détaille chaque déduction.',
      rows: [
        { title: 'Paiement du lecteur', body: 'Montant réellement reçu pour cette transaction.' },
        { title: 'Taxes', body: 'Taxes sur la transaction, comme la taxe de vente ou la TVA, collectées et reversées.' },
        { title: 'Frais de paiement', body: 'Frais de paiement réellement engagés et documentés.' },
        { title: 'Remboursements et litiges', body: 'Remboursements, annulations et rétrofacturations.' },
        { title: 'Revenu net', body: 'Après les frais de transaction convenus, le créateur et REZICS se partagent le revenu selon leur contrat.' },
      ],
      note: 'Les coûts d’exploitation comme l’hébergement, les salaires et le marketing ne sont pas déduits de ce revenu. Aucun frais n’est déduit deux fois.',
    },
    distributed: {
      label: 'Publications proposées',
      headline: 'Ce qui est vendu ici, et ce qui ne l’est pas.',
      rows: [
        { title: 'Livres numériques', body: 'Fichiers EPUB ou PDF sans DRM, avec les droits nécessaires.' },
        { title: 'Petits jeux et romans visuels', body: 'La version téléchargeable et la plateforme ou le compte nécessaires sont indiqués avant l’achat.' },
        { title: 'Extrait', body: 'Lisez un extrait avant de décider d’acheter.' },
        { title: 'Reçus et remboursements', body: 'Chaque achat donne lieu à un reçu et peut faire l’objet d’une demande de remboursement.' },
      ],
      policy: [
        { title: 'Créateurs sous contrat', body: 'Les ventes sont réservées aux créateurs sous contrat. Il ne s’agit pas d’une place de marché ouverte à tous.' },
        { title: 'Non proposés à la vente', body: 'Contenus sexuellement explicites et œuvres classées R18 ou R18G.' },
      ],
    },
    community: {
      text: 'La page de vente,',
      sub: 'se trouve à côté de la communauté de l’œuvre.',
      note: 'Avant l’achat, consultez critiques, discussions et Wiki. Après l’achat, votre édition, progression et reçu restent liés à l’œuvre. Suivez aussi les créateurs pour retrouver leurs romans et jeux. Ils voient les données de vente agrégées, pas l’historique de lecture des lecteurs.',
    },
    finaleLead: 'L’anime adapté renvoie lui aussi à l’œuvre d’origine.',
  },
};

export default {
  id: 'books',
  base: '/books/',
  name: 'Bibliothèque',
  theme: { kind: 'books' },
  next: 'anime',
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'Bibliothèque : suivez votre lecture',
        description:
          'Une page par œuvre distingue texte d’origine, traductions, volumes et omnibus. La Bibliothèque suit votre progression et vous indique le prochain livre. Wiki et discussions s’arrêtent au chapitre lu.',
      },
    },
    {
      slug: 'work',
      label: 'Page de l’œuvre',
      meta: {
        title: 'Page de l’œuvre : tout au même endroit',
        description:
          'La page rassemble faits, notes, votre édition et progression, volumes et adaptations, résumé du Wiki et discussions. Un seul bouton principal apparaît en haut, selon votre statut.',
      },
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: {
        title: 'Wiki+ : créez un Wiki avec votre agent IA',
        description:
          'Les lecteurs qui possèdent le texte exécutent l’outil open source sur leur ordinateur et demandent à leur agent IA de relever personnages, lieux et événements chapitre par chapitre. Après vérification, le contenu est publié dans le Wiki de l’œuvre. Chaque lecteur ne voit que ce qu’il a lu.',
      },
    },
    {
      slug: 'editions',
      label: 'Éditions et séries',
      meta: {
        title: 'Éditions et séries : chaque version est distincte',
        description:
          'Volumes, omnibus, éditions numériques, feuilletons en ligne et traductions sont des publications distinctes d’une même œuvre sur REZICS. Les séries suivent l’ordre des volumes ; une version dont l’intrigue a été réécrite est une œuvre distincte.',
      },
    },
    {
      slug: 'library',
      label: 'Historique de lecture',
      meta: {
        title: 'Historique de lecture : consigné et exportable',
        description:
          'Chaque lecture est consignée séparément : relecture, pause, abandon ou passage du livre imprimé au livre audio. Livres possédés et emprunts sont suivis à part. L’historique est privé par défaut, importable et exportable en entier.',
      },
    },
    {
      slug: 'serial',
      label: 'Séries',
      meta: {
        title: 'Séries : écrire et lire chapitre par chapitre',
        description:
          'Les auteurs peuvent restaurer chaque sauvegarde et planifier les chapitres selon leur fuseau horaire. La publication a lieu même si le navigateur est fermé. Les lecteurs reprennent là où ils s’étaient arrêtés et les discussions masquent la suite.',
      },
    },
    {
      slug: 'publish',
      label: 'Publication',
      meta: {
        title: 'Publication : vendre directement aux lecteurs',
        description:
          'Sur REZICS, les créateurs sous contrat vendent des livres numériques, petits jeux et romans visuels autorisés. Fichiers sans DRM, extraits, mises à jour et retéléchargements. Le relevé détaille taxes, frais et remboursements.',
      },
    },
  ],
  strings,
} satisfies MiniSite<BooksStrings>;
