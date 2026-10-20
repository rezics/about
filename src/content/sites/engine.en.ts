// The modules overview (/engine/), designed by modules agent A (src/sites/engine/SITE.md, "v3").
// The kind picker reads each kind's eight parts and notes from kinds.ts. Shared module-ring
// labels live in modules.ts.
// Placeholders in braces are filled at build time.
import type { MiniSite, ModuleId, PartId } from '../schema';
import { site as shared } from '../site';

export interface EngineStrings {
  hero: { headline: string; lede: string; alt: string };
  picker: {
    label: string;
    headline: string;
    lead: string;
    legend: string;
    /** `{kind}` */
    listTitle: string;
    /** `{kind}` */
    link: string;
    note: string;
  };
  statement: [string, string];
  parts: { label: string; headline: string; lead: string; toggle: string; example: string; examples: Record<PartId, string> };
  modules: { label: string; headline: string; lead: string; roles: Record<ModuleId, string> };
  config: { label: string; headline: string; lead: string; items: { title: string; body: string }[]; note: string };
  closing: string;
}

export default {
  id: 'engine',
  base: '/engine/',
  name: 'Modules',
  next: 'universal-index',
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: {
        title: 'REZICS modules: Fifteen parts, five modules',
        description:
          'From the Library, anime, and games to MCP Hub, all nine kinds use the same fifteen parts. Choose a kind to see its eight parts and the five modules they belong to.',
      },
    },
  ],
  strings: {
    hero: {
      headline: 'Nine kinds, one set of parts.',
      lede: 'Books, anime, games, software, and MCP servers all use eight of the same fifteen parts.',
      alt: 'Five gray sheets of different shades form a step, with five small colored sheets on top',
    },
    picker: {
      label: 'Nine kinds',
      headline: 'Choose a kind to see its eight parts.',
      lead: 'Part names stay the same, but their role depends on the kind. Library editions mean translations and collections; game editions mean platforms and regions.',
      legend: 'Choose a kind',
      listTitle: 'Eight parts used by {kind}',
      link: 'Visit {kind}',
      note: 'Each kind uses shared parts as needed. These eight best describe this kind.',
    },
    statement: ['Build each part once,', 'and a new kind only changes the arrangement.'],
    parts: {
      label: 'Fifteen parts',
      headline: 'Fifteen parts, each with one job.',
      lead: 'Each part serves a different purpose for each kind. The full catalog explains what each one does and gives an example.',
      toggle: 'See the parts directory and examples',
      example: 'Example',
      examples: {
        identity: 'One author writes a novel and makes a game. Both entries link to the same person in their credits.',
        names: 'A visual novel’s Japanese title, Chinese title, and romanized title appear together. Search for any of them to find it.',
        editions: 'A three-volume omnibus is one release, but its three works remain distinct.',
        credits: 'Voice actors, characters, and works share one record, so their credits do not have to be pieced together later.',
        relations: 'The anime entry says “Adapted from,” and the original entry shows “Adapted into,” both from the same relationship record.',
        facets: 'Save a view such as “anime with female protagonists adapted from novels,” name it, and follow it.',
        ratings: 'Rate an audiobook’s story, translation, and narration separately.',
        discussion: 'Discussions follow reading progress, so readers who have not reached the ending do not see it.',
        wiki: 'A person page’s infobox uses facts from the graph. Correct a fact once, and every page that uses it is updated.',
        lists: 'An introductory list puts novels, manga, and anime in order, with a short reason for each item.',
        progress: 'Read the first ten volumes in Japanese, then switch to the Chinese edition and continue from volume eleven.',
        follow: 'Follow a saved view and get notified when a new item matches its conditions.',
        offers: 'Availability is marked unknown when there is no data, not shown as in stock.',
        specs: 'A compatibility record names the client, version, and date observed.',
        schedule: 'Announced, scheduled, confirmed, and delayed are four separate statuses.',
      },
    },
    modules: {
      label: 'Five modules',
      headline: 'Parts are grouped into five modules by purpose.',
      lead: 'Each module answers a question and uses a set of parts. Trust is different: it applies to every part and handles sources, rights, and privacy.',
      roles: {
        'universal-index': 'What is this thing',
        community: 'How do people use it',
        zones: 'How does it become a site',
        create: 'How is it created and published',
        trust: 'Why should it be trusted',
      },
    },
    config: {
      label: 'A new kind',
      headline: 'A new kind is a configuration task.',
      lead: 'Add a new kind without building a separate backend. The parts are already there. Prepare five configuration items.',
      items: [
        { title: 'Vocabulary', body: 'Define the kinds and properties, reusing existing vocabulary where possible.' },
        { title: 'Mappings', body: 'Map each field in external data to a property on the graph.' },
        { title: 'Seed data', body: 'The first set of entries and the links between them.' },
        { title: 'Saved views', body: 'Common filters become indexes and tabs.' },
        { title: 'Zone', body: 'A site that arranges these pages into a home for this kind.' },
      ],
      note: 'Build a new behavior once as a part, and connect every kind that needs it.',
    },
    closing: 'Start with the kind you care about. The other eight are already connected to the same account.',
  },
} satisfies MiniSite<EngineStrings>;
