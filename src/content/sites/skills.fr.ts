// Skill Hub (/skills/): every visible string of the site, shaped by the v3 parts (hero, section,
// facts list, photo row, tile masonry, statement, closing). Design record and sources:
// src/sites/skills/SITE.md and facts.md. Terms: 「AI 代理」 on first mention in a section, then
// 「代理」; 「技能」 throughout; 「MCP 伺服器」.
import type { KindId, MiniSite } from '../schema';

/** A hairline facts row: title left, text right. */
export interface Row {
  title: string;
  body: string;
}

/** A frontmatter line of the example skill and what REZICS does with it. */
export interface KeyRow {
  key: string;
  value?: string;
  body: string;
}

/** A file role of the Agent Skills format. */
export interface FileRow extends Row {
  /** The literal path from the format, set as code. */
  path?: string;
  /** A short mark beside the title (可執行, 缺少). */
  mark?: string;
}

/** A section opening: eyebrow in columns 1 to 3, serif h2 in 4 to 11, lead in 4 to 9. */
export interface Head {
  eyebrow: string;
  /** One or two short clauses; each item is one line on wide screens. */
  headline: string[];
  lead?: string;
}

/** A large serif statement: the first half in ink, the second in muted ink. */
export interface Said {
  text: string;
  muted: string;
}

/** A still-life picture: the file stem under /images/sites/skills/ and its description. */
export interface Pic {
  src: string;
  alt: string;
}

/**
 * How an inner page ends: a lead-in to the next page (a section whose title leads into one tile),
 * then the closing statement before the ink pill into REZICS.
 */
export interface End {
  next: string;
  closing: string;
}

export interface SkillsStrings {
  ui: {
    nextPage: string;
    nextSite: string;
  };
  landing: {
    hero: { eyebrow: string; headline: string[]; lede: string; pic: Pic };
    layers: Head & { rows: Row[] };
    files: Head & { body: string; link: string; pic: Pic };
    statement: Said;
    pages: Head & { tiles: { slug: string; line: string }[] };
    neighbours: Head & { tiles: { to: KindId; line: string }[] };
    closing: { title: string; body: string };
  };
  directory: {
    head: { headline: string[]; lede: string };
    specimens: Head & { rows: Row[] };
    filters: Head & { rows: Row[] };
    statement: Said;
    lists: Head & { body: string; pic: Pic };
    views: Head & { rows: Row[] };
    end: End;
  };
  versions: {
    head: { headline: string[]; lede: string };
    frontmatter: Head & { rows: KeyRow[] };
    files: Head & { rows: FileRow[] };
    history: Head & { body: string[]; pic: Pic };
    historyExample: Head & { rows: Row[] };
    packages: Head & { rows: Row[] };
    statement: Said;
    end: End;
  };
  evidence: {
    head: { headline: string[]; lede: string };
    declaration: Head & { code: string; codeLabel: string; caption: string };
    record: Head & { rows: Row[] };
    rules: Head & { rows: Row[] };
    opinions: Head & { rows: Row[] };
    statement: Said;
    end: End;
  };
  use: {
    head: { headline: string[]; lede: string };
    steps: Head & { rows: Row[] };
    agent: Head & { paragraphs: [string, string]; link: string };
    later: Head & { rows: Row[] };
    end: End;
  };
  publish: {
    head: { headline: string[]; lede: string };
    import: Head & { body: string; pic: Pic };
    steps: Head & { rows: Row[] };
    limits: Head & { rows: Row[]; after: string };
    statement: Said & { note: string; rows: Row[] };
    credits: Head & { rows: Row[] };
    end: End & { nextLine: string };
  };
}

