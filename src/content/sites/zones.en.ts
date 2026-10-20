// 站點 (/engine/zones/), designed by modules agent A (src/sites/engine/SITE.md, "v3"). The example
// Zone is an illustrative (示意) 《魔法禁書目錄》 Wiki+ in zh-Hant; text only, per
// .temp/sites/EXAMPLE-WORK.md. Its handle, routes and revision log are not REZICS data.
import type { MiniSite } from '../schema';
import { modules } from '../modules';
import { site as shared } from '../site';

const mod = modules.find((m) => m.id === 'zones')!;

export interface Item {
  title: string;
  body: string;
}

export interface ZonesStrings {
  hero: { eyebrow: string; headline: string; lede: string; alt: string };
  routes: {
    label: string;
    headline: string;
    lead: string;
    caption: string;
    /** Route title and its path; `depth` indents a child route. */
    entries: { title: string; path: string; depth?: 1; note?: string }[];
    note: string;
  };
  templates: { label: string; headline: string; lead: string; steps: Item[]; note: string };
  themes: { label: string; headline: string; lead: string; items: Item[] };
  wiki: { label: string; headline: string; lead: string; items: Item[] };
  shared: { label: string; headline: string; lead: string; more: string; alt: string };
  log: { label: string; headline: string; lead: string; caption: string; entries: Item[]; items: Item[] };
  closing: string;
}

export default {
  id: 'zones',
  base: '/engine/zones/',
  name: 'Zones',
  theme: { module: 'zones' },
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: {
        title: 'Zones: Build a site on the shared graph',
        description:
          'A Zone is a complete site that a community builds on shared REZICS data, with its own routes, templates, navigation, and theme. See how a Wiki+ is assembled, avoids spoilers, and changes over time.',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: 'Modules',
      headline: 'Your site, shared data.',
      lede: 'A Zone has its own home page, navigation, and layout. The community shapes the site, while works, people, and facts come from shared data.',
      alt: 'A sheet of dark gray paper is folded into a small house with no roof and a doorway in front. A small rose sheet and blue sheet sit in its two rooms.',
    },
    routes: {
      label: 'Routes',
      headline: 'The community arranges every level of its site.',
      lead: 'Each route has a fixed identity, and paths can use Chinese. Detail pages show only data included in the Zone. Creating a route does not create another record. Navigation is a separate tree, ordered by the community.',
      caption: 'Example: routes for an A Certain Magical Index Wiki+',
      entries: [
        { title: 'Home', path: '/z/index-wiki' },
        { title: 'Works', path: '/z/index-wiki/works' },
        { title: 'New Testament', path: '/z/index-wiki/works/new-testament', depth: 1 },
        { title: 'People', path: '/z/index-wiki/people' },
        { title: 'Reading order', path: '/z/index-wiki/reading-order', note: 'Custom page' },
        { title: 'Timeline', path: '/z/index-wiki/timeline' },
        { title: 'Search', path: '/z/index-wiki/search' },
      ],
      note: 'The Zone route table manages paths, and the platform reserves few words, so it will not take over your URLs. Discussions live at /r/index-wiki on the community side, and the two are linked.',
    },
    templates: {
      label: 'Templates',
      headline: 'Templates are chosen from the most specific match.',
      lead: 'Each page section has a source: the current record, one of its properties, a document, a list, or a saved query. Lists in a section can be browsed to the last item.',
      steps: [
        { title: 'Route setting', body: 'Use the template assigned to this route.' },
        { title: 'Kind', body: 'If none is assigned, use the template for this kind, such as one shared by all people.' },
        { title: 'Structure', body: 'If the kind has none, use the template for its structure.' },
        { title: 'General page', body: 'If none is available, use a general page with names, identifiers, claims and sources, and relations in both directions.' },
      ],
      note: 'An unfamiliar kind does not borrow a book’s buttons. Its page includes only the parts it can use.',
    },
    themes: {
      label: 'Themes',
      headline: 'Themes can change the appearance, not protected features.',
      lead: 'Communities choose branding, colors, type, and layout. The platform protects a few features, which stay in place with every theme.',
      items: [
        { title: 'Chosen by the community', body: 'Logo, colors, type, and layout.' },
        { title: 'Protected by the platform', body: 'Identity, search, language selection, sources, and accessibility.' },
        {
          title: 'Custom rendering code',
          body: 'A Zone can include custom rendering code when more is needed. The code is reviewed first, and readers can switch back to the standard layout at any time. The backend remains the same.',
        },
      ],
    },
    wiki: {
      label: 'Wiki+',
      headline: 'Wiki+ stops where you left off.',
      lead: 'Wiki+ is a Zone for a work, with pages for people, places, timelines, and reading order. Infoboxes read facts from the graph, as do other pages that use the same facts.',
      items: [
        { title: 'Signed out', body: 'Start at the beginning of the story, with unrevealed facts hidden.' },
        { title: 'Signed in', body: 'By default, it stops where you have read. You can choose to show everything.' },
        {
          title: 'Built in one action',
          body: 'On their own computer, a person with a text chooses an AI agent to organize people, places, relations, and events chapter by chapter. Each item includes a location and a short quotation, then the set is submitted as a proposal. It is published after a reviewer approves it. REZICS never receives the full text.',
        },
        { title: 'Decided by each Realm', body: 'Each Realm decides whether agents can draft and whether generated articles are accepted.' },
      ],
    },
    shared: {
      label: 'Shared',
      headline: 'Sites stand alone and share data.',
      lead: 'The Traditional Chinese Wiki+ and an English reading group’s site can share the same works and people. One displays the title in Traditional Chinese, the other displays A Certain Magical Index in English, and both point to the same identity. Each chooses its names, descriptions, order, and sources.',
      more: 'A Zone can include books, anime, and games together to build a site for an entire fictional universe.',
      alt: 'Two separate pieces of dark gray folded paper sit one behind the other on a pale blue strip',
    },
    log: {
      label: 'Revisions',
      headline: 'Every revision stays in the record.',
      lead: 'A revision is one package: routes, navigation, templates, themes, and queries move together into one version. Preview and validate before publishing. Afterward, restore the previous version or export the whole site.',
      caption: 'Example: revision history for one Wiki+',
      entries: [
        { title: 'Version three', body: 'Added a reading order page and a navigation item. Previewed, validated, and published.' },
        { title: 'Version two', body: 'People pages switched to a new template. Restored version one after publishing.' },
        { title: 'Version one', body: 'Home, works, people, and timeline. Published.' },
      ],
      items: [
        { title: 'Four permissions', body: 'Site editing, publishing, community moderation, and graph contributions are separate permissions. Someone who changes the layout cannot necessarily change graph data.' },
        { title: 'Two settings', body: 'Whether a site is public and whether it appears in search and recommendations are separate settings.' },
        { title: 'One path', body: 'People edit in the browser and agents edit through the API, using the same path.' },
      ],
    },
    closing: 'Create a Zone on REZICS to build a site for your community.',
  },
} satisfies MiniSite<ZonesStrings>;
