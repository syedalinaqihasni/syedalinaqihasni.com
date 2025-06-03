/**
 * Image type definition for gallery images.
 */
/**
 * Represents an image in the gallery.
 *
 * @typedef {Object} GalleryImage
 * @property {string} id - Unique identifier for the image.
 * @property {string} src - Source URL or path of the image.
 * @property {string} alt - Alternative text for the image, used for accessibility.
 * @property {string} caption - Caption or description of the image.
 * @property {string} album - Name of the album this image belongs to.
 * @property {string[]} tags - List of tags associated with the image.
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