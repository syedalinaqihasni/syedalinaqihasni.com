import { Metadata } from 'next';
import { FEATURED_PROJECTS } from '@/constants/projects';
import ProjectList from '@/components/projects/project-list';

export const metadata: Metadata = {
  title: 'Projects | Syed Ali Naqi Hasni',
  description: 'View my latest web development and design projects',
};

const PAGE_TITLE = 'My Projects';
const PAGE_DESCRIPTION =
  "Here's a selection of my best work across web development, design, and software engineering.";

// CSS Class Constants
const CONTAINER_styles = 'container mx-auto px-4 py-32 md:py-40';
const CONTENT_WRAPPER_styles = 'max-w-6xl mx-auto';
const HEADER_WRAPPER_styles = 'text-center mb-16';
const TITLE_styles = 'text-4xl md:text-5xl font-bold mb-6';
const DESCRIPTION_styles =
  'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto';

export default async function ProjectsPage() {
  return (
    <div className={CONTAINER_styles}>
      <div className={CONTENT_WRAPPER_styles}>
        <div className={HEADER_WRAPPER_styles}>
          <h1 className={TITLE_styles}>{PAGE_TITLE}</h1>
          <p className={DESCRIPTION_styles}>{PAGE_DESCRIPTION}</p>
        </div>

        {/* <ProjectList projects={FEATURED_PROJECTS} /> */}
      </div>
    </div>
  );
}
