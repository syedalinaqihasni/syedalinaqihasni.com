import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/constants/projects';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { styles } from '@/styles/projectsSingle';
import { notFound } from 'next/navigation';
import { Projects } from '@/types/projects';
import HtmlRenderer from '@/components/HtmlRenderer';
import { generateDynamicMetadata } from '@/lib/generateDynamicMetadata';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((e) => e.slug === params.slug);
  if (!project) return notFound();

  return generateDynamicMetadata({
    title: project.title,
    description: project.description || project.title,
    image: project.image,
    publishedAt: project.publishedAt,
    path: `/projects/${project.slug}`,
  });
}

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }
  return (
    <div className={styles?.CONTAINER}>
      <div className={styles?.CONTENT_WRAPPER}>
        {/* Header */}
        <div className={styles?.HEADER}>
          <div className={styles?.TECH_BADGES}>
            {project.technologies?.map((tech) => (
              <Badge key={tech} variant={'secondary'}>
                {tech}
              </Badge>
            ))}
          </div>

          <h1 className={styles?.TITLE}>{project.title}</h1>
          <p className={styles?.DESCRIPTION}>{project.description}</p>

          <div className={styles?.BUTTON_GROUP}>
            <Button asChild>
              <Link
                href={project.liveUrl}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                <ExternalLink className={styles?.BUTTON_ICON} />
                View Live
              </Link>
            </Button>

            <Button variant={'outline'} asChild>
              <Link
                href={project.githubUrl}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                <Github className={styles?.BUTTON_ICON} />
                View Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Main Image */}
        <div className={styles?.IMAGE_WRAPPER}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles?.IMAGE_CLASS}
          />
        </div>

        {/* Project Stats */}
        <div className={styles?.STATS_GRID}>
          <Card>
            <CardContent className={styles?.CARD_CONTENT_CENTERED}>
              <h3 className={styles?.STAT_NUMBER}>{project.stats.users}</h3>
              <p className={styles?.STAT_LABEL}>Active Users</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className={styles?.CARD_CONTENT_CENTERED}>
              <h3 className={styles?.STAT_NUMBER}>{project.stats.orders}</h3>
              <p className={styles?.STAT_LABEL}>Orders Processed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className={styles?.CARD_CONTENT_CENTERED}>
              <h3 className={styles?.STAT_NUMBER}>{project.stats.revenue}</h3>
              <p className={styles?.STAT_LABEL}>Revenue Generated</p>
            </CardContent>
          </Card>
        </div>

        {/* Project Details */}
        <Card className={styles?.DETAILS_CARD}>
          <CardContent className={styles?.DETAILS_CARD_CONTENT}>
            <div className={styles?.DETAILS_HEADER}>
              <div className={styles?.DETAILS_DATE}>
                <Calendar className={'h-4 w-4'} />
                {formatDate(project.publishedAt)}
              </div>
            </div>
            <div
              className={styles?.LONG_DESCRIPTION}
            >
              <HtmlRenderer html={project.longDescription} />
            </div>
          </CardContent>
        </Card>

        {/* Gallery */}
        <div className={styles?.GALLERY_SECTION}>
          <h2 className={styles?.GALLERY_TITLE}>Project Gallery</h2>
          <div className={styles?.GALLERY_GRID}>
            {project.gallery?.map((image, index) => (
              <div key={index} className={styles?.GALLERY_IMAGE_WRAPPER}>
                <Image
                  src={image}
                  alt={`${project.title} gallery image ${index + 1}`}
                  fill
                  className={styles?.IMAGE_CLASS}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        <div className={styles?.RELATED_SECTION}>
          <h2 className={styles?.RELATED_TITLE}>Related Projects</h2>
          <div className={styles?.RELATED_GRID}>
            {project.relatedProjects?.map((relatedProject) => (
              <Card key={relatedProject.id}>
                <div className={styles?.RELATED_CARD_IMAGE_WRAPPER}>
                  <Image
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    fill
                    className={styles?.IMAGE_CLASS}
                  />
                </div>
                <CardContent className={styles?.RELATED_CARD_CONTENT}>
                  <h3 className={styles?.RELATED_CARD_TITLE}>{relatedProject.title}</h3>
                  <p className={styles?.RELATED_CARD_DESC}>
                    {relatedProject.description}
                  </p>
                  <div className={styles?.RELATED_BADGES}>
                    {relatedProject.technologies?.map((tech) => (
                      <Badge key={tech} variant={'secondary'}>
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

export default ProjectPage;
