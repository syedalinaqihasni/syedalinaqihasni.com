import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ABOUT_PAGE_TEXT, JOURNEY, TOOLS } from '@/constants/about';
import { SEO } from '@/constants/seo';
import Image from 'next/image';
import { styles } from '@/styles/about';

export const metadata: Metadata = {
  title: SEO.about.title,
  description: SEO.about.description,
};

export default function AboutPage() {
  return (
    <div className={styles?.container}>
      <div className={styles?.innerWrapper}>
        <div className={'text-center mb-16'}>
          <h1 className={styles?.sectionTitle}>{ABOUT_PAGE_TEXT.title}</h1>
          <p className={styles?.sectionDescription}>
            {ABOUT_PAGE_TEXT.description}
          </p>
        </div>

        {/* Profile Section */}
        <div className={styles?.profileGrid}>
          <div className={styles?.imageWrapper}>
            <Image
              src={'/images/syedalinaqihasni.jpg'}
              alt={'Profile'}
              fill
              className={'object-cover'}
            />
          </div>
          <div>
            <h2 className={styles?.profileHeading}>
              {ABOUT_PAGE_TEXT.profile.heading}
            </h2>
            <div className={'prose dark:prose-invert'}>
              {ABOUT_PAGE_TEXT.profile.paragraphs.map((text, idx) => (
                <p
                  className={styles?.paragraph}
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className={styles?.timelineWrapper}>
          <h2 className={styles?.timelineHeading}>
            {ABOUT_PAGE_TEXT.journey.heading}
          </h2>
          <div className={'relative'}>
            <div className={styles?.timelineLine} />
            <div className={'space-y-12'}>
              {JOURNEY.map((event, index) => (
                <div
                  key={event?.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={'flex-1 md:w-1/2'} />
                  <div className={styles?.timelineCircle} />
                  <Card className={styles?.timelineCard}>
                    <CardContent className={styles?.timelineCardContent}>
                      <div className={'font-bold text-xl mb-2'}>{event?.year}</div>
                      <h3 className={'text-lg font-semibold mb-2'}>
                        {event?.title}
                      </h3>
                      <p className={'text-muted-foreground'}>
                        {event?.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div>
          <h2 className={styles?.toolsHeading}>
            {ABOUT_PAGE_TEXT.tools.heading}
          </h2>
          <div className={styles?.toolsGrid}>
            {TOOLS.map((category) => (
              <Card key={category.category}>
                <CardContent className={styles?.cardContent}>
                  <h3 className={styles?.cardTitle}>
                    {category.category}
                  </h3>
                  <div className={styles?.badgeWrapper}>
                    {category.items.map((item) => (
                      <Badge key={item} variant={'secondary'}>
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
