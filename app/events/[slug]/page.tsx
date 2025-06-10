import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Share2 } from "lucide-react";
import Image from "next/image";
import { generateDynamicMetadata } from "@/lib/generateDynamicMetadata";
import { notFound } from "next/navigation";
import { formatDateTime } from "@/lib/utils";
import { events } from "@/constants/events";
import StructuredData from '@/components/StructuredData';
import { generateEventSchema, generateBreadcrumbSchema } from '@/constants/structuredData';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const event = events.find((e) => e.slug === params?.slug);
  if (!event) return notFound();

  return generateDynamicMetadata({
    title: event?.title,
    description: event?.excerpt || event?.title,
    image: event?.image,
    publishedAt: event?.date,
    path: `/events/${event?.slug}`,
  });
}

const styles = {
  container: "container mx-auto px-4 py-32 md:py-40",
  wrapper: "max-w-6xl mx-auto",
  header: "mb-12",
  badge: "mb-4",
  title: "text-4xl md:text-5xl font-bold mb-6",
  description: "text-xl text-muted-foreground mb-8",
  imageWrapper: "relative h-[500px] rounded-lg overflow-hidden mb-12",
  image: "object-cover",
  card: "mb-12",
  cardContent: "p-8",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-8",
  sectionTitle: "text-2xl font-bold mb-4",
  detailGroup: "space-y-4",
  detailRow: "flex items-start gap-3",
  icon: "h-5 w-5 mt-1 text-primary",
  label: "font-medium",
  text: "text-muted-foreground",
  virtualBadge: "mt-2",
  map: "rounded-lg",
  content: "prose dark:prose-invert max-w-none",
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const event = events.find((event) => event?.slug === params?.slug);

  if (!event) {
    notFound();
  }

  const eventSchema = generateEventSchema(event);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.syedalinaqihasni.com" },
    { name: "Events", url: "https://www.syedalinaqihasni.com/events" },
    { name: event.title, url: `https://www.syedalinaqihasni.com/events/${event.slug}` }
  ]);

  return (
    <>
      <StructuredData data={eventSchema} />
      <StructuredData data={breadcrumbSchema} />
      
      <div className={styles?.container}>
        <div className={styles?.wrapper}>
          <div className={styles?.header}>
            <Badge variant={"secondary"} className={styles?.badge}>
              {event?.type}
            </Badge>
            <h1 className={styles?.title}>{event?.title}</h1>
            <p className={styles?.description}>{event?.description}</p>
            <Button>
              <Share2 className={"h-4 w-4 mr-2"} />
              Share Event
            </Button>
          </div>
          <div className={styles?.imageWrapper}>
            <Image
              src={event?.image || "/images/blogs/blogs-placeholder.jpg"}
              alt={event?.title}
              fill
              className={styles?.image }
            />
          </div>
          <Card className={styles?.card}>
            <CardContent className={styles?.cardContent}>
              <div className={styles?.grid}>
                <div>
                  <h2 className={styles?.sectionTitle}>Event Details</h2>
                  <div className={styles?.detailGroup}>
                    <div className={styles?.detailRow}>
                      <Calendar className={styles?.icon} />
                      <div>
                        <h3 className={styles?.label}>Date & Time</h3>
                        <p className={styles?.text}>
                          {formatDateTime(event?.date)}
                        </p>
                      </div>
                    </div>
                    <div className={styles?.detailRow}>
                      <MapPin className={styles?.icon} />
                      <div>
                        <h3 className={styles?.label}>Location</h3>
                        <p className={styles?.text}>{event?.location}</p>
                        {event?.virtual && (
                          <Badge
                            variant={"secondary"}
                            className={styles?.virtualBadge}
                          >
                            Virtual Event
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {!event?.virtual && (
                  <div>
                    <iframe
                      title={"Event Location"}
                      width={"100%"}
                      height={"300"}
                      frameBorder={"0"}
                      src={`https://www.google.com/maps/embed/v1/place?key=${
                        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                      }&q=${encodeURIComponent(event?.location)}`}
                      allowFullScreen
                      className={styles?.map}
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className={styles?.cardContent}>
              <div className={styles?.content}>
                <div dangerouslySetInnerHTML={{ __html: event?.content }} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Page;