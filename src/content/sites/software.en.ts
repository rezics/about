// The software site (軟體): every visible string of /software/ and its six inner pages, in the
// v3 language (.temp/sites/V3-SPEC.md). Design record and sources: src/sites/software/SITE.md and
// facts.md. All sample data (the program 範例編輯器, 甲／乙／丙系統, version numbers, dates, sizes,
// the hash, package names) is fictional and is labelled 示意 wherever it appears.
import type { Item, KindId, MiniSite } from '../schema';

export type StateId = 'compatible' | 'incompatible' | 'unknown' | 'stale' | 'unavailable';
/** One compatibility observation: a state, and the date of the adopted measurement where there is one. */
export type Cell = readonly [StateId, string?];
/** A section's opening: the eyebrow, the serif heading and its lead text. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}
/** A still-life picture in public/images/sites/software/ (`<name>-<width>.avif|webp`). */
export interface Picture {
  name: string;
  alt: string;
}

export interface SoftwareStrings {
  common: { nextPage: string; nextSite: string; sample: string; go: string };
  pictures: Record<'hero' | 'versions' | 'holes' | 'slit' | 'tabs', Picture>;
  states: Record<StateId, string>;
  channels: { stable: string; beta: string };
  sample: {
    program: string;
    /** Newest first. */
    releases: { version: string; channel: 'stable' | 'beta'; date: string; platforms: string; note?: string }[];
    environments: { name: string; short: string }[];
    /** Rows follow `environments`, columns follow `releases`. */
    cells: Cell[][];
  };
  landing: {
    hero: { label: string; headline: string; lede: string };
    pages: Head & { lines: Record<string, string> };
    compatibility: Head & { link: string };
    statement: { text: string; sub: string };
    program: Head & { items: Item[] };
    neighbours: Head & { link: string; tiles: { kind: KindId; line: string }[] };
    closing: string;
  };
  catalogue: {
    hero: { headline: string; lede: string };
    releases: Head;
    list: { caption: string; columns: [string, string, string, string]; points: Item[] };
    statement: { text: string; sub: string };
    identity: Head & { rows: Item[] };
    browse: Head & { points: Item[] };
    closing: string;
  };
  compatibility: {
    hero: { headline: string; lede: string };
    anatomy: Head & { rows: Item[] };
    states: Head & { body: Record<StateId, string>; caption: string; corner: string };
    conditions: Head & { example: string; candidates: Item[]; result: string };
    statement: { text: string; sub: string; note: string };
    closing: string;
  };
  reviews: {
    hero: { headline: string; lede: string };
    rules: Head & { facts: Item[] };
    anatomy: Head & { points: Item[] };
    statement: { text: string; sub: string };
    picks: Head & { rows: Item[] };
    closing: string;
  };
  updates: {
    hero: { headline: string; lede: string };
    levels: Head & { rows: Item[] };
    targets: Head & { rows: Item[] };
    changelog: Head & { more: string; caption: string; start: string };
    statement: { text: string; sub: string };
    closing: string;
  };
  publishing: {
    hero: { headline: string; lede: string };
    record: Head & { caption: string; fields: Item[] };
    steps: Head & { steps: Item[]; note: string };
    licence: Head & { points: Item[] };
    lock: Head & { points: Item[] };
    statement: { text: string; sub: string; note: string };
    maintenance: Head & { rows: Item[] };
    closing: string;
  };
  connections: {
    hero: { headline: string; lede: string };
    relations: Head & { rows: Item[] };
    kinds: Head & { rows: { kind: KindId; line: string; body: string }[] };
    people: Head;
    statement: { text: string; sub: string };
    closing: string;
  };
}

