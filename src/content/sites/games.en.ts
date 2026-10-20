// The games site (遊戲): every visible string of /games/ and its six inner pages.
// Design record: src/sites/games/SITE.md (section "v3"); sources for every claim:
// src/sites/games/facts.md. Example data (one fictional adventure game, its releases, versions
// and playthroughs) is always captioned 示意 on screen; it describes no real game. The one real
// work named is 《魔法禁書目錄》, text only, as an example of how relations are recorded.
import type { KindId, MiniSite } from '../schema';

export type Lang = 'zh' | 'ja' | 'en';
export type Platform = 'pc' | 'console' | 'handheld' | 'mobile';
export type Edition = 'std' | 'deluxe' | 'complete';

export interface Titled {
  title: string;
  body: string;
}

/** A section: the eyebrow, the serif heading and its lead text. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}

/** A large statement: the first half in ink, the second half muted. */
export interface Said {
  text: string;
  more: string;
  /** A sentence or two in body size under the statement. */
  note?: string;
}

/** One release of the example game, as the release filter shows it. */
export interface ExampleRelease {
  id: string;
  platform: Platform;
  edition: Edition;
  /** Shown inside the table cell when a cell holds more than one release (regions). */
  region?: string;
  langs: Lang[];
  /** A state instead of languages (announced, no date yet). */
  state?: string;
}

export type GamesStrings = {
  /** The line under every page's closing statement, above 前往 REZICS. */
  closingBody: string;
  /** Alternative text of the paper still-life photographs (public/images/sites/games/). */
  pictures: Record<'hero' | 'store' | 'library' | 'guides' | 'creators', string>;
  example: {
    langNames: Record<Lang, string>;
    platforms: Record<Platform, string>;
    editions: Record<Edition, string>;
    releases: ExampleRelease[];
  };
  landing: {
    hero: { headline: string; lede: string };
    releases: Head & { items: (Titled & { id: string })[]; caption: string; link: string };
    versions: Said;
    store: Head & { link: string };
    pages: Head & { lines: Record<string, string> };
    connections: Head & { tiles: { to: KindId; line: string }[] };
    closing: string;
  };
  releases: {
    hero: { headline: string; lead: string };
    filter: Head & {
      groups: { lang: string; platform: string };
      clear: string;
      none: string;
      result: string;
      resultNone: string;
      corner: string;
      caption: string;
    };
    states: Head & { items: Titled[] };
    languages: Head & { items: Titled[] };
    bundles: Head & { tiles: Titled[]; caption: string };
    requirements: Head & { tiles: Titled[] };
    offers: Said;
    closing: string;
  };
  store: {
    hero: { headline: string; lead: string };
    checkout: Head & { items: Titled[] };
    purchase: Head & { steps: Titled[] };
    keep: Head & { lead: string; more: string };
    privacy: Said;
    refuses: Head & { items: Titled[] };
    closing: string;
  };
  library: {
    hero: { headline: string; lead: string };
    status: Head & { items: Titled[] };
    slots: Head & { columns: [string, string, string]; rows: { slot: string; release: string; state: string }[]; caption: string };
    together: Head & { tiles: { to: KindId; name: string; at: string }[]; caption: string };
    playtime: Head & { items: Titled[]; note: string };
    takeout: Said;
    closing: string;
  };
  reviews: {
    hero: { headline: string; lead: string };
    versions: Head & { tiles: Titled[]; caption: string };
    who: Head & { items: Titled[] };
    targets: Head & { tiles: Titled[] };
    rules: Head & { items: Titled[] };
    talk: Said;
    closing: string;
  };
  guides: {
    hero: { headline: string; lead: string };
    fog: Head;
    guides: Head & { lead: string; more: string };
    rules: Head & { items: Titled[] };
    adaptations: Head & { lead: string; chain: { to: KindId; name: string; line: string; rel?: string }[]; note: string; caption: string };
    zone: Said;
    closing: string;
  };
  creators: {
    hero: { headline: string; lead: string };
    rights: Head & { items: Titled[] };
    ledger: Head & { rows: { label: string; op?: string; total?: boolean }[]; note: string; reserve: string; caption: string };
    name: Head & { tiles: { to?: KindId; name: string; role: string }[]; caption: string };
    home: Head & { lead: string; more: string };
    rules: Said;
    closing: string;
  };
};

