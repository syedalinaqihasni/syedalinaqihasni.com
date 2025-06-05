import { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/gallery-grid';
import { CONSTANT } from '@/constants/gallery';
import { styles } from '@/styles/gallery';
import { getMetadataForPath } from '@/lib/metadata';

// Force static generation

export const metadata = getMetadataForPath('/gallery');


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
