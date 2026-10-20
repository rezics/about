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
    nextSite: 'Next site',
    more: { label: 'Developers', headline: 'More pages' },
    closing: {
      title: 'Build your tools on one API.',
      body: 'Use your own code to read and write works, library entries, and community data. Every operation follows REZICS identity and authorization rules.',
    },
  },
  alts: {
    hero: 'On warm white paper, three paper strips extend from above, the right, and below. Their ends meet beneath one square of deep blue-gray paper.',
    mcp: 'A row of round holes runs through a sheet of deep blue-gray paper. A light blue strip weaves through them.',
    apps: 'Four sheets of paper are stacked from largest to smallest. The outer sheet is deep blue-gray, and the smallest light blue sheet sits on top.',
    wiki: 'A neat stack of thick ivory and light blue sheets sits beside three narrow strips of deep blue-gray paper.',
    zones: 'A sheet of deep blue-gray paper is folded into a small standing frame with a window. A light blue sheet stands behind it.',
  },

  landing: {
    hero: {
      headline: 'Every button calls an API operation.',
      lede: 'The REZICS website calls this API too. Your code sends an HTTP request, and an AI agent calls a tool through an MCP server. Both reach the same operation.',
    },
    ways: {
      label: 'Three ways in',
      headline: 'Three ways in. One response.',
      lead: 'When you select “Export library” in your library, the website sends this request. Your code and agent send the same request, pass the same checks, and receive the same library export.',
      person: { label: 'You', body: 'Select “Export library” on your REZICS library page.' },
      calls: [
        {
          label: 'Code',
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
          caption: 'Arguments for tools/call. You choose the identity.',
        },
      ],
      shared: {
        label: 'One operation',
        sample: { language: 'text', code: lines('operationId', '  getV1MeLibrary-export', 'profile', '  rezics-library-export-v1') },
      },
    },
    pages: {
      label: 'Six parts',
      headline: 'Six things you can use',
      lead: 'Every path, field, and command on these pages comes from REZICS source code.',
      lines: {
        api: 'Safe retries for writes, with fixed error codes',
        'mcp-server': 'AI agents connect at /mcp and see tools allowed by their permissions',
        apps: 'Authorize with OAuth and revoke access at any time',
        'wiki-toolkit': 'Extract on your computer and send only proposals',
        zones: 'Create a custom layout for a community site',
        'open-source': 'AGPL-3.0 platform, Apache-2.0 standalone packages',
      },
    },
    statement: {
      text: 'The REZICS website never accesses the database directly. Every read and write goes through the API;',
      sub: 'anything you can do on the site is available through the API.',
    },
    rules: {
      label: 'Rules',
      headline: 'The same rules from every entry point',
      rows: [
        { title: 'One identity', code: 'actingSubject', body: 'Each write states which identity is acting. A token does not choose for you, and the server checks the identity every time.' },
        { title: 'One permission limit', code: 'scope', body: 'An app or agent can have fewer permissions than the user, never more.' },
        { title: 'One receipt', code: 'Idempotency-Key', body: 'Writes include an idempotency key. Retry the same request after a timeout to get the original result without repeating the operation.' },
        { title: 'One error format', code: 'application/problem+json', body: 'Failures return problem details with a fixed code field. Your code can handle the code without parsing the message.' },
      ],
    },
    hubs: {
      label: 'Index',
      headline: 'An index for tools others build',
      lead: 'REZICS also indexes other people’s MCP servers, skills, and APIs, with versions, sources, measurements or usage records, ratings, and discussions.',
      items: [
        { kind: 'mcp', line: 'An index of MCP servers' },
        { kind: 'skills', line: 'An index of AI agent skills' },
        { kind: 'apis', line: 'An index of public APIs' },
      ],
    },
  },

  api: {
    hero: {
      headline: 'Marking a book as read is an API operation.',
      lede: 'When you mark a work as “Read” in your library, the website sends the request below. Your code can send the same request, get the same result, and pass the same checks.',
    },
    anatomy: {
      label: 'Writes',
      headline: 'A write request, line by line',
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
      caption: 'The version, date, and idempotency key are examples.',
      rows: [
        { code: '{id}', title: 'The path identifies a work', body: 'Every item in REZICS has a permanent identifier beginning with https://rezics.com/id/. It stays the same across languages and sites.' },
        { code: 'actingSubject', title: 'State the identity', body: 'An account can act for itself or an organization. Every write states whose identity is acting, and the server checks its permissions before it runs.' },
        { code: 'Idempotency-Key', title: 'Make retries safe', body: 'Every write includes an idempotency key. After a timeout or disconnect, retry with the same key to avoid writing twice.' },
        { code: 'expectedVersion', title: 'Prevent overwrites', body: 'If you read version 3, state version 3 in your request. If someone else edits it first, your write will not overwrite their changes.' },
        { code: 'application/problem+json', title: 'Errors use problem details', body: 'Failures return a fixed code. Your code can branch on it without comparing message text.' },
      ],
    },
    replay: {
      label: 'Retries',
      headline: 'Retry the same request and get the same result.',
      lead: 'Send the same content again with the same key, and the server returns the first result: version stays at 4 and replayed becomes true. Reuse the key with different content and it returns 409 reader_status_conflict. If the version is no longer 3, it returns 409 stale_reader_status. Read again before writing.',
      responses: [
        {
          label: 'First request',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": false', '}') },
        },
        {
          label: 'Retry',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": true', '}') },
        },
        {
          label: 'Stale version',
          sample: { language: 'json', code: lines('409', '{', '  "status": 409,', '  "code":', '    "stale_reader_status"', '}') },
        },
      ],
    },
    sdk: {
      label: 'Types',
      headline: 'The API and its types share one definition',
      lead: 'The REZICS website calls the API with TypeScript. Request and response types come directly from the server’s route declarations. If a field is renamed or an error code is added, callers know at compile time. The TypeScript SDK comes from the same definition, so its types match the website’s.',
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
      caption: 'Excerpt from the REZICS library.',
      openapi: 'OpenAPI 3.1 documentation comes from the same route declarations. It specifies each operation’s authentication, request format, and response for every status code.',
      code: { path: 'generated/openapi/main/public.json' },
    },
    reads: {
      label: 'Reads',
      headline: 'Reads have rules too',
      rows: [
        { code: 'nextCursor · snapshot', body: 'Long lists include a cursor for the next page so you can read to the end. Library exports also include a snapshot. If data changes midway, the response says so instead of giving you a file assembled from mixed versions.' },
        { code: 'count.precision', body: 'Search results say whether the total is exact or “at least” the stated number.' },
        { code: 'title.language · basis', body: 'Titles include a language tag and writing direction, and explain whether the language was requested, matches the same script, uses another script, or is a fallback.' },
        { code: '404 resource_unavailable', body: 'A resource you cannot access returns the same response as one that does not exist, so its existence stays private.' },
      ],
    },
  },

  mcp: {
    hero: {
      headline: 'Your AI agent connects at /mcp.',
      lede: 'REZICS provides a remote MCP server at /mcp. An agent connects with a token you authorized. It sees tools allowed by its current permissions, and each tool maps to an HTTP operation.',
    },
    adapter: {
      label: 'Routing',
      headline: 'MCP routes requests. It is not another write path.',
      body: [
        'Each tool call is forwarded once to its matching HTTP operation with the same token and idempotency key. That operation determines who is acting, what they can do, and how much of the request limit they use.',
        'Text from works and web pages is always treated as data, never as instructions.',
      ],
    },
    connect: {
      label: 'Connect',
      headline: 'Four steps to connect',
      rows: [
        { title: 'Read resource metadata', code: 'GET /.well-known/oauth-protected-resource/mcp', body: 'A request without a token receives 401. Its header points to this metadata, which names the authorization server and supported scopes.' },
        { title: 'Register and get a token', code: 'RFC 7591 · PKCE', body: 'An agent client can register itself, then use an authorization code with PKCE to get a token. Registration grants no access to resources.' },
        { title: 'List tools', code: 'tools/list', body: 'The list includes only tools available to this identity.' },
        { title: 'Call a tool', code: 'tools/call', body: 'The result returns the HTTP status, headers, and body unchanged. Status codes of 400 or higher are marked as errors.' },
      ],
    },
    same: {
      label: 'One operation',
      headline: 'An agent call reaches the same HTTP operation.',
      calls: [
        { label: 'Code', sample: { language: 'http', code: lines('GET /v1/search/catalogue', '  ?q=travel&limit=5') } },
        {
          label: 'Agent',
          sample: {
            language: 'json',
            code: lines(
              '{',
              '  "name": "search_catalogue",',
              '  "arguments": {',
              '    "query": {',
              '      "q": "travel",',
              '      "limit": 5',
              '    }',
              '  }',
              '}',
            ),
          },
          caption: 'Send these arguments with tools/call.',
        },
      ],
      shared: {
        label: 'One response',
        sample: { language: 'text', code: lines('operationId', '  getV1SearchCatalogue', 'profile', '  public-catalogue-ranked-v1') },
      },
      caption: 'Example catalogue search for “travel.” The agent receives the same response wrapped in HTTP status and headers. Arguments are grouped by the HTTP operation into path, query, headers, and body.',
    },
    tools: {
      label: 'Tools',
      headline: 'Tool list',
      lead: 'Tools are generated from API capability declarations. Each declaration specifies a tool name, purpose, and required scopes. Generation fails if a name is duplicated or its operation does not exist.',
      scopes: 'Required scopes',
      groups: [
        {
          name: 'Browse the catalog',
          tools: [
            { title: 'Search the catalog by keyword', code: { tool: 'search_catalogue', op: 'GET /v1/search/catalogue', scopes: ['work:read'] } },
            { title: 'Read a resource', code: { tool: 'read_resource', op: 'GET /v1/resources/{resource}', scopes: ['work:read', 'context:read'] } },
            { title: 'Read summaries for several resources', code: { tool: 'resource_summaries', op: 'POST /v1/resources/summaries', scopes: ['work:read', 'context:read'] } },
            { title: 'Read resource relations', code: { tool: 'resource_relations', op: 'GET /v1/resources/{resource}/relations', scopes: ['work:read'] } },
            { title: 'Read a work’s releases', code: { tool: 'work_editions', op: 'GET /v1/works/{id}/releases', scopes: ['work:read'] } },
          ],
        },
        {
          name: 'Library',
          tools: [
            { title: 'Export the full library', code: { tool: 'library_export', op: 'GET /v1/me/library-export', scopes: ['work:read', 'rating:read'] } },
            { title: 'Upload a library file', code: { tool: 'library_import_create', op: 'POST /v1/me/library-imports', scopes: ['work:read', 'library:write'] } },
            { title: 'Review each match', code: { tool: 'library_import_rows', op: 'GET /v1/me/library-imports/{id}/rows', scopes: ['work:read'] } },
            { title: 'Choose a work for a row', code: { tool: 'library_import_resolve', op: 'PUT /v1/me/library-imports/{id}/rows/{row}', scopes: ['work:read', 'library:write'] } },
            { title: 'Select a candidate outside the catalog', code: { tool: 'library_import_adopt', op: 'POST /v1/me/library-imports/{id}/rows/{row}/adoptions', scopes: ['work:read', 'library:write', 'work:create'] } },
            { title: 'Apply a reviewed import', code: { tool: 'library_import_apply', op: 'POST /v1/me/library-imports/{id}/apply', scopes: ['work:read', 'library:write', 'collection:edit', 'rating:read', 'rating:submit'] } },
            { title: 'Check import progress', code: { tool: 'library_import_status', op: 'GET /v1/me/library-imports/{id}/apply', scopes: ['work:read'] } },
            { title: 'Delete the uploaded file', code: { tool: 'library_import_delete', op: 'DELETE /v1/me/library-imports/{id}', scopes: ['work:read', 'library:write'] } },
          ],
        },
        {
          name: 'Wiki+',
          tools: [
            { title: 'Match extracted names', code: { tool: 'wiki_candidates', op: 'POST /v1/wiki/candidates', scopes: ['wiki:propose'] } },
            { title: 'Precheck an extraction', code: { tool: 'wiki_validate', op: 'POST /v1/wiki/validations', scopes: ['wiki:propose'] } },
            { title: 'Read accepted Wiki+ content', code: { tool: 'wiki_history', op: 'GET /v1/wiki/{work}/history', scopes: ['work:read'] } },
            { title: 'Read sources and quotes for a claim', code: { tool: 'wiki_evidence', op: 'GET /v1/wiki/evidence/{id}', scopes: ['work:read'] } },
          ],
        },
      ],
    },
    limits: {
      label: 'Limits',
      headline: 'Limits on each call',
      rows: [
        { title: '30 seconds', body: 'Time limit for each tool call.' },
        { title: '1 MiB', body: 'Maximum size for a regular tool request. Library file uploads have a separate limit.' },
        { title: 'Stateless', body: 'Each request validates its own token. The server does not keep a session.' },
      ],
    },
  },

  apps: {
    hero: {
      headline: 'Apps never get more access than you do.',
      lede: 'REZICS records sign-in, acting identity, resource permissions, and app authorization separately. Tokens for apps and AI agents can only narrow access within those limits.',
    },
    layers: {
      label: 'Four layers',
      headline: 'Each layer narrows access',
      body: ['Account, identity, installation and consent, and token scopes are recorded separately. Each inner layer stays within the outer one. An app receives only the narrowest layer.'],
    },
    each: {
      label: 'By layer',
      headline: 'What each layer controls',
      rows: [
        { title: 'Account', body: 'The account service confirms who you are. Signing in alone does not grant access to any resource.' },
        { title: 'Identity', body: 'You act as yourself or an organization. The server checks that relationship and its resource permissions.' },
        { title: 'Installation and consent', body: 'Installation and consent are separate limits. Registering an app does not grant access to resources.' },
        { title: 'Token scopes', body: 'A token carries only the scopes you approved, such as library:write. Every operation still checks which identity is acting.' },
      ],
    },
    authorize: {
      label: 'Authorization',
      headline: 'Authorization code with PKCE',
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
      caption: 'The authorization request goes to the REZICS account service. The redirect URL must exactly match the one registered.',
    },
    consent: {
      label: 'Consent',
      headline: 'What the consent screen shows',
      rows: [
        { text: 'The app name and website', code: 'name · uri' },
        { text: 'Each permission explained in your language, with English as a fallback', code: 'scopes[].description' },
        { text: 'A clear notice when an app is unverified', code: 'unverified' },
        { text: 'The domain you will return to after authorization', code: 'redirectHost' },
        { text: 'The app’s privacy policy and terms of service', code: 'policy · terms' },
      ],
      note: 'REZICS products do not show a consent screen. They appear on the account page as product sessions.',
    },
    revoke: {
      label: 'Revoke',
      headline: 'Revoke access at any time',
      rows: [
        { title: 'Review', body: 'The account’s Connected apps page lists what each app can do, when you authorized it, and when it was last used.' },
        { title: 'Confirm', body: 'Your identity is verified again before access is removed.' },
        { title: 'Invalidate', body: 'After removal, the app’s tokens can no longer be used, including tokens for renewal.' },
        { title: 'Disable', body: 'Apps disabled by REZICS are marked. You can still remove the authorization they retain.' },
      ],
    },
  },

  wiki: {
    hero: {
      headline: 'REZICS receives proposals, never full text.',
      lede: 'People with access to a text use their own AI agent and model to extract characters, aliases, relations, events, and places chapter by chapter. Each item includes a location and short quote for human review in REZICS. The toolkit does not connect to the internet or report usage.',
    },
    boundary: {
      label: 'Boundary',
      headline: 'What stays and what gets sent',
      body: [
        'The original files and full chapter text stay on your computer. The toolkit converts them and records locations offline. REZICS receives characters, aliases, relations, events, and places, each with a location and short quote, along with the agent and model used and whether inference ran locally or in the cloud.',
        'When you use a cloud model, text read by the agent is sent to that model provider. You choose whether to do this. To keep everything local, use a local model and disable cloud tools that can read files.',
      ],
    },
    steps: {
      label: 'Steps',
      headline: 'From a file to a proposal',
      sample: {
        language: 'sh',
        code: lines('rezics-wiki units novel.epub', 'rezics-wiki verify novel.epub \\', '  - < locator.json'),
      },
      caption: 'units prints one passage and its location per line. verify reads a location and checks the quote against the same file.',
      rows: [
        { code: 'rezics-wiki units', title: 'Split into passages', body: 'Convert TXT, EPUB 2/3, or plain text visual novel scripts (.rpy) into passages. Each includes a rezics-locator-v1 location and the file’s SHA-256 hash.' },
        { code: 'skill/SKILL.md', title: 'Give it to your agent', body: 'The toolkit includes a skill that guides the agent through each chapter and helps distinguish narration, dialogue, rumors, and assumptions.' },
        { code: 'wiki_candidates · wiki_validate', title: 'Match and precheck', body: 'Check existing names and aliases first. Results are grouped as matched, new, unclear, or unavailable. Then precheck quote limits and missing chapter references.' },
        { code: 'wiki-extraction-v1', title: 'Submit for review', body: 'A proposal is published only after human review. Reviewers with the same version can verify every quote on their own computer.' },
        { code: 'wiki-delta-v1', title: 'Add new chapters', body: 'Submit later chapters as delta proposals. Existing content not mentioned in the proposal stays as it is.' },
      ],
    },
    limits: {
      label: 'Limits',
      headline: 'Supported formats and limits',
      rows: [
        { title: 'TXT, EPUB, .rpy', body: 'Supported file formats.' },
        { title: '200', body: 'Maximum characters per quote.' },
        { title: '128 MiB', body: 'Maximum size for one file.' },
      ],
    },
    statement: {
      text: 'No decryption or circumvention;',
      sub: 'protected files fail to open.',
      licence: 'The toolkit cannot decrypt files, recover keys, or bypass protections, and does not recommend plugins that do. The toolkit and protocol use Apache-2.0 and do not include REZICS AGPL code. No REZICS account is required, and the toolkit works with any compatible server. Examples use only public-domain works or works you have permission to use.',
    },
  },

  zones: {
    hero: {
      headline: 'The Zone owns the layout. The platform owns the data and rules.',
      lede: 'A Zone is a community’s own site and can include custom presentation code. The code handles layout only. The platform reads and provides the data, and keeps control of permissions and review.',
    },
    theme: {
      label: 'Theme',
      headline: 'Start with settings, then write code',
      body: ['Each Zone starts with a default theme. Adjust its density, page background, and cover ratio. If needed, change its accent color, then arrange modules such as a featured carousel, bookshelf, rankings, and curated lists. Use presentation code only for layouts the settings cannot create.'],
    },
    settings: {
      label: 'Settings',
      headline: 'A theme configuration',
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
      caption: 'All required fields in a theme configuration. Types come from @rezics/zone-sdk.',
    },
    slots: {
      label: 'Slots',
      headline: 'Code fills named slots',
      lead: 'Presentation code is a package that supplies custom components to named slots such as the header, hero, search bar, data panels, work cards, modules, and footer. Each slot receives the platform version, which the package can wrap or replace.',
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
      caption: 'Excerpt from the package entry point for the REZICS anime Zone.',
    },
    rules: {
      label: 'Boundaries',
      headline: 'Package boundaries',
      rows: [
        { title: 'No data fetching', body: 'The platform reads data and sends it to each slot. The package makes no requests.' },
        { title: 'No credential access', body: 'The package cannot read cookies, browser storage, or credentials.' },
        { title: 'Platform controls stay visible', body: 'Account and Zone menus, reporting, and age checks stay outside the slots. Every work keeps its “Why this is here” label.' },
        { title: 'Styles stay within the Zone', body: 'Styles are scoped to the Zone. Colors and fonts use only variables provided by the platform.' },
        { title: 'Size limits', body: 'Compressed CSS is limited to 40 KiB and JavaScript to 50 KiB.' },
      ],
    },
    review: {
      label: 'Release',
      headline: 'From review to release',
      rows: [
        { title: 'Calculate a hash', body: 'All package files produce one hash. Changing a single byte changes the hash.' },
        { title: 'Get an independent review', body: 'A different account checks the source code, built files, accessibility, and failure behavior, then records the decision and evidence hash.' },
        { title: 'Enable with an expiry date', body: 'Only reviewed versions can be enabled, and each has an expiry date. Rolling back to an older version does not restore its old approval.' },
        { title: 'Return to the standard layout', body: 'If the hash does not match, the standard layout appears. Readers can disable the package, add ?safe to the URL to use safe mode, or rely on the platform-wide switch.' },
      ],
    },
    statement: {
      text: 'One backend, your choice of frontend;',
      sub: 'AI agents can read the same data.',
      note: 'A new community site does not need a new backend. Presentation code reads only the public API and contains no business logic. Anything a Zone displays is also available through the API.',
    },
  },

  open: {
    hero: {
      headline: 'Open source, with standalone packages.',
      lede: 'Services, website, account pages, design documents, and API definitions live in one public repository. The platform uses AGPL-3.0. The Wiki toolkit and document format package use Apache-2.0 and do not depend on REZICS services.',
      link: 'View the source',
      href: shared.footer.sourceUrl,
    },
    licences: {
      label: 'Licenses',
      headline: 'Two licenses',
      rows: [
        { code: { name: 'AGPL-3.0', paths: 'services/ · apps/ · generated/ · docs/' }, line: 'The platform: services, website, account pages, and documentation.' },
        { code: { name: 'Apache-2.0', paths: 'packages/wiki-toolkit/ · packages/document/' }, line: 'Standalone packages: @rezics/wiki-toolkit and @rezics/document. No REZICS account required.' },
      ],
    },
    map: {
      label: 'Repository',
      headline: 'What is in the repository',
      rows: [
        { code: 'services/', licence: 'AGPL-3.0', body: 'Backend services. Main provides the API and MCP server. Account handles sign-in and OAuth authorization.' },
        { code: 'apps/web/', licence: 'AGPL-3.0', body: 'The REZICS website. Like your code, it gets data only through the API.' },
        { code: 'apps/web/zones/official/', licence: 'AGPL-3.0', body: 'Presentation code for official Zones, with one package per directory.' },
        { code: 'apps/accounts/', licence: 'AGPL-3.0', body: 'Account pages for sign-in, security, and connected apps.' },
        { code: 'packages/wiki-toolkit/', licence: 'Apache-2.0', body: 'Local Wiki toolkit, its protocol, and its skill.' },
        { code: 'packages/document/', licence: 'Apache-2.0', body: 'REZICS document format, with text and blocks defined in a JSON schema.' },
        { code: 'generated/openapi/', licence: 'AGPL-3.0', body: 'OpenAPI documentation generated from route declarations.' },
        { code: 'docs/', licence: 'AGPL-3.0', body: 'Design decisions, contracts, and operating procedures with their reasons.' },
      ],
    },
    run: {
      label: 'Run',
      headline: 'Run it on your computer',
      lead: 'Install the pinned toolchain and container runtime. Three commands start the API, account service, website, and account pages, then show their URLs.',
      blocks: [
        { sample: { language: 'sh', code: lines('task toolchain:install', 'task dev', 'task urls') }, caption: 'From the repository documentation.' },
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
              "  'Chinese characters\\nSecond paragraph',",
              ');',
              'parseDocument(snapshot);',
              'const stored =',
              '  serializeDocument(snapshot);',
            ),
          },
          caption: '@rezics/document does not require a REZICS account, service, or database. Excerpt from its documentation.',
        },
      ],
    },
    statement: {
      text: 'Put rules in code,',
      sub: 'and reasons in the docs.',
      note: 'Express rules as code when types, tests, or checks can enforce them. Document why a decision was made, with its date and rationale.',
    },
  },
};

