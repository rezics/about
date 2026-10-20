// 通用索引 (/engine/universal-index/), designed by modules agent A (src/sites/engine/SITE.md, "v3").
// The page follows one work, 《魔法禁書目錄》, as a plain-text example of how REZICS records a work
// (.temp/sites/EXAMPLE-WORK.md: no cover or likeness, no publishers or studios, no counts).
import type { MiniSite } from '../schema';
import { modules } from '../modules';
import { site as shared } from '../site';

const mod = modules.find((m) => m.id === 'universal-index')!;

export interface Item {
  title: string;
  body: string;
}

export interface IndexStrings {
  hero: { eyebrow: string; headline: string; lede: string; alt: string };
  names: {
    label: string;
    headline: string;
    lead: string;
    /** `lang` is a BCP 47 tag; the Japanese title is set in a Japanese face (Noto Sans TC lacks 録). */
    names: { name: string; lang: string; label: string }[];
    caption: string;
  };
  people: { label: string; headline: string; lead: string; rows: Item[]; characters: string };
  layers: { label: string; headline: string; lead: string; alt: string; items: Item[]; aside: string };
  relations: {
    label: string;
    headline: string;
    lead: string;
    /** Related works, with each sequel's source made explicit; `kind` colours its tile. */
    items: { id: string; rel: string; name: string; line: string; kind: 'books' | 'manga' | 'anime' | 'visual-novels' }[];
    note: string;
  };
  values: { label: string; headline: string; lead: string; items: Item[] };
  merge: { label: string; headline: string; lead: string; items: Item[] };
  closing: string;
}

