// The software site (軟體): every visible string of /software/ and its six inner pages, in the
// v3 language (.temp/sites/V3-SPEC.md). Design record and sources: src/sites/software/SITE.md and
// facts.md. All sample data (the program 範例編輯器, 甲／乙／丙系統, version numbers, dates, sizes,
// the hash, package names) is fictional and is labelled 示意 wherever it appears.
import type { Item, KindId, MiniSite } from '../schema';

export type StateId = 'compatible' | 'incompatible' | 'unknown' | 'stale' | 'unavailable';
/** One compatibility observation: a state, and the date of the adopted measurement where there is one. */
export type Cell = readonly [StateId, string?];
/** A section's opening: the eyebrow, the serif heading and its lead text. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}
/** A still-life picture in public/images/sites/software/ (`<name>-<width>.avif|webp`). */
export interface Picture {
  name: string;
  alt: string;
}

export interface SoftwareStrings {
  common: { nextPage: string; nextSite: string; sample: string; go: string };
  pictures: Record<'hero' | 'versions' | 'holes' | 'slit' | 'tabs', Picture>;
  states: Record<StateId, string>;
  channels: { stable: string; beta: string };
  sample: {
    program: string;
    /** Newest first. */
    releases: { version: string; channel: 'stable' | 'beta'; date: string; platforms: string; note?: string }[];
    environments: { name: string; short: string }[];
    /** Rows follow `environments`, columns follow `releases`. */
    cells: Cell[][];
  };
  landing: {
    hero: { label: string; headline: string; lede: string };
    pages: Head & { lines: Record<string, string> };
    compatibility: Head & { link: string };
    statement: { text: string; sub: string };
    program: Head & { items: Item[] };
    neighbours: Head & { link: string; tiles: { kind: KindId; line: string }[] };
    closing: string;
  };
  catalogue: {
    hero: { headline: string; lede: string };
    releases: Head;
    list: { caption: string; columns: [string, string, string, string]; points: Item[] };
    statement: { text: string; sub: string };
    identity: Head & { rows: Item[] };
    browse: Head & { points: Item[] };
    closing: string;
  };
  compatibility: {
    hero: { headline: string; lede: string };
    anatomy: Head & { rows: Item[] };
    states: Head & { body: Record<StateId, string>; caption: string; corner: string };
    conditions: Head & { example: string; candidates: Item[]; result: string };
    statement: { text: string; sub: string; note: string };
    closing: string;
  };
  reviews: {
    hero: { headline: string; lede: string };
    rules: Head & { facts: Item[] };
    anatomy: Head & { points: Item[] };
    statement: { text: string; sub: string };
    picks: Head & { rows: Item[] };
    closing: string;
  };
  updates: {
    hero: { headline: string; lede: string };
    levels: Head & { rows: Item[] };
    targets: Head & { rows: Item[] };
    changelog: Head & { more: string; caption: string; start: string };
    statement: { text: string; sub: string };
    closing: string;
  };
  publishing: {
    hero: { headline: string; lede: string };
    record: Head & { caption: string; fields: Item[] };
    steps: Head & { steps: Item[]; note: string };
    licence: Head & { points: Item[] };
    lock: Head & { points: Item[] };
    statement: { text: string; sub: string; note: string };
    maintenance: Head & { rows: Item[] };
    closing: string;
  };
  connections: {
    hero: { headline: string; lede: string };
    relations: Head & { rows: Item[] };
    kinds: Head & { rows: { kind: KindId; line: string; body: string }[] };
    people: Head;
    statement: { text: string; sub: string };
    closing: string;
  };
}

