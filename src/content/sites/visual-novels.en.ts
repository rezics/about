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
  { id: 'r1', name: 'Original (1.02)', values: { language: 'ja', platform: 'pc', region: 'jp', coverage: 'full' }, translator: 'None', source: 'None', status: 'Official' },
  { id: 'r2', name: 'Official Chinese edition', values: { language: 'zh', platform: 'console', region: 'tw', coverage: 'full' }, translator: 'Publisher', source: 'Original', status: 'Official' },
  { id: 'r3', name: 'Fan translation patch, version one', values: { language: 'zh', platform: 'pc', region: 'any', coverage: 'partial' }, coverageNote: 'Common route and two character routes', translator: 'Fan translation team', source: 'Original 1.02', status: 'Unofficial' },
  { id: 'r4', name: 'Fan translation patch, version two', values: { language: 'zh', platform: 'pc', region: 'any', coverage: 'full' }, translator: 'Fan translation team', source: 'Original 1.02', status: 'Unofficial' },
  { id: 'r5', name: 'English demo', values: { language: 'en', platform: 'pc', region: 'any', coverage: 'trial' }, translator: 'Publisher', source: 'Original', status: 'Official' },
  { id: 'r6', name: 'Mobile edition', values: { language: 'ja', platform: 'mobile', region: 'tw', coverage: 'full' }, titleLanguage: 'zh', translator: 'None', source: 'None', status: 'Official' },
];

