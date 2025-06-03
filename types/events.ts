import { PortableTextBlock } from "@portabletext/react";

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
  content: PortableTextBlock[];
};
type Events = {
  id: string;
  slug: string;
  image: string;
  title: string;
  description: string;
  type: string;
  date: string;
  location: string;
  virtual?: boolean;
};

export type { Event,Events };
