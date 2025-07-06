"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function FeaturedProjects() {
 const featuredProjects = projects?.filter((p) => p.isFeatured === true);
if (!featuredProjects?.length) return notFound();
  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
      {featuredProjects?.map((project, index) => (
        <motion.div
          key={project?.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            className={
              "h-full overflow-hidden hover:shadow-lg transition-shadow duration-300"
            }
          >
            <div className={"relative h-48 w-full"}>
              <Link href={`/projects/${project?.slug}`}>
                <Image
                  src={project?.image || '/images/placeholder-syed-ali-naqi-hasni.webp'}
                  alt={`${project?.title} - Syed Ali Naqi Hasni`}
                  fill
                  className={"object-cover"}
                />
              </Link>
            </div>
            <CardContent className={"p-6"}>
              <h3 className={"text-xl font-semibold mb-2"}>
                <Link href={`/projects/${project?.slug}`}>{project?.title}</Link>
              </h3>
              <p className={"text-muted-foreground mb-4 line-clamp-2"}>
                <Link href={`/projects/${project?.slug}`}>
                  {" "}
                  {project?.description}
                </Link>
              </p>
              <div className={"flex flex-wrap gap-2 mb-6"}>
                {project?.technologies?.map((tag) => (
                  <Badge key={tag} variant={"secondary"}>
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className={"flex gap-3"}>
                <Button size={"sm"} variant={"outline"} asChild>
                  <Link
                    href={project?.githubUrl}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                  >
                    <Github className={"h-4 w-4 mr-2"} />
                    Code
                  </Link>
                </Button>
                <Button size={"sm"} asChild>
                  <Link
                    href={project?.liveUrl}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                  >
                    <ExternalLink className={"h-4 w-4 mr-2"} />
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
