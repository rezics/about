/** The same responsive sources are used by Picture and its optional head preload. */
export interface PictureSource {
  src: string;
  widths: number[];
  width: number;
  height: number;
  position?: string;
}

export interface PictureImage extends PictureSource {
  alt: string;
  phone?: PictureSource;
}

export const PHONE_PICTURE = '(max-width: 767px)';
export const WIDE_PICTURE = '(min-width: 768px)';
export const PHOTO_ROW_SIZES = '(max-width: 767px) 100vw, 58vw';

export function pictureSrcSet(source: Pick<PictureSource, 'src' | 'widths'>, format: 'avif' | 'webp') {
  return [...source.widths].sort((a, b) => a - b).map((width) => `${source.src}-${width}.${format} ${width}w`).join(', ');
}
