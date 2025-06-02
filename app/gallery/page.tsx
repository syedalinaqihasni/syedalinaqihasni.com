import { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/gallery-grid';
import { styles } from '@/styles/gallery';

const GALLERY_TITLE = 'Gallery';
const GALLERY_DESCRIPTION =
  'A collection of images from my projects, events, and creative work.';

export const metadata: Metadata = {
  title: 'Gallery | Syed Ali Naqi Hasni',
  description:
    'Browse my photo gallery showcasing events, projects, and creative work',
};

export default function GalleryPage() {
  return (
    <div className={styles?.container}>
      <div className={styles?.maxWidthWrapper}>
        <div className={styles?.headerWrapper}>
          <h1 className={styles?.title}>{GALLERY_TITLE}</h1>
          <p className={styles?.description}>{GALLERY_DESCRIPTION}</p>
        </div>
        <GalleryGrid />
      </div>
    </div>
  );
}
