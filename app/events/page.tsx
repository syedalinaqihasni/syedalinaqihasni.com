import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Event } from "@/types/events";
import { events } from "@/constants/events";

// Text constants
const PAGE_TITLE = "Upcoming Events";
const PAGE_DESCRIPTION =
  "Join me at these upcoming events where I'll be speaking, teaching, and sharing knowledge about web development and technology.";
const METADATA_TITLE = "Events | Syed Ali Naqi Hasni";
const METADATA_DESCRIPTION =
  "Check out my upcoming speaking engagements, workshops, and other events";

export const metadata: Metadata = {
  title: METADATA_TITLE,
  description: METADATA_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syedalinaqihasni.com",
    title: "Syed Ali Naqi Hasni | Frontend Web Developer",
    description:
      "Personal portfolio website showcasing my projects, skills, and experience",
    siteName: "Syed Ali Naqi Hasni",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Ali Naqi Hasni | Frontend Web Developer",
    description:
      "Personal portfolio website showcasing my projects, skills, and experience",
  },
  metadataBase: new URL("https://syedalinaqihasni.com"),
};


// Class name constants
const containerClass = "container mx-auto px-4 py-32 md:py-40";
const maxWidthWrapperClass = "max-w-6xl mx-auto";
const headerClass = "text-center mb-16";
const titleClass = "text-4xl md:text-5xl font-bold mb-6";
const descriptionClass =
  "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto";

const gridClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
const cardClass = "overflow-hidden";
const imageWrapperClass = "relative block h-48 w-full";
const imageClass = "object-cover";

const virtualBadgeClass = "absolute top-4 right-4";

const badgeClass = "mb-2";

const eventTitleClass =
  "text-xl font-semibold mb-2 block hover:text-primary transition-colors";
const eventDescriptionClass = "text-muted-foreground mb-4";

const eventDetailsClass = "space-y-2 text-sm text-muted-foreground mb-4";
const eventDetailRowClass = "flex items-center gap-2";

const buttonClass = "w-full";

export default function EventsPage() {
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

  return (
    <main className={containerClass}>
      <div className={maxWidthWrapperClass}>
        <header className={headerClass}>
          <h1 className={titleClass}>{PAGE_TITLE}</h1>
          <p className={descriptionClass}>{PAGE_DESCRIPTION}</p>
        </header>

        <section className={gridClass}>
          {events.map((event) => (
            <Card key={event.id} className={cardClass}>
              <Link href={`/events/${event.slug}`} passHref className={imageWrapperClass}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className={imageClass}
                  />
                  {event.virtual && (
                    <Badge className={virtualBadgeClass} variant={"secondary"}>
                      Virtual Event
                    </Badge>
                  )}
              </Link>

              <CardContent className={"p-6"}>
                <Badge variant={"outline"} className={badgeClass}>
                  {event.type}
                </Badge>

                <Link href={`/events/${event.slug}`} passHref  className={eventTitleClass}>{event.title}
                </Link>

                <p className={eventDescriptionClass}>{event.description}</p>

                <div className={eventDetailsClass}>
                  <div className={eventDetailRowClass}>
                    <Calendar className={"h-4 w-4"} />
                    <time dateTime={event.date}>{formatDate(event.date)}</time>
                  </div>
                  <div className={eventDetailRowClass}>
                    <MapPin className={"h-4 w-4"} />
                    {event.location}
                  </div>
                </div>

                <Button asChild className={buttonClass}>
                  <Link href={`/events/${event.slug}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}
