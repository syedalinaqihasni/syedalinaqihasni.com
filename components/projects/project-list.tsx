'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects } from '@/constants/projects';
import Projects from './projects';

const ProjectList = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    'all',
    ...Array.from(new Set(projects?.map((project) => project?.category))),
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects?.filter((project) => project?.category === activeCategory);

  return (
    <div>
      <Tabs
        defaultValue={'all'}
        className={'mb-8'}
        onValueChange={setActiveCategory}
      >
        <TabsList className={'grid w-full grid-cols-2 md:grid-cols-5'}>
          {categories?.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category?.charAt(0).toUpperCase() + category?.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <Projects projects={filteredProjects} />
    </div>
  );
};

export default ProjectList;
