// The developers site (design record in src/sites/developers/SITE.md, sources for every claim and
// sample in src/sites/developers/facts.md). Values under a `code` key are code, paths, tool names
// and field names: they are copied from the REZICS source and skipped by the copy rules.
import type { KindId, MiniSite } from '../schema';
import { site as shared } from '../site';

/** Languages used by the site's real code excerpts; `text` is plain. */
export type CodeLanguage = 'http' | 'json' | 'ts' | 'sh' | 'text';

export interface CodeSample {
  language: CodeLanguage;
  code: string;
}
/** A hairline row: title left, text right. */
export interface Row {
  title: string;
  body: string;
}
/** A row whose title is a field name, path or command (set in mono). */
export interface CodeRow {
  code: string;
  body: string;
}
/** A row with a plain title and the field name, path or command it is about. */
export interface NamedRow extends Row {
  code: string;
}
/** A section's meta label, heading and optional lead. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}
export interface Hero {
  headline: string;
  lede: string;
}
export interface Said {
  text: string;
  sub: string;
  note?: string;
}
export interface Shown {
  label: string;
  sample: CodeSample;
  caption?: string;
}
/** A photo row's text: eyebrow, heading and one paragraph or several. */
export interface Photo {
  label: string;
  headline: string;
  body: string[];
}

export type DevelopersStrings = {
  common: { nextSite: string; more: Head; closing: { title: string; body: string } };
  /** Descriptions of the paper still-lifes (SITE.md "Pictures"). */
  alts: Record<'hero' | 'mcp' | 'apps' | 'wiki' | 'zones', string>;
  landing: {
    hero: Hero;
    ways: Head & {
      person: { label: string; body: string };
      calls: Shown[];
      shared: Shown;
    };
    pages: Head & { lines: Record<string, string> };
    statement: Said;
    rules: Head & { rows: NamedRow[] };
    hubs: Head & { items: { kind: KindId; line: string }[] };
  };
  api: {
    hero: Hero;
    anatomy: Head & { request: CodeSample; caption: string; rows: NamedRow[] };
    replay: Head & { responses: Shown[] };
    sdk: Head & { sample: CodeSample; caption: string; openapi: string; code: { path: string } };
    reads: Head & { rows: CodeRow[] };
  };
  mcp: {
    hero: Hero;
    adapter: Photo;
    connect: Head & { rows: NamedRow[] };
    same: Head & { calls: Shown[]; shared: Shown; caption: string };
    tools: Head & {
      scopes: string;
      groups: { name: string; tools: { title: string; code: { tool: string; op: string; scopes: string[] } }[] }[];
    };
    limits: Head & { rows: Row[] };
  };
  apps: {
    hero: Hero;
    layers: Photo;
    each: Head & { rows: Row[] };
    authorize: Head & { sample: CodeSample; caption: string };
    consent: Head & { rows: { text: string; code: string }[]; note: string };
    revoke: Head & { rows: Row[] };
  };
  wiki: {
    hero: Hero;
    boundary: Photo;
    steps: Head & { sample: CodeSample; caption: string; rows: NamedRow[] };
    limits: Head & { rows: Row[] };
    statement: Said & { licence: string };
  };
  zones: {
    hero: Hero;
    theme: Photo;
    settings: Head & { tokens: CodeSample; caption: string };
    slots: Head & { pkg: CodeSample; caption: string };
    rules: Head & { rows: Row[] };
    review: Head & { rows: Row[] };
    statement: Said;
  };
  open: {
    hero: Hero & { link: string; href: string };
    licences: Head & { rows: { line: string; code: { name: string; paths: string } }[] };
    map: Head & { rows: (CodeRow & { licence: string })[] };
    run: Head & { blocks: { sample: CodeSample; caption: string }[] };
    statement: Said;
  };
};

const lines = (...l: string[]) => l.join('\n');

