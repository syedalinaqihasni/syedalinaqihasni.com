import GalleryPage from '@/components/gallery/GalleryPage';
import { getMetadataForPath } from '@/lib/metadata';

export const metadata = getMetadataForPath('/gallery');

export default function Page() {
  return (
    <GalleryPage/>
  );
}
