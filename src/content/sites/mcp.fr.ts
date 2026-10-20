// MCP Hub (`mcp`): every visible string of /mcp/ and its five inner pages. Design record and
// sources: src/sites/mcp/SITE.md and src/sites/mcp/facts.md. Illustrative data (the notes
// server, versions, dates, client categories, tasks, tools, views, lists) is labelled 示意 on
// the page.
import type { Item, MiniSite } from '../schema';

/** The site's paper still-life series (public/images/sites/mcp/). */
export type McpPicture = 'hero' | 'records' | 'identity' | 'versions' | 'zone';
/** A combination's state on the evidence page. */
export type McpState = 'ok' | 'fail' | 'disputed' | 'none';
/** A site page linked from the landing's tiles. */
export type McpPage = 'directory' | 'evidence' | 'versions' | 'community' | 'maintainers';

/** A section's eyebrow, heading and lead. */
type Head = { label: string; headline: string; body: string };
/** A statement: the first half in ink, the continuation muted. */
type Statement = { text: string; sub: string; note?: string };
type RecordField = { label: string; value: string; note: string };

export type McpStrings = {
  next: { page: string; site: string };
  /** Alt text of each picture. */
  pictures: Record<McpPicture, string>;
  /** A line for each page: its tile on the landing and its lead-in on the previous page. */
  pageLines: Record<McpPage, string>;
  landing: {
    hero: { label: string; headline: string; lede: string };
    record: Head & { fields: Item[]; link: string };
    statement: Statement;
    pages: { label: string; headline: string };
    neighbours: Head & {
      tiles: { kind: 'software' | 'apis' | 'skills'; line: string }[];
      developers: { name: string; line: string; href: string };
    };
    closing: { title: string; body: string };
  };
  directory: {
    hero: { headline: string; lede: string };
    records: Head & { items: Item[] };
    filters: Head & { rows: Item[]; caption: string; note: string };
    traversal: { label: string; headline: string; facts: Item[] };
    parts: Head & { notes: Record<string, string> };
    statement: Statement;
    next: string;
    closing: string;
  };
  evidence: {
    hero: { headline: string; lede: string };
    specimen: {
      label: string;
      headline: string;
      fields: Record<'server' | 'client' | 'task' | 'language' | 'result' | 'date' | 'submitter' | 'review', RecordField>;
      caption: string;
    };
    compare: { label: string; headline: string; says: { heading: string; items: string[] }; not: { heading: string; items: string[] } };
    states: Head & { names: Record<McpState, string>; items: Record<McpState, string> };
    statement: Statement;
    layers: { label: string; headline: string; chapters: Item[] };
    client: { label: string; headline: string; body: string[] };
    next: string;
    closing: string;
  };
  versions: {
    hero: { headline: string; lede: string };
    start: Head & { note: string };
    diff: Head & {
      columns: [string, string, string];
      rows: { tool: string; before: string; after: string }[];
      consequence: string;
      caption: string;
    };
    ledger: Head & { rows: Item[] };
    follow: Head & { levels: Item[]; channels: string };
    statement: Statement;
    next: string;
    closing: string;
  };
  community: {
    hero: { headline: string; lede: string };
    score: { label: string; headline: string; items: Item[]; note: string };
    discussion: Head & { agents: string };
    list: Head & {
      title: string;
      items: { kind: 'mcp' | 'skills' | 'apis' | 'software'; name: string; note: string }[];
      caption: string;
    };
    zone: Head & { routes: string };
    next: string;
    closing: string;
  };
  maintainers: {
    hero: { headline: string; lede: string };
    steps: { label: string; headline: string; items: Item[] };
    rules: { label: string; headline: string; can: { heading: string; items: string[] }; cannot: { heading: string; items: string[] } };
    licence: Head & { rows: Item[] };
    agent: Statement & { link: string; href: string };
    next: { headline: string; lines: Record<'skills' | 'apis' | 'software', string> };
    closing: string;
  };
};