const strings: GamesStrings = {
  closingBody: 'Find releases, track playthroughs, write reviews, and buy games from independent creators with one account.',
  pictures: {
    hero: 'On warm white paper, a large blue sheet fans out into smaller pieces of blue, purple, and teal.',
    store: 'A light blue strip passes through a slit in blue paper, with its lower half curled gently upward.',
    library: 'A shallow tray folded from blue paper has narrow slots across its surface. Blue, light blue, rose, and green paper stand in the slots, with the last one empty.',
    guides: 'A long blue strip of paper folds several times. The first three folds are open, and the rest are stacked beneath a white sheet.',
    creators: 'A sheet of blue paper is folded into a small standing pavilion beside one purple and one light blue sheet.',
  },
  example: {
    langNames: { zh: 'Traditional Chinese', ja: 'Japanese', en: 'English' },
    platforms: { pc: 'PC', console: 'Console', handheld: 'Handheld', mobile: 'Mobile' },
    editions: { std: 'Standard', deluxe: 'Deluxe', complete: 'Complete' },
    releases: [
      { id: 'pc-std', platform: 'pc', edition: 'std', langs: ['zh', 'ja', 'en'] },
      { id: 'pc-deluxe', platform: 'pc', edition: 'deluxe', langs: ['zh', 'ja', 'en'] },
      { id: 'console-std', platform: 'console', edition: 'std', langs: ['ja', 'en'] },
      { id: 'console-complete', platform: 'console', edition: 'complete', langs: ['zh', 'ja', 'en'] },
      { id: 'handheld-asia', platform: 'handheld', edition: 'std', region: 'Asia edition', langs: ['zh', 'ja'] },
      { id: 'handheld-japan', platform: 'handheld', edition: 'std', region: 'Japan edition', langs: ['ja'] },
      { id: 'handheld-complete', platform: 'handheld', edition: 'complete', langs: ['ja'] },
      { id: 'mobile-std', platform: 'mobile', edition: 'std', langs: [], state: 'Announced' },
    ],
  },

  landing: {
    hero: {
      headline: 'Every game and every release, clearly recorded.',
      lede: 'Releases, editions, and languages are recorded by platform. Ratings name the edition, and guides and Wiki+ belong to the same game. You can also buy downloadable games from independent creators here.',
    },
    releases: {
      label: 'Releases',
      headline: 'Each release of a game has its own record.',
      lead: 'PC, console, handheld, and mobile releases each have a record. So do regional, deluxe, and complete editions. Each record lists its languages, requirements, and availability history.',
      items: [
        { id: 'handheld-asia', title: 'Handheld, Asia edition', body: 'Text: Traditional Chinese and Japanese. Region: Asia. The Japan edition has its own record with Japanese text only.' },
        { id: 'pc-std', title: 'PC, standard edition', body: 'Text and subtitles: Traditional Chinese, Japanese, and English. Audio: Japanese. Each language is recorded separately.' },
        { id: 'console-complete', title: 'Console, complete edition', body: 'Text: Traditional Chinese, Japanese, and English. The base game and all expansions keep their own pages and ratings.' },
        { id: 'mobile-std', title: 'Mobile, standard edition', body: 'Language: Unknown. Status: Announced. Until the details are confirmed, languages from other platforms are not carried over.' },
      ],
      caption: 'Example: four releases of a fictional adventure game.',
      link: 'Find a playable release',
    },
    versions: {
      text: 'Ratings stay with the release. Downloads do not affect rankings;',
      more: 'unknown details are labeled instead of guessed.',
    },
    store: {
      label: 'Store',
      headline: 'Keep the files for games you buy.',
      lead: 'The REZICS store sells games and visual novels from independent creators under contract. They have no DRM and need no launcher. Creators keep their copyright, and each deduction appears on the settlement statement. Ratings, discussions, and Wiki+ are on the same page.',
      link: 'See how the store works',
    },
    pages: {
      label: 'Six pages',
      headline: 'One page for each part of the experience.',
      lines: {
        releases: 'Filter one release by language, platform, and edition',
        store: 'Pay once and redownload under the purchase terms',
        library: 'Track the platform for every playthrough',
        reviews: 'Ratings show the edition and the group behind them',
        guides: 'Follow your progress and explore adaptations',
        creators: 'Keep your copyright and see every deduction',
      },
    },
    connections: {
      label: 'Related kinds',
      headline: 'Five kinds connected to games',
      lead: 'Adaptations, source works, and shared creators connect games to other kinds. Follow a game from its source novel while tracking your reading and play progress separately.',
      tiles: [
        { to: 'visual-novels', line: 'Choose releases by language, platform, and content' },
        { to: 'books', line: 'Source works and novels based on games' },
        { to: 'anime', line: 'Games adapted into anime and anime adapted into games' },
        { to: 'manga', line: 'Manga from the same story, linked to the game' },
        { to: 'software', line: 'Match engines, creator tools, and mods to game editions' },
      ],
    },
    closing: 'Find the right release for your next game.',
  },

  releases: {
    hero: {
      headline: 'Find the release you can play.',
      lead: 'The language you want and the device you have must appear on the same release. REZICS records each platform, region, and edition separately and checks them together when you filter.',
    },
    filter: {
      label: 'Filters',
      headline: 'Filters apply to one release.',
      lead: 'If you select Traditional Chinese and handheld, only releases that meet both conditions remain. A different edition with Traditional Chinese or a different platform with a handheld release does not count.',
      groups: { lang: 'Language', platform: 'Platform' },
      clear: 'Clear filters',
      none: 'No such release',
      result: 'Matching releases: {count}',
      resultNone: 'No release matches all of these conditions.',
      corner: 'Platform / edition',
      caption: 'Example: releases of a fictional adventure game.',
    },
    states: {
      label: 'Release status',
      headline: 'Track each step from announcement to removal.',
      lead: 'Dates can change without erasing the record. Follow a game to see where it stands.',
      items: [
        { title: 'Announced', body: 'The publisher announces the game or edition, with a source.' },
        { title: 'Scheduled', body: 'A release date has been announced. It is a planned date, not a release.' },
        { title: 'Available', body: 'The game is confirmed for purchase or play, with a verified date.' },
        { title: 'Delayed', body: 'The date changes, and the previous date stays in the record.' },
        { title: 'Delisted', body: 'The game is no longer sold or provided, with the date recorded.' },
      ],
    },
    languages: {
      label: 'Languages',
      headline: 'Text, audio, and subtitles are tracked separately.',
      lead: '“Available in Chinese” may mean subtitles only or include audio. REZICS records text, audio, and subtitle languages separately. A translated title does not mean a translation exists: a Chinese title does not guarantee a Chinese edition.',
      items: [
        { title: 'Official translation', body: 'Provided by the publisher and recorded on the release where it appears.' },
        { title: 'Fan translation', body: 'Credits the team and names the edition and coverage. It is never labeled official.' },
        { title: 'Languages added later', body: 'A language added in an update is a new language edition linked to its source. It does not rewrite the original release record.' },
      ],
    },
    bundles: {
      label: 'Bundles and expansions',
      headline: 'One release can include several works.',
      lead: 'Works in a bundle keep their own identities. You buy one release, while ratings and discussions remain on each work inside it.',
      tiles: [
        { title: 'Complete edition', body: 'Includes the base game and all expansions' },
        { title: 'Base game', body: 'The game itself, with its own rating' },
        { title: 'Expansion', body: 'Standalone content has its own page linked to the base game' },
        { title: 'Soundtrack', body: 'A music work listed under its composer' },
        { title: 'Remake', body: 'A separate work linked to the original' },
        { title: 'Mod', body: 'Names the game edition it requires' },
      ],
      caption: 'Example: a complete edition and related works. A port with unchanged content is a new release of the same game.',
    },
    requirements: {
      label: 'Requirements',
      headline: 'Requirements name their source.',
      lead: 'On the same machine, a game’s official requirements may differ from what players experience. Both appear side by side with their sources and dates.',
      tiles: [
        { title: 'Official requirements', body: 'Minimum and recommended specs with a source and the applicable game edition' },
        { title: 'Player results', body: 'Hardware, settings, results, and test date' },
        { title: 'Still unknown', body: 'Unknown, incompatible, and outdated are different states' },
      ],
    },
    offers: {
      text: 'When details are missing,',
      more: 'the record says “Unknown.”',
      note: 'Availability and prices at each store and in each region have dated records, so changes remain visible. If a price cannot be found, one store’s price does not stand in for all of them.',
    },
    closing: 'Match your language and device to one release.',
  },

  store: {
    hero: {
      headline: 'Buy once and keep the files.',
      lead: 'Games and visual novels here come from independent creators under contract with REZICS. They have no DRM and need no launcher. Redownload purchased games under the purchase terms.',
    },
    checkout: {
      label: 'Before checkout',
      headline: 'Eight details to check before checkout.',
      lead: 'Every game page lists these details before you pay.',
      items: [
        { title: 'Edition and languages', body: 'Which edition you are buying and which languages it includes.' },
        { title: 'System requirements', body: 'Supported platforms and what the game needs to run.' },
        { title: 'Price including tax', body: 'The total price, including tax, is shown before payment.' },
        { title: 'Seller', body: 'Who is selling the game and who receives your payment.' },
        { title: 'License', body: 'What rights to use the game you receive.' },
        { title: 'Refund terms', body: 'When you can get a refund and how to request one.' },
        { title: 'External accounts', body: 'Any required account or runtime is listed before purchase.' },
        { title: 'AI use disclosure', body: 'Creators disclose whether AI was used for images, text, or translation.' },
      ],
    },
    purchase: {
      label: 'One purchase',
      headline: 'Six steps from demo to redownload.',
      lead: 'Buy on the game’s own page, beside its ratings, discussions, and Wiki+.',
      steps: [
        { title: 'Try the demo', body: 'Play the demo before you decide' },
        { title: 'Pay', body: 'Pay once and keep the receipt in your records' },
        { title: 'Download', body: 'Get files for your platform' },
        { title: 'Update', body: 'Updates include release notes' },
        { title: 'Redownload', body: 'Sign in on a new computer and download again' },
        { title: 'After delisting', body: 'Your license remains under the original terms after a regular delisting' },
      ],
    },
    keep: {
      label: 'What you keep',
      headline: 'Three things you keep',
      lead: 'Redownload DRM free game files under the purchase terms. Keep each receipt with your purchase history. Your license and its terms are saved as shown before purchase.',
      more: 'No DRM does not permit resale or distribution. Your license is for personal use. Refunds follow the terms on the page, and consumer rights under local law still apply.',
    },
    privacy: {
      text: 'The games you buy',
      more: 'do not reveal your library to creators.',
      note: 'Creators receive information needed for accounting and customer support. A purchase does not share your play history, lists, or other activity with them.',
    },
    refuses: {
      label: 'What we do not do',
      headline: 'What this store does not do',
      items: [
        { title: 'No launcher required', body: 'You do not need to install REZICS software to play a game you bought.' },
        { title: 'No DRM', body: 'REZICS does not add activation checks to files.' },
        { title: 'No adult rated games', body: 'The store does not sell R18 or R18G works, even under another label or split into patches.' },
        { title: 'No open submissions', body: 'Games in the store come from creators under contract with REZICS. Rights are confirmed for every game.' },
      ],
    },
    closing: 'Know what you are buying and keep what you paid for.',
  },

  library: {
    hero: {
      headline: 'One library across platforms and kinds.',
      lead: 'Track games on PC, console, handheld, and mobile in one place. Each playthrough records its platform and edition. Books you read and anime you watch are there too.',
    },
    status: {
      label: 'Status',
      headline: 'Track each status from plan to completion.',
      items: [
        { title: 'Want to play', body: 'Add a game to your list to follow it. You will be notified when a new edition appears in a language you understand.' },
        { title: 'Playing', body: 'For games with chapters, track progress and edition. Discussions and Wiki+ use it to hide spoilers.' },
        { title: 'On hold', body: 'Take a break without giving up. Your progress stays in place so you can pick up where you left off.' },
        { title: 'Completed', body: 'Completion is recorded on the work. Expansions in a complete edition are tracked separately.' },
        { title: 'Dropped', body: 'Mark a game as dropped when you stop playing. The record stays, and you can start another playthrough if you return.' },
      ],
    },
    slots: {
      label: 'Play history',
      headline: 'Each playthrough has its own record.',
      lead: 'Playing the same game a second time starts a new playthrough and does not overwrite the first. Each one records its platform, edition, and progress.',
      columns: ['Playthrough', 'Platform and edition', 'Status'],
      rows: [
        { slot: 'First', release: 'Handheld, Asia edition', state: 'Completed' },
        { slot: 'Second', release: 'PC, version 1.2', state: 'Playing, chapter 5' },
        { slot: 'Third', release: 'Console, complete edition', state: 'On hold, in an expansion' },
      ],
      caption: 'Example: ownership is recorded separately. Buying a game does not mean you played it.',
    },
    together: {
      label: 'One library',
      headline: 'Books, anime, manga, and games in one library.',
      lead: 'Track progress with the right unit for each kind. Lists can mix works too. A summer play list can include a game, its source novel, and an anime adaptation, with an order and notes, then export the whole list.',
      tiles: [
        { to: 'games', name: 'Games', at: 'Chapter 5' },
        { to: 'books', name: 'Novels', at: 'Volume 3' },
        { to: 'anime', name: 'Anime', at: 'Episode 8' },
        { to: 'manga', name: 'Manga', at: 'Chapter 42' },
        { to: 'visual-novels', name: 'Visual novels', at: 'Route 2' },
      ],
      caption: 'Example: one person’s library tracks five kinds with their own units.',
    },
    playtime: {
      label: 'Play time',
      headline: 'Estimate completion time by platform and play style.',
      lead: 'When you want to know if you have time to start a game tonight, you need reliable estimates. REZICS uses only records that players choose to share.',
      items: [
        { title: 'By platform', body: 'PC and handheld times are calculated separately. Records without a platform form their own group.' },
        { title: 'By play style', body: 'Main story only and full completion are calculated separately.' },
        { title: 'Completed runs only', body: 'Records without a completion status or time are excluded from the average.' },
        { title: 'Show sample size', body: 'The average includes the median range and number of records.' },
      ],
      note: 'Your play time is private by default. It enters the statistics only if you choose to contribute it, and only the aggregate results are public.',
    },
    takeout: {
      text: 'Your library is yours,',
      more: 'and you can take it with you.',
      note: 'Exports are free. Imported records keep their sources and matches. You can also request an export if you cannot sign in.',
    },
    closing: 'Keep every playthrough in your own library.',
  },

  reviews: {
    hero: {
      headline: 'Name the edition before you rate it.',
      lead: 'Games keep changing after release. A rating for version 1.0 should not stand in for 2.0, and one community’s taste should not speak for everyone. Each rating names its edition and group.',
    },
    versions: {
      label: 'Editions',
      headline: 'Each edition has its own rating.',
      lead: 'Your rating is tied to the edition you played. An overall rating across editions is shown separately, with its calculation explained.',
      tiles: [
        { title: 'Version 1.0', body: 'The release day version' },
        { title: 'Version 1.1', body: 'An update that fixes save issues' },
        { title: 'Version 1.2', body: 'Adds new levels' },
        { title: 'Version 2.0', body: 'A major update' },
        { title: 'Complete edition', body: 'A release with all expansions' },
      ],
      caption: 'Example: editions of a fictional game.',
    },
    who: {
      label: 'Groups',
      headline: 'Who is behind a rating?',
      lead: 'Compare ratings from the whole site, communities you joined, and the community with the most ratings. Recent and all-time ratings answer different questions and stay separate.',
      items: [
        { title: 'Count and distribution', body: 'Each rating includes the number of ratings and their distribution.' },
        { title: 'Too few ratings', body: 'When there are not enough ratings, only the count and distribution appear. No average is calculated.' },
        { title: 'Imported ratings', body: 'Ratings imported from other sites are labeled separately and are not mixed with REZICS ratings.' },
      ],
    },
    targets: {
      label: 'Review subjects',
      headline: 'Rate the story, translation, or production.',
      lead: 'A review names what it is about. You can praise the story and critique the translation separately. Reviews can also be text only, with no rating.',
      tiles: [
        { title: 'Story', body: 'Plot and characters' },
        { title: 'Translation', body: 'Translation quality in a specific language edition' },
        { title: 'Production', body: 'Gameplay, visuals, music, and technical performance' },
        { title: 'This edition', body: 'How a specific platform and edition perform' },
        { title: 'Character in this edition', body: 'Does not change the character’s own rating' },
      ],
    },
    rules: {
      label: 'Rankings',
      headline: 'How rankings are calculated',
      items: [
        { title: 'No download counts', body: 'REZICS does not record downloads, so they are not used for rankings or shown.' },
        { title: 'Recommendations include a reason', body: 'When a Realm recommends a game, it links to the record behind that decision.' },
        { title: 'Popularity is not accuracy', body: 'The number of ratings affects ranking only. It does not change a game’s category or details.' },
        { title: 'Spoilers are labeled separately', body: 'Communities can vote to flag spoilers. These labels are separate from the author’s warnings.' },
      ],
    },
    talk: {
      text: 'Discussions, reviews, and data corrections',
      more: 'each have their own place.',
      note: 'Chat about a guide, respond to a review, or report incorrect details in separate spaces. Your selected edition and spoiler progress follow you as you move between them.',
    },
    closing: 'Every rating has an edition and a group.',
  },

  guides: {
    hero: {
      headline: 'See only as far as you have played.',
      lead: 'Characters, places, levels, and guides all link to the same game. Wiki+ hides later spoilers based on your chapter or route progress.',
    },
    fog: {
      label: 'Spoilers',
      headline: 'Hide what you have not played yet.',
      lead: 'Choose your progress to show the characters, places, and events you can read. Later content stays hidden until you choose to reveal everything. Visitors who are not signed in do not see story reveals by default.',
    },
    guides: {
      label: 'Guides',
      headline: 'Guides name the edition they cover.',
      lead: 'The same level can play very differently in versions 1.0 and 2.0. Guides name the game edition and platform they cover, so readers know which one they are for after an update.',
      more: 'Community mod collections also name the game edition and whether compatibility has been checked. Every edit is recorded: see who changed what, compare versions, or restore an earlier one.',
    },
    rules: {
      label: 'Wiki+',
      headline: 'Five rules for Wiki+',
      items: [
        { title: 'One record everywhere', body: 'Character profiles, filters, and lists use the same record. Correct it once, and every view follows.' },
        { title: 'AI proposes, people review', body: 'An agent can submit new facts with sources. Content written by an agent stays hidden until a person reviews it.' },
        { title: 'One page per character', body: 'A character shared by a game, novel, and anime has one page. Voice actors are credited with the character and work.' },
        { title: 'Work from scripts', body: 'For visual novels with supported script formats, people with the script can use the local toolkit to extract characters, places, and events passage by passage, then submit a proposal. REZICS receives sourced proposals, never the full script.' },
        { title: 'Take it with you', body: 'Export Wiki+ content and its edit history.' },
      ],
    },
    adaptations: {
      label: 'Adaptations',
      headline: 'Follow each link from source to game.',
      lead: 'For example, A Certain Magical Index, the light novel series by Kazuma Kamachi, has manga, three seasons of TV anime, a film, fighting games, visual novels, and mobile role-playing games. In REZICS, each is a separate work linked to its source as an adaptation. A character keeps the same identity across them all.',
      chain: [
        { to: 'books', name: 'Light novels', line: 'Source series: main series, New Testament, and Genesis' },
        { to: 'manga', name: 'Manga', line: 'Serialized since 2007', rel: 'Adapted from' },
        { to: 'anime', name: 'Anime', line: 'Three TV seasons and one film', rel: 'Adapted from' },
        { to: 'visual-novels', name: 'Visual novels', line: 'A 2013 game', rel: 'Adapted from' },
        { to: 'games', name: 'Games', line: 'Fighting games and mobile role-playing games', rel: 'Adapted from' },
      ],
      note: 'Publication order and recommended reading or play order are tracked separately. You can also arrange works by the story timeline, starting with the earliest event.',
      caption: 'Example: how REZICS records relations between works in A Certain Magical Index.',
    },
    zone: {
      text: 'A game’s community',
      more: 'can have its own site.',
      note: 'A Realm is a game community with members, rules, and discussions. A Zone is a site the community runs with its own paths, navigation, and design. It can host guides and Wiki+, with character and game data from the REZICS catalog.',
    },
    closing: 'Follow your progress and every adaptation.',
  },

  creators: {
    hero: {
      headline: 'Publish your game and keep your copyright.',
      lead: 'REZICS contracts with independent creators to publish games and visual novels. Players get DRM free files and updates. You get an itemized settlement statement and one identity connecting all your works.',
    },
    rights: {
      label: 'Rights',
      headline: 'What you keep and what you license',
      items: [
        { title: 'Copyright', body: 'The game remains yours. REZICS receives a nonexclusive license to host, sell, and deliver files for the agreed period and regions.' },
        { title: 'Separate approval', body: 'Translations, adaptations, major changes, new editions, and using your work to train AI require separate approval.' },
        { title: 'License declaration', body: 'The license you declare for a work is recorded with its version, scope, and declaration date.' },
        { title: 'End of contract', body: 'New sales stop as agreed, and earned amounts are settled. Players keep their license under the original terms and applicable law.' },
      ],
    },
    ledger: {
      label: 'Settlement',
      headline: 'Every item on your settlement, clearly listed.',
      rows: [
        { label: 'Amount paid by players' },
        { label: 'Taxes collected', op: 'Subtract' },
        { label: 'Payment processing and collection fees', op: 'Subtract' },
        { label: 'Refunds and chargebacks', op: 'Subtract' },
        { label: 'Net revenue', op: 'Equals', total: true },
        { label: 'Your share' },
      ],
      note: 'No item is deducted twice. Server and hosting costs, salaries, marketing, and REZICS income taxes are not deducted from your revenue.',
      reserve: 'If a reserve is required, its basis, amount or cap, review date, and release rules are stated.',
      caption: 'Example settlement statement. Transaction fees, sales regions, and adjustments depend on the contract.',
    },
    name: {
      label: 'One identity',
      headline: 'One identity connects everything you make.',
      lead: 'Games you develop, novels you write, soundtracks you compose, and anime you voice are all connected to one identity. Players who follow you can see your new work and announcements.',
      tiles: [
        { to: 'games', name: 'Games', role: 'Developer' },
        { to: 'books', name: 'Novels', role: 'Author' },
        { name: 'Soundtrack', role: 'Composer' },
        { to: 'anime', name: 'Anime', role: 'Voice actor' },
      ],
      caption: 'Every name in the credits links to a portfolio like this.',
    },
    home: {
      label: 'Community and site',
      headline: 'Give your game a community and a site.',
      lead: 'Create a Realm for players to talk and a Zone for the official site. Add announcements, release records, and update notes to the catalog. Players who follow your game receive notices in their language.',
      more: 'Prepare a release kit with images, a description, and a schedule before a new edition launches. Media and players can cite it. You can also use the local toolkit to read your script, organize characters and events, and build the game’s Wiki+. The full script is never sent to REZICS.',
    },
    rules: {
      text: 'Before you sell,',
      more: 'make the details clear.',
      note: 'Demos, descriptions, screenshots, and compatibility details must be accurate. List any external account or runtime before purchase. Disclose AI use accurately. Adult rated works cannot be listed.',
    },
    closing: 'Your work stays yours, and the numbers are clear.',
  },
};

