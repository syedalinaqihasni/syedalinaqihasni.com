
interface TwitterPost {
  id: string;
  content: string;
  date: string;
  likes: number;
  retweets: number;
}
interface LinkedInPost {
  id: string;
  title: string;
  content: string;
  date: string;
  likes: number;
  comments: number;
}

interface InstagramPost {
  id: string;
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