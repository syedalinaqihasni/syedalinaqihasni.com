import { PortableTextBlock } from "@portabletext/react";

/**
 * Represents an event with associated metadata and content.
 *
 * @typedef {Object} Event
 * @property {string} id - Unique identifier for the event.
 * @property {string} slug - URL-friendly identifier for the event.
 * @property {string} image - URL or path to the event's image.
 * @property {string} title - Title of the event.
 * @property {string} description - Short description of the event.
 * @property {string} type - Type or category of the event.
 * @property {string} date - Date of the event in ISO format.
 * @property {string} location - Physical or virtual location of the event.
 * @property {boolean} [virtual] - Indicates if the event is virtual (optional).
 * @property {PortableTextBlock[]} content - Rich content blocks describing the event.
 */
type Event = {
  id: string;
  slug: string;
  image: string;
  title: string;
  description: string;
  type: string;
  date: string;
  location: string;
  virtual?: boolean;
  content: string;
};

export type { Event};
