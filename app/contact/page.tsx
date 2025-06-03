import { Metadata } from 'next';
import Contact from '@/components/contact/contact-form';
import { CONSTANT, CONTACT_CARDS } from '@/constants/contact';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { styles } from '@/styles/contact';

// --- Metadata ---
// Force static generation
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Contact | Syed Ali Naqi Hasni',
  description:
    'Get in touch with me for collaborations, job opportunities, or just to say hello',
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

export default function ContactPage() {
  return (
    <div className={styles?.container}>
      <div className={styles?.wrapper}>
        <div className={styles?.header}>
          <h1 className={styles?.title}>{CONSTANT?.pageTitle}</h1>
          <p className={styles?.description}>{CONSTANT?.pageDescription}</p>
        </div>

        <div className={styles?.cardsGrid}>
          {CONTACT_CARDS?.map((card) => (
            <ContactCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              details={card.details}
              link={card.link}
            />
          ))}
        </div>

        <div className={styles?.messageBox}>
          <h2 className={styles?.messageTitle}>{CONSTANT?.sendMessageTitle}</h2>
          <Contact />
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  details,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string;
}) {
  return (
    <Card className={styles?.card}>
      <CardContent className={styles?.cardContent}>
        <div className={styles?.iconWrapper}>{icon}</div>
        <h3 className={styles?.cardTitle}>{title}</h3>
        <Link
          href={link}
          className={styles?.cardLink}
          target={link.startsWith('http') ? '_blank' : undefined}
          rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {details}
        </Link>
      </CardContent>
    </Card>
  );
}
