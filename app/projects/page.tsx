import { Metadata } from 'next';
import { CONSTANT, FEATURED_PROJECTS } from '@/constants/projects';
import ProjectList from '@/components/projects/project-list';

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
          <h1 className={TITLE_styles}>{CONSTANT.title}</h1>
          <p className={DESCRIPTION_styles}>{CONSTANT.description}</p>
        </div>

        {/* <ProjectList projects={FEATURED_PROJECTS} /> */}
      </div>
    </div>
  );
}
