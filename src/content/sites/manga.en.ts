// The manga site (漫畫): every visible string of /manga/ and its six inner pages, read as the
// site's chapters 第 1 話 to 第 6 話. Design record: src/sites/manga/SITE.md ("v3"); sources for
// every claim: src/sites/manga/facts.md.
import type { Item, KindId, MiniSite, ModuleId, PartId } from '../schema';

/** A section head in the v3 grid: eyebrow in columns 1 to 3, serif h2, optional lead. */
export interface MangaHead {
  eyebrow: string;
  heading: string;
  lead?: string;
}
/** A large serif statement: the first half in ink, the second in muted ink. */
export interface MangaStatement {
  text: string;
  muted?: string;
}
/** One of this site's paper still-life pictures (public/images/sites/manga/). */
export interface MangaPicture {
  name: 'hero' | 'series' | 'progress' | 'adaptations' | 'publish';
  alt: string;
}
/** The intro of an inner page: chapter eyebrow, h1 and lede. */
export interface MangaIntro {
  eyebrow: string;
  headline: string;
  lede: string;
}
/** The closing: a final statement, the action into REZICS, then the next page or site. */
export interface MangaClosing {
  statement: string;
  /** The small label of the next link, e.g. 下一話　第 2 話. */
  nextLabel: string;
  /** The next page's or site's name. */
  nextName: string;
}

export interface MangaStrings {
  /** The action into REZICS (the product's address comes from `site.productUrl`). */
  action: string;
  landing: {
    hero: Omit<MangaIntro, 'eyebrow'> & { picture: MangaPicture };
    parts: MangaHead & { notes: Partial<Record<PartId, string>> };
    pages: MangaHead & { tiles: { slug: string; chapter: string; line: string }[] };
    statement: MangaStatement;
    neighbours: MangaHead & { tiles: { kind: KindId; line: string }[] };
    closing: MangaClosing;
  };
  series: {
    intro: MangaIntro;
    levels: MangaHead & { picture: MangaPicture; items: Item[] };
    catalogue: MangaHead & { items: Item[]; footnotes: string[] };
    names: MangaHead & { body: string[]; items: Item[] };
    closing: MangaClosing;
  };
  progress: {
    intro: MangaIntro;
    language: MangaHead & { picture: MangaPicture };
    caught: MangaHead & { items: Item[] };
    statement: MangaStatement;
    travels: MangaHead & { items: Item[]; footnote: string };
    closing: MangaClosing;
  };
  creators: {
    intro: MangaIntro;
    roles: MangaHead & { items: Item[]; footnotes: string[] };
    person: MangaHead & { tiles: { kind: KindId; line: string }[] };
    statement: MangaStatement;
    closing: MangaClosing;
  };
  adaptations: {
    intro: MangaIntro;
    example: MangaHead & { picture: MangaPicture; items: Item[]; footnote: string };
    relations: MangaHead & { items: Item[]; footnote: string };
    apart: MangaHead;
    statement: MangaStatement;
    closing: MangaClosing;
  };
  community: {
    intro: MangaIntro;
    spoilers: MangaHead & { items: Item[] };
    ratings: MangaHead;
    gather: MangaHead & { items: Item[]; footnote: string; tiles: { module: ModuleId; line: string }[] };
    closing: MangaClosing;
  };
  publish: {
    intro: MangaIntro;
    steps: MangaHead & { picture: MangaPicture; items: Item[] };
    decides: MangaHead & { items: Item[] };
    elsewhere: MangaHead;
    closing: MangaClosing;
  };
}

