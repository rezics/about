// The next page of the manga site (or, after the last page, the next site) for NextChapter.
import site from '../../content/sites/manga';
import type { MangaClosing } from '../../content/sites/manga';
import { kindById, kindHref } from '../../kit/content';
import { nextSite, pageHref } from '../../kit/sites';
import type { KindId } from '../../content/schema';

/** Props for NextChapter after the page with slug `slug`. */
export function nextAfter(slug: string, closing: MangaClosing) {
  const i = site.pages.findIndex((p) => p.slug === slug);
  if (i < 0) throw new Error(`manga: no page with slug "${slug}"`);
  const page = site.pages[i + 1];
  if (page) {
    const tile = site.strings.landing.pages.tiles.find((t) => t.slug === page.slug);
    if (!tile) throw new Error(`manga: page "${page.slug}" has no tile line`);
    return { label: closing.nextLabel, name: closing.nextName, line: tile.line, href: pageHref(site, page) };
  }
  const next = nextSite(site);
  if (!next || !next.theme || !('kind' in next.theme)) throw new Error('manga: the next site is not a kind');
  const kind = kindById(next.theme.kind as KindId);
  return { label: closing.nextLabel, name: closing.nextName, line: kind.summary, href: kindHref(kind.id) };
}
