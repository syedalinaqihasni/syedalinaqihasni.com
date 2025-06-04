/**
 * Represents a blog post with metadata and content.
 *
 * @typedef {Object} Post
 * @property {string} id - Unique identifier for the post.
 * @property {string} title - Title of the blog post.
 * @property {string} excerpt - Short summary or excerpt of the post.
 * @property {string} slug - URL-friendly identifier for the post.
 * @property {string} publishedAt - ISO date string representing when the post was published.
 * @property {string} readingTime - Estimated reading time for the post (e.g., "5 min read").
 * @property {string} image - URL or path to the post's featured image.
 * @property {string[]} categories - List of categories or tags associated with the post.
 * @property {string} content - Full content of the blog post in markdown or HTML format.
 */
type Post = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  readingTime: string;
  image: string;
  categories: string[];
  content: string;}

export type { Post, };