export default {
  id: 'manga',
  base: '/manga/',
  name: 'Manga',
  theme: { kind: 'manga' },
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: {
        title: 'Manga: read from the first chapter to the latest volume',
        description:
          'REZICS gives each manga one identity, with every serialized chapter, language edition, and translation linked to it. It remembers where you stopped, shows which volume is still unavailable in your language, and lets you talk with readers at the same point.',
      },
    },
    {
      slug: 'series',
      label: 'Series',
      meta: {
        title: 'Volumes, chapters, and translations in a manga',
        description:
          'A series and each collected volume are works. Every chapter has a fixed place and number within a volume. Omnibus editions record only which volumes they include. Japanese and Taiwanese editions belong to the same work, with each translator credited separately.',
      },
    },
    {
      slug: 'progress',
      label: 'Progress',
      meta: {
        title: 'Manga progress: where you left off',
        description:
          'Track manga progress by chapter across volumes, omnibus editions, and devices. Changing reading languages does not erase what you have read. If the next chapter is not available in your language, you can see which volume you are waiting for.',
      },
    },
    {
      slug: 'creators',
      label: 'Creators',
      meta: {
        title: 'Manga creators: story, art, and translation',
        description:
          'Every manga credit names a role, with story, art, illustration, and translation listed separately. The same person has one identity across novels, manga, anime, and games. Follow them once to see new works and announcements.',
      },
    },
    {
      slug: 'adaptations',
      label: 'Adaptations',
      meta: {
        title: 'Manga and adaptations: novels, anime, and games',
        description:
          'REZICS links a manga to its source and adaptations with named relationships. Each work has separate progress, ratings, and spoiler boundaries. Unconfirmed relationships are clearly marked.',
      },
    },
    {
      slug: 'community',
      label: 'Discussion',
      meta: {
        title: 'Manga discussion: talk about the chapter you have read',
        description:
          'Every chapter has its own discussion, with later content hidden until you reach it. Ratings state whether they cover the whole series, a volume, or a translation, and show the count and distribution. Fans can start a Realm, build a Zone, and write Wiki+ pages for a work.',
      },
    },
    {
      slug: 'publish',
      label: 'Publish',
      meta: {
        title: 'Publish your manga on REZICS',
        description:
          'Publish manga on REZICS, including chapters made only of images. Schedule releases by time zone, invite collaborators, and set permissions separately. Other people’s translations stay private until you consent, every page links to its source page, and you can back up the whole work at any time.',
      },
    },
  ],
  strings: {
    action: 'Go to REZICS',
    landing: {
      hero: {
        headline: 'REZICS remembers which chapter you reached.',
        lede: 'Collected volumes, serialized chapters, and translations in every language link to the same manga. REZICS remembers your progress and finds the next chapter in your chosen language.',
        picture: {
          name: 'hero',
          alt: 'A sheet of thick near-black paper has windows of different sizes cut into it like a manga page. A rose-colored sheet shows through one window.',
        },
      },
      parts: {
        eyebrow: 'Eight parts',
        heading: 'How manga uses eight shared parts.',
        notes: {
          identity: 'Search for any translation and find the same work.',
          editions: 'Japanese, Taiwanese, digital, and omnibus editions each have a separate release record.',
          credits: 'The original writer and artist are credited separately. Each translator is credited on the edition they translated.',
          relations: 'Find both what a manga was adapted from and what it was adapted into.',
          progress: 'Track chapter by chapter and pick up on another device.',
          ratings: 'Each rating states which chapter and translation it covers.',
          discussion: 'Discussions are split by chapter. Comments beyond your progress stay hidden.',
          offers: 'Each listing says where a language edition is sold and when that information was checked.',
        },
      },
      pages: {
        eyebrow: 'This site',
        heading: 'Six chapters to read in order or browse by topic.',
        tiles: [
          { slug: 'series', chapter: 'Chapter 1', line: 'Bring volumes, chapters, and translations into one work' },
          { slug: 'progress', chapter: 'Chapter 2', line: 'Pick up where you left off on any device' },
          { slug: 'creators', chapter: 'Chapter 3', line: 'Credit the story, art, and translation' },
          { slug: 'adaptations', chapter: 'Chapter 4', line: 'Connect novels, manga, anime, and games' },
          { slug: 'community', chapter: 'Chapter 5', line: 'Hide spoilers and show what each rating covers' },
          { slug: 'publish', chapter: 'Chapter 6', line: 'Serialize the manga you create' },
        ],
      },
      statement: {
        text: 'Finish the published Taiwanese edition to catch up.',
        muted: 'REZICS shows which volume is still awaiting translation.',
      },
      neighbours: {
        eyebrow: 'Related kinds',
        heading: 'One story can take many forms.',
        lead: 'Novels, anime, games, and visual novels each have their own identity, linked to manga through adaptation relationships.',
        tiles: [
          { kind: 'books', line: 'Source novels and light novels' },
          { kind: 'anime', line: 'Anime adaptations with separate progress' },
          { kind: 'games', line: 'Game adaptations and source games' },
          { kind: 'visual-novels', line: 'Manga versions linked to their source' },
        ],
      },
      closing: {
        statement: 'From the first chapter to the latest volume, all in one place.',
        nextLabel: 'Next chapter  1',
        nextName: 'Series',
      },
    },
    series: {
      intro: {
        eyebrow: 'Chapter 1  Series',
        headline: 'Dozens of volumes and hundreds of chapters, one work.',
        lede: 'The series is a work, and each collected volume is a work too. Every chapter has a fixed place within it. Omnibus editions, new editions, and translations in each language are recorded separately and linked to the same identity.',
      },
      levels: {
        eyebrow: 'How it is organized',
        heading: 'See how a series is organized.',
        lead: 'The series, each volume, and each chapter have their own level, all under one identity.',
        picture: {
          name: 'series',
          alt: 'A neat stack of more than a dozen slim, near-black books, with a dark green paper band around the top few.',
        },
        items: [
          { title: 'Series', body: 'The serialized work is a work in its own right, with its creators, follows, and ratings.' },
          {
            title: 'Collected volume',
            body: 'Each collected volume is also a work that can be saved to a library, rated, and discussed on its own. Volume numbers follow the published edition, and special-numbered volumes remain distinct.',
          },
          {
            title: 'Chapter',
            body: 'Every chapter has a fixed position and number in the work. Your progress, chapter discussions, and Wiki+ citations all point to that position.',
          },
          { title: 'Omnibus edition', body: 'An omnibus or complete edition may include several volumes. REZICS records which volumes it contains without creating duplicate works.' },
          {
            title: 'Translations',
            body: 'The original-language edition and translations all belong to the same work. Each translation has its own translator, rights, and release information. Fan translations also state which edition they were translated from.',
          },
        ],
      },
      catalogue: {
        eyebrow: 'Catalogue details',
        heading: 'Missing catalogue details are marked “Not recorded.”',
        items: [
          { title: 'Format', body: 'Manga or one-shot.' },
          { title: 'First publication year', body: 'The year it was first published. Browse works from one year through the last entry.' },
          { title: 'Volumes', body: 'The number of collected volumes published.' },
          { title: 'Status', body: 'Ongoing, completed, paused, unreleased, or canceled.' },
        ],
        footnotes: [
          'Missing fields are not guessed. Imported catalogue data names its source and license.',
          'A manga Zone can filter the full catalogue by title, format, status, and year.',
        ],
      },
      names: {
        eyebrow: 'Titles and editions',
        heading: 'Keep the original title alongside translations.',
        body: [
          'A manga’s original title, translations in each region, and common reader aliases are kept together, so you can find it by any of them. Traditional Chinese titles are not automatically changed to Simplified Chinese. Converted forms are labeled as such.',
          'You can privately choose which edition you are reading. REZICS remembers whether it is the digital, new, or Taiwanese edition.',
        ],
        items: [
          { title: 'ISBN', body: 'An ISBN takes you to that edition, its translation, and the work as a whole.' },
          { title: 'Translated titles', body: 'A title translated into a language does not mean an edition exists in that language.' },
        ],
      },
      closing: {
        statement: 'A work keeps one identity, no matter how many volumes it has.',
        nextLabel: 'Next chapter  2',
        nextName: 'Progress',
      },
    },
    progress: {
      intro: {
        eyebrow: 'Chapter 2  Progress',
        headline: 'You stopped at chapter 12. Start this time at 13.',
        lede: 'REZICS organizes every chapter by volume and marks where you stopped and what comes next. Start reading on your phone and continue from the same chapter on your computer.',
      },
      language: {
        eyebrow: 'Switch languages',
        heading: 'Your progress still counts when you switch languages.',
        lead: 'Read the first ten chapters in Japanese, then switch to Traditional Chinese. Those chapters still count as read. REZICS finds the next chapter in Traditional Chinese and marks the one you are waiting for if it is not available yet.',
        picture: {
          name: 'progress',
          alt: 'A long charcoal paper strip is folded into sections. Several sections on the right are unfolded and stacked, with a small rose-colored paper slip between them.',
        },
      },
      caught: {
        eyebrow: 'Are you caught up?',
        heading: '“Caught up” can mean several things. REZICS tells you which.',
        items: [
          { title: 'Caught up in this language', body: 'You have read everything available in your language and are waiting for the next translation.' },
          { title: 'Finished the published chapters', body: 'You have read everything published so far, but the series is still ongoing.' },
          { title: 'Series completed', body: 'The series has ended, with no new chapters expected.' },
          { title: 'Mapping unconfirmed', body: 'When an online version does not match a collected volume, the mapping is marked unconfirmed. Progress in one does not count toward the other.' },
          { title: 'Optional stories do not block completion', body: 'You can skip optional side stories and specials without affecting completion of the main work.' },
        ],
      },
      statement: {
        text: 'Buying a volume does not mean you have read it.',
        muted: 'Save collected volumes to your library and track reading progress separately.',
      },
      travels: {
        eyebrow: 'Across devices',
        heading: 'Your progress follows you to another device.',
        items: [
          { title: 'Two devices', body: 'Your phone and computer share the same progress. Undo a mistaken update, and the other device updates too.' },
          { title: 'Continue reading', body: 'The top row on the home page opens your next chapter with one click.' },
          {
            title: 'Follow',
            body: 'Mark a manga as reading to follow it. You will hear when a new chapter or volume is available in your language. Set notifications to highlights only or turn them off.',
          },
          {
            title: 'Import',
            body: 'Import manga lists from other sites, preserving matched statuses, dates, scores, tags, and private notes. Raw fields such as re-read counts are kept for seven days, so export a backup first.',
          },
          { title: 'Export', body: 'Export your entire library at any time, including dates and notes.' },
        ],
        footnote: 'By default, REZICS does not use private reading history to train AI models or build advertising profiles.',
      },
      closing: {
        statement: 'Pick up next time from the chapter where you stopped.',
        nextLabel: 'Next chapter  3',
        nextName: 'Creators',
      },
    },
    creators: {
      intro: {
        eyebrow: 'Chapter 3  Creators',
        headline: 'Name the writer and the artist separately.',
        lede: 'Many manga have one person for the story and another for the art. REZICS credits each role, linking every name to that person’s full body of work, whether manga, novels, or anime.',
      },
      roles: {
        eyebrow: 'Credits',
        heading: 'Separate credits by role.',
        items: [
          { title: 'Story', body: 'The person who conceived and wrote the story.' },
          { title: 'Art', body: 'The person who drew the story as manga, page by page.' },
          { title: 'Illustration', body: 'The person who illustrated the cover, color pages, or novel.' },
          { title: 'Translation', body: 'The translator is credited on the edition they translated, not on other editions.' },
          { title: 'Concept supervision', body: 'The person who provided the original concept or supervised it.' },
        ],
        footnotes: ['Fan translation teams are credited by name, but their work is never marked as an official translation.', 'Role names are part of the data and can be translated into each language.'],
      },
      person: {
        eyebrow: 'One person',
        heading: 'One name connects their work across kinds.',
        lead: 'An artist may illustrate a novel, serialize their own manga, and create art for a game. REZICS brings all of it together under one person. Follow them to see new work and announcements in your activity feed.',
        tiles: [
          { kind: 'books', line: 'Illustrations for novels' },
          { kind: 'anime', line: 'Source works adapted into anime' },
          { kind: 'games', line: 'Artwork for games' },
        ],
      },
      statement: {
        text: 'Credits belong to people, not accounts.',
        muted: 'A creator’s page can list every credited work before they join.',
      },
      closing: {
        statement: 'Each name shows what the person did.',
        nextLabel: 'Next chapter  4',
        nextName: 'Adaptations',
      },
    },
    adaptations: {
      intro: {
        eyebrow: 'Chapter 4  Adaptations',
        headline: 'One story, four forms.',
        lede: 'On REZICS, a novel, manga, anime, and game are each their own work. Named relationships connect them, so you can follow a manga back to its source or forward to its adaptations.',
      },
      example: {
        eyebrow: 'One example',
        heading: 'For example, A Certain Magical Index.',
        lead: 'The source is a light novel written by Kazuma Kamachi and illustrated by Kiyotaka Haimura. REZICS records each form as a separate work and names the relationships between them.',
        picture: {
          name: 'adaptations',
          alt: 'Three sheets in dark green, near-black, and rose are arranged from upper left to lower right, with their corners touching.',
        },
        items: [
          { title: 'Light novels', body: 'The source work. The original series, New Testament, and Genesis Testament are linked in order as sequels.' },
          { title: 'Manga', body: 'Adapted from the light novel and drawn by Chuya Kogino.' },
          { title: 'Anime', body: 'Also adapted from the light novel, with progress tracked separately from the manga.' },
          { title: 'A Certain Scientific Railgun', body: 'A spin-off with its own manga, later adapted into anime.' },
          { title: 'Games', body: 'One is a visual novel, linked to the visual novel kind.' },
        ],
        footnote: 'This example shows how REZICS records a work. It does not imply any partnership or license.',
      },
      relations: {
        eyebrow: 'Relationships',
        heading: 'Every relationship has a name.',
        items: [
          { title: 'Adapted from', body: 'A novel, anime, or game adapted into manga, or manga adapted into another form.' },
          { title: 'Sequel / prequel', body: 'A story that continues from or leads into another work.' },
          { title: 'Spin-off', body: 'A side story or a supporting character’s story linked to the main work.' },
          { title: 'Rewritten from', body: 'When an author rewrites a work and the story no longer matches the original, it is a separate work.' },
          { title: 'Rebooted from', body: 'A new version that tells the story again from the beginning.' },
          { title: 'Reading order', body: 'A story order can exist alongside publication order.' },
        ],
        footnote: 'Unconfirmed relationships are marked unconfirmed. They are left open rather than forced.',
      },
      apart: {
        eyebrow: 'Separate progress',
        heading: 'Finishing the anime does not advance manga progress.',
        lead: 'Track anime and manga progress separately. Filter manga and anime reviews separately too, and keep each score tied to the people who rated that work.',
      },
      statement: {
        text: 'When two versions differ, Wiki+ can record both accounts.',
        muted: 'Each fact names its version, and what you see depends on your progress.',
      },
      closing: {
        statement: 'Each form stands on its own and remains connected.',
        nextLabel: 'Next chapter  5',
        nextName: 'Discussion',
      },
    },
    community: {
      intro: {
        eyebrow: 'Chapter 5  Discussion',
        headline: 'Discuss only the chapters you have read.',
        lede: 'Each chapter has its own discussion. Posts about chapters you have not read stay hidden until you reach them.',
      },
      spoilers: {
        eyebrow: 'Spoilers',
        heading: 'Later content stays hidden until you choose to open it.',
        items: [
          { title: 'Chapter discussion', body: 'Every chapter has a discussion thread. You do not have to join a community to read it.' },
          { title: 'Hidden comments', body: 'Comments beyond your progress are hidden by default. Open them if you want to. The choice affects only your current view.' },
          { title: 'Spoiler votes', body: 'Readers can vote on whether content is a spoiler. These votes are counted separately from the author’s labels.' },
          {
            title: 'Three kinds of conversation',
            body: 'Story discussion, reviews, and data corrections each have their own place. Your edition and reading position stay with you as you move between them.',
          },
        ],
      },
      ratings: {
        eyebrow: 'Ratings',
        heading: 'Every score says what it rates.',
        lead: 'The series, a volume, and a translation each have their own scores. The series score is not an average of its volumes. Every score includes its count, distribution, and rating group. Reviews state whether they cover the story or translation, and can be written without a score.',
      },
      gather: {
        eyebrow: 'Community',
        heading: 'A place for fans to gather.',
        items: [
          {
            title: 'Realm',
            body: 'Readers of a manga can open a Realm with members, rules, and moderators. A Realm’s featured items link to the discussion where each decision was made.',
          },
          { title: 'Zone', body: 'A community can build a full site for a work, with its own pages, navigation, and appearance, using the same data.' },
          {
            title: 'Wiki+',
            body: 'Character pages, places, timelines, and chapter guides show only up to the chapter you have read. Every fact in an information panel has been reviewed.',
          },
          { title: 'Lists', body: 'Create a reading list or reading order, explain each choice, arrange the order, and export it.' },
          { title: 'Follow', body: 'Follow a work, creator, or Realm, with separate notification settings for each.' },
        ],
        footnote: 'Set age ratings separately: all-ages, R15, R18, and R18G each have their own setting. Unrated content is marked “Not rated.”',
        tiles: [
          { module: 'community', line: 'Discuss, rate, and organize lists together' },
          { module: 'zones', line: 'Zone and Wiki+, a site for your community' },
        ],
      },
      closing: {
        statement: 'Finish a chapter, then discuss it there.',
        nextLabel: 'Next chapter  6',
        nextName: 'Publish',
      },
    },
    publish: {
      intro: {
        eyebrow: 'Chapter 6  Publish',
        headline: 'Your manga has an identity from chapter one.',
        lede: 'A work serialized on REZICS sits in the same index as other manga. Readers use the same progress, discussion, and ratings features. Adaptations and translations link back to your work.',
      },
      steps: {
        eyebrow: 'Process',
        heading: 'From your draft to your readers.',
        lead: 'You control each step from uploading a chapter to publishing it, and each step stays in the work’s record.',
        picture: {
          name: 'publish',
          alt: 'A sheet of near-black paper is folded into a freestanding three-panel screen, each panel cut with windows that let light into the shadows. Several loose pages are stacked beside it.',
        },
        items: [
          { title: 'Upload a chapter', body: 'A chapter can consist only of image pages, without added text. Author’s notes are separate from the main text and are not translated.' },
          { title: 'Schedule publication', body: 'Set a publication date and time zone. The chapter publishes on time even if you close your browser.' },
          { title: 'Work together', body: 'Invite assistants and editors with separate permissions to read, suggest, edit, or publish. Publishing and editing permissions are separate.' },
          { title: 'Every page has a place', body: 'Each page has a fixed position. Other people’s translations map back to your original page by page.' },
          { title: 'Receive feedback', body: 'Reader comments and correction suggestions are collected in the author’s feedback inbox.' },
        ],
      },
      decides: {
        eyebrow: 'Author control',
        heading: 'The author decides these things.',
        items: [
          {
            title: 'Translations',
            body: 'Translations by others are private by default. They become public only with your consent or a prior open license. You can also refuse to link your work to a translation.',
          },
          { title: 'Rights', body: 'Add a license declaration to your work and explain how readers and translators may use it.' },
          { title: 'AI use', body: 'State how much AI was used in each chapter: none, assisted, or generated. Readers can filter by this information.' },
          { title: 'Revisions', body: 'Edited pages keep their revision history. The version readers saw when they commented is never silently replaced.' },
          { title: 'Backup', body: 'Back up the entire work and every revision at any time.' },
        ],
      },
      elsewhere: {
        eyebrow: 'Serialized elsewhere',
        heading: 'Keep a record of a series published elsewhere.',
        lead: 'Create an identity on REZICS for a work serialized on your own site or elsewhere. Record the online serial as a release with its URL and dated snapshots. When collected volumes are published, record each one separately.',
      },
      closing: {
        statement: 'Your work can be on REZICS while control stays with you.',
        nextLabel: 'Next stop',
        nextName: 'Games',
      },
    },
  },
} satisfies MiniSite<MangaStrings>;
