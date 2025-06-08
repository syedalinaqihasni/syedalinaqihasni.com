
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Phone, MapPin } from 'lucide-react';
import { RESUME,SECTION_TITLES, SKILL_CATEGORIES } from '@/constants/resume';
import Link from 'next/link';
import { getMetadataForPath } from "@/lib/metadata";
import DownloadButton from '@/components/resume/DownloadButton';

export const metadata = getMetadataForPath('/resume');


type SkillCategory = (typeof SKILL_CATEGORIES)[number];

const container = 'container mx-auto px-4 py-32 md:py-40';
const maxWidth = 'max-w-4xl mx-auto';

const header = 'flex justify-between items-start mb-12';
const name = 'text-4xl font-bold mb-4';
const title = 'text-xl text-muted-foreground mb-4';
const contactInfo = 'not-italic space-y-2 text-muted-foreground';
const contactItem = 'flex items-center gap-2';
const summaryCard = 'mb-8';
const cardContent = 'p-6';

const sectionTitle = 'text-xl font-semibold mb-4';
const sectionTitleWithMargin = 'text-xl font-semibold mb-6';

const experienceItem = 'space-y-6';
const experienceHeader = 'flex justify-between mb-2';
const experienceRole = 'font-semibold';
const mutedText = 'text-muted-foreground';
const list = 'list-disc list-inside space-y-1 text-muted-foreground';

const educationItem = 'flex justify-between mb-2';
const educationDegree = 'font-semibold';

const skillCategory = 'font-medium mb-2 capitalize';
const skillBadgeContainer = 'flex flex-wrap gap-2';

const certificationsList = 'space-y-2 text-muted-foreground';

export default function Page() {
  const educationKey = (edu: (typeof RESUME.education)[number]) =>
    `${edu.degree}-${edu.institution}-${edu.period}`;

  return (
    <div className={container}>
      <div className={maxWidth}>
        <header className={header}>
          <div>
            <h1 className={name}>{RESUME.profile.name}</h1>
            <h2 className={title}>{RESUME.profile.title}</h2>
            <address className={contactInfo}>
              <div className={contactItem}>
                <Mail className={'h-4 w-4'} />
                <Link href={`mailto:${RESUME.profile.email}`}>
                  {RESUME.profile.email}
                </Link>
              </div>
              <div className={contactItem}>
                <Phone className={'h-4 w-4'} />
                <Link href={`tel:${RESUME.profile.phone}`}>
                  {RESUME.profile.phone}
                </Link>
              </div>
              <div className={contactItem}>
                <MapPin className={'h-4 w-4'} />
                <span>{RESUME.profile.location}</span>
              </div>
            </address>
          </div>
         <DownloadButton/>
        </header>
        <Card className={summaryCard}>
          <CardContent className={cardContent}>
            <h3 className={sectionTitle}>{SECTION_TITLES.summary}</h3>
            <p className={mutedText}>{RESUME.summary}</p>
          </CardContent>
        </Card>
        <Card className={summaryCard}>
          <CardContent className={cardContent}>
            <h3 className={sectionTitleWithMargin}>
              {SECTION_TITLES.experience}
            </h3>
            <div className={experienceItem}>
              {RESUME.experiences?.map(({ role, period, company, details }) => (
                <section key={`${role}-${period}`}>
                  <div className={experienceHeader}>
                    <h4 className={experienceRole}>{role}</h4>
                    <time className={mutedText}>{period}</time>
                  </div>
                  <div className={`${mutedText} mb-2`}>{company}</div>
                  <ul className={list}>
                    {details?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className={summaryCard}>
          <CardContent className={cardContent}>
            <h3 className={sectionTitleWithMargin}>
              {SECTION_TITLES.education}
            </h3>
            <div>
              {RESUME.education?.map((edu) => (
                <section key={educationKey(edu)}>
                  <div className={educationItem}>
                    <h4 className={educationDegree}>{edu.degree}</h4>
                    <time className={mutedText}>{edu.period}</time>
                  </div>
                  <div className={mutedText}>{edu.institution}</div>
                </section>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className={summaryCard}>
          <CardContent className={cardContent}>
            <h3 className={sectionTitle}>{SECTION_TITLES.skills}</h3>
            <div className={'space-y-4'}>
              {SKILL_CATEGORIES?.map((category) => (
                <div key={category}>
                  <h4 className={skillCategory}>{category}</h4>
                  <div className={skillBadgeContainer}>
                    {RESUME.skills[category]?.map((skill) => (
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
        <Card>
          <CardContent className={cardContent}>
            <h3 className={sectionTitle}>
              {SECTION_TITLES.certifications}
            </h3>
            <ul className={certificationsList}>
              {RESUME.certifications?.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
