/**
 * Mini-site registry. Every `src/content/sites/<id>.ts` default-exports a `MiniSite`; the kit
 * finds them by glob, so adding a site or a page never edits a shared file.
 */
import { kindIds, moduleIds, type MiniSite, type MiniSitePage } from '../content/schema';

const found = import.meta.glob<MiniSite>('../content/sites/*.ts', { eager: true, import: 'default' });

export const sites: MiniSite[] = Object.entries(found)
  .map(([file, site]) => {
    const id = file.replace(/^.*\/([^/]+)\.ts$/, '$1');
    if (!site || site.id !== id) throw new Error(`${file}: the default export must be a MiniSite with id "${id}"`);
    if (!/^\/([a-z0-9-]+\/)+$/.test(site.base)) throw new Error(`${file}: base "${site.base}" must look like /a/ or /a/b/`);
    if (site.pages[0]?.slug !== '') throw new Error(`${file}: the first page must be the landing page (slug '')`);
    return site;
  })
  .sort((a, b) => a.base.localeCompare(b.base));

export const siteById = (id: string): MiniSite | undefined => sites.find((s) => s.id === id);

export const pageHref = (site: MiniSite, page: MiniSitePage): string =>
  page.slug ? `${site.base}${page.slug}/` : site.base;

/** The site and page that own a path: the site with the longest matching base. */
export function siteFor(pathname: string): { site: MiniSite; page: MiniSitePage } | undefined {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const site = sites.filter((s) => path.startsWith(s.base)).sort((a, b) => b.base.length - a.base.length)[0];
  if (!site) return undefined;
  const slug = path.slice(site.base.length).replace(/\/$/, '');
  const page = site.pages.find((p) => p.slug === slug);
  return page ? { site, page } : undefined;
}

/**
 * The navigation order of the product sites: the nine kinds, then developers, wrapping. The
 * modules form their own ring under /engine/.
 */
export const navigationOrder = [...kindIds, 'developers'] as const;
export const moduleOrder = moduleIds;

/** Where a site's "next site" finale leads: `site.next`, else the next site in its ring. */
export function nextSite(current: MiniSite): MiniSite | undefined {
  if (current.next) return siteById(current.next);
  for (const ring of [navigationOrder as readonly string[], moduleOrder as readonly string[]]) {
    const i = ring.indexOf(current.id);
    if (i < 0) continue;
    for (let step = 1; step < ring.length; step++) {
      const found = siteById(ring[(i + step) % ring.length]!);
      if (found) return found;
    }
  }
  return undefined;
}
