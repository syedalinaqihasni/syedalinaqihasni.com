import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CONSTANT, EXPERIENCES } from '@/constants/experience';
import Image from 'next/image';

const CONTAINER = 'container mx-auto px-4 py-32 md:py-40';
const INNER_WRAPPER = 'max-w-6xl mx-auto';
const HEADER = 'text-center mb-16';
const TITLE = 'text-4xl md:text-5xl font-bold mb-6';
const DESCRIPTION =
  'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto';

const CARD_SPACING = 'space-y-12';
const CARD_GRID = 'grid grid-cols-1 md:grid-cols-4 gap-6';

const SIDEBAR = 'md:col-span-1 bg-muted p-6 text-center';
const LOGO_WRAPPER = 'relative w-24 h-24 mx-auto mb-4';
const LOGO_IMAGE = 'object-cover rounded-lg';
const COMPANY_NAME = 'font-semibold text-lg';
const COMPANY_PERIOD = 'text-muted-foreground';
const COMPANY_LOCATION = 'text-sm text-muted-foreground mt-2';
const BADGE_MARGIN = 'mt-2';

const CONTENT_SECTION = 'md:col-span-3 p-6';
const ROLE_TITLE = 'text-2xl font-bold mb-4';
const DESCRIPTION_LIST =
  'list-disc list-inside space-y-2 mb-6 text-muted-foreground';
const SKILL_BADGE_WRAPPER = 'flex flex-wrap gap-2';

const ExperiencePage = () => (
  <div className={CONTAINER}>
    <div className={INNER_WRAPPER}>
      <header className={HEADER}>
        <h1 className={TITLE}>{CONSTANT?.ExperiencePageTitle}</h1>
        <p className={DESCRIPTION}>{CONSTANT?.ExperiencePageDescription}</p>
      </header>

      <section className={CARD_SPACING}>
        {EXPERIENCES?.map((experience) => (
          <Card key={experience.id} className={'overflow-hidden'}>
            <CardContent className={'p-0'}>
              <div className={CARD_GRID}>
                <aside className={SIDEBAR}>
                  <div className={LOGO_WRAPPER}>
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      fill
                      className={LOGO_IMAGE}
                    />
                  </div>
                  <h3 className={COMPANY_NAME}>{experience.company}</h3>
                  <p className={COMPANY_PERIOD}>{experience.period}</p>
                  <p className={COMPANY_LOCATION}>{experience.location}</p>
                  <Badge variant={'secondary'} className={BADGE_MARGIN}>
                    {experience.type}
                  </Badge>
                </aside>

                <div className={CONTENT_SECTION}>
                  {experience.positions?.map((position, idx) => (
                    <article key={idx} className={'mb-8 last:mb-0'}>
                      <h3 className={ROLE_TITLE}>{position.role}</h3>
                      <ul className={DESCRIPTION_LIST}>
                        {position.description?.map((descItem, i) => (
                          <li key={i}>{descItem}</li>
                        ))}
                      </ul>
                      <div className={SKILL_BADGE_WRAPPER}>
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
