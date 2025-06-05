import { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/gallery-grid';
import { CONSTANT } from '@/constants/gallery';
import { styles } from '@/styles/gallery';

// Force static generation


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

export default function GalleryPage() {
  return (
    <div className={styles?.CONTAINER}>
      <div className={styles?.MAX_WIDTH_WRAPPER}>
        <div className={styles?.HEADER_WRAPPER}>
          <h1 className={styles?.TITLE}>{CONSTANT.title}</h1>
          <p className={styles?.DESCRIPTION}>{CONSTANT.description}</p>
        </div>
        <GalleryGrid />
      </div>
    </div>
  );
}
