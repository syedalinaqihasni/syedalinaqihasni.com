"use client"
import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import { eventBySlugQuery, eventsQuery } from "@/lib/sanity.queries";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Share2 } from "lucide-react";
import Image from "next/image";
import { PortableText, PortableTextBlock } from "@portabletext/react";

// export async function generateStaticParams() {
//   const events: Event[] = await sanityFetch({ query: eventsQuery });
//   return events.map((event) => ({
//     slug: event.slug.current,
//   }));
// }

type Event = {
  title: string;
  description: string;
  type: string;
  slug: { current: string };
  image: string;
  date: string;
  location: string;
  virtual: boolean;
  content: PortableTextBlock[];
};

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const event: Event = await sanityFetch({
//     query: eventBySlugQuery,
//     params: { slug: params.slug },
//   });

//   return {
//     title: `${event.title} | Events`,
//     description: event.description,
//   };
// }

export default async function EventPage({ params }: { params: { slug: string } }) {
  const event: Event = await sanityFetch({
    query: eventBySlugQuery,
    params: { slug: params.slug },
  });

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
        {/* Header */}
        <div className="mb-12">
          <Badge variant="secondary" className="mb-4">
            {event.type}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{event.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{event.description}</p>
          <Button>
            <Share2 className="h-4 w-4 mr-2" />
            Share Event
          </Button>
        </div>

        {/* Event Image */}
        <div className="relative h-[500px] rounded-lg overflow-hidden mb-12">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Event Details Card */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Event Details</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 mt-1 text-primary" />
                    <div>
                      <h3 className="font-medium">Date & Time</h3>
                      <p className="text-muted-foreground">
                        {formatDate(event.date)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-1 text-primary" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">{event.location}</p>
                      {event.virtual && (
                        <Badge variant="secondary" className="mt-2">
                          Virtual Event
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {!event.virtual && (
                <div>
                  <iframe
                    title="Event Location"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(event.location)}`}
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Event Description */}
        <Card>
          <CardContent className="p-8">
            <div className="prose dark:prose-invert max-w-none">
              <PortableText value={event.content} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}