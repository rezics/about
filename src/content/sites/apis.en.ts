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
  name: 'API Hub',
  theme: { kind: 'apis' },
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: {
        title: 'API Hub: one entry for every public API',
        description:
          'REZICS gives every public API an entry, with sources and dates for its provider, versions, specifications, and authentication. Filter by available fields, follow version changes, and see which version each rating and discussion covers.',
      },
    },
    {
      slug: 'directory',
      label: 'Directory',
      meta: {
        title: 'API Hub directory: find APIs by facts',
        description:
          'Filter the API Hub directory by provider, authentication, specifications, and version status. Results continue to the last entry and state how precise the count is. Save filters as a view and follow it.',
      },
    },
    {
      slug: 'versions',
      label: 'Versions',
      meta: {
        title: 'API Hub versions: a record for every release',
        description:
          'Each API version has a record of what was actually released at the time. Announcements, schedules, availability, delays, and withdrawals are recorded separately. Follow an API to receive updates at your chosen notification level.',
      },
    },
    {
      slug: 'specs',
      label: 'Specifications and authentication',
      meta: {
        title: 'API Hub specifications and authentication',
        description:
          'Each version records its authentication and specifications, identifying whether they came from the provider, an imported source, or the community. Measurements include a metric, method, conditions, units, and date. Unknown, zero, and not applicable are shown separately.',
      },
    },
    {
      slug: 'connections',
      label: 'Connections',
      meta: {
        title: 'API Hub connections: what is built on an API',
        description:
          'An API’s provider, client libraries, MCP servers that wrap it, and skills that use it are linked by relationships, visible from either side. Providers have their own pages listing everything they contribute to.',
      },
    },
    {
      slug: 'community',
      label: 'Community',
      meta: {
        title: 'API Hub community: ratings, discussion, and lists',
        description:
          'API ratings state the question, version, and rating group, with the count and distribution. Discussion belongs to an entry or version. Lists can include APIs, software, and MCP servers.',
      },
    },
    {
      slug: 'publishing',
      label: 'Contributions',
      meta: {
        title: 'API Hub contributions: additions and corrections',
        description:
          'Search for duplicates before adding an API, then state whether it is a new API, a new version, or an alias. Proposals include evidence and are applied only after human review. Providers and AI agents follow the same process.',
      },
    },
  ],
  strings: {
    example: 'Example: ',
    next: { label: 'Continue reading', aria: 'Other API Hub pages' },
    closingBody: 'Use one account to find APIs, follow version changes, and share integration experience with others.',
    pictures: {
      hero: 'Several pale blue sheets overlap on warm white paper. Neat rows of round holes line their edges, with a dark blue sheet underneath.',
      request: 'Five pale blue sheets stand in a row like gates. A dark slate blue strip passes through a cut in each one.',
      versions: 'Six pale blue card sheets fan out in order, from light to dark, with their top holes aligned one after another.',
      specs: 'Three sheets of thick pale blue paper overlap, each with a blank square embossed in one corner. Dark slate blue paper shows underneath.',
      connections: 'A pale blue sheet has a row of holes down its center. Ochre, light green, and deep teal paper strips extend from the edges, each passing through one hole.',
    },
    home: {
      hero: {
        headline: 'One entry for every API, with a source for every fact.',
        lede: 'Providers, versions, specifications, and authentication are organized in one entry, with who said what and when clearly stated.',
      },
      pages: {
        eyebrow: 'Six pages',
        headline: 'Find an API and follow every version.',
        rows: {
          directory: 'Filter by facts and see every result',
          versions: 'Keep old versions and follow new ones',
          specs: 'Find authentication and specifications with sources',
          connections: 'Link libraries, MCP servers, and skills',
          community: 'Ratings and discussion name their subject',
          publishing: 'Additions and corrections follow one process',
        },
      },
      directory: {
        eyebrow: 'Directory',
        headline: 'Every filter uses a sourced fact from the entry.',
        lead: 'Filter by authentication, specifications, version status, and linked MCP servers and skills. Combine supported conditions and browse through every result.',
        link: 'View the directory',
      },
      statement: {
        lead: 'APIs change versions, names, and availability.',
        rest: 'Each entry records every change and who reported it.',
      },
      parts: {
        eyebrow: 'Eight parts',
        headline: 'One API entry, built from eight parts.',
        lead: 'Identity always comes first. API Hub selects the other seven from the fifteen shared parts, the same set used for books and anime.',
        notes: {
          identity: 'Renaming an API or changing its identifier does not create a new entry. Older names remain searchable.',
          editions: 'Each version has its own record of what was actually released at the time.',
          specs: 'Authentication methods, API specifications, and measurement results each include a source and date.',
          credits: 'Providers and maintainers are listed by role, each with their own page.',
          ratings: 'Each rating names the version it covers and the question it answers.',
          discussion: 'Discussions attach to the API as a whole or to a specific version.',
          follow: 'Updates about new versions and withdrawals follow the notification level you choose.',
          lists: 'A list can include APIs, software, and skills, with a note for each item.',
        },
      },
      connections: {
        eyebrow: 'Connections',
        headline: 'Connect everything built on an API.',
        lead: 'Client libraries, MCP servers that wrap an API, skills that use it, and the provider organization each have their own identity. Relationships connect them in both directions.',
        link: 'View connections',
      },
      closing: 'Read an API’s versions and evidence before choosing it.',
    },
    directory: {
      hero: {
        headline: 'Find APIs by facts and see every result.',
        lede: 'Each filter corresponds to a sourced fact in an entry. Combine supported conditions and browse all results in order, without stopping after the first few pages.',
      },
      facets: {
        eyebrow: 'Filters',
        headline: 'Combine filters from available fields.',
        lead: 'Each condition has a name and value. Values are entries too, so you can open one and keep exploring.',
        rows: [
          { title: 'Provider', body: 'The person or organization that provides an API. See all APIs from one provider together.' },
          { title: 'Authentication', body: 'No authentication, API key, or user authorization, recorded separately for each version.' },
          { title: 'Specifications', body: 'Whether specifications exist, where they are, and who provided them.' },
          { title: 'Version status', body: 'Announced, available, withdrawn, or canceled.' },
          { title: 'Relationships', body: 'Whether it has an MCP server wrapper, a client library that calls it, or a skill that uses it.' },
          { title: 'Names and languages', body: 'Search names and aliases in any language.' },
          { title: 'Ratings', body: 'Filter by a rating question and see the number of ratings.' },
          { title: 'Dates', body: 'Filter by version release or fact verification date.' },
        ],
      },
      complete: {
        lead: 'Previews, rankings, and complete lists make different promises.',
        rest: 'A complete list continues to the last entry.',
        note: 'Every result states how precise its count is and when the data was updated. The size of a page is not the end of the list.',
      },
      identity: {
        eyebrow: 'Identity',
        headline: 'One entry for each API.',
        lead: 'A renamed API, a new identifier, or a duplicate submission still belongs to one entry.',
        rows: [
          { title: 'Identifiers name their source', body: 'Each identifier records its namespace and source. The same name in different places does not make two APIs the same.' },
          { title: 'Old names remain searchable', body: 'Aliases, former names, and names in each language are stored separately. Search any of them to find the API.' },
          { title: 'Duplicates are merged', body: 'A merge plan lists affected ratings, reviews, and follows for human review. Merges can be undone.' },
          { title: 'Old URLs point to the new entry', body: 'Merged entries point to the one that remains, with the reason for the merge recorded.' },
        ],
      },
      views: {
        eyebrow: 'Views',
        headline: 'Save common filters and follow them.',
        lead: 'Save a set of filters as a named view and share it with others. Follow a view to see new matching entries in your activity feed or receive them in a digest.',
        tiles: [
          { name: 'No authentication, has specifications', line: 'Start with APIs that have specifications and need no authentication' },
          { name: 'One provider', line: 'See all APIs from one organization together' },
          { name: 'Has an MCP server', line: 'APIs linked to an MCP server' },
          { name: 'Traditional Chinese names', line: 'APIs with a curated Chinese name' },
        ],
        caption: 'Example view names and filters.',
      },
      closing: 'Start with a sourced fact when you look for an API.',
    },
    versions: {
      hero: {
        headline: 'Keep old versions and hear about new ones.',
        lede: 'Each version preserves what was released at the time, even after it is withdrawn. Follow an API to hear when a new version is announced, becomes available, or is withdrawn.',
      },
      closed: {
        lead: 'A released version’s record is never rewritten.',
        rest: 'Later changes belong to the next version.',
      },
      sequence: {
        eyebrow: 'Version history',
        headline: 'Every version of an API has its own evidence.',
        lead: 'Example using a fictional weather data API: version three switches to API keys, while version two’s no-authentication record remains. Incorrect records can be corrected with evidence. New content belongs to the next version.',
        tiles: [
          { name: 'v1', rel: 'Withdrawn', line: 'No authentication. Provider announcement, confirmed 2026/06/18.' },
          { name: 'v2', rel: 'Available', line: 'No authentication. Provider version notes, confirmed 2026/08/12.' },
          { name: 'v3', rel: 'Available', line: 'API key. Provider specifications, confirmed 2026/10/01.' },
          { name: 'v4', rel: 'Announced', line: 'API key. Provider announcement, confirmed 2026/10/19.' },
        ],
        caption: 'The weather data API, versions, authentication, sources, and dates are fictional examples.',
      },
      events: {
        eyebrow: 'Five events',
        headline: 'Record each event from announcement to withdrawal.',
        lead: 'A version can pass through several dates. REZICS does not combine them into one.',
        rows: [
          { title: 'Announced', body: 'The provider says a new version is coming. This is an announcement, not a release.' },
          { title: 'Scheduled', body: 'A planned date is published. If it changes, the earlier date stays in the history.' },
          { title: 'Available', body: 'Confirmed as ready to use, with a source for the confirmation.' },
          { title: 'Delayed', body: 'The planned date moves later. A delay is not a cancellation, which is marked separately.' },
          { title: 'Withdrawn', body: 'The provider withdraws the version. Its record remains and its status changes to withdrawn.' },
        ],
      },
      follow: {
        eyebrow: 'Follow',
        headline: 'Choose how much you hear when following an API.',
        lead: 'Following is free and does not require the provider’s permission. Each follow has a notification level that determines which updates reach your inbox.',
        rows: [
          { title: 'All', body: 'Notify you about new versions, announcements, decisions, and regular posts.' },
          { title: 'Highlights', body: 'Notify you about new versions, announcements, and decisions only.' },
          { title: 'Off', body: 'Keep regular updates in your activity feed. Direct interactions, such as replies and mentions, still notify you.' },
          { title: 'Set per version', body: 'Set separate notifications for a version you want to watch closely.' },
        ],
        footnote: 'Notifications can go to your inbox, push notifications, or email digests. Unsubscribe from email digests with one click.',
      },
      closing: 'Version updates arrive the way you choose.',
    },
    specs: {
      hero: {
        headline: 'Know what you need before making a request.',
        lede: 'Each version states its authentication, where to find its specifications, and what has been measured, with who reported it and when.',
      },
      facts: {
        eyebrow: 'Per version',
        headline: 'Authentication and specifications belong to each version.',
        lead: 'Two versions of one API may use different authentication. These facts stay with each version and name their sources.',
        rows: [
          { title: 'Authentication', body: 'No authentication, API key, or user authorization is recorded for each version. A new authentication method does not change the old version’s record.' },
          { title: 'Specifications', body: 'The entry states where the specifications are, who provided them, and when they were checked.' },
          { title: 'Measurements', body: 'Every measurement includes its metric, method, conditions, unit, and date.' },
          { title: 'Sources', body: 'Each fact identifies whether it came from the provider, public data, or a community measurement. Imported data links to its source and license.' },
        ],
      },
      measure: {
        lead: 'Measurements and ratings are different.',
        rest: 'Ratings reflect people’s views. Measurements state what was observed under which conditions.',
      },
      fields: {
        eyebrow: 'Measurements',
        headline: 'Read these five details first.',
        lead: 'Check the metric, method, conditions, unit, and date. When comparing results, also check the outcome, subject, and coverage.',
        rows: [
          { title: 'Metric', body: 'What was measured.' },
          { title: 'Method', body: 'How it was measured.' },
          { title: 'Conditions', body: 'The conditions during measurement.' },
          { title: 'Unit', body: 'The unit used for the value.' },
          { title: 'Date', body: 'When it was measured. Older results keep their dates.' },
        ],
        footnote: 'Results for the same metric build a history and can be compared with other APIs in one table.',
      },
      absent: {
        eyebrow: 'Missing data',
        headline: 'Unknown, zero, and not applicable are different answers.',
        lead: 'An unmeasured value is unknown, not zero. A metric that does not apply is not treated as missing data. Missing information does not become a misleading score.',
      },
      closing: 'Check authentication before you integrate.',
    },
    connections: {
      hero: {
        headline: 'One API connects everything built on it.',
        lede: 'Client libraries, MCP servers that wrap an API, skills that use it, and its provider organization each have an identity on REZICS, linked by relationships.',
      },
      relations: {
        eyebrow: 'Relationships',
        headline: 'Relationships have names and direction.',
        lead: 'Each relationship identifies its type and each party’s role. It appears on both the API page and the other entry’s page.',
        rows: [
          { title: 'Client libraries', body: 'A library that calls this API is a software entry with its own versions and dependencies.' },
          {
            title: 'Wrapped as an MCP server',
            body: 'A project that wraps it as an MCP server has its own MCP Hub entry, with the project, package, and deployed endpoint recorded separately.',
          },
          {
            title: 'Skills that use it',
            body: 'A skill that uses this API has its own Skill Hub entry, linked back here by a relationship.',
          },
          { title: 'Other APIs from the provider', body: 'Find the provider’s other APIs from its page.' },
        ],
      },
      both: {
        lead: 'Find an MCP server from the API,',
        rest: 'and find the API from the server.',
      },
      provider: {
        eyebrow: 'Providers',
        headline: 'Providers have their own pages.',
        lead: 'An organization or person that provides an API has a public identity, separate from any account. Its APIs, published software, and maintained MCP servers appear on its page by role.',
        more: 'Someone who writes novels, builds software, and maintains APIs has one identity on REZICS.',
      },
      neighbours: {
        eyebrow: 'Related kinds',
        headline: 'Three related kinds and the developer site.',
        lines: {
          mcp: 'MCP servers that make APIs available as tools',
          skills: 'Skills for AI agents, some of which use APIs',
          software: 'Libraries and apps that call APIs',
        },
        developers: { name: 'Developers', line: 'REZICS APIs are documented here' },
      },
      closing: 'Find the other side from either end.',
    },
    community: {
      hero: {
        headline: 'Every score says which version it covers.',
        lede: 'A rating for an API states the question and version. Counts and distributions appear beside the score. Discussion, lists, and communities also center on the same entry.',
      },
      rating: {
        eyebrow: 'Ratings',
        headline: 'Five details define a score.',
        lead: 'Example: “Are the docs clear?” on a five-point scale, for version three, rated by everyone on the site.',
        rows: [
          { title: 'Question', body: 'What is being rated. Scores for different questions are never combined.' },
          { title: 'Scale', body: 'The scale and what each score means are stated in advance.' },
          { title: 'Subject', body: 'Which version is being rated. Its score does not count toward another version.' },
          { title: 'Group', body: 'The group that rated it is named beside the score.' },
          { title: 'Count and distribution', body: 'Every score includes the number of ratings and their distribution. When there are too few ratings, no average is calculated.' },
        ],
      },
      discussion: {
        lead: 'Discuss integration issues under the version where they occurred.',
        rest: 'When a version changes, its discussion stays with the old version.',
      },
      lists: {
        eyebrow: 'Lists',
        headline: 'Put everything a project uses on one list.',
        lead: 'Lists can mix kinds. Group APIs, client libraries, MCP servers, and skills, with a note for each item. Set the list’s visibility, arrange it, and export it.',
        tiles: [
          { kind: 'apis', rel: 'API', name: 'Weather data API', line: 'Source of forecast data' },
          { kind: 'apis', rel: 'API', name: 'Map tiles API', line: 'Base map for the display' },
          { kind: 'software', rel: 'Software', name: 'Client library', line: 'Call the weather data API from code' },
          { kind: 'mcp', rel: 'MCP server', name: 'Weather MCP server', line: 'Let an AI agent check the weather' },
          { kind: 'skills', rel: 'Skill', name: 'Trip planning skill', line: 'Adjust each day’s plan to the weather' },
        ],
        caption: 'Example list for a fictional project. Names are illustrative.',
      },
      zone: {
        eyebrow: 'Realm and Zone',
        headline: 'Build a Zone for a kind of API.',
        lead: 'A community can start a Realm, set its own rules, and interpret facts in entries its own way. It can also build a Zone as a dedicated API directory site using the same graph of data.',
        link: 'Explore the site module',
      },
      closing: 'Every rating and discussion names its subject.',
    },
    publishing: {
      hero: {
        headline: 'Search first, then add.',
        lede: 'Every addition and correction is a proposal that states what to change and why. A person reviews it before it is applied, and a receipt is kept. People, providers, and AI agents use the same process.',
      },
      path: {
        eyebrow: 'Process',
        headline: 'How an entry is added.',
        rows: [
          { title: 'Search first', body: 'Before showing the form, search names, aliases, and identifiers. If you find an entry, add an alias or version instead of creating a duplicate.' },
          { title: 'Describe what it is', body: 'The submitter says whether it is a new API, a new version of an existing API, or part of a version. A model can suggest, but cannot decide for a person.' },
          { title: 'Add evidence', body: 'Each proposal identifies the exact location to change, its source, and its method.' },
          { title: 'Human review', body: 'A reviewer checks the evidence before deciding. If the entry changes after submission, the proposal returns for review.' },
          { title: 'Mark as unverified', body: 'New entries can be public at first, marked unverified with sources for each field. They do not appear in trusted exports or recommendations until verified.' },
          { title: 'Keep a receipt', body: 'An applied change leaves a receipt. Reversals are recorded as corrections without rewriting history.' },
        ],
      },
      proposal: {
        eyebrow: 'Proposal format',
        headline: 'AI agents use the same proposal format as people.',
        lead: 'First-party and third-party agents submit the same kind of proposal. Agent output cannot endorse itself, including when it is imported again.',
        rows: [
          { title: 'Target and version', body: 'The exact entry to change and the revision version the agent read.' },
          { title: 'Change', body: 'The content to add, update, or remove.' },
          { title: 'Evidence', body: 'The source and location that support the change.' },
          { title: 'Method', body: 'How the result was reached and which inputs were used.' },
          { title: 'Confidence', body: 'The confidence claimed by the agent. It is the agent’s statement, not a guarantee from REZICS.' },
          { title: 'Disclosure', body: 'Identify the process as automated and name the person responsible for it.' },
        ],
      },
      paid: {
        lead: 'Payment cannot buy a decision.',
        rest: 'Sponsorship or subscription does not change a review outcome.',
      },
      provider: {
        eyebrow: 'Providers',
        headline: 'Providers follow the same process.',
        lead: 'An API provider can prove ownership of its namespace. Facts it submits are identified as provider statements. They remain statements, alongside community measurements and discussion.',
        more: 'When a provider withdraws a statement, only its own basis is removed. Imported facts include sources and licenses. Later imports do not silently overwrite fields that someone has verified and protected.',
      },
      closing: 'People review every addition and correction.',
    },
  },
} satisfies MiniSite<ApisStrings>;
