import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Share2 } from 'lucide-react';
import Image from 'next/image';
import { PortableText, PortableTextBlock } from '@portabletext/react';

// --- Types ---
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

// --- Static Data ---
const EVENT: Event = {
  title: 'Sample Event Title',
  description: 'This is a sample event description.',
  type: 'Conference',
  slug: { current: 'sample-event' },
  image: '/sample-event.jpg',
  date: '2024-07-01T18:00:00Z',
  location: '123 Main St, City, Country',
  virtual: false,
  content: [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'This is the event content. Add more details here.',
        },
      ],
      markDefs: [],
      style: 'normal',
      _key: 'block1',
    },
  ],
};

// --- Static Class Names ---
const CLASSES = {
  container: 'container mx-auto px-4 py-32 md:py-40',
  wrapper: 'max-w-6xl mx-auto',
  header: 'mb-12',
  badge: 'mb-4',
  title: 'text-4xl md:text-5xl font-bold mb-6',
  description: 'text-xl text-muted-foreground mb-8',
  imageWrapper: 'relative h-[500px] rounded-lg overflow-hidden mb-12',
  image: 'object-cover',
  card: 'mb-12',
  cardContent: 'p-8',
  grid: 'grid grid-cols-1 md:grid-cols-2 gap-8',
  sectionTitle: 'text-2xl font-bold mb-4',
  detailGroup: 'space-y-4',
  detailRow: 'flex items-start gap-3',
  icon: 'h-5 w-5 mt-1 text-primary',
  label: 'font-medium',
  text: 'text-muted-foreground',
  virtualBadge: 'mt-2',
  map: 'rounded-lg',
  content: 'prose dark:prose-invert max-w-none',
};

// --- Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${EVENT.title} | Events`,
    description: EVENT.description,
  };
}

// --- Component ---
export default async function EventPage() {
  const event = EVENT;

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });

  return (
    <div className={CLASSES.container}>
      <div className={CLASSES.wrapper}>
        {/* Header */}
        <div className={CLASSES.header}>
          <Badge variant="secondary" className={CLASSES.badge}>
            {event.type}
          </Badge>
          <h1 className={CLASSES.title}>{event.title}</h1>
          <p className={CLASSES.description}>{event.description}</p>
          <Button>
            <Share2 className="h-4 w-4 mr-2" />
            Share Event
          </Button>
        </div>

        {/* Event Image */}
        <div className={CLASSES.imageWrapper}>
          <Image
            src={event.image}
            alt={event.title}
            fill
            className={CLASSES.image}
          />
        </div>

        {/* Event Details Card */}
        <Card className={CLASSES.card}>
          <CardContent className={CLASSES.cardContent}>
            <div className={CLASSES.grid}>
              <div>
                <h2 className={CLASSES.sectionTitle}>Event Details</h2>
                <div className={CLASSES.detailGroup}>
                  <div className={CLASSES.detailRow}>
                    <Calendar className={CLASSES.icon} />
                    <div>
                      <h3 className={CLASSES.label}>Date & Time</h3>
                      <p className={CLASSES.text}>{formatDate(event.date)}</p>
                    </div>
                  </div>
                  <div className={CLASSES.detailRow}>
                    <MapPin className={CLASSES.icon} />
                    <div>
                      <h3 className={CLASSES.label}>Location</h3>
                      <p className={CLASSES.text}>{event.location}</p>
                      {event.virtual && (
                        <Badge
                          variant="secondary"
                          className={CLASSES.virtualBadge}
                        >
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
                    src={`https://www.google.com/maps/embed/v1/place?key=${
                      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                    }&q=${encodeURIComponent(event.location)}`}
                    allowFullScreen
                    className={CLASSES.map}
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Event Content */}
        <Card>
          <CardContent className={CLASSES.cardContent}>
            <div className={CLASSES.content}>
              <PortableText value={event.content} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
