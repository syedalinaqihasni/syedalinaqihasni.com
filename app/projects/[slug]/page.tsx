import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";
import { projects } from "@/constants/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generateDynamicMetadata } from "@/lib/generateDynamicMetadata";
import { formatDate } from "@/lib/utils";
import StructuredData from "@/components/StructuredData";
import {
  generateProjectSchema,
  generateBreadcrumbSchema,
} from "@/constants/structuredData";
import { RelatedProject } from "@/types/projects";
import HtmlRenderer from "@/components/HtmlRenderer";

// Correct version of generateStaticParams
// export async function generateStaticParams() {
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects?.find((e) => e.slug === params?.slug);
  if (!project) return notFound();

  return generateDynamicMetadata({
    title: project?.title,
    description: project?.description || project?.title,
    image: project?.image,
    publishedAt: project?.publishedAt,
    path: `https://www.syedalinaqihasni.com/projects/${project?.slug}`,
  });
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const project = projects?.find((p) => p?.slug === params?.slug);
  if (!project) {
    notFound();
  }

  const projectSchema = generateProjectSchema(project);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.syedalinaqihasni.com" },
    { name: "Projects", url: "https://www.syedalinaqihasni.com/projects" },
    {
      name: project.title,
      url: `https://www.syedalinaqihasni.com/projects/${project.slug}`,
    },
  ]);

  const CONTAINER = "container mx-auto px-4 py-32 md:py-40";
  const CONTENT_WRAPPER = "max-w-6xl mx-auto";

  const HEADER = "mb-12";
  const TECH_BADGES = "flex flex-wrap gap-2 mb-4";
  const TITLE = "text-4xl md:text-5xl font-bold mb-6";
  const DESCRIPTION = "text-xl text-muted-foreground mb-8 max-w-3xl";
  const BUTTON_GROUP = "flex flex-wrap gap-4";

  const BUTTON_ICON = "h-4 w-4 mr-2";

  const IMAGE_WRAPPER = "relative h-[500px] rounded-lg overflow-hidden mb-12";
  const IMAGE_CLASS = "object-cover";

  const STATS_GRID = "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12";
  const CARD_CONTENT_CENTERED = "p-6 text-center";
  const STAT_NUMBER = "text-3xl font-bold mb-2";
  const STAT_LABEL = "text-muted-foreground";

  const DETAILS_CARD = "mb-12";
  const DETAILS_CARD_CONTENT = "p-8";
  const DETAILS_HEADER = "flex items-center justify-between mb-6";
  const DETAILS_DATE = "flex items-center gap-2 text-muted-foreground";
  const LONG_DESCRIPTION = "prose dark:prose-invert max-w-none";

  const GALLERY_SECTION = "mb-12";
  const GALLERY_TITLE = "text-2xl font-bold mb-6";
  const GALLERY_GRID = "grid grid-cols-1 md:grid-cols-3 gap-6";
  const GALLERY_IMAGE_WRAPPER = "relative h-64 rounded-lg overflow-hidden";

  const RELATED_SECTION = "";
  const RELATED_TITLE = "text-2xl font-bold mb-6";
  const RELATED_GRID = "grid grid-cols-1 md:grid-cols-2 gap-6";
  const RELATED_CARD_IMAGE_WRAPPER = "relative h-48 w-full";
  const RELATED_CARD_CONTENT = "p-6";
  const RELATED_CARD_TITLE = "text-xl font-semibold mb-2";
  const RELATED_CARD_DESC = "text-muted-foreground mb-4";
  const RELATED_BADGES = "flex flex-wrap gap-2";

  return (
    <>
      <StructuredData data={projectSchema} />
      <StructuredData data={breadcrumbSchema} />

      <div className={CONTAINER}>
        <div className={CONTENT_WRAPPER}>
          <div className={HEADER}>
            <div className={TECH_BADGES}>
              {project?.technologies?.map((tech) => (
                <Badge key={tech} variant={"secondary"}>
                  {tech}
                </Badge>
              ))}
            </div>

            <h1 className={TITLE}>{project?.title}</h1>
            <p className={DESCRIPTION}>{project?.description}</p>

            <div className={BUTTON_GROUP}>
              <Button asChild>
                <Link
                  href={project?.liveUrl}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  <ExternalLink className={BUTTON_ICON} />
                  View Live
                </Link>
              </Button>

              <Button variant={"outline"} asChild>
                <Link
                  href={project?.githubUrl}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  <Github className={BUTTON_ICON} />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
          <div className={IMAGE_WRAPPER}>
            <Image
              src={
                project?.image ||
                "https://www.syedalinaqihasni.com/images/placeholder-syed-ali-naqi-hasni.webp"
              }
              alt={`${project?.title} - Syed Ali Naqi Hasni`}
              fill
              className={IMAGE_CLASS}
            />
          </div>
          <div className={STATS_GRID}>
            <Card>
              <CardContent className={CARD_CONTENT_CENTERED}>
                <h3 className={STAT_NUMBER}>{project?.stats.users}</h3>
                <p className={STAT_LABEL}>Active Users</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className={CARD_CONTENT_CENTERED}>
                <h3 className={STAT_NUMBER}>{project?.stats.orders}</h3>
                <p className={STAT_LABEL}>Orders Processed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className={CARD_CONTENT_CENTERED}>
                <h3 className={STAT_NUMBER}>{project?.stats.revenue}</h3>
                <p className={STAT_LABEL}>Revenue Generated</p>
              </CardContent>
            </Card>
          </div>
          <Card className={DETAILS_CARD}>
            <CardContent className={DETAILS_CARD_CONTENT}>
              <div className={DETAILS_HEADER}>
                <div className={DETAILS_DATE}>
                  <Calendar className={"h-4 w-4"} />
                  {formatDate(project?.publishedAt)}
                </div>
              </div>
              <div className={LONG_DESCRIPTION}>
                <HtmlRenderer  path="" terms={[]} html={project?.longDescription} />
              </div>
            </CardContent>
          </Card>
          <div className={GALLERY_SECTION}>
            <h2 className={GALLERY_TITLE}>Project Gallery</h2>
            <div className={GALLERY_GRID}>
              {project?.gallery?.map((image, index) => (
                <div key={index} className={GALLERY_IMAGE_WRAPPER}>
                  <Image
                    src={image}
                    alt={`${project?.title} gallery image ${index + 1} - Syed Ali Naqi Hasni`}
                    fill
                    className={IMAGE_CLASS}
                  />
                </div>
              ))}
            </div>
          </div>
          {project?.relatedProjects?.length > 0 && (
            <div className={RELATED_SECTION}>
              <h2 className={RELATED_TITLE}>Related Projects</h2>
              <div className={RELATED_GRID}>
                {project.relatedProjects.map(
                  (relatedProject: RelatedProject) => (
                    <Card key={relatedProject?.id}>
                      <div className={RELATED_CARD_IMAGE_WRAPPER}>
                        <Image
                          src={
                            relatedProject?.image ||
                            "https://www.syedalinaqihasni.com/images/placeholder-syed-ali-naqi-hasni.webp"
                          }
                          alt={`${relatedProject?.title} - Syed Ali Naqi Hasni`}
                          fill
                          className={IMAGE_CLASS}
                        />
                      </div>
                      <CardContent className={RELATED_CARD_CONTENT}>
                        <h3 className={RELATED_CARD_TITLE}>
                          {relatedProject?.title}
                        </h3>
                        <p className={RELATED_CARD_DESC}>
                          {relatedProject?.description}
                        </p>
                        <div className={RELATED_BADGES}>
                          {relatedProject?.technologies.map((tech: string) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
