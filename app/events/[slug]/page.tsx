import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Share2 } from 'lucide-react';
import Image from 'next/image';
import { Event } from '@/types/events';
import { notFound } from 'next/navigation';
import { events } from '@/constants/events';
import { formatDateTime } from '@/lib/utils';
import { styles } from '@/styles/eventsSingle';
import HtmlRenderer from '@/components/HtmlRenderer';
import { generateDynamicMetadata } from '@/lib/generateDynamicMetadata';


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) return notFound();

  return generateDynamicMetadata({
    title: event.title,
    description: event.excerpt || event.title,
    image: event.image,
    publishedAt: event.date,
    path: `/events/${event.slug}`,
  });
}

const EventPage = async ({ params }: { params: { slug: string } }) => {
  const event = events.find((event) => event.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className={styles?.container}>
      <div className={styles?.wrapper}>
        {/* Header */}
        <div className={styles?.header}>
          <Badge variant={'secondary'} className={styles?.badge}>
            {event.type}
          </Badge>
          <h1 className={styles?.title}>{event.title}</h1>
          <p className={styles?.description}>{event.description}</p>
          <Button>
            <Share2 className={'h-4 w-4 mr-2'} />
            Share Event
          </Button>
        </div>

        {/* Event Image */}
        <div className={styles?.imageWrapper}>
          <Image
            src={event.image}
            alt={event.title}
            fill
            className={styles?.image}
          />
        </div>

        {/* Event Details Card */}
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
                      <p className={styles?.text}>{formatDateTime(event.date)}</p>
                    </div>
                  </div>
                  <div className={styles?.detailRow}>
                    <MapPin className={styles?.icon} />
                    <div>
                      <h3 className={styles?.label}>Location</h3>
                      <p className={styles?.text}>{event.location}</p>
                      {event.virtual && (
                        <Badge
                          variant={'secondary'}
                          className={styles?.virtualBadge}
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
                    title={'Event Location'}
                    width={'100%'}
                    height={'300'}
                    frameBorder={'0'}
                    src={`https://www.google.com/maps/embed/v1/place?key=${
                      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                    }&q=${encodeURIComponent(event.location)}`}
                    allowFullScreen
                    className={styles?.map}
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Event Content */}
        <Card>
          <CardContent className={styles?.cardContent}>
            <div className={styles?.content}>
                <HtmlRenderer html={event.content}/>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default EventPage;