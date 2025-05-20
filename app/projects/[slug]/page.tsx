"use client";

import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";

// Mock data - in a real app, this would come from Sanity
const project = {
  title: "E-Commerce Platform",
  slug: "e-commerce-platform",
  description: "A full-featured e-commerce platform with cart, checkout, and payment integration.",
  longDescription: `
    <h2>Project Overview</h2>
    <p>This e-commerce platform provides a complete solution for online stores, featuring a modern UI, secure payment processing, and comprehensive order management.</p>
    
    <h2>Key Features</h2>
    <ul>
      <li>User authentication and profile management</li>
      <li>Product catalog with categories and search</li>
      <li>Shopping cart and wishlist functionality</li>
      <li>Secure checkout with Stripe integration</li>
      <li>Order tracking and history</li>
      <li>Admin dashboard for inventory management</li>
    </ul>
    
    <h2>Technical Details</h2>
    <p>The application is built using modern web technologies and follows best practices for security and performance:</p>
    
    <ul>
      <li>React for the frontend with Next.js for SSR</li>
      <li>Node.js and Express for the backend API</li>
      <li>MongoDB for the database</li>
      <li>Stripe for payment processing</li>
      <li>AWS S3 for image storage</li>
    </ul>
    
    <h2>Development Process</h2>
    <p>The project was developed over three months, following an agile methodology with weekly sprints. Key challenges included:</p>
    
    <ul>
      <li>Implementing real-time inventory updates</li>
      <li>Optimizing performance for large product catalogs</li>
      <li>Ensuring secure payment processing</li>
      <li>Building a responsive design for all devices</li>
    </ul>
  `,
  image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg",
  gallery: [
    "https://images.pexels.com/photos/6956904/pexels-photo-6956904.jpeg",
    "https://images.pexels.com/photos/6956905/pexels-photo-6956905.jpeg",
    "https://images.pexels.com/photos/6956906/pexels-photo-6956906.jpeg",
  ],
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker"],
  githubUrl: "https://github.com",
  liveUrl: "https://example.com",
  publishedAt: "2024-01-15",
  stats: {
    users: "10,000+",
    orders: "50,000+",
    revenue: "$1M+",
  },
  relatedProjects: [
    {
      id: "2",
      title: "Task Management App",
      slug: "task-management-app",
      description: "A collaborative task management application with real-time updates.",
      image: "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg",
      technologies: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      id: "3",
      title: "Portfolio Website",
      slug: "portfolio-website",
      description: "A beautiful portfolio website showcasing projects and skills.",
      image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
  ],
};

export default function ProjectPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Live
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            </Button>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative h-[500px] rounded-lg overflow-hidden mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold mb-2">{project.stats.users}</h3>
              <p className="text-muted-foreground">Active Users</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold mb-2">{project.stats.orders}</h3>
              <p className="text-muted-foreground">Orders Processed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold mb-2">{project.stats.revenue}</h3>
              <p className="text-muted-foreground">Revenue Generated</p>
            </CardContent>
          </Card>
        </div>

        {/* Project Details */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {formatDate(project.publishedAt)}
              </div>
            </div>
            <div 
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: project.longDescription }}
            />
          </CardContent>
        </Card>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.relatedProjects.map((relatedProject) => (
              <Card key={relatedProject.id}>
                <div className="relative h-48 w-full">
                  <Image
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{relatedProject.title}</h3>
                  <p className="text-muted-foreground mb-4">{relatedProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {relatedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}