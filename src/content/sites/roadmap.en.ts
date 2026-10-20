// 路線圖 (/roadmap/), designed by modules agent A (src/sites/engine/SITE.md, "v3"). A sequence
// without dates or status labels: one engine across every kind, one community at a time.
import type { MiniSite } from '../schema';
import { site as shared } from '../site';

export interface Item {
  title: string;
  body: string;
}

export interface RoadmapStrings {
  hero: { headline: string; lede: string; alt: string };
  order: { label: string; headline: string; lead: string; steps: Item[] };
  further: { label: string; headline: string; lead: string; items: Item[] };
  statement: [string, string];
  promises: { label: string; headline: string; lead: string; items: Item[] };
  constant: { label: string; headline: string; items: Item[] };
  closing: string;
}

export default {
  id: 'roadmap',
  base: '/roadmap/',
  name: 'Roadmap',
  pages: [
    {
      slug: '',
      label: 'Overview',
      meta: {
        title: 'REZICS roadmap: Build across, open one by one',
        description:
          'REZICS has one engine and opens one community at a time. All nine kinds are on REZICS, and each new kind uses the same parts. New capabilities are built once.',
      },
    },
  ],
  strings: {
    hero: {
      headline: 'One engine across every kind, one community at a time.',
      lede: 'REZICS does not build a separate system for each field. One engine spans every kind, while communities open one at a time and grow into complete spaces.',
      alt: 'A long strip of dark gray paper unfurls from a roll with six small colored sheets arranged along it',
    },
    order: {
      label: 'Order',
      headline: 'No dates, just an order.',
      lead: 'Each step builds on the last, carrying forward the identities and relations already established.',
      steps: [
        { title: 'Start with parts', body: 'The fifteen shared parts are built once and connected as each kind needs them.' },
        {
          title: 'Nine kinds',
          body: 'The Library, anime, manga, games, software, visual novels, MCP Hub, Skill Hub, and API Hub are on REZICS, along with recipes. Wiki+ for every work and library tracking are central to it.',
        },
        { title: 'One community at a time', body: 'Each time, one community opens. It must already have people investing in it and bring new connections to the graph.' },
        {
          title: 'More kinds',
          body: 'Interactive fiction, science fiction and fantasy catalogues, models, and evaluations are added one kind at a time. Each addition is configuration, with no kind specific backend code.',
        },
        {
          title: 'New capabilities',
          body: 'Build a new behavior once for every kind that needs it. Places, statistics, rankings, automation, challenges, record imports, invitations, verified names, and paid memberships all work this way.',
        },
      ],
    },
    further: {
      label: 'More kinds',
      headline: 'More than nine kinds.',
      lead: 'These use the same parts. Work events, pilgrimage locations, and specialist bookstores also use the location capability.',
      items: [
        { title: 'Science fiction and fantasy', body: 'Each story in an anthology is its own work. Find which edition contains the translation you want and avoid buying it twice.' },
        { title: 'Interactive fiction', body: 'Find short works in a language you read, with the required interpreter and platform, and a link to where you can play them.' },
        { title: 'Models and evaluations', body: 'Each score lists the model version, evaluation conditions, dataset, and date. User reviews are separate.' },
        { title: 'Work events', body: 'Conventions, signings, and release events link to works, creators, venues, and dates. Tickets are sold on the organizer’s site.' },
        { title: 'Pilgrimage locations', body: 'Public locations featured in works avoid spoilers based on your progress. Private homes are excluded, and your movements are not tracked.' },
        { title: 'Specialist bookstores', body: 'Bookstores confirmed by their owners. Edition availability comes only from participating stores and is marked unknown when no data is available.' },
      ],
    },
    statement: ['The number of parts grows slowly, while the kinds keep growing.', 'Each new kind uses the same engine.'],
    promises: {
      label: 'One graph',
      headline: 'What one graph makes possible.',
      lead: 'More kinds mean more connections. These things are possible because every kind is on the same graph.',
      items: [
        { title: 'Follow a story through', body: 'Follow reading and viewing order and where to find each part, from novel to manga, anime, and game.' },
        { title: 'A library that knows what comes next', body: 'Keep what you read, watch, and play in one library, with progress, editions, and languages specific to each kind.' },
        { title: 'Turn lists into plans', body: 'Order and annotate lists across kinds, then turn them into a calendar or map.' },
        { title: 'Follow a person', body: 'Follow a creator to see their books, games, credits, and contributions under one identity.' },
        { title: 'Take it into the world', body: 'Know when a work you follow has a convention, signing, or pilgrimage location.' },
      ],
    },
    constant: {
      label: 'What stays the same',
      headline: 'What will not change along the way.',
      items: [
        { title: 'One engine', body: 'No separate site for every field or separate database for every language.' },
        { title: 'No page farms', body: 'Pages are not built around ads or generated in bulk for search rankings or AI citations.' },
        { title: 'Creator earnings', body: 'Creator earnings are not used to cover operating expenses.' },
        { title: 'Contributor licenses', body: 'Data is not used beyond the scope of contributor licenses.' },
        { title: 'Places and events', body: 'Only places and events connected to works and creators are included.' },
      ],
    },
    closing: 'When another kind is added, your account and records stay where they are.',
  },
} satisfies MiniSite<RoadmapStrings>;