const strings: McpStrings = {
  next: { page: 'Page suivante', site: 'Site suivant' },

  pictures: {
    hero: 'Plusieurs feuilles ocre sont reliées par une ficelle passée dans des trous ronds. Une feuille bleu clair et une feuille vert pâle y sont aussi attachées.',
    records: 'Une feuille ocre porte de petites étiquettes vierges, reliées par une ficelle à des trous ronds sur le bord. Un trou reste vide.',
    identity: 'Une feuille divisée en quatre parties légèrement espacées : deux ocre, une bleu canard et une bleu clair.',
    versions: 'Cinq feuilles de même taille sont alignées, de la plus foncée à la plus claire. La dernière est blanche.',
    zone: 'Une feuille ocre pliée forme un petit paravent en relief, avec quelques morceaux de papier posés à côté.',
  },

  pageLines: {
    directory: 'Un serveur, une identité',
    evidence: 'Ce qu’un relevé dit, et ce qu’il ne dit pas',
    versions: 'Un relevé par version',
    community: 'Notes, discussions, listes et catalogue communautaire',
    maintainers: 'Enregistrer, revendiquer, déclarer et répondre',
  },

  landing: {
    hero: {
      label: 'Index des serveurs MCP',
      headline: 'Voyez quels serveurs fonctionnent, à quelle date.',
      lede: 'MCP Hub attribue une identité à chaque serveur MCP et consigne chaque version séparément : la date, la version du client, la langue utilisée et le résultat obtenu.',
    },
    record: {
      label: 'Un relevé',
      headline: 'Avant de dire que ça marche, précisez la configuration.',
      body: 'Il faut connaître la version du serveur, le client, la tâche et la langue. Chaque relevé précise ces éléments, le résultat et la date. Si l’un d’eux change, il faut refaire un essai.',
      fields: [
        { title: 'Version du serveur', body: 'Le numéro de version exact. Une nouvelle version a son propre relevé.' },
        { title: 'Client', body: 'Le type de client et sa version.' },
        { title: 'Tâche', body: 'Ce que vous demandez au serveur.' },
        { title: 'Langue', body: 'La même tâche peut donner un autre résultat dans une autre langue.' },
        { title: 'Résultat et date', body: 'La réussite ou l’échec, et la date de l’essai.' },
      ],
      link: 'Comment lire un relevé',
    },
    statement: {
      text: 'Un relevé décrit le résultat de cette configuration à cette date.',
      sub: 'Il ne certifie pas la sécurité du serveur, ne donne aucune autorisation et ne vaut pas recommandation de REZICS.',
    },
    pages: {
      label: 'Le site',
      headline: 'Une page par étape, de la recherche à la maintenance.',
    },
    neighbours: {
      label: 'Index liés',
      headline: 'Un serveur ne se résume pas à sa fiche.',
      body: 'Ses créateurs, les API qu’il enveloppe et le projet auquel il appartient figurent dans le même index. Vous pouvez y accéder depuis chaque fiche.',
      tiles: [
        { kind: 'software', line: 'Les projets, paquets et clients sont des fiches de logiciel' },
        { kind: 'apis', line: 'Les API enveloppées sont liées dans les deux sens' },
        { kind: 'skills', line: 'Les compétences du même responsable' },
      ],
      developers: { name: 'Développeurs', line: 'Le serveur MCP de REZICS', href: '/developers/mcp-server/' },
    },
    closing: {
      title: 'Consultez les relevés avant de choisir.',
      body: 'Un même compte REZICS vous permet de suivre des serveurs, des compétences et des API, ainsi que des livres et des jeux.',
    },
  },

  directory: {
    hero: {
      headline: 'Un serveur, une identité.',
      lede: 'Un même serveur MCP peut apparaître dans plusieurs sources. Après vérification et fusion, il n’a qu’une fiche sur REZICS, avec son nom, ses responsables, ses versions, ses relevés, ses notes et ses discussions.',
    },
    records: {
      label: 'Quatre éléments',
      headline: 'Un serveur réunit quatre éléments.',
      body: 'Le projet, le paquet, le point de terminaison et la liste des outils évoluent à des moments différents. REZICS les consigne séparément.',
      items: [
        { title: 'Projet', body: 'Son nom, sa description et ses responsables. Un changement de version ou de point de terminaison ne crée pas un nouveau projet. Un projet dérivé d’un autre a sa propre fiche, liée à l’original.' },
        { title: 'Paquet', body: 'La version d’un paquet, son écosystème, son nom d’origine et son numéro de version. L’ordre des versions suit les règles de son écosystème.' },
        { title: 'Point de terminaison', body: 'L’adresse réseau du serveur. Une connexion ne prouve ni à qui il appartient, ni sa compatibilité avec votre client, ni votre droit de l’appeler.' },
        { title: 'Liste des outils', body: 'Les outils exposés par le serveur à un instant donné et les paramètres de chacun. Chaque changement donne lieu à une nouvelle observation.' },
      ],
    },
    filters: {
      label: 'Filtres',
      headline: 'Chaque filtre s’appuie sur un même relevé.',
      body: 'Pour trouver un serveur qui exporte un fichier avec un outil en ligne de commande et en chinois traditionnel, les trois critères doivent figurer dans le même relevé. Ils ne sont pas assemblés à partir de relevés différents.',
      rows: [
        { title: 'Serveurs ayant organisé des tâches en japonais avec succès dans un éditeur de code', body: 'Le client, la langue, la tâche et le résultat figurent dans le même relevé.' },
        { title: 'Serveurs dont la version la plus récente a un relevé concluant datant de moins de 90 jours', body: 'La version, la date et le résultat sont liés dans le même relevé.' },
        { title: 'Tous les serveurs d’un même responsable', body: 'Parcourez les fiches liées à une personne.' },
        { title: 'Serveurs qui enveloppent une API', body: 'Parcourez les relations depuis la fiche de l’API.' },
      ],
      caption: 'Enregistrez vos filtres sous un nom pour les rouvrir ou les suivre.',
      note: 'Exemple de vue.',
    },
    traversal: {
      label: 'Listes',
      headline: 'Les listes vont jusqu’au bout et indiquent leur limite.',
      facts: [
        { title: 'Jusqu’au dernier résultat', body: 'Les résultats ne s’arrêtent pas aux premières pages. Parcourez-les jusqu’au dernier.' },
        { title: 'Un nombre fiable', body: 'Le nombre de résultats est indiqué comme exact ou estimé, avec la date de mise à jour des données.' },
        { title: 'Les limites sont explicites', body: 'Si une combinaison de filtres n’est pas prise en charge, le site vous le dit au lieu d’afficher une page vide qui ferait croire à l’absence de résultats.' },
      ],
    },
    parts: {
      label: 'Composants',
      headline: 'Huit composants partagés avec tous les domaines.',
      body: 'MCP Hub n’est pas un programme écrit à part. Ses fiches utilisent les mêmes composants que la Bibliothèque, les jeux et les logiciels, organisés différemment.',
      notes: {
        identity: 'Le même serveur, dans chaque source, renvoie à cette identité unique.',
        editions: 'Chaque version a sa propre fiche, avec son paquet, sa liste d’outils et ses relevés.',
        specs: 'Relevé de compatibilité : date, client et version, tâche, langue et résultat.',
        credits: 'Les responsables, personnes ou organisations, sont liés aux autres projets qu’ils ont créés.',
        ratings: 'Les notes restent liées à une version et précisent la question évaluée.',
        discussion: 'Les fils de discussion portent sur le serveur ou sur une version précise.',
        lists: 'Réunissez serveurs, compétences et API dans une même liste, avec une note pour chacun.',
        follow: 'Suivez un serveur, un responsable ou une vue pour recevoir les nouvelles versions.',
      },
    },
    statement: {
      text: 'Un même nom ne désigne pas toujours le même serveur.',
      sub: 'La fusion exige des preuves et une vérification.',
      note: 'Après une fusion, les identités et les historiques d’origine restent consultables.',
    },
    next: 'Ce qu’un relevé consigne et ce qu’il omet volontairement.',
    closing: 'Avant de chercher un serveur, vérifiez son identité.',
  },

  evidence: {
    hero: {
      headline: 'Un relevé précise la date et la configuration.',
      lede: 'Une personne ou un agent IA demande une tâche à une version du serveur, depuis une version du client et dans une langue donnée. Le résultat et la date forment un relevé. Les preuves de MCP Hub sont constituées de ces relevés.',
    },
    specimen: {
      label: 'Exemple de relevé',
      headline: 'Un relevé en détail.',
      fields: {
        server: { label: 'Serveur', value: 'Serveur de notes 1.4.0', note: 'La version exacte est indiquée.' },
        client: { label: 'Client', value: 'Éditeur de code 3.2', note: 'La version du client est aussi consignée.' },
        task: { label: 'Tâche', value: 'Transformer des notes de réunion en liste de tâches', note: 'La tâche est décrite en une phrase.' },
        language: { label: 'Langue', value: 'Chinois traditionnel', note: 'Langue utilisée pour la tâche.' },
        result: { label: 'Résultat', value: 'Réussi', note: 'Les réussites comme les échecs sont consignés.' },
        date: { label: 'Date', value: '2026/10/12', note: 'Ce relevé vaut pour cette date uniquement.' },
        submitter: { label: 'Auteur du relevé', value: 'Un utilisateur', note: 'Une personne ou un agent IA peut le soumettre. L’agent indique qui l’utilise.' },
        review: { label: 'Vérification', value: 'Vérifié', note: 'Le relevé est publié après vérification humaine.' },
      },
      caption: 'Exemple de relevé. Les champs montrent les preuves de compatibilité. Seuls les relevés vérifiés par une personne sont publiés.',
    },
    compare: {
      label: 'Portée',
      headline: 'Ce que le relevé établit, et ce qu’il n’établit pas.',
      says: {
        heading: 'Il établit',
        items: [
          'Si cette configuration a réussi ou échoué à cette tâche, à cette date.',
          'La version du serveur et du client utilisées.',
          'La langue de la tâche.',
          'Qui a soumis le relevé et si une personne l’a vérifié.',
        ],
      },
      not: {
        heading: 'Il ne certifie pas',
        items: [
          'La sécurité du serveur. Ce relevé n’est pas une certification de sécurité.',
          'Les usages autorisés de son code. Consultez la déclaration de licence du responsable et le texte de la licence.',
          'Le résultat avec une autre version, un autre client ou une autre langue.',
          'Une recommandation ou une garantie de REZICS.',
        ],
      },
    },
    states: {
      label: 'Résultats et états',
      headline: 'Résultats, contestations et absence de relevé sont distincts.',
      body: 'Chaque essai a un résultat. Si quelqu’un le conteste, le relevé est vérifié à nouveau. L’état est toujours écrit, jamais indiqué par la couleur seule.',
      names: { ok: 'Réussi', fail: 'Échec', disputed: 'Contesté', none: 'Aucun relevé' },
      items: {
        ok: 'Cette configuration a réussi à cette date.',
        fail: 'L’essai a échoué, mais son résultat est consigné.',
        disputed: 'Le relevé publié est contesté et en cours de vérification.',
        none: 'Personne n’a encore essayé, ou personne n’a consigné son essai.',
      },
    },
    statement: {
      text: 'L’absence de relevé ne signifie pas un échec.',
      sub: 'Une configuration jamais testée reste sans résultat, elle n’est pas déclarée impossible.',
    },
    layers: {
      label: 'Déclarations et relevés',
      headline: 'Les déclarations, les observations du serveur et les essais restent distincts.',
      chapters: [
        { title: 'Déclaration', body: 'Le responsable indique les clients et les langues pris en charge. Une déclaration reste présentée comme telle, sans être confondue avec un relevé.' },
        { title: 'Observation', body: 'La liste des outils exposés par le serveur et leurs paramètres est consignée à un instant donné. La présence d’un outil ne prouve pas qu’une tâche aboutira.' },
        { title: 'Relevé', body: 'Une personne teste une tâche avec une configuration, consigne le résultat et la date, puis une autre personne vérifie le relevé avant sa publication.' },
        { title: 'Vérification et contestation', body: 'Un relevé vérifié peut toujours être contesté. Il peut être à la fois vérifié et contesté, et la décision précédente reste dans l’historique.' },
      ],
    },
    client: {
      label: 'Recherche par client',
      headline: 'Commencez par votre client.',
      body: [
        'Choisissez votre client et sa version, puis la langue des tâches. Le catalogue ne garde que les serveurs ayant un relevé pour cette configuration, avec le résultat et la date.',
        'Enregistrez et suivez cette vue pour repérer les nouveaux relevés qui répondent à vos critères.',
      ],
    },
    next: 'Chaque version a son relevé : la liste des outils montre ce qui a changé.',
    closing: 'Des relevés clairs vous aident à vous faire votre propre avis.',
  },

  versions: {
    hero: {
      headline: 'Chaque version a son propre relevé.',
      lede: 'Les versions suivent les règles de leur écosystème. Chacune a son paquet, sa liste d’outils, son journal des modifications, ses relevés de compatibilité et ses notes.',
    },
    start: {
      label: 'Nouvelle version',
      headline: 'Une nouvelle version exige un relevé dédié.',
      body: 'Un relevé de compatibilité pour la version 2.0.0 doit provenir d’un essai réel de cette version. La réussite de la version 1.4.1 ne s’applique pas à la 2.0.0. Les anciens relevés gardent leur date et leur version, pour que vous puissiez juger s’ils restent pertinents.',
      note: 'Exemples de numéros de version.',
    },
    diff: {
      label: 'Liste des outils',
      headline: 'Comparez les changements dans la liste des outils.',
      body: 'Chaque observation consigne les outils exposés par le serveur et le format de leurs paramètres. La comparaison de deux observations indique les ajouts, les suppressions et les changements de paramètres.',
      columns: ['Outil', 'Observation en 1.4.0', 'Observation en 2.0.0'],
      rows: [
        { tool: 'Rechercher des notes', before: 'Présent', after: 'Paramètres modifiés' },
        { tool: 'Créer une note', before: 'Présent', after: 'Inchangé' },
        { tool: 'Supprimer une note', before: 'Présent', after: 'Supprimé' },
        { tool: 'Lister les tags', before: 'Présent', after: 'Inchangé' },
        { tool: 'Exporter des notes', before: 'Absent', after: 'Ajouté' },
      ],
      consequence: '« Rechercher des notes » est toujours disponible, mais ses paramètres ont changé. Il vaut mieux tester à nouveau les configurations qui l’utilisent.',
      caption: 'Exemple de comparaison entre deux listes d’outils, sans observation réelle.',
    },
    ledger: {
      label: 'Paquets',
      headline: 'Un nom et un numéro identiques ne garantissent pas le même fichier.',
      body: 'Le nom d’origine et le numéro de version d’un paquet suivent les règles de son écosystème. Des noms et numéros identiques ne prouvent ni que le contenu ni que les droits sont identiques. Chaque fichier de version est donc vérifié par empreinte.',
      rows: [
        { title: 'Écosystème', body: 'L’écosystème de paquets d’origine.' },
        { title: 'Nom d’origine', body: 'Conservé tel quel, sans conversion.' },
        { title: 'Numéro de version', body: 'L’ordre suit les règles de l’écosystème.' },
        { title: 'Empreinte du fichier', body: 'Vérifie le fichier réel de cette version.' },
        { title: 'Déclaration de licence', body: 'Qui a déclaré quelle licence, et quand.' },
        { title: 'Source', body: 'L’origine de la donnée et sa date d’acquisition.' },
      ],
    },
    follow: {
      label: 'Suivi',
      headline: 'Choisissez les nouvelles à recevoir sur un serveur suivi.',
      body: 'Chaque suivi a son propre niveau de notification, modifiable à tout moment. Les changements des serveurs suivis apparaissent aussi dans votre fil.',
      levels: [
        { title: 'Tout', body: 'Nouvelles versions, annonces et publications.' },
        { title: 'Essentiel', body: 'Nouvelles versions, annonces et décisions.' },
        { title: 'Désactivé', body: 'Vous êtes averti uniquement des réponses et mentions qui vous concernent.' },
        { title: 'Ciblé', body: 'Suivez une version précise ou un fil de discussion.' },
      ],
      channels: 'Les notifications arrivent dans votre boîte de réception. Vous pouvez aussi activer les notifications push ou les résumés par e-mail, auxquels vous pouvez vous désabonner en un clic.',
    },
    statement: {
      text: 'Les notes restent liées à leur version.',
      sub: 'Une note sur la version 1.4 ne compte pas pour la 2.0.',
      note: 'Les indicateurs entre versions sont calculés séparément, selon une méthode et un périmètre indiqués.',
    },
    next: 'Notes, discussions et listes précisent l’objet auquel elles se rapportent.',
    closing: 'Changez de version en repartant des relevés.',
  },

  community: {
    hero: {
      headline: 'Précisez la version avant de donner une note.',
      lede: 'Chaque note porte sur une question, une échelle et une version. Le nombre de notes, leur répartition et le groupe qui les a données apparaissent à côté pour vous aider à en comprendre la portée.',
    },
    score: {
      label: 'Notes',
      headline: 'Cinq précisions accompagnent chaque note.',
      items: [
        { title: 'Question', body: 'Par exemple : « La documentation est-elle claire ? » ou « Le service est-il stable dans la durée ? » Les notes sur des questions différentes ne sont pas mélangées.' },
        { title: 'Échelle', body: 'L’échelle et la signification de chaque note sont indiquées à côté du résultat.' },
        { title: 'Version', body: 'La note reste liée à la version évaluée.' },
        { title: 'Nombre et répartition', body: 'Si le nombre de notes est insuffisant, seul leur nombre et leur répartition sont affichés, sans moyenne.' },
        { title: 'Groupe', body: 'Les notes de l’ensemble du site et celles d’une communauté sont affichées séparément.' },
      ],
      note: 'Exemple de question.',
    },
    discussion: {
      label: 'Discussions',
      headline: 'Les discussions portent sur le serveur ou sur une version précise.',
      body: 'Ouvrez une discussion sur une version en cas de problème avec celle-ci. Les retours d’utilisation générale portent sur le serveur. Les responsables répondent sous leur propre identité, afin que les lecteurs sachent qui s’exprime.',
      agents: 'Lorsqu’un agent IA participe à une discussion, il indique qui le fait fonctionner.',
    },
    list: {
      label: 'Listes',
      headline: 'Une liste peut réunir serveurs, compétences et API.',
      body: 'Une liste peut réunir différents types d’éléments. Rassemblez des serveurs, les compétences qui les utilisent et les API associées. Ajoutez une note à chaque élément, choisissez l’ordre et exportez la liste.',
      title: 'Outils pour organiser les notes de réunion',
      items: [
        { kind: 'mcp', name: 'Serveur de notes', note: 'L’export des notes est disponible depuis la version 2.0.0.' },
        { kind: 'skills', name: 'Compétence de prise de notes', note: 'Nécessite le serveur ci-dessus.' },
        { kind: 'apis', name: 'API d’agenda', note: 'Ajoute les tâches à l’agenda.' },
        { kind: 'software', name: 'Outil en ligne de commande', note: 'Cette configuration a été testée ici.' },
      ],
      caption: 'Exemple de liste.',
    },
    zone: {
      label: 'Zone',
      headline: 'Une communauté peut créer son propre catalogue de serveurs.',
      body: 'Une communauté peut créer un site complet dans une Zone, avec une page d’accueil, une navigation, un catalogue filtré et des pages d’information. Les fiches gardent leur identité unique. Toute correction effectuée dans la Zone est répercutée partout où la fiche apparaît.',
      routes: 'Exemple de plan du site : accueil, catalogue, guide de démarrage, relevés et discussions.',
    },
    next: 'Enregistrez un serveur, confirmez votre identité et publiez une déclaration.',
    closing: 'Chaque note et chaque discussion indiquent leur objet.',
  },

  maintainers: {
    hero: {
      headline: 'Présentez les serveurs que vous maintenez.',
      lede: 'Enregistrez un serveur, revendiquez une identité importée et indiquez sa licence et sa prise en charge. Vos déclarations restent distinctes des relevés des utilisateurs, et les lecteurs peuvent consulter les deux.',
    },
    steps: {
      label: 'Étapes',
      headline: 'Quatre étapes, de l’enregistrement à la réponse.',
      items: [
        { title: 'Enregistrer', body: 'Créez une fiche avec le nom, la description, le projet et le paquet. Le système recherche les doublons avant l’envoi.' },
        { title: 'Revendiquer', body: 'Si une fiche a été importée depuis des données publiques, vous pouvez revendiquer l’identité de la personne ou de l’organisation qui vous appartient.' },
        { title: 'Déclarer', body: 'Indiquez la licence, les clients et les langues pris en charge. Chaque déclaration précise son auteur, sa date et la version de la licence concernée.' },
        { title: 'Répondre', body: 'Répondez aux discussions avec votre identité de responsable. Si un relevé est contesté, soumettez le vôtre.' },
      ],
    },
    rules: {
      label: 'Limites',
      headline: 'Ce que vous pouvez faire, et ce que vous ne pouvez pas faire.',
      can: {
        heading: 'Vous pouvez',
        items: ['Modifier la description, les versions et les déclarations de la fiche.', 'Répondre aux discussions et contester des relevés avec des preuves.', 'Faire soumettre un relevé par votre agent IA à chaque nouvelle version.'],
      },
      cannot: {
        heading: 'Vous ne pouvez pas',
        items: ['Supprimer vous-même le relevé d’une autre personne parce que vous n’êtes pas d’accord. Apportez des éléments à vérifier.', 'Obtenir une décision différente en échange d’un soutien ou d’un abonnement.', 'Gonfler vos notes ou créer de faux soutiens avec plusieurs comptes.'],
      },
    },
    licence: {
      label: 'Déclaration de licence',
      headline: 'La licence est votre déclaration, pas une autorisation de REZICS.',
      body: 'La déclaration précise la licence et sa version, son auteur, sa date, son périmètre et son fondement. Elle ne signifie pas que REZICS autorise qui que ce soit à utiliser le serveur, ni qu’elle constitue une validation juridique. La présence d’un serveur dans le catalogue n’autorise pas tout le monde à diffuser son code.',
      rows: [
        { title: 'Licence et version', body: 'La licence et sa version.' },
        { title: 'Auteur', body: 'La personne ou l’organisation qui fait la déclaration.' },
        { title: 'Date', body: 'La date de la déclaration, ou la mention « inconnue ».' },
        { title: 'Périmètre', body: 'Les versions et les fichiers concernés.' },
        { title: 'Fondement', body: 'La raison de cette déclaration.' },
      ],
    },
    agent: {
      text: 'Votre agent IA peut exécuter une série de tâches à chaque publication,',
      sub: 'puis en soumettre les résultats.',
      note: 'Ces relevés sont signalés comme provenant de votre agent et suivent la même vérification que les autres.',
      link: 'Voir comment soumettre un relevé',
      href: '/developers/mcp-server/',
    },
    next: {
      headline: 'Les compétences pour agents IA ont aussi leurs versions, relevés et notes.',
      lines: {
        skills: 'Fichiers et dépendances de chaque version',
        apis: 'API enveloppées par le serveur',
        software: 'Projets, paquets et clients',
      },
    },
    closing: 'Vos déclarations et les relevés de tous sont présentés côte à côte.',
  },
};