export default {
  id: 'universal-index',
  base: '/engine/universal-index/',
  name: 'Universal index',
  theme: { module: 'universal-index' },
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: {
        title: 'Universal index: One thing, one identity',
        description:
          'Using A Certain Magical Index as an example, see how REZICS gives one work a single identity: names in every language, credits, works and editions, sequels and adaptations, filters and views, and merges and splits.',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: 'Modules',
      headline: 'One work, one identity.',
      lede: 'For example, A Certain Magical Index: its Japanese original and Chinese and English titles all point to the same work. The title in your reading language appears first.',
      alt: 'Many same-sized gray and colored sheets form a neat grid on a dark gray base sheet, with one corner lifted',
    },
    names: {
      label: 'Names',
      headline: 'Many names, one identity.',
      lead: 'Each name records its language and use: original title, translation, alias, or pronunciation. Search recognizes every name, and each finds the same work.',
      names: [
        { name: 'A Certain Magical Index', lang: 'zh-Hant', label: 'Traditional Chinese title' },
        { name: 'とある魔術の禁書目録', lang: 'ja', label: 'Original Japanese title' },
        { name: 'A Certain Magical Index', lang: 'en', label: 'English title' },
      ],
      caption: 'A look at how REZICS records a work, using A Certain Magical Index as an example.',
    },
    people: {
      label: 'Credits',
      headline: 'Each person has one identity, with credits by role.',
      lead: 'Kazuma Kamachi is the author of the novels and the original creator of their manga, anime, and game adaptations. Every credit opens the same page. Each name links to a person or organization and states their role and contribution. Conflicting claims are listed with their sources.',
      rows: [
        { title: 'Kazuma Kamachi', body: 'Author of the novels. Original creator of the manga, anime, and game adaptations.' },
        { title: 'Kiyotaka Haimura', body: 'Illustrator of the novels.' },
        { title: 'Chuya Kogino', body: 'Manga artist.' },
      ],
      characters: 'The same applies to characters. A character appearing in a novel, manga, and anime keeps one identity, with each appearance recorded on its work.',
    },
    layers: {
      label: 'Three layers',
      headline: 'Works, texts, and editions are recorded in three layers.',
      lead: 'A work is the story itself. One story can have different texts: the Japanese original, a Chinese translation, and an English translation. Each actual publication is a separate edition.',
      alt: 'Three sheets of dark gray, warm gray, and green paper overlap in a row, with one corner of the warm gray sheet slightly curled',
      items: [
        { title: 'Work', body: 'The story itself. Reviews, follows, and relations attach here.' },
        { title: 'Text', body: 'The original and translations in each language. A translation is another text of the same work, with its own translator and rights.' },
        { title: 'Release', body: 'Paperbacks, ebooks, and collections each have a separate edition that records only what was published at the time.' },
      ],
      aside: 'A typo correction or new printing is still the same work. A version that rewrites the plot is a separate work linked by a “rewrite” relation.',
    },
    relations: {
      label: 'Relations',
      headline: 'Record each relation once, with a view from each end.',
      lead: 'The main series, New Testament, and Genesis Testament each have their own records, linked by sequel relations. The main series page says “sequel,” while the New Testament page says “prequel,” both from the same relation. The manga, anime, and side stories also link to their sources.',
      items: [
        { id: 'shinyaku', rel: 'Sequel to the main series', name: 'New Testament', line: 'Second series, 2011 to 2019', kind: 'books' },
        { id: 'souyaku', rel: 'Sequel to New Testament', name: 'Genesis Testament', line: 'Third series, began in 2020 and continues', kind: 'books' },
        { id: 'manga', rel: 'Adaptation', name: 'Manga', line: 'Illustrated by Chuya Kogino, serialized from 2007', kind: 'manga' },
        { id: 'anime', rel: 'Adaptation', name: 'Anime', line: 'Three seasons (2008, 2010, and 2018) and one film (2013)', kind: 'anime' },
        { id: 'railgun', rel: 'Side story', name: 'A Certain Scientific Railgun', line: 'A side story like A Certain Scientific Accelerator, sharing characters with the main series', kind: 'manga' },
        { id: 'vn', rel: 'Adaptation', name: 'Visual novel', line: 'Released in 2013 and listed in the visual novel catalogue', kind: 'visual-novels' },
      ],
      note: 'Every relation has a name, direction, and source. Similar names are not evidence. Without evidence, a link is not created.',
    },
    values: {
      label: 'Filters',
      headline: 'Every value has its own page.',
      lead: 'People, kinds, languages, and adaptation sources each open to a page. Combine values to filter.',
      items: [
        { title: 'Keep values tied to one appearance', body: '“Protagonist” stays tied to a character in a specific appearance, so works with a different protagonist are not included.' },
        { title: 'Save as a view', body: 'Save and name criteria as a view. Follow it, pin it as a home page tab, or use it as a Zone catalogue.' },
        { title: 'Browse to the last result', body: 'Every list can be browsed to the last item. The page says whether a count is exact or a minimum.' },
      ],
    },
    merge: {
      label: 'Merges and splits',
      headline: 'Merges can be reversed, and splits keep a record of where items went.',
      lead: 'Someone creates a duplicate entry for a work using its English title. Before a merge, REZICS lists every affected record and requires a decision for each conflict.',
      items: [
        {
          title: 'Search before creating',
          body: 'Before creating an entry, search by original title, alias, pronunciation, author, and identifier. If it exists, add an alias or edition. Matching titles or ISBNs are clues, not proof.',
        },
        {
          title: 'Merge',
          body: 'Ratings, lists, library records, and Wiki facts move to the surviving entry. Two ratings by one person do not become two votes, and two owned copies do not become one. Old URLs still open and lead to the surviving entry.',
        },
        { title: 'Reverse', body: 'Reversing a merge is a new decision, not a rewind. Edits made after the merge are returned to the right entries one by one. Unclear cases are flagged for review.' },
        { title: 'Split', body: 'If two books with the same title were recorded as one, splitting them records which entries were created and where each item went.' },
        {
          title: 'Decided by people',
          body: 'Anyone can propose a merge, including an AI agent, but a reviewer makes the decision. Merges with existing use or disputes need approval from two independent people. A bot and its operator count as one.',
        },
      ],
    },
    closing: 'Find a work you know on REZICS and see all its names.',
  },
} satisfies MiniSite<IndexStrings>;
