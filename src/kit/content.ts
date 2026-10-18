/** Lookups over the shared content (src/content), for kit components and pages. */
import { kinds } from '../content/kinds';
import { modules } from '../content/modules';
import { parts } from '../content/parts';
import type { Kind, KindId, Module, ModuleId, Part, PartId } from '../content/schema';

export { kinds, modules, parts };
export { site } from '../content/site';

const byId = <T extends { id: string }>(list: T[], id: string, what: string): T => {
  const found = list.find((x) => x.id === id);
  if (!found) throw new Error(`unknown ${what} "${id}"`);
  return found;
};

export const kindById = (id: KindId): Kind => byId(kinds, id, 'kind');
export const moduleById = (id: ModuleId): Module => byId(modules, id, 'module');
export const partById = (id: PartId): Part => byId(parts, id, 'part');

/** Base paths of the shared sites: kinds at the root, modules under /engine/. */
export const kindHref = (id: KindId) => `/${id}/`;
export const moduleHref = (id: ModuleId) => `/engine/${id}/`;
/** Picture files for a kind: `${base}-960.avif` and friends (public/images/kinds/). */
export const kindImage = (id: KindId) => `/images/kinds/${id}`;