const strings: DevelopersStrings = {
  common: {
    nextSite: 'Site suivant',
    more: { label: 'Développeurs', headline: 'Autres pages' },
    closing: {
      title: 'Créez vos propres outils avec la même API.',
      body: 'Permettez à vos applications de lire et modifier les œuvres, les bibliothèques et les données des communautés. Chaque opération suit les règles d’identité et d’autorisation de REZICS.',
    },
  },
  alts: {
    hero: 'Sur un fond blanc chaud, trois bandes de papier arrivent du haut, de la droite et du bas, leurs extrémités glissées sous une même feuille carrée bleu gris foncé.',
    mcp: 'Une feuille bleu gris foncé percée d’une rangée de trous est traversée par une bande bleu clair qui passe alternativement dessus et dessous.',
    apps: 'Quatre feuilles carrées de tailles décroissantes sont empilées. La plus grande est bleu gris foncé, la plus petite, au sommet, bleu clair.',
    wiki: 'Une pile épaisse de feuilles crème et bleu clair est soigneusement alignée, à côté de trois bandes étroites bleu gris foncé.',
    zones: 'Une feuille bleu gris foncé est pliée en petit cadre vertical avec une fenêtre, devant une feuille bleu clair.',
  },

  landing: {
    hero: {
      headline: 'Chaque bouton correspond à une opération API.',
      lede: 'Le site de REZICS utilise lui-même cette API. Votre application envoie une requête HTTP et votre agent IA appelle un outil via le serveur MCP. Tous deux déclenchent la même opération.',
    },
    ways: {
      label: 'Trois méthodes',
      headline: 'Trois méthodes, une même réponse.',
      lead: 'Lorsque vous choisissez « Télécharger votre bibliothèque », le site envoie cette requête. Votre application ou votre agent envoie la même requête, passe les mêmes vérifications et reçoit le même export de bibliothèque.',
      person: { label: 'Personne', body: 'Sur la page Bibliothèque de REZICS, choisissez « Télécharger votre bibliothèque ».' },
      calls: [
        {
          label: 'Application',
          sample: { language: 'http', code: lines('GET /v1/me/library-export', '  ?actingSubject=…&limit=20', 'Authorization: Bearer …') },
        },
        {
          label: 'Agent',
          sample: {
            language: 'json',
            code: lines(
              '{',
              '  "name": "library_export",',
              '  "arguments": {',
              '    "query": {',
              '      "actingSubject": "…",',
              '      "limit": 20',
              '    }',
              '  }',
              '}',
            ),
          },
          caption: 'Paramètres de tools/call. Vous choisissez l’identité utilisée.',
        },
      ],
      shared: {
        label: 'Même opération',
        sample: { language: 'text', code: lines('operationId', '  getV1MeLibrary-export', 'profile', '  rezics-library-export-v1') },
      },
    },
    pages: {
      label: 'Six parties',
      headline: 'Six éléments utiles',
      lead: 'Les chemins, champs et instructions de chaque page proviennent du code source de REZICS.',
      lines: {
        api: 'Les écritures peuvent être répétées sans risque et renvoient un code fixe en cas d’échec',
        'mcp-server': 'Les agents IA se connectent à /mcp et voient les outils permis par leurs droits',
        apps: 'Autorisations OAuth révocables à tout moment',
        'wiki-toolkit': 'Extraction locale, seules les propositions sont envoyées',
        zones: 'Créez une mise en page propre au site de votre communauté',
        'open-source': 'Plateforme sous AGPL-3.0, paquets indépendants sous Apache-2.0',
      },
    },
    statement: {
      text: 'Le site REZICS ne communique pas directement avec la base de données, toutes les lectures et écritures passent par l’API ;',
      sub: 'tout ce que vous pouvez faire sur le site est également possible par API.',
    },
    rules: {
      label: 'Règles',
      headline: 'Les mêmes règles pour tous les accès',
      rows: [
        { title: 'Même identité', code: 'actingSubject', body: 'Chaque écriture précise l’identité utilisée. Le jeton ne la choisit pas à votre place, et le serveur la vérifie à chaque fois.' },
        { title: 'Même limite d’accès', code: 'scope', body: 'Une application ou un agent ne reçoit jamais plus de droits que la personne qui l’utilise.' },
        { title: 'Même reçu', code: 'Idempotency-Key', body: 'Chaque écriture inclut une clé d’idempotence. Après un délai dépassé, renvoyez la même requête pour récupérer le résultat initial sans répéter l’opération.' },
        { title: 'Mêmes codes', code: 'application/problem+json', body: 'En cas d’échec, l’API renvoie le détail du problème avec un champ code stable. Votre application peut traiter ce code sans analyser le message.' },
      ],
    },
    hubs: {
      label: 'Catalogue',
      headline: 'Les outils créés par d’autres ont aussi leur catalogue',
      lead: 'REZICS répertorie aussi les serveurs MCP, compétences et API d’autres personnes, avec leurs versions, sources, mesures ou relevés d’utilisation, notes et discussions.',
      items: [
        { kind: 'mcp', line: 'Catalogue des serveurs MCP' },
        { kind: 'skills', line: 'Catalogue des compétences pour agents IA' },
        { kind: 'apis', line: 'Catalogue des API publiques' },
      ],
    },
  },

  api: {
    hero: {
      headline: 'Marquer un livre comme lu est une opération API.',
      lede: 'Quand vous marquez une œuvre comme « Lue » dans votre bibliothèque, le site envoie la requête ci-dessous. Votre application peut envoyer la même requête pour obtenir le même résultat et suivre les mêmes vérifications.',
    },
    anatomy: {
      label: 'Écriture',
      headline: 'Une requête d’écriture, ligne par ligne',
      request: {
        language: 'http',
        code: lines(
          'PUT /v1/works/{id}/reader-status',
          'Authorization: Bearer …',
          'Idempotency-Key: 7f3c2a9e-read',
          'Content-Type: application/json',
          '',
          '{',
          '  "actingSubject":',
          '    "https://rezics.com/id/…",',
          '  "expectedVersion": 3,',
          '  "status": "read",',
          '  "finishedOn": "2026-10-19"',
          '}',
        ),
      },
      caption: 'La version, la date et la clé d’idempotence sont données à titre d’exemple.',
      rows: [
        { code: '{id}', title: 'Le chemin désigne une œuvre', body: 'Chaque élément dans REZICS a un identifiant stable commençant par https://rezics.com/id/. Il reste le même quelle que soit la langue ou le site.' },
        { code: 'actingSubject', title: 'Indiquer l’identité', body: 'Un compte peut représenter une personne ou une organisation. Chaque écriture indique l’identité utilisée, dont le serveur vérifie les droits avant l’exécution.' },
        { code: 'Idempotency-Key', title: 'Répéter sans risque', body: 'Chaque écriture utilise une clé d’idempotence. Après un délai dépassé ou une déconnexion, renvoyez la requête avec la même clé pour éviter de dupliquer l’écriture.' },
        { code: 'expectedVersion', title: 'Éviter d’écraser les changements', body: 'Si vous avez lu la version 3, indiquez la version 3. Si une autre personne a modifié les données entre-temps, votre écriture ne les écrase pas.' },
        { code: 'application/problem+json', title: 'Les erreurs détaillent le problème', body: 'En cas d’échec, code est une valeur stable. Votre application peut agir en fonction de ce code sans comparer le texte du message.' },
      ],
    },
    replay: {
      label: 'Répétition',
      headline: 'Renvoyez la même requête pour retrouver le même résultat.',
      lead: 'Avec la même clé et le même contenu, le serveur renvoie le résultat initial : la version reste 4 et replayed passe à true. Si le contenu change avec la même clé, le serveur renvoie 409 reader_status_conflict. Si la version n’est plus 3, il renvoie 409 stale_reader_status. Relisez les données avant de réessayer.',
      responses: [
        {
          label: 'Première requête',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": false', '}') },
        },
        {
          label: 'Répétition',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": true', '}') },
        },
        {
          label: 'Version obsolète',
          sample: { language: 'json', code: lines('409', '{', '  "status": 409,', '  "code":', '    "stale_reader_status"', '}') },
        },
      ],
    },
    sdk: {
      label: 'Types',
      headline: 'L’API et ses types viennent de la même définition',
      lead: 'Le site REZICS appelle l’API en TypeScript. Les types des requêtes et réponses proviennent directement des déclarations de routes du serveur. Si un champ change de nom ou si un code d’erreur est ajouté, l’application appelante le détecte à la compilation. Le SDK TypeScript est généré à partir de la même définition : vous utilisez les mêmes types que le site.',
      sample: {
        language: 'ts',
        code: lines(
          'main().v1',
          '  .works({ id: uuid(work) })',
          "  ['reader-status'].put({",
          '    actingSubject,',
          '    expectedVersion,',
          "    status: 'read',",
          '    ...dates,',
          '  }, headers())',
        ),
      },
      caption: 'Extrait de la bibliothèque du site REZICS.',
      openapi: 'La documentation OpenAPI 3.1 est générée à partir des mêmes déclarations de routes. Elle indique la validation, le format des requêtes et la réponse pour chaque code d’état.',
      code: { path: 'generated/openapi/main/public.json' },
    },
    reads: {
      label: 'Lecture',
      headline: 'Les lectures suivent aussi des règles',
      rows: [
        { code: 'nextCursor · snapshot', body: 'Les longues listes fournissent un curseur pour lire les pages jusqu’au bout. Les exports de bibliothèque incluent un instantané et signalent les changements intervenus pendant l’opération, plutôt que de vous remettre un fichier incohérent.' },
        { code: 'count.precision', body: 'Le nombre total de résultats indique s’il est exact ou s’il s’agit d’un minimum.' },
        { code: 'title.language · basis', body: 'Les titres indiquent leur langue et leur orientation d’écriture, ainsi que la raison du choix de cette langue : demandée, même écriture, autre écriture ou langue de secours.' },
        { code: '404 resource_unavailable', body: 'Une ressource que vous n’êtes pas autorisé à consulter renvoie la même réponse qu’une ressource inexistante, sans révéler qu’elle existe.' },
      ],
    },
  },

  mcp: {
    hero: {
      headline: 'Votre agent IA se connecte à /mcp.',
      lede: 'REZICS propose un serveur MCP distant à l’adresse /mcp. Votre agent s’y connecte avec le jeton que vous avez autorisé. Les outils disponibles dépendent de ses droits actuels, et chacun correspond à une opération HTTP.',
    },
    adapter: {
      label: 'Relais',
      headline: 'MCP relaie les appels, sans créer une autre voie d’écriture.',
      body: [
        'Chaque appel d’outil est relayé une seule fois vers l’opération HTTP correspondante, avec le même jeton et la même clé d’idempotence. Cette opération détermine l’identité, les autorisations et le quota utilisé.',
        'Le texte des œuvres et des pages consulté par un outil est traité comme une donnée, jamais comme une instruction.',
      ],
    },
    connect: {
      label: 'Connexion',
      headline: 'Quatre étapes de connexion',
      rows: [
        { title: 'Lire les métadonnées de la ressource', code: 'GET /.well-known/oauth-protected-resource/mcp', body: 'Une requête sans jeton reçoit une réponse 401. Son en-tête pointe vers ces métadonnées, qui indiquent le serveur d’autorisation et les permissions prises en charge.' },
        { title: 'Enregistrer le client et obtenir un jeton', code: 'RFC 7591 · PKCE', body: 'Le client de l’agent peut s’enregistrer, puis obtenir un jeton avec le code d’autorisation et PKCE. L’enregistrement ne donne aucun droit sur les ressources.' },
        { title: 'Lister les outils', code: 'tools/list', body: 'La liste n’inclut que les outils actuellement accessibles à cette identité.' },
        { title: 'Appeler un outil', code: 'tools/call', body: 'Le résultat reprend le code d’état HTTP, les en-têtes et le contenu. Les codes à partir de 400 sont signalés comme des erreurs.' },
      ],
    },
    same: {
      label: 'Même opération',
      headline: 'L’appel de l’agent est relayé vers la même opération HTTP.',
      calls: [
        { label: 'Application', sample: { language: 'http', code: lines('GET /v1/search/catalogue', '  ?q=voyage&limit=5') } },
        {
          label: 'Agent',
          sample: {
            language: 'json',
            code: lines(
              '{',
              '  "name": "search_catalogue",',
              '  "arguments": {',
              '    "query": {',
              '      "q": "voyage",',
              '      "limit": 5',
              '    }',
              '  }',
              '}',
            ),
          },
          caption: 'Envoyez ces paramètres avec tools/call.',
        },
      ],
      shared: {
        label: 'Même réponse',
        sample: { language: 'text', code: lines('operationId', '  getV1SearchCatalogue', 'profile', '  public-catalogue-ranked-v1') },
      },
      caption: 'Exemple de recherche de « voyage » dans le catalogue. L’agent reçoit la même réponse, accompagnée du code d’état et des en-têtes HTTP. Les paramètres sont regroupés selon l’opération HTTP : path, query, headers et body.',
    },
    tools: {
      label: 'Outils',
      headline: 'Liste des outils',
      lead: 'Les outils sont générés à partir des capacités déclarées par l’API. Chaque déclaration indique le nom de l’outil, son rôle et les autorisations nécessaires. La génération échoue si un nom est dupliqué ou si l’opération correspondante n’existe pas.',
      scopes: 'Autorisations requises',
      groups: [
        {
          name: 'Consulter le catalogue',
          tools: [
            { title: 'Rechercher dans le catalogue par mots clés', code: { tool: 'search_catalogue', op: 'GET /v1/search/catalogue', scopes: ['work:read'] } },
            { title: 'Lire une ressource', code: { tool: 'read_resource', op: 'GET /v1/resources/{resource}', scopes: ['work:read', 'context:read'] } },
            { title: 'Lire plusieurs résumés de ressources', code: { tool: 'resource_summaries', op: 'POST /v1/resources/summaries', scopes: ['work:read', 'context:read'] } },
            { title: 'Lire les liens d’une ressource', code: { tool: 'resource_relations', op: 'GET /v1/resources/{resource}/relations', scopes: ['work:read'] } },
            { title: 'Lire les versions d’une œuvre', code: { tool: 'work_editions', op: 'GET /v1/works/{id}/releases', scopes: ['work:read'] } },
          ],
        },
        {
          name: 'Bibliothèque',
          tools: [
            { title: 'Exporter toute la bibliothèque', code: { tool: 'library_export', op: 'GET /v1/me/library-export', scopes: ['work:read', 'rating:read'] } },
            { title: 'Envoyer un fichier de bibliothèque', code: { tool: 'library_import_create', op: 'POST /v1/me/library-imports', scopes: ['work:read', 'library:write'] } },
            { title: 'Examiner les correspondances ligne par ligne', code: { tool: 'library_import_rows', op: 'GET /v1/me/library-imports/{id}/rows', scopes: ['work:read'] } },
            { title: 'Choisir une œuvre pour une ligne', code: { tool: 'library_import_resolve', op: 'PUT /v1/me/library-imports/{id}/rows/{row}', scopes: ['work:read', 'library:write'] } },
            { title: 'Ajouter une œuvre candidate absente du catalogue', code: { tool: 'library_import_adopt', op: 'POST /v1/me/library-imports/{id}/rows/{row}/adoptions', scopes: ['work:read', 'library:write', 'work:create'] } },
            { title: 'Appliquer un import vérifié', code: { tool: 'library_import_apply', op: 'POST /v1/me/library-imports/{id}/apply', scopes: ['work:read', 'library:write', 'collection:edit', 'rating:read', 'rating:submit'] } },
            { title: 'Consulter la progression de l’import', code: { tool: 'library_import_status', op: 'GET /v1/me/library-imports/{id}/apply', scopes: ['work:read'] } },
            { title: 'Supprimer le fichier envoyé', code: { tool: 'library_import_delete', op: 'DELETE /v1/me/library-imports/{id}', scopes: ['work:read', 'library:write'] } },
          ],
        },
        {
          name: 'Wiki',
          tools: [
            { title: 'Comparer les noms extraits', code: { tool: 'wiki_candidates', op: 'POST /v1/wiki/candidates', scopes: ['wiki:propose'] } },
            { title: 'Valider un résultat d’extraction', code: { tool: 'wiki_validate', op: 'POST /v1/wiki/validations', scopes: ['wiki:propose'] } },
            { title: 'Lire le contenu Wiki accepté', code: { tool: 'wiki_history', op: 'GET /v1/wiki/{work}/history', scopes: ['work:read'] } },
            { title: 'Lire la source et la citation d’une affirmation', code: { tool: 'wiki_evidence', op: 'GET /v1/wiki/evidence/{id}', scopes: ['work:read'] } },
          ],
        },
      ],
    },
    limits: {
      label: 'Limites',
      headline: 'Limites de chaque appel',
      rows: [
        { title: '30 secondes', body: 'Délai maximal pour chaque appel d’outil.' },
        { title: '1 MiB', body: 'Taille maximale des requêtes d’outils ordinaires. Les fichiers de bibliothèque envoyés sont comptés séparément.' },
        { title: 'Sans état', body: 'Chaque requête vérifie son jeton séparément. Le serveur ne conserve pas de session.' },
      ],
    },
  },

  apps: {
    hero: {
      headline: 'Une application n’a jamais plus de droits que vous.',
      lede: 'REZICS distingue la connexion, l’identité représentée, les droits d’accès aux ressources et l’autorisation de l’application. Les jetons des applications et des agents IA ne peuvent qu’en réduire la portée.',
    },
    layers: {
      label: 'Quatre niveaux',
      headline: 'Des niveaux de plus en plus restreints',
      body: ['Le compte, l’identité, l’installation et le consentement, puis les autorisations du jeton sont consignés séparément. Chaque niveau est inclus dans le précédent. L’application ne reçoit que les droits du niveau le plus restreint.'],
    },
    each: {
      label: 'Niveau par niveau',
      headline: 'Rôle de chaque niveau',
      rows: [
        { title: 'Compte', body: 'Le service de compte confirme votre identité. La connexion seule ne donne accès à aucune ressource.' },
        { title: 'Identité', body: 'Vous agissez en tant que personne ou organisation. Le serveur vérifie cette relation de représentation et les droits sur les ressources.' },
        { title: 'Installation et consentement', body: 'L’installation et le consentement constituent deux limites indépendantes. L’enregistrement d’une application ne lui donne aucun droit sur les ressources.' },
        { title: 'Portée du jeton', body: 'Le jeton ne contient que les autorisations que vous avez acceptées, par exemple library:write. Chaque opération vérifie encore l’identité utilisée.' },
      ],
    },
    authorize: {
      label: 'Licences',
      headline: 'Code d’autorisation avec PKCE',
      sample: {
        language: 'http',
        code: lines(
          'GET /api/auth/oauth2/authorize',
          '  ?response_type=code',
          '  &client_id=…',
          '  &redirect_uri=https://a.example/',
          '  &scope=work:read%20library:write',
          '  &code_challenge=…',
          '  &code_challenge_method=S256',
          '  &state=…',
        ),
      },
      caption: 'La demande d’autorisation est envoyée au service de compte de REZICS. L’adresse de retour doit correspondre exactement à celle enregistrée.',
    },
    consent: {
      label: 'Consentement',
      headline: 'Informations affichées sur l’écran de consentement',
      rows: [
        { text: 'Nom et site de l’application', code: 'name · uri' },
        { text: 'Chaque autorisation est décrite dans votre langue, ou en anglais si la traduction manque', code: 'scopes[].description' },
        { text: 'Une application non vérifiée est clairement signalée', code: 'unverified' },
        { text: 'Domaine de retour après l’autorisation', code: 'redirectHost' },
        { text: 'Politique de confidentialité et conditions d’utilisation de l’application', code: 'policy · terms' },
      ],
      note: 'Les produits REZICS n’affichent pas d’écran de consentement. Ils figurent dans la page de compte avec leur session produit.',
    },
    revoke: {
      label: 'Révocation',
      headline: 'Révoquez à tout moment',
      rows: [
        { title: 'Consulter la liste', body: 'La page « Applications connectées » du compte indique les capacités de chaque application, la date d’autorisation et sa dernière utilisation.' },
        { title: 'Confirmer', body: 'Votre identité est vérifiée à nouveau avant le retrait.' },
        { title: 'Désactiver', body: 'Après le retrait, les jetons détenus par l’application et ceux utilisés pour les renouveler deviennent inutilisables.' },
        { title: 'Désactivation', body: 'Les applications désactivées par REZICS sont signalées. Vous pouvez toujours retirer leurs autorisations.' },
      ],
    },
  },

  wiki: {
    hero: {
      headline: 'REZICS reçoit des propositions, pas le texte intégral.',
      lede: 'Les personnes qui détiennent le texte utilisent leur agent IA et leur modèle pour extraire, chapitre par chapitre, les personnages, autres noms, relations, événements et lieux. Chaque élément est accompagné d’un emplacement et d’une courte citation, puis envoyé à REZICS pour examen humain. La boîte à outils ne se connecte pas à Internet et ne transmet aucun relevé d’utilisation.',
    },
    boundary: {
      label: 'Limites',
      headline: 'Ce qui reste et ce qui est envoyé',
      body: [
        'Les fichiers originaux et le texte intégral des chapitres restent sur votre ordinateur. La boîte à outils effectue hors ligne la conversion et le repérage. REZICS reçoit les personnages, autres noms, relations, événements et lieux, chacun accompagné d’un emplacement, d’une courte citation, de l’agent et du modèle utilisés, et du lieu où l’inférence a été effectuée.',
        'Si vous utilisez un modèle dans le nuage, le texte lu par votre agent est envoyé à son fournisseur. C’est votre choix. Pour tout garder sur votre ordinateur, utilisez un modèle local et désactivez les outils infonuagiques qui peuvent lire les fichiers.',
      ],
    },
    steps: {
      label: 'Étapes',
      headline: 'D’un fichier à une proposition',
      sample: {
        language: 'sh',
        code: lines('rezics-wiki units novel.epub', 'rezics-wiki verify novel.epub \\', '  - < locator.json'),
      },
      caption: 'units affiche un passage et son emplacement sur chaque ligne. verify reçoit un emplacement et vérifie la citation à partir du même fichier.',
      rows: [
        { code: 'rezics-wiki units', title: 'Découper en passages', body: 'Convertissez des fichiers TXT, EPUB 2 ou 3, ou les scripts texte (.rpy) de romans visuels en passages. Chacun reçoit un emplacement rezics-locator-v1 et une empreinte SHA-256 du fichier complet.' },
        { code: 'skill/SKILL.md', title: 'Transmettre à votre agent', body: 'La boîte à outils inclut une compétence qui apprend à l’agent à extraire le contenu chapitre par chapitre et à distinguer narration, paroles de personnages, rumeurs et hypothèses.' },
        { code: 'wiki_candidates · wiki_validate', title: 'Comparer et valider', body: 'Vérifiez d’abord les noms et autres noms existants. Les résultats sont classés comme correspondants, nouveaux, ambigus ou indisponibles. Validez ensuite les quotas de citations et les correspondances de chapitres manquantes.' },
        { code: 'wiki-extraction-v1', title: 'Envoyer pour examen', body: 'La proposition n’est publiée qu’après examen humain. Si la personne qui l’examine possède la même version, elle peut vérifier chaque citation sur son ordinateur.' },
        { code: 'wiki-delta-v1', title: 'Ajouter les nouveaux chapitres', body: 'Les chapitres suivants sont envoyés sous forme de propositions de modifications. Le contenu existant qui n’est pas mentionné reste inchangé.' },
      ],
    },
    limits: {
      label: 'Limites',
      headline: 'Formats pris en charge et limites',
      rows: [
        { title: 'TXT, EPUB et .rpy', body: 'Formats de fichier pris en charge.' },
        { title: '200', body: 'Nombre maximal de caractères par citation.' },
        { title: '128 MiB', body: 'Taille maximale d’un fichier.' },
      ],
    },
    statement: {
      text: 'Aucun déchiffrement ni contournement ;',
      sub: 'les fichiers protégés ne peuvent pas être lus.',
      licence: 'La boîte à outils ne déchiffre pas les fichiers, ne récupère pas les clés et ne contourne aucune protection, et ne recommande pas d’extensions de ce type. La boîte à outils et le protocole sont sous licence Apache-2.0 et ne reprennent aucun code AGPL de REZICS. Aucun compte REZICS n’est nécessaire, et tout serveur compatible peut être utilisé. Les exemples portent uniquement sur des œuvres du domaine public ou que vous êtes autorisé à utiliser.',
    },
  },

  zones: {
    hero: {
      headline: 'La Zone choisit la mise en page, la plateforme fournit les données et les règles.',
      lede: 'Une Zone est le site propre à une communauté et peut inclure son propre code de présentation. Ce code ne gère que la mise en page. La plateforme prépare les données et conserve la gestion des autorisations et des examens.',
    },
    theme: {
      label: 'Thème',
      headline: 'Réglez le thème avant de coder.',
      body: ['Chaque Zone part d’un thème prédéfini. Réglez la densité, la couleur de fond des pages et les proportions des couvertures, choisissez votre couleur d’accent si besoin, puis agencez les modules À la une, étagères, classements et sélections de la rédaction. Le code de présentation ne devient nécessaire que pour les mises en page impossibles à obtenir avec ces réglages.'],
    },
    settings: {
      label: 'Réglages',
      headline: 'Exemple de réglages de thème',
      tokens: {
        language: 'ts',
        code: lines(
          'const tokens: ZoneTokens = {',
          "  colorScheme: 'system',",
          "  accent: '#3b4a5a',",
          "  density: 'comfortable',",
          "  cardRadius: 'md',",
          "  headingFontScale: 'md',",
          "  surfaceTint: 'subtle',",
          "  fontPairing: 'serif',",
          "  pageSurface: 'flat',",
          "  coverStyle: 'portrait',",
          '};',
        ),
      },
      caption: 'Tous les champs obligatoires du thème, typés par @rezics/zone-sdk.',
    },
    slots: {
      label: 'Emplacements',
      headline: 'Le code remplit des emplacements nommés',
      lead: 'Le code de présentation est un paquet qui remplace les composants dans des emplacements nommés : en-tête, espace à la une, barre de recherche, panneau de données, fiche d’œuvre, modules et pied de page. Chaque emplacement reçoit le composant de la plateforme, que le paquet peut envelopper ou remplacer.',
      pkg: {
        language: 'ts',
        code: lines(
          'export default defineZonePackage({',
          "  slug: 'anime',",
          '  css,',
          "  catalogue: { count: 'episodes',",
          '    formatNames: animeFormatNames',
          '  },',
          '  slots: {',
          '    browseHeader:',
          '      AnimeBrowseHeader,',
          '    workCard: AnimeCard,',
          '    cataloguePanel:',
          '      AnimeCataloguePanel,',
          '    footer: AnimeFooter,',
          '  },',
          '});',
        ),
      },
      caption: 'Extrait inchangé du point d’entrée du paquet de la Zone d’animation REZICS.',
    },
    rules: {
      label: 'Limites',
      headline: 'Limites des paquets',
      rows: [
        { title: 'Aucun accès direct aux données', body: 'La plateforme charge les données et les transmet aux emplacements. Le paquet n’effectue aucune requête.' },
        { title: 'Aucun accès aux identifiants', body: 'Le paquet ne lit ni les cookies, ni le stockage du navigateur, ni les identifiants.' },
        { title: 'Ne masque pas l’interface de la plateforme', body: 'Le menu du compte, le menu de la Zone, les signalements et la vérification de l’âge restent hors des emplacements. L’indication « Pourquoi cette œuvre ? » reste visible sur chaque œuvre.' },
        { title: 'Styles limités à la Zone', body: 'Les styles restent limités à cette Zone. Les couleurs et polices utilisent uniquement les variables fournies par la plateforme.' },
        { title: 'Taille limitée', body: 'Après compression gzip, le CSS ne dépasse pas 40 Kio et le JavaScript 50 Kio.' },
      ],
    },
    review: {
      label: 'Mise en ligne',
      headline: 'De l’examen à la mise en ligne',
      rows: [
        { title: 'Calculer l’empreinte', body: 'Une empreinte est calculée à partir de tous les fichiers du paquet. La modification d’un seul octet la change.' },
        { title: 'Faire examiner par une autre personne', body: 'Un autre compte examine le code source, les fichiers générés, l’accessibilité et le comportement en cas d’erreur. Il consigne sa décision et l’empreinte des preuves.' },
        { title: 'Activer avec une date d’expiration', body: 'Seules les versions examinées peuvent être activées, et leur activation expire. Revenir à une ancienne version ne réactive pas son ancienne approbation.' },
        { title: 'Revenir à la mise en page standard', body: 'Si l’empreinte ne correspond pas, la mise en page standard s’affiche. Les lecteurs peuvent désactiver le paquet en ajoutant ?safe à l’adresse. La plateforme dispose aussi d’un interrupteur général.' },
      ],
    },
    statement: {
      text: 'Un seul système en arrière-plan, votre présentation en façade ;',
      sub: 'les agents IA peuvent accéder aux mêmes données.',
      note: 'Un nouveau site communautaire n’a pas besoin d’un nouveau programme serveur. Le code de présentation lit uniquement les API publiques et ne contient aucune logique métier. Toutes les données affichées dans une Zone sont également accessibles par API.',
    },
  },

  open: {
    hero: {
      headline: 'Le code source est public, les paquets indépendants sont libres d’accès.',
      lede: 'Les services, le site, les pages de compte, les documents de conception et les définitions d’API se trouvent dans un même dépôt public. La plateforme est sous licence AGPL-3.0. La boîte à outils Wiki et le paquet de format documentaire sont sous licence Apache-2.0 et ne dépendent pas des services de REZICS.',
      link: 'Voir le code source',
      href: shared.footer.sourceUrl,
    },
    licences: {
      label: 'Licences',
      headline: 'Deux licences',
      rows: [
        { code: { name: 'AGPL-3.0', paths: 'services/ · apps/ · generated/ · docs/' }, line: 'La plateforme : services, site, pages de compte et documentation.' },
        { code: { name: 'Apache-2.0', paths: 'packages/wiki-toolkit/ · packages/document/' }, line: 'Paquets indépendants : @rezics/wiki-toolkit et @rezics/document, sans compte REZICS requis.' },
      ],
    },
    map: {
      label: 'Dépôt',
      headline: 'Contenu du dépôt',
      rows: [
        { code: 'services/', licence: 'AGPL-3.0', body: 'Services serveur. Main fournit l’API et le serveur MCP. Account gère la connexion et les autorisations OAuth.' },
        { code: 'apps/web/', licence: 'AGPL-3.0', body: 'Site REZICS. Comme votre application, il obtient les données par API uniquement.' },
        { code: 'apps/web/zones/official/', licence: 'AGPL-3.0', body: 'Code de présentation des Zones officielles, avec un dossier par paquet.' },
        { code: 'apps/accounts/', licence: 'AGPL-3.0', body: 'Pages de compte : connexion, sécurité et applications connectées.' },
        { code: 'packages/wiki-toolkit/', licence: 'Apache-2.0', body: 'Boîte à outils Wiki locale, avec son protocole et sa compétence.' },
        { code: 'packages/document/', licence: 'Apache-2.0', body: 'Format documentaire REZICS, avec un schéma JSON qui définit le texte et les blocs.' },
        { code: 'generated/openapi/', licence: 'AGPL-3.0', body: 'Documentation OpenAPI générée à partir des déclarations de routes.' },
        { code: 'docs/', licence: 'AGPL-3.0', body: 'Décisions de conception, contrats et procédures opérationnelles, accompagnés de leurs raisons.' },
      ],
    },
    run: {
      label: 'Exécution',
      headline: 'Exécuter sur votre ordinateur',
      lead: 'Installez les versions indiquées de la chaîne d’outils et de l’environnement de conteneurs. Trois commandes suffisent pour démarrer l’API, le service de compte, le site et les pages de compte, puis afficher leurs adresses.',
      blocks: [
        { sample: { language: 'sh', code: lines('task toolchain:install', 'task dev', 'task urls') }, caption: 'Extrait de la documentation du dépôt.' },
        {
          sample: {
            language: 'ts',
            code: lines(
              'import {',
              '  fromPlainText, parseDocument,',
              '  serializeDocument,',
              "} from '@rezics/document';",
              '',
              'const snapshot = fromPlainText(',
              "  'Texte chinois\\nSecond paragraph',",
              ');',
              'parseDocument(snapshot);',
              'const stored =',
              '  serializeDocument(snapshot);',
            ),
          },
          caption: '@rezics/document ne nécessite ni compte REZICS, ni service, ni base de données. Exemple extrait de sa documentation.',
        },
      ],
    },
    statement: {
      text: 'Les règles sont écrites dans le code,',
      sub: 'et leurs raisons dans la documentation.',
      note: 'Les règles qui peuvent être exprimées par des types, des tests et des contrôles sont codées. Les raisons de chaque décision sont consignées dans la documentation, avec leur date.',
    },
  },
};

