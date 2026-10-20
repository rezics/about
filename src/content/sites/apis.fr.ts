// API Hub (`apis`): every visible string of /apis/ and its six inner pages. Design record and
// sources: src/sites/apis/SITE.md and src/sites/apis/facts.md.
import type { MiniSite, PartId } from '../schema';
import { kinds } from '../kinds';

const kind = kinds.find((k) => k.id === 'apis')!;

/** A row of a facts list: title on the left, text on the right. */
export interface ApisRow {
  title: string;
  body: string;
}
/** An invented example shown as a flat tile: name, a note at the top, one line. */
export interface ApisTile {
  name: string;
  rel?: string;
  line: string;
}
/** A page's first screen: one sentence and one short paragraph. */
export interface ApisHero {
  headline: string;
  lede: string;
}
/** A section head: the eyebrow label, the h2 and an optional lead paragraph. */
export interface ApisSection {
  eyebrow: string;
  headline: string;
  lead?: string;
}
/** A large statement: the first half in ink, the second in muted ink, an optional note. */
export interface ApisStatement {
  lead: string;
  rest: string;
  note?: string;
}

export interface ApisStrings {
  /** Prefix of every caption under an invented example. */
  example: string;
  /** The row of further pages at the foot of every inner page. */
  next: { label: string; aria: string };
  /** The sentence under every page's closing statement. */
  closingBody: string;
  /** Text alternatives of the five photographs. */
  pictures: { hero: string; request: string; versions: string; specs: string; connections: string };
  home: {
    hero: ApisHero;
    pages: ApisSection & { rows: Record<string, string> };
    directory: ApisSection & { link: string };
    statement: ApisStatement;
    parts: ApisSection & { notes: Partial<Record<PartId, string>> };
    connections: ApisSection & { link: string };
    closing: string;
  };
  directory: {
    hero: ApisHero;
    facets: ApisSection & { rows: ApisRow[] };
    complete: ApisStatement;
    identity: ApisSection & { rows: ApisRow[] };
    views: ApisSection & { tiles: ApisTile[]; caption: string };
    closing: string;
  };
  versions: {
    hero: ApisHero;
    closed: ApisStatement;
    sequence: ApisSection & { tiles: ApisTile[]; caption: string };
    events: ApisSection & { rows: ApisRow[] };
    follow: ApisSection & { rows: ApisRow[]; footnote: string };
    closing: string;
  };
  specs: {
    hero: ApisHero;
    facts: ApisSection & { rows: ApisRow[] };
    measure: ApisStatement;
    fields: ApisSection & { rows: ApisRow[]; footnote: string };
    absent: ApisSection;
    closing: string;
  };
  connections: {
    hero: ApisHero;
    relations: ApisSection & { rows: ApisRow[] };
    both: ApisStatement;
    provider: ApisSection & { more: string };
    neighbours: ApisSection & {
      lines: { mcp: string; skills: string; software: string };
      developers: { name: string; line: string };
    };
    closing: string;
  };
  community: {
    hero: ApisHero;
    rating: ApisSection & { rows: ApisRow[] };
    discussion: ApisStatement;
    lists: ApisSection & { tiles: (ApisTile & { kind: 'apis' | 'software' | 'mcp' | 'skills' })[]; caption: string };
    zone: ApisSection & { link: string };
    closing: string;
  };
  publishing: {
    hero: ApisHero;
    path: ApisSection & { rows: ApisRow[] };
    proposal: ApisSection & { rows: ApisRow[] };
    paid: ApisStatement;
    provider: ApisSection & { more: string };
    closing: string;
  };
}