export default {
  id: 'games',
  base: '/games/',
  name: 'Games',
  theme: { kind: 'games' },
  next: 'software',
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: {
        title: 'REZICS games: catalog, store, and library',
        description:
          'Every game has one page in REZICS, with separate records for platforms and editions. Find one you can play on your device and in your language, track each playthrough, and buy files you can keep from independent creators.',
      },
    },
    {
      slug: 'releases',
      label: 'Platforms and editions',
      meta: {
        title: 'Platforms and editions: find a release you can play',
        description:
          'PC, console, handheld, and mobile releases of a game each have a record in REZICS, as do regional, deluxe, and complete editions. Languages, requirements, and availability are listed separately, and filters apply to one release at a time.',
      },
    },
    {
      slug: 'store',
      label: 'Store',
      meta: {
        title: 'REZICS store: games you can keep',
        description:
          'REZICS publishes games and visual novels from independent creators under contract. There is no DRM or launcher, and purchases can be redownloaded under the terms. Editions, languages, requirements, prices including tax, and refund terms are shown before checkout.',
      },
    },
    {
      slug: 'library',
      label: 'Library',
      meta: {
        title: 'Library: keep track of every playthrough',
        description:
          'Keep games you want to play, are playing, have paused, completed, or dropped in one library, with platform and edition recorded for every playthrough. Books, anime, and manga are part of the same record. Export is free, and you can take your data with you at any time.',
      },
    },
    {
      slug: 'reviews',
      label: 'Ratings and reviews',
      meta: {
        title: 'Game ratings and reviews: name the edition',
        description:
          'REZICS game ratings name the edition and group behind them, with counts and distributions. Reviews can be text only, and story, translation, and production are rated separately. Downloads do not affect rankings.',
      },
    },
    {
      slug: 'guides',
      label: 'Guides and Wiki+',
      meta: {
        title: 'Guides, Wiki+, and adaptations',
        description:
          'Guides, characters, and places for a game are on Wiki+, which hides spoilers based on your progress and records every edit. Works adapted into novels, anime, and manga link back to the same game. Communities can also create their own sites.',
      },
    },
    {
      slug: 'creators',
      label: 'Creators',
      meta: {
        title: 'Creators: publish your game on REZICS',
        description:
          'Independent creators publish games and visual novels through REZICS while keeping their copyright and providing DRM free files and updates. Settlement statements list taxes, fees, and refunds item by item. One identity connects your games, novels, and music.',
      },
    },
  ],
  strings,
} satisfies MiniSite<GamesStrings>;
