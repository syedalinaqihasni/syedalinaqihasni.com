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
import StructuredData from '@/components/StructuredData';
import { eventsSchema } from '@/constants/structuredData';
import EventsList from "@/components/events/EventsList";

export const metadata = getMetadataForPath('/events');

const PAGE_TITLE = "Upcoming Events";
const PAGE_DESCRIPTION =
  "Join me at these upcoming events where I'll be speaking, teaching, and sharing knowledge about web development and technology.";

const container = "container mx-auto px-4 py-32 md:py-40";
const maxWidthWrapper = "max-w-6xl mx-auto";
const header = "text-center mb-16";
const title = "text-4xl md:text-5xl font-bold mb-6";
const description =
  "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto";

export default function Page() {

  return (
    <>
      <StructuredData data={eventsSchema} />
      <main className={container}>
        <div className={maxWidthWrapper}>
          <header className={header}>
            <h1 className={title}>{PAGE_TITLE}</h1>
            <p className={description}>{PAGE_DESCRIPTION}</p>
          </header>

          <EventsList events={events}/>
        </div>
      </main>
    </>
  );
}