export default {
  id: 'mcp',
  base: '/mcp/',
  name: 'MCP Hub',
  theme: { kind: 'mcp' },
  next: 'skills',
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'MCP Hub : index des serveurs MCP',
        description:
          'Trouvez des serveurs MCP dans MCP Hub sur REZICS. Chaque serveur a une identité unique et un relevé par version, avec la date, le client et sa version, la tâche et la langue. Les notes, les discussions et les listes sont réunies sur la même fiche.',
      },
    },
    {
      slug: 'directory',
      label: 'Catalogue',
      meta: {
        title: 'Catalogue MCP Hub : une identité par serveur',
        description:
          'Dans le catalogue MCP Hub, chaque serveur MCP a une identité unique. Le projet, les versions du paquet, le point de terminaison et la liste des outils sont consignés séparément. Les filtres reposent sur un même relevé, et les résultats vont jusqu’au dernier.',
      },
    },
    {
      slug: 'evidence',
      label: 'Preuves',
      meta: {
        title: 'Preuves MCP Hub : date et configuration',
        description:
          'Les relevés de compatibilité de MCP Hub précisent la date, la version du serveur, le client et sa version, la tâche, la langue et le résultat. Ils indiquent si une configuration a réussi à une date donnée, sans certifier sa sécurité, autoriser son usage ni engager REZICS.',
      },
    },
    {
      slug: 'versions',
      label: 'Versions',
      meta: {
        title: 'Versions MCP Hub : un relevé par version',
        description:
          'Chaque version d’un serveur MCP a son propre relevé : écosystème du paquet, nom d’origine, numéro de version, empreinte du fichier, outils observés, relevés et notes propres à cette version. Suivez le serveur pour être averti de ses nouvelles versions.',
      },
    },
    {
      slug: 'community',
      label: 'Communauté',
      meta: {
        title: 'Communauté MCP Hub : notes, discussions et listes',
        description:
          'Notez une version de serveur MCP en précisant la question évaluée. Les discussions portent sur le serveur ou une version, et vos listes peuvent réunir serveurs, compétences et API. Les communautés peuvent aussi créer leur propre catalogue dans une Zone.',
      },
    },
    {
      slug: 'maintainers',
      label: 'Responsables',
      meta: {
        title: 'Responsables MCP Hub : enregistrer et revendiquer',
        description:
          'Dans MCP Hub, les responsables peuvent enregistrer un serveur, revendiquer une identité importée, déclarer les licences et les capacités prises en charge, puis répondre aux discussions sous leur identité. Leurs déclarations restent distinctes des relevés des utilisateurs. Aucun paiement ne change les décisions.',
      },
    },
  ],
  strings,
} satisfies MiniSite<McpStrings>;
