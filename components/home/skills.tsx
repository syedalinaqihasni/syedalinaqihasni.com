'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { SKILLS } from '@/constants/skills';

/**
 * HomeSkills Component
 *
 * Renders categorized skill cards (Frontend, Backend, Other) with animated
 * progress bars to visualize proficiency.
 *
 * @returns JSX.Element
 */
export default function HomeSkills() {
  return (
    <div className={'grid grid-cols-1 md:grid-cols-3 gap-8'}>
      <SkillCategory title={'Frontend'} skills={SKILLS.frontend} delay={0} />
      <SkillCategory title={'Backend'} skills={SKILLS.backend} delay={0.2} />
      <SkillCategory title={'Other'} skills={SKILLS.other} delay={0.4} />
    </div>
  );
}

/**
 * SkillCategory Component
 *
 * Displays a single category card with skill name, percentage, and animated progress bar.
 *
 * @param {Object} props
 * @param {string} props.title - The title of the skill category (e.g. "Frontend").
 * @param {{ name: string; level: number }[]} props.skills - An array of skills with names and percentage levels.
 * @param {number} props.delay - Initial animation delay for entrance animation.
 * @returns JSX.Element
 */
function SkillCategory({
  title,
  skills,
  delay,
}: {
  title: string;
  skills: { name: string; level: number }[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card>
        {/* Header section with category title */}
        <CardHeader>
          <CardTitle className={'text-xl text-center'}>{title}</CardTitle>
        </CardHeader>

        {/* Skill items list */}
        <CardContent className={'space-y-4'}>
          {skills?.map((skill, index) => (
            <div key={skill.name}>
              {/* Skill label and percentage */}
              <div className={'flex justify-between mb-1'}>
                <span>{skill.name}</span>
                <span className={'text-muted-foreground'}>{skill.level}%</span>
              </div>

              {/* Progress bar with delay based on index */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 0.8,
                  delay: delay + index * 0.1,
                }}
              >
                <Progress value={skill.level} className={'h-2'} />
              </motion.div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
