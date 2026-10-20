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
  next: { page: 'Next page', site: 'Next site' },

  pictures: {
    hero: 'Several ochre sheets are linked by paper cord through round holes, with a pale blue and a light green sheet attached.',
    records: 'An ochre sheet has blank paper tags tied through its edge holes, with one hole left empty.',
    identity: 'One sheet is divided into four slightly separated panels: two ochre, one deep teal, and one pale blue.',
    versions: 'Five equal sheets form a row, from dark to light, ending with a white sheet.',
    zone: 'An ochre sheet is folded into a small freestanding screen, with several small paper pieces beside it.',
  },

  pageLines: {
    directory: 'One server, one identity',
    evidence: 'What a record says, and what it does not',
    versions: 'A separate record for every version',
    community: 'Ratings, discussion, lists, and community directories',
    maintainers: 'Register, claim, declare, and respond',
  },

  landing: {
    hero: {
      label: 'MCP server index',
      headline: 'Dated records show which servers work.',
      lede: 'MCP Hub gives every MCP server an identity and a separate record for each version: the date, client and version, language, and task result.',
    },
    record: {
      label: 'One record',
      headline: 'Before saying it works, name the setup.',
      body: 'A result depends on the server version, client, task, and language. Each record states all four, along with the outcome and date. Change any part, and it needs a new test.',
      fields: [
        { title: 'Server version', body: 'Record the exact version. A new version gets a new record.' },
        { title: 'Client', body: 'Name the client and its version.' },
        { title: 'Task', body: 'What the server was asked to do.' },
        { title: 'Language', body: 'The same task can have a different result in another language.' },
        { title: 'Result and date', body: 'Whether it worked and when it was tested.' },
      ],
      link: 'How a record is written',
    },
    statement: {
      text: 'A record reports the result of one setup on one date.',
      sub: 'It does not prove a server is safe, grant a license, or represent an endorsement by REZICS.',
    },
    pages: {
      label: 'This site',
      headline: 'One page for each step, from finding a server to maintaining one.',
    },
    neighbours: {
      label: 'Connected indexes',
      headline: 'A server is part of a larger record.',
      body: 'The people behind it, the APIs it wraps, and the project it belongs to share one index, so you can find them from any direction.',
      tiles: [
        { kind: 'software', line: 'Projects, packages, and clients are software entries' },
        { kind: 'apis', line: 'The APIs it wraps are linked to it' },
        { kind: 'skills', line: 'Skills by the same maintainer' },
      ],
      developers: { name: 'Developers', line: 'REZICS MCP server', href: '/developers/mcp-server/' },
    },
    closing: {
      title: 'Read the records before you choose a server.',
      body: 'Use one account for servers, skills, and APIs, as well as the books and games you follow on REZICS.',
    },
  },

  directory: {
    hero: {
      headline: 'One server, one identity.',
      lede: 'The same MCP server may appear in several sources. After review and merging, it has one record on REZICS, with its name, maintainers, versions, records, ratings, and discussion connected to it.',
    },
    records: {
      label: 'Four parts',
      headline: 'A server record covers four different things.',
      body: 'Projects, packages, deployed endpoints, and tool lists change at different times, so REZICS records them separately.',
      items: [
        { title: 'Project', body: 'Its name, description, and maintainers. A new version or endpoint does not make it a new project. A project fork is a separate project linked to its source.' },
        { title: 'Package', body: 'A package version, its ecosystem, its native name, and its version number. Versions are ordered by the ecosystem’s own rules.' },
        { title: 'Deployed endpoint', body: 'The server’s network address. A working connection does not prove who owns it, whether it works with your client, or whether you have permission to call it.' },
        { title: 'Tool list', body: 'The tools a server exposed at a given time and the parameters each required. A change to the list adds a new observation.' },
      ],
    },
    filters: {
      label: 'Filters',
      headline: 'Every filter matches the same record.',
      body: 'To find a server that successfully exports a file from a command-line client in Traditional Chinese, all three conditions must come from one record. They are never combined from unrelated records.',
      rows: [
        { title: 'Servers that successfully organize tasks in Japanese in a code editor', body: 'The client, language, task, and result all come from one record.' },
        { title: 'Servers with a successful record for their latest version in the past 90 days', body: 'The version, date, and result are tied to one record.' },
        { title: 'All servers maintained by the same person', body: 'Find them by maintainer.' },
        { title: 'Servers that wrap a particular API', body: 'Find them by relationship, or start from the API.' },
      ],
      caption: 'Save filters as a named view to open again or follow it.',
      note: 'Example view.',
    },
    traversal: {
      label: 'Lists',
      headline: 'Lists reach the end and show where they stop.',
      facts: [
        { title: 'Keep going to the last result', body: 'Results are not limited to the first few pages. Keep browsing until the last entry.' },
        { title: 'Accurate counts', body: 'Counts are marked as exact or estimated, with the data’s last updated date.' },
        { title: 'Say when a filter is unsupported', body: 'Unsupported combinations are identified clearly, not returned as a blank that looks like “no results.”' },
      ],
    },
    parts: {
      label: 'Parts',
      headline: 'Eight shared parts across every kind.',
      body: 'MCP Hub is not a separate application. Its entries use the same parts as books, games, and software, arranged for MCP servers.',
      notes: {
        identity: 'The same server listed by different sources points to one identity.',
        editions: 'Each version has its own record, including its package, tool list, and history.',
        specs: 'Compatibility records include the date, client and version, task, language, and result.',
        credits: 'Maintainers can be people or organizations, linked to their other projects.',
        ratings: 'Each rating is tied to a version and names the question it answers.',
        discussion: 'Discussion threads can be attached to the server or a specific version.',
        lists: 'Add servers, skills, and APIs to the same list, with a note for each item.',
        follow: 'Follow a server, maintainer, or saved view to get notified about new versions.',
      },
    },
    statement: {
      text: 'The same name does not make the same server.',
      sub: 'Merges need evidence and review.',
      note: 'After a merge, the original identities and history remain available.',
    },
    next: 'What a record says, and what it deliberately leaves out.',
    closing: 'Before choosing a server, make sure you have the right one.',
  },

  evidence: {
    hero: {
      headline: 'A record names the date and setup.',
      lede: 'A person or AI agent asks a specific server version to do a task in a given language, using a particular client version. The result and date make up a record. MCP Hub’s evidence consists of records like these.',
    },
    specimen: {
      label: 'Example record',
      headline: 'See what a record contains.',
      fields: {
        server: { label: 'Server', value: 'Notes server 1.4.0', note: 'The exact version is recorded.' },
        client: { label: 'Client', value: 'Code editor 3.2', note: 'The client version is recorded too.' },
        task: { label: 'Task', value: 'Turn meeting notes into a to-do list', note: 'The task is stated in one sentence.' },
        language: { label: 'Language', value: 'Traditional Chinese', note: 'The language used for the task.' },
        result: { label: 'Result', value: 'Success', note: 'Success and failure are both recorded.' },
        date: { label: 'Date', value: '2026/10/12', note: 'This record applies to this date only.' },
        submitter: { label: 'Submitted by', value: 'A user', note: 'A person or AI agent can submit. An agent names its operator.' },
        review: { label: 'Review', value: 'Reviewed', note: 'A record is public only after a person reviews it.' },
      },
      caption: 'Example record. Fields and content illustrate compatibility evidence. Records are public only after a person reviews them.',
    },
    compare: {
      label: 'Scope',
      headline: 'What it says and what it does not.',
      says: {
        heading: 'It says',
        items: [
          'Whether this setup completed this task on this date.',
          'Which versions of the server and client were used.',
          'Which language was used for the task.',
          'Who submitted it and whether it has been reviewed by a person.',
        ],
      },
      not: {
        heading: 'It does not say',
        items: [
          'Whether the server is safe. This record is not a safety certification.',
          'How you may use its code. That depends on the maintainer’s license declaration and the original terms.',
          'What happens with another version, client, or language.',
          'That REZICS recommends or endorses this server.',
        ],
      },
    },
    states: {
      label: 'Results and status',
      headline: 'Results, disputes, and missing records are marked separately.',
      body: 'A test has a result. A challenged result is reviewed again. Status is always written out, not shown by color alone.',
      names: { ok: 'Success', fail: 'Failed', disputed: 'Disputed', none: 'No record' },
      items: {
        ok: 'This setup succeeded on this date.',
        fail: 'The test did not succeed, and its result remains recorded.',
        disputed: 'A public record has been challenged and is under review again.',
        none: 'No one has tested it, or no one has recorded the test yet.',
      },
    },
    statement: {
      text: 'No record does not mean failure.',
      sub: 'A setup no one has tested stays blank. It is not treated as a failure.',
    },
    layers: {
      label: 'Declarations and records',
      headline: 'Keep maintainer claims, server observations, and user tests separate.',
      chapters: [
        { title: 'Declaration', body: 'The maintainer states which clients and languages are supported. It is shown as a declaration, not treated as a record.' },
        { title: 'Observation', body: 'The tools and parameters listed by the server are recorded at a point in time. A tool being listed does not mean it can complete a task.' },
        { title: 'Record', body: 'Someone uses a setup to perform a task, records the result and date, and a person reviews it before publication. Only then is it a record.' },
        { title: 'Review and dispute', body: 'A reviewed record can still be challenged. It can be both reviewed and disputed, with earlier findings kept in the history.' },
      ],
    },
    client: {
      label: 'Start with a client',
      headline: 'Begin with the client you use.',
      body: [
        'Choose your client and version, then the language for the task. The directory keeps only servers with records for that setup, with the result and date beside each one.',
        'Save and follow the view to see new records that match its filters.',
      ],
    },
    next: 'Each version has its own record, so changes to the tool list are visible.',
    closing: 'Clearer records help you make your own judgment.',
  },

  versions: {
    hero: {
      headline: 'A separate record for every version.',
      lede: 'Versions are ordered by their ecosystem’s rules. Each one has its own package, tool list, change log, compatibility records, and ratings. Nothing carries over from an earlier version.',
    },
    start: {
      label: 'New versions',
      headline: 'A new version needs its own record.',
      body: 'A compatibility record for 2.0.0 must come from a test of that version. Success with 1.4.1 does not carry over. Only a test of 2.0.0 creates its record. Older records show their date and version so you can judge whether they still apply.',
      note: 'Example version numbers.',
    },
    diff: {
      label: 'Tool list',
      headline: 'Compare tool lists to see what changed.',
      body: 'Each observation records the tools and parameter formats the server listed at that time. Compare two observations to see which tools were added or removed and which parameters changed.',
      columns: ['Tool', '1.4.0 observation', '2.0.0 observation'],
      rows: [
        { tool: 'Search notes', before: 'Listed', after: 'Parameters changed' },
        { tool: 'Create note', before: 'Listed', after: 'Unchanged' },
        { tool: 'Delete note', before: 'Listed', after: 'Removed' },
        { tool: 'List tags', before: 'Listed', after: 'Unchanged' },
        { tool: 'Export notes', before: 'Not listed', after: 'Added' },
      ],
      consequence: '“Search notes” is still listed, but its parameter format changed. Setups that use it are worth testing again.',
      caption: 'Example comparison of two tool-list observations, not a real observation.',
    },
    ledger: {
      label: 'Packages',
      headline: 'The same name and version do not mean the same files.',
      body: 'Packages record their native names and version numbers according to their ecosystem. Matching names or versions do not prove matching content or rights, so each version’s files are checked by hash.',
      rows: [
        { title: 'Ecosystem', body: 'The package ecosystem it belongs to.' },
        { title: 'Native name', body: 'Preserved as written, without conversion to another format.' },
        { title: 'Version number', body: 'Ordered according to the ecosystem’s rules.' },
        { title: 'File hash', body: 'Checks the actual files for this version.' },
        { title: 'License declaration', body: 'Who declared which terms and when.' },
        { title: 'Source', body: 'Where this information came from and when it was obtained.' },
      ],
    },
    follow: {
      label: 'Follow',
      headline: 'Choose how much you hear when you follow a server.',
      body: 'Each follow has its own notification level, which you can change at any time. Changes to followed servers also appear in your activity feed.',
      levels: [
        { title: 'All', body: 'New versions, announcements, and every new post.' },
        { title: 'Highlights', body: 'New versions, announcements, and decisions.' },
        { title: 'Off', body: 'Only notify me when someone replies to or mentions me.' },
        { title: 'Watch', body: 'Follow only a specific version or discussion thread.' },
      ],
      channels: 'Notifications go to your inbox. You can also enable push notifications or email digests. Unsubscribe from email with one click.',
    },
    statement: {
      text: 'Ratings stay with the version.',
      sub: 'A score for 1.4 does not count toward 2.0.',
      note: 'Cross-version figures are calculated separately, with the method and included versions stated.',
    },
    next: 'Ratings, discussions, and lists each state what they refer to.',
    closing: 'When a version changes, start with its records.',
  },

  community: {
    hero: {
      headline: 'Name the version before giving it a rating.',
      lede: 'Every score belongs to a question, scale, and version. The count, distribution, and rating group appear beside the score so you can see whose view it represents.',
    },
    score: {
      label: 'Ratings',
      headline: 'Five details accompany each score.',
      items: [
        { title: 'Question', body: 'For example, “Are the docs clear?” or “Is it stable over long sessions?” Scores for different questions are not combined.' },
        { title: 'Scale', body: 'The rating scale and what each score means appear beside the score.' },
        { title: 'Version', body: 'A score stays with the version it rates.' },
        { title: 'Count and distribution', body: 'When there are too few ratings, only the count and distribution appear, without an average.' },
        { title: 'Group', body: 'Site-wide ratings and ratings from a specific community (Realm) are shown separately.' },
      ],
      note: 'Example question.',
    },
    discussion: {
      label: 'Discussion',
      headline: 'Discussion belongs to a server or a version.',
      body: 'Open a discussion under a version when something goes wrong with it. Share general feedback under the server. Maintainers reply under their own identities, so readers know who is speaking.',
      agents: 'AI agents identify themselves and their operator when they take part in a discussion.',
    },
    list: {
      label: 'Lists',
      headline: 'One list for servers, skills, and APIs.',
      body: 'Lists can mix kinds. Group servers, the skills that use them, and their underlying APIs. Add a note to each item, arrange the order, and export the list.',
      title: 'Tools for organizing meeting notes',
      items: [
        { kind: 'mcp', name: 'Notes server', note: 'Export notes starting with version 2.0.0.' },
        { kind: 'skills', name: 'Meeting notes skill', note: 'Requires the server above.' },
        { kind: 'apis', name: 'Calendar API', note: 'Add tasks to a calendar.' },
        { kind: 'software', name: 'Command-line tool', note: 'This setup was tested here.' },
      ],
      caption: 'Example list.',
    },
    zone: {
      label: 'Zone',
      headline: 'Communities can have their own server directory.',
      body: 'Communities can use Zone to build a complete site with a home page, navigation, a filtered directory, and guide pages. Its entries use the same identities, and corrections made there update everywhere those entries appear.',
      routes: 'Example site map: home, directory, getting started, records, discussion.',
    },
    next: 'Register a server, claim its identity, and write a declaration.',
    closing: 'Every rating and discussion names its subject.',
  },

  maintainers: {
    hero: {
      headline: 'Explain the server you maintain.',
      lede: 'Register a server, claim an imported identity, and state its license and support scope. Your statements appear alongside user records, so readers can see both.',
    },
    steps: {
      label: 'Steps',
      headline: 'Four steps, from registration to response.',
      items: [
        { title: 'Register', body: 'Create an entry with its name, description, project, and package. Before submission, the system checks for duplicates.' },
        { title: 'Claim', body: 'If an entry was imported from public data, claim the person or organization identity that belongs to you.' },
        { title: 'Declare', body: 'State the license terms and supported clients and languages. Each declaration records who made it, when, and which version of the terms it refers to.' },
        { title: 'Respond', body: 'Reply to discussion under your maintainer identity. Submit your own record when you dispute an existing one.' },
      ],
    },
    rules: {
      label: 'Boundaries',
      headline: 'What you can and cannot change.',
      can: {
        heading: 'You can',
        items: ['Edit an entry’s description, version information, and declarations.', 'Reply to discussions and submit evidence that challenges a record.', 'Have your AI agent submit a record for each new version.'],
      },
      cannot: {
        heading: 'You cannot',
        items: ['Remove someone else’s record because you disagree. Submit counter-evidence for review.', 'Pay for a different decision through sponsorship or subscription.', 'Inflate your ratings or use multiple accounts to create artificial support.'],
      },
    },
    licence: {
      label: 'License declaration',
      headline: 'A license is your declaration, not permission from REZICS.',
      body: 'A declaration records the terms and version, who declared them, when, the scope, and the basis. It does not mean REZICS has authorized anyone to use the work, and it is not legal confirmation. A server’s presence in the directory does not mean anyone may distribute its code.',
      rows: [
        { title: 'Terms and version', body: 'Which terms and version were declared.' },
        { title: 'Declarant', body: 'The person or organization making the declaration.' },
        { title: 'Date', body: 'When it was declared. Unknown dates are marked unknown.' },
        { title: 'Scope', body: 'Which versions and files it covers.' },
        { title: 'Basis', body: 'The basis for the declaration.' },
      ],
    },
    agent: {
      text: 'Your AI agent can run a set of tasks after each release',
      sub: 'and submit the results.',
      note: 'These records identify your agent and follow the same review process as everyone else’s.',
      link: 'How to submit',
      href: '/developers/mcp-server/',
    },
    next: {
      headline: 'Skills for AI agents have versions, records, and ratings too.',
      lines: {
        skills: 'Files and dependencies for each skill version',
        apis: 'APIs wrapped by servers',
        software: 'Projects, packages, and clients',
      },
    },
    closing: 'Your declarations appear alongside everyone’s records.',
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
      label: 'Overview',
      meta: {
        title: 'MCP Hub: MCP server index',
        description:
          'Find MCP servers in REZICS MCP Hub. Each server has one identity, with a separate record for every version. Compatibility records state the date, client and version, task, and language, with ratings, discussion, and lists alongside.',
      },
    },
    {
      slug: 'directory',
      label: 'Directory',
      meta: {
        title: 'MCP Hub directory: one identity for each server',
        description:
          'Every MCP server in the MCP Hub directory has one identity. Projects, package versions, deployed endpoints, and tool lists are recorded separately. Filters match the same record, and results continue to the last entry.',
      },
    },
    {
      slug: 'evidence',
      label: 'Evidence',
      meta: {
        title: 'MCP Hub evidence: dates and conditions',
        description:
          'MCP Hub compatibility records state the date, server version, client and version, task, language, and result. They show what a setup did on a given day, but do not prove safety, grant a license, or represent an endorsement by REZICS.',
      },
    },
    {
      slug: 'versions',
      label: 'Versions',
      meta: {
        title: 'MCP Hub versions: a separate record for each one',
        description:
          'Every MCP server version has its own package ecosystem, native name, version number, and file hashes, along with the observed tool list and records and ratings for that version. Follow a server to hear when a new version is released.',
      },
    },
    {
      slug: 'community',
      label: 'Community',
      meta: {
        title: 'MCP Hub community: ratings, discussion, and lists',
        description:
          'Rate a version of an MCP server and state the question. Discussion threads belong to a server or version. Put servers, skills, and APIs on one list. Communities can also build their own server directory with Zone.',
      },
    },
    {
      slug: 'maintainers',
      label: 'Maintainers',
      meta: {
        title: 'MCP Hub maintainers: register and claim',
        description:
          'Maintainers can register servers in MCP Hub, claim imported identities, declare licenses and support scope, and respond to discussion under their own identities. Declarations and user records are shown separately, and payment cannot change a decision.',
      },
    },
  ],
  strings,
} satisfies MiniSite<McpStrings>;
