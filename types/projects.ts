export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  gallery: string[]; 
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category?: string; 
  tags?: string[];
  publishedAt: string | Date;
  stats: {
    users: string;   
    orders: string; 
    revenue: string;
  };
  isFeatured: boolean;
  relatedProjects?: RelatedProject[];
  longDescription: string; 
};

export type RelatedProject = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
};