const strings = {
  /** Labels shared by several pages of this site. */
  shared: {
    demo: 'Example data',
    dims: { language: 'Language', platform: 'Platform', region: 'Region', coverage: 'Coverage' } as Record<Dim, string>,
    columns: { name: 'Version', translator: 'Translator', source: 'Source', status: 'Status' },
    options: {
      language: { zh: 'Traditional Chinese', ja: 'Japanese', en: 'English' },
      platform: { pc: 'PC', console: 'Console', mobile: 'Mobile' },
      region: { jp: 'Japan', tw: 'Taiwan', any: 'Any' },
      coverage: { full: 'Full', partial: 'Partial', trial: 'Demo' },
    } as Record<Dim, Record<string, string>>,
    /** Followed by the name of the condition a release fails. */
    fails: 'Does not match: ',
    titleOnly: 'Chinese title only',
    match: 'Matches',
    closed: 'Not reached yet',
    nextPage: 'Next page',
    nextSite: 'Next site',
    nextSiteLine: 'Choose an MCP server based on its versions and compatibility records.',
    /** The closing statement on every page of the site. */
    closing: 'Start the next visual novel with the version you can play.',
    releases,
  },

  images: {
    routes: 'A purple paper strip branches across warm white paper, with a blue branch extending to the right.',
    window: 'Purple, blue, and pink sheets overlap, with one opening passing through every layer.',
    thread: 'Two purple sheets, one dark and one light, are linked through holes to show a translation and its source.',
    fold: 'A purple paper strip opens section by section, with the end still folded.',
    sites: 'One purple sheet folds into two separate small structures with a shared base.',
  },

  landing: {
    hero: {
      headline: 'See which versions include your language.',
      lede: 'REZICS lists the language, platform, region, and coverage of every visual novel release. Fan translations credit their translators and name the version they are based on.',
    },
    match: {
      label: 'One version',
      headline: 'All three filters must match one version.',
      body: 'Choosing a visual novel is like following a route map. Each condition rules out another branch. Language, platform, and coverage must all be listed on the same release. REZICS will not combine Chinese from one version, PC support from another, and full coverage from a third.',
      queriesLabel: 'Three filters, three results',
      /** A match: the release's name, then its translator and source. */
      answer: '{name}. Translator: {translator}. Source: {source}.',
      none: 'No version matches. A mobile edition with only a Chinese title does not count.',
      caption: 'Example data: six releases of one visual novel.',
    },
    statement: { text: 'A Chinese title', more: 'does not mean the game is in Chinese.' },
    parts: {
      label: 'Parts',
      headline: 'How visual novels use shared parts.',
      body: 'Every kind uses the same set of parts. Visual novels use these eight.',
      notes: {
        identity: 'One work has one identity. Its original release, ports, translations, and patches all belong to it.',
        editions: 'Each release records its language, platform, region, and how much content it includes.',
        names: 'Japanese titles, Chinese titles, Pinyin, and aliases appear together, each labeled with its language.',
        credits: 'Each script, illustration, music, voice acting, and translation credit links to the credited person’s page.',
        relations: 'Sequels, spin-offs, ports, and adaptations link to novels, anime, and manga.',
        facets: 'Filter by language, platform, region, and coverage. All four conditions apply to the same release.',
        progress: 'Record where you are on each route. That also determines how much of the page is hidden.',
        wiki: 'Characters, places, and events come from one shared graph, limited to the route you have read.',
      } as Partial<Record<PartId, string>>,
    },
    pagesIndex: {
      label: 'This site',
      headline: 'Six pages, one subject each.',
      rows: {
        releases: 'Compare versions by language, platform, region, and coverage.',
        translations: 'Who translated it, which version they used, and how much they covered.',
        characters: 'One identity for each character and voice actor.',
        spoilers: 'Filter by tags and keep endings hidden until you reach them.',
        wiki: 'A work’s Wiki organized from its script.',
        zones: 'Chinese and Japanese sites share the same identities.',
      } as Record<string, string>,
    },
    neighbours: {
      label: 'Related kinds',
      headline: 'A real link between source works and adaptations.',
      body: 'Visual novels share a catalogue with novels, anime, manga, and games. For example, A Certain Magical Index began as a light novel, with manga and anime adaptations and one visual novel adaptation. On REZICS, the visual novel is a separate work linked to its source as an adaptation, with its own ratings and progress.',
      items: [
        { kind: 'books', label: 'Novels from the same story share one library.' },
        { kind: 'anime', label: 'Anime adaptations link to their source, with the same voice actors.' },
        { kind: 'manga', label: 'Manga and source works link to each other, with separate progress.' },
        { kind: 'games', label: 'The same modules track platforms, releases, and availability.' },
      ] as { kind: 'books' | 'anime' | 'manga' | 'games'; label: string }[],
    },
  },

  releases: {
    hero: {
      headline: 'One row per version, with every detail in place.',
      lede: 'A visual novel may have an original, a port, an official translation, fan patches, and a demo. REZICS records each version separately, with its languages, platforms, release regions, and coverage.',
    },
    matrix: {
      label: 'Filters',
      headline: 'Results must match one version.',
      body: 'If you select Traditional Chinese, PC, and full, each result must meet all three conditions. When a version does not match, the reason is shown beside it.',
      filtersLabel: 'Filters',
      any: 'Any',
      count: 'Matches: {n} of {total} versions',
      note: 'Unsupported combinations are explained clearly instead of returning a blank result.',
      caption: 'Example data: filter six releases of one visual novel by the current conditions.',
    },
    languages: {
      text: 'Title language',
      more: 'and content language are recorded separately.',
      body: 'A release has two language fields: the language used for its packaging and title, and the language of the game text. A translated title alone does not make a version appear in a Traditional Chinese filter. Bilingual Chinese and Japanese versions list both languages.',
    },
    coverage: {
      label: 'Coverage',
      headline: 'Releases state whether they are full, partial, or demos.',
      body: 'Versions with unknown coverage are marked “Not recorded,” not treated as complete.',
      items: [
        { title: 'Full', body: 'This version includes the whole work and every route.' },
        { title: 'Partial', body: 'The covered content is stated, such as the common route and two character routes.' },
        { title: 'Demo', body: 'A demo gets its own record and is clearly marked as a demo. Reviews of the demo are separate from reviews of the full release.' },
      ] as Item[],
    },
    status: {
      label: 'Status',
      headline: 'One version can be available in many places.',
      body: 'A version sold by several stores remains one release, with each place listed below it. Announcements, scheduled dates, delays, and release dates are recorded separately instead of being reduced to “released.”',
      items: [
        { title: 'Official', body: 'A release recognized by the rights holder.' },
        { title: 'Unofficial', body: 'A release not recognized by the rights holder. It has a separate record and is not merged into an official version.' },
        { title: 'Withdrawn', body: 'A version removed after release, with its record preserved.' },
        { title: 'Canceled', body: 'Announced but never released. It is marked canceled, not released.' },
      ] as Item[],
    },
    follow: {
      label: 'Follow',
      headline: 'Hear when a version in your language is released.',
      body: 'Follow a work to receive new releases in your language in your inbox. You can also follow the activity of one specific version.',
    },
    finale: 'Follow every translation back to its source.',
  },

  translations: {
    hero: {
      headline: 'Every translation names the version it came from.',
      lede: 'The Chinese translation and Japanese original are the same work, sharing ratings, characters, and Wiki+. Each translation has its own record of the translator, source version, and coverage.',
    },
    lineage: {
      label: 'Sources',
      headline: 'Fan translations and official releases are distinct.',
      body: 'A fan translation has its own record linked to the original version and is never marked official. Official translations have separate records, shown alongside fan translations so readers can tell them apart.',
    },
    record: {
      label: 'Translation record',
      headline: 'Name the translator, source, and coverage.',
      items: [
        { title: 'Translator', body: 'Translation teams and individual translators each have an identity page. Find all of one person’s translated works on their page.' },
        { title: 'Source', body: 'A translation points to the exact version it used, such as original version 1.02, not a vague “source work.” If the source is unconfirmed, it is marked that way rather than guessed.' },
        { title: 'Coverage', body: 'The release states whether it includes the common route, specific character routes, and any extra content. Know before you play whether you might encounter Japanese text partway through.' },
        { title: 'Updates', body: 'A new patch creates a new release. The earlier version keeps its original coverage, so each player’s version remains clear.' },
      ] as Item[],
    },
    reviews: {
      text: 'Rate the translation',
      more: 'on its own.',
      body: 'Reviews can target the story, translation, or production. A compelling script and awkward translation receive separate scores. You can also view ratings from players who read Chinese.',
    },
    several: {
      label: 'Multiple translations',
      headline: 'One work can have several translations.',
      body: 'Different teams can translate the same work, with separate credits and maintenance records that do not replace one another. Readers choose a translation, and communities can recommend one.',
    },
    teams: {
      label: 'For translation teams',
      headline: 'Every patch version has its own page.',
      items: [
        { title: 'Team page', body: 'The team and its members each have an identity, with their works and releases listed together.' },
        { title: 'Release page', body: 'Each patch version has its own page and discussion thread, keeping player feedback in one place.' },
        { title: 'Follow', body: 'Players can follow your team and hear when a new patch is released.' },
        { title: 'Corrections', body: 'Submit a correction to release details. It takes effect after review.' },
      ] as Item[],
    },
    finale: 'Each character and voice actor has one identity.',
  },

  characters: {
    hero: {
      headline: 'One character, the same identity everywhere.',
      lede: 'A character keeps one identity across sequels, ports, anime adaptations, and translations. Differences in age, appearance, and name between works are recorded with their scope, without splitting the character into several identities.',
    },
    variants: {
      label: 'Variants',
      headline: 'Another personality, another timeline.',
      body: 'Split identities only when needed. Another personality or the same person in another timeline becomes a separate variant linked to the main character. The link records where the story reveals it, hidden from readers who have not reached that point.',
      items: [
        { title: 'Character A', body: 'The main character. A in sequels, ports, and adaptations shares this identity.' },
        { title: 'Another personality of A', body: 'A personality variant linked to character A.' },
        { title: 'A in another timeline', body: 'A counterpart variant linked to character A.' },
      ] as Item[],
      caption: 'Example data. A variant links to one main character. The main character is not itself a variant.',
    },
    names: {
      label: 'Names',
      headline: 'Names can carry spoiler warnings too.',
      body: 'A character may have a birth name, translation, nickname, or true name. Each name states its language, where it appears, and its spoiler level. Pages show familiar or less revealing names based on your preference.',
      columns: { kind: 'Name type', language: 'Language', where: 'Appears in', spoiler: 'Spoiler' },
      rows: [
        { kind: 'Birth name', language: 'Japanese', where: 'This work and its sequels', spoiler: 'No spoiler' },
        { kind: 'Chinese translation', language: 'Traditional Chinese', where: 'Official Chinese edition', spoiler: 'No spoiler' },
        { kind: 'Nickname', language: 'Japanese', where: 'From the common route', spoiler: 'No spoiler' },
      ],
      hidden: { kind: 'True name', spoiler: 'Shown after the midpoint of route two' },
      caption: 'Example data. A name used in a work is preserved with that appearance.',
    },
    credits: {
      label: 'Credits',
      headline: 'Voice credits link to characters.',
      body: [
        'Credits are grouped by role: script, original art, music, voice acting, and translation. A voice credit links the voice actor and character and can identify its release version, such as a port with a different cast.',
        'An author who writes visual novel scripts and light novels has all their works listed on one person page.',
      ],
    },
    query: {
      label: 'Search',
      headline: 'Conditions must match the same character.',
      body: 'Search for “a red-haired heroine” to find works where the same character is both red-haired and a heroine. A work with a red-haired supporting character and a black-haired heroine does not match.',
      items: [
        { title: 'Work one: match', body: 'The heroine has red hair. Both conditions apply to one character.' },
        { title: 'Work two: no match', body: 'The supporting character has red hair, while the heroine has black hair. The conditions apply to two different characters.' },
      ] as Item[],
      caption: 'Example data. A protagonist, major character, and supporting character are distinct roles. A villain can be a major character without being the protagonist.',
    },
    finale: 'Choose your tags. Read the story at your own pace.',
  },

  spoilers: {
    hero: {
      headline: 'Keep routes you have not read hidden.',
      lede: 'The key events in a visual novel often happen on later routes. REZICS uses your progress to decide what to show, from tags and character details to Wiki+ pages.',
    },
    fold: {
      label: 'Folded away',
      headline: 'Leave later events folded away.',
      body: 'What you have read is open. What you have not reached stays folded, without revealing even a name. It opens when you get there.',
    },
    route: {
      label: 'Progress',
      headline: 'The page opens as far as you have read.',
      here: 'You are here',
      nodes: [
        { name: 'Prologue', fact: '' },
        { name: 'Common route', fact: 'Character A appears' },
        { name: 'Choice', fact: '' },
        { name: 'Route one', fact: 'A and B are childhood friends' },
        { name: 'Route one ending', fact: '' },
        { name: 'Route two', fact: 'A’s true name' },
        { name: 'True ending', fact: 'Another personality of A' },
      ],
      /** Index of the reader's position in `nodes`. */
      at: 3,
      caption: 'Example data.',
      rules: [
        { title: 'Visitors', body: 'Visitors who are not signed in start before the first reveal.' },
        { title: 'Signed in', body: 'The default position is the furthest point you finished. A work marked completed counts as fully read.' },
        { title: 'Choose a position', body: 'Anyone can choose a position or reveal everything.' },
        { title: 'Separate routes', body: 'Progress is compared only within the same route. Content from other routes stays hidden while the rest of the page remains visible.' },
      ] as Item[],
    },
    votes: {
      label: 'Two votes',
      headline: 'Relevance and spoilers are separate votes.',
      body: 'When a tag is added to a work, the community votes separately on whether it fits and whether it reveals the story. A relevant tag that contains a spoiler stays hidden until you reach it.',
      columns: { tag: 'Tag', fit: 'Relevance', spoiler: 'Spoiler' },
      rows: [
        { tag: 'School setting', fit: 'Most agree', spoiler: 'No' },
        { tag: 'Multiple endings', fit: 'Most agree', spoiler: 'No' },
      ],
      hidden: { fit: 'Most agree', spoiler: 'Yes, shown after reaching route two' },
      caption: 'Example data.',
    },
    filters: {
      label: 'Filters',
      headline: 'Include or exclude tags.',
      body: [
        'Set each tag to include or exclude. For several tags in one group, require all of them or any of them. Open a tag to see its description, parent and child tags, and every work that uses it.',
        'Follow tags you like and pin them as tabs on your home page.',
      ],
    },
    apart: {
      text: 'Spoilers, age ratings, and covers',
      more: 'work separately.',
      body: 'Spoiler votes do not change age ratings, and age ratings do not determine what counts as a spoiler. You choose whether to open covered images and spoiler warnings. Opening them affects only your current view and does not count as a vote. Age ratings are set separately for all ages, R15, R18, and R18G. Unrated content is marked “Not rated,” not treated as all ages.',
    },
    readings: {
      label: 'Community interpretations',
      headline: 'Communities can interpret a tag in their own way.',
      body: 'Each community can use its own definitions to decide which tags it accepts. A community’s narrower meaning for a term does not change how others use it or remove the original tag.',
    },
    finale: 'A Wiki organized from scripts and reviewed by people.',
  },

  wiki: {
    hero: {
      headline: 'Built from scripts and published after human review.',
      lede: 'Visual novel stories are written in scripts. Script holders, such as a work’s creators, use REZICS open-source tools and their own AI agent to organize characters and events into proposals for review. Approved proposals become the work’s Wiki+.',
    },
    steps: {
      label: 'Five steps',
      headline: 'Five steps from script to reader.',
      items: [
        { title: 'Read', body: 'The toolkit reads supported visual novel text scripts. It never runs code in the script.' },
        { title: 'Organize', body: 'The agent you choose organizes characters, aliases, relationships, events, and places passage by passage, with a location and short quotation for each fact.' },
        { title: 'Match', body: 'The toolkit uses the REZICS API to find existing characters and places. Each item is marked as matched, new, uncertain, or unavailable.' },
        { title: 'Review', body: 'A person reviews each proposal. Deciding that two records describe the same character is also a proposal, never a silent merge.' },
        { title: 'Publish', body: 'Approved content is published to the work’s Wiki+. When a script changes, only the differences are submitted. Accepted content is not silently deleted.' },
      ] as Item[],
    },
    locator: {
      label: 'Locations',
      headline: 'Every fact points back to a line of dialogue.',
      body: 'A location includes three parts: the script hash, a label, and the line number. Route conditions state which route the line belongs to. Reviewers with the same version can check the original on their own computers.',
      fields: [
        { label: 'Script hash (prefix)', value: 'sha256 9f2c04b7', code: true },
        { label: 'Label', value: 'route_two_day3', code: true },
        { label: 'Line', value: 'Line 142', code: false },
        { label: 'Route', value: 'Route two', code: false },
      ],
      caption: 'Example data. Different versions must be aligned explicitly. Locations are not applied automatically to another version.',
    },
    local: {
      text: 'You choose',
      more: 'which model reads the full script.',
      body: [
        'REZICS does not receive the full script, only organized data and short quotations. The model you choose reads the script. In strict mode, inference happens only on your own computer.',
        'The toolkit is open source under Apache-2.0. It needs no REZICS account, sends no usage data, and does not connect to retrieve anything on its own. It does not bypass protection. Encrypted or protected files cannot be read.',
        'Quotation length is limited and enforced across accounts, translations, and sites.',
      ],
    },
    zone: {
      label: 'Site',
      headline: 'Wiki+ is one site for the work.',
      body: [
        'Characters, places, timelines, chapter guides, and relationships each have their own pages. Information panels and lists read from the same graph. Correct a fact in one Wiki and filters, lists, and other sites update too. Readers see content only up to the route they have reached.',
        'The work page remains the entry point, bringing together ratings, reviews, your progress, and a Wiki+ summary. Each community decides whether agents can draft and generated text can be used. By default, only facts and structure are accepted.',
      ],
    },
    finale: 'Chinese and Japanese communities can each have their own site.',
  },

  zones: {
    hero: {
      headline: 'Two language sites, one set of identities.',
      lede: 'A Chinese community can build a visual novel site, and a Japanese community can build one too. Each site chooses its work titles, descriptions, order, and accepted statements, while sharing the same identities for works, characters, and staff.',
    },
    mirror: {
      label: 'Two sites',
      headline: 'Correct shared data once for both sites.',
      body: 'Each site chooses its own names, descriptions, and ordering. Both share the same identities for works, characters, and staff.',
      columns: { field: '', zh: 'Chinese site', ja: 'Japanese site' },
      rows: [
        { field: 'Name', zh: 'Chinese title (example)', ja: 'Japanese title (example)' },
        { field: 'Description', zh: 'Written by the Chinese community', ja: 'Written by the Japanese community' },
        { field: 'Order', zh: 'By Chinese release date', ja: 'By Japanese release date' },
      ],
      /** The row both sites share, set across both columns. */
      shared: { field: 'Identity', value: 'Both sites share one work identity' },
      caption: 'Example data.',
    },
    zone: {
      label: 'Zone',
      headline: 'A Zone is a complete site.',
      items: [
        { title: 'Pages and URLs', body: 'Choose the URLs and layouts for the home page, work pages, character pages, and release lists.' },
        { title: 'Navigation', body: 'Create your own navigation and custom pages, such as a getting-started guide.' },
        { title: 'Appearance', body: 'Set the branding and layout. Identities, search, language, sources, and accessibility stay consistent across sites.' },
        { title: 'Versions', body: 'Preview and validate site changes, restore an earlier version if something goes wrong, and export the whole site.' },
        { title: 'API', body: 'People and AI agents manage sites through the same API.' },
      ] as Item[],
    },
    space: {
      label: 'Space',
      headline: 'The site is the front door. The community is where people gather.',
      items: [
        { title: 'Site', body: 'A Zone is the public face of a site, with its own pages and navigation. It can also be private.' },
        { title: 'Community', body: 'A Realm has discussion, rules, and members, and decides which statements the community accepts.' },
        { title: 'Together or separate', body: 'A space can have both a site and a community, or only one of them.' },
        { title: 'Follow once', body: 'Follow a space once to receive activity from both.' },
      ] as Item[],
    },
    community: {
      label: 'Community',
      headline: 'Discussion, ratings, and lists stay with the work.',
      items: [
        { title: 'Discussion', body: 'Open a discussion thread for any work or version. You can read without joining.' },
        { title: 'Ratings', body: 'Ratings state who gave them: everyone, a specific community, or only you.' },
        { title: 'Lists', body: 'Create recommendations or play orders, add reasons, sort them, and export them.' },
        { title: 'Library', body: 'Mark a work completed on the Chinese site and it counts on the Japanese site too. Your library and lists follow you.' },
      ] as Item[],
    },
    script: {
      text: 'Traditional Chinese',
      more: 'stays Traditional Chinese.',
      body: 'Names and descriptions each identify their language. When Traditional Chinese is unavailable, automatic conversion is a clearly labeled fallback, not a reviewed translation. It does not change personal or work names.',
    },
    creators: {
      label: 'Creators',
      headline: 'Visual novel creators can publish here too.',
      body: 'Creators with a REZICS agreement can publish visual novels that meet the sales rules. Files have no DRM, demos are available, and a purchase is made once. Updates and re-downloads follow the purchase terms. Work pages, communities, and Wiki+ are linked to one identity.',
    },
    finale: 'MCP servers have their own index too.',
  },
};

