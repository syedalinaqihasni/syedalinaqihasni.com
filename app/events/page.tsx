import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { events } from "@/constants/events";
import { formatDateTime } from "@/lib/utils";
import { styles } from "@/styles/event";

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
};
type Event = {
  id: string;
  slug: string;
  image: string;
  title: string;
  description: string;
  type: string;
  date: string;
  location: string;
  virtual?: boolean;
};

export type { Event };

export default function EventsPage() {
  return (
    <main className={styles.container}>
      <div className={styles.maxWidthWrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>{PAGE_TITLE}</h1>
          <p className={styles.description}>{PAGE_DESCRIPTION}</p>
        </header>

        <section className={styles.grid}>
          {events.map((event) => (
            <Card key={event?.id} className={styles.card}>
              <Link href={`/events/${event?.slug}`} passHref>
                <a className={styles.imageWrapper}>
                  <Image
                    src={event?.image}
                    alt={event?.title}
                    fill
                    className={styles.image}
                  />
                  {event?.virtual && (
                    <Badge
                      className={styles.virtualBadge}
                      variant={"secondary"}
                    >
                      Virtual Event
                    </Badge>
                  )}
                </a>
              </Link>

              <CardContent className={"p-6"}>
                <Badge variant={"outline"} className={styles.badge}>
                  {event?.type}
                </Badge>

                <Link href={`/events/${event?.slug}`} passHref>
                  <a className={styles.eventTitle}>{event?.title}</a>
                </Link>

                <p className={styles.eventDescription}>{event?.description}</p>

                <div className={styles.eventDetails}>
                  <div className={styles.eventDetailRow}>
                    <Calendar className={"h-4 w-4"} />
                    <time dateTime={event?.date}>
                      {formatDateTime(event?.date)}
                    </time>
                  </div>
                  <div className={styles.eventDetailRow}>
                    <MapPin className={"h-4 w-4"} />
                    {event?.location}
                  </div>
                </div>

                <Button asChild className={styles.button}>
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
