"use client"
import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import { projectsQuery } from "@/lib/sanity.queries";
import ProjectList from "@/components/projects/project-list";

// export const metadata: Metadata = {
//   title: "Projects | Portfolio",
//   description: "View my latest web development and design projects",
// };

export default async function ProjectsPage() {
  const projects = await sanityFetch({ query: projectsQuery });

  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's a selection of my best work across web development, 
            design, and software engineering.
          </p>
        </div>
        
        <ProjectList
        //  projects={projects}
          />
      </div>
    </div>
  );
}