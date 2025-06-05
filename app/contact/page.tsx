import { Metadata } from 'next';
import Contact from '@/components/contact/contact-form';
import { CONSTANT, CONTACT_CARDS } from '@/constants/contact';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { styles } from '@/styles/contact';
import { getMetadataForPath } from '@/lib/metadata';

// --- Metadata ---
// Force static generation
export const metadata = getMetadataForPath('/contact');


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
