import type { Kind } from './schema';

/** The nine kinds (products), in DESIGN.md's order. Sources: kinds-facts.md. */
export const kinds: Kind[] = [
  {
    id: 'books',
    name: 'Library',
    tag: 'Books',
    group: 'works',
    summary: 'One work, every edition and translation',
    meta: {
      title: 'Library: A clear catalogue and reading history',
      description:
        'One identity per work, with translations, reprints, and collections kept distinct. Track reading and owned books, find the next book in a series, buy DRM free ebooks, and see only the parts of a Wiki you have read.',
    },
    hero: {
      headline: 'One work, every edition clearly recorded.',
      lede: 'Paperback, ebook, translation, and collection are separate editions of the same work. REZICS records what you read, where you stopped, and what comes next, and connects the work to its anime, manga, and Wiki.',
    },
    features: [
      {
        title: 'Editions and translations stay distinct',
        body: 'Reprints, paperbacks, ebooks, and translations in each language are separate editions. Collections list the volumes they contain, without creating duplicate works.',
      },
      {
        title: 'Record every reading',
        body: 'Record rereads, pauses, abandoned books, and switches from print to audio. Track progress by page, percentage, or minutes.',
      },
      {
        title: 'The next book in a series',
        body: 'Choose a reading language and the series page shows the next available book. Caught up, finished all published books, and series complete are shown separately.',
      },
      {
        title: 'Owned and borrowed books',
        body: 'Keep private records of which books you own, who borrowed them, and when they are due. Owning a book does not mean you have finished it.',
      },
      {
        title: 'Bring your records with you',
        body: 'Import an export from another service, keeping editions and records that can be matched. You can export everything later.',
      },
      {
        title: 'Buy books directly from creators',
        body: 'Ebooks authorized by participating creators are sold as DRM free EPUB or PDF files. Preview them first, then find updates and downloads in your library.',
      },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'progress', 'ratings', 'wiki', 'offers'],
    partNotes: {
      identity: 'A work has one identity across languages and communities. An ISBN identifies one edition.',
      editions: 'Translations, reprints, paperbacks, ebooks, and collections are recorded as separate editions of the same work.',
      credits: 'Authors, translators, illustrators, and publishers are listed by role. A translator is the same person across every book.',
      relations: 'Series, sequels, side stories, and adaptations each have a relation type. Web versions and rewritten editions are connected too.',
      progress: 'Your book, page, and next read stay in sync when you switch reading languages.',
      ratings: 'Rate the story, translation, and narration separately, with the number of ratings and scope shown for each score.',
      wiki: 'The Wiki cites chapters for people, places, and events, and shows only what you have read.',
      offers: 'Buy ebooks from participating creators here. Sales information for other editions includes the date it was observed, or is marked unknown.',
    },
    connections: [
      { to: 'anime', label: 'Adapted into anime' },
      { to: 'manga', label: 'Adapted into manga' },
      { to: 'games', label: 'Adapted into a game' },
    ],
    community: {
      headline: 'Readers of different editions talk about the same book.',
      body: 'Readers of the original, translations, and ebooks share reviews and discussions on the same work. Reading groups can start a Realm, and book communities can build a full site with a Zone, all using the same catalogue data.',
    },
    imageAlt: 'A stack of books',
  },
  {
    id: 'anime',
    name: 'Anime',
    tag: 'Anime',
    group: 'works',
    summary: 'Seasons, episodes, schedules, and source works',
    meta: {
      title: 'Anime: Track episodes and discuss without spoilers',
      description:
        'See each season’s episodes and schedule, with subtitles and dubs listed separately. Track each episode, discuss it on its own page, hide anything beyond your progress, and follow links to the source work.',
    },
    hero: {
      headline: 'Follow each episode. Discussions stop where you do.',
      lede: 'Episodes, schedules, subtitles, and dubbed versions are listed separately for each season. Track one episode at a time. Discussions and the Wiki show only what you have seen, and the source novel or manga is one link away.',
    },
    features: [
      {
        title: 'Seasons, episodes, and schedules',
        body: 'See each season’s episodes, specials, and air dates on a schedule. Delays, cancellations, and releases are recorded separately.',
      },
      {
        title: 'Subtitles and dubs, listed separately',
        body: 'See which languages have subtitles and which have dubs. The interface language and viewing language are separate.',
      },
      {
        title: 'Know which episode is next',
        body: 'Track each episode as you watch. The next one is at the top of your home page. Specials and bonus content do not hold up completion.',
      },
      {
        title: 'Discuss each episode',
        body: 'Each episode has its own discussion. Unseen plot details are hidden until you choose to reveal them.',
      },
      {
        title: 'Rate episodes separately',
        body: 'Episode scores do not affect the score for the whole work. See episode ratings to find the most highly rated one.',
      },
      {
        title: 'Follow adaptations to the source',
        body: 'Follow a link from anime to manga to the source novel. Finishing the anime does not mark the source as read.',
      },
    ],
    parts: ['identity', 'schedule', 'credits', 'relations', 'progress', 'ratings', 'discussion', 'wiki'],
    partNotes: {
      identity: 'Names in every language point to the same anime. Adaptations and source works each have their own identity.',
      schedule: 'Record each season’s air dates and episodes on a schedule, with announcements, delays, and cancellations kept separate.',
      credits: 'Voice actors, characters, and works share one credit record. Directors, writers, and production companies have their own roles.',
      relations: 'Seasons, side stories, and source works have distinct relation types, so you can follow links back to the novel or manga.',
      progress: 'Keep track of the episode you watched and what comes next. Optional specials do not count toward completion.',
      ratings: 'The whole work and each episode have separate ratings, with the number of ratings shown.',
      discussion: 'Each episode has its own discussion, with content beyond your progress hidden by default.',
      wiki: 'The Wiki cites the episode for each person, place, and event, and shows only the episodes you have watched.',
    },
    connections: [
      { to: 'books', label: 'Source novel' },
      { to: 'manga', label: 'Source manga' },
      { to: 'games', label: 'Same voice actor' },
    ],
    community: {
      headline: 'A season of anime can have its own site.',
      body: 'A community can use a Zone to build an anime site with seasonal schedules, reviews, and discussions. It uses the same catalogue, so an air date corrected elsewhere is corrected here too.',
    },
    imageAlt: 'An animation cel and frame',
  },
  {
    id: 'manga',
    name: 'Manga',
    tag: 'Manga',
    group: 'works',
    summary: 'Volumes, chapters, and translations in every language',
    meta: {
      title: 'Manga: Volumes, chapters, and translations',
      description:
        'Track volumes and serialized chapters together. Translations in each language name the translator and source edition. Get notified when a new chapter appears in your language, discuss every chapter, and follow links to adaptations and the source novel.',
    },
    hero: {
      headline: 'Every chapter, volume, and translation kept distinct.',
      lede: 'Japanese serialization, volumes from each region, official translations, and fan translations all belong to the same manga, with language and translator listed for each. Track each chapter and get notified when a new one appears in your language.',
    },
    features: [
      {
        title: 'Chapters and volumes',
        body: 'Each serialized chapter has a fixed place in the work, and each volume is a book of its own. New editions and collections are recorded separately, using the publisher’s volume numbers.',
      },
      {
        title: 'Track progress by chapter',
        body: 'Track each chapter as you finish it. If the next chapter is available in your language, it appears first. If not, you can see which one you are waiting for.',
      },
      {
        title: 'Translations name their sources',
        body: 'Each translation names its translator and source edition. Fan translations are not labeled official, and unverified information is marked as such.',
      },
      {
        title: 'Get notified about new chapters',
        body: 'Follow a manga and get notified when a new chapter or volume appears in your language. Updates in languages you do not read will not interrupt you.',
      },
      {
        title: 'Discuss after you read',
        body: 'Every chapter has a discussion. Later plot details stay folded away until you reach them.',
      },
      {
        title: 'After an adaptation',
        body: 'Anime adaptations, side stories, and source novels are connected, with separate progress for each.',
      },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'progress', 'ratings', 'discussion', 'offers'],
    partNotes: {
      identity: 'The original title, translations, and romanization all point to the same manga.',
      editions: 'Volumes, ebooks, new editions, and collections in each language are recorded separately, keeping their original volume numbers.',
      credits: 'Writers, artists, translators, and publishers are credited by role. An author’s novels and manga appear on the same page.',
      relations: 'Source novels, anime adaptations, side stories, and sequels have distinct relation types, so each can be found from the other.',
      progress: 'Track progress by chapter and see how many volumes you have read.',
      ratings: 'Rate the whole work, an individual volume, or a translation separately. Series ratings stay separate from volume ratings.',
      discussion: 'Every chapter has a discussion, with unread plot details hidden by default.',
      offers: 'Sales regions and prices for each language edition include the date they were observed.',
    },
    connections: [
      { to: 'books', label: 'Adapted from a novel' },
      { to: 'anime', label: 'Anime adaptation' },
    ],
    community: {
      headline: 'Translators and readers have their own identities.',
      body: 'Fan translation teams are credited on every edition. Follow a translator to see what they translate next. Readers’ reviews, lists, and reputation follow the same identity across communities.',
    },
    imageAlt: 'A manga page with screentone',
  },
  {
    id: 'games',
    name: 'Games',
    tag: 'Games',
    group: 'works',
    summary: 'Platforms, editions, ratings, and purchases',
    meta: {
      title: 'Games: Platform editions, specifications, and ratings',
      description:
        'One identity per game, with platforms, regions, and DLC listed separately and system requirements spelled out. Ratings show their time period and audience, community picks include a reason, and small games from participating developers are sold DRM free.',
    },
    hero: {
      headline: 'One game, every platform edition in view.',
      lede: 'Editions, supported languages, and system requirements are listed by platform and region. Ratings show whether they are recent or all time and who rated them. Mods, adaptations, and sequels are connected to the game.',
    },
    features: [
      {
        title: 'A record for each platform',
        body: 'Editions of a game on each platform and in each region list supported languages, release dates, and DLC. A remake is a separate game linked to the original.',
      },
      {
        title: 'Clear requirements',
        body: 'System requirements are recorded separately for each platform. Missing information is marked unknown, not filled in from another platform.',
      },
      {
        title: 'Ratings by period and audience',
        body: 'Recent and all time ratings are shown separately, with the number, distribution, and audience for each score.',
      },
      {
        title: 'Community picks include a reason',
        body: 'Each community pick links to the decision record, showing who chose the game and why.',
      },
      {
        title: 'Buy directly, DRM free',
        body: 'Buy authorized small games and visual novels from participating developers once and download them. Updates, receipts, and downloads stay in your game library.',
      },
      {
        title: 'Find compatible mods',
        body: 'Choose a game edition and loader to find mods. Only compatible files are listed, with dependency direction shown.',
      },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'specs', 'ratings', 'discussion', 'offers'],
    partNotes: {
      identity: 'A game has one identity across platforms and regions. Remakes and reboots each have their own linked identity.',
      editions: 'Editions across platforms, regions, and languages are listed separately, along with DLC.',
      credits: 'Developers, publishers, writers, composers, and voice actors are credited by role. A creator’s books and games are connected.',
      relations: 'Sequels, side stories, adaptations, and mods have relation types that show what depends on what.',
      specs: 'System requirements and supported languages are recorded by platform. Unknown and not applicable are distinct.',
      ratings: 'Ratings can target an edition on a specific platform. Any score across editions explains how it was calculated.',
      discussion: 'The game, DLC, and an edition on a specific platform can each have a discussion.',
      offers: 'Buy small games from participating developers here, alongside sales information from other stores.',
    },
    connections: [
      { to: 'software', label: 'Mods and tools' },
      { to: 'anime', label: 'Anime adaptation' },
      { to: 'visual-novels', label: 'Same developer' },
    ],
    community: {
      headline: 'Chat, reviews, and data corrections each have a place.',
      body: 'Chat, replies to reviews, and discussions about data corrections stay separate. Follow a game or join its community to post and make picks.',
    },
    imageAlt: 'A game controller',
  },
  {
    id: 'software',
    name: 'Software',
    tag: 'Software',
    group: 'works',
    summary: 'Compatibility, availability, and alternatives',
    meta: {
      title: 'Software: Versions, platforms, and alternatives',
      description:
        'One identity per software project. Each version lists supported operating systems, processor architectures, release notes, and license. See where to get it, compare alternatives with reasons, and follow new releases.',
    },
    hero: {
      headline: 'See if it runs on your device.',
      lede: 'Each version lists its supported operating systems and architectures, where to get it, and its license, with sources. Alternatives include a reason, and packages and dependencies follow the rules of their ecosystems.',
    },
    features: [
      {
        title: 'Versions and platforms',
        body: 'Supported operating systems and processor architectures are recorded for each version. Support on one operating system is not inferred from another.',
      },
      {
        title: 'Where to get it',
        body: 'Official downloads, stores, and package repositories are listed with their sources. REZICS says when a link leads to an external site.',
      },
      {
        title: 'Release notes for every version',
        body: 'Keep the changes and release channel for each version. Follow a project to hear about new versions.',
      },
      {
        title: 'Alternatives with reasons',
        body: 'An alternative is an attributed relation that explains what it is suited for and why. Others can challenge it.',
      },
      {
        title: 'Packages and dependencies',
        body: 'Packages keep their original names, version rules, and dependency meaning in each ecosystem. Packages with the same name are not treated as the same package.',
      },
      {
        title: 'License and privacy statements',
        body: 'License, privacy, and accessibility statements name their source. A developer’s claim is not presented as verified by REZICS.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'offers', 'follow'],
    partNotes: {
      identity: 'A software project has one identity across platforms and package repositories. Forks have their own entries, linked to their source.',
      editions: 'Keep every version number, release channel, and set of release notes, with older versions available too.',
      specs: 'Record supported operating systems, processor architectures, and package dependencies for each version, with a source for each.',
      credits: 'Maintainers, development teams, and organizations each have an identity, with their projects listed on the same page.',
      ratings: 'Rate a version on a specific platform, with the number and distribution of ratings shown.',
      discussion: 'Questions, update notes, and discussions of alternatives are attached to the software page.',
      offers: 'Official downloads, stores, and package repositories are listed with prices and licenses.',
      follow: 'Follow a software project or its maintainers to hear about new versions and announcements.',
    },
    connections: [
      { to: 'games', label: 'Compatible game editions' },
      { to: 'mcp', label: 'Also an MCP server' },
      { to: 'skills', label: 'Listed as a skill dependency' },
    ],
    community: {
      headline: 'Communities curate useful setups.',
      body: 'Communities can organize software into guides or setups, listing their intended environment and whether compatibility was tested. Outdated recommendations are marked for review.',
    },
    imageAlt: 'A software window',
  },
  {
    id: 'visual-novels',
    name: 'Visual novels',
    tag: 'Visual novels',
    group: 'works',
    summary: 'An edition with the right language, platform, and translation',
    meta: {
      title: 'Visual novels: Find an edition you can play',
      description:
        'Find an edition that matches your language, platform, region, and translation coverage. See the translator and source edition, track each route, and avoid spoilers for routes and endings.',
    },
    hero: {
      headline: 'Language, platform, and translation, all in one edition.',
      lede: 'A translated title does not mean a playable translation exists. REZICS finds an edition that matches your language, platform, and coverage, names the translator and source edition, and shows routes and endings only as far as you have played.',
    },
    features: [
      {
        title: 'Match every requirement at once',
        body: 'Language, platform, region, and coverage must all match the same edition. One edition’s language is never paired with another edition’s platform.',
      },
      {
        title: 'Translators and source editions',
        body: 'Each translation lists the team, source edition, and whether it covers the full work, part of it, or only a demo.',
      },
      {
        title: 'Routes and endings without spoilers',
        body: 'Routes, endings, and character secrets stay behind spoiler boundaries. See only as far as you have played.',
      },
      {
        title: 'Build a Wiki from a script',
        body: 'People with a script can use their own AI agent to read it and propose characters, events, and source locations segment by segment. It can all run on their own computer. A person reviews each proposal before publication, and REZICS never receives the full script.',
      },
      {
        title: 'Demos, releases, and language patches',
        body: 'Follow a work to hear about demos, releases, and new language patches. Each update links to the exact edition.',
      },
    ],
    parts: ['identity', 'editions', 'names', 'credits', 'relations', 'facets', 'progress', 'wiki'],
    partNotes: {
      identity: 'Chinese and Japanese visual novel communities share one work identity and choose their own names and ordering.',
      editions: 'Original editions, official translations, fan patches, and demos are separate releases, each listing language, platform, region, and coverage.',
      names: 'Original titles, aliases, and translations are stored separately. A translated title does not mean a playable translation exists.',
      credits: 'Writers, artists, musicians, and voice actors are credited by role, with voice actors linked to their characters.',
      relations: 'Sequels, side stories, anime adaptations, and novelizations are connected.',
      facets: 'When filtering by language, platform, region, and coverage, every condition must match the same edition.',
      progress: 'Track progress by route to see which ones you have finished and which remain.',
      wiki: 'The Wiki cites the route for each character and event, and hides routes you have not played.',
    },
    connections: [
      { to: 'anime', label: 'Anime adaptation' },
      { to: 'books', label: 'Novelization' },
      { to: 'games', label: 'Same character artist' },
    ],
    community: {
      headline: 'Chinese and Japanese communities share the same data.',
      body: 'Two communities can each start a Zone and choose their own names, descriptions, and ordering. The works, editions, and credits beneath them are shared, so a correction in one place updates the other.',
    },
    imageAlt: 'A dialogue box in front of a scene',
  },
  {
    id: 'mcp',
    name: 'MCP Hub',
    tag: 'MCP',
    group: 'agents',
    summary: 'MCP server versions and compatibility records',
    meta: {
      title: 'MCP Hub: Servers, versions, and compatibility evidence',
      description:
        'Browse MCP server projects, package versions, and deployment endpoints. Each compatibility record lists the task, client, version, language, and date. Tool lists are recorded by version, and you can rate, discuss, make lists, and follow updates.',
    },
    hero: {
      headline: 'Find MCP servers through evidence of real use.',
      lede: 'Projects, package versions, deployment endpoints, and observed tool lists are recorded separately. Each compatibility record names the client, version, language, task, and date.',
    },
    features: [
      {
        title: 'Keep four records separate',
        body: 'Projects, package versions, deployment endpoints, and observed tools are four separate records. A reachable endpoint does not verify ownership, compatibility, or permission to use it.',
      },
      {
        title: 'Compatibility evidence with dates',
        body: 'Each record lists the task, client, client version, language, and date. A successful test from last year is marked with last year’s date.',
      },
      {
        title: 'Tool lists follow each version',
        body: 'Each observation records the tools and schemas offered by the server at that time. When the version changes, additions and changes are clear.',
      },
      {
        title: 'Listing is not an endorsement',
        body: 'A listing describes the server and does not mean REZICS guarantees its safety. Evidence describes one version on one date.',
      },
      {
        title: 'Make and share lists',
        body: 'Arrange servers in a list with notes on use and setup. Keep it private, share it, or export it.',
      },
      {
        title: 'AI agents can search too',
        body: 'The same index is available through the REZICS API and MCP server, so your agent can choose a server that fits.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'lists', 'follow'],
    partNotes: {
      identity: 'An MCP server project has one identity, with packages, deployment endpoints, and observations attached to it.',
      editions: 'Record each package release, with older versions and change history available.',
      specs: 'Each record dates the task completed, client, version, and language used.',
      credits: 'Maintainers and their organizations have their own identities. Skills and APIs maintained by the same person are connected.',
      ratings: 'Ratings name the version they refer to, with the number and distribution shown.',
      discussion: 'Discuss setup, bug reports, and usage on the server page.',
      lists: 'Arrange useful servers in a list with notes, then share or export it.',
      follow: 'Follow a server to receive new versions and announcements based on your notification settings.',
    },
    connections: [
      { to: 'software', label: 'Projects and packages' },
      { to: 'apis', label: 'Wrapped API' },
      { to: 'skills', label: 'Same maintainer' },
    ],
    community: {
      headline: 'Every real use can become evidence.',
      body: 'Report a success or failure on a client with the version and date. Reports from AI agents use the same format and appear on the page after human review.',
    },
    imageAlt: 'Several connectors and a plug',
  },
  {
    id: 'skills',
    name: 'Skill Hub',
    tag: 'Skills',
    group: 'agents',
    summary: 'Skill files, dependencies, and compatibility records',
    meta: {
      title: 'Skill Hub: An index of skills for AI agents',
      description:
        'Each skill lists its files, scripts, and declared dependencies. Every release fixes its contents, license, and source. Imports do not run scripts. Compatibility evidence is dated, and ratings, discussions, and lists are on the same page.',
    },
    hero: {
      headline: 'See what a skill contains before you use it.',
      lede: 'Every skill lists its instruction file, scripts, references, and assets, with executable files identified. Packages, supported clients and versions, and records of real use are all on one page.',
    },
    features: [
      {
        title: 'Every file listed',
        body: 'Instructions, scripts, references, and assets are grouped by type. Every file has a hash, and executable files are identified.',
      },
      {
        title: 'Dependencies are declared clearly',
        body: 'Required packages are listed by ecosystem and marked as required or optional. Missing details and unsupported formats are identified.',
      },
      {
        title: 'Imports do not run scripts',
        body: 'When you import a skill from a folder or repository, its scripts are saved, not run. Folders that do not meet the requirements are not forced into a skill format.',
      },
      {
        title: 'Every release is fixed',
        body: 'Each release fixes file contents, license, and source. Later changes become a new version, and older versions remain available.',
      },
      {
        title: 'Who used it and where',
        body: 'Compatibility records list the task, client, version, language, and date to show where a skill has worked.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'lists', 'follow'],
    partNotes: {
      identity: 'A skill has one identity, showing which repository it came from and how many times it changed.',
      editions: 'Every release fixes file contents, license, and source. The downloaded files match the edition shown on the page.',
      specs: 'Required and optional packages are separated, and missing declarations or unsupported formats are identified.',
      credits: 'Authors and co-maintainers each have an identity, linked to their other skills and servers.',
      ratings: 'Ratings are not averaged until they reach the threshold. Until then, only the number and distribution are shown.',
      discussion: 'Discuss usage, limitations, and problem reports on the skill page.',
      lists: 'Arrange skills in a list by workflow, with a note for each one.',
      follow: 'Follow a skill or its author to hear about new versions.',
    },
    connections: [
      { to: 'software', label: 'Required packages' },
      { to: 'mcp', label: 'Server by the same author' },
    ],
    community: {
      headline: 'Skill authors have their own identity.',
      body: 'An author has one identity on REZICS, with their skills, servers, and other work on the same page. Follow an author to hear when they publish another skill.',
    },
    imageAlt: 'A toolkit with small tools',
  },
  {
    id: 'apis',
    name: 'API Hub',
    tag: 'APIs',
    group: 'agents',
    summary: 'Versions, specifications, and ratings for public APIs',
    meta: {
      title: 'API Hub: An index of public APIs',
      description:
        'Browse public API versions and change history. Specifications include measurement methods and dates for side by side comparison. Ratings and discussions are tied to versions, and updates arrive in your inbox when you follow an API.',
    },
    hero: {
      headline: 'See versions and evidence before choosing an API.',
      lede: 'See public API versions, change history, and withdrawal status together. Specifications and tests state their methods, conditions, and dates. Authentication methods and specifications are listed for each version, as are version specific ratings and discussions.',
    },
    features: [
      {
        title: 'Versions side by side',
        body: 'Versions and change history are listed in order. Withdrawn and canceled versions remain, with their status shown.',
      },
      {
        title: 'Specifications explain how they are measured',
        body: 'Every specification includes its measurement method, conditions, units, and date, so numbers stay tied to their source.',
      },
      {
        title: 'Compare side by side',
        body: 'Filter by use, license, or other fields, then compare APIs in one table.',
      },
      {
        title: 'Authentication and specifications',
        body: 'Each version lists its authentication method and specification source, which you can use as filters. These facts stay with that version.',
      },
      {
        title: 'Updates in your inbox',
        body: 'Follow an API to receive new versions and withdrawal notices in your inbox, or choose a digest.',
      },
      {
        title: 'Organize APIs for a project',
        body: 'List the APIs used by a project with notes on their purpose, then share or export the list.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'follow', 'lists'],
    partNotes: {
      identity: 'A public API has one identity, with its identifiers and former names pointing to it.',
      editions: 'Versions and change history are listed together, with withdrawn versions identified.',
      specs: 'Compare measurements in one table, with methods, conditions, units, and dates shown.',
      credits: 'Providers and maintenance teams have their own identities. Find an organization’s software and MCP servers together.',
      ratings: 'Ratings state the question and who rated the API.',
      discussion: 'Discuss integration experience, limitations, and alternatives on the API page.',
      follow: 'Follow an API to receive new versions and withdrawal notices in your inbox.',
      lists: 'List the APIs used by a project with notes on their purpose.',
    },
    connections: [
      { to: 'mcp', label: 'Packaged as an MCP server' },
      { to: 'software', label: 'Software from the same organization' },
    ],
    community: {
      headline: 'People who integrated an API share what they learned.',
      body: 'Developers can discuss limitations, pricing, and alternatives on the API page. Facts established in discussion can be proposed for the page and shown to everyone after human review.',
    },
    imageAlt: 'Several endpoints joined by lines',
  },
];
