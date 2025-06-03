/**
 * Image type definition for gallery images.
 */
type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  album: string;
  tags: string[];
};

export type {GalleryImage};