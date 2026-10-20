// The 動畫 site: every visible string of /anime/ and its six inner pages, in the v3 parts (hero,
// sections, tile masonry, photo rows, statements, facts lists, closing). The plan is in
// src/sites/anime/SITE.md under "v3"; claims and sources in src/sites/anime/facts.md. Example
// data is generic and marked 示意; the one real work named is 《魔法禁書目錄》, text only
// (.temp/sites/EXAMPLE-WORK.md).
import type { KindId, MiniSite, PartId } from '../schema';
import { kinds } from '../kinds';

const kind = kinds.find((k) => k.id === 'anime')!;

/** A title and its line: facts rows, tiles. */
export interface Row {
  title: string;
  body: string;
}
/** A still-life from the site's paper series (public/images/sites/anime/<src>-<w>.avif|webp). */
export interface Photo {
  src: 'hero' | 'weeks' | 'covered' | 'threads' | 'sources';
  alt: string;
}
/** An inner page's opening: the h1 and its line. */
export interface Head {
  headline: string;
  lede: string;
}
/** A section: eyebrow in columns 1 to 3, the h2, a lead. */
export interface Section {
  eyebrow: string;
  headline: string;
  lead?: string;
}
/** Large serif: `text`, then `muted` in muted ink, and an optional note under it. */
export interface Statement {
  text: string;
  muted: string;
  note?: string;
}
/** The final invitation, specific to the subject of each page. */
export interface ClosingCopy {
  headline: string;
  body: string;
}

export type AnimeStrings = {
  common: {
    /** Eyebrow of the section that leads to the next pages. */
    onward: string;
    /** Caption under generic example data. */
    example: string;
  };
  landing: {
    closing: ClosingCopy;
    hero: Head & { photo: Photo };
    pages: Section & { lines: { slug: string; line: string }[] };
    schedule: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    next: Statement;
    spoilers: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    parts: Section & { notes: Partial<Record<PartId, string>> };
    neighbours: Section & { tiles: { to: KindId; label: string }[] };
  };
  seasons: {
    closing: ClosingCopy;
    head: Head;
    marks: Section & { rows: Row[] };
    zones: { eyebrow: string; headline: string; body: string[]; photo: Photo };
    known: Section & { rows: Row[] };
    years: Section;
    /** One line that previews the next page. */
    next: string;
  };
  tracking: {
    closing: ClosingCopy;
    head: Head;
    statuses: Section & { rows: Row[] };
    seasons: Section & { tiles: Row[] };
    rewatch: Section;
    lists: Statement;
    next: string;
  };
  discussion: {
    closing: ClosingCopy;
    head: Head;
    spoiler: { eyebrow: string; headline: string; body: string; photo: Photo };
    position: Section & { rows: Row[] };
    conversations: Section & { rows: Row[] };
    spaces: Section & { tiles: Row[] };
    unseen: Statement;
    next: string;
  };
  ratings: {
    closing: ClosingCopy;
    head: Head;
    anatomy: Section & { rows: Row[] };
    episodes: Statement;
    targets: Section & { rows: Row[] };
    lists: Section & { tiles: string[] };
    next: string;
  };
  credits: {
    closing: ClosingCopy;
    head: Head;
    record: Section & { rows: Row[] };
    voice: { eyebrow: string; headline: string; body: string; photo: Photo };
    studio: Section;
    next: string;
  };
  adaptations: {
    closing: ClosingCopy;
    head: Head;
    example: { eyebrow: string; headline: string; body: string; photo: Photo };
    /** Generic family: each tile in the colour of its kind (null: a relation still to confirm). */
    family: Section & { tiles: { kind: KindId | null; relation: string; name: string }[] };
    scoped: Section;
    relations: Section & { rows: Row[] };
    orders: Statement;
    next: string;
  };
};

