import { Metadata } from 'next';
import SkillsList from '@/components/skills/skills-list';

const PAGE_TITLE = 'Skills | Syed Ali Naqi Hasni';
const PAGE_DESCRIPTION = 'Explore my technical skills and competencies';
const HEADING = 'My Skills';
const SUBHEADING =
  'A comprehensive overview of my technical skills, tools, and competencies.';

/**
 * SEO metadata for the Skills page
 */
export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
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

/**
 * SkillsPage Component
 * Displays a summary of technical skills and competencies
 */
export default function SkillsPage() {
  return (
    <div className={'container mx-auto px-4 py-32 md:py-40'}>
      <div className={'max-w-6xl mx-auto'}>
        <div className={'text-center mb-16'}>
          <h1 className={'text-4xl md:text-5xl font-bold mb-6'}>{HEADING}</h1>
          <p className={'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto'}>
            {SUBHEADING}
          </p>
        </div>

        <SkillsList />
      </div>
    </div>
  );
}
