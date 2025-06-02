import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EXPERIENCES } from '@/constants/experience';
import Image from 'next/image';
import { styles } from '@/styles/experience';

export const metadata: Metadata = {
  title: 'Experience | Syed Ali Naqi Hasni',
  description: 'My professional experience and work history',
};

const TEXT = {
  pageTitle: 'Experience',
  pageDescription:
    "My professional journey and the companies I've had the pleasure to work with.",
};

const ExperiencePage = () => (
  <div className={styles?.container}>
    <div className={styles?.innerWrapper}>
      <header className={styles?.header}>
        <h1 className={styles?.title}>{TEXT.pageTitle}</h1>
        <p className={styles?.description}>{TEXT.pageDescription}</p>
      </header>

      <section className={styles?.cardSpacing}>
        {EXPERIENCES.map((experience) => (
          <Card key={experience.id} className={'overflow-hidden'}>
            <CardContent className={'p-0'}>
              <div className={styles?.cardGrid}>
                <aside className={styles?.sidebar}>
                  <div className={styles?.logoWrapper}>
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      fill
                      className={styles?.logoImage}
                    />
                  </div>
                  <h3 className={styles?.companyName}>{experience.company}</h3>
                  <p className={styles?.companyPeriod}>{experience.period}</p>
                  <p className={styles?.companyLocation}>{experience.location}</p>
                  <Badge variant={'secondary'}className={styles?.badgeMargin}>
                    {experience.type}
                  </Badge>
                </aside>

                <div className={styles?.contentSection}>
                  {experience.positions.map((position, idx) => (
                    <article key={idx} className={'mb-8 last:mb-0'}>
                      <h3 className={styles?.roleTitle}>{position.role}</h3>
                      <ul className={styles?.descriptionList}>
                        {position.description.map((descItem, i) => (
                          <li key={i}>{descItem}</li>
                        ))}
                      </ul>
                      <div className={styles?.skillBadgeWrapper}>
                        {position.skills.map((skill) => (
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
