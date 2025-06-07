type Event = {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  type: string;
  date: string;
  location: string;
  virtual?: boolean;
  excerpt:string,
  content: string;
};

export type { Event};
