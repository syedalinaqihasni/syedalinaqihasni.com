import { Metadata } from 'next';
import { CONSTANT, FEATURED_PROJECTS } from '@/constants/projects';
import ProjectList from '@/components/projects/project-list';
import { styles } from '@/styles/projects';

export const metadata: Metadata = {
  title: 'Projects | Syed Ali Naqi Hasni',
  description: 'View my latest web development and design projects',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://syedalinaqihasni.com',
    title: 'Syed Ali Naqi Hasni | Frontend Web Developer',
    description:
      'Personal portfolio website showcasing my projects, skills, and experience',
    siteName: 'Syed Ali Naqi Hasni',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Ali Naqi Hasni | Frontend Web Developer',
    description:
      'Personal portfolio website showcasing my projects, skills, and experience',
  },
  metadataBase: new URL('https://syedalinaqihasni.com'),
};

export default async function ProjectsPage() {
  return (
    <div className={styles?.CONTAINER_styles}>
      <div className={styles?.CONTENT_WRAPPER_styles}>
        <div className={styles?.HEADER_WRAPPER_styles}>
          <h1 className={styles?.TITLE_styles}>{CONSTANT.title}</h1>
          <p className={styles?.DESCRIPTION_styles}>{CONSTANT.description}</p>
        </div>

        {/* <ProjectList projects={FEATURED_PROJECTS} /> */}
      </div>
    </div>
  );
}
