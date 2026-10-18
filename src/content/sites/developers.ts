// STUB: the developers site's builder replaces this file (src/kit/README.md). Keep the default export a MiniSite.
import type { MiniSite } from '../schema';
import { site as shared } from '../site';

export default {
  id: 'developers',
  base: '/developers/',
  name: shared.nav.developers,
  theme: { field: '#2f63ad', on: 'paper' },
  pages: [{ slug: '', label: '總覽', meta: shared.developers.meta }],
  strings: { headline: shared.developers.hero.headline, lede: shared.developers.hero.lede, next: shared.kindPage.next },
} satisfies MiniSite<{ headline: string; lede: string; next: string }>;
