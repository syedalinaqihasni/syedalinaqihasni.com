
interface TwitterPost {
  id: number;
  content: string;
  date: string;
  likes: number;
  retweets: number;
}
interface LinkedInPost {
  id: number;
  title: string;
  content: string;
  date: string;
  likes: number;
  comments: number;
}

interface InstagramPost {
  id: number;
  image: string;
  caption: string;
  date: string;
  likes: number;
}

interface SocialPosts {
  twitter: TwitterPost[];
  linkedin: LinkedInPost[];
  instagram: InstagramPost[];
}

export type {SocialPosts}