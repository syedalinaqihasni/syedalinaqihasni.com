import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";
import { PROJECT } from "@/constants/projects";

export default function ProjectPage() {
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  // CSS Class Constants
  const styles = {
    CONTAINER: "container mx-auto px-4 py-32 md:py-40",
    CONTENT_WRAPPER: "max-w-6xl mx-auto",
    HEADER: "mb-12",
    TECH_BADGES: "flex flex-wrap gap-2 mb-4",
    TITLE: "text-4xl md:text-5xl font-bold mb-6",
    DESCRIPTION: "text-xl text-muted-foreground mb-8 max-w-3xl",
    BUTTON_GROUP: "flex flex-wrap gap-4",
    BUTTON_ICON: "h-4 w-4 mr-2",
    IMAGE_WRAPPER: "relative h-[500px] rounded-lg overflow-hidden mb-12",
    IMAGE_CLASS: "object-cover",
    STATS_GRID: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",
    CARD_CONTENT_CENTERED: "p-6 text-center",
    STAT_NUMBER: "text-3xl font-bold mb-2",
    STAT_LABEL: "text-muted-foreground",
    DETAILS_CARD: "mb-12",
    DETAILS_CARD_CONTENT: "p-8",
    detailsHeader: "flex items-center justify-between mb-6",
    detailsDate: "flex items-center gap-2 text-muted-foreground",
    longDescription: "prose dark:prose-invert max-w-none",
    gallerySection: "mb-12",
    galleryTitle: "text-2xl font-bold mb-6",
    galleryGrid: "grid grid-cols-1 md:grid-cols-3 gap-6",
    galleryImageWrapper: "relative h-64 rounded-lg overflow-hidden",
    relatedSection: "",
    relatedTitle: "text-2xl font-bold mb-6",
    relatedGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
    relatedCardImageWrapper: "relative h-48 w-full",
    relatedCardContent: "p-6",
    relatedCardTitle: "text-xl font-semibold mb-2",
    relatedCardDesc: "text-muted-foreground mb-4",
    relatedBadges: "flex flex-wrap gap-2",
  };

  return (
    <div className={styles?.CONTAINER}>
      <div className={styles?.CONTENT_WRAPPER}>
        {/* Header */}
        <div className={styles?.HEADER}>
          <div className={styles?.TECH_BADGES}>
            {PROJECT.technologies.map((tech) => (
              <Badge key={tech} variant={'secondary'}>
                {tech}
              </Badge>
            ))}
          </div>

          <h1 className={styles?.TITLE}>{PROJECT.title}</h1>
          <p className={styles?.DESCRIPTION}>{PROJECT.description}</p>

          <div className={styles?.BUTTON_GROUP}>
            <Button asChild>
              <a
                href={PROJECT.liveUrl}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                <ExternalLink className={styles?.BUTTON_ICON} />
                View Live
              </a>
            </Button>

            <Button variant={'outline'} asChild>
              <a
                href={PROJECT.githubUrl}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                <Github className={styles?.BUTTON_ICON} />
                View Code
              </a>
            </Button>
          </div>
        </div>

        {/* Main Image */}
        <div className={styles?.IMAGE_WRAPPER}>
          <Image
            src={PROJECT.image}
            alt={PROJECT.title}
            fill
            className={styles?.IMAGE_CLASS}
          />
        </div>

        {/* Project Stats */}
        <div className={styles?.STATS_GRID}>
          <Card>
            <CardContent className={styles?.CARD_CONTENT_CENTERED}>
              <h3 className={styles?.STAT_NUMBER}>{PROJECT.stats.users}</h3>
              <p className={styles?.STAT_LABEL}>Active Users</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className={styles?.CARD_CONTENT_CENTERED}>
              <h3 className={styles?.STAT_NUMBER}>{PROJECT.stats.orders}</h3>
              <p className={styles?.STAT_LABEL}>Orders Processed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className={styles?.CARD_CONTENT_CENTERED}>
              <h3 className={styles?.STAT_NUMBER}>{PROJECT.stats.revenue}</h3>
              <p className={styles?.STAT_LABEL}>Revenue Generated</p>
            </CardContent>
          </Card>
        </div>

        {/* Project Details */}
        <Card className={styles?.DETAILS_CARD}>
          <CardContent className={styles?.DETAILS_CARD_CONTENT}>
            <div className={styles?.detailsHeader}>
              <div className={styles?.detailsDate}>
                <Calendar className={'h-4 w-4'} />
                {formatDate(PROJECT.publishedAt)}
              </div>
            </div>
            <div
              className={styles?.longDescription}
              dangerouslySetInnerHTML={{ __html: PROJECT.longDescription }}
            />
          </CardContent>
        </Card>

        {/* Gallery */}
        <div className={styles?.gallerySection}>
          <h2 className={styles?.galleryTitle}>Project Gallery</h2>
          <div className={styles?.galleryGrid}>
            {PROJECT.gallery.map((image, index) => (
              <div key={index} className={styles?.galleryImageWrapper}>
                <Image
                  src={image}
                  alt={`${PROJECT.title} gallery image ${index + 1}`}
                  fill
                  className={styles?.IMAGE_CLASS}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        <div className={styles?.relatedSection}>
          <h2 className={styles?.relatedTitle}>Related Projects</h2>
          <div className={styles?.relatedGrid}>
            {PROJECT.relatedProjects.map((relatedProject) => (
              <Card key={relatedProject.id}>
                <div className={styles?.relatedCardImageWrapper}>
                  <Image
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    fill
                    className={styles?.IMAGE_CLASS}
                  />
                </div>
                <CardContent className={styles?.relatedCardContent}>
                  <h3 className={styles?.relatedCardTitle}>
                    {relatedProject.title}
                  </h3>
                  <p className={styles?.relatedCardDesc}>
                    {relatedProject.description}
                  </p>
                  <div className={styles?.relatedBadges}>
                    {relatedProject.technologies.map((tech) => (
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
