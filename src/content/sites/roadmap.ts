// STUB: the roadmap site's builder replaces this file (src/kit/README.md). Keep the default export a MiniSite.
import type { MiniSite } from '../schema';
import { site as shared } from '../site';

export default {
  id: 'roadmap',
  base: '/roadmap/',
  name: shared.nav.roadmap,
  pages: [{ slug: '', label: '總覽', meta: shared.roadmap.meta }],
  strings: { headline: shared.roadmap.hero.headline, lede: shared.roadmap.hero.lede },
} satisfies MiniSite<{ headline: string; lede: string }>;
