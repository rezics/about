/**
 * Where each part sits in a square. A square is a 3×3 grid: the centre (cell 4) holds the name,
 * the eight cells around it hold parts, numbered row by row.
 *
 * `arrange` walks a sequence of part lists. The first uses its own order; after that a part keeps
 * its cell when the previous arrangement had it, and new parts fill the freed cells in reading
 * order. So moving along the sequence shows "same part, same place": only the differences move.
 */
import type { PartId } from '../content/schema';

export const partCells = [0, 1, 2, 3, 5, 6, 7, 8] as const;
export type Cell = (typeof partCells)[number];
export type Layout = Partial<Record<PartId, Cell>>;

export function arrange(sequence: readonly (readonly PartId[])[]): Layout[] {
  const layouts: Layout[] = [];
  let previous: Layout | undefined;
  for (const parts of sequence) {
    if (parts.length !== partCells.length)
      throw new Error(`a square holds exactly ${partCells.length} parts, got ${parts.length}`);
    const layout: Layout = {};
    if (!previous) parts.forEach((part, i) => (layout[part] = partCells[i]));
    else {
      const taken = new Set<Cell>();
      for (const part of parts) {
        const cell = previous[part];
        if (cell !== undefined) {
          layout[part] = cell;
          taken.add(cell);
        }
      }
      const free = partCells.filter((cell) => !taken.has(cell));
      for (const part of parts) if (layout[part] === undefined) layout[part] = free.shift();
    }
    layouts.push(layout);
    previous = layout;
  }
  return layouts;
}

export const cellPosition = (cell: number) => ({ col: cell % 3, row: Math.floor(cell / 3) });
