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
      label: 'Overview',
      meta: {
        title: 'Skill Hub: an index of AI agent skills',
        description:
          'Skill Hub indexes skills for AI agents. Read the full text, files, versions, and dated compatibility records for each skill. Ratings and discussions are tied to a version, so you can review them before use.',
      },
    },
    {
      slug: 'directory',
      label: 'Directory',
      meta: {
        title: 'Skill Hub directory: one skill per row',
        description:
          'Find a skill in Skill Hub with a short description. Filter by any indexed attribute and browse every result. Follow other people’s lists and saved views to hear when new skills match your criteria.',
      },
    },
    {
      slug: 'versions',
      label: 'Versions and files',
      meta: {
        title: 'Skill pages: full text, files, and versions',
        description:
          'Skill pages show the full SKILL.md and list each file’s role and hash. Executable files are marked. Each version preserves its content, license, and source, and new versions do not overwrite old ones.',
      },
    },
    {
      slug: 'evidence',
      label: 'Evidence and reviews',
      meta: {
        title: 'Skill compatibility records and reviews',
        description:
          'Compatibility statements from skill authors are declarations. Skill Hub separately records who used a skill, with which AI agent and version, in which language, and on what date. Ratings and discussions are also tied to a version.',
      },
    },
    {
      slug: 'use',
      label: 'Use with your agent',
      meta: {
        title: 'Give a skill to your AI agent',
        description:
          'After finding a skill in Skill Hub, read its full text and files, check compatibility records, then choose a version to download or copy. Lock its required packages and follow updates. Your AI agent can read the same data through the API and MCP.',
      },
    },
    {
      slug: 'publish',
      label: 'Publish a skill',
      meta: {
        title: 'Publish a skill on Skill Hub',
        description:
          'Import a skill folder that follows the format into Skill Hub. Every byte is preserved, scripts are not run, and unfamiliar fields are kept. Each release fixes its files, license, and source as a new version.',
      },
    },
  ],
  strings: {
    ui: {
      nextPage: 'Next page',
      nextSite: 'Next site',
    },
    landing: {
      hero: {
        eyebrow: 'Skill Hub',
        headline: ['Read every layer', 'before giving a skill to an AI agent.'],
        lede: 'Review the skills used by AI agents in Skill Hub. Read the full instructions, files, versions, and dated usage records before choosing.',
        pic: {
          src: 'fold',
          alt: 'A lime green sheet is folded and partly open. Ivory, pale green, and light blue sheets are stacked beneath it, each edge visible.',
        },
      },
      layers: {
        eyebrow: 'Reading order',
        headline: ['Read a skill in three layers,', 'in the order an AI agent does.'],
        lead: 'Example: a skill that organizes chapter characters. Read its name and description first, then the full instructions, and finally the files needed for the task. Skill Hub presents them in the same order.',
        rows: [
          {
            title: 'One line',
            body: 'The chapter-cast description says, “List the characters in a chapter with passage locations.” The agent reads this first to decide whether the skill fits the task.',
          },
          {
            title: 'One page',
            body: 'SKILL.md says, “List characters and aliases first, then include the source location. Mark anything without a source as not found.” The agent reads these steps and limits when the task involves organizing characters.',
          },
          {
            title: 'Files used',
            body: 'references/aliases.md lists the format for matching characters, aliases, and source locations. The agent reads this reference file only when it needs to compare aliases. Other files remain listed alongside it.',
          },
        ],
      },
      files: {
        eyebrow: 'Files',
        headline: ['Every file is listed,', 'and executable files are marked.'],
        body: 'Every file in SKILL.md, scripts/, references/, assets/, and any folders not named in the specification has a recorded path, role, and hash. Files mentioned in SKILL.md but missing from the folder are marked too.',
        link: 'See versions and files',
        pic: {
          src: 'folder',
          alt: 'A lime green sheet is folded into a folder with its cover raised. Ivory, pale green, light blue, and mustard sheets inside each show an edge.',
        },
      },
      statement: {
        text: 'An index is not an endorsement.',
        muted:
          'Read the full text and files before deciding. REZICS stores skills when they are imported and does not run their instructions.',
      },
      pages: {
        eyebrow: 'This site',
        headline: ['From finding a skill', 'to publishing your own.'],
        tiles: [
          { slug: 'directory', line: 'Find skills with a short description' },
          { slug: 'versions', line: 'Full text, every file, every version' },
          { slug: 'evidence', line: 'Who used it and under what conditions' },
          { slug: 'use', line: 'Choose a version for your AI agent' },
          { slug: 'publish', line: 'One folder, one identity' },
        ],
      },
      neighbours: {
        eyebrow: 'Connected to',
        headline: ['A skill is text and files;', 'its dependencies have their own pages.'],
        lead: 'Packages declared by a skill have their own versions in software. A creator’s skills and MCP servers link to the same identity. The local REZICS Wiki toolkit also includes a skill that guides AI agents in proposing sourced facts from books and visual novels.',
        tiles: [
          { to: 'software', line: 'Packages required by a skill' },
          { to: 'mcp', line: 'Tools used by agents' },
          { to: 'books', line: 'Propose sourced facts chapter by chapter' },
          { to: 'visual-novels', line: 'Find sources in game scripts' },
        ],
      },
      closing: {
        title: 'Start with one line.',
        body: 'Search for a skill on REZICS. Read its full text, files, and records before giving it to your AI agent.',
      },
    },
    directory: {
      head: {
        headline: ['One row, one skill,', 'one sentence.'],
        lede: 'Each directory row has just a skill name and the author’s one sentence description. An AI agent uses it to decide whether the skill fits a task. You can start your choice here too.',
      },
      specimens: {
        eyebrow: 'Directory example',
        headline: ['Read one line first,', 'then decide if it fits.'],
        lead: 'These names and descriptions are examples. The two skills handle different tasks, and one sentence explains the difference.',
        rows: [
          { title: 'chapter-cast', body: 'Organizes chapter characters and aliases with passage locations to check a character list.' },
          { title: 'quote-check', body: 'Checks each quote against its source and lists source locations and quotes with no source.' },
        ],
      },
      filters: {
        eyebrow: 'Filters',
        headline: ['Filter by what matters to you,', 'and combine conditions.'],
        lead: 'Combine any available filter fields.',
        rows: [
          { title: 'Search', body: 'Search for words that describe your task, such as “organize chapter characters” or “check quotes.”' },
          { title: 'License', body: 'Show only skills with a specific license.' },
          { title: 'Language', body: 'Filter by the language of the instructions or the language of a recorded task.' },
          { title: 'Compatibility records', body: 'Show only skills with records for a specific AI agent and version.' },
          { title: 'Updated', body: 'Sort or filter by the latest release date.' },
        ],
      },
      statement: {
        text: 'Browse all the way to the last result.',
        muted: 'Counts are labeled as exact or estimated, and later results stay visible.',
      },
      lists: {
        eyebrow: 'Lists',
        headline: ['A sequence someone put together.'],
        body: 'A list arranges the items used in a workflow and explains why each one was chosen. It can include MCP servers, APIs, or software alongside skills. Export or follow the whole list to see new items as they are added.',
        pic: {
          src: 'bundle',
          alt: 'Five sheets of different sizes in lime green, ivory, light blue, and mustard are stacked and tied with a lime green strip.',
        },
      },
      views: {
        eyebrow: 'Views',
        headline: ['Save your filters,', 'then follow the view.'],
        lead: 'Save a set of filters as a view. Follow it to see new skills that match your criteria in your feed.',
        rows: [
          { title: 'Search', body: 'Set your filters.' },
          { title: 'View', body: 'Save it with a name.' },
          { title: 'Follow', body: 'Get notified when there are new results.' },
        ],
      },
      end: {
        next: 'When you find one, open it.',
        closing: 'The skill you need may be in the next row.',
      },
    },
    versions: {
      head: {
        headline: ['Open a skill,', 'and see everything inside.'],
        lede: 'The skill page is the second layer: the original SKILL.md and every file it includes. Before giving it to an AI agent, you can read every word the agent will see.',
      },
      frontmatter: {
        eyebrow: 'SKILL.md',
        headline: ['The first few lines,', 'as REZICS reads them.'],
        lead: 'Example of a skill folder.',
        rows: [
          {
            key: 'name',
            value: 'chapter-cast',
            body: 'The name uses lowercase letters, numbers, and hyphens, and must match the folder name. It identifies a skill, but matching names alone do not prove two skills are the same.',
          },
          {
            key: 'description',
            value: 'List the characters in a chapter with passage locations. Use when organizing a character list.',
            body: 'This is the sentence shown in the directory and the first sentence an AI agent reads.',
          },
          {
            key: 'license',
            value: 'Apache-2.0',
            body: 'The license is recorded on the version along with who declared it and when. It is a declaration, not a legal review.',
          },
          {
            key: 'compatibility',
            value: 'Requires an agent that can read local files',
            body: 'Compatibility conditions written by the author are marked “independent verification needed,” not treated as confirmed.',
          },
          {
            key: 'allowed-tools',
            value: 'read-file',
            body: 'Allowed tools are also declarations, marked “independent verification needed.”',
          },
          { key: 'Other fields', body: 'Fields outside the specification are preserved as written and listed separately.' },
        ],
      },
      files: {
        eyebrow: 'Files',
        headline: ['One row for every file.'],
        lead: 'Each file has a recorded path, role, and hash. The downloaded bytes match the page record.',
        rows: [
          { title: 'Instructions', path: 'SKILL.md', body: 'The full text appears exactly as written, without changes.' },
          {
            title: 'Scripts',
            path: 'scripts/',
            mark: 'Executable',
            body: 'Executable files are marked. REZICS stores them on import but does not run them.',
          },
          { title: 'References', path: 'references/', body: 'Documents the AI agent reads when it needs more detail.' },
          { title: 'Assets', path: 'assets/', body: 'Templates, images, and data files are also listed with their paths and hashes.' },
          { title: 'Other files', body: 'Folders and files not named in the specification are listed too.' },
          { title: 'Missing files', mark: 'Missing', body: 'Files mentioned in SKILL.md but absent from the folder are marked.' },
        ],
      },
      history: {
        eyebrow: 'Versions',
        headline: ['Every version stays available.'],
        body: [
          'Every change after release becomes a new version. The previous files and hashes stay as they were, and the version you use is never replaced.',
          'Versions are ordered by release date, each with a change record. Browse as far back as you need. People who follow the skill receive these records.',
        ],
        pic: {
          src: 'fan',
          alt: 'Five sheets fan out from one corner, with lime green in front, each sheet lighter than the last, and ivory at the back.',
        },
      },
      historyExample: {
        eyebrow: 'Version example',
        headline: ['One skill,', 'two dated versions.'],
        lead: 'Example: dates and content for chapter-cast. Each version fixes its files and hashes. A new version does not overwrite the previous one.',
        rows: [
          { title: '1.1.0', body: 'October 19, 2026. Adds rules for matching character aliases and includes the related reference file.' },
          { title: '1.0.0', body: 'October 12, 2026. Records where characters first appear. The original files remain unchanged, and reviews and comments still refer to this version.' },
        ],
      },
      packages: {
        eyebrow: 'Packages',
        headline: ['Required packages are listed as stated;', 'unclear details are labeled.'],
        rows: [
          {
            title: 'Separate ecosystems',
            body: 'Each package is listed under its ecosystem. Packages with the same name in different ecosystems are not treated as the same package.',
          },
          { title: 'Required and optional', body: 'Each package is marked as required or optional.' },
          { title: 'Missing and unsupported', body: 'Missing declarations and ecosystems outside the supported range are marked as missing or unsupported.' },
        ],
      },
      statement: {
        text: 'Every skill has a byline.',
        muted:
          'Authors and maintainers are listed by role and linked to their other work and reviews.',
      },
      end: {
        next: 'Read its contents, then see who has used it.',
        closing: 'Read a skill before giving it to an AI agent.',
      },
    },
    evidence: {
      head: {
        headline: ['A declaration is a declaration,', 'and a record is a record.'],
        lede: 'An author can state which environments a skill supports. That is a declaration. A record documents someone using an AI agent to do a task, with the date and method. Skill Hub keeps them separate.',
      },
      declaration: {
        eyebrow: 'Declaration',
        headline: ['The author writes', 'a compatibility statement.'],
        lead: 'REZICS preserves compatibility conditions and allowed tools from SKILL.md as written. They are marked as needing independent verification, not treated as confirmed.',
        code: '# Beginning of SKILL.md (example)\ncompatibility: For AI agents that support skill folders',
        codeLabel: 'Example compatibility statement at the start of SKILL.md',
        caption: 'REZICS records this line as written and marks it as needing independent verification.',
      },
      record: {
        eyebrow: 'Record example',
        headline: ['One version,', 'eight recorded details.'],
        lead: 'Example record format for chapter-cast 1.1.0. The date, AI agent version, method, and result are examples showing how to read a record.',
        rows: [
          { title: 'Task', body: 'List characters and aliases from a chapter excerpt with source locations to check a character list.' },
          { title: 'AI agent', body: 'A local agent that can read the skill folder, with no extra tools enabled.' },
          { title: 'Agent version', body: 'Example client version 1.0.0, recorded as the version used for this observation.' },
          { title: 'Skill version', body: 'chapter-cast 1.1.0, an example version that adds alias matching.' },
          { title: 'Language', body: 'Input and output are in Traditional Chinese, with aliases kept in their original form.' },
          { title: 'Date', body: 'October 19, 2026, the same date as the example 1.1.0 version on the versions page.' },
          { title: 'Method', body: 'Use a short passage with three characters and two alias pairs, then compare each result with its source location.' },
          { title: 'Observation', body: 'The example result lists three characters, two alias pairs, and their locations. It does not claim the same result for other texts or agents.' },
        ],
      },
      rules: {
        eyebrow: 'How to read records',
        headline: ['How to read a record'],
        rows: [
          { title: 'No record does not mean it cannot be used', body: 'A combination with no recorded use is labeled “no record,” not “incompatible.”' },
          {
            title: 'Older records keep their dates',
            body: 'Each record shows its date and the version it applies to. After an AI agent or skill is updated, older records are not presented as results for the new version.',
          },
          { title: 'Keep conflicting results', body: 'When two records reach different conclusions, both stay with their methods so you can compare them.' },
          {
            title: 'Agents can submit records too',
            body: 'An agent can submit a record if it identifies itself as an agent, names its operator, and describes its method. A person reviews it before publication.',
          },
          { title: 'Withdrawn support stays in history', body: 'A source can withdraw only its own support. The history remains, and records from other sources are unaffected.' },
        ],
      },
      opinions: {
        eyebrow: 'Ratings and discussion',
        headline: ['Ratings and comments', 'stay with their version.'],
        rows: [
          {
            title: 'Ratings',
            body: 'A rating belongs only to the version it covers. A new version has its own ratings. Overall scores across versions are calculated separately with the method stated. Every score shows the number of ratings and their distribution. No average appears when there are too few ratings.',
          },
          {
            title: 'Comments',
            body: 'Comments about a problem or use case record the version at the time. After a skill is updated, older comments still refer to the original version so readers do not mistake them for comments about the new one.',
          },
        ],
      },
      statement: {
        text: 'Records are not a safety guarantee.',
        muted:
          'Each observation has its environment and version. Read the instructions and scripts before using a skill.',
      },
      end: {
        next: 'Read the records, then put it to use.',
        closing: 'Read the records before you decide.',
      },
    },
    use: {
      head: {
        headline: ['Read it first,', 'then give it to your AI agent.'],
        lede: 'A skill contains instructions for an agent and may include executable scripts. Read it in Skill Hub first. If you decide to use it, take the exact version you chose.',
      },
      steps: {
        eyebrow: 'Six steps',
        headline: ['Six steps from discovery', 'to use.'],
        rows: [
          { title: 'Find', body: 'Search the directory by description or choose from someone else’s list.' },
          { title: 'Read', body: 'Open the skill page and read the full SKILL.md. Check which files it includes and which can run.' },
          { title: 'Check records', body: 'See if anyone has used it with your AI agent and version, and how recent the record is.' },
          {
            title: 'Choose and get a version',
            body: 'Choose a version and download its folder. The files match the hashes on the page. You can also copy only the SKILL.md instructions. Put them where your agent reads skills, as described by the agent.',
          },
          {
            title: 'Lock packages',
            body: 'Lock exact versions and files for supported package conditions. If a package cannot be resolved, the reason is shown. Installing a package does not authorize its scripts to run.',
          },
          { title: 'Follow', body: 'Follow the skill. When a new version is released, read the changes before deciding whether to switch.' },
        ],
      },
      agent: {
        eyebrow: 'API and MCP',
        headline: ['Your AI agent', 'can read Skill Hub too.'],
        paragraphs: [
          'Every action on the website has an API operation. Agents can search skills and read full text and file lists through the REZICS API or MCP server. They receive the same information you see on the page.',
          'In the REZICS API and MCP, skill text is always treated as data. Instructions in a skill do not grant anyone additional permissions.',
        ],
        link: 'See the API and MCP for developers',
      },
      later: {
        eyebrow: 'New versions',
        headline: ['When a new version arrives,', 'read the changes first.'],
        rows: [
          { title: 'Notification level', body: 'When you follow a skill, choose all updates, selected updates, or no notifications.' },
          { title: 'Review changes', body: 'Every new version has a change record. Compare its files and hashes with the version you have.' },
          { title: 'Keep the version you have', body: 'If you do not want to switch, keep using your version. Its page does not change into the new one.' },
          { title: 'Report a problem', body: 'Report problems in the skill discussion and include the version and AI agent you used.' },
          {
            title: 'Report abuse',
            body: 'Report a skill that does something beyond its description. No account is required. Distributing malware violates the REZICS terms of use.',
          },
        ],
      },
      end: {
        next: 'Write one of your own.',
        closing: 'Choose a version for your AI agent.',
      },
    },
    publish: {
      head: {
        headline: ['One folder,', 'published as one identity.'],
        lede: 'Skill Hub accepts skills in the required format: one folder with a SKILL.md file. After import, the skill has its own identity, page, and first version.',
      },
      import: {
        eyebrow: 'Import',
        headline: ['Import stores files,', 'it does not run them.'],
        body: 'After this step, the folder becomes an identified skill. None of its files are changed.',
        pic: {
          src: 'slit',
          alt: 'A slit runs through the middle of a lime green sheet. An ivory strip enters the slit from above and exits the bottom edge, with a corner of mustard paper underneath.',
        },
      },
      steps: {
        eyebrow: 'Six steps',
        headline: ['On import,', 'every byte stays as it is.'],
        rows: [
          { title: 'Preserve as written', body: 'Every byte of every file is saved. Paths must stay inside the folder.' },
          { title: 'Run nothing', body: 'Scripts are stored as files and never run. Instructions in SKILL.md are not followed either.' },
          { title: 'Check references', body: 'Local files mentioned in SKILL.md but missing from the folder are listed as missing.' },
          { title: 'Keep unfamiliar fields', body: 'Fields outside the specification stay in place and are listed as unparsed, without changing their meaning.' },
          {
            title: 'Do not force a skill format',
            body: 'Import stops if the name does not match the folder or the description is missing. A random folder is not turned into a skill.',
          },
          { title: 'Release a version', body: 'Each release fixes every file hash, license, and source. Later changes become a new version.' },
        ],
      },
      limits: {
        eyebrow: 'Limits',
        headline: ['Import limits'],
        rows: [
          { title: '128 files', body: 'Maximum number of files per import.' },
          { title: '1 MiB', body: 'Maximum combined size of all files.' },
          { title: '64 KiB', body: 'Maximum size of SKILL.md.' },
          { title: '64 characters', body: 'Maximum name length. Use lowercase letters, numbers, and hyphens only.' },
          { title: '1,024 characters', body: 'Maximum description length.' },
        ],
        after: 'Import stops if a folder exceeds these limits or does not follow the format, and explains why.',
      },
      statement: {
        text: 'The description is the first line an agent reads.',
        muted:
          'Say what the skill does and when to use it, clearly enough for people and AI agents.',
        note: 'Two ways to describe the same skill.',
        rows: [
          {
            title: 'Clear',
            body: 'List the characters in a chapter with passage locations. Use when creating a character list or checking which chapter a character appears in.',
          },
          { title: 'Too vague', body: 'Work with novels.' },
        ],
      },
      credits: {
        eyebrow: 'Credits and rights',
        headline: ['Credits, rights, and collaboration'],
        rows: [
          { title: 'Authors and maintainers', body: 'Each person is listed by role under their REZICS identity, which others can follow.' },
          { title: 'License', body: 'The license you declare is recorded on every version with who declared it and when.' },
          { title: 'You keep your rights', body: 'Uploading a skill does not transfer your intellectual property rights.' },
          {
            title: 'Maintain with AI agents',
            body: 'Agents can propose changes with a target version, change summary, evidence, and method, and identify themselves as agents. Changes are applied after human review, with a receipt for each application.',
          },
          { title: 'Revert', body: 'An applied change can be reverted. The reversion is recorded as a correction without rewriting the original history.' },
        ],
      },
      end: {
        next: 'Beyond skills, there are APIs.',
        nextLine: 'Read the calls and versions together',
        closing: 'Your skill has its own identity on REZICS.',
      },
    },
  },
} satisfies MiniSite<SkillsStrings>;

export default skills;
