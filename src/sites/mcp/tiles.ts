// Tiles for MCP Hub's own pages and its neighbours (SITE.md section 3): each page keeps one
// colour from the ochre ramp on every page, so a page reads as the same paper wherever it is
// indexed. Shapes match the kit's TileMasonry props.
import site, { type McpPage } from '../../content/sites/mcp';
import { accentRamp } from '../../kit/color';
import { kindFields, siteFields, type OnField } from '../../kit/theme';
import { kindById } from '../../kit/content';

type Tone = { bg: string; on: OnField };
export type McpTile = { id: string; name: string; bg: string; on: OnField; href?: string; line?: string };
type Place = { id: string; h: number; line?: boolean };
type RowPlace = { id: string; w?: number; line?: boolean };
export type McpMasonry = { items: McpTile[]; columns: Place[][]; phone: RowPlace[][] };

/** The inner pages in site order. */
export const innerPages: McpPage[] = ['directory', 'evidence', 'versions', 'community', 'maintainers'];

const ramp = accentRamp(kindFields.mcp.field);
// The ramp alternates the accent, light tints and deep shades; the near-paper tint (stop 3) is
// left out so no tile disappears into the ground.
const tones: Record<McpPage, Tone> = {
  evidence: ramp[0]!,
  directory: ramp[2]!,
  versions: ramp[1]!,
  community: ramp[4]!,
  maintainers: ramp[5]!,
};

export function pageTile(slug: McpPage): McpTile {
  const page = site.pages.find((p) => p.slug === slug);
  if (!page) throw new Error(`mcp: no page "${slug}"`);
  return { id: slug, name: page.label, line: site.strings.pageLines[slug], href: `${site.base}${slug}/`, ...tones[slug] };
}

/** The landing's index of the five inner pages: the evidence page leads. */
export function landingPages(): McpMasonry {
  return {
    items: innerPages.map(pageTile),
    columns: [
      [{ id: 'evidence', h: 1 }],
      [{ id: 'directory', h: 3 }, { id: 'versions', h: 2 }],
      [{ id: 'community', h: 2 }, { id: 'maintainers', h: 3 }],
    ],
    phone: [[{ id: 'evidence' }], [{ id: 'directory' }, { id: 'versions' }], [{ id: 'community' }, { id: 'maintainers' }]],
  };
}

/** The end of an inner page: the next page leads, the other three follow. */
export function nextPages(current: McpPage): McpMasonry {
  const i = innerPages.indexOf(current);
  const others = [...innerPages.slice(i + 1), ...innerPages.slice(0, i)];
  const [next, a, b, c] = others as [McpPage, McpPage, McpPage, McpPage];
  return {
    items: [next, a, b, c].map(pageTile),
    columns: [[{ id: next, h: 1 }], [{ id: a, h: 1 }, { id: b, h: 1 }], [{ id: c, h: 1 }]],
    phone: [[{ id: next }], [{ id: a }, { id: b }], [{ id: c }]],
  };
}

const kindTile = (id: 'software' | 'apis' | 'skills', line: string): McpTile => ({
  id,
  name: kindById(id).name,
  line,
  href: `/${id}/`,
  bg: kindFields[id].field,
  on: kindFields[id].on,
});

/** The landing's neighbours: three kinds and the developers site (REZICS's own MCP server). */
export function neighbours(): McpMasonry {
  const n = site.strings.landing.neighbours;
  const dev = n.developers;
  return {
    items: [
      ...n.tiles.map((t) => kindTile(t.kind, t.line)),
      { id: 'developers', name: dev.name, line: dev.line, href: dev.href, ...{ bg: siteFields.developers.field, on: siteFields.developers.on } },
    ],
    columns: [[{ id: 'software', h: 1 }], [{ id: 'apis', h: 1 }], [{ id: 'skills', h: 1 }], [{ id: 'developers', h: 1 }]],
    phone: [[{ id: 'software' }, { id: 'apis' }], [{ id: 'skills' }, { id: 'developers' }]],
  };
}

/** The last page's next site: Skill Hub leads, two neighbouring kinds follow. */
export function nextSite(): McpMasonry {
  const lines = site.strings.maintainers.next.lines;
  return {
    items: [kindTile('skills', lines.skills), kindTile('apis', lines.apis), kindTile('software', lines.software)],
    columns: [[{ id: 'skills', h: 1 }], [{ id: 'apis', h: 1 }, { id: 'software', h: 1 }]],
    phone: [[{ id: 'skills' }], [{ id: 'apis' }, { id: 'software' }]],
  };
}
