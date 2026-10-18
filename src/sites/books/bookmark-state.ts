// 書籤歸位, the books landing signature: the pure state of the bookmark figure. One variable, the
// reading position `t` (0 to 6: the step index plus how far the reader is through that step),
// decides every visual: which rows are on the shelf, which squares are read, where the red
// bookmark stands, the reading-language row, the next readable square and the one still waiting.
// The driver (bookmark.ts) only renders this; the server renders state(STEPS) for no script and
// reduced motion.

export const VOLUMES = 12;
export const STEPS = 6;

export type Row = 'ja' | 'zh' | 'omni' | 'en';
export const ROWS: Row[] = ['ja', 'zh', 'omni', 'en'];

/** Published volumes per row; the omnibus is one release covering volumes 1 to 3. */
export const PUBLISHED: Record<Row, number[]> = {
  ja: range(1, 12),
  zh: range(1, 6),
  omni: [1],
  en: range(1, 9),
};
export const OMNIBUS_COVERS = [1, 2, 3];

/** A square: `work:7` (the Work row), `zh:4`, `omni:1` (the wide omnibus square). */
export type Cell = `${'work' | Row}:${number}`;

export interface BookmarkState {
  /** 0 to 5: which step's caption applies. */
  step: number;
  /** Rows slotted onto the shelf. */
  rows: Record<Row, boolean>;
  /** The bookmark stands after this volume (0 = before volume 1). */
  mark: number;
  /** The reading-language row the reader is in. */
  lang: Row;
  /** Read squares in the language rows. */
  read: Cell[];
  /** Volumes read in any row: their Work squares fill. */
  volumes: number[];
  /** The next readable square, if any. */
  next: Cell | null;
  /** A square still waiting for the reader's language, if any. */
  wait: Cell | null;
  /** Where the idle reading line runs (the square being read now). */
  reading: Cell | null;
}

function range(a: number, b: number) {
  return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** Volumes a read square counts as finished: the omnibus counts each of its volumes once. */
export function volumesOf(cell: Cell): number[] {
  const [row, n] = cell.split(':') as [string, string];
  return row === 'omni' ? OMNIBUS_COVERS : [Number(n)];
}

export function state(t: number): BookmarkState {
  const x = clamp(Number.isFinite(t) ? t : 0, 0, STEPS);
  const step = Math.min(STEPS - 1, Math.floor(x));
  // How far through the current step (the last step is complete at x = STEPS).
  const u = x >= STEPS ? 1 : x - step;
  const all = { ja: true, zh: true, omni: true, en: true };

  let s: Omit<BookmarkState, 'step' | 'volumes'>;
  switch (step) {
    case 0:
      s = { rows: { ja: false, zh: false, omni: false, en: false }, mark: 0, lang: 'zh', read: [], next: null, wait: null, reading: 'work:1' };
      break;
    case 1:
      s = { rows: { ...all, omni: false }, mark: 0, lang: 'zh', read: [], next: 'zh:1', wait: null, reading: 'zh:1' };
      break;
    case 2:
      s = { rows: all, mark: 3, lang: 'zh', read: ['omni:1'], next: 'zh:4', wait: null, reading: 'zh:4' };
      break;
    case 3: {
      // The bookmark advances one volume per quarter of the step: 3, then 4, 5, 6.
      const vol = 3 + Math.min(3, Math.floor(u * 4));
      const zh = range(4, vol).map((n) => `zh:${n}` as Cell);
      const next = vol < 6 ? (`zh:${vol + 1}` as Cell) : null;
      s = { rows: all, mark: vol, lang: 'zh', read: ['omni:1', ...zh], next, wait: null, reading: next };
      break;
    }
    case 4:
      s = { rows: all, mark: 6, lang: 'zh', read: ['omni:1', 'zh:4', 'zh:5', 'zh:6'], next: 'ja:7', wait: 'zh:7', reading: 'ja:7' };
      break;
    default: {
      // Up to the Japanese row, read 7 and 8 there, then back down to the Chinese row.
      const base: Cell[] = ['omni:1', 'zh:4', 'zh:5', 'zh:6'];
      if (u < 0.25) s = { rows: all, mark: 6, lang: 'ja', read: base, next: 'ja:7', wait: 'zh:7', reading: 'ja:7' };
      else if (u < 0.5) s = { rows: all, mark: 7, lang: 'ja', read: [...base, 'ja:7'], next: 'ja:8', wait: null, reading: 'ja:8' };
      else if (u < 0.75) s = { rows: all, mark: 8, lang: 'ja', read: [...base, 'ja:7', 'ja:8'], next: 'ja:9', wait: null, reading: 'ja:9' };
      else s = { rows: all, mark: 8, lang: 'zh', read: [...base, 'ja:7', 'ja:8'], next: 'ja:9', wait: 'zh:9', reading: 'ja:9' };
    }
  }
  const volumes = [...new Set(s.read.flatMap(volumesOf))].sort((a, b) => a - b);
  return { step, volumes, ...s };
}

/** Reading position from the steps' boxes: the step whose box holds the anchor line, plus progress. */
export function positionFrom(boxes: { top: number; height: number }[], anchor: number): number {
  let t = 0;
  boxes.forEach((b, i) => {
    if (b.top <= anchor) t = i + clamp((anchor - b.top) / Math.max(1, b.height), 0, 1);
  });
  return Math.min(STEPS, t);
}
