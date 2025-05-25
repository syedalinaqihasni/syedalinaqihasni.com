import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import Image from 'next/image';
import { id } from 'date-fns/locale';
import { PROJECT } from '@/constants';

export default function ProjectPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {PROJECT.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {PROJECT.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            {PROJECT.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a
                href={PROJECT.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Live
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={PROJECT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            </Button>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative h-[500px] rounded-lg overflow-hidden mb-12">
          <Image
            src={PROJECT.image}
            alt={PROJECT.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold mb-2">{PROJECT.stats.users}</h3>
              <p className="text-muted-foreground">Active Users</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold mb-2">
                {PROJECT.stats.orders}
              </h3>
              <p className="text-muted-foreground">Orders Processed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-3xl font-bold mb-2">
                {PROJECT.stats.revenue}
              </h3>
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
                {formatDate(PROJECT.publishedAt)}
              </div>
            </div>
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: PROJECT.longDescription }}
            />
          </CardContent>
        </Card>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECT.gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${PROJECT.title} gallery image ${index + 1}`}
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
            {PROJECT.relatedProjects.map((relatedProject) => (
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
                  <h3 className="text-xl font-semibold mb-2">
                    {relatedProject.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {relatedProject.description}
                  </p>
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
