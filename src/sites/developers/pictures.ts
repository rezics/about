// The site's paper still-lifes (SITE.md "Pictures"): section pictures at 640 and 1200 wide with a
// 3:2 phone crop at 640 and 960 that keeps the paper subject in the frame. All decorative.
const base = '/images/sites/developers';

export type SectionPicture = 'mcp' | 'apps' | 'wiki' | 'zones';

export function picture(name: SectionPicture) {
  return {
    src: `${base}/${name}`,
    widths: [640, 1200],
    width: 1200,
    height: 800,
    alt: '',
    phone: { src: `${base}/${name}-phone`, widths: [640, 960], width: 960, height: 640 },
  };
}
