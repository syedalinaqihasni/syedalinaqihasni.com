
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
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

export type { Projects };