export type VnStrings = typeof strings;

export default {
  id: 'visual-novels',
  base: '/visual-novels/',
  name: 'Visual novels',
  theme: { kind: 'visual-novels' },
  next: 'mcp',
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: meta(
        'Visual novels: every version clearly described',
        'Choose visual novels by language, platform, region, and coverage. Fan translations name their translators and source versions. Characters, staff, route progress, and Wiki+ are linked to the same work.',
      ),
    },
    {
      slug: 'releases',
      label: 'Releases',
      meta: meta(
        'Releases: filters match one version',
        'Each visual novel release has its own record of language, platform, region, and whether it is full, partial, or a demo. Every filter must match the same version. A translated title alone does not make it a Chinese edition.',
      ),
    },
    {
      slug: 'translations',
      label: 'Translations and translators',
      meta: meta(
        'Translations and translators: name the source',
        'Each visual novel translation names its translator, exact source version, and coverage. Fan translations are not marked official. Patch updates get separate records, and translations can be rated separately from the story.',
      ),
    },
    {
      slug: 'characters',
      label: 'Characters and credits',
      meta: meta(
        'Characters and credits: one identity per person',
        'A character has one identity across sequels, ports, and adaptations, with names shown by language and spoiler level. Script, art, music, and voice credits all link to the same person page.',
      ),
    },
    {
      slug: 'spoilers',
      label: 'Tags and spoilers',
      meta: meta(
        'Tags and spoilers: stop at your progress',
        'Include or exclude tags, with communities voting separately on whether a tag fits and whether it is a spoiler. Character information and Wiki+ stop at your route progress. Choose when to reveal everything.',
      ),
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: meta(
        'Wiki+: a wiki organized from scripts',
        'Script holders use an open-source toolkit and their own AI agent on their computer to organize characters, places, and events, each with a dialogue location. REZICS does not receive the full script, and content is published only after human review.',
      ),
    },
    {
      slug: 'zones',
      label: 'Communities and sites',
      meta: meta(
        'Communities and sites: one dataset, two sites',
        'Chinese and Japanese communities can each build a complete visual novel site. They choose their own names, descriptions, ordering, and accepted statements while sharing identities for works, characters, and staff.',
      ),
    },
  ],
  strings,
} satisfies MiniSite<VnStrings>;
