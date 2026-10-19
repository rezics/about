// The site's own pages as tiles (landing) and as an index of the other pages (inner pages), and the
// neighbouring hubs. Tile colours are papers of the developers slate (SITE.md "Theme"): dark and
// light alternate across the masonry on wide screens and along the rows on phones.
import type { MasonryItem, MasonryPlace, MasonryRowPlace } from '../../kit/components/TileMasonry.astro';
import { kindById, kindHref } from '../../kit/content';
import { pageHref } from '../../kit/sites';
import { kindFields, type OnField } from '../../kit/theme';
import site from '../../content/sites/developers';

const papers: Record<string, { bg: string; on: OnField }> = {
  api: { bg: '#3b4a5a', on: 'paper' },
  'mcp-server': { bg: '#9aa8b6', on: 'ink' },
  apps: { bg: '#c9d1d9', on: 'ink' },
  'wiki-toolkit': { bg: '#2c3743', on: 'paper' },
  zones: { bg: '#56677a', on: 'paper' },
  'open-source': { bg: '#b7c2cd', on: 'ink' },
};

const inner = site.pages.filter((p) => p.slug !== '');
const lines = site.strings.landing.pages.lines;

export const pageTiles: MasonryItem[] = inner.map((p) => ({
  id: p.slug,
  name: p.label,
  line: lines[p.slug],
  href: pageHref(site, p),
  ...papers[p.slug]!,
}));

/** Three columns that end level: the API and the wiki toolkit tallest. */
export const pageColumns: MasonryPlace[][] = [
  [{ id: 'api', h: 5 }, { id: 'apps', h: 3 }],
  [{ id: 'mcp-server', h: 3 }, { id: 'wiki-toolkit', h: 5 }],
  [{ id: 'zones', h: 4 }, { id: 'open-source', h: 4 }],
];
export const pagePhone: MasonryRowPlace[][] = [
  [{ id: 'api' }, { id: 'mcp-server' }],
  [{ id: 'apps' }, { id: 'wiki-toolkit' }],
  [{ id: 'zones' }, { id: 'open-source' }],
];

const hubIds = site.strings.landing.hubs.items;
export const hubTiles: MasonryItem[] = hubIds.map(({ kind, line }) => ({
  id: kind,
  name: kindById(kind).name,
  line,
  href: kindHref(kind),
  bg: kindFields[kind].field,
  on: kindFields[kind].on,
}));
export const hubColumns: MasonryPlace[][] = hubIds.map(({ kind }) => [{ id: kind, h: 1 }]);
export const hubPhone: MasonryRowPlace[][] = [[{ id: hubIds[0]!.kind }, { id: hubIds[1]!.kind }], [{ id: hubIds[2]!.kind }]];

/** The other pages of the site, in tab order, as index rows; the last page adds the next site. */
export function otherPages(slug: string): { name: string; desc: string; href: string }[] {
  const rows = inner.filter((p) => p.slug !== slug).map((p) => ({ name: p.label, desc: lines[p.slug]!, href: pageHref(site, p) }));
  if (slug === inner[inner.length - 1]!.slug) {
    const next = kindById('books');
    rows.push({ name: next.name, desc: `${site.strings.common.nextSite}：${next.summary}`, href: kindHref(next.id) });
  }
  return rows;
}
