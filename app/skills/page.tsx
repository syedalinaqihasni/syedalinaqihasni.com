import { Metadata } from 'next';
import SkillsList from '@/components/skills/skills-list';
import { CONSTANT } from '@/constants/social';
import { styles } from '@/styles/skills';

// Force static generation


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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>{CONSTANT.title}</h1>
          <p className={styles.description}>{CONSTANT.description}</p>
        </div>

        <SkillsList />
      </div>
    </div>
  );
}

