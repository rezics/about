// STUB: the books site's builder replaces this file (src/kit/README.md). Keep the default export a MiniSite.
import type { MiniSite } from '../schema';
import { kinds } from '../kinds';
import { site as shared } from '../site';

const kind = kinds.find((k) => k.id === 'books')!;

export default {
  id: 'books',
  base: '/books/',
  name: kind.name,
  theme: { kind: 'books' },
  pages: [{ slug: '', label: '總覽', meta: kind.meta }],
  strings: { headline: kind.hero.headline, lede: kind.hero.lede, next: shared.kindPage.next },
} satisfies MiniSite<{ headline: string; lede: string; next: string }>;
