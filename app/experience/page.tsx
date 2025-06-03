// components/ExperiencePage.tsx

import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EXPERIENCES,CONSTANT } from '@/constants/experience';
import Image from 'next/image';
import { styles } from '@/styles/experience';

export const metadata: Metadata = {
  title: 'Experience | Syed Ali Naqi Hasni',
  description: 'My professional experience and work history',
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

const ExperiencePage = () => (
  <div className={styles?.CONTAINER}>
    <div className={styles?.INNER_WRAPPER}>
      <header className={styles?.HEADER}>
        <h1 className={styles?.TITLE}>{CONSTANT?.pageTitle}</h1>
        <p className={styles?.DESCRIPTION}>{CONSTANT?.pageDescription}</p>
      </header>

      <section className={styles?.CARD_SPACING}>
        {EXPERIENCES?.map((experience) => (
          <Card key={experience.id} className={'overflow-hidden'}>
            <CardContent className={'p-0'}>
              <div className={styles?.CARD_GRID}>
                <aside className={styles?.SIDEBAR}>
                  <div className={styles?.LOGO_WRAPPER}>
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      fill
                      className={styles?.LOGO_IMAGE}
                    />
                  </div>
                  <h3 className={styles?.COMPANY_NAME}>{experience.company}</h3>
                  <p className={styles?.COMPANY_PERIOD}>{experience.period}</p>
                  <p className={styles?.COMPANY_LOCATION}>{experience.location}</p>
                  <Badge variant={'secondary'} className={styles?.BADGE_MARGIN}>
                    {experience.type}
                  </Badge>
                </aside>

                <div className={styles?.CONTENT_SECTION}>
                  {experience.positions?.map((position, idx) => (
                    <article key={idx} className={'mb-8 last:mb-0'}>
                      <h3 className={styles?.ROLE_TITLE}>{position.role}</h3>
                      <ul className={styles?.DESCRIPTION_LIST}>
                        {position.description?.map((descItem, i) => (
                          <li key={i}>{descItem}</li>
                        ))}
                      </ul>
                      <div className={styles?.SKILL_BADGE_WRAPPER}>
                        {position.skills?.map((skill) => (
                          <Badge key={skill} variant={'outline'}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  </div>
);

export default ExperiencePage;
