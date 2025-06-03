import { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/gallery-grid';
import { CONSTANT } from '@/constants/gallery';

export const metadata: Metadata = {
  title: 'Gallery | Syed Ali Naqi Hasni',
  description:
    'Browse my photo gallery showcasing events, projects, and creative work',
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

// CSS Class Constants
const CONTAINER = 'container mx-auto px-4 py-32 md:py-40';
const MAX_WIDTH_WRAPPER = 'max-w-6xl mx-auto';

const HEADER_WRAPPER = 'text-center mb-16';
const TITLE = 'text-4xl md:text-5xl font-bold mb-6';
const DESCRIPTION =
  'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto';

export default function GalleryPage() {
  return (
    <div className={CONTAINER}>
      <div className={MAX_WIDTH_WRAPPER}>
        <div className={HEADER_WRAPPER}>
          <h1 className={TITLE}>{CONSTANT.title}</h1>
          <p className={DESCRIPTION}>{CONSTANT.description}</p>
        </div>
        <GalleryGrid />
      </div>
    </div>
  );
}
