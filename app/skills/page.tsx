import { Metadata } from 'next';
import SkillsList from '@/components/skills/skills-list';
import { CONSTANT } from '@/constants/social';

export const metadata: Metadata = {
  title: 'Skills | Syed Ali Naqi Hasni',
  description: 'Explore my technical skills and competencies',
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
          <h1 className={'text-4xl md:text-5xl font-bold mb-6'}>{CONSTANT.title}</h1>
          <p className={'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto'}>
            {CONSTANT.description}
          </p>
        </div>

        <SkillsList />
      </div>
    </div>
  );
}
