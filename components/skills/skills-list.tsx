"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data - in a real app, this would come from Sanity
const skills = {
  frontend: [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 92 },
    { name: "Next.js", level: 88 },
    { name: "Vue.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Framer Motion", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 82 },
    { name: "Python", level: 75 },
    { name: "Django", level: 70 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "GraphQL", level: 78 },
    { name: "REST API", level: 90 },
  ],
  devops: [
    { name: "Git/GitHub", level: 92 },
    { name: "Docker", level: 70 },
    { name: "CI/CD", level: 75 },
    { name: "AWS", level: 65 },
    { name: "Vercel", level: 88 },
    { name: "Netlify", level: 85 },
  ],
  design: [
    { name: "UI/UX Design", level: 88 },
    { name: "Figma", level: 85 },
    { name: "Adobe XD", level: 75 },
    { name: "Responsive Design", level: 92 },
    { name: "Design Systems", level: 80 },
  ],
  soft: [
    { name: "Communication", level: 95 },
    { name: "Teamwork", level: 90 },
    { name: "Problem Solving", level: 92 },
    { name: "Time Management", level: 85 },
    { name: "Adaptability", level: 90 },
  ],
};

export default function SkillsList() {
  return (
    <div>
      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid max-w-3xl mx-auto w-full grid-cols-2 md:grid-cols-5 mb-12">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="devops">DevOps</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        </TabsList>
        
        <TabsContent value="frontend" className="mt-0">
          <SkillsCategory skills={skills.frontend} />
        </TabsContent>
        
        <TabsContent value="backend" className="mt-0">
          <SkillsCategory skills={skills.backend} />
        </TabsContent>
        
        <TabsContent value="devops" className="mt-0">
          <SkillsCategory skills={skills.devops} />
        </TabsContent>
        
        <TabsContent value="design" className="mt-0">
          <SkillsCategory skills={skills.design} />
        </TabsContent>
        
        <TabsContent value="soft" className="mt-0">
          <SkillsCategory skills={skills.soft} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function SkillsCategory({ skills }: { skills: { name: string; level: number }[] }) {
  return (
    <Card>
      <CardContent className="p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
              >
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}