const site = {
  id: 'software',
  base: '/software/',
  name: 'Logiciels',
  theme: { kind: 'software' },
  next: 'visual-novels',
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'Logiciels : versions, plateformes et compatibilité testée',
        description:
          'Chaque logiciel a une identité dans REZICS, avec ses versions publiées sur chaque plateforme. La compatibilité repose sur des tests datés et documentés. Licence, mode d’obtention, notes et notifications de mise à jour sont liés à cette même identité.',
      },
    },
    {
      slug: 'catalogue',
      label: 'Catalogue et versions',
      meta: {
        title: 'Catalogue et versions : une identité par logiciel',
        description:
          'Le catalogue de logiciels de REZICS attribue une identité à chaque logiciel. Les versions de chaque plateforme sont archivées séparément et classées selon les règles de leur écosystème. Les projets dérivés ont leur propre notice reliée au projet d’origine. Les résultats de recherche indiquent leur nombre avec précision.',
      },
    },
    {
      slug: 'compatibility',
      label: 'Compatibilité',
      meta: {
        title: 'Compatibilité : des tests datés',
        description:
          'La compatibilité des logiciels dans REZICS repose sur des tests qui indiquent le critère, la méthode, les conditions et la date, ainsi que la version et le fichier concernés. Les états compatible, incompatible, inconnu, obsolète et indisponible sont distincts. Sans test, le résultat reste inconnu.',
      },
    },
    {
      slug: 'reviews',
      label: 'Avis',
      meta: {
        title: 'Avis : une note pour chaque version',
        description:
          'Dans REZICS, une note peut porter sur une seule version d’un logiciel. Le nombre de notes, leur répartition et la communauté concernée sont indiqués. Les moyennes entre versions sont calculées séparément selon une méthode publiée. Chaque sélection d’une communauté renvoie à la discussion qui l’a décidée.',
      },
    },
    {
      slug: 'updates',
      label: 'Suivre les mises à jour',
      meta: {
        title: 'Suivre les mises à jour : versions et notes de version',
        description:
          'Suivez un logiciel, un développeur ou un filtre dans REZICS. Les nouvelles versions et leurs notes vous sont envoyées selon le niveau de notification que vous choisissez. Recevez-les dans votre boîte de réception, par notification push ou par récapitulatif par courriel.',
      },
    },
    {
      slug: 'publishing',
      label: 'Publication et licence',
      meta: {
        title: 'Publication et licence : pour les éditeurs de logiciels',
        description:
          'Les développeurs gèrent la page de leur logiciel dans REZICS et publient ses versions pour chaque plateforme, avec la taille des fichiers, leurs empreintes, les notes de version et des captures d’écran. Ils précisent les conditions et la version de la licence, ainsi que le mode d’obtention.',
      },
    },
    {
      slug: 'connections',
      label: 'Liens',
      meta: {
        title: 'Liens : dépendances et extensions',
        description:
          'Dans REZICS, un logiciel est relié aux modules de jeu qui en dépendent, aux serveurs MCP qui permettent aux agents IA de l’utiliser, aux compétences qui en ont besoin et aux API associées. Chaque lien indique sa direction et sa source, et peut être consulté depuis ses deux extrémités.',
      },
    },
  ],
  strings: {
    common: { nextPage: 'Page suivante', nextSite: 'Site suivant', sample: 'Exemple : le logiciel, les systèmes, les versions et les dates sont fictifs.', go: 'Ouvrir' },
    pictures: {
      hero: { name: 'hero', alt: 'Des feuilles bleu canard se déploient en éventail, légèrement décalées. La feuille du dessus est bleu clair.' },
      versions: { name: 'versions', alt: 'Trois pochettes bleu canard sont alignées, chacune maintenue par une bande bleu gris.' },
      holes: { name: 'holes', alt: 'Une feuille bleu canard est percée de trous réguliers, à l’exception de quelques emplacements.' },
      slit: { name: 'slit', alt: 'Une feuille bleu canard traverse une fente dans un papier bleu gris.' },
      tabs: { name: 'tabs', alt: 'Deux attaches en papier relient une feuille bleu canard à une feuille jaune moutarde et une feuille vert clair.' },
    },
    states: { compatible: 'Compatible', incompatible: 'Incompatible', unknown: 'Inconnu', stale: 'Obsolète', unavailable: 'Indisponible' },
    channels: { stable: 'Stable', beta: 'Bêta' },
    sample: {
      program: 'Éditeur fictif',
      releases: [
        { version: '4.1', channel: 'beta', date: '2026-10-06', platforms: 'Systèmes A, B et C', note: 'Ajout d’une fenêtre divisée et correction du ralentissement à l’ouverture de gros fichiers.' },
        { version: '4.0', channel: 'stable', date: '2026-08-25', platforms: 'Systèmes A, B et C', note: 'Ajout d’espaces de travail et suppression de l’ancien format d’extension.' },
        { version: '3.2', channel: 'stable', date: '2026-03-17', platforms: 'Systèmes A, B et C', note: 'Ajout de la version mobile et amélioration de la recherche.' },
        { version: '3.1', channel: 'stable', date: '2025-11-04', platforms: 'Systèmes A et B' },
        { version: '3.0', channel: 'stable', date: '2025-06-10', platforms: 'Systèmes A et B' },
      ],
      environments: [
        { name: 'Système A, 64 bits', short: 'A, 64 bits' },
        { name: 'Système A, 32 bits', short: 'A, 32 bits' },
        { name: 'Système B, 64 bits', short: 'B, 64 bits' },
        { name: 'Système C, mobile', short: 'C, mobile' },
      ],
      // Columns follow `releases` (4.1, 4.0, 3.2, 3.1, 3.0).
      cells: [
        [['unknown'], ['compatible', '2026-08-29'], ['compatible', '2026-03-20'], ['compatible', '2025-11-09'], ['compatible', '2025-06-14']],
        [['unavailable'], ['unavailable'], ['incompatible', '2026-03-22'], ['compatible', '2025-11-10'], ['stale', '2025-06-15']],
        [['compatible', '2026-10-09'], ['unknown'], ['compatible', '2026-03-20'], ['compatible', '2025-11-12'], ['unknown']],
        [['unknown'], ['compatible', '2026-09-02'], ['stale', '2026-03-25'], ['unavailable'], ['unavailable']],
      ],
    },

    landing: {
      hero: {
        label: 'Logiciels',
        headline: 'Chaque version indique où elle fonctionne, avec des tests datés.',
        lede: 'REZICS attribue une identité à chaque logiciel et répertorie ses versions sur chaque plateforme. Un environnement non testé reste marqué comme inconnu. Licence, mode d’obtention, notes et discussions sont liés à cette même identité.',
      },
      pages: {
        label: 'Six pages',
        headline: 'De la recherche d’un logiciel à la publication du vôtre.',
        lines: {
          catalogue: 'Une identité, une notice par version',
          compatibility: 'La compatibilité repose sur des tests datés',
          reviews: 'La note précise la version concernée',
          updates: 'Suivez des logiciels, des développeurs et des filtres',
          publishing: 'Pour les développeurs : versions, licences et accès',
          connections: 'Modules, serveurs MCP, compétences et API',
        },
      },
      compatibility: {
        label: 'Compatibilité',
        headline: 'Toute affirmation de compatibilité doit s’appuyer sur un test.',
        lead: 'Les plateformes déclarées par les développeurs sont des indications. Un test consigne un résultat confirmé dans un environnement donné à une date précise, avec sa méthode et ses conditions. REZICS s’appuie uniquement sur ces tests pour indiquer la compatibilité.',
        link: 'Comprendre les relevés de compatibilité',
      },
      statement: {
        text: 'Sans test, le résultat reste inconnu ;',
        sub: 'il n’est présumé ni compatible ni incompatible.',
      },
      program: {
        label: 'Un logiciel',
        headline: 'Tout ce qui est lié à la même identité.',
        items: [
          { title: 'Version', body: 'Chaque version publiée sur une plateforme est archivée séparément. Les versions stables et bêta sont distinguées.' },
          { title: 'Compatibilité', body: 'Le système d’exploitation, sa version et l’architecture du processeur sont vérifiés pour une même version.' },
          { title: 'Licence', body: 'La version des conditions est indiquée, avec la personne qui les a déclarées et la date.' },
          { title: 'Mode d’obtention', body: 'Les téléchargements officiels, boutiques et dépôts de paquets sont indiqués. Un simple renvoi est présenté comme un lien externe.' },
          { title: 'Notes', body: 'Une note peut porter sur une seule version. Le nombre et la répartition des notes sont affichés à côté.' },
          { title: 'Suivi', body: 'Suivez un logiciel ou ses mainteneurs pour recevoir les nouvelles versions et les annonces.' },
        ],
      },
      neighbours: {
        label: 'Liens',
        headline: 'Un logiciel existe rarement seul.',
        lead: 'Des modules de jeu en dépendent, des serveurs MCP le rendent accessible aux agents IA et certaines compétences en ont besoin. Chaque lien indique sa direction et sa source, et peut être consulté depuis ses deux extrémités.',
        link: 'Voir tous les liens',
        tiles: [
          { kind: 'games', line: 'Logiciel requis par des modules et des chargeurs' },
          { kind: 'mcp', line: 'Serveur qui le rend accessible aux agents' },
          { kind: 'skills', line: 'Compétences qui en dépendent' },
          { kind: 'apis', line: 'API qu’il fournit ou utilise' },
        ],
      },
      closing: 'Une identité par logiciel, avec une notice pour chaque version.',
    },

    catalogue: {
      hero: {
        headline: 'Les versions changent, pas l’identité.',
        lede: 'Dans REZICS, un logiciel garde la même notice s’il change de nom, de dépôt ou de plateforme. Chaque nouvelle version fait l’objet d’une notice qui décrit les fichiers réellement publiés.',
      },
      releases: {
        label: 'Version',
        headline: 'Chaque version publiée est archivée séparément.',
        lead: 'Chaque notice indique le numéro de version, le canal de publication, la date, la plateforme et les fichiers inclus à cette date. Une erreur peut être corrigée avec une preuve. Un correctif publié ensuite fait l’objet d’une nouvelle notice.',
      },
      list: {
        caption: 'Versions de l’éditeur fictif, de la plus récente à la plus ancienne (exemple)',
        columns: ['Version', 'Canal', 'Date', 'Plateforme'],
        points: [
          { title: 'Canal', body: 'Les versions stables et bêta sont distinguées. La plus récente n’est pas forcément celle qui vous convient.' },
          { title: 'Ordre des versions', body: 'L’ordre suit les règles de l’écosystème du logiciel. Les numéros de version ne sont pas comparés comme du texte.' },
          { title: 'Plateforme', body: 'Une même version publiée sur différentes plateformes possède une notice pour chacune.' },
        ],
      },
      statement: {
        text: 'REZICS ne compte pas les téléchargements,',
        sub: 'et ne les utilise pas pour classer. Chaque liste indique son mode de tri.',
      },
      identity: {
        label: 'Noms et identité',
        headline: 'Un même nom ne garantit pas une même identité.',
        rows: [
          { title: 'Noms dans plusieurs langues', body: 'Le nom chinois, le nom d’origine et les abréviations courantes sont répertoriés pour que vous puissiez chercher avec chacun d’eux.' },
          {
            title: 'Identifiants',
            body: 'Les noms, adresses et numéros des dépôts sont accompagnés de leur source. Une même chaîne dans deux dépôts ne suffit pas à identifier le même logiciel.',
          },
          { title: 'Dérivés', body: 'Un projet dérivé a sa propre notice, ses propres mainteneurs et versions, avec un lien « dérivé de » vers le projet d’origine.' },
          { title: 'Fusion et séparation', body: 'Les notices en double sont fusionnées avec leurs preuves, et les anciennes adresses restent valides. Une fusion erronée peut être annulée sans compter deux fois les favoris et les notes.' },
        ],
      },
      browse: {
        label: 'Filtres',
        headline: 'Les critères doivent porter sur une même version.',
        lead: 'Pour trouver une version stable sous licence libre qui fonctionne sur le système B en 64 bits, REZICS ne montre que les logiciels dont une même version répond à tous les critères. Les critères répartis entre plusieurs versions ne sont pas retenus.',
        points: [
          { title: 'Nombre de résultats', body: 'Le nombre de résultats est indiqué. S’il n’est pas encore exact, il est précédé de « au moins ».' },
          { title: 'Tout parcourir', body: 'Vous pouvez parcourir toute la liste jusqu’au dernier résultat, sans buter sur une limite de pages.' },
          { title: 'Enregistrer un filtre', body: 'Enregistrez les critères que vous utilisez souvent pour les suivre ensuite.' },
        ],
      },
      closing: 'Les versions changent. Les notices restent consultables.',
    },

    compatibility: {
      hero: {
        headline: 'La compatibilité repose sur des tests documentés.',
        lede: 'Les plateformes déclarées par les développeurs sont des indications. Un test consigne un résultat confirmé dans un environnement donné à une date précise. REZICS distingue les deux et s’appuie uniquement sur les tests pour indiquer la compatibilité.',
      },
      anatomy: {
        label: 'Un test',
        headline: 'Ce que consigne un test.',
        lead: 'Un test indique les informations nécessaires pour le reproduire et comprendre la portée de son résultat.',
        rows: [
          { title: 'Critère', body: 'Ce qui est mesuré : le démarrage, la réussite d’une tâche ou une valeur. L’unité est indiquée pour toute mesure chiffrée.' },
          { title: 'Méthode', body: 'Les étapes sont décrites avec assez de précision pour permettre à d’autres de reproduire le test.' },
          { title: 'Conditions', body: 'La version du système d’exploitation, l’architecture du processeur et les paramètres sont consignés ensemble. Si les conditions changent, il s’agit d’un autre test.' },
          { title: 'Fichier', body: 'Le test précise la version et le fichier concernés, avec leur empreinte vérifiée. Cette empreinte identifie ces octets uniquement et ne certifie aucun autre fichier.' },
          { title: 'Date et auteur', body: 'Chaque test indique sa date et son auteur. Les personnes et les agents IA peuvent en soumettre. Les comptes automatisés sont identifiés comme tels.' },
          { title: 'Validation', body: 'Un test est soumis comme proposition et ne compte qu’après validation. Les contestations sont indiquées séparément sans effacer la décision précédente.' },
        ],
      },
      states: {
        label: 'Cinq états',
        headline: 'Cinq états, chacun avec sa signification.',
        lead: 'En plus de « compatible » et « incompatible », trois situations souvent confondues sont indiquées séparément.',
        body: {
          compatible: 'Au moins un test validé a réussi dans cet environnement. Sa date est indiquée.',
          incompatible: 'Un test validé montre que le logiciel ne fonctionne pas. Les preuves et la date sont indiquées.',
          unknown: 'Aucun test n’a été effectué. Les étiquettes, catégories et textes promotionnels ne servent pas à tirer une conclusion.',
          stale: 'Le test a dépassé sa période de validité. Le résultat reste consultable, mais ne décrit plus la situation actuelle.',
          unavailable: 'Aucune version n’est disponible pour cet environnement. Il est donc impossible d’évaluer sa compatibilité.',
        },
        caption: 'Compatibilité des versions de l’éditeur fictif dans quatre environnements (exemple)',
        corner: 'Environnement',
      },
      conditions: {
        label: 'Conditions',
        headline: 'Tous les critères portent sur un même test.',
        lead: 'Pour filtrer les résultats de compatibilité, une même version et un même test doivent répondre à tous les critères. Combiner les résultats de différentes versions peut donner l’impression que le logiciel fonctionne, alors que ce n’est pas le cas.',
        example: 'Par exemple, pour les critères « Système B, 64 bits, stable, compatible, version 4.0 ou ultérieure », l’éditeur fictif propose deux versions candidates (exemple) :',
        candidates: [
          { title: 'Version bêta 4.1', body: 'Compatible. Le test est concluant, mais il ne s’agit pas d’une version stable.' },
          { title: 'Version stable 4.0', body: 'Inconnu. C’est une version stable, mais personne ne l’a testée.' },
        ],
        result: 'Les critères sont répartis entre deux versions, donc aucun résultat ne correspond. REZICS l’indique sans assouplir les critères.',
      },
      statement: {
        text: 'Chaque état est accompagné de preuves et de sa portée ;',
        sub: 'un lien externe ne prouve rien à lui seul.',
        note: 'Un résultat d’analyse ne porte que sur un fichier et une analyse précis.',
      },
      closing: 'Les tests déterminent la compatibilité.',
    },

    reviews: {
      hero: {
        headline: 'Précisez la version avant de donner une note.',
        lede: 'Un logiciel peut changer considérablement d’une version à l’autre. Vous pouvez noter le logiciel dans son ensemble ou une version précise. Une note attribuée à une version lui reste liée.',
      },
      rules: {
        label: 'Règles pour les notes',
        headline: 'La moyenne s’affiche quand il y a assez de notes.',
        facts: [
          { title: '5', body: 'Par défaut, la moyenne s’affiche à partir de 5 notes. Avant cela, seul leur nombre et leur répartition apparaissent, avec le nombre de notes manquantes.' },
          { title: '50', body: 'Le classement utilise une note pondérée et exige au moins 50 notes par défaut. La moyenne et les coefficients sont publics.' },
          { title: '1', body: 'Pour une même personne, un même objet et une même question, seule la note actuelle est conservée. Modifier la note met à jour cette entrée.' },
        ],
      },
      anatomy: {
        label: 'Question et objet',
        headline: 'Chaque note répond à une question précise.',
        lead: 'La question, l’échelle et l’objet évalué sont définis ensemble. Les notes données en réponse à des questions différentes ne sont pas additionnées, et celles d’une version ne sont pas automatiquement comptées pour l’ensemble du logiciel.',
        points: [
          { title: 'Comparaison', body: 'Les notes de REZICS et de chaque communauté sont affichées côte à côte, sans être réduites à un seul chiffre.' },
          { title: 'Entre versions', body: 'La moyenne entre versions est un indicateur distinct. Sa méthode et le nombre de versions incluses sont précisés.' },
          { title: 'Aucune donnée inventée', body: 'REZICS n’invente ni avis, ni votes, ni participation. Les comptes automatisés sont toujours identifiés.' },
        ],
      },
      statement: {
        text: 'Sans aucune note, aucun graphique ne s’affiche ;',
        sub: 'aucune note égale à zéro ni barre vide n’est affichée.',
      },
      picks: {
        label: 'Sélections et alternatives',
        headline: 'Les sélections ont un responsable et les alternatives sont justifiées.',
        rows: [
          { title: 'Sélection de la communauté', body: 'Chaque logiciel sélectionné par une communauté renvoie à la discussion qui a motivé cette décision.' },
          { title: 'Alternative', body: 'Un lien « peut le remplacer pour une tâche » indique sa raison et la personne qui l’a proposé. Il peut être contesté.' },
          { title: 'Liste', body: 'Une liste précise l’environnement visé et indique si la compatibilité a été vérifiée.' },
          { title: 'Recommandations', body: 'Chaque recommandation en indique la raison, par exemple un filtre que vous suivez ou une décision de communauté. Vous pouvez toutes les désactiver.' },
          { title: 'Signaler un problème', body: 'Une discussion sur un problème de version reste liée à cette version, afin que chacun sache de laquelle il s’agit.' },
        ],
      },
      closing: 'Chaque note indique la version et le nombre de personnes.',
    },

    updates: {
      hero: {
        headline: 'Recevez les nouvelles versions selon vos préférences.',
        lede: 'Suivez un logiciel pour recevoir ses nouvelles versions et leurs notes. Choisissez de tout recevoir, de ne recevoir que l’essentiel ou de ne pas être dérangé.',
      },
      levels: {
        label: 'Niveau de notification',
        headline: 'Trois niveaux, à régler pour chaque abonnement.',
        lead: 'Vous pouvez modifier ce choix à tout moment et configurer séparément les notifications d’une version importante.',
        rows: [
          { title: 'Tout', body: 'Vous recevez une notification pour chaque version, annonce et publication.' },
          { title: 'Sélections', body: 'Vous recevez uniquement les nouvelles versions, annonces et décisions de la communauté.' },
          { title: 'Désactivées', body: 'Seules les réponses et mentions qui vous concernent directement sont signalées.' },
          { title: 'Où les recevoir', body: 'Dans votre boîte de réception, par notification push ou sous forme de récapitulatif par courriel. Désabonnez-vous en un clic.' },
        ],
      },
      targets: {
        label: 'Éléments suivis',
        headline: 'Vous pouvez suivre bien plus que des logiciels.',
        rows: [
          { title: 'Logiciel', body: 'Ses nouvelles versions et leurs notes.' },
          { title: 'Développeurs ou organisations', body: 'Leurs nouvelles notices et annonces.' },
          { title: 'Filtres', body: 'Enregistrez le filtre « éditeurs de texte libres compatibles avec le système B ». Les nouveaux logiciels correspondants apparaîtront dans un onglet de votre accueil et dans vos récapitulatifs.' },
          { title: 'Realm', body: 'Les annonces et décisions de la communauté, comme de nouvelles sélections.' },
        ],
      },
      changelog: {
        label: 'Notes de version',
        headline: 'Les notes de version suivent chaque publication.',
        lead: 'Les notes sont liées à chaque version publiée. En passant de la version 3.2 à la bêta 4.1, vous pouvez lire dans l’ordre les changements de chaque version intermédiaire.',
        more: 'La rubrique « Continuer » de la page d’accueil rassemble les mises à jour compatibles de vos paquets et le prochain chapitre que vous n’avez pas terminé. Les mises à jour et les retours à une version antérieure sont liés à des fichiers précis : vous récupérez exactement les fichiers d’origine.',
        caption: 'Notes de version de l’éditeur fictif, de la plus récente à la plus ancienne (exemple)',
        start: 'Commencer ici',
      },
      statement: {
        text: 'Vos scripts et votre agent IA',
        sub: 'lisent les mêmes événements de mise à jour et reprennent au dernier point lu.',
      },
      closing: 'Vous choisissez ce que vous recevez et à quelle fréquence.',
    },

    publishing: {
      hero: {
        headline: 'Documentez les versions que vous publiez.',
        lede: 'Dans REZICS, les développeurs gèrent leurs logiciels et documentent le numéro, la plateforme, les fichiers, les notes de version, la licence et le mode d’obtention de chaque publication. Les personnes qui suivent le logiciel, les filtres et les agents IA consultent la même notice.',
      },
      record: {
        label: 'Une version publiée',
        headline: 'Les champs d’une notice de publication.',
        lead: 'La publication ne peut pas être envoyée tant que les champs requis sont incomplets. Une fois envoyée, sa notice est archivée.',
        caption: 'Notice de publication de l’éditeur fictif 4.0 (exemple)',
        fields: [
          { title: 'Numéro de version', body: '4.0' },
          { title: 'Canal', body: 'Stable' },
          { title: 'Date', body: '2026-08-25' },
          { title: 'Plateforme', body: 'Système A, 64 bits ; système B, 64 bits ; système C, mobile' },
          { title: 'Taille du fichier', body: '48.2 MB' },
          { title: 'Empreinte (extrait)', body: 'sha256 9f2c41d7e41a' },
          { title: 'Licence', body: 'Licence libre, version 2.0' },
          { title: 'Mode d’obtention', body: 'Site du développeur (lien externe)' },
          { title: 'Notes de version', body: 'Ajout d’un espace de travail et suppression de l’ancien format d’extension.' },
        ],
      },
      steps: {
        label: 'Étapes de publication',
        headline: 'Cinq étapes pour publier une version.',
        steps: [
          { title: 'Vérifier vos droits de gestion', body: 'Vérifiez que vous êtes autorisé à gérer le projet avant de mettre à jour sa page et ses versions.' },
          { title: 'Renseigner la version', body: 'Indiquez le numéro, le canal de publication, la date et les fichiers pour chaque plateforme.' },
          { title: 'Déclarer la licence', body: 'Choisissez la licence et sa version. La déclaration précise qui l’a faite, à quelle date et pour quel périmètre.' },
          {
            title: 'Préciser le mode d’obtention',
            body: 'Indiquez qui fournit les fichiers, où les télécharger ou sur quelle page externe les installer. Si REZICS ne fait que créer un lien, cela est précisé.',
          },
          { title: 'Publier', body: 'La version devient une notice archivée. Les personnes qui vous suivent en sont informées selon leurs préférences.' },
        ],
        note: 'Vous pouvez effectuer ces étapes par API et MCP, et automatiser la publication de chaque version.',
      },
      licence: {
        label: 'Licence',
        headline: 'La licence est indiquée avec sa version.',
        lead: 'Chaque déclaration indique les conditions et la version exactes, son auteur, sa date, son champ d’application et sa source. Le texte d’une licence importé d’une source externe est attribué à cette source, et non à vous.',
        points: [
          { title: 'Ce n’est pas une certification', body: 'Une déclaration n’est pas une certification juridique et ne modifie les droits de modification de personne.' },
          { title: 'Indiquer les informations inconnues', body: 'Si l’auteur de la licence ou son année sont inconnus, indiquez-le simplement.' },
          { title: 'Filtrable', body: 'Vous pouvez utiliser la licence comme critère de recherche pour trouver les logiciels qui répondent à vos besoins.' },
        ],
      },
      lock: {
        label: 'Dépendances',
        headline: 'Les dépendances suivent les règles de chaque écosystème.',
        lead: 'Lorsqu’il analyse les dépendances d’un paquet, REZICS conserve l’identité, l’ordre des versions et la signification des dépendances propres à chaque écosystème, puis lie le résultat à des fichiers précis.',
        points: [
          { title: 'Obligatoires et facultatives', body: 'Les dépendances et conflits obligatoires sont distingués des associations recommandées et des avertissements.' },
          { title: 'Versions retirées', body: 'Les versions retirées sont traitées selon les règles de leur écosystème. Les verrouillages existants conservent les fichiers initialement choisis.' },
          { title: 'Résultats distincts', body: 'Une source introuvable, une licence non prise en charge ou un dépassement de budget sont distingués d’un conflit insoluble.' },
          { title: 'Introuvable ne signifie pas absent', body: 'Une dépendance introuvable n’est pas considérée comme inexistante.' },
        ],
      },
      statement: {
        text: 'Installer n’autorise pas l’exécution ;',
        sub: 'les scripts d’un paquet ne s’exécutent qu’avec votre accord explicite.',
        note: 'Le processus d’installation de REZICS n’accepte que des fichiers vérifiés et les place dans un espace temporaire isolé.',
      },
      maintenance: {
        label: 'Après la publication',
        headline: 'Gérer les publications au fil du temps.',
        rows: [
          { title: 'Captures et déclarations', body: 'Les captures d’écran et déclarations sur la confidentialité et l’accessibilité indiquent leur auteur.' },
          { title: 'Retirer une déclaration', body: 'Si une déclaration au sujet d’une plateforme devient obsolète, elle peut être retirée sans supprimer le logiciel, ses publications ni leurs discussions.' },
          { title: 'Mise en vente', body: 'En cas de vente, le prix, la région et la période de validité sont indiqués dans un tableau. Les changements de prix sont conservés.' },
          { title: 'Équipe', body: 'Les rôles des mainteneurs et des contributeurs sont indiqués. Une personne conserve la même identité d’un projet à l’autre.' },
        ],
      },
      closing: 'Une seule publication, la même notice pour tout le monde.',
    },

    connections: {
      hero: {
        headline: 'Tout ce qui en dépend ou le prolonge renvoie au même logiciel.',
        lede: 'Dans REZICS, les modules de jeu, serveurs MCP, compétences et API ont chacun leur propre identité. Des liens directionnels les relient aux logiciels dont ils ont besoin, et chaque extrémité permet de consulter l’autre.',
      },
      relations: {
        label: 'Noms des liens',
        headline: 'Chaque lien a un nom et une direction.',
        lead: 'Les deux côtés d’un lien ont chacun leur formulation, qui fonctionne dans chaque langue.',
        rows: [
          { title: 'Requiert / requis par', body: 'Dépendance obligatoire. Sans elle, le logiciel ne peut pas fonctionner.' },
          { title: 'Recommandé avec / recommandé par', body: 'Le logiciel fonctionne mieux avec cette dépendance, mais peut s’exécuter sans elle.' },
          { title: 'Incompatible avec', body: 'Les deux logiciels posent problème s’ils sont installés ensemble. Le lien est visible depuis chacun d’eux.' },
          { title: 'Dérivé de / prolongé par', body: 'Un projet repris et maintenu indépendamment par une autre équipe.' },
          { title: 'Peut remplacer / peut être remplacé par', body: 'Un autre logiciel qui remplit la même fonction, avec la raison indiquée.' },
        ],
      },
      kinds: {
        label: 'Autres types',
        headline: 'Liens avec d’autres types.',
        rows: [
          {
            kind: 'games',
            line: 'Modules et chargeurs',
            body: 'Les modules de jeu dépendent du jeu lui-même et souvent aussi d’un chargeur. Les dépendances obligatoires et recommandées sont distinguées. Chaque chargeur est un logiciel avec ses propres versions et relevés de compatibilité.',
          },
          {
            kind: 'mcp',
            line: 'Pour les agents IA',
            body: 'Le serveur MCP qui permet à un agent IA d’utiliser ce logiciel a sa propre notice. Le projet, la publication du paquet, le point d’accès déployé et les capacités observées font l’objet de notices distinctes.',
          },
          { kind: 'skills', line: 'Dépendance déclarée', body: 'Une compétence peut déclarer les logiciels dont elle a besoin. Vérifiez les capacités et l’environnement avant de les associer.' },
          { kind: 'apis', line: 'Fournit ou utilise', body: 'Les API publiques fournies ou utilisées par un logiciel ont leurs propres versions et preuves dans API Hub, avec un lien vers ce logiciel.' },
        ],
      },
      people: {
        label: 'Équipe',
        headline: 'Les développeurs n’ont qu’une identité.',
        lead: 'Une même personne peut maintenir un logiciel, écrire un roman et donner son avis sur un jeu : dans REZICS, elle garde la même identité. La section de l’équipe relie ses activités. En la suivant, vous voyez ses nouvelles œuvres de tous types.',
      },
      statement: {
        text: 'Un nom identique ne suffit pas : chaque lien a sa source ;',
        sub: 'un agent IA peut le proposer, mais ne peut pas décider seul que deux éléments sont identiques.',
      },
      closing: 'Chaque lien se consulte depuis ses deux extrémités.',
    },
  },
} satisfies MiniSite<SoftwareStrings>;

export default site;
