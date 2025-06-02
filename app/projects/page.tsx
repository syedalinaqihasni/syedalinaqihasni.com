import { Metadata } from 'next';
import { FEATURED_PROJECTS } from '@/constants/projects';
import ProjectList from '@/components/projects/project-list';
import { styles } from '@/styles/projects';

export const metadata: Metadata = {
  title: 'Projects | Syed Ali Naqi Hasni',
  description: 'View my latest web development and design projects',
};

const PAGE_TITLE = 'My Projects';
const  PAGE_DESCRIPTION =
  "Here's a selection of my best work across web development, design, and software engineering.";

export default async function ProjectsPage() {
  return (
    <div className={styles?.container}>
      <div className={styles?.contentWrapper}>
        <div className={styles?.headerWrapper}>
          <h1 className={styles?.title}>{PAGE_TITLE}</h1>
          <p className={styles?.description}>{PAGE_DESCRIPTION}</p>
        </div>

        {/* <ProjectList projects={FEATURED_PROJECTS} /> */}
      </div>
    </div>
  );
}
