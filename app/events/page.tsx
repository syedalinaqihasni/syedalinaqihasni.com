import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Event } from "@/types/events";
import { getMetadataForPath } from "@/lib/metadata";
import { formatDateTime } from "@/lib/utils";
import { events } from "@/constants/events";

const PAGE_TITLE = "Upcoming Events";
const PAGE_DESCRIPTION =
  "Join me at these upcoming events where I'll be speaking, teaching, and sharing knowledge about web development and technology.";
const METADATA_TITLE = "Events | Syed Ali Naqi Hasni";
const METADATA_DESCRIPTION =
  "Check out my upcoming speaking engagements, workshops, and other events";

export const metadata = getMetadataForPath('/events');

const container = "container mx-auto px-4 py-32 md:py-40";
const maxWidthWrapper = "max-w-6xl mx-auto";
const header = "text-center mb-16";
const title = "text-4xl md:text-5xl font-bold mb-6";
const description =
  "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto";

const grid = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
const card = "overflow-hidden";
const imageWrapper = "relative block h-48 w-full";
const image = "object-cover";

const virtualBadge = "absolute top-4 right-4";

const badge = "mb-2";

const eventTitle =
  "text-xl font-semibold mb-2 block hover:text-primary transition-colors";
const eventDescription = "text-muted-foreground mb-4";

const eventDetails = "space-y-2 text-sm text-muted-foreground mb-4";
const eventDetailRow = "flex items-center gap-2";

const button = "w-full";

export default function Page() {

  return (
    <main className={container}>
      <div className={maxWidthWrapper}>
        <header className={header}>
          <h1 className={title}>{PAGE_TITLE}</h1>
          <p className={description}>{PAGE_DESCRIPTION}</p>
        </header>

        <section className={grid}>
          {events?.map((event) => (
            <Card key={event?.id} className={card}>
              <Link
                href={`/events/${event?.slug}`}
                passHref
                className={imageWrapper}
              >
                <Image
                  src={event?.image || '/images/blogs/blogs-placeholder.jpg'}
                  alt={event?.title}
                  fill
                  className={image}
                />
                {event?.virtual && (
                  <Badge className={virtualBadge} variant={"secondary"}>
                    Virtual Event
                  </Badge>
                )}
              </Link>

              <CardContent className={"p-6"}>
                <Badge variant={"outline"} className={badge}>
                  {event?.type}
                </Badge>

                <Link
                  href={`/events/${event?.slug}`}
                  passHref
                  className={eventTitle}
                >
                  {event?.title}
                </Link>

                <p className={eventDescription}>{event?.description}</p>

                <div className={eventDetails}>
                  <div className={eventDetailRow}>
                    <Calendar className={"h-4 w-4"} />
                    <time dateTime={event?.date}>{formatDateTime(event?.date)}</time>
                  </div>
                  <div className={eventDetailRow}>
                    <MapPin className={"h-4 w-4"} />
                    {event?.location}
                  </div>
                </div>

                <Button asChild className={button}>
                  <Link href={`/events/${event?.slug}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}