const site: MiniSite<AnimeStrings> = {
  id: 'anime',
  base: '/anime/',
  name: 'Anime',
  theme: { kind: 'anime' },
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: {
        title: 'Anime: schedule, progress, discussion, and source works',
        description:
          'Track anime on REZICS. See every episode’s air time on your schedule and log each one as you watch. Every episode has its own discussion and ratings, with voice actors, studios, and source works linked to the anime.',
      },
    },
    {
      slug: 'seasons',
      label: 'Seasons and schedule',
      meta: {
        title: 'Anime seasons and broadcast schedule',
        description:
          'Anime seasons begin four times a year. REZICS lists each season’s new shows and episode air times in your time zone. When only the date is known, only the date is shown. You can also export reminders to your calendar.',
      },
    },
    {
      slug: 'tracking',
      label: 'Track progress',
      meta: {
        title: 'Anime progress, episode by episode',
        description:
          'Track anime on REZICS with five statuses: plan to watch, watching, completed, paused, and dropped. Log each episode as you finish it and find the next one in series order. Rewatches have their own record. Import and export lists.',
      },
    },
    {
      slug: 'discussion',
      label: 'Episode discussion',
      meta: {
        title: 'Anime discussion: a thread for every episode',
        description:
          'Every anime episode on REZICS has its own discussion thread. Spoiler-marked content stays hidden until you open it. Wiki+ follows your watched episodes, and communities can build their own anime site with Zone.',
      },
    },
    {
      slug: 'ratings',
      label: 'Ratings and lists',
      meta: {
        title: 'Anime ratings, reviews, and lists',
        description:
          'Every REZICS rating states what was rated, the scale, the number of ratings, and the group they came from. Series and episodes are rated separately. Reviews do not require a rating, and lists can be sorted, annotated, and exported.',
      },
    },
    {
      slug: 'credits',
      label: 'Production and cast',
      meta: {
        title: 'Anime staff and voice actors',
        description:
          'On REZICS, directors, writers, studios, and voice actors each have an identity. Every credit names the role and work, and voice roles link to their characters. Follow a person or studio to hear when new work is announced.',
      },
    },
    {
      slug: 'adaptations',
      label: 'Source works and adaptations',
      meta: {
        title: 'Anime source works and adaptations',
        description:
          'On REZICS, anime and their source novels, manga, sequels, and game adaptations each have their own identity, linked by their relationships. Progress is tracked separately for the anime and its source work, and different details on each side cite their sources.',
      },
    },
  ],
  strings: {
    common: {
      onward: 'Next',
      example: 'Example.',
    },
    landing: {
      closing: {
        headline: 'Put every show you follow this season on your schedule.',
        body: 'Organize the anime you want to watch on REZICS, track your progress, and join each episode’s discussion.',
      },
      hero: {
        headline: 'Follow every episode from premiere to finale.',
        lede: 'Each season’s episodes and air times are arranged on a schedule in your time zone. Log episodes as you watch. Voice actors, studios, and source works are linked to each anime.',
        photo: {
          src: 'hero',
          alt: 'A long rose-colored paper strip folded into twelve panels stands on warm white paper, with charcoal and muted violet sheets weighing down one end.',
        },
      },
      pages: {
        eyebrow: 'Six pages',
        headline: 'From broadcast schedule to source work, six pages for one anime.',
        lines: [
          { slug: 'seasons', line: 'A season schedule in your time zone' },
          { slug: 'tracking', line: 'Find the next episode in series order' },
          { slug: 'discussion', line: 'Hide events you have not seen' },
          { slug: 'ratings', line: 'Rate episodes and series separately' },
          { slug: 'credits', line: 'One identity for every name' },
          { slug: 'adaptations', line: 'Link source works, sequels, and spin-offs' },
        ],
      },
      schedule: {
        eyebrow: 'Broadcast schedule',
        headline: 'A 1 a.m. premiere, shown on your clock.',
        body: 'Japanese schedules write late-night times as “Tuesday 25:00,” meaning 1 a.m. on Wednesday. REZICS converts the time to your time zone. If the source gives only a date, only the date is shown.',
        link: 'Seasons and schedule',
        photo: {
          src: 'weeks',
          alt: 'Narrow rose-colored paper strips form four rows like a weekly schedule. One strip is muted violet, with one space left empty.',
        },
      },
      next: { text: 'Which episode is next,', muted: 'follow the confirmed order.' },
      spoilers: {
        eyebrow: 'Episode discussion',
        headline: 'One thread per episode. Unseen events stay hidden.',
        body: 'Each episode has its own discussion thread. Events beyond your progress are hidden until you open them. By default, Wiki+ also shows only up to the last episode you watched.',
        link: 'How spoiler boundaries work',
        photo: {
          src: 'covered',
          alt: 'A rose-colored paper strip folded into several panels lies flat, with its later panels covered by a charcoal sheet with a slightly lifted corner.',
        },
      },
      parts: {
        eyebrow: 'Eight parts',
        headline: 'The eight parts used by anime.',
        lead: 'Books, manga, and games use the same parts. Anime uses eight of them, with the schedule beside identity.',
        notes: {
          identity: 'Chinese, Japanese, and English titles all name the same anime. Each sequel season and film has its own identity.',
          schedule: 'Premiere dates, episode air times, delays, and cancellations all appear in one schedule.',
          credits: 'Directors, writers, and production companies each have a listed role. Voice credits link to the voice actor and character.',
          relations: 'Originals, sequel seasons, spin-offs, and remakes each have a named relationship, with a link back to the original.',
          progress: 'Track the episode you have reached, whether you are caught up, and which episode comes next as separate details.',
          ratings: 'The series and each episode have separate ratings, with the number of ratings and rating group shown.',
          discussion: 'Each episode has its own discussion thread. Spoilers beyond your progress stay hidden until you open them.',
          wiki: 'Every Wiki+ fact cites the episode it comes from. You see facts only through the episode you have watched.',
        },
      },
      neighbours: {
        eyebrow: 'Related kinds',
        headline: 'Source works and adaptations each have their place.',
        lead: 'A source work may be a novel, manga, or visual novel, and an anime may later be adapted into a game. Each work has its own page, linked by its relationships. A voice actor remains the same person across every kind of work.',
        tiles: [
          { to: 'books', label: 'Novel source works' },
          { to: 'manga', label: 'Manga source works and versions' },
          { to: 'visual-novels', label: 'Adapted from visual novels' },
          { to: 'games', label: 'Game adaptations and shared voice actors' },
        ],
      },
    },
    seasons: {
      closing: {
        headline: 'Schedule the anime you want to watch.',
        body: 'Start with this season’s new shows, check their broadcast schedule, and set a reminder for the next episode.',
      },
      head: {
        headline: 'One broadcast schedule for every season.',
        lede: 'Anime usually premieres in January, April, July, and October. See the premiere date and every episode’s air time for the shows you follow in one place.',
      },
      marks: {
        eyebrow: 'Five statuses',
        headline: 'Announced, scheduled, available, delayed, and canceled mean different things.',
        rows: [
          { title: 'Announced', body: 'The news is out, but no date has been set.' },
          { title: 'Scheduled', body: 'An air date is set. The time is included when known.' },
          { title: 'Available', body: 'The region, platform, and language where it can be watched are confirmed.' },
          { title: 'Delayed', body: 'The scheduled date changed, and the change remains in the record.' },
          { title: 'Canceled', body: 'It will not air, and the record says so.' },
        ],
      },
      zones: {
        eyebrow: 'Your time zone',
        headline: 'See each episode’s air time in your time zone.',
        body: [
          'Air times are shown in your time zone. The same episode can air on different dates and at different times around the world.',
          'A Japanese schedule’s “Tuesday 25:00” means 1 a.m. on Wednesday. That is midnight Wednesday in Taipei and Tuesday morning in Los Angeles.',
        ],
        photo: {
          src: 'weeks',
          alt: 'Narrow rose-colored paper strips form four rows like a weekly schedule. One strip is muted violet, with one space left empty.',
        },
      },
      known: {
        eyebrow: 'Only confirmed details',
        headline: 'Dates, times, and availability are stated separately.',
        rows: [
          {
            title: 'No time, no guess',
            body: 'When the source gives only a date, the schedule shows only the date and marks the time as unknown. It does not invent a time.',
          },
          {
            title: 'Airing does not mean available',
            body: 'Knowing when an episode airs does not mean it is available where you live. Subtitles and dubbing are listed separately for each region and platform. Unknown details are marked unknown.',
          },
          {
            title: 'Reminders and calendars',
            body: 'Follow an anime to get reminders at the times you choose, and export its schedule as a calendar file. If a source changes an air time, your reminder is flagged so you can decide whether to update it.',
          },
        ],
      },
      years: {
        eyebrow: 'By year',
        headline: 'Browse every anime released in a year.',
        lead: 'Choose a year to see its anime in the catalogue, ordered by available information. Keep scrolling to the last entry. Before the count is complete, the total is marked as “at least.”',
      },
      next: 'Being caught up is different from being finished.',
    },
    tracking: {
      closing: {
        headline: 'Pick up where you left off.',
        body: 'Add anime you are watching to a list, log each episode, and keep a separate record of every rewatch.',
      },
      head: {
        headline: 'Your progress moves with every episode.',
        lede: 'Track anime one episode at a time. Being caught up with the episodes available to you, finishing all episodes that have aired, and completing the series are different things. REZICS marks them separately.',
      },
      statuses: {
        eyebrow: 'Five statuses',
        headline: 'Plan to watch, watching, completed, paused, or dropped.',
        lead: 'Your viewing history stays private unless you choose to share it.',
        rows: [
          { title: 'Plan to watch', body: 'Add it to a list. You will hear when there is news.' },
          { title: 'Watching', body: 'Record your latest episode and get alerts for new episodes based on your notification settings.' },
          { title: 'Completed', body: 'You finished the series. By default, Wiki+ shows all events in the same story.' },
          { title: 'Paused', body: 'Take a break and keep your progress where it is.' },
          { title: 'Dropped', body: 'You stopped watching. The record stays, in case you want to return.' },
        ],
      },
      seasons: {
        eyebrow: 'Across seasons',
        headline: 'Find the next episode in series order.',
        tiles: [
          { title: 'Season one', body: 'Finished 12 of 12 episodes. Next: season two.' },
          { title: 'Season two', body: 'Watched 6 of 6 available episodes. Caught up with the broadcast.' },
          { title: 'Special', body: 'Bonus content that does not affect completion.' },
        ],
      },
      rewatch: {
        eyebrow: 'Rewatching',
        headline: 'A rewatch gets its own record.',
        lead: 'Starting over adds a separate record, without replacing the completion date from your first watch. If you remember only the year, record only the year.',
      },
      lists: {
        text: 'Your lists are yours to take with you:',
        muted: 'Import lists from elsewhere, and export your statuses, progress, and ratings together.',
      },
      next: 'After episode eight, open its discussion thread.',
    },
    discussion: {
      closing: {
        headline: 'Keep the episode you just watched in the discussion.',
        body: 'Find people who watched the same episode and share your thoughts. Later events can wait until you catch up.',
      },
      head: {
        headline: 'Watch an episode, then discuss it.',
        lede: 'Each episode has its own discussion thread, so you do not have to search through one long thread for the whole series. You can read discussions without joining a community.',
      },
      spoiler: {
        eyebrow: 'Spoiler boundary',
        headline: 'Your spoiler boundary follows your progress.',
        body: 'Spoiler-marked content stays hidden until you open it. Opening it means only that you chose to see it. It does not count as a spoiler vote.',
        photo: {
          src: 'covered',
          alt: 'A rose-colored paper strip folded into several panels lies flat, with its later panels covered by a charcoal sheet with a slightly lifted corner.',
        },
      },
      position: {
        eyebrow: 'Your progress',
        headline: 'Choose your spoiler boundary and keep it across pages.',
        rows: [
          { title: 'You set the boundary', body: 'When you are signed in, Wiki+ defaults to the last episode you finished. You can choose another episode or show everything.' },
          { title: 'No spoilers for signed-out visitors', body: 'Visitors who are not signed in see content only up to the first story reveal.' },
          { title: 'Your choice follows you', body: 'Your chosen edition and spoiler boundary stay with you as you move from discussion to reviews to Wiki+.' },
        ],
      },
      conversations: {
        eyebrow: 'Conversations',
        headline: 'Three kinds of conversation, kept separate.',
        lead: 'Each post shows what kind of conversation it belongs to.',
        rows: [
          { title: 'Fan discussion', body: 'Talk about the story and characters, or guess what will happen next.' },
          { title: 'Review replies', body: 'Replies about a specific review stay under that review.' },
          { title: 'Data corrections', body: 'If an air date or voice actor is wrong, discuss it under a correction proposal and include a source.' },
        ],
      },
      spaces: {
        eyebrow: 'Community',
        headline: 'Communities can gather and have their own site.',
        lead: 'Information panels in a Zone use the same facts as the work page.',
        tiles: [
          { title: 'Realm', body: 'The community itself, with members, rules, and moderation.' },
          { title: 'Zone', body: 'A community site for character pages, episode guides, timelines, and relationship maps, with an address chosen by the community.' },
        ],
      },
      unseen: { text: 'What you have not seen', muted: 'can stay unknown.' },
      next: 'Rate the story and production separately.',
    },
    ratings: {
      closing: {
        headline: 'Keep your perspective with the work.',
        body: 'Rate an episode or a series, write a review, and put the works worth revisiting on a list.',
      },
      head: {
        headline: 'Every score says what it measures.',
        lede: 'You can rate a series’ story or the animation in a particular episode. REZICS shows the question, scale, number of ratings, and rating group beside each score, keeping different questions separate.',
      },
      anatomy: {
        eyebrow: 'Rating example',
        headline: 'A 4.2 out of 5.',
        rows: [
          { title: 'Question', body: 'The animation in episode eight. Episode and series ratings are calculated separately.' },
          { title: 'Scale', body: 'Five-point scale, with an average of 4.15 shown as 4.2.' },
          { title: 'Number of ratings', body: '20 people. When there are too few ratings, only the count and distribution are shown, without an average.' },
          { title: 'Distribution', body: 'Ten ratings of 5, six of 4, two of 3, one of 2, and one of 1.' },
          { title: 'Group', body: 'One fan community. The site and other communities each have their own score, which you can compare.' },
        ],
      },
      episodes: {
        text: 'Episodes are episodes.',
        muted: 'The series is the series.',
        note: 'Each episode has its own score. The series score comes only from people who rated the series. If scores are combined, the method and number of episodes are stated separately.',
      },
      targets: {
        eyebrow: 'Reviews',
        headline: 'Reviews say which part they cover.',
        lead: 'A review does not need a rating.',
        rows: [
          { title: 'Story', body: 'Plot, characters, and ending.' },
          { title: 'Production', body: 'Animation, music, and performance.' },
          { title: 'Translation', body: 'A subtitle translation in a specific language, with the edition identified.' },
          { title: 'An episode', body: 'A review about one episode stays on that episode.' },
          { title: 'A character in an episode', body: '“How this character performs in this episode” is a separate question with its own score.' },
        ],
      },
      lists: {
        eyebrow: 'Lists',
        headline: 'Put your list in your own order.',
        lead: 'A list can include anime, source novels, manga, and games. Add a note to each item, arrange them as you like, and export the whole list. Follow someone else’s list to hear when they add an item.',
        tiles: ['Watch order', 'Watching this season', 'Weekend marathon', 'Source work and anime'],
      },
      next: 'Directors, production companies, and voice actors each link to their own works.',
    },
    credits: {
      closing: {
        headline: 'Find the next work through a name.',
        body: 'Follow the credits for directors, animators, and voice actors to meet the people behind each work.',
      },
      head: {
        headline: 'Credits link every name to each work.',
        lede: 'On REZICS, directors, writers, animation directors, studios, and voice actors each have an identity. Open a name to see every work they contributed to and what they did on each one.',
      },
      record: {
        eyebrow: 'A credit',
        headline: 'Every credit records five details.',
        rows: [
          { title: 'Who', body: 'A person or company, linked to their own page.' },
          { title: 'Role', body: 'Director, writer, animation, or voice acting, with the role name translated into each language.' },
          { title: 'Which work', body: 'The work, and whether it is the original or a dub in a particular language.' },
          { title: 'Character', body: 'A voice credit links the voice actor, character, and work in one record.' },
          { title: 'Credit name', body: 'The name used at the time is recorded. A person remains the same identity if their name changes.' },
        ],
      },
      voice: {
        eyebrow: 'Voice actors',
        headline: 'One identity for each voice actor.',
        body: 'Characters voiced in anime, games, and visual novels all appear on one page. Follow an actor to hear when new work is announced.',
        photo: {
          src: 'threads',
          alt: 'A rose-colored sheet has a row of small holes along one edge. Three cotton threads pass through them, each tied to a small blue, muted violet, or rose-colored sheet.',
        },
      },
      studio: {
        eyebrow: 'Studios',
        headline: 'A studio and its timeline of work.',
        lead: 'A company has its own identity, separate from any account or community. Its anime are listed by year.',
      },
      next: 'Follow the link back to the work this anime was adapted from.',
    },
    adaptations: {
      closing: {
        headline: 'Keep reading with the source work.',
        body: 'Follow adaptation and spin-off relationships to novels, manga, and games, with progress tracked separately for each.',
      },
      head: {
        headline: 'Every adaptation links back to its source.',
        lede: 'On REZICS, an anime, its source novel or manga, sequels, spin-offs, and game adaptations each have their own identity, connected by named relationships. Start with any one to find the others.',
      },
      example: {
        eyebrow: 'Example',
        headline: 'One story, told in several forms.',
        body: 'For example, A Certain Magical Index began as a light novel by Kazuma Kamachi. It was adapted into manga, three anime seasons, and a film. Its spin-off A Certain Scientific Railgun has its own manga and anime. On REZICS, each is a separate work, linked by relationships that identify adaptations, sequels, and spin-offs.',
        photo: {
          src: 'sources',
          alt: 'A tall dark green sheet, a smaller charcoal sheet, and a wide rose-colored sheet are layered out of alignment, with a small blue sheet beside them.',
        },
      },
      family: {
        eyebrow: 'Relationship map',
        headline: 'Each work names its relationship to the source.',
        lead: 'Unconfirmed relationships are listed and marked for confirmation, not hidden.',
        tiles: [
          { kind: 'books', relation: 'Source work', name: 'Source novel' },
          { kind: 'manga', relation: 'Adapted from the source', name: 'Manga version' },
          { kind: 'anime', relation: 'Adapted from the source', name: 'Anime season one' },
          { kind: 'anime', relation: 'Sequel to season one', name: 'Anime season two' },
          { kind: 'books', relation: 'Spin-off', name: 'Spin-off novel' },
          { kind: 'games', relation: 'Adapted from the anime', name: 'Game adaptation' },
          { kind: 'visual-novels', relation: 'Adapted from the source', name: 'Visual novel adaptation' },
          { kind: null, relation: 'Relationship to be confirmed', name: 'Another adaptation' },
        ],
      },
      scoped: {
        eyebrow: 'Separate progress',
        headline: 'Track the anime and source work separately.',
        lead: 'Finishing an anime does not mark its source novel as read. The same character may survive in the source but not in the anime. Both accounts can coexist, each stating which work it comes from and which episode or chapter reveals it.',
      },
      relations: {
        eyebrow: 'Relationships',
        headline: 'Named relationships describe both sides.',
        lead: 'Each relationship has a name in every language. One page says “adapted from,” and the other says “adapted into.”',
        rows: [
          { title: 'Adaptation', body: 'A work transformed into another form, such as a novel adapted into anime.' },
          { title: 'Sequel', body: 'A continuation of an earlier story, such as a second season.' },
          { title: 'Series', body: 'Works in the same series, each with its own identity.' },
          { title: 'Remake', body: 'A work made again from the beginning, with its own identity and a link to the earlier work.' },
          { title: 'Spin-off', body: 'Another story that branches off from the same story world.' },
        ],
      },
      orders: {
        text: 'Release order and watch order',
        muted: 'can take different paths.',
        note: 'Works are listed by their announced release dates. To guide new viewers, create a separate watch-order list and include your reasons.',
      },
      next: 'Many anime stories start as manga.',
    },
  },
};

export default site;
