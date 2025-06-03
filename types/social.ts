/**
 * Represents a LinkedIn post with its metadata.
 *
 * @property id - The unique identifier for the LinkedIn post.
 * @property title - The title or headline of the post.
 * @property content - The main content or body of the post.
 * @property date - The date when the post was published (ISO 8601 format).
 * @property likes - The number of likes the post has received.
 * @property comments - The number of comments on the post.
 */
interface TwitterPost {
  id: string;
  content: string;
  date: string;
  likes: number;
  retweets: number;
}
/**
 * Represents a LinkedIn post with its metadata.
 *
 * @property id - The unique identifier for the LinkedIn post.
 * @property title - The title or headline of the post.
 * @property content - The main content or body of the post.
 * @property date - The date when the post was published (ISO 8601 format).
 * @property likes - The number of likes the post has received.
 * @property comments - The number of comments on the post.
 */
interface LinkedInPost {
  id: string;
  title: string;
  content: string;
  date: string;
  likes: number;
  comments: number;
}

/**
 * Represents a LinkedIn post with its metadata.
 *
 * @property id - The unique identifier for the LinkedIn post.
 * @property title - The title or headline of the post.
 * @property content - The main content or body of the post.
 * @property date - The date when the post was published (ISO 8601 format).
 * @property likes - The number of likes the post has received.
 * @property comments - The number of comments on the post.
 */
interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  date: string;
  likes: number;
}

/**
 * Represents a collection of social media posts grouped by platform.
 *
 * @property {TwitterPost[]} twitter - An array of posts from Twitter.
 * @property {LinkedInPost[]} linkedin - An array of posts from LinkedIn.
 * @property {InstagramPost[]} instagram - An array of posts from Instagram.
 */
interface SocialPosts {
  twitter: TwitterPost[];
  linkedin: LinkedInPost[];
  instagram: InstagramPost[];
}

export type {SocialPosts}