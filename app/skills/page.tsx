"use client"
import { Metadata } from "next";
import SkillsList from "@/components/skills/skills-list";

// export const metadata: Metadata = {
//   title: "Skills | Portfolio",
//   description: "Explore my technical skills and competencies",
// };

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Skills</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and competencies.
          </p>
        </div>
        
        <SkillsList />
      </div>
    </div>
  );
}