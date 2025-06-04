/**
 * Represents a project with detailed information, including metadata, descriptions, images, links, statistics, and related projects.
 *
 * @property {string} [id] - Optional unique identifier for the project.
 * @property {string} slug - URL-friendly identifier for the project.
 * @property {string} title - The title of the project.
 * @property {string} [excerpt] - Optional short summary of the project.
 * @property {string} description - Brief description of the project.
 * @property {string} longDescription - Detailed description of the project.
 * @property {string} image - Main image URL for the project.
 * @property {string} [categories] - Optional categories associated with the project.
 * @property {string[]} [tags] - Optional list of tags for the project.
 * @property {string} githubUrl - URL to the project's GitHub repository.
 * @property {string} liveUrl - URL to the live version of the project.
 * @property {string[]} [technologies] - Optional list of technologies used in the project.
 * @property {string} [date] - Optional date associated with the project.
 * @property {string} publishedAt - Date when the project was published.
 * @property {Object} stats - Statistics related to the project.
 * @property {number|string} stats.users - Number of users or a string representation.
 * @property {number|string} stats.orders - Number of orders or a string representation.
 * @property {number|string} stats.revenue - Revenue generated or a string representation.
 * @property {string[]} [gallery] - Optional list of image URLs for the project gallery.
 * @property {Object[]} [relatedProjects] - Optional list of related projects.
 * @property {string} relatedProjects[].id - Unique identifier for the related project.
 * @property {string} relatedProjects[].title - Title of the related project.
 * @property {string} relatedProjects[].slug - Slug for the related project.
 * @property {string} relatedProjects[].description - Description of the related project.
 * @property {string} relatedProjects[].image - Image URL for the related project.
 * @property {string[]} [relatedProjects[].technologies] - Optional list of technologies for the related project.
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
