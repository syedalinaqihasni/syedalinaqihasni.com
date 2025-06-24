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
import { projects } from '@/constants/projects';

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
<AnimatePresence mode={'wait'}>
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}
        >
          {filteredProjects?.map((project) => (
            <motion.div
              key={project?.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={'h-full'}
            >
              <Card className={'h-full overflow-hidden'}>
                <div className={'relative h-56 w-full'}>
                 <Link href={`https://www.syedalinaqihasni.com/projects/${project?.slug}`}>            
                 <Image
                    src={project?.image || 'https://www.syedalinaqihasni.com/images/blogs/blogs-placeholder-syed-ali-naqi-hasni.jpg'}
                    alt={`${project?.title} - Syed Ali Naqi Hasni`}
                    fill
                    className={'object-cover transition-transform duration-300 hover:scale-105'}
                  /></Link>
      
                </div>
                <CardContent className={'p-6'}>
                  <h3 className={'text-xl font-semibold mb-2'}>
                  <Link href={`https://www.syedalinaqihasni.com/projects/${project?.slug}`}> {project?.title}
             </Link>      </h3>
                  <p className={'text-muted-foreground mb-4'}>
                   <Link href={`https://www.syedalinaqihasni.com/projects/${project?.slug}`}>{project?.description}</Link> 
                  </p>
                  <div className={'flex flex-wrap gap-2 mb-6'}>
                    {project?.technologies?.map((tag) => (
                      <Badge key={tag} variant={'secondary'}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className={'flex gap-3'}>
                    <Button size={'sm'} variant={'outline'} asChild>
                      <Link
                        href={project?.githubUrl}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                      >
                        <Github className={'h-4 w-4 mr-2'} />
                        Code
                      </Link>
                    </Button>
                    <Button size={'sm'} asChild>
                      <Link
                        href={project?.liveUrl}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                      >
                        <ExternalLink className={'h-4 w-4 mr-2'} />
                        Demo
                      </Link>
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
