import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, MapPin } from "lucide-react";
import { CONSTANT, SECTION_TITLES, SKILL_CATEGORIES } from "@/constants/resume";
import Link from "next/link";
import { styles } from "@/styles/resume";

/**
 * Metadata for CONSTANT Page
 */
// Force static generation


export const metadata: Metadata = {
  title: "Links | Syed Ali Naqi Hasni",
  description: "View or download my professional CONSTANT",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syedalinaqihasni.com",
    title: "Syed Ali Naqi Hasni | Frontend Web Developer",
    description:
      "Personal portfolio website showcasing my projects, skills, and experience",
    siteName: "Syed Ali Naqi Hasni",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Ali Naqi Hasni | Frontend Web Developer",
    description:
      "Personal portfolio website showcasing my projects, skills, and experience",
  },
  metadataBase: new URL("https://syedalinaqihasni.com"),
};

/**
 * CONSTANTPage Component
 */
export default function CONSTANTPage() {
  const educationKey = (edu: (typeof CONSTANT.education)[number]) =>
    `${edu.degree}-${edu.institution}-${edu.period}`;

  return (
    <div className={styles?.container}>
      <div className={styles?.maxWidth}>
        {/* Header Section */}
        <header className={styles?.header}>
          <div>
            <h1 className={styles?.name}>{CONSTANT.profile.name}</h1>
            <h2 className={styles?.title}>{CONSTANT.profile.title}</h2>
            <address className={styles?.contactInfo}>
              <div className={styles?.contactItem}>
                <Mail className={"h-4 w-4"} />
                <Link href={`mailto:${CONSTANT.profile.email}`}>
                  {CONSTANT.profile.email}
                </Link>
              </div>
              <div className={styles?.contactItem}>
                <Phone className={"h-4 w-4"} />
                <Link href={`tel:${CONSTANT.profile.phone}`}>
                  {CONSTANT.profile.phone}
                </Link>
              </div>
              <div className={styles?.contactItem}>
                <MapPin className={"h-4 w-4"} />
                <span>{CONSTANT.profile.location}</span>
              </div>
            </address>
          </div>
          <Button>
            <Download className={"mr-2 h-4 w-4"} />
            Download PDF
          </Button>
        </header>

        {/* Professional Summary */}
        <Card className={styles?.summaryCard}>
          <CardContent className={styles?.cardContent}>
            <h3 className={styles?.sectionTitle}>{SECTION_TITLES.summary}</h3>
            <p className={styles?.mutedText}>{CONSTANT.summary}</p>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <Card className={styles?.summaryCard}>
          <CardContent className={styles?.cardContent}>
            <h3 className={styles?.sectionTitleWithMargin}>
              {SECTION_TITLES.experience}
            </h3>
            <div className={styles?.experienceItem}>
              {CONSTANT.experiences?.map(
                ({ role, period, company, details }) => (
                  <section key={`${role}-${period}`}>
                    <div className={styles?.experienceHeader}>
                      <h4 className={styles?.experienceRole}>{role}</h4>
                      <time className={styles?.mutedText}>{period}</time>
                    </div>
                    <div className={`${styles?.mutedText} mb-2`}>{company}</div>
                    <ul className={styles?.list}>
                      {details?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </section>
                )
              )}
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className={styles?.summaryCard}>
          <CardContent className={styles?.cardContent}>
            <h3 className={styles?.sectionTitleWithMargin}>
              {SECTION_TITLES.education}
            </h3>
            <div>
              {CONSTANT.education?.map((edu) => (
                <section key={educationKey(edu)}>
                  <div className={styles?.educationItem}>
                    <h4 className={styles?.educationDegree}>{edu.degree}</h4>
                    <time className={styles?.mutedText}>{edu.period}</time>
                  </div>
                  <div className={styles?.mutedText}>{edu.institution}</div>
                </section>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className={styles?.summaryCard}>
          <CardContent className={styles?.cardContent}>
            <h3 className={styles?.sectionTitle}>{SECTION_TITLES.skills}</h3>
            <div className={"space-y-4"}>
              {SKILL_CATEGORIES?.map((category) => (
                <div key={category}>
                  <h4 className={styles?.skillCategory}>{category}</h4>
                  <div className={styles?.skillBadgeContainer}>
                    {CONSTANT.skills[category]?.map((skill) => (
                      <Badge key={skill} variant={"secondary"}>
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
          <CardContent className={styles?.cardContent}>
            <h3 className={styles?.sectionTitle}>
              {SECTION_TITLES.certifications}
            </h3>
            <ul className={styles?.certificationsList}>
              {CONSTANT.certifications?.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
