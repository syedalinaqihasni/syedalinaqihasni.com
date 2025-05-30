import { Metadata } from 'next';
import Contact from '@/components/contact/contact-form';
import { CONTACT_CARDS } from '@/constants';
import { Card, CardContent } from '@/components/ui/card';

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

// --- Static Class Names ---
const CLASSES = {
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
    <div className={CLASSES.container}>
      <div className={CLASSES.wrapper}>
        <div className={CLASSES.header}>
          <h1 className={CLASSES.title}>{TEXT.pageTitle}</h1>
          <p className={CLASSES.description}>{TEXT.pageDescription}</p>
        </div>

        <div className={CLASSES.cardsGrid}>
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

        <div className={CLASSES.messageBox}>
          <h2 className={CLASSES.messageTitle}>{TEXT.sendMessageTitle}</h2>
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
    <Card className={CLASSES.card}>
      <CardContent className={CLASSES.cardContent}>
        <div className={CLASSES.iconWrapper}>{icon}</div>
        <h3 className={CLASSES.cardTitle}>{title}</h3>
        <a
          href={link}
          className={CLASSES.cardLink}
          target={link.startsWith('http') ? '_blank' : undefined}
          rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {details}
        </a>
      </CardContent>
    </Card>
  );
}
