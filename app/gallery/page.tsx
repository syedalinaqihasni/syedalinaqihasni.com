import GalleryPage from '@/components/gallery/GalleryPage';
import { getMetadataForPath } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import { gallerySchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/gallery');

export default function Page() {
  return (
    <>
      <StructuredData data={gallerySchema} />
      <GalleryPage/>
    </>
  );
}