export default {
  id: 'developers',
  base: '/developers/',
  name: 'Developers',
  theme: { field: '#3b4a5a', on: 'paper' },
  next: 'books',
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: {
        title: 'REZICS for developers: one API',
        description: 'Every button on the REZICS website calls an API operation. Your code calls it over HTTP, and AI agents call it through an MCP server. Identity checks, receipts, and error codes are the same as when you select a button.',
      },
    },
    {
      slug: 'api',
      label: 'API and SDK',
      meta: {
        title: 'API and SDK: a contract for every operation',
        description: 'Every REZICS API operation specifies its path, scopes, idempotency key, and error codes. OpenAPI documentation and TypeScript types come from the same route declarations used by the website and your code.',
      },
    },
    {
      slug: 'mcp-server',
      label: 'MCP server',
      meta: {
        title: 'The REZICS MCP server',
        description: 'AI agents connect to the remote REZICS MCP server with OAuth authorization and use tools generated from API declarations. Each call is forwarded once to its matching HTTP operation, which determines identity, permissions, and limits.',
      },
    },
    {
      slug: 'apps',
      label: 'Connected apps',
      meta: {
        title: 'Connected apps: OAuth authorization',
        description: 'Third-party apps get tokens with the OAuth authorization code flow and PKCE. The consent screen lists permissions in the user’s language, with English as a fallback. Users can review and remove access on the Connected apps account page, which invalidates the tokens.',
      },
    },
    {
      slug: 'wiki-toolkit',
      label: 'Wiki toolkit',
      meta: {
        title: 'Local Wiki toolkit: no full text sent to REZICS',
        description: 'The open source Wiki toolkit splits TXT and EPUB files into verifiable passages on your computer. Your AI agent extracts characters and events. REZICS receives only proposals with locations and short quotes, never full text.',
      },
    },
    {
      slug: 'zones',
      label: 'Zone themes',
      meta: {
        title: 'Zone themes and presentation code',
        description: 'Each Zone can arrange its own site with theme settings and modules, or supply presentation code for named slots. Code runs only after an independent review and hash lock. Readers can switch back to the standard layout at any time.',
      },
    },
    {
      slug: 'open-source',
      label: 'Open source',
      meta: {
        title: 'Open source: AGPL and Apache',
        description: 'The REZICS platform source is available under AGPL-3.0 and can run locally as a full service. Standalone packages such as the Wiki toolkit and document format use Apache-2.0 and do not require a REZICS account.',
      },
    },
  ],
  strings,
} satisfies MiniSite<DevelopersStrings>;
