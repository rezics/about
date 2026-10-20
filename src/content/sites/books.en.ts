// 書庫 (books): every visible string of the books site. Design record and sources:
// src/sites/books/SITE.md and src/sites/books/facts.md. The eight part notes and the kind's
// name come from src/content/kinds.ts and are imported by the pages, never copied here.
// Shapes follow the v3 parts (V3-SPEC): hero, sections (eyebrow, heading, lead), photo rows,
// facts lists (title left, text right), statements (a line and its muted continuation), tile
// masonry and the closing.
import type { MiniSite } from '../schema';

export type TitledText = {
  title: string;
  body: string;
};

/** A section: eyebrow label, serif heading, lead text. */
type Head = { label: string; headline: string; lead?: string };

/** A large serif statement: `text`, then its muted continuation `sub`; `note` sits under it. */
export type StatementText = { text: string; sub: string; note?: string };

/** A paper still-life picture: its alt text. Files live in public/images/sites/books/. */
type Picture = { alt: string };

export type BooksStrings = {
  /** Shared labels across the site's pages; `closing` ends every page. */
  common: { contents: string; nextPage: string; nextSite: string; closing: { title: string; body: string } };
  landing: {
    hero: { headline: string; lede: string } & Picture;
    /** Photo row: the editions picture beside one fictional series' editions (示意). */
    editions: Head & { lead: string; caption: string; link: string } & Picture;
    /** Facts list: how the bookmark counts across editions and languages (示意). */
    progress: Head & { steps: TitledText[] };
    reading: StatementText;
    /** Photo row: the folded strip beside writing and publishing. */
    writing: Head & { body: string[]; link: string } & Picture;
    /** Tile masonry of the site's own pages: a short line per tile. */
    pages: Head & { rows: { slug: string; line: string }[] };
    parts: Head;
    /** Tile masonry of neighbouring kinds. */
    connections: Head & { tiles: { kind: 'anime' | 'manga' | 'visual-novels' | 'games'; line: string }[] };
  };
  work: {
    hero: { headline: string; lede: string };
    /** The example's title page (text only, per EXAMPLE-WORK.md). */
    example: { title: string; original: string; author: string; caption: string };
    sections: Head & { rows: (TitledText & { example: string })[] };
    action: Head & { rows: TitledText[]; caption: string };
    ratings: Head & { rows: TitledText[] };
    edit: Head & { rows: TitledText[] };
    languages: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  wiki: {
    /** The page head beside the cut-out picture. */
    hero: { headline: string; lede: string } & Picture;
    flow: Head & { steps: TitledText[] };
    position: Head & {
      control: string;
      positions: { label: string; chapter: number }[];
      groups: { people: string; events: string };
      source: string;
      aliases: string;
      entries: { group: 'people' | 'events'; name: string; aliases?: string; chapter: number; note: string }[];
      /** What a folded entry says: the chapter it appears in (`{n}`). */
      later: string;
      status: string;
      statusAll: string;
      rail: string;
      rules: string[];
    };
    text: StatementText & { facts: TitledText[] };
    /** Tile masonry of a wiki's own pages (示意, not links). */
    zone: Head & { tiles: { name: string; line?: string }[]; caption: string };
    review: Head & { states: TitledText[]; rules: string[] };
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  editions: {
    /** The page head beside the stack picture. */
    hero: { headline: string; lede: string } & Picture;
    releases: Head & { kinds: TitledText[] };
    translations: Head & { rows: TitledText[]; stateLabel: string; states: string[]; notes: string[] };
    sameWork: Head & { rows: TitledText[]; caption: string };
    orders: Head & {
      rows: [string, string];
      tiles: string[];
      /** Reading order as indexes into `tiles`. */
      reading: number[];
      notes: TitledText[];
    };
    isbn: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  library: {
    /** The page head beside the three strips. */
    hero: { headline: string; lede: string } & Picture;
    /** Three reads of one book as three strips, the photograph seen flat (`share`: its length). */
    reads: Head & { rows: (TitledText & { share: number })[]; caption: string };
    move: Head & { steps: TitledText[]; retention: string };
    continue: StatementText;
    shelf: Head & { rows: TitledText[] };
    privacy: Head & { rows: TitledText[] };
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  serial: {
    /** The page head beside the folded strip. */
    hero: { headline: string; lede: string } & Picture;
    safe: Head & { rows: TitledText[] };
    mirror: Head & { rows: TitledText[]; notes: string[] };
    ai: Head & { rows: TitledText[]; notes: string[] };
    world: Head & { items: string[] };
    backup: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  publish: {
    hero: { headline: string; lede: string };
    buy: Head & { steps: TitledText[]; caption: string };
    statement: Head & { rows: TitledText[]; note: string };
    distributed: Head & { rows: TitledText[]; policy: TitledText[] };
    community: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
};

const strings: BooksStrings = {
  common: {
    contents: 'On this page',
    nextPage: 'Next page',
    nextSite: 'Related kinds',
    closing: {
      title: 'Open your Library to see what to read next.',
      body: 'Every book, edition, and reading session is in one account.',
    },
  },

  landing: {
    hero: {
      headline: 'One work, every edition, and the page where you left off.',
      lede: 'Originals and translations, volumes and collections stay distinct and link to the same work. The next book, Wiki, and discussions follow your reading progress.',
      alt: 'A row of deep green sheets unfolds with a pale green strip between them, like a bookmark.',
    },
    editions: {
      label: 'Editions',
      headline: 'Each edition has its own record.',
      lead: 'For one light novel series, the Japanese original, Traditional Chinese edition, English edition, and Traditional Chinese collection are separate editions with different volumes. With or without an ISBN, and even if serialized only online, each is a work in the Library.',
      caption: 'Example: a fictional light novel series with twelve volumes.',
      link: 'Explore editions and series',
      alt: 'Green sheets of different sizes are stacked and aligned at the lower left, with one pale blue sheet.',
    },
    progress: {
      label: 'Reading progress',
      headline: 'Your bookmark sets the next book.',
      lead: 'Take the same twelve volume light novel series: the Traditional Chinese edition is up to volume 6, the Japanese edition to volume 12, and you have just finished volume 6 in Traditional Chinese.',
      steps: [
        { title: 'Each volume is a work', body: 'Each volume in a series is a work. Volume 7 is the same work in every language.' },
        { title: 'A collection counts once', body: 'A Traditional Chinese collection of volumes 1 to 3 is one edition. Finishing it marks each volume read once, without counting them twice.' },
        { title: 'Next in your language', body: 'Volume 7 is not yet available in Traditional Chinese. Your Library shows that you are caught up with the published volumes and notifies you when volume 7 is released.' },
        { title: 'Reading in another language counts', body: 'If you read volumes 7 and 8 in Japanese before switching back to Traditional Chinese, they still count as read. Translations are different texts of the same work, so progress carries over.' },
        { title: 'Owning a book does not mean you read it', body: 'Whether the book is on your shelf and whether you have finished it are separate records.' },
      ],
    },
    reading: {
      text: 'The Wiki and discussions stop where you do.',
      sub: 'People, events, and discussions beyond your progress stay hidden until you choose to show them.',
    },
    writing: {
      label: 'Writing and publishing',
      headline: 'Authors are part of the same Library.',
      body: [
        'Serial authors write, schedule, and publish chapters here. Readers pick up where they left off.',
        'Contracted creators sell authorized DRM free ebooks directly to readers, with the store page beside the work’s discussions.',
      ],
      link: 'See how serial writing works',
      alt: 'A long sheet of deep green paper is folded into pages, with the second half open and a small pale green sheet at the fold.',
    },
    pages: {
      label: 'Library pages',
      headline: 'Find, read, and write books here.',
      rows: [
        { slug: 'work', line: 'Everything about a work starts here' },
        { slug: 'wiki', line: 'Build a Wiki for a book with your AI agent' },
        { slug: 'editions', line: 'Translations, collections, and series stay distinct' },
        { slug: 'library', line: 'Record every reading' },
        { slug: 'serial', line: 'Write and read one chapter at a time' },
        { slug: 'publish', line: 'Sell DRM free ebooks directly to readers' },
      ],
    },
    parts: {
      label: 'Parts',
      headline: 'Eight parts make up the Library.',
      lead: 'The same parts make up anime, manga, and games. The Library uses these eight.',
    },
    connections: {
      label: 'Related kinds',
      headline: 'Stories in books appear in other kinds too.',
      lead: 'Start at the source work and find each adaptation.',
      tiles: [
        { kind: 'anime', line: 'Follow a relation to the anime adaptation' },
        { kind: 'manga', line: 'Manga editions have separate ratings' },
        { kind: 'visual-novels', line: 'Share a catalogue and Library with light novels' },
        { kind: 'games', line: 'A game by the same author, under the same name' },
      ],
    },
  },

  work: {
    hero: {
      headline: 'Everything about a work starts on this page.',
      lede: 'The work page is the center of the Library. Facts, ratings, your editions and progress, series and adaptations, Wiki, and discussions appear in the order you need while reading.',
    },
    example: {
      title: 'A Certain Magical Index',
      original: 'とある魔術の禁書目録',
      author: 'Kazuma Kamachi',
      caption: 'The title appears in your language, with the original beside it. The example below walks through the page from top to bottom.',
    },
    sections: {
      label: 'Eight sections',
      headline: 'Eight sections, from top to bottom.',
      lead: 'Sections that do not apply to a kind are omitted. The order and links for the rest stay the same.',
      rows: [
        {
          title: 'Identity and next step',
          body: 'Cover, title, author, and rating, with the scale, number of ratings, and scope. Your selected edition, reading status, and progress appear beside them.',
          example: 'At volume 5, the main button says “Continue reading.”',
        },
        {
          title: 'Overview',
          body: 'A spoiler free summary, basic details, tags, and content notes. Expand to see all facts, sources, and “Suggest a correction.”',
          example: 'A light novel by Kazuma Kamachi, illustrated by Kiyotaka Haimura. The main series has been published since 2004.',
        },
        {
          title: 'Your editions and where to get them',
          body: 'Your selected edition appears first, followed by matching editions and a complete list with pagination.',
          example: 'The Japanese original and Traditional Chinese and English translations each name their translator.',
        },
        {
          title: 'Volumes and relations',
          body: 'The next unread part comes first, followed by the volumes in order, then sequels and adaptations. Publication order and recommended reading order are separate.',
          example: 'The main series, New Testament, and Genesis Testament are linked as sequels.',
        },
        {
          title: 'Explore the Wiki',
          body: 'See key characters, credits, and a timeline or chapter guide limited by your progress, with links to Wiki pages.',
          example: 'At volume 5, the timeline stops at volume 5.',
        },
        {
          title: 'Ratings and reviews',
          body: 'See score distributions and counts, along with each question, rater, and subject. Filter by edition or review language. You can write a review without rating the work.',
          example: 'Ratings for the story and a translation are separate.',
        },
        {
          title: 'Discussions and communities',
          body: 'The work, each volume, and each edition have their own discussions. You do not have to join a community to read them.',
          example: 'To discuss volume 5, open the discussion beside it.',
        },
        {
          title: 'Lists and discovery',
          body: 'Lists that include the work and reading orders each give a reason. Identifiers, sources, and revision history follow below.',
          example: 'A light novel starter list explains why it includes the work.',
        },
      ],
    },
    action: {
      label: 'Primary action',
      headline: 'There is one primary action at the top.',
      lead: 'The button depends on your relationship to the work. Follow and add to list are separate actions.',
      rows: [
        { title: 'No edition selected', body: 'The button says “Choose an edition.”' },
        { title: 'Edition selected, not started', body: 'The button says “Start reading.”' },
        { title: 'In progress', body: 'The button says “Continue reading” and returns to where you stopped.' },
      ],
      caption: 'On phones, the cover becomes a small image beside the title. The identity, edition, status, and action all fit on the first screen.',
    },
    ratings: {
      label: 'Ratings',
      headline: 'The subject of each rating appears beside its score.',
      lead: 'Readers of the original rate the story, translation readers can rate the translation, and audiobook listeners can rate the narration.',
      rows: [
        { title: 'What is rated', body: 'Rate the story, translation, and narration separately, without combining them into one score.' },
        { title: 'Who the average represents', body: 'Each average says whose ratings it includes: everyone, a community you joined, or another community.' },
        { title: 'Series and volumes', body: 'Ratings for the series and each volume are separate.' },
      ],
    },
    edit: {
      label: 'Changes',
      headline: 'Edit your own records directly. Propose changes to shared facts.',
      rows: [
        { title: 'Edit directly, and undo', body: 'Reading status, progress, ratings, and lists. Undo a change with one click.' },
        { title: 'Suggest a correction for review', body: 'Facts, relations, titles, and aliases. Every proposal includes a source and is applied after human review.' },
      ],
    },
    languages: {
      text: 'The language of the interface, title, and edition',
      sub: 'are separate.',
      note: 'Changing the interface to English does not change the Traditional Chinese translation you read. A title translated into Chinese does not mean a Chinese edition exists. Reviews also show the language they were written in.',
    },
    finaleLead: 'Deeper on the work page, chapters unfold with your progress.',
  },

  wiki: {
    hero: {
      headline: 'Every book has its own Wiki.',
      lede: 'People with the book use an AI agent on their own computer to organize people, places, and events chapter by chapter. A person reviews the results before publication. Each reader sees only the chapters they have read.',
      alt: 'Several slits of different lengths are cut into a deep green sheet, with the cut pieces arranged on pale blue card beside it.',
    },
    flow: {
      label: 'From file to Wiki',
      headline: 'From one file to a Wiki.',
      steps: [
        { title: 'Your file', body: 'TXT or EPUB, kept on your own computer.' },
        {
          title: 'Your AI agent',
          body: 'The toolkit divides the text into passages with precise locations. Your agent reads chapter by chapter and records characters and their aliases, relations, events, and places.',
        },
        {
          title: 'Proposals with sources',
          body: 'Each item points to its location in the text and includes a short quotation as evidence. The agent first uses the API to find existing people and places, then submits the full set of results.',
        },
        {
          title: 'Publish after review',
          body: 'A reviewer approves the set of proposals, and the work’s Wiki is updated. When a new chapter is released, only additions and changes need to be submitted.',
        },
      ],
    },
    position: {
      label: 'Reading position',
      headline: 'The Wiki follows your chapter.',
      lead: 'For a fictional novel, the same list of people and events changes with your reading position.',
      control: 'Reading position',
      positions: [
        { label: 'Chapter 1', chapter: 1 },
        { label: 'Chapter 3', chapter: 3 },
        { label: 'Chapter 9', chapter: 9 },
        { label: 'Chapter 16', chapter: 16 },
        { label: 'Chapter 22', chapter: 22 },
        { label: 'All', chapter: 30 },
      ],
      groups: { people: 'People', events: 'Events' },
      source: 'Source: chapter {n}',
      aliases: 'Aliases:',
      entries: [
        { group: 'people', name: 'Protagonist', aliases: 'Nickname, pen name', chapter: 1, note: 'The story’s narrator, raised in a port city.' },
        { group: 'people', name: 'The protagonist’s older sister', chapter: 1, note: 'Works at a bookstore in town.' },
        { group: 'people', name: 'New neighbor', chapter: 3, note: 'A young person who just moved into the house across the street.' },
        { group: 'people', name: 'Traveling painter', chapter: 16, note: 'Stays at an inn by the harbor.' },
        { group: 'events', name: 'Bookstore reopens', chapter: 1, note: 'The bookstore where the sister works gets a new sign.' },
        { group: 'events', name: 'Harbor banquet', chapter: 9, note: 'The protagonist speaks to the neighbor for the first time at the banquet.' },
        { group: 'events', name: 'A long letter', chapter: 16, note: 'The letter reveals what happened between them in the past.' },
        { group: 'events', name: 'Ship leaves the harbor', chapter: 22, note: 'The news arrives in a letter from the sister.' },
      ],
      later: 'Appears in chapter {n}; keep hidden for now',
      status: 'Current position: chapter {n}. Later content does not appear here.',
      statusAll: 'Showing all content, including the ending.',
      rail: '30 chapters in the book.',
      rules: [
        'Readers who are signed out do not see plot reveals by default, and the page explains this.',
        'When signed in, the default position is the last chapter you finished. Marking a book as “Read” in your Library means you finished the whole work.',
        'Anyone can choose a position or show everything.',
        'A position applies only to the same story text. Reading the online version does not reveal content in a published edition.',
      ],
    },
    text: {
      text: 'REZICS never receives the full text.',
      sub: 'It receives only proposals, each with a source location and a short quotation.',
      facts: [
        { title: 'Choose your model', body: 'With a cloud model, text goes to the service you choose. With a local model, it never leaves your computer.' },
        { title: 'Open source', body: 'The toolkit is licensed under Apache-2.0. It needs no account, sends no usage reports, and downloads nothing from the internet on its own.' },
        { title: 'No decryption or circumvention', body: 'Protected files cannot be opened. The toolkit has no decryption or circumvention features and does not call such tools.' },
        { title: 'Quotations are limited', body: 'The length of each quotation and the total quotations from a book are limited by the REZICS API.' },
      ],
    },
    zone: {
      label: 'Zone',
      headline: 'A Wiki is a Zone for the work.',
      lead: 'Every item in an infobox or list is the same record used by filters, lists, and other Zones. Correct a name here and it updates everywhere.',
      tiles: [
        { name: 'Work page', line: 'Still the center, with the Wiki behind it' },
        { name: 'People' },
        { name: 'Places' },
        { name: 'Timeline' },
        { name: 'Chapter guide' },
        { name: 'Relations' },
      ],
      caption: 'Example: pages in a work’s Wiki.',
    },
    review: {
      label: 'Review',
      headline: 'AI agents propose. People review.',
      lead: 'Every person and place found by an agent is checked against existing graph data. Results fall into four groups.',
      states: [
        { title: 'Match', body: 'Matches a person or place already on the graph.' },
        { title: 'New', body: 'Not on the graph yet. The proposal creates a record.' },
        { title: 'Uncertain', body: 'There are several possible matches, for a reviewer to decide.' },
        { title: 'Unavailable', body: 'A match cannot be checked now, so a reviewer confirms it later.' },
      ],
      rules: [
        'Match results are proposals too. Records are never merged automatically.',
        'Proposals for new chapters do not quietly remove accepted content. A withdrawal must include a reason.',
        'Quotation locations can be checked against the same edition, passage by passage.',
        'Each community decides whether agents can draft entries and whether generated text is accepted. Without a setting, the Wiki accepts only facts and structure.',
        'Every item readers see has been reviewed by a person.',
      ],
    },
    finaleLead: 'How each edition of a work is recorded separately.',
  },

  editions: {
    hero: {
      headline: 'One work can have many editions.',
      lede: 'Originals and translations, paperbacks and ebooks, collections and online serials are recorded separately and linked to the same work. You know which edition you have, and your series progress stays clear.',
      alt: 'Green sheets of different sizes are stacked and aligned at the lower left, with one pale blue sheet.',
    },
    releases: {
      label: 'Four types of release',
      headline: 'Every release is identified by type.',
      lead: 'A book sold in three stores still has one edition record, with three places to buy it. Unauthorized reproductions are recorded separately from the authorized edition.',
      kinds: [
        { title: 'Published editions', body: 'Publisher volumes, paperbacks, ebooks, or special editions. The record reflects what was actually published and is not changed later.' },
        { title: 'Online publication', body: 'An online serial is a real release. Keep its original URL and dated snapshots.' },
        { title: 'REZICS snapshot', body: 'Archive the content selected at a moment on REZICS as an edition that later revisions do not change.' },
        { title: 'Virtual edition', body: 'A user translation follows the structure of a published edition and states its coverage, such as chapters 1 to 20 of a 100 chapter book. It does not represent an actual publication.' },
      ],
    },
    translations: {
      label: 'Translations',
      headline: 'Every translation names its translator and source.',
      rows: [
        { title: 'Official translation', body: 'A publisher’s translation is a separate edition, with its translator and rights listed.' },
        { title: 'Fan translation', body: 'It belongs to its translator and is linked to a specific source edition. It is never labeled official.' },
        { title: 'Machine translation', body: 'It is a new text like any other translation, identified as machine generated.' },
        { title: 'AI assisted', body: 'A human translation made with AI assistance is identified as such, so readers can filter by it.' },
      ],
      stateLabel: 'Every translation passage has a status',
      states: ['Not translated', 'Translated', 'Reviewed', 'Final'],
      notes: [
        'When the original changes, the matching translation is marked as needing an update. It is not deleted or silently moved to new text.',
        'User translations are private at first. To make one public, there must be a basis: the source is in the public domain or under an open license that allows translation, the author agrees, or the author has provided a translation license.',
        'Authors can also decline to link a source work to a translation.',
        'Traditional Chinese is not silently changed to Simplified Chinese. Converted text is identified as converted, and proper names are left unchanged.',
      ],
    },
    sameWork: {
      label: 'One work or two',
      headline: 'Which changes still belong to the same work.',
      lead: 'The test is whether the story remains compatible or is intentionally retold. Word count, language, ISBN, and marketing copy do not decide it.',
      rows: [
        { title: 'Correct typos, make minor edits, or add compatible chapters', body: 'One work, with separate editions and releases.' },
        { title: 'Change the order, keep the events', body: 'One work, with both orders preserved.' },
        { title: 'Change the cause and effect, or make the endings incompatible', body: 'Two works, linked as a rewrite.' },
        { title: 'Rename the protagonist', body: 'If it is only an alias, it is still the same work.' },
        { title: 'Retell the story from the beginning', body: 'Two works, linked as a reboot.' },
        { title: 'Remove the online version, or continue only online', body: 'This changes coverage and availability, not the number of works.' },
      ],
      caption: 'Reading the online version does not mark a rewritten edition as finished. A person must confirm chapter correspondences between the two.',
    },
    orders: {
      label: 'Order',
      headline: 'Publication order and reading order can differ.',
      lead: 'Example: two orders for the same series. Each volume keeps its identity.',
      rows: ['Publication order', 'Recommended reading order'],
      tiles: ['Volume 1', 'Side story', 'Volume 2', 'Volume 3'],
      reading: [0, 2, 1, 3],
      notes: [
        { title: 'Collections', body: 'A collection is one edition that contains several volumes. Each volume remains its own work, with its own ratings and progress.' },
        { title: 'Subseries', body: 'Subseries can each start at volume 1, with an overall order connecting them.' },
        { title: 'Finish a series', body: 'Series progress counts required volumes only. Optional side stories and specials do not affect completion.' },
        { title: 'Series progress', body: 'Caught up with current releases, finished all published volumes, series complete, and chapter links unconfirmed are shown separately.' },
      ],
    },
    isbn: {
      text: 'Enter an ISBN,',
      sub: 'Find that edition.',
      note: 'An ISBN identifies one edition, not the work itself. Start from an ISBN or ebook entry to find its edition, the text or translation it contains, and the work above it. For example, A Certain Magical Index has Japanese, Traditional Chinese, and English editions, each with its own ISBN, all pointing to the same work.',
    },
    finaleLead: 'Next, see your own records.',
  },

  library: {
    hero: {
      headline: 'Your reading, recorded as it happens.',
      lede: 'Put a book down halfway, reread it two years later, or switch to an audiobook on your commute. REZICS records each session accurately. Your records are private by default and can be exported in full.',
      alt: 'Three dark green strips of different lengths lie parallel, with a small pale green sheet beside the shortest.',
    },
    reads: {
      label: 'Each reading session',
      headline: 'Three readings of the same book make three records.',
      lead: 'A pause is recorded as a pause, and an abandoned book as abandoned. Neither counts as finished. A reread gets a new record and does not replace the first one.',
      rows: [
        { title: 'First reading', body: 'Print, paused at chapter 20.', share: 0.62 },
        { title: 'Second reading', body: 'Ebook, switched to audio for the second half, finished.', share: 1 },
        { title: 'Third reading', body: 'Rereading, in progress.', share: 0.24 },
      ],
      caption: 'Example: each record refers to the edition you actually read. Rereading another edition is a separate record.',
    },
    move: {
      label: 'Import and export',
      headline: 'Bring reading records in and take them with you.',
      steps: [
        { title: 'Add an export file', body: 'A file exported from another service, or a spreadsheet you prepared.' },
        { title: 'Match the edition you read', body: 'Each record is matched to the edition you actually read, not guessed from the title. Unmatched records are not forced into another book.' },
        { title: 'Keep your progress', body: 'Reading status, dates, ratings, and reviews are imported where they can be matched.' },
        { title: 'Export everything at any time', body: 'Export records, owned books, ratings, and reviews in a file you can import again.' },
      ],
      retention: 'The uploaded file is yours alone. Original fields are kept for seven days after upload. Reading and export then stop, and deletion is scheduled. Export your Library if you want to keep them.',
    },
    continue: {
      text: 'Open REZICS,',
      sub: 'and see your next chapter.',
      note: 'Each item in the “Continue” row at the top of your home page opens the next chapter you have not read.',
    },
    shelf: {
      label: 'Bookshelf',
      headline: 'Keep track of your bookshelf too.',
      rows: [
        { title: 'Owned books', body: 'Know which edition is on your shelf. If you bought it but have not read it, it is still unread.' },
        { title: 'Loans', body: 'Record who borrowed a book, when it was lent, when it is due, and when it was returned. The name is plain text and is not linked to an account.' },
        { title: 'Passage notes', body: 'Private notes are pinned to a passage in one edition. Switching editions does not move the note.' },
        { title: 'Following while reading', body: 'Adding a book to “Reading” or “Want to read” follows it. Get notified when a new chapter or edition appears in your language.' },
        { title: 'Lists', body: 'A list can include novels, manga, and games. Order and annotate it, then export it.' },
      ],
    },
    privacy: {
      label: 'Privacy',
      headline: 'Your reading history is private.',
      rows: [
        { title: 'Private by default', body: 'Drafts and reading records are private unless you choose to share them.' },
        { title: 'No advertising profiles', body: 'REZICS does not use private reading records to build advertising profiles or infer sensitive traits for marketing.' },
        { title: 'Use does not mean consent to training', body: 'Creating an account, accepting the terms of service, or using an AI feature does not mean you consent to training models on your records.' },
        { title: 'When you share control', body: 'Giving someone else control of your account or community does not share your reading records.' },
      ],
    },
    finaleLead: 'Now, the writing side.',
  },

  serial: {
    hero: {
      headline: 'Write one chapter at a time. Read one chapter at a time.',
      lede: 'Write, schedule, and publish web serials, light novel serializations, or your own long works on REZICS. Drafts are saved, and readers can always return to where they left off.',
      alt: 'A long sheet of deep green paper is folded into pages, with the second half open and a small pale green sheet at the fold.',
    },
    safe: {
      label: 'Drafts',
      headline: 'Your drafts stay here.',
      rows: [
        { title: 'Every save creates a version', body: 'Every version is kept for comparison and can be restored as a new version. Clearing a chapter saves a blank version, which cannot be published.' },
        { title: 'Schedule by your time zone', body: 'Choose the local publication time. The server publishes on schedule even when your browser is closed.' },
        { title: 'Four permissions for collaborators', body: 'Reading, suggesting, editing, and publishing are separate permissions. Someone who can edit a draft cannot necessarily publish it.' },
        { title: 'Author’s notes stay separate from the text', body: 'An author’s note at the end of a chapter is separate. It does not count toward the word total, get translated, or appear in a later published edition.' },
      ],
    },
    mirror: {
      label: 'Authors and readers',
      headline: 'What happens for readers when an author acts.',
      rows: [
        { title: 'Publish chapter 12', body: 'Readers following the work get a notification about the new chapter in their language.' },
        { title: 'Revise chapter 3', body: 'Earlier comments still point to the passage in that version.' },
        { title: 'Add chapter 5 to a collection', body: 'The text and discussion stay in one place, with reading progress recorded separately in each location.' },
        { title: 'When chapter 13 is published', body: 'Readers who have not reached it do not see spoilers about this chapter in their feed.' },
      ],
      notes: [
        'Readers can adjust text size, line width, font, indentation, colors, and spacing between Chinese and Japanese.',
        'Japanese works can be read vertically, with furigana and emphasis marks.',
        'Reader feedback goes to an inbox for the author.',
      ],
    },
    ai: {
      label: 'AI disclosure',
      headline: 'State how AI was used.',
      rows: [
        { title: 'Not used', body: 'Generative AI did not substantially contribute to this text.' },
        { title: 'Assisted', body: 'Written mainly by a person, with AI used for ideas, rewriting, editing, or some content.' },
        { title: 'Generated', body: 'Most of the text was generated by AI, including machine translation, even if a person later edited it.' },
      ],
      notes: ['Human review is recorded separately. Readers can filter by these disclosures.', 'These are statements by the author. REZICS does not treat AI detector results as a verdict.'],
    },
    world: {
      label: 'Worldbuilding',
      headline: 'Keep worldbuilding beside the draft.',
      lead: 'Use templates to organize people, places, organizations, events, objects, and settings, all kept private. Selected pages can be published to the work’s Wiki without exposing private revision history.',
      items: [
        'Mark places on your own map.',
        'Map character relations and keep a text list too.',
        'Build a timeline using the story’s calendar, including uncertain dates.',
        'A continuity assistant flags contradictions between notes and drafts. It does not write chapters for you.',
      ],
    },
    backup: {
      text: 'Your complete draft,',
      sub: 'ready to export at any time.',
      note: 'Export revision history, notes, and worldbuilding in a backup you can import again. Export and core worldbuilding features are not limited to paid plans.',
    },
    finaleLead: 'When it is ready, put it in readers’ hands.',
  },

  publish: {
    hero: {
      headline: 'Readers keep the files they buy.',
      lede: 'Contracted creators sell authorized ebooks, small games, and visual novels directly on REZICS. Readers get DRM free files, with the store page beside the work’s discussions and Wiki.',
    },
    buy: {
      label: 'Purchase',
      headline: 'Buying a book starts with choosing an edition.',
      steps: [
        { title: 'Choose an edition', body: 'Choose a language and edition, see who translated it, and read a preview.' },
        { title: 'Pay once', body: 'Pay once, not by subscription. The license is shown before you buy.' },
        { title: 'Keep the file', body: 'Download a DRM free EPUB or PDF. No launcher or DRM activation is needed.' },
        { title: 'Get updates', body: 'Your Library notifies you when the author publishes an agreed update. Receipts are saved, and files can be downloaded again under the purchase terms.' },
      ],
      caption: 'DRM free does not mean you can resell or distribute a file. The license shown before purchase sets out how you can use it.',
    },
    statement: {
      label: 'Settlement statement',
      headline: 'The creator’s settlement lists every deduction.',
      rows: [
        { title: 'Reader payment', body: 'The amount actually received for the transaction.' },
        { title: 'Taxes', body: 'Sales tax, value added tax, and other transaction taxes collected and remitted.' },
        { title: 'Payment processing fee', body: 'Actual payment processing costs with a receipt.' },
        { title: 'Refunds and disputed charges', body: 'Refunds, reversals, and chargebacks.' },
        { title: 'Net proceeds', body: 'After agreed transaction fees, the creator and REZICS divide the proceeds under their contract.' },
      ],
      note: 'Operating costs such as hosting, salaries, and marketing are not deducted from these proceeds. A fee is never deducted twice.',
    },
    distributed: {
      label: 'What is published',
      headline: 'What is and is not published here.',
      rows: [
        { title: 'Ebooks', body: 'Authorized, DRM free EPUB or PDF files.' },
        { title: 'Small games and visual novels', body: 'The downloadable edition and any required platform or account are listed before purchase.' },
        { title: 'Previews', body: 'Read a sample before deciding to buy.' },
        { title: 'Receipts and refunds', body: 'Every purchase has a receipt, and you can request a refund.' },
      ],
      policy: [
        { title: 'Contracted creators', body: 'Publishing is for contracted creators, not an open marketplace.' },
        { title: 'Not sold', body: 'Explicit sexual content and works rated R18 or R18G.' },
      ],
    },
    community: {
      text: 'The store page,',
      sub: 'sits beside the work’s community.',
      note: 'Before buying, you can see reviews, discussions, and the Wiki. Your edition, progress, and receipt stay with the work after purchase. Readers can follow creators and see their books and games. Creators see sales totals, not readers’ reading records.',
    },
    finaleLead: 'Anime adaptations link back to the same work.',
  },
};

export default {
  id: 'books',
  base: '/books/',
  name: 'Library',
  theme: { kind: 'books' },
  next: 'anime',
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: {
        title: 'Library: Pick up where you left off',
        description:
          'One page per work, with originals, translations, volumes, and collections kept distinct. The Library remembers your progress and what to read next. The Wiki and discussions stop at the chapter you have read.',
      },
    },
    {
      slug: 'work',
      label: 'Work page',
      meta: {
        title: 'Work page: The center of a work',
        description:
          'A work page brings together facts, ratings, your editions and progress, volumes and adaptations, a Wiki summary, and discussions. One primary action at the top reflects your status.',
      },
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: {
        title: 'Wiki+: Build a Wiki with your AI agent',
        description:
          'Readers with the source text run the open source toolkit on their own computer and use their AI agent to organize people, places, and events by chapter. After review, the content is published to the work’s Wiki, where each reader sees only what they have read.',
      },
    },
    {
      slug: 'editions',
      label: 'Editions and series',
      meta: {
        title: 'Editions and series: Each edition stays distinct',
        description:
          'Volumes, collections, ebooks, online serials, and translations in every language are different editions of the same work on REZICS. Series are ordered by volume, while an edition with a rewritten plot is a separate work.',
      },
    },
    {
      slug: 'library',
      label: 'Reading records',
      meta: {
        title: 'Reading records: Accurate and portable',
        description:
          'Record each reading separately: rereads, pauses, abandoned books, and switching from print to audio. Owned and borrowed books are tracked separately. Records are private by default and can be imported from other services or fully exported.',
      },
    },
    {
      slug: 'serial',
      label: 'Serials',
      meta: {
        title: 'Serials: Write and read one chapter at a time',
        description:
          'Authors can restore each saved version and schedule chapters by their time zone. The server publishes on time even if the browser is closed. Readers pick up where they left off, and discussions hide unreached chapters.',
      },
    },
    {
      slug: 'publish',
      label: 'Publishing',
      meta: {
        title: 'Publishing: Sell directly to readers',
        description:
          'Contracted creators sell authorized ebooks, small games, and visual novels on REZICS. Files are DRM free, with previews, updates, and downloads. Settlement statements list taxes, fees, and refunds.',
      },
    },
  ],
  strings,
} satisfies MiniSite<BooksStrings>;
