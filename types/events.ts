type Event = {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
  virtual?: boolean;  
  category?: string;
  tags?: string[];
  excerpt:string,
  content: string;
};

export type { Event};
