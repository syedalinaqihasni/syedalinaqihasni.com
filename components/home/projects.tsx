'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Github, ExternalLink,  } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FEATURED_PROJECTS } from '@/constants/projects';
import Link from 'next/link';

/**
 * HomeProjects Component
 *
 * Displays a responsive grid of featured projects with animated entrance.
 * Each project card shows image, title, description, tags, and links to GitHub & live demo.
 *
 * @returns JSX.Element
 */
export default function HomeProjects() {
  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
      {FEATURED_PROJECTS.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className={'h-full overflow-hidden hover:shadow-lg transition-shadow duration-300'}>
            {/* Project image */}
            <div className={'relative h-48 w-full'}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={'object-cover'}
              />
            </div>

            {/* Card content with project details */}
            <CardContent className={'p-6'}>
              {/* Project title */}
              <h3 className={'text-xl font-semibold mb-2'}>{project.title}</h3>

              {/* Project description with line clamp */}
              <p className={'text-muted-foreground mb-4 line-clamp-2'}>
                {project.description}
              </p>

              {/* Project tags */}
              <div className={'flex flex-wrap gap-2 mb-6'}>
                {project.tags.map((tag) => (
                  <Badge key={tag} variant={'secondary'}>
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Links to GitHub repo and live demo */}
              <div className={'flex gap-3'}>
                <Button size={'sm'} variant={'outline'} asChild>
                  <Link
                    href={project.githubUrl}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                  >
                    <Github className={'h-4 w-4 mr-2'} />
                    Code
                  </Link>
                </Button>
                <Button size={'sm'} asChild>
                  <Link
                    href={project.liveUrl}
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
    </div>
  );
}
