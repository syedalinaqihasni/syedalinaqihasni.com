
/**
 * Represents a project with metadata and links.
 *
 * @typedef Projects
 * @property {string} id - Unique identifier for the project.
 * @property {string} title - The title of the project.
 * @property {string} description - A brief description of the project.
 * @property {string} image - URL or path to the project's image.
 * @property {string} category - The category this project belongs to.
 * @property {string[]} tags - List of tags associated with the project.
 * @property {string} githubUrl - URL to the project's GitHub repository.
 * @property {string} liveUrl - URL to the live version of the project.
 */

type Projects = {
  id?: string; 
  slug: string;
  title: string;
  excerpt?: string;
  description: string;
  longDescription: string; 
  image: string;
  categories?: string; 
  tags?: string[]; 
  githubUrl: string;
  liveUrl: string;
  technologies?: string[];
  date?: string;
  publishedAt: string;
  stats: {
    users: number | string;
    orders: number | string;
    revenue: number | string;
  };
  gallery?: string[];
  relatedProjects?: {
    id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    technologies?: string[];
  }[];
};


export type { Projects };
