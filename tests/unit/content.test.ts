// The shared content is complete and consistent with the schema (src/content/schema.ts).
import { describe, expect, test } from 'vitest';
import { kinds } from '../../src/content/kinds';
import { modules } from '../../src/content/modules';
import { parts } from '../../src/content/parts';
import { site } from '../../src/content/site';
import { kindIds, moduleIds, partIds, type Meta } from '../../src/content/schema';

const len = (s: string) => [...s].length;
const kindSet = new Set<string>(kindIds);

describe('kinds, modules and parts', () => {
  test('nine kinds in the DESIGN.md order, five modules, fifteen parts', () => {
    expect(kinds.map((k) => k.id)).toEqual([...kindIds]);
    expect(modules.map((m) => m.id)).toEqual([...moduleIds]);
    expect(parts.map((p) => p.id).sort()).toEqual([...partIds].sort());
  });

  test.each(kinds.map((k) => [k.id, k] as const))('%s uses exactly eight distinct parts, identity first', (_, kind) => {
    expect(kind.parts).toHaveLength(8);
    expect(new Set(kind.parts).size).toBe(8);
    expect(kind.parts[0]).toBe('identity');
    for (const p of kind.parts) expect(partIds).toContain(p);
  });

  test.each(kinds.map((k) => [k.id, k] as const))('%s has a note for each of its parts and no others', (_, kind) => {
    expect(Object.keys(kind.partNotes).sort()).toEqual([...kind.parts].sort());
    for (const note of Object.values(kind.partNotes)) expect(note?.trim()).toBeTruthy();
  });

  test.each(kinds.map((k) => [k.id, k] as const))('%s connects to two to four real, other kinds', (_, kind) => {
    expect(kind.connections.length).toBeGreaterThanOrEqual(2);
    expect(kind.connections.length).toBeLessThanOrEqual(4);
    for (const c of kind.connections) {
      expect(kindSet.has(c.to), c.to).toBe(true);
      expect(c.to).not.toBe(kind.id);
    }
  });

  test('kind fields fit their squares and tiles', () => {
    for (const k of kinds) {
      expect(k.features.length, k.id).toBeGreaterThanOrEqual(4);
      expect(k.features.length, k.id).toBeLessThanOrEqual(6);
      for (const f of k.features) expect(len(f.title), f.title).toBeLessThanOrEqual(14);
      expect(len(k.summary), k.summary).toBeLessThanOrEqual(16);
      expect(len(k.hero.headline), k.hero.headline).toBeLessThanOrEqual(24);
      expect(k.group).toBe(['mcp', 'skills', 'apis'].includes(k.id) ? 'agents' : 'works');
    }
    for (const p of parts) {
      expect(len(p.name), p.name).toBeGreaterThanOrEqual(2);
      expect(len(p.name), p.name).toBeLessThanOrEqual(4);
    }
  });

  test('modules have three to five points and two to five kinds that use them', () => {
    for (const m of modules) {
      expect(m.points.length, m.id).toBeGreaterThanOrEqual(3);
      expect(m.points.length, m.id).toBeLessThanOrEqual(5);
      expect(m.usedBy.length, m.id).toBeGreaterThanOrEqual(2);
      expect(m.usedBy.length, m.id).toBeLessThanOrEqual(5);
      for (const k of m.usedBy) expect(kindSet.has(k), k).toBe(true);
      expect(len(m.summary), m.summary).toBeLessThanOrEqual(16);
    }
  });

  test('the home story follows real kinds', () => {
    for (const c of site.home.identity.chapters) expect(kindSet.has(c.kind), c.kind).toBe(true);
  });

  test('page metadata: titles at most 24 characters, descriptions 50 to 80', () => {
    const metas: [string, Meta][] = [
      ['engine', site.engine.meta],
      ['developers', site.developers.meta],
      ['roadmap', site.roadmap.meta],
      ['notified', site.notified.meta],
      ['notFound', site.notFound.meta],
      ...kinds.map((k) => [k.id, k.meta] as [string, Meta]),
      ...modules.map((m) => [m.id, m.meta] as [string, Meta]),
    ];
    for (const [id, m] of metas) {
      expect(len(m.title), id).toBeLessThanOrEqual(24);
      expect(len(m.description), id).toBeGreaterThanOrEqual(50);
      expect(len(m.description), id).toBeLessThanOrEqual(80);
    }
    expect(len(site.meta.description)).toBeGreaterThanOrEqual(50);
    expect(len(site.meta.description)).toBeLessThanOrEqual(80);
  });
});