const skills = {
  id: 'skills',
  base: '/skills/',
  name: 'Skill Hub',
  theme: { kind: 'skills' },
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'Skill Hub : un catalogue de compétences pour les agents IA',
        description:
          'Skill Hub répertorie les compétences utilisées par les agents IA. Leur contenu complet, leurs fichiers, leurs versions et leurs relevés de compatibilité datés sont accessibles. Notes et discussions sont liées à chaque version pour que vous puissiez la consulter avant de l’utiliser.',
      },
    },
    {
      slug: 'directory',
      label: 'Catalogue',
      meta: {
        title: 'Catalogue Skill Hub : une compétence par ligne',
        description:
          'Dans Skill Hub, trouvez une compétence à partir d’une phrase. Filtrez les propriétés répertoriées et parcourez tous les résultats. Suivez les listes créées par d’autres personnes ou vos filtres enregistrés pour être averti·e des nouvelles compétences correspondantes.',
      },
    },
    {
      slug: 'versions',
      label: 'Versions et fichiers',
      meta: {
        title: 'Page de compétence : contenu, fichiers et versions',
        description:
          'La page d’une compétence affiche le fichier SKILL.md complet et indique le rôle et l’empreinte de chaque fichier. Les fichiers exécutables sont signalés. Chaque version conserve son contenu, sa licence et sa source ; une nouvelle version ne remplace pas l’ancienne.',
      },
    },
    {
      slug: 'evidence',
      label: 'Preuves et avis',
      meta: {
        title: 'Compatibilité et avis sur les compétences',
        description:
          'Les conditions de compatibilité rédigées par l’auteur d’une compétence sont de simples déclarations. Skill Hub consigne aussi qui l’a utilisée, avec quel agent IA, quelle version et quelle langue, et à quelle date. Les notes et discussions restent liées à la version concernée.',
      },
    },
    {
      slug: 'use',
      label: 'Pour votre agent',
      meta: {
        title: 'Transmettre une compétence à votre agent IA',
        description:
          'Après avoir trouvé une compétence dans Skill Hub, lisez son contenu et ses fichiers, consultez les relevés de compatibilité, puis choisissez une version à télécharger ou à copier. Verrouillez ses dépendances et suivez ses mises à jour. Votre agent IA peut aussi accéder aux mêmes données par API et MCP.',
      },
    },
    {
      slug: 'publish',
      label: 'Publier une compétence',
      meta: {
        title: 'Publier une compétence dans Skill Hub',
        description:
          'Importez dans Skill Hub un dossier de compétence conforme au format. Chaque octet est conservé tel quel, les scripts ne sont pas exécutés et les champs inconnus ne sont pas supprimés. Chaque publication fixe les fichiers, la licence et la source d’une nouvelle version.',
      },
    },
  ],
  strings: {
    ui: {
      nextPage: 'Page suivante',
      nextSite: 'Site suivant',
    },
    landing: {
      hero: {
        eyebrow: 'Skill Hub',
        headline: ['Avant de la transmettre à votre agent IA,', 'lisez chaque partie attentivement.'],
        lede: 'Skill Hub vous permet de lire les compétences utilisées par les agents IA. Leur description complète, leurs fichiers, leurs versions et leurs relevés d’utilisation datés sont visibles avant de faire votre choix.',
        pic: {
          src: 'fold',
          alt: 'Une feuille vert citron pliée est entrouverte. Des feuilles crème, vert clair et bleu pâle sont superposées dessous, chacune laissant apparaître son bord.',
        },
      },
      layers: {
        eyebrow: 'Ordre de lecture',
        headline: ['Une compétence se lit en trois parties,', 'dans l’ordre suivi par l’agent IA.'],
        lead: 'Exemple d’une compétence qui répertorie les personnages d’un chapitre : l’agent IA lit d’abord le nom et la description, puis le contenu complet, et enfin les fichiers nécessaires à sa tâche. Skill Hub suit le même ordre.',
        rows: [
          {
            title: 'Une ligne',
            body: 'La description de chapter-cast indique : « Répertorier les personnages d’un chapitre et leur emplacement dans le texte. » L’agent lit d’abord cette phrase pour déterminer si la compétence convient à sa tâche.',
          },
          {
            title: 'Une page',
            body: 'Le fichier SKILL.md précise : « Répertorier les personnages et leurs autres noms, puis indiquer leur emplacement dans le texte. Sans source, indiquer qu’elle est introuvable. » L’agent lit cette page d’instructions et de limites lorsqu’il doit répertorier des personnages.',
          },
          {
            title: 'Fichiers utilisés',
            body: 'Le fichier references/aliases.md montre comment associer les personnages, leurs autres noms et leur emplacement dans le texte. L’agent ne consulte ce fichier que si sa tâche exige de vérifier les autres noms. Les autres fichiers sont également répertoriés.',
          },
        ],
      },
      files: {
        eyebrow: 'Fichiers',
        headline: ['Tous les fichiers sont répertoriés,', 'et les fichiers exécutables sont signalés.'],
        body: 'SKILL.md, scripts/, references/, assets/ et les fichiers non prévus par le format sont tous répertoriés avec leur chemin, leur rôle et leur empreinte. Les fichiers mentionnés dans SKILL.md mais absents du dossier sont également signalés.',
        link: 'Consulter les versions et les fichiers',
        pic: {
          src: 'folder',
          alt: 'Une feuille vert citron pliée forme un dossier ouvert contenant des feuilles crème, vert clair, bleu pâle et jaune moutarde, dont les bords restent visibles.',
        },
      },
      statement: {
        text: 'Répertorier ne vaut pas approbation.',
        muted:
          'Lisez le contenu et les fichiers avant de décider. REZICS conserve les compétences importées sans exécuter leurs instructions.',
      },
      pages: {
        eyebrow: 'Ce site',
        headline: ['De la recherche d’une compétence', 'à la publication de la vôtre.'],
        tiles: [
          { slug: 'directory', line: 'Trouvez une compétence par sa description' },
          { slug: 'versions', line: 'Le contenu complet, les fichiers et les versions' },
          { slug: 'evidence', line: 'Qui l’a utilisée et dans quelles conditions' },
          { slug: 'use', line: 'Choisissez une version pour votre agent IA' },
          { slug: 'publish', line: 'Un dossier, une identité' },
        ],
      },
      neighbours: {
        eyebrow: 'Liens',
        headline: ['Une compétence comprend du texte et des fichiers ;', 'ses dépendances ont chacune leur propre page.'],
        lead: 'Les paquets dont une compétence dépend ont leurs propres versions dans le catalogue des logiciels. Les compétences et les serveurs MCP d’un même auteur sont liés à la même identité. L’outil Wiki local de REZICS comprend aussi une compétence qui apprend aux agents IA à extraire des faits sourcés de livres et de romans visuels.',
        tiles: [
          { to: 'software', line: 'Paquets requis par une compétence' },
          { to: 'mcp', line: 'Outils accessibles à l’agent' },
          { to: 'books', line: 'Extraire des faits sourcés chapitre par chapitre' },
          { to: 'visual-novels', line: 'Trouver des sources dans les scripts de jeu' },
        ],
      },
      closing: {
        title: 'Commencez par une phrase.',
        body: 'Recherchez une compétence dans REZICS, lisez son contenu, ses fichiers et ses relevés avant de la transmettre à votre agent IA.',
      },
    },
    directory: {
      head: {
        headline: ['Une compétence par ligne,', 'en une phrase.'],
        lede: 'Chaque ligne du catalogue présente deux éléments : le nom de la compétence et une phrase rédigée par son auteur. Les agents IA s’appuient sur cette phrase pour décider de l’utiliser. Vous pouvez commencer votre choix ici aussi.',
      },
      specimens: {
        eyebrow: 'Exemple de catalogue',
        headline: ['Lisez d’abord une phrase,', 'pour savoir si elle vous convient.'],
        lead: 'Les noms et descriptions ci-dessous sont des exemples. Ces compétences répondent à des tâches différentes, précisées dans leur description.',
        rows: [
          { title: 'chapter-cast', body: 'Répertorie les personnages et leurs autres noms dans un chapitre, avec leur emplacement, pour vérifier une liste de personnages.' },
          { title: 'quote-check', body: 'Vérifie chaque citation avec le texte d’origine et indique sa source ou les citations sans source.' },
        ],
      },
      filters: {
        eyebrow: 'Filtres',
        headline: ['Filtrez selon vos critères,', 'et combinez-les.'],
        lead: 'Les critères disponibles peuvent être combinés.',
        rows: [
          { title: 'Recherche', body: 'Recherchez avec les termes de votre tâche, par exemple « répertorier les personnages d’un chapitre » ou « vérifier des citations ».' },
          { title: 'Licence', body: 'Affichez uniquement les compétences sous une licence donnée.' },
          { title: 'Langue', body: 'Filtrez par langue de la description ou des tâches consignées.' },
          { title: 'Relevés de compatibilité', body: 'Affichez les compétences ayant des relevés pour un agent IA et une version précis.' },
          { title: 'Date de mise à jour', body: 'Triez ou filtrez selon la date de publication la plus récente.' },
        ],
      },
      statement: {
        text: 'Parcourez les résultats jusqu’au dernier.',
        muted: 'Le nombre de résultats est indiqué comme exact ou estimé. Les résultats suivants restent accessibles.',
      },
      lists: {
        eyebrow: 'Listes',
        headline: ['Une sélection organisée par quelqu’un d’autre.'],
        body: 'Une liste organise dans l’ordre les éléments d’un processus de travail et explique le choix de chacun. Elle peut réunir des compétences, des serveurs MCP, des API et des logiciels. Vous pouvez l’exporter ou la suivre pour voir les nouveaux éléments ajoutés.',
        pic: {
          src: 'bundle',
          alt: 'Cinq feuilles de tailles différentes, vert citron, crème, bleu pâle et jaune moutarde, sont empilées et maintenues par une bande vert citron.',
        },
      },
      views: {
        eyebrow: 'Filtres enregistrés',
        headline: ['Enregistrez vos critères,', 'puis suivez-les.'],
        lead: 'Enregistrez un groupe de critères comme filtre. Suivez-le pour voir apparaître dans votre fil les nouvelles compétences correspondantes.',
        rows: [
          { title: 'Recherche', body: 'Définissez les critères.' },
          { title: 'Filtres enregistrés', body: 'Enregistrez le filtre et nommez-le.' },
          { title: 'Suivre', body: 'Recevez une notification en cas de nouveau résultat.' },
        ],
      },
      end: {
        next: 'Si vous la trouvez, ouvrez-la.',
        closing: 'La compétence que vous cherchez est peut-être à la ligne suivante.',
      },
    },
    versions: {
      head: {
        headline: ['Ouvrez une compétence,', 'et consultez tout son contenu.'],
        lede: 'La page de la compétence présente le texte original de SKILL.md et chacun des fichiers qui l’accompagnent. Avant de la transmettre à un agent IA, vous pouvez lire tout ce qu’il lira.',
      },
      frontmatter: {
        eyebrow: 'SKILL.md',
        headline: ['Les premières lignes,', 'interprétées par REZICS.'],
        lead: 'Exemple de dossier de compétence.',
        rows: [
          {
            key: 'name',
            value: 'chapter-cast',
            body: 'Le nom ne contient que des lettres minuscules, des chiffres et des traits d’union, et correspond au dossier. Il identifie la compétence, mais un nom identique ne suffit pas à établir qu’il s’agit du même élément.',
          },
          {
            key: 'description',
            value: 'Répertorier les personnages d’un chapitre et indiquer leur emplacement dans le texte. À utiliser pour établir une liste de personnages.',
            body: 'Cette phrase est celle qui apparaît dans le catalogue et que l’agent IA lit en premier.',
          },
          {
            key: 'license',
            value: 'Apache-2.0',
            body: 'La licence est enregistrée avec la version, la personne qui l’a déclarée et la date. Il s’agit d’une déclaration, pas d’un examen juridique.',
          },
          {
            key: 'compatibility',
            value: 'Nécessite un agent capable de lire les fichiers locaux',
            body: 'Les conditions de compatibilité déclarées par l’auteur sont marquées « à vérifier séparément », et non comme confirmées.',
          },
          {
            key: 'allowed-tools',
            value: 'read-file',
            body: 'Les outils autorisés sont également déclaratifs et marqués « à vérifier séparément ».',
          },
          { key: 'Autres champs', body: 'Les champs non prévus par le format ne sont pas supprimés. Ils sont conservés dans leur forme d’origine et répertoriés séparément.' },
        ],
      },
      files: {
        eyebrow: 'Fichiers',
        headline: ['Un fichier par ligne.'],
        lead: 'Chaque fichier indique son chemin, son rôle et son empreinte. Les octets téléchargés correspondent à ceux répertoriés sur la page.',
        rows: [
          { title: 'Instructions', path: 'SKILL.md', body: 'Le contenu complet est affiché sans modification.' },
          {
            title: 'Scripts',
            path: 'scripts/',
            mark: 'Exécutable',
            body: 'Les fichiers exécutables sont signalés. REZICS les conserve à l’importation sans les exécuter.',
          },
          { title: 'Références', path: 'references/', body: 'Documents consultés par un agent IA lorsqu’il a besoin de détails.' },
          { title: 'Ressources', path: 'assets/', body: 'Les modèles, images et fichiers de données sont également répertoriés avec leur chemin et leur empreinte.' },
          { title: 'Autres', body: 'Les dossiers et fichiers non prévus par le format sont également répertoriés.' },
          { title: 'Fichiers manquants', mark: 'Manquant', body: 'Les fichiers mentionnés dans SKILL.md mais absents du dossier sont signalés.' },
        ],
      },
      history: {
        eyebrow: 'Versions',
        headline: ['Chaque version est conservée.'],
        body: [
          'Toute modification après publication devient une nouvelle version. Les fichiers et empreintes de la version précédente restent inchangés, et la version que vous utilisez n’est pas remplacée.',
          'Les versions sont classées par date de publication et accompagnées d’un historique des modifications. Vous pouvez toutes les parcourir. Les personnes qui suivent la compétence reçoivent cet historique.',
        ],
        pic: {
          src: 'fan',
          alt: 'Cinq feuilles se déploient en éventail depuis un même coin. La première est vert citron, les suivantes sont de plus en plus pâles, jusqu’à la dernière, crème.',
        },
      },
      historyExample: {
        eyebrow: 'Exemple de versions',
        headline: ['Une compétence,', 'deux versions datées.'],
        lead: 'Exemple de chapter-cast : les dates et le contenu ci-dessous sont fictifs. Chaque version conserve ses fichiers et ses empreintes ; une nouvelle version ne remplace pas la précédente.',
        rows: [
          { title: '1.1.0', body: '19 octobre 2026. Ajout des règles de correspondance entre les personnages et leurs autres noms, avec le fichier de référence associé.' },
          { title: '1.0.0', body: '12 octobre 2026. Repérage de la première apparition des personnages. Les fichiers d’origine restent inchangés, et les avis et commentaires restent liés à cette version.' },
        ],
      },
      packages: {
        eyebrow: 'Paquets',
        headline: ['Les dépendances sont répertoriées selon la déclaration de l’auteur ;', 'les informations manquantes sont signalées.'],
        rows: [
          {
            title: 'Séparation par écosystème',
            body: 'Chaque paquet est associé à son écosystème. Des paquets portant le même nom dans différents écosystèmes ne sont pas considérés comme identiques.',
          },
          { title: 'Obligatoires et facultatifs', body: 'Chaque dépendance est indiquée comme obligatoire ou facultative.' },
          { title: 'Manquants et non pris en charge', body: 'Les dépendances non déclarées ou appartenant à un écosystème non pris en charge sont signalées comme manquantes ou non prises en charge.' },
        ],
      },
      statement: {
        text: 'Chaque compétence a ses auteurs.',
        muted:
          'Les auteurs et mainteneurs sont nommés selon leur rôle, avec des liens vers leurs autres œuvres et avis.',
      },
      end: {
        next: 'Lisez son contenu, puis voyez qui l’a utilisée.',
        closing: 'Lisez chaque compétence avant de la transmettre à un agent IA.',
      },
    },
    evidence: {
      head: {
        headline: ['Une déclaration reste une déclaration,', 'un relevé est un relevé.'],
        lede: 'Un auteur peut déclarer l’environnement auquel une compétence est destinée. Cette déclaration ne constitue pas un relevé. Un relevé consigne une tâche exécutée avec un agent IA, ainsi que la date et la méthode. Skill Hub distingue les deux.',
      },
      declaration: {
        eyebrow: 'Déclaration',
        headline: ['Ce que l’auteur indique,', 'c’est une condition de compatibilité.'],
        lead: 'REZICS reproduit les conditions de compatibilité et les outils autorisés indiqués dans SKILL.md, en les marquant « à vérifier séparément » plutôt que comme confirmés.',
        code: '# Début de SKILL.md (exemple)\ncompatibility: pour les agents compatibles avec les dossiers de compétences',
        codeLabel: 'Condition de compatibilité au début du SKILL.md d’une compétence exemple',
        caption: 'REZICS reproduit cette ligne et la marque « à vérifier séparément ».',
      },
      record: {
        eyebrow: 'Exemple de relevé',
        headline: ['Une même version,', 'huit éléments consignés.'],
        lead: 'Voici un exemple de relevé pour chapter-cast 1.1.0. La date, la version de l’agent IA, la méthode et le résultat sont fictifs et illustrent la lecture d’un relevé.',
        rows: [
          { title: 'Tâche', body: 'Répertorier les personnages et leurs autres noms dans un extrait de chapitre avec leur emplacement dans le texte, afin de vérifier une liste de personnages.' },
          { title: 'Agent IA', body: 'Agent local pouvant lire le dossier de compétences, sans outil supplémentaire activé.' },
          { title: 'Version de l’agent', body: 'Client fictif 1.0.0. La version utilisée au moment de l’observation est consignée.' },
          { title: 'Version de la compétence', body: 'chapter-cast 1.1.0, version fictive ajoutant la correspondance avec les autres noms.' },
          { title: 'Langue', body: 'L’entrée et la sortie sont en chinois traditionnel. Les autres noms suivent leur graphie d’origine.' },
          { title: 'Date', body: '19 octobre 2026, la même date que la version fictive 1.1.0 présentée sur la page des versions.' },
          { title: 'Méthode', body: 'Un court passage contenant trois personnages et deux groupes d’autres noms sert d’entrée. Chaque résultat est comparé à son emplacement dans le texte d’origine.' },
          { title: 'Observation', body: 'Le résultat fictif répertorie trois personnages, deux groupes d’autres noms et leurs emplacements. Il ne permet pas de conclure que la compétence convient à d’autres textes ou agents.' },
        ],
      },
      rules: {
        eyebrow: 'Comment lire les relevés',
        headline: ['Lire un relevé'],
        rows: [
          { title: 'Sans relevé ne signifie pas inutilisable', body: 'Une combinaison jamais testée est indiquée comme « sans relevé », et non comme incompatible.' },
          {
            title: 'Les anciens relevés sont datés',
            body: 'Chaque relevé indique sa date et la version concernée. Une mise à jour de l’agent IA ou de la compétence ne transforme pas un ancien résultat en résultat de la nouvelle version.',
          },
          { title: 'Les résultats contradictoires sont conservés', body: 'Lorsque deux relevés aboutissent à des conclusions différentes, ils sont tous deux conservés avec leur méthode pour que vous puissiez les comparer.' },
          {
            title: 'Un agent peut aussi envoyer un relevé',
            body: 'Un agent peut envoyer un relevé s’il indique qu’il s’agit d’un agent, qui l’exploite et quelle méthode il a utilisée. Le relevé n’est rendu public qu’après examen humain.',
          },
          { title: 'Un retrait ne concerne que sa propre contribution', body: 'Lorsqu’une source retire sa contribution, seule sa propre preuve est retirée. L’historique et les relevés des autres sources restent inchangés.' },
        ],
      },
      opinions: {
        eyebrow: 'Notes et discussions',
        headline: ['Les notes et commentaires', 'restent liés à la version concernée.'],
        rows: [
          {
            title: 'Notes',
            body: 'Une note ne porte que sur la version évaluée. Une nouvelle version a ses propres notes. Les moyennes entre versions sont calculées séparément selon une méthode publiée. Le nombre et la répartition des notes sont toujours indiqués ; les moyennes ne sont pas calculées quand il y a trop peu de notes.',
          },
          {
            title: 'Commentaires',
            body: 'Les commentaires signalant un problème ou partageant une façon de faire indiquent la version utilisée. Après une mise à jour, les anciens commentaires restent liés à leur version pour éviter toute confusion.',
          },
        ],
      },
      statement: {
        text: 'Un relevé ne garantit pas la sécurité.',
        muted:
          'Chaque observation concerne un environnement et une version précis. Lisez les instructions et les scripts avant d’utiliser la compétence.',
      },
      end: {
        next: 'Consultez les relevés, puis utilisez-la.',
        closing: 'Consultez les relevés avant de décider.',
      },
    },
    use: {
      head: {
        headline: ['Après lecture,', 'transmettez-la à votre agent IA.'],
        lede: 'Une compétence contient des instructions destinées à un agent et peut inclure des scripts exécutables. Lisez-la d’abord dans Skill Hub. Si vous décidez de l’utiliser, récupérez la version exacte.',
      },
      steps: {
        eyebrow: 'Six étapes',
        headline: ['De la recherche à l’utilisation,', 'six étapes.'],
        rows: [
          { title: 'Trouver', body: 'Recherchez par description dans le catalogue ou choisissez une compétence dans une liste créée par quelqu’un d’autre.' },
          { title: 'Lire', body: 'Ouvrez la page de la compétence, lisez le fichier SKILL.md complet et vérifiez les fichiers présents et ceux qui sont exécutables.' },
          { title: 'Consulter les relevés', body: 'Vérifiez si quelqu’un a envoyé un relevé pour votre agent IA et sa version, et consultez sa date.' },
          {
            title: 'Choisir et récupérer une version',
            body: 'Choisissez une version et téléchargez son dossier. Les fichiers correspondent aux empreintes indiquées sur la page. Vous pouvez aussi copier uniquement les instructions de SKILL.md. Placez-les à l’endroit indiqué par la documentation de votre agent.',
          },
          {
            title: 'Verrouiller les dépendances',
            body: 'Selon les conditions prises en charge, verrouillez la version et les fichiers exacts des dépendances. Si elles ne peuvent pas être résolues, la raison est indiquée. Installer un paquet n’autorise pas l’exécution de ses scripts.',
          },
          { title: 'Suivre', body: 'Suivez cette compétence. À la publication d’une nouvelle version, lisez les modifications avant de décider de changer.' },
        ],
      },
      agent: {
        eyebrow: 'API et MCP',
        headline: ['Votre agent IA', 'peut aussi accéder à Skill Hub.'],
        paragraphs: [
          'Chaque action sur le site correspond à une opération API. Votre agent peut rechercher des compétences par API ou via le serveur MCP de REZICS, puis lire leur contenu et la liste de leurs fichiers. Il reçoit les mêmes informations que celles affichées sur la page.',
          'Dans l’API et le MCP de REZICS, le texte d’une compétence est toujours traité comme une donnée. Les instructions qu’il contient ne donnent de droits à personne.',
        ],
        link: 'Consulter l’API et le MCP sur le site pour les développeurs',
      },
      later: {
        eyebrow: 'Versions suivantes',
        headline: ['Une nouvelle version paraît,', 'lisez les changements avant de décider.'],
        rows: [
          { title: 'Niveau de notification', body: 'Choisissez de tout recevoir, de ne recevoir que les sélections ou de désactiver les notifications lorsque vous suivez une compétence.' },
          { title: 'Lire les changements', body: 'Chaque nouvelle version inclut un historique des changements. Comparez les fichiers et empreintes à ceux de la version que vous utilisez.' },
          { title: 'Garder la version actuelle', body: 'Si vous ne souhaitez pas changer, continuez d’utiliser votre version. Sa page ne sera pas remplacée par celle de la nouvelle version.' },
          { title: 'Signaler un problème', body: 'Si vous rencontrez un problème, signalez-le dans la discussion de la compétence en indiquant sa version et votre agent IA.' },
          {
            title: 'Signaler',
            body: 'Si une compétence fait autre chose que ce qu’indique sa description, vous pouvez la signaler sans compte. La diffusion de logiciels malveillants enfreint les règles d’utilisation de REZICS.',
          },
        ],
      },
      end: {
        next: 'À vous d’en écrire une.',
        closing: 'Choisissez une version et transmettez-la à votre agent IA.',
      },
    },
    publish: {
      head: {
        headline: ['Un dossier,', 'publié sous une identité.'],
        lede: 'Skill Hub accepte les compétences conformes au format, chacune dans un dossier contenant un fichier SKILL.md. Après l’importation, elle possède sa propre identité, sa propre page et sa première version.',
      },
      import: {
        eyebrow: 'Importer',
        headline: ['L’importation conserve les fichiers,', 'sans les exécuter.'],
        body: 'À l’issue de cette étape, le dossier devient une compétence avec sa propre identité. Aucun fichier n’a été modifié.',
        pic: {
          src: 'slit',
          alt: 'Une feuille vert citron fendue au centre laisse passer une bande crème par le haut puis par le bord inférieur. Un coin de papier jaune moutarde apparaît dessous.',
        },
      },
      steps: {
        eyebrow: 'Six garanties',
        headline: ['À l’importation,', 'chaque octet est conservé tel quel.'],
        rows: [
          { title: 'Conserver les fichiers tels quels', body: 'Chaque octet de chaque fichier est conservé, et les chemins restent à l’intérieur du dossier.' },
          { title: 'Ne rien exécuter', body: 'Les scripts sont enregistrés comme fichiers, sans être exécutés. Les instructions de SKILL.md ne sont pas suivies.' },
          { title: 'Vérifier les références', body: 'Les fichiers locaux mentionnés dans SKILL.md mais absents du dossier sont indiqués comme manquants.' },
          { title: 'Conserver les champs inconnus', body: 'Les champs non prévus par le format sont conservés tels quels et signalés comme non interprétés, sans leur attribuer un autre sens.' },
          {
            title: 'Ne pas forcer la conversion',
            body: 'L’importation s’arrête si le nom ne correspond pas au dossier ou si la description manque. Un dossier quelconque n’est pas converti en compétence.',
          },
          { title: 'Créer une version', body: 'La publication fixe l’empreinte de chaque fichier, la licence et la source. Toute modification ultérieure crée une nouvelle version.' },
        ],
      },
      limits: {
        eyebrow: 'Limites',
        headline: ['Limites d’importation'],
        rows: [
          { title: '128 fichiers', body: 'Nombre maximal de fichiers par importation.' },
          { title: '1 MiB', body: 'Taille totale maximale des fichiers.' },
          { title: '64 KiB', body: 'Taille maximale de SKILL.md.' },
          { title: '64 caractères', body: 'Longueur maximale du nom, composé uniquement de lettres minuscules, de chiffres et de traits d’union.' },
          { title: '1024 caractères', body: 'Longueur maximale de la description.' },
        ],
        after: 'L’importation s’arrête si un dossier dépasse ces limites ou ne respecte pas le format, et en indique la raison.',
      },
      statement: {
        text: 'La description est la première phrase lue.',
        muted:
          'Expliquez clairement ce que fait la compétence et quand l’utiliser, pour qu’elle soit comprise par les personnes et les agents IA.',
        note: 'Deux exemples de description pour une même compétence.',
        rows: [
          {
            title: 'Description claire',
            body: 'Répertoriez les personnages d’un chapitre dans un tableau avec leur emplacement. À utiliser pour créer une liste de personnages ou vérifier dans quel chapitre ils apparaissent.',
          },
          { title: 'Description trop vague', body: 'Traiter un roman.' },
        ],
      },
      credits: {
        eyebrow: 'Auteurs et droits',
        headline: ['Auteurs, droits et collaboration'],
        rows: [
          { title: 'Auteurs et mainteneurs', body: 'Chaque personne est indiquée selon son rôle sous sa propre identité REZICS et peut être suivie.' },
          { title: 'Licence', body: 'La licence que vous déclarez est enregistrée pour chaque version avec son auteur et sa date.' },
          { title: 'Vous conservez vos droits', body: 'La publication d’une compétence ne transfère pas vos droits de propriété intellectuelle.' },
          {
            title: 'Maintenance par des agents IA',
            body: 'Un agent peut proposer une modification en indiquant la version concernée, les changements, les preuves et la méthode, et en précisant qu’il s’agit d’un agent. La modification n’est appliquée qu’après examen humain, avec un reçu pour chaque application.',
          },
          { title: 'Annuler', body: 'Une modification incorrecte peut être annulée. L’annulation est consignée comme une correction, sans réécrire l’historique d’origine.' },
        ],
      },
      end: {
        next: 'Après les compétences, les API.',
        nextLine: 'Consultez les appels et leurs versions',
        closing: 'Vos compétences ont leur propre identité dans REZICS.',
      },
    },
  },
} satisfies MiniSite<SkillsStrings>;

export default skills;
