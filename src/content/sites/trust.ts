// STUB: the trust module page's builder replaces this file (src/kit/README.md). Keep the default export a MiniSite.
import type { MiniSite } from '../schema';
import { modules } from '../modules';
import { site as shared } from '../site';

const mod = modules.find((m) => m.id === 'trust')!;

export default {
  id: 'trust',
  base: '/engine/trust/',
  name: mod.name,
  theme: { module: 'trust' },
  pages: [{ slug: '', label: '總覽', meta: mod.meta }],
  strings: { headline: mod.hero.headline, lede: mod.hero.lede, next: shared.modulePage.next },
} satisfies MiniSite<{ headline: string; lede: string; next: string }>;
