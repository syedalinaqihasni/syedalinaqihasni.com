/**
 * Represents an event with details such as title, description, date, and location.
 *
 * @property {string} id - Unique identifier for the event.
 * @property {string} slug - URL-friendly identifier for the event.
 * @property {string} image - URL or path to the event's image.
 * @property {string} title - Title of the event.
 * @property {string} description - Full description of the event.
 * @property {string} excerpt - Short summary or excerpt of the event.
 * @property {string} type - Type or category of the event (e.g., conference, meetup).
 * @property {string} date - Date of the event in ISO format.
 * @property {string} location - Physical or virtual location of the event.
 * @property {boolean} [virtual] - Indicates if the event is virtual (optional).
 * @property {string} content - Main content or body of the event.
 */
type Event = {
  id: string;
  slug: string;
  image: string;
  title: string;
  description: string;
  excerpt: string;
  type: string;
  date: string;
  location: string;
  virtual?: boolean;
  content: string;
};

export type { Event};
