import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CONSTANT} from '@/constants/about';

import Image from 'next/image';
import { styles } from '@/styles/about';

// Force static generation
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About Me | Syed Ali Naqi Hasni',
  description: 'Learn more about my journey, experience, and the tools I use.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://syedalinaqihasni.com',
    title: 'Syed Ali Naqi Hasni | Frontend Web Developer',
    description:
      'Personal portfolio website showcasing my projects, skills, and experience',
    siteName: 'Syed Ali Naqi Hasni',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Ali Naqi Hasni | Frontend Web Developer',
    description:
      'Personal portfolio website showcasing my projects, skills, and experience',
  },
  metadataBase: new URL('https://syedalinaqihasni.com'),
};

export default function AboutPage() {
  return (
    <div className={styles?.container}>
      <div className={styles?.innerWrapper}>
        <div className={styles?.headingSection}>
          <h1 className={styles?.headingTitle}>{CONSTANT?.title}</h1>
          <p className={styles?.headingDescription}>{CONSTANT?.description}</p>
        </div>

        {/* Profile Section */}
        <div className={styles?.profileGrid}>
          <div className={styles?.profileImageWrapper}>
            <Image
              src={'/images/syedalinaqihasni.jpg'}
              alt={'Profile'}
              fill
              className={styles?.profileImage}
            />
          </div>
          <div>
            <h2 className={styles?.profileTextHeading}>{CONSTANT?.profile.heading}</h2>
            <div className={styles?.profileTextWrapper}>
              {CONSTANT?.profile.paragraphs?.map((text, idx) => (
                <p
                  className={styles?.profileParagraph}
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className={styles?.timelineSection}>
          <h2 className={styles?.timelineHeading}>{CONSTANT?.journeyHeading}</h2>
          <div className={styles?.timelineWrapper}>
            <div className={styles?.timelineLine} />
            <div className={styles?.timelineEvents}>
              {CONSTANT?.journey?.map((event, index) => (
                <div key={event.year} className={styles?.timelineEvent(index)}>
                  <div className={styles?.timelineSpacer} />
                  <div className={styles?.timelineDot} />
                  <Card className={styles?.timelineCard}>
                    <CardContent className={styles?.timelineCardContent}>
                      <div className={styles?.timelineYear}>{event.year}</div>
                      <h3 className={styles?.timelineTitle}>{event.title}</h3>
                      <p className={styles?.timelineDescription}>{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div>
          <h2 className={styles?.toolsSectionHeading}>{CONSTANT?.toolsHeading}</h2>
          <div className={styles?.toolsGrid}>
            {CONSTANT.tools?.map((category) => (
              <Card key={category.category}>
                <CardContent className={styles?.toolCardContent}>
                  <h3 className={styles?.toolCategoryTitle}>{category.category}</h3>
                  <div className={styles?.toolBadgesWrapper}>
                    {category.items?.map((item) => (
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
