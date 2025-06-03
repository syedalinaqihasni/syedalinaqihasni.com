import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Phone, MapPin } from 'lucide-react';
import { RESUME } from '@/constants/resume';

const PAGE_TITLE = 'Resume | Syed Ali Naqi Hasni';
const PAGE_DESCRIPTION = 'View or download my professional resume';

const SECTION_TITLES = {
  summary: 'Professional Summary',
  experience: 'Work Experience',
  education: 'Education',
  skills: 'Skills',
  certifications: 'Certifications',
};

const SKILL_CATEGORIES = ['frontend', 'backend', 'tools'] as const;

type SkillCategory = (typeof SKILL_CATEGORIES)[number];

/** CSS classes */
const containerClass = 'container mx-auto px-4 py-32 md:py-40';
const maxWidthClass = 'max-w-4xl mx-auto';

const headerClass = 'flex justify-between items-start mb-12';
const nameClass = 'text-4xl font-bold mb-4';
const titleClass = 'text-xl text-muted-foreground mb-4';
const contactInfoClass = 'not-italic space-y-2 text-muted-foreground';
const contactItemClass = 'flex items-center gap-2';
const summaryCardClass = 'mb-8';
const cardContentClass = 'p-6';

const sectionTitleClass = 'text-xl font-semibold mb-4';
const sectionTitleWithMarginClass = 'text-xl font-semibold mb-6';

const experienceItemClass = 'space-y-6';
const experienceHeaderClass = 'flex justify-between mb-2';
const experienceRoleClass = 'font-semibold';
const mutedTextClass = 'text-muted-foreground';
const listClass = 'list-disc list-inside space-y-1 text-muted-foreground';

const educationItemClass = 'flex justify-between mb-2';
const educationDegreeClass = 'font-semibold';

const skillCategoryClass = 'font-medium mb-2 capitalize';
const skillBadgeContainerClass = 'flex flex-wrap gap-2';

const certificationsListClass = 'space-y-2 text-muted-foreground';

/**
 * Metadata for Resume Page
 */
export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

/**
 * ResumePage Component
 */
export default function ResumePage() {
  const educationKey = (edu: (typeof RESUME.education)[number]) =>
    `${edu.degree}-${edu.institution}-${edu.period}`;

  return (
    <div className={containerClass}>
      <div className={maxWidthClass}>
        {/* Header Section */}
        <header className={headerClass}>
          <div>
            <h1 className={nameClass}>{RESUME.profile.name}</h1>
            <h2 className={titleClass}>{RESUME.profile.title}</h2>
            <address className={contactInfoClass}>
              <div className={contactItemClass}>
                <Mail className={'h-4 w-4'} />
                <a href={`mailto:${RESUME.profile.email}`}>
                  {RESUME.profile.email}
                </a>
              </div>
              <div className={contactItemClass}>
                <Phone className={'h-4 w-4'} />
                <a href={`tel:${RESUME.profile.phone}`}>
                  {RESUME.profile.phone}
                </a>
              </div>
              <div className={contactItemClass}>
                <MapPin className={'h-4 w-4'} />
                <span>{RESUME.profile.location}</span>
              </div>
            </address>
          </div>
          <Button>
            <Download className={'mr-2 h-4 w-4'} />
            Download PDF
          </Button>
        </header>

        {/* Professional Summary */}
        <Card className={summaryCardClass}>
          <CardContent className={cardContentClass}>
            <h3 className={sectionTitleClass}>{SECTION_TITLES.summary}</h3>
            <p className={mutedTextClass}>{RESUME.summary}</p>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <Card className={summaryCardClass}>
          <CardContent className={cardContentClass}>
            <h3 className={sectionTitleWithMarginClass}>
              {SECTION_TITLES.experience}
            </h3>
            <div className={experienceItemClass}>
              {RESUME.experiences.map(({ role, period, company, details }) => (
                <section key={`${role}-${period}`}>
                  <div className={experienceHeaderClass}>
                    <h4 className={experienceRoleClass}>{role}</h4>
                    <time className={mutedTextClass}>{period}</time>
                  </div>
                  <div className={`${mutedTextClass} mb-2`}>{company}</div>
                  <ul className={listClass}>
                    {details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className={summaryCardClass}>
          <CardContent className={cardContentClass}>
            <h3 className={sectionTitleWithMarginClass}>
              {SECTION_TITLES.education}
            </h3>
            <div>
              {RESUME.education.map((edu) => (
                <section key={educationKey(edu)}>
                  <div className={educationItemClass}>
                    <h4 className={educationDegreeClass}>{edu.degree}</h4>
                    <time className={mutedTextClass}>{edu.period}</time>
                  </div>
                  <div className={mutedTextClass}>{edu.institution}</div>
                </section>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className={summaryCardClass}>
          <CardContent className={cardContentClass}>
            <h3 className={sectionTitleClass}>{SECTION_TITLES.skills}</h3>
            <div className={'space-y-4'}>
              {SKILL_CATEGORIES.map((category) => (
                <div key={category}>
                  <h4 className={skillCategoryClass}>{category}</h4>
                  <div className={skillBadgeContainerClass}>
                    {RESUME.skills[category].map((skill) => (
                      <Badge key={skill} variant={'secondary'}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardContent className={cardContentClass}>
            <h3 className={sectionTitleClass}>
              {SECTION_TITLES.certifications}
            </h3>
            <ul className={certificationsListClass}>
              {RESUME.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
