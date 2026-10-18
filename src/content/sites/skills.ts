// STUB: the skills site's builder replaces this file (src/kit/README.md). Keep the default export a MiniSite.
import type { MiniSite } from '../schema';
import { kinds } from '../kinds';
import { site as shared } from '../site';

const kind = kinds.find((k) => k.id === 'skills')!;

export default {
  id: 'skills',
  base: '/skills/',
  name: kind.name,
  theme: { kind: 'skills' },
  pages: [{ slug: '', label: '總覽', meta: kind.meta }],
  strings: { headline: kind.hero.headline, lede: kind.hero.lede, next: shared.kindPage.next },
} satisfies MiniSite<{ headline: string; lede: string; next: string }>;