export default {
  id: 'developers',
  base: '/developers/',
  name: 'Développeurs',
  theme: { field: '#3b4a5a', on: 'paper' },
  next: 'books',
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'Développeurs REZICS : une seule API',
        description: 'Chaque bouton du site REZICS correspond à une opération API. Votre application l’appelle en HTTP, votre agent IA via le serveur MCP. La vérification d’identité, les reçus et les codes d’erreur sont les mêmes que lorsque vous cliquez sur le bouton.',
      },
    },
    {
      slug: 'api',
      label: 'API et SDK',
      meta: {
        title: 'API et SDK : chaque opération a un contrat',
        description: 'Chaque opération API de REZICS précise son chemin, ses autorisations, sa clé d’idempotence et ses codes d’erreur. La documentation OpenAPI et les types TypeScript sont générés à partir des mêmes déclarations de routes, utilisées par le site et votre application.',
      },
    },
    {
      slug: 'mcp-server',
      label: 'Serveur MCP',
      meta: {
        title: 'Le serveur MCP de REZICS',
        description: 'Les agents IA se connectent au serveur MCP distant de REZICS avec une autorisation OAuth et utilisent les outils générés depuis les déclarations de l’API. Chaque appel est relayé une seule fois à l’opération HTTP correspondante, qui détermine l’identité, les autorisations et le quota.',
      },
    },
    {
      slug: 'apps',
      label: 'Applications connectées',
      meta: {
        title: 'Applications connectées : autorisation OAuth',
        description: 'Les applications tierces obtiennent un jeton avec le code d’autorisation OAuth et PKCE. L’écran de consentement présente les autorisations dans la langue de la personne, ou en anglais si la traduction manque. Dans la page des applications connectées de son compte, elle peut consulter et retirer une autorisation, ce qui invalide le jeton.',
      },
    },
    {
      slug: 'wiki-toolkit',
      label: 'Boîte à outils Wiki',
      meta: {
        title: 'Boîte à outils Wiki locale : REZICS ne reçoit pas le texte intégral',
        description: 'La boîte à outils Wiki open source découpe les fichiers TXT et EPUB en passages vérifiables sur votre ordinateur. L’agent IA de votre choix extrait les personnages et les événements. REZICS reçoit uniquement des propositions accompagnées d’emplacements et de courtes citations, jamais le texte intégral.',
      },
    },
    {
      slug: 'zones',
      label: 'Thèmes Zone',
      meta: {
        title: 'Thèmes Zone et code de présentation',
        description: 'Chaque Zone peut composer son site avec des réglages de thème et des modules, ou fournir du code de présentation à ses emplacements nommés. Le code est examiné par une autre personne et verrouillé par empreinte avant son exécution. Les lecteurs peuvent revenir à la mise en page standard à tout moment.',
      },
    },
    {
      slug: 'open-source',
      label: 'Code source ouvert',
      meta: {
        title: 'Code source ouvert : AGPL et Apache',
        description: 'Le code source de la plateforme REZICS est publié sous AGPL-3.0. Vous pouvez exécuter l’ensemble des services localement. La boîte à outils Wiki et le format documentaire sont des paquets indépendants sous licence Apache-2.0, sans compte REZICS requis.',
      },
    },
  ],
  strings,
} satisfies MiniSite<DevelopersStrings>;
