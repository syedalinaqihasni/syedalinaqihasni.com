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
