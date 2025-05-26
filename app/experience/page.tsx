// components/ExperiencePage.tsx

import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EXPERIENCES } from '@/constants';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Experience | Syed Ali Naqi Hasni',
  description: 'My professional experience and work history',
};

const TEXT = {
  pageTitle: 'Experience',
  pageDescription:
    "My professional journey and the companies I've had the pleasure to work with.",
};

const containerStyles = 'container mx-auto px-4 py-32 md:py-40';
const innerWrapperStyles = 'max-w-6xl mx-auto';
const headerStyles = 'text-center mb-16';
const titleStyles = 'text-4xl md:text-5xl font-bold mb-6';
const descriptionStyles =
  'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto';
const cardSpacingStyles = 'space-y-12';
const cardGridStyles = 'grid grid-cols-1 md:grid-cols-4 gap-6';
const sidebarStyles = 'md:col-span-1 bg-muted p-6';
const logoWrapperStyles = 'relative w-24 h-24 mx-auto mb-4';
const logoImageStyles = 'object-cover rounded-lg';
const companyTextStyles = 'font-semibold text-lg';
const fadedTextStyles = 'text-muted-foreground';
const fadedSmallTextStyles = 'text-sm text-muted-foreground mt-2';
const badgeMarginStyles = 'mt-2';
const contentSectionStyles = 'md:col-span-3 p-6';
const roleTitleStyles = 'text-2xl font-bold mb-4';
const descriptionListStyles =
  'list-disc list-inside space-y-2 mb-6 text-muted-foreground';
const skillBadgeWrapperStyles = 'flex flex-wrap gap-2';

const ExperiencePage = () => (
  <div className={containerStyles}>
    <div className={innerWrapperStyles}>
      <div className={headerStyles}>
        <h1 className={titleStyles}>{TEXT.pageTitle}</h1>
        <p className={descriptionStyles}>{TEXT.pageDescription}</p>
      </div>

      <div className={cardSpacingStyles}>
        {EXPERIENCES.map((experience) => (
          <Card key={experience.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className={cardGridStyles}>
                <div className={sidebarStyles}>
                  <div className={logoWrapperStyles}>
                    <Image
                      src={experience.logo}
                      alt={experience.company}
                      fill
                      className={logoImageStyles}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className={companyTextStyles}>{experience.company}</h3>
                    <p className={fadedTextStyles}>{experience.period}</p>
                    <p className={fadedSmallTextStyles}>
                      {experience.location}
                    </p>
                    <Badge variant="secondary" className={badgeMarginStyles}>
                      {experience.type}
                    </Badge>
                  </div>
                </div>

                <div className={contentSectionStyles}>
                  {experience.positions.map((position, idx) => (
                    <div key={idx} className="mb-8 last:mb-0">
                      <h3 className={roleTitleStyles}>{position.role}</h3>
                      <ul className={descriptionListStyles}>
                        {position.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <div className={skillBadgeWrapperStyles}>
                        {position.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default ExperiencePage;
