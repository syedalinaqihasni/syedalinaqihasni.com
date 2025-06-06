
import Contact from '@/components/contact/contact-form';
import { CONSTANT, CONTACT_CARDS } from '@/constants/contact';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { getMetadataForPath } from '@/lib/metadata';

export const metadata = getMetadataForPath('/contact');

const styles = {
  container: 'container mx-auto px-4 py-32 md:py-40',
  wrapper: 'max-w-6xl mx-auto',
  header: 'text-center mb-16',
  title: 'text-4xl md:text-5xl font-bold mb-6',
  description: 'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto',
  cardsGrid: 'grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12',
  messageBox: 'bg-muted/50 rounded-lg p-6 md:p-10',
  messageTitle: 'text-2xl font-bold mb-8 text-center',
  card: 'text-center',
  cardContent: 'pt-6',
  iconWrapper: 'flex justify-center mb-4',
  cardTitle: 'text-xl font-medium mb-2',
  cardLink: 'text-muted-foreground hover:text-primary transition-colors',
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
              key={card?.title}
              icon={card?.icon}
              title={card?.title}
              details={card?.details}
              link={card?.link}
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
