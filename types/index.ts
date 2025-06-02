type Post = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  readingTime: string;
  image: string;
  categories: string[];
};

type Event = {
  _id: string;
  slug: string;
  image: string;
  title: string;
  description: string;
  type: string;
  date: string;
  location: string;
  virtual?: boolean;
};
type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

export type { Post, Event, Project };
