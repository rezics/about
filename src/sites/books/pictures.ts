// The books site's paper still-life photographs (SITE.md "Pictures"): where the files are and
// their sizes. Alt text lives with the copy in src/content/sites/books.ts. Files follow the
// kit's Picture rule `${src}-${width}.avif|webp` in public/images/sites/books/.
const base = '/images/sites/books';

/** A section picture: 3:2, encoded at 640 and 1200 wide. */
const section = (name: string) => ({ src: `${base}/${name}`, widths: [640, 1200], width: 1200, height: 800 });

export const pictures = {
  /** The landing hero: green sheets fanned from the lower right, a sage bookmark; the phone band is its top. */
  hero: {
    src: `${base}/hero`,
    widths: [960, 1920],
    width: 1920,
    height: 1280,
    position: '50% 30%',
    phone: { src: `${base}/hero-phone`, widths: [640, 960], width: 960, height: 640, position: '50% 45%' },
  },
  /** Sheets of different sizes on one shared corner: a work's editions. */
  editions: section('editions'),
  /** One strip folded into pages, the rest still flat: chapters one after another. */
  serial: section('serial'),
  /** Word-like slots cut from a sheet, the pieces laid in lines on a card: a wiki from a text. */
  wiki: section('wiki'),
  /** Three strips of different lengths: three reads of one book. */
  library: section('library'),
};
