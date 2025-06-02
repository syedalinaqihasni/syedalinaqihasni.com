import { Metadata } from 'next';
import Contact from '@/components/contact/contact-form';
import { CONTACT_CARDS } from '@/constants/contact';
import { Card, CardContent } from '@/components/ui/card';
import {styles} from '@/styles/contact';
// --- Metadata ---
export const metadata: Metadata = {
  title: 'Contact | Syed Ali Naqi Hasni',
  description:
    'Get in touch with me for collaborations, job opportunities, or just to say hello',
};

// --- Static Text ---
const TEXT = {
  pageTitle: 'Get In Touch',
  pageDescription: `Have a project in mind or want to discuss potential opportunities? 
I'd love to hear from you. Let's make something great together.`,
  sendMessageTitle: 'Send a Message',
};

export default function ContactPage() {
  return (
    <div className={styles?.container}>
      <div className={styles?.wrapper}>
        <div className={styles?.header}>
          <h1 className={styles?.title}>{TEXT.pageTitle}</h1>
          <p className={styles?.description}>{TEXT.pageDescription}</p>
        </div>

        <div className={styles?.cardsGrid}>
          {CONTACT_CARDS.map((card) => (
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
          <h2 className={styles?.messageTitle}>{TEXT.sendMessageTitle}</h2>
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
        <a
          href={link}
          className={styles?.cardLink}
          target={link?.startsWith('http') ? '_blank' : undefined}
          rel={link?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {details}
        </a>
      </CardContent>
    </Card>
  );
}
