import { Metadata } from 'next';
import SkillsList from '@/components/skills/skills-list';
import { CONSTANT } from '@/constants/social';
import { styles } from '@/styles/skills';
import { getMetadataForPath } from '@/lib/metadata';

// Force static generation
export const metadata = getMetadataForPath('/skills');

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

