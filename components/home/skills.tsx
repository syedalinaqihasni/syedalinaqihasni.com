"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Mock data - in a real app, this would come from Sanity
const skills = {
  frontend: [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 92 },
    { name: "Next.js", level: 88 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 82 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
  ],
  other: [
    { name: "UI/UX Design", level: 88 },
    { name: "Git/GitHub", level: 92 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
  ],
};

export default function HomeSkills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <SkillCategory title="Frontend" skills={skills.frontend} delay={0} />
      <SkillCategory title="Backend" skills={skills.backend} delay={0.2} />
      <SkillCategory title="Other" skills={skills.other} delay={0.4} />
    </div>
  );
}

function SkillCategory({ title, skills, delay }: { title: string; skills: { name: string; level: number }[]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: delay + index * 0.1 }}
              >
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}