const site = {
  id: 'software',
  base: '/software/',
  name: 'Software',
  theme: { kind: 'software' },
  next: 'visual-novels',
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: {
        title: 'Software: editions, platforms, and tested compatibility',
        description:
          'Every software product has one identity in REZICS, with each release listed by platform. Compatibility is based on tests with a method and date. Licenses, ways to get the software, ratings, and update notices are linked to the same identity.',
      },
    },
    {
      slug: 'catalogue',
      label: 'Catalog and versions',
      meta: {
        title: 'Catalog and versions: one identity per program',
        description:
          'The REZICS software catalog gives each program one identity. Releases on each platform are archived separately, with versions ordered by their ecosystem’s rules. Forks have their own entries linked to the original project. Filter results include an accurate count.',
      },
    },
    {
      slug: 'compatibility',
      label: 'Compatibility',
      meta: {
        title: 'Compatibility: dated test results',
        description:
          'Software compatibility in REZICS is based on recorded tests with a metric, method, conditions, and date, along with the applicable version and files. Compatible, incompatible, unknown, outdated, and unavailable are shown separately. Without a test, the result is unknown.',
      },
    },
    {
      slug: 'reviews',
      label: 'Reviews',
      meta: {
        title: 'Reviews: ratings belong to a release',
        description:
          'In REZICS, a software rating can apply to one release and includes its count, distribution, and community. Overall ratings across versions are calculated separately with the method stated. Community picks link to the discussion behind each decision.',
      },
    },
    {
      slug: 'updates',
      label: 'Follow updates',
      meta: {
        title: 'Follow updates: releases and change notes',
        description:
          'Follow a program, developer, or set of filters in REZICS to receive releases and change notes at the notification level you choose. Use the REZICS inbox, push notifications, or email summaries.',
      },
    },
    {
      slug: 'publishing',
      label: 'Publishing and licenses',
      meta: {
        title: 'Publishing and licenses: for software publishers',
        description:
          'Developers maintain their program pages on REZICS and publish releases for each platform with file sizes, hashes, change notes, and screenshots. They declare the exact license terms and version and explain how to get the software.',
      },
    },
    {
      slug: 'connections',
      label: 'Relations',
      meta: {
        title: 'Relations: dependencies and extensions',
        description:
          'In REZICS, programs link to game mods that depend on them, MCP servers that let AI agents operate them, skills that require them, and related APIs. Each relation has a direction and source and can be found from either end.',
      },
    },
  ],
  strings: {
    common: { nextPage: 'Next page', nextSite: 'Next site', sample: 'Example data: the program, systems, versions, and dates are fictional.', go: 'Go to' },
    pictures: {
      hero: { name: 'hero', alt: 'Sheets of deep teal paper fan out in a staggered stack, with a light blue sheet on top.' },
      versions: { name: 'versions', alt: 'Three folded sheets of deep teal paper sit in a row, each wrapped with a gray blue strip.' },
      holes: { name: 'holes', alt: 'A sheet of deep teal paper has a neat row of round holes, with a few left uncut.' },
      slit: { name: 'slit', alt: 'A sheet of deep teal paper passes through a slit in gray blue paper.' },
      tabs: { name: 'tabs', alt: 'Two paper tabs connect a sheet of deep teal paper to one mustard sheet and one pale green sheet.' },
    },
    states: { compatible: 'Compatible', incompatible: 'Incompatible', unknown: 'Unknown', stale: 'Outdated', unavailable: 'Unavailable' },
    channels: { stable: 'Stable', beta: 'Beta' },
    sample: {
      program: 'Example editor',
      releases: [
        { version: '4.1', channel: 'beta', date: '2026-10-06', platforms: 'System A · System B · System C', note: 'Adds split view and fixes slow loading of large files.' },
        { version: '4.0', channel: 'stable', date: '2026-08-25', platforms: 'System A · System B · System C', note: 'Adds workspaces and removes the old plugin format.' },
        { version: '3.2', channel: 'stable', date: '2026-03-17', platforms: 'System A · System B · System C', note: 'Adds a mobile version and improves search speed.' },
        { version: '3.1', channel: 'stable', date: '2025-11-04', platforms: 'System A · System B' },
        { version: '3.0', channel: 'stable', date: '2025-06-10', platforms: 'System A · System B' },
      ],
      environments: [
        { name: 'System A · 64 bit', short: 'A 64' },
        { name: 'System A · 32 bit', short: 'A 32' },
        { name: 'System B · 64 bit', short: 'B 64' },
        { name: 'System C · Mobile', short: 'C Mobile' },
      ],
      // Columns follow `releases` (4.1, 4.0, 3.2, 3.1, 3.0).
      cells: [
        [['unknown'], ['compatible', '2026-08-29'], ['compatible', '2026-03-20'], ['compatible', '2025-11-09'], ['compatible', '2025-06-14']],
        [['unavailable'], ['unavailable'], ['incompatible', '2026-03-22'], ['compatible', '2025-11-10'], ['stale', '2025-06-15']],
        [['compatible', '2026-10-09'], ['unknown'], ['compatible', '2026-03-20'], ['compatible', '2025-11-12'], ['unknown']],
        [['unknown'], ['compatible', '2026-09-02'], ['stale', '2026-03-25'], ['unavailable'], ['unavailable']],
      ],
    },

    landing: {
      hero: {
        label: 'Software',
        headline: 'Every release has dated compatibility tests.',
        lede: 'REZICS gives each program one identity with a record of every release on each platform. Environments without tests are marked unknown. Licenses, ways to get the software, ratings, and discussions all link to the same identity.',
      },
      pages: {
        label: 'Six pages',
        headline: 'From finding a program to publishing your own.',
        lines: {
          catalogue: 'One identity, a record for each release',
          compatibility: 'Dated test results show what runs',
          reviews: 'Ratings name the edition',
          updates: 'Follow programs, developers, and filters',
          publishing: 'Releases, licenses, and access for developers',
          connections: 'Mods, MCP servers, skills, and APIs',
        },
      },
      compatibility: {
        label: 'Compatibility',
        headline: 'A compatibility claim needs a test.',
        lead: 'A developer’s list of supported platforms is a claim. A test is a result confirmed by someone in a specific environment on a specific date, with the method and conditions recorded. REZICS uses tests to answer whether software runs.',
        link: 'See how compatibility is recorded',
      },
      statement: {
        text: 'No test means unknown;',
        sub: 'it is not assumed compatible or incompatible.',
      },
      program: {
        label: 'One program',
        headline: 'What connects to one identity.',
        items: [
          { title: 'Releases', body: 'Each release on each platform is archived, with stable and beta releases marked separately.' },
          { title: 'Compatibility', body: 'Operating system, system version, and processor architecture are checked for the same release.' },
          { title: 'License', body: 'The license terms and version are recorded with who declared them and when.' },
          { title: 'How to get it', body: 'Official downloads, stores, and package registries appear together. External links are labeled as such.' },
          { title: 'Ratings', body: 'Rate one edition on its own, with counts and distributions shown beside the score.' },
          { title: 'Follow', body: 'Follow a program or maintainer to receive new versions and announcements.' },
        ],
      },
      neighbours: {
        label: 'Relations',
        headline: 'Programs rarely stand alone.',
        lead: 'Game mods depend on them, MCP servers let AI agents operate them, and skills may need them to run. Each relation has a direction and source and can be found from either end.',
        link: 'See all relations',
        tiles: [
          { kind: 'games', line: 'Programs required by mods and loaders' },
          { kind: 'mcp', line: 'Servers that let agents operate a program' },
          { kind: 'skills', line: 'Skills that list it as a dependency' },
          { kind: 'apis', line: 'APIs it provides or calls' },
        ],
      },
      closing: 'One program, one identity, every release recorded.',
    },

    catalogue: {
      hero: {
        headline: 'Versions change. Identity stays.',
        lede: 'If a program changes its name, moves to another package registry, or releases on a new platform, it remains the same entry in REZICS. Each release gets its own record of what was actually shipped.',
      },
      releases: {
        label: 'Releases',
        headline: 'Each release is archived separately.',
        lead: 'A release record lists its version, channel, date, platform, and the files it actually contained. Incorrect details can be corrected with evidence. A later patch becomes a new record.',
      },
      list: {
        caption: 'Example editor releases, newest first.',
        columns: ['Version', 'Channel', 'Date', 'Platform'],
        points: [
          { title: 'Channel', body: 'Stable and beta releases are marked separately. The latest release may not be the right one for you.' },
          { title: 'Version order', body: 'Versions follow the rules of the program’s ecosystem, rather than being compared as text.' },
          { title: 'Platform', body: 'The same version released on different platforms has a separate record for each.' },
        ],
      },
      statement: {
        text: 'REZICS does not count downloads',
        sub: 'or use them for rankings. Lists state which ranking method they use.',
      },
      identity: {
        label: 'Names and identity',
        headline: 'The same name does not mean the same program.',
        rows: [
          { title: 'Names in multiple languages', body: 'Chinese names, original names, and common abbreviations are recorded so you can find a program by any of them.' },
          {
            title: 'Identifiers',
            body: 'Names, URLs, and IDs from package registries are recorded with their sources. The same string in two registries does not automatically identify the same program.',
          },
          { title: 'Forks', body: 'A forked project gets its own entry, maintainers, and releases, linked back to the original as a fork.' },
          { title: 'Merge and split', body: 'Duplicate entries are merged with evidence, and old URLs keep working. Incorrect merges can be reverted without double counting saves or ratings.' },
        ],
      },
      browse: {
        label: 'Filters',
        headline: 'Conditions must match one release.',
        lead: 'To find a stable release with an open source license that runs on 64 bit System B, REZICS lists only programs with a single release matching every condition. Conditions spread across two releases do not qualify.',
        points: [
          { title: 'Count', body: 'Results include a count. While it is still being calculated, the count says “at least.”' },
          { title: 'Browse to the end', body: 'Browse the list to the last result. It does not stop at one page.' },
          { title: 'Save as a view', body: 'Save filters you use often as a view, then follow it.' },
        ],
      },
      closing: 'Versions change. The records remain available.',
    },

    compatibility: {
      hero: {
        headline: 'Compatibility comes from recorded tests.',
        lede: 'A developer’s list of supported platforms is a claim. A test is a result confirmed by someone in a specific environment on a specific date. REZICS records them separately and bases compatibility on tests.',
      },
      anatomy: {
        label: 'One test',
        headline: 'What a test record includes',
        lead: 'A test record includes these details so others can repeat it and understand where the result applies.',
        rows: [
          { title: 'Metric', body: 'What was tested: whether it launches, completes a task, or reaches a value. Values include their units.' },
          { title: 'Method', body: 'Steps are clear enough for someone else to repeat the test.' },
          { title: 'Conditions', body: 'The operating system version, processor architecture, and relevant settings are tied to one test. A changed condition requires a new test.' },
          { title: 'Files', body: 'The test names the applicable version and files and includes verified hashes. A hash identifies these bytes only; it does not verify other files.' },
          { title: 'Date and submitter', body: 'Each test has a date and submitter. People and AI agents can submit tests. Automated accounts identify themselves as automated.' },
          { title: 'Acceptance', body: 'Tests are submitted as proposals and count only after acceptance. Challenges are marked separately without removing the earlier decision.' },
        ],
      },
      states: {
        label: 'Five states',
        headline: 'Five states, each with its own meaning.',
        lead: 'Alongside compatible and incompatible, three other states are often grouped together. REZICS keeps them separate.',
        body: {
          compatible: 'At least one accepted test completed successfully in this environment, with its date recorded.',
          incompatible: 'An accepted test shows that it does not run. Evidence and date are included.',
          unknown: 'There are no tests. Labels, categories, and promotional copy are not used to infer compatibility.',
          stale: 'The test is past its validity period. The result remains visible but is not treated as current.',
          unavailable: 'No release is available for this environment, so compatibility cannot be assessed.',
        },
        caption: 'Example editor compatibility by version and environment.',
        corner: 'Environment',
      },
      conditions: {
        label: 'Conditions',
        headline: 'Conditions apply to one test record.',
        lead: 'When filtering by compatibility, every condition must match the same release and the same test. Combining results from different versions may look like a match, but the software may not run when installed.',
        example: 'For example, the conditions are “64 bit System B, stable, compatible, version 4.0 or later.” The example editor has two candidate releases:',
        candidates: [
          { title: '4.1 beta', body: 'Compatible. It has been tested, but is not a stable release.' },
          { title: '4.0 stable', body: 'Unknown. It is a stable release, but no one has tested it.' },
        ],
        result: 'The conditions are split across two releases, so there is no match. REZICS says so without silently relaxing the filters.',
      },
      statement: {
        text: 'Every label has evidence and a scope;',
        sub: 'an external link alone proves nothing.',
        note: 'The same applies to scan results. They describe one file and one scan.',
      },
      closing: 'Let test results show what runs.',
    },

    reviews: {
      hero: {
        headline: 'Name the release before you rate it.',
        lede: 'A program can change significantly between versions. A rating can apply to the whole program or to one release. A rating for a specific release stays with that release.',
      },
      rules: {
        label: 'Rating rules',
        headline: 'Averages require enough ratings.',
        facts: [
          { title: '5', body: 'An average appears after 5 ratings by default. Until then, only the count and distribution appear, along with how many more ratings are needed.' },
          { title: '50', body: 'Rankings use a weighted score and require at least 50 ratings by default. The weighted average and weights are public.' },
          { title: '1', body: 'Each person has one active rating for an item and question. Changing a rating updates that one record.' },
        ],
      },
      anatomy: {
        label: 'Questions and subjects',
        headline: 'Each score answers a specific question.',
        lead: 'The rating question, scale, and subject are defined together. Scores for different questions are not combined, and a release rating is not automatically included in the program’s overall rating.',
        points: [
          { title: 'Side by side', body: 'Site wide and community scores appear side by side, not blended into one number.' },
          { title: 'Across versions', body: 'An overall score across versions is a separate measure with its method and number of releases stated.' },
          { title: 'No invented activity', body: 'REZICS does not fabricate reviews, votes, or participation. Automated accounts are always labeled.' },
        ],
      },
      statement: {
        text: 'When no one has rated it, nothing is shown;',
        sub: 'no zero score and no empty bar chart.',
      },
      picks: {
        label: 'Picks and alternatives',
        headline: 'Picks have an owner. Alternatives have a reason.',
        rows: [
          { title: 'Realm picks', body: 'Each program selected by a community links to the discussion behind the decision.' },
          { title: 'Alternatives', body: '“Can replace it for a specific task” is a relation with a reason and submitter, and it can be challenged.' },
          { title: 'Lists', body: 'Lists state the target environment and whether compatibility has been checked.' },
          { title: 'Recommendations', body: 'Each recommendation explains why, such as your followed filters or a community decision. Turn recommendations off at any time.' },
          { title: 'Report a problem', body: 'A problem with one release is discussed on that release’s page so readers know which one it concerns.' },
        ],
      },
      closing: 'Ratings show the release and number of people.',
    },

    updates: {
      hero: {
        headline: 'Choose how much to hear about new releases.',
        lede: 'Follow a program to receive its new releases and change notes. Choose every update, only important ones, or no notifications.',
      },
      levels: {
        label: 'Notification level',
        headline: 'Three levels for each follow.',
        lead: 'Change your choice at any time. You can also set a separate notification level for an important release.',
        rows: [
          { title: 'All', body: 'Get a notice for every release, announcement, and post.' },
          { title: 'Highlights', body: 'Get notices for new releases, announcements, and community decisions.' },
          { title: 'Off', body: 'Receive only replies and mentions that concern you directly.' },
          { title: 'Where to receive them', body: 'Use the REZICS inbox, push notifications, or email summaries. Unsubscribe from email with one click.' },
        ],
      },
      targets: {
        label: 'What to follow',
        headline: 'Follow more than a program.',
        rows: [
          { title: 'Program', body: 'Its new releases and change notes.' },
          { title: 'Developer or organization', body: 'New entries and announcements they publish.' },
          { title: 'Filters', body: 'Save “open source text editors that run on System B” as a view. Matching programs appear in a home page tab, and you can get summaries too.' },
          { title: 'Realm', body: 'Community announcements and decisions, such as new picks.' },
        ],
      },
      changelog: {
        label: 'Change notes',
        headline: 'Change notes stay with each release.',
        lead: 'Change notes are recorded for every release. When you move from 3.2 to 4.1 beta, read what changed in each version in order.',
        more: 'The “Continue” section on the home page brings compatible package updates together with the next chapter you have not finished. Package updates and rollbacks are locked to exact files, so a rollback restores the original files.',
        caption: 'Example editor change notes, newest first.',
        start: 'Start reading here',
      },
      statement: {
        text: 'Your scripts and AI agents',
        sub: 'read the same update events and resume from the last position after an interruption.',
      },
      closing: 'Choose what you receive and how often.',
    },

    publishing: {
      hero: {
        headline: 'Make every release easy to find and verify.',
        lede: 'Developers maintain their programs on REZICS with the version, platform, files, change notes, license terms, and download location for each release. Followers, people using filters, and AI agents all read the same record.',
      },
      record: {
        label: 'One release',
        headline: 'Fields in a release record',
        lead: 'A release cannot be submitted until all required fields are complete. After submission, the record is archived.',
        caption: 'Example editor version 4.0 release record.',
        fields: [
          { title: 'Version', body: '4.0' },
          { title: 'Channel', body: 'Stable' },
          { title: 'Date', body: '2026-08-25' },
          { title: 'Platform', body: 'System A · 64 bit, System B · 64 bit, System C · Mobile' },
          { title: 'File size', body: '48.2 MB' },
          { title: 'Hash (excerpt)', body: 'sha256 9f2c41d7e41a' },
          { title: 'License', body: 'Example open source license, version 2.0' },
          { title: 'How to get it', body: 'Developer website (external link)' },
          { title: 'Change notes', body: 'Adds workspaces and removes the old plugin format.' },
        ],
      },
      steps: {
        label: 'Release process',
        headline: 'Five steps to publish a release.',
        steps: [
          { title: 'Confirm maintainer access', body: 'Confirm that you can maintain the project before updating its page and releases.' },
          { title: 'Enter release details', body: 'Add the version, channel, date, and files for each platform.' },
          { title: 'Declare the license', body: 'Choose the license terms and version. The declaration records who made it, when, and for what scope.' },
          {
            title: 'Explain how to get it',
            body: 'State who provides the files, where to download them, or which external page to visit for installation. If REZICS only links to another site, it does not say that REZICS installs the software.',
          },
          { title: 'Publish', body: 'The release becomes an archived record. Followers receive a notice based on their notification settings.' },
        ],
        note: 'Complete these steps through the API and MCP to automate each release in your publishing workflow.',
      },
      licence: {
        label: 'License',
        headline: 'State the exact license terms and version.',
        lead: 'A license declaration records the exact terms and version, declarant, date, scope, and source. License text imported from an external source is labeled with that source, not treated as your declaration.',
        points: [
          { title: 'Not a certification', body: 'A declaration is not legal certification and does not change anyone’s editing permissions.' },
          { title: 'Say when it is unknown', body: 'If you do not know who licensed it or when, say that it is unknown.' },
          { title: 'Filter by license', body: 'Use license terms as a filter to find programs that meet your needs.' },
        ],
      },
      lock: {
        label: 'Dependencies',
        headline: 'Dependencies follow each ecosystem’s rules.',
        lead: 'When REZICS resolves package dependencies, it preserves each ecosystem’s identities, version order, and dependency meaning, then locks the result to exact files.',
        points: [
          { title: 'Required and recommended', body: 'Required dependencies and conflicts are recorded separately from suggested combinations and notices.' },
          { title: 'Removed versions', body: 'Removed versions follow the rules of their ecosystem. Existing locks keep their original file selections.' },
          { title: 'Report separately', body: 'Unavailable sources, unsupported terms, and budget limits are reported separately from unsolvable dependencies.' },
          { title: 'Unavailable does not mean absent', body: 'Dependency data that cannot be found is not treated as proof that there are no dependencies.' },
        ],
      },
      statement: {
        text: 'Installing does not authorize execution;',
        sub: 'scripts in a package run only with your explicit approval.',
        note: 'The REZICS installation process accepts only verified files and places them in an isolated staging area.',
      },
      maintenance: {
        label: 'After release',
        headline: 'Maintenance after release',
        rows: [
          { title: 'Screenshots and statements', body: 'The provider is named for screenshots and privacy and accessibility statements.' },
          { title: 'Withdraw a claim', body: 'Withdraw an outdated claim about a platform without deleting the program, its releases, or discussions.' },
          { title: 'Store listings', body: 'When software is sold, prices, regions, and validity dates appear in a table. Price changes stay in the record.' },
          { title: 'Credits', body: 'Maintainers and contributors are listed by role. When a person changes projects, their identity stays the same.' },
        ],
      },
      closing: 'Publish once. Everyone reads the same record.',
    },

    connections: {
      hero: {
        headline: 'Dependencies and extensions link to the same program.',
        lede: 'Game mods, MCP servers, skills, and APIs each have an identity in REZICS. Directed relations link them to the programs they need. Follow any relation from either end.',
      },
      relations: {
        label: 'Relation names',
        headline: 'Every relation has a name and direction.',
        lead: 'Each direction of a relation has its own label, written clearly in every language.',
        rows: [
          { title: 'Requires / required by', body: 'A required dependency. Without it, the program cannot run.' },
          { title: 'Recommended with / recommended by', body: 'Works better when installed, but is not required.' },
          { title: 'Conflicts with', body: 'Installing both causes a problem. The relation appears the same from both ends.' },
          { title: 'Forked from / forked into', body: 'A project maintained independently after another group takes it over.' },
          { title: 'Can replace / can be replaced by', body: 'Another program that can do the same task, with a reason provided.' },
        ],
      },
      kinds: {
        label: 'Other kinds',
        headline: 'Connections to other kinds',
        rows: [
          {
            kind: 'games',
            line: 'Mods and loaders',
            body: 'Game mods depend on the game and often on a loader. Required and recommended dependencies are recorded separately. A loader is software too, with its own releases and compatibility.',
          },
          {
            kind: 'mcp',
            line: 'Let agents operate it',
            body: 'An MCP server that lets an AI agent operate this program has its own entry. The project, package release, deployed endpoint, and observed capabilities each have separate records.',
          },
          { kind: 'skills', line: 'List it as a dependency', body: 'Skills can declare which programs they need. Check capabilities and environment before combining them.' },
          { kind: 'apis', line: 'Provides or calls', body: 'Public APIs provided or called by a program have their own versions and evidence in API Hub, linked back to the program.' },
        ],
      },
      people: {
        label: 'People',
        headline: 'One identity for every creator.',
        lead: 'The same person can maintain software, write a novel, and review a game under one identity in REZICS. Credits connect these works, and following the creator keeps you up to date across every kind.',
      },
      statement: {
        text: 'Matching names are not enough. Relations need sources;',
        sub: 'AI agents can propose a match, but cannot silently assume two entries are the same.',
      },
      closing: 'Find the other end from either side.',
    },
  },
} satisfies MiniSite<SoftwareStrings>;

export default site;
