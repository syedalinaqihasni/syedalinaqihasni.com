import { Metadata } from 'next';
import ProjectList from '@/components/projects/project-list';
import { FEATURED_PROJECTS } from '@/constants';

export const metadata: Metadata = {
  title: 'Projects | Syed Ali Naqi Hasni',
  description: 'View my latest web development and design projects',
};

const PAGE_TITLE = 'My Projects';
const PAGE_DESCRIPTION =
  "Here's a selection of my best work across web development, design, and software engineering.";

export default async function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{PAGE_TITLE}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {PAGE_DESCRIPTION}
          </p>
        </div>

        {/* <ProjectList /> */}
      </div>
    </div>
  );
}
