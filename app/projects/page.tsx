import { Metadata } from 'next';
import { CONSTANT, projects } from '@/constants/projects';
import ProjectList from '@/components/projects/project-list';
import { styles } from '@/styles/projects';
import { getMetadataForPath } from '@/lib/metadata';

// Force static generation

export const metadata = getMetadataForPath('/blog');

export default async function ProjectsPage() {
  return (
    <div className={styles?.CONTAINER_styles}>
      <div className={styles?.CONTENT_WRAPPER_styles}>
        <div className={styles?.HEADER_WRAPPER_styles}>
          <h1 className={styles?.TITLE_styles}>{CONSTANT.title}</h1>
          <p className={styles?.DESCRIPTION_styles}>{CONSTANT.description}</p>
        </div>

        <ProjectList  />
      </div>
    </div>
  );
}
