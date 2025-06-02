'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Project } from '@/types';

/**
 * ProjectList Component
 *
 * Displays a list of projects with category-based filtering and animated transitions.
 *
 * @param {Object} props
 * @param {Project[]} props.projects - Array of project objects to be displayed.
 * @returns JSX.Element
 */
const ProjectList = ({ projects }: { projects: Project[] }) => {
  // State to track currently selected category tab
  const [activeCategory, setActiveCategory] = useState('all');

  // Dynamically derive category list from provided projects
  const categories = [
    'all',
    ...Array.from(new Set(projects.map((project) => project?.category))),
  ];

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project?.category === activeCategory);

  return (
    <div>
      {/* Tabs are defined here, but hidden or disabled for now.
          Uncomment TabsList and TabsTrigger if dynamic tab navigation is needed. */}
      <Tabs
        defaultValue="all"
        className="mb-8"
        onValueChange={setActiveCategory}
      >
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category?.charAt(0).toUpperCase() + category?.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* AnimatePresence handles smooth transitions between category views */}
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
              key={project?.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden">
                {/* Project image */}
                <div className="relative h-56 w-full">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Project content */}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project?.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project?.description}
                  </p>

                  {/* Project tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project?.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* External links: GitHub & Demo */}
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project?.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project?.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
};

export default ProjectList;
