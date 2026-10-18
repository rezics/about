/** Shared SEO helpers: the Open Graph image path every page derives from its own path. */

/** `/` → `index`, `/books/` → `books`, `/engine/community/` → `engine-community`. */
export function ogSlug(pathname: string): string {
  const slug = pathname.replace(/^\/|\/$/g, '').replace(/\//g, '-');
  return slug || 'index';
}

export const ogPath = (pathname: string) => `/og/${ogSlug(pathname)}.png`;
