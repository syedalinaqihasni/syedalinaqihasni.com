"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data - in a real app, this would come from Sanity
const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg",
    category: "web",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg",
    category: "web",
    tags: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "A beautiful portfolio website showcasing projects and skills.",
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg",
    category: "web",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "4",
    title: "Mobile Fitness App",
    description: "A fitness tracking mobile application with workout plans and progress tracking.",
    image: "https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg",
    category: "mobile",
    tags: ["React Native", "Firebase", "Expo"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "5",
    title: "Weather Dashboard",
    description: "A weather dashboard showing current and forecast weather data from multiple sources.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    category: "web",
    tags: ["Vue.js", "Axios", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "6",
    title: "Restaurant Ordering System",
    description: "A comprehensive restaurant management and ordering system with staff and customer interfaces.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    category: "web",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Apps" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "design", name: "Design" },
  { id: "other", name: "Other" },
];

export default function ProjectList() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div>
      <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveCategory}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden">
                <div className="relative h-56 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}