export default {
  id: 'apis',
  base: '/apis/',
  name: kind.name,
  theme: { kind: 'apis' },
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'API Hub : une fiche par API publique',
        description:
          'REZICS crée une fiche pour chaque API publique. Le fournisseur, les versions, la documentation technique et l’authentification indiquent leur source et leur date. Filtrez les champs disponibles, suivez les changements de version et consultez les notes et discussions liées à chaque version.',
      },
    },
    {
      slug: 'directory',
      label: 'Catalogue',
      meta: {
        title: 'Catalogue API Hub : recherchez par données',
        description:
          'Dans le catalogue API Hub, filtrez par fournisseur, authentification, documentation technique et statut de version. Les résultats vont jusqu’au dernier et leur nombre indique son degré de précision. Enregistrez et suivez vos critères sous forme de vue.',
      },
    },
    {
      slug: 'versions',
      label: 'Versions',
      meta: {
        title: 'Versions API Hub : un relevé pour chaque version',
        description:
          'Chaque version d’une API a son propre relevé, qui décrit le contenu réellement publié à ce moment-là. Les annonces, dates prévues, disponibilités, reports et retraits sont consignés séparément. Choisissez le niveau de notification pour vos suivis.',
      },
    },
    {
      slug: 'specs',
      label: 'Spécifications et authentification',
      meta: {
        title: 'API Hub : spécifications et authentification',
        description:
          'L’authentification et la documentation technique sont consignées pour chaque version, avec leur source : fournisseur, données importées ou communauté. Les mesures précisent l’indicateur, la méthode, les conditions, l’unité et la date. Les valeurs inconnues, nulles et sans objet sont distinguées.',
      },
    },
    {
      slug: 'connections',
      label: 'Relations',
      meta: {
        title: 'API Hub : les services liés aux API',
        description:
          'Les fournisseurs, bibliothèques clientes, serveurs MCP qui enveloppent une API et compétences qui l’utilisent sont reliés entre eux. Chaque fiche permet de voir les relations depuis l’autre extrémité. Les fournisseurs ont aussi leur propre page avec leurs contributions.',
      },
    },
    {
      slug: 'community',
      label: 'Communauté',
      meta: {
        title: 'Communauté API Hub : notes, discussions et listes',
        description:
          'Les notes d’une API précisent la question évaluée, la version et le groupe concerné, ainsi que leur nombre et leur répartition. Les discussions portent sur la fiche ou une version. Les listes peuvent réunir API, logiciels et serveurs MCP.',
      },
    },
    {
      slug: 'publishing',
      label: 'Ajouts',
      meta: {
        title: 'API Hub : ajouts et corrections',
        description:
          'Avant d’ajouter une API, recherchez les doublons et précisez s’il s’agit d’une nouvelle API, d’une nouvelle version ou d’un alias. Les propositions sont accompagnées de preuves et vérifiées par une personne avant leur application. Les fournisseurs et les agents IA suivent le même processus.',
      },
    },
  ],
  strings: {
    example: 'Exemple : ',
    next: { label: 'À suivre', aria: 'Autres pages d’API Hub' },
    closingBody: 'Utilisez un seul compte pour trouver des API, suivre leurs versions et partager vos retours d’intégration.',
    pictures: {
      hero: 'Sur un fond blanc chaud, plusieurs feuilles bleu clair se chevauchent. Des rangées de trous réguliers bordent les feuilles, au-dessus d’une feuille bleu foncé.',
      request: 'Cinq feuilles bleu clair sont alignées comme des portiques. Une bande gris bleu foncé passe par les fentes de chaque feuille.',
      versions: 'Six feuilles bleu clair sont disposées en éventail et décalées, des tons clairs aux plus foncés. Les trous ronds de leur bord supérieur sont alignés.',
      specs: 'Trois feuilles épaisses bleu clair se chevauchent. Chacune porte un gaufrage carré et vide dans un coin, au-dessus d’un fond gris bleu foncé.',
      connections: 'Une feuille bleu clair est percée d’une rangée de trous. Des bandes ocre, vert pâle et bleu canard partent du bord et passent chacune par un trou.',
    },
    home: {
      hero: {
        headline: 'Une fiche par API, une source pour chaque donnée.',
        lede: 'Le fournisseur, les versions, la documentation technique et l’authentification sont réunis sur une même fiche, avec leur auteur et leur date.',
      },
      pages: {
        eyebrow: 'Six pages',
        headline: 'Trouvez une API et suivez chacune de ses versions.',
        rows: {
          directory: 'Filtrez sur les données et parcourez tous les résultats',
          versions: 'Gardez les anciennes versions et suivez les nouvelles',
          specs: 'Sources de l’authentification et de la documentation',
          connections: 'Bibliothèques, serveurs MCP et compétences reliés',
          community: 'Notes et discussions avec un objet précis',
          publishing: 'Un même processus pour les ajouts et les corrections',
        },
      },
      directory: {
        eyebrow: 'Catalogue',
        headline: 'Chaque filtre s’appuie sur une donnée sourcée de la fiche.',
        lead: 'Filtrez par authentification, documentation technique, statut de version et relations avec des serveurs MCP ou des compétences. Combinez les critères et parcourez tous les résultats.',
        link: 'Voir le catalogue',
      },
      statement: {
        lead: 'Une API change de version, de nom ou est retirée.',
        rest: 'Sa fiche consigne chaque changement et sa source.',
      },
      parts: {
        eyebrow: 'Huit composants',
        headline: 'Une fiche d’API réunit huit composants.',
        lead: 'L’identité vient toujours en premier. API Hub en utilise sept autres parmi les quinze composants partagés avec les livres et les anime.',
        notes: {
          identity: 'Un changement de nom ou d’identifiant ne crée pas une nouvelle fiche. Les anciennes formes restent consultables.',
          editions: 'Chaque version a son propre relevé, qui décrit le contenu réellement publié à ce moment-là.',
          specs: 'Authentification, documentation technique et mesures indiquent chacune leur source et leur date.',
          credits: 'Les organisations qui fournissent l’API et les personnes qui la maintiennent sont créditées selon leur rôle et ont chacune leur page.',
          ratings: 'Chaque note précise la version et la question évaluées.',
          discussion: 'Les discussions portent sur l’API ou sur une version donnée.',
          follow: 'Recevez les annonces de nouvelles versions et de retrait selon vos préférences.',
          lists: 'Une liste peut réunir des API, des logiciels et des compétences, avec une note pour chacun.',
        },
      },
      connections: {
        eyebrow: 'Relations',
        headline: 'Les services liés à une API sont reliés entre eux.',
        lead: 'Les bibliothèques clientes, les serveurs MCP qui enveloppent une API, les compétences qui l’utilisent et les organisations qui la fournissent ont chacun leur propre fiche. Les relations sont visibles depuis les deux extrémités.',
        link: 'Voir les relations',
      },
      closing: 'Avant de choisir une API, consultez ses versions et ses sources.',
    },
    directory: {
      hero: {
        headline: 'Recherchez des API par données et parcourez tous les résultats.',
        lede: 'Chaque critère correspond à une donnée sourcée sur la fiche. Combinez les critères disponibles et parcourez tous les résultats dans l’ordre, au-delà des premières pages.',
      },
      facets: {
        eyebrow: 'Critères',
        headline: 'Combinez les champs disponibles.',
        lead: 'Chaque critère a son nom et sa valeur. Chaque valeur a aussi sa propre fiche que vous pouvez ouvrir pour poursuivre votre recherche.',
        rows: [
          { title: 'Fournisseur', body: 'L’organisation ou la personne qui fournit l’API. Affichez ensemble les API d’un même fournisseur.' },
          { title: 'Authentification', body: 'Sans authentification, par clé API ou par autorisation utilisateur. Chaque version est consignée séparément.' },
          { title: 'Documentation technique', body: 'Sa présence, son emplacement et son fournisseur.' },
          { title: 'Statut de version', body: 'Annoncée, disponible, retirée ou annulée.' },
          { title: 'Relations', body: 'La présence d’un serveur MCP qui l’enveloppe, d’une bibliothèque cliente qui l’appelle ou d’une compétence qui l’utilise.' },
          { title: 'Nom et langue', body: 'Recherchez les noms et alias dans toutes les langues.' },
          { title: 'Notes', body: 'Filtrez par question d’évaluation et consultez aussi le nombre de notes.' },
          { title: 'Date', body: 'Filtrez par date de sortie d’une version ou de vérification d’une donnée.' },
        ],
      },
      complete: {
        lead: 'Aperçu, classement et liste complète sont trois promesses différentes.',
        rest: 'La liste complète va jusqu’au dernier résultat.',
        note: 'Chaque résultat précise si son nombre est exact et à quelle date les données ont été mises à jour. La taille d’une page ne marque pas la fin de la liste.',
      },
      identity: {
        eyebrow: 'Identité',
        headline: 'Une API n’a qu’une fiche.',
        lead: 'Une API garde la même fiche après un changement de nom ou d’identifiant, ou si quelqu’un l’ajoute en double.',
        rows: [
          { title: 'Les identifiants gardent leur origine', body: 'Chaque identifiant précise son espace de noms et sa source. Deux noms identiques provenant de lieux différents ne sont pas considérés comme la même API.' },
          { title: 'Les anciens noms restent consultables', body: 'Les alias, anciens noms et formes linguistiques sont conservés séparément. Recherchez n’importe lequel pour retrouver la fiche.' },
          { title: 'Les doublons sont fusionnés', body: 'Un plan de fusion indique les notes, critiques et suivis concernés. Une personne décide de son application. La fusion peut être annulée.' },
          { title: 'Les anciennes adresses redirigent', body: 'Les fiches fusionnées redirigent vers celle qui est conservée, avec une explication de la fusion.' },
        ],
      },
      views: {
        eyebrow: 'Vues',
        headline: 'Enregistrez et suivez les critères que vous utilisez souvent.',
        lead: 'Enregistrez un groupe de critères sous un nom et partagez-le. Suivez une vue pour voir les nouvelles fiches correspondantes dans votre fil, ou recevoir un résumé.',
        tiles: [
          { name: 'Sans authentification, documentée', line: 'Commencez par les API documentées et sans authentification' },
          { name: 'Même fournisseur', line: 'Consultez toutes les API fournies par une organisation' },
          { name: 'Serveur MCP associé', line: 'API reliées à un serveur MCP' },
          { name: 'Noms en chinois traditionnel', line: 'API avec un nom en chinois déjà renseigné' },
        ],
        caption: 'Exemples de noms et de contenu de vue.',
      },
      closing: 'Pour trouver une API, partez d’une donnée sourcée.',
    },
    versions: {
      hero: {
        headline: 'Les anciennes versions restent visibles. Suivez les nouvelles.',
        lede: 'Chaque version conserve son état au moment de sa publication, même après son retrait. Suivez une API pour recevoir les annonces, sorties et retraits selon vos préférences.',
      },
      closed: {
        lead: 'Le relevé d’une version publiée n’est pas réécrit.',
        rest: 'Chaque changement ultérieur crée une nouvelle version.',
      },
      sequence: {
        eyebrow: 'Historique des versions',
        headline: 'Chaque version d’une API a ses propres sources.',
        lead: 'Exemple fictif d’une API météo : la version 3 utilise une clé API, tandis que le relevé de la version 2 sans authentification reste intact. Corrigez un relevé erroné avec des preuves. Tout ajout ultérieur crée une nouvelle version.',
        tiles: [
          { name: 'v1', rel: 'Retirée', line: 'Sans authentification. Annonce du fournisseur vérifiée le 18/06/2026.' },
          { name: 'v2', rel: 'Disponible', line: 'Sans authentification. Notes de version du fournisseur vérifiées le 12/08/2026.' },
          { name: 'v3', rel: 'Disponible', line: 'Clé API. Documentation technique du fournisseur vérifiée le 01/10/2026.' },
          { name: 'v4', rel: 'Annoncée', line: 'Clé API. Prévision du fournisseur vérifiée le 19/10/2026.' },
        ],
        caption: 'L’API météo, ses versions, méthodes d’authentification, sources et dates sont fictives.',
      },
      events: {
        eyebrow: 'Cinq événements',
        headline: 'De l’annonce au retrait, chaque étape est consignée.',
        lead: 'Une version peut avoir plusieurs dates importantes. REZICS ne les réduit pas à une seule.',
        rows: [
          { title: 'Annoncée', body: 'Le fournisseur annonce une nouvelle version. Il s’agit d’une annonce, pas encore d’une sortie.' },
          { title: 'Programmée', body: 'Une date prévue est publiée. Si elle change, l’ancienne reste dans l’historique.' },
          { title: 'Disponible', body: 'La disponibilité est confirmée et accompagnée de sa source.' },
          { title: 'Reportée', body: 'La date prévue est repoussée. Un report n’est pas une annulation, qui est indiquée séparément.' },
          { title: 'Retirée', body: 'Le fournisseur retire cette version. Le relevé est conservé et son statut est mis à jour.' },
        ],
      },
      follow: {
        eyebrow: 'Suivi',
        headline: 'Choisissez les nouvelles à recevoir sur une API.',
        lead: 'Le suivi est gratuit et ne demande pas l’accord du fournisseur. Choisissez un niveau de notification pour déterminer les nouvelles qui arrivent dans votre boîte de réception.',
        rows: [
          { title: 'Tout', body: 'Recevez les nouvelles versions, annonces, décisions et publications ordinaires.' },
          { title: 'Essentiel', body: 'Recevez uniquement les nouvelles versions, annonces et décisions.' },
          { title: 'Désactivé', body: 'Les nouvelles ordinaires restent dans votre fil. Les réponses, mentions et autres interactions directes vous sont toujours signalées.' },
          { title: 'Par version', body: 'Configurez des notifications distinctes pour une version précise.' },
        ],
        footnote: 'Recevez les notifications dans votre boîte de réception, par notification push ou par résumé par e-mail. Désabonnez-vous d’un résumé par e-mail en un clic.',
      },
      closing: 'Recevez les nouvelles versions selon vos préférences.',
    },
    specs: {
      hero: {
        headline: 'Sachez ce qu’il faut avant d’appeler une API.',
        lede: 'Pour chaque version, consultez la méthode d’authentification, la documentation technique et les mesures disponibles, avec leur auteur et leur date.',
      },
      facts: {
        eyebrow: 'Données par version',
        headline: 'Authentification et documentation sont consignées pour chaque version.',
        lead: 'Deux versions d’une même API peuvent utiliser des méthodes d’authentification différentes. Ces données suivent donc chaque version et indiquent leur source.',
        rows: [
          { title: 'Authentification', body: 'Sans authentification, par clé API ou par autorisation utilisateur. Chaque version garde son propre relevé, même si la méthode change.' },
          { title: 'Documentation technique', body: 'La fiche indique où se trouve la documentation, qui l’a fournie et quand elle a été vérifiée.' },
          { title: 'Mesures', body: 'Chaque mesure comprend l’indicateur, la méthode, les conditions, l’unité et la date.' },
          { title: 'Sources', body: 'Chaque donnée précise si elle vient du fournisseur, de données publiques importées ou d’une mesure de la communauté. Les données importées incluent un lien vers leur source et leur licence.' },
        ],
      },
      measure: {
        lead: 'Une mesure et une note sont deux choses différentes.',
        rest: 'Une note exprime un avis ; une mesure indique ce qui a été observé et dans quelles conditions.',
      },
      fields: {
        eyebrow: 'Mesures',
        headline: 'Cinq informations pour comprendre une mesure.',
        lead: 'Lisez l’indicateur, la méthode, les conditions, l’unité et la date. Pour comparer les résultats, vérifiez aussi leur objet et leur périmètre.',
        rows: [
          { title: 'Indicateur', body: 'Ce qui est mesuré.' },
          { title: 'Méthode', body: 'La méthode utilisée.' },
          { title: 'Conditions', body: 'Les circonstances de la mesure.' },
          { title: 'Unité', body: 'L’unité de la valeur mesurée.' },
          { title: 'Date', body: 'Le jour de la mesure. Les anciens résultats conservent leur date.' },
        ],
        footnote: 'Les résultats d’un même indicateur forment un historique et peuvent être comparés à ceux d’autres API.',
      },
      absent: {
        eyebrow: 'Données absentes',
        headline: 'Inconnu, zéro et sans objet sont trois réponses distinctes.',
        lead: 'Une donnée non mesurée est inconnue, pas égale à zéro. Un indicateur sans objet n’est pas traité comme une donnée manquante. Une absence de données ne devient pas une note trompeuse.',
      },
      closing: 'Vérifiez l’authentification avant de commencer l’intégration.',
    },
    connections: {
      hero: {
        headline: 'Une API relie tout ce qui est construit autour d’elle.',
        lede: 'Sur REZICS, les bibliothèques clientes, serveurs MCP qui l’enveloppent, compétences qui l’utilisent et organisations qui la fournissent ont chacun une fiche, reliée aux autres.',
      },
      relations: {
        eyebrow: 'Relations',
        headline: 'Chaque relation a un nom et un sens.',
        lead: 'La relation et le rôle de chaque partie sont indiqués. Elle apparaît sur la fiche de l’API comme sur celle des éléments associés.',
        rows: [
          { title: 'Bibliothèques clientes', body: 'Les bibliothèques qui appellent l’API ont leur propre fiche de logiciel, avec leurs versions et dépendances.' },
          {
            title: 'Enveloppée par un serveur MCP',
            body: 'Un projet qui enveloppe l’API dans un serveur MCP a sa propre fiche dans MCP Hub. Le projet, le paquet et le point de terminaison y sont consignés séparément.',
          },
          {
            title: 'Compétences qui l’utilisent',
            body: 'Les compétences qui utilisent cette API ont leur propre fiche dans Skill Hub, reliée à celle-ci.',
          },
          { title: 'Autres API du même fournisseur', body: 'Retrouvez les autres API depuis la page de leur fournisseur.' },
        ],
      },
      both: {
        lead: 'Depuis une API, retrouvez son serveur MCP,',
        rest: 'et depuis le serveur, revenez à l’API.',
      },
      provider: {
        eyebrow: 'Fournisseurs',
        headline: 'Chaque fournisseur a sa propre page.',
        lead: 'L’organisation ou la personne qui fournit une API a une identité publique indépendante des comptes. Sa page réunit les API fournies, les logiciels publiés et les serveurs MCP maintenus, chacun avec son rôle.',
        more: 'Une personne garde la même identité sur REZICS, qu’elle écrive des romans, crée des logiciels ou maintienne des API.',
      },
      neighbours: {
        eyebrow: 'Domaines associés',
        headline: 'Trois domaines liés et un site pour les développeurs.',
        lines: {
          mcp: 'Serveurs MCP qui transforment une API en outils',
          skills: 'Compétences utilisées par les agents IA',
          software: 'Bibliothèques et applications qui appellent une API',
        },
        developers: { name: 'Développeurs', line: 'Les API de REZICS sont présentées ici' },
      },
      closing: 'Chaque relation est visible depuis ses deux extrémités.',
    },
    community: {
      hero: {
        headline: 'Chaque note précise la version évaluée.',
        lede: 'Pour noter une API, précisez la question et la version concernées. Le nombre et la répartition des notes apparaissent à côté. Les discussions, listes et communautés restent liées à la même fiche.',
      },
      rating: {
        eyebrow: 'Notes',
        headline: 'Cinq éléments définissent une note.',
        lead: 'Exemple : la clarté de la documentation, notée sur 5, pour la version 3, par les utilisateurs de l’ensemble du site.',
        rows: [
          { title: 'Question', body: 'La question évaluée. Les notes sur des questions différentes ne sont jamais combinées.' },
          { title: 'Échelle', body: 'L’échelle utilisée et la signification de chaque niveau sont précisées.' },
          { title: 'Objet', body: 'La version évaluée. Sa note ne compte pas pour une autre version.' },
          { title: 'Groupe', body: 'Le groupe qui a donné les notes est indiqué à côté du résultat.' },
          { title: 'Nombre et répartition', body: 'Chaque note indique le nombre de réponses et leur répartition. Si elles sont trop peu nombreuses, aucune moyenne n’est calculée.' },
        ],
      },
      discussion: {
        lead: 'Discutez des problèmes d’intégration sous la version concernée.',
        rest: 'Quand une nouvelle version sort, les discussions précédentes restent liées à l’ancienne.',
      },
      lists: {
        eyebrow: 'Listes',
        headline: 'Réunissez les outils d’un projet dans une liste.',
        lead: 'Une liste peut réunir des API, des bibliothèques clientes, des serveurs MCP et des compétences. Ajoutez une note à chaque élément, choisissez les paramètres de visibilité, triez et exportez la liste.',
        tiles: [
          { kind: 'apis', rel: 'API', name: 'API météo', line: 'Source des prévisions' },
          { kind: 'apis', rel: 'API', name: 'API de cartes', line: 'Carte d’arrière-plan' },
          { kind: 'software', rel: 'Logiciel', name: 'Bibliothèque cliente', line: 'Appelle l’API météo depuis le code' },
          { kind: 'mcp', rel: 'Serveur MCP', name: 'Serveur MCP météo', line: 'Permet à un agent IA de consulter la météo' },
          { kind: 'skills', rel: 'Compétence', name: 'Compétence d’organisation', line: 'Adapte le programme quotidien à la météo' },
        ],
        caption: 'Exemple de liste pour un projet fictif.',
      },
      zone: {
        eyebrow: 'Communauté et Zone',
        headline: 'Créez une Zone consacrée à un type d’API.',
        lead: 'Une communauté peut établir ses règles et interpréter les données des fiches selon ses propres critères. Elle peut aussi créer une Zone, un site catalogue consacré aux API qui utilise le même graphe de données.',
        link: 'Voir le module des sites',
      },
      closing: 'Chaque note et discussion précise son objet.',
    },
    publishing: {
      hero: {
        headline: 'Vérifiez d’abord si l’API existe déjà.',
        lede: 'Chaque ajout et chaque correction fait l’objet d’une proposition qui précise les changements et leur fondement. Une personne la vérifie avant son application, puis un reçu est conservé. Les personnes, fournisseurs et agents IA suivent le même processus.',
      },
      path: {
        eyebrow: 'Étapes',
        headline: 'Comment une fiche est ajoutée.',
        rows: [
          { title: 'Rechercher', body: 'Avant d’ouvrir le formulaire, recherchez l’API par son nom, ses alias et ses identifiants. Si elle existe déjà, ajoutez un alias ou une nouvelle version au lieu d’une autre fiche.' },
          { title: 'Préciser l’objet', body: 'Indiquez s’il s’agit d’une nouvelle API, d’une nouvelle version d’une API existante ou d’une partie de version. Un modèle peut suggérer une réponse, mais ne peut pas décider à votre place.' },
          { title: 'Joindre des preuves', body: 'Chaque proposition précise l’emplacement à modifier, la source et la méthode utilisées.' },
          { title: 'Vérification humaine', body: 'La personne chargée de la vérification consulte les preuves avant de décider. Si la fiche change après l’envoi, la proposition est renvoyée pour une nouvelle vérification.' },
          { title: 'Indiquer les données non vérifiées', body: 'Une nouvelle fiche peut être publiée avec le statut non vérifié et les sources de chaque champ. Avant vérification, elle n’apparaît pas dans les exportations et recommandations fiables.' },
          { title: 'Conserver un reçu', body: 'Un reçu est conservé après l’application. Pour annuler un changement, une correction est ajoutée sans réécrire l’historique.' },
        ],
      },
      proposal: {
        eyebrow: 'Format des propositions',
        headline: 'Les agents IA utilisent le même format que les personnes.',
        lead: 'Les agents officiels et tiers envoient le même type de proposition. Le résultat d’un agent ne peut pas servir à le valider lui-même, y compris lors d’une nouvelle importation.',
        rows: [
          { title: 'Cible et version', body: 'La fiche exacte à modifier et la version de révision consultée par l’agent.' },
          { title: 'Changement', body: 'Le contenu à ajouter, modifier ou retirer.' },
          { title: 'Preuves', body: 'La source et son emplacement à l’appui du changement.' },
          { title: 'Méthode', body: 'Comment le résultat a été obtenu et quelles données ont été utilisées.' },
          { title: 'Niveau de confiance', body: 'L’assurance déclarée par l’agent. Il s’agit de son avis, pas d’une garantie de REZICS.' },
          { title: 'Transparence', body: 'Indiquez que la proposition est automatisée et qui en est responsable.' },
        ],
      },
      paid: {
        lead: 'Une conclusion ne s’achète pas.',
        rest: 'Aucun don ou abonnement ne change une décision de vérification.',
      },
      provider: {
        eyebrow: 'Fournisseurs',
        headline: 'Les fournisseurs suivent le même processus.',
        lead: 'Un fournisseur peut prouver qu’il possède l’espace de noms de son API. Les faits qu’il propose sont attribués au fournisseur. Sa déclaration reste une déclaration ; les mesures et discussions de la communauté restent aussi sur la fiche.',
        more: 'Lorsqu’un fournisseur retire une déclaration, seule cette source est retirée. Les données importées indiquent leur source et leur licence. Les importations ultérieures ne remplacent pas en silence les champs vérifiés et protégés.',
      },
      closing: 'Les ajouts et les corrections sont vérifiés par une personne.',
    },
  },
} satisfies MiniSite<ApisStrings>;
