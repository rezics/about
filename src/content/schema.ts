/**
 * The shape of every visible string on the site. Pages render these objects and contain no
 * copy of their own. See DESIGN.md ("Content model and voice") for the writing rules.
 */

export const kindIds = [
  'books',
  'anime',
  'manga',
  'games',
  'software',
  'visual-novels',
  'mcp',
  'skills',
  'apis',
] as const;
export type KindId = (typeof kindIds)[number];

export const moduleIds = ['universal-index', 'community', 'zones', 'create', 'trust'] as const;
export type ModuleId = (typeof moduleIds)[number];

export const partIds = [
  'identity',
  'names',
  'editions',
  'credits',
  'relations',
  'facets',
  'ratings',
  'discussion',
  'wiki',
  'lists',
  'progress',
  'follow',
  'offers',
  'specs',
  'schedule',
] as const;
export type PartId = (typeof partIds)[number];

/** Page metadata: `title` is the document title without the site suffix. */
export interface Meta {
  /** At most 24 characters. */
  title: string;
  /** 50 to 80 CJK characters, a human sentence. */
  description: string;
}

export interface Part {
  id: PartId;
  /** Two to four characters; fits one cell of a square. */
  name: string;
  /** One sentence: what this part gives any kind. */
  gives: string;
}

export interface Item {
  title: string;
  body: string;
}

export interface Kind {
  id: KindId;
  /** The name set inside the square, e.g. 書庫, 視覺小說, MCP Hub. */
  name: string;
  group: 'works' | 'agents';
  /** The navigation tile's line beneath the square: at most 16 CJK characters. */
  summary: string;
  meta: Meta;
  hero: {
    /** The page h1: at most 24 CJK characters. */
    headline: string;
    /** 40 to 90 CJK characters. */
    lede: string;
  };
  /** What a person can do here: 4 to 6 items. Titles at most 14 CJK characters. */
  features: Item[];
  /** Exactly eight parts; `identity` first. Order = cells, row by row, skipping the centre. */
  parts: PartId[];
  /** For each part in `parts` (and only those): one sentence on what it gives this kind. */
  partNotes: Partial<Record<PartId, string>>;
  /** Two to four neighbouring kinds and how they relate. */
  connections: { to: KindId; label: string }[];
  community: { headline: string; body: string };
  /** Alt text for the kind's generated image. */
  imageAlt: string;
}

export interface Module {
  id: ModuleId;
  /** e.g. 通用索引 */
  name: string;
  /** The navigation tile's line: at most 16 CJK characters. */
  summary: string;
  meta: Meta;
  hero: { headline: string; lede: string };
  /** Three to five points for the sticky narrative. */
  points: Item[];
  statement: string;
  /** Kinds that show this module best, two to five. */
  usedBy: KindId[];
}

export interface Principle {
  title: string;
  body: string;
}

export interface Site {
  name: 'REZICS';
  url: string;
  /** The live product every action leads to (「前往 REZICS」). */
  productUrl: string;
  meta: Meta;
  nav: {
    products: string;
    engine: string;
    developers: string;
    roadmap: string;
    menu: string;
    close: string;
    skip: string;
    action: string;
    productsIntro: { title: string; body: string; all: string };
    engineIntro: { title: string; body: string; all: string };
    groups: { works: string; agents: string };
  };
  home: {
    hero: { headline: string; lede: string; primary: string; secondary: string; caption: string };
    index: { headline: string; body: string; nextKind: string };
    identity: {
      headline: string;
      body: string;
      /** Chapters that follow one public-domain work across kinds; the first is the source. */
      chapters: { kind: KindId; title: string; body: string }[];
      /** The relation drawn from each later chapter back to the first, e.g. 改編自. */
      link: string;
    };
    community: { headline: string; body: string; points: Item[] };
    engine: { headline: string; body: string };
    agents: { headline: string; body: string; facts: Item[] };
    principles: { headline: string; items: Principle[] };
    finale: { headline: string; body: string };
  };
  engine: {
    meta: Meta;
    hero: { headline: string; lede: string };
    parts: { headline: string; body: string; pick: string };
    modules: { headline: string; body: string };
  };
  kindPage: {
    featuresHeading: string;
    partsHeading: string;
    partsCaption: string;
    connectionsHeading: string;
    next: string;
  };
  modulePage: { usedByHeading: string; next: string };
  developers: {
    meta: Meta;
    hero: { headline: string; lede: string };
    facts: Item[];
    sample: { caption: string; language: string; code: string };
    statement: string;
  };
  roadmap: {
    meta: Meta;
    hero: { headline: string; lede: string };
    /** A sequence without dates. */
    steps: Item[];
    statement: string;
  };
  /** The action square that ends every page and leads into the product. */
  product: { headline: string; body: string };
  notFound: { meta: Meta; headline: string; body: string; back: string };
  /** Shared control labels (kit primitives such as the composing square). */
  ui: {
    /** Pause and resume a moving element (WCAG 2.2.2). */
    pause: string;
    play: string;
    /** Group label for the row of kind buttons under a composing square. */
    pick: string;
  };
  footer: { tagline: string; source: string; sourceUrl: string; colophon: string; copyright: string };
}

/** One page of a mini-site: a tab in its site bar. */
export interface MiniSitePage {
  /** Path below the site's base: '' for the landing page, else a slug such as `editions`. */
  slug: string;
  /** The tab label in the site bar: at most 6 CJK characters. */
  label: string;
  meta: Meta;
}

/**
 * A mini-site: a kind, a module, the engine overview, developers or the roadmap. Each lives in
 * `src/content/sites/<id>.ts` as the default export and is discovered by the kit (src/kit).
 */
export interface MiniSite<Strings = Record<string, unknown>> {
  /** Unique id, equal to the file name; a kind or module id for those sites. */
  id: string;
  /** Base path with leading and trailing slash, e.g. `/books/` or `/engine/community/`. */
  base: string;
  /** The name in the site bar. */
  name: string;
  /**
   * Colours: a kind's or a module's field, or a site's own field (developers: REZICS ink blue
   * `#2f63ad` with paper text). Omit for the neutral ink field. Text on the field must pass AA.
   */
  theme?: { kind: KindId } | { module: ModuleId } | { field: string; on: 'paper' | 'ink' };
  /** Id of the site the "next site" finale leads to; defaults to the navigation order. */
  next?: string;
  /** Pages in tab order; the first is the landing page (slug ''). */
  pages: MiniSitePage[];
  /** An action of the site's own in its bar (「前往 REZICS」 is in the global header). */
  action?: { label: string; href: string };
  /** Everything else the site shows, shaped by the site itself. */
  strings: Strings;
}
