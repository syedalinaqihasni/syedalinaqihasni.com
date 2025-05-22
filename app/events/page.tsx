"use client"
import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import { eventsQuery } from "@/lib/sanity.queries";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// export const metadata: Metadata = {
//   title: "Events | Portfolio",
//   description: "Check out my upcoming speaking engagements, workshops, and other events",
// };

type Event = {
  _id: string;
  slug: string;
  image: string;
  title: string;
  description: string;
  type: string;
  date: string;
  location: string;
  virtual?: boolean;
};

export default async function EventsPage() {
  const events: Event[] = await sanityFetch({ query: eventsQuery });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join me at these upcoming events where I'll be speaking, teaching, and sharing knowledge about web development and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event: any) => (
            <Card key={event._id} className="overflow-hidden">
              <Link href={`/events/${event.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  {event.virtual && (
                    <Badge className="absolute top-4 right-4" variant="secondary">
                      Virtual Event
                    </Badge>
                  )}
                </div>
              </Link>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-2">
                  {event.type}
                </Badge>
                <Link href={`/events/${event.slug}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href={`/events/${event.slug}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}