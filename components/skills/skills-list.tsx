'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

/**
 * Static text labels for skill categories.
 */
const TEXT = {
  categories: {
    frontend: 'Frontend',
    backend: 'Backend',
    devops: 'DevOps',
    design: 'Design',
    soft: 'Soft Skills',
  },
};

/**
 * Skill data for each category.
 * @type {{ [key: string]: { name: string; level: number }[] }}
 */
const SKILLS_DATA = {
  frontend: [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 92 },
    { name: 'Next.js', level: 88 },
    { name: 'Vue.js', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Framer Motion', level: 85 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 82 },
    { name: 'Python', level: 75 },
    { name: 'Django', level: 70 },
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'GraphQL', level: 78 },
    { name: 'REST API', level: 90 },
  ],
  devops: [
    { name: 'Git/GitHub', level: 92 },
    { name: 'Docker', level: 70 },
    { name: 'CI/CD', level: 75 },
    { name: 'AWS', level: 65 },
    { name: 'Vercel', level: 88 },
    { name: 'Netlify', level: 85 },
  ],
  design: [
    { name: 'UI/UX Design', level: 88 },
    { name: 'Figma', level: 85 },
    { name: 'Adobe XD', level: 75 },
    { name: 'Responsive Design', level: 92 },
    { name: 'Design Systems', level: 80 },
  ],
  soft: [
    { name: 'Communication', level: 95 },
    { name: 'Teamwork', level: 90 },
    { name: 'Problem Solving', level: 92 },
    { name: 'Time Management', level: 85 },
    { name: 'Adaptability', level: 90 },
  ],
};

/**
 * Centralized Tailwind styles for consistency and easier maintenance.
 */
const styles = {
  tabsList: 'grid max-w-3xl mx-auto w-full grid-cols-2 md:grid-cols-5 mb-12',
  grid: 'grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6',
  header: 'flex justify-between mb-2',
  cardContent: 'p-6 md:p-10',
};

/**
 * SkillsList Component
 *
 * Renders a tabbed interface for displaying categorized skills.
 */
export default function SkillsList() {
  return (
    <Tabs defaultValue={'frontend'}className={'w-full'}>
      {/* Render tab triggers based on category labels */}
      <TabsList className={styles?.tabsList}>
        {Object.entries(TEXT.categories).map(([key, label]) => (
          <TabsTrigger key={key} value={key}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Render each skill group as tab content */}
      {Object.entries(SKILLS_DATA).map(([key, skills]) => (
        <TabsContent key={key} value={key} className={'mt-0'}>
          <SkillsCategory skills={skills} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

/**
 * SkillsCategory Component
 *
 * @param {Object} props
 * @param {{ name: string; level: number }[]} props.skills - Array of skill objects.
 * @returns JSX.Element
 */
function SkillsCategory({
  skills,
}: {
  skills: { name: string; level: number }[];
}) {
  return (
    <Card>
      <CardContent className={styles?.cardContent}>
        <div className={styles?.grid}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Skill header with name and level */}
              <div className={styles?.header}>
                <h3 className={'font-medium'}>{skill.name}</h3>
                <span className={'text-muted-foreground'}>{skill.level}%</span>
              </div>

              {/* Animated progress bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
              >
                <Progress value={skill.level} className={'h-2'}/>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
