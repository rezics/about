import type { Site } from './schema';

export const site: Site = {
  name: 'REZICS',
  url: 'https://about.rezics.com',
  productUrl: 'https://rezics.com',
  meta: {
    title: 'REZICS: An open universal index and community',
    description:
      'Books, anime, manga, games, software, visual novels, MCP servers, skills, and APIs each have one identity on REZICS. People discuss them, rate them, make lists, and write Wiki+ pages about them.',
  },
  nav: {
    products: 'Products',
    engine: 'Modules',
    developers: 'Developers',
    roadmap: 'Roadmap',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to main content',
    action: 'Visit REZICS',
    productsIntro: {
      title: 'Nine kinds, one index',
      body: 'Each has its own pages, built from the same parts and connected to the same graph.',
      all: 'View all',
    },
    engineIntro: {
      title: 'Five modules, fifteen parts',
      body: 'Every kind uses these modules. Communities and developers build with them too.',
      all: 'Explore the engine',
    },
    groups: { works: 'Works and software', agents: 'AI agents and developers' },
  },
  home: {
    hero: {
      headline: 'Everything you care about, in one index.',
      lede: 'Books, anime, manga, games, software, and visual novels, along with tools for AI agents. Each thing has one identity, with its discussions, ratings, and Wiki attached.',
      primary: 'Visit REZICS',
      imageAlt: 'Nine sheets of colored paper overlap across a warm white surface, lit by a window from the upper left.',
    },
    kinds: {
      eyebrow: 'Nine kinds',
      headline: ['Every kind has its own place.', 'All share one index and one account.'],
      lines: {
        anime: 'Seasons, episodes, and schedules',
        manga: 'Volumes, chapters, and translations',
        software: 'Compatibility and availability',
      },
    },
    statement: {
      text: 'A novel, its manga, anime, and game',
      sub: 'have four identities in REZICS, joined in one graph. When someone corrects a fact in any language, every page that uses it is updated.',
    },
    identity: {
      eyebrow: 'Universal index',
      headline: 'Names in different languages point to one identity.',
      body: [
        'A work can have Chinese, Japanese, and English names, all pointing to the same identity in REZICS. Editions, translations, and adaptations stay distinct and connected.',
        'Your library, ratings, and progress follow that identity. Browse in another language and you still see the same record.',
      ],
      link: 'Explore the universal index',
      imageAlt: 'Five same-sized sheets in different colors overlap in a row, like five colors of the same page.',
    },
    community: {
      eyebrow: 'Communities and Zones',
      headline: 'Gather around works and build a site of your own.',
      body: [
        'Discussions, ratings, and lists connect to the work itself. A Realm brings people together around a story, language, or shared interest, with its own members, rules, and moderation.',
        'Use a Zone to build a complete site for your community. Set its pages, navigation, and theme while using the same graph of data.',
      ],
      link: 'Explore communities and Zones',
      imageAlt: 'A sheet of deep teal paper is folded into a small house, with a few small colored sheets nearby.',
    },
    platform: {
      eyebrow: 'Five modules',
      headline: 'One platform for a library, store, database, forum, and Wiki.',
      lead: 'All nine kinds use the same five modules. Add a kind through configuration, without building another application.',
      modules: {
        'universal-index': 'One identity, every edition, names and relations across languages',
        community: 'Realms, discussions, ratings, lists, and follows',
        zones: 'Each community builds its own site and Wiki+ on the shared graph',
        create: 'Writing, reading, editions, publishing, and rights',
        trust: 'Sources and evidence, rights, moderation rules, and privacy',
      },
    },
    agents: {
      eyebrow: 'Developers and AI agents',
      headline: 'The same API, from the website to your app.',
      lead: 'Use the API, MCP server, and SDK to let your app or agent read data, manage your library, and submit proposals. Agents act within your permissions, and proposed changes take effect only after human review.',
      link: 'Explore developer resources',
      code: ['# Search the catalogue without signing in', 'curl -G \\', '  "$REZICS_API/v1/search/catalogue" \\', '  --data-urlencode "q=light novel" \\', '  -d language=en -d limit=5'].join('\n'),
      codeLabel: 'Example request to search the REZICS catalogue with curl',
      caption: 'Set REZICS_API to the API service URL. The language parameter sets the display language for search results.',
    },
    principles: {
      eyebrow: 'Principles',
      headline: 'Our commitments to every user.',
      items: [
        { title: 'Open source', body: 'REZICS is open source under AGPL-3.0. Anyone can read, host, and improve the code.' },
        { title: 'No ad trackers', body: 'We do not use ad trackers or sell personal data.' },
        { title: 'Private data is not used for training', body: 'Private drafts and reading records are not used to train AI models by default. You must opt in separately.' },
        { title: 'Take your data with you', body: 'Export your library, lists, and drafts. Basic participation and exports are free.' },
        { title: 'Automation is identified', body: 'Official and third-party automated actions identify themselves as automated and name the operator responsible.' },
      ],
    },
    finale: {
      headline: 'Bring what you care about.',
      body: 'Create an account to bring your library, lists, and ratings into the same graph.',
    },
  },
  engine: {
    meta: {
      title: 'REZICS engine: modules and parts',
      description:
        'All nine kinds on REZICS use the same parts, drawn from five modules. See which eight parts each kind uses and what each module does.',
    },
    hero: {
      headline: 'One engine, nine kinds.',
      lede: 'Adding a kind takes vocabulary, mappings, seed data, and a Zone, not another application. Each part is built once, so the tenth kind uses the same parts as the first.',
    },
    parts: {
      headline: 'Fifteen parts, eight for each kind.',
      body: 'Each kind uses eight parts, with identity always first. When you switch kinds, shared parts stay in place and only the different parts change.',
      pick: 'Choose a kind',
    },
    modules: {
      headline: 'Parts come from five modules.',
      body: 'The universal index handles identity, community handles people, Zones handle sites, creation and publishing handle how works are made and distributed, and trust handles sources, rights, and privacy.',
    },
  },
  kindPage: {
    featuresHeading: 'What you can do here',
    partsHeading: 'Built from these eight parts',
    partsCaption: 'Every kind is assembled from the same set of parts.',
    connectionsHeading: 'Related kinds',
    next: 'Next kind',
  },
  modulePage: { usedByHeading: 'Kinds that use it most', next: 'Next module' },
  developers: {
    meta: {
      title: 'REZICS developers: API and MCP',
      description:
        'Every REZICS feature begins as an API operation. This section covers the OpenAPI specification, MCP server, OAuth apps, local Wiki toolkit, and open source.',
    },
    hero: {
      headline: 'If the website can do it, the API can too.',
      lede: 'Every feature begins as an API operation, and the website is just one client. Your app, scripts, and AI agents use the same operations and permissions and get the same results.',
    },
    facts: [
      {
        title: 'HTTP API',
        body: 'Paths, parameters, and every response are defined in the public OpenAPI specification. Errors use the Problem Details format and stable codes that programs can act on.',
      },
      {
        title: 'MCP server',
        body: 'The remote MCP server exposes API operations as tools. Every call uses the same HTTP path, permissions, receipts, and rate limits. AI agents can register as clients, but registration alone grants no access to resources.',
      },
      {
        title: 'TypeScript SDK',
        body: 'Client types come directly from the API definition, so fields, results, and errors match the server.',
      },
      {
        title: 'OAuth apps',
        body: 'External apps use the authorization code flow with PKCE. Permissions are listed individually, and users can revoke access at any time.',
      },
      {
        title: 'Local Wiki toolkit',
        body: 'People with a text can use an AI agent of their choice on their own machine to read TXT, EPUB, and visual novel scripts, extract people, places, and events by chapter, and submit proposals with source locations. The toolkit is licensed under Apache-2.0, requires no REZICS account, and sends no telemetry.',
      },
      {
        title: 'Open source',
        body: 'The platform core is open source under AGPL-3.0. You can study it, host it yourself, and submit changes.',
      },
    ],
    sample: {
      caption: 'Public search needs no token. Search for “light novel” to get ranked results, an exact result count, and a cursor for the next page.',
      language: 'sh',
      code: [
        'curl -G "$REZICS_API/v1/search/catalogue" \\',
        '  --data-urlencode "q=light novel" \\',
        '  -d language=en \\',
        '  -d limit=5',
      ].join('\n'),
    },
    statement: 'One click or one call, the same operation.',
  },
  roadmap: {
    meta: {
      title: 'REZICS roadmap',
      description:
        'REZICS opens one community at a time on a single engine. It starts with light novels and visual novels, then extends to Wiki+ for every work, serialized writing, more kinds, events and places, and direct publishing.',
    },
    hero: {
      headline: 'From light novels to every kind.',
      lede: 'REZICS opens one community at a time, each built on the same graph and parts. Each step builds on the identities and relations established before it.',
    },
    steps: [
      {
        title: 'One graph, one engine',
        body: 'Every work, person, and organization has one identity in a shared graph. Each capability is built once and used by the kinds that need it.',
      },
      {
        title: 'Light novels and visual novels',
        body: 'First for readers who follow series across languages and players looking for a version they can play. They are two views of the same catalogue and library, each with a Wiki for every work. The site supports eight interface languages on phones and computers.',
      },
      {
        title: 'Wiki+ for every work',
        body: 'The same workflow extends to every work. People with a text use their own AI agent to submit chapter by chapter. Approved facts are published to the work’s Wiki Zone, where readers browse according to their progress.',
      },
      {
        title: 'Serials and creators',
        body: 'Small serialized fiction communities and visual novel creators bring their works and release schedules. Authors maintain worldbuilding notes beside their drafts, and readers discuss each chapter.',
      },
      {
        title: 'One kind at a time',
        body: 'Science fiction and fantasy catalogues, interactive fiction, MCP servers and agent skills, models, and evaluations are added in turn. Each kind needs vocabulary, mappings, seed data, and a Zone, with no kind specific backend code.',
      },
      {
        title: 'Into the real world',
        body: 'Conventions, signings, and release events linked to works, along with public locations from those works. Pilgrimage locations avoid spoilers based on your progress.',
      },
      {
        title: 'Direct publishing',
        body: 'REZICS publishes DRM free ebooks and small games for contracted creators. Readers pay once and can download again under the purchase terms. Creators can see every deduction.',
      },
      {
        title: 'A site for every community',
        body: 'Community operators and small publishers use Zones to run complete sites, import data, and manage releases. Developers use the API and update streams.',
      },
    ],
    statement: 'Each new community adds another layer of links to the graph for the next community to use.',
  },
  product: {
    headline: 'Nine kinds, all on REZICS.',
    body: 'Use one account to follow books and anime, track games, write ratings, and make lists. You can also build a site for your community in a Zone.',
  },
  notFound: {
    meta: {
      title: 'Page not found',
      description:
        'There is no page at this address. The URL may be mistyped, or the page may have moved. Return to the REZICS home page to explore the nine kinds and five modules.',
    },
    eyebrow: '404',
    headline: 'This page is not here.',
    body: 'The URL may be mistyped, or the page may have moved. Return home or explore the nine kinds.',
    back: 'Back to home',
    imageAlt: 'A square has been cut from the center of a pale blue sheet, revealing the paper beneath. The cutout is gone.',
    restart: 'Explore the nine kinds',
  },
  ui: {
    pause: 'Pause animation',
    play: 'Play animation',
    pick: 'Switch kind',
  },
  footer: {
    tagline: 'An open universal index and community',
    sitemap: 'Site map',
    agents: 'AI agents',
    source: 'Source code',
    sourceUrl: 'https://github.com/rezics/rezics-next',
    colophon: 'This site does not track traffic or load third party resources.',
    copyright: '© 2026 REZICS Inc.',
  },
};
