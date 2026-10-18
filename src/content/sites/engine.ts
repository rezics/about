// STUB: the engine site's builder replaces this file (src/kit/README.md). Keep the default export a MiniSite.
import type { MiniSite } from '../schema';
import { site as shared } from '../site';

export default {
  id: 'engine',
  base: '/engine/',
  name: shared.nav.engine,
  pages: [{ slug: '', label: '總覽', meta: shared.engine.meta }],
  strings: { headline: shared.engine.hero.headline, lede: shared.engine.hero.lede },
} satisfies MiniSite<{ headline: string; lede: string }>;
