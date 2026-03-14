export type Images = {
  id: number;
  src: string;
  alt: string;
  caption: string;
  album: string;
  tags: string[];
  link?: string;
  title?: string;
  paragraph?: string;
};
export type Metadata = {
  title?: string;
  description?: string;
};
