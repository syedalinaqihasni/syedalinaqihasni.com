import { getMetadataForPath } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import { gallerySchema } from '@/constants/structuredData';
import GalleryGrid from '@/components/gallery/gallery-grid';
import { GALLERY, GALLERY_DESCRIPTION, GALLERY_TITLE } from '@/constants/gallery';
import { Images } from '@/types/images';

export const metadata = getMetadataForPath('/gallery');

const CONTAINER = 'container mx-auto px-4 py-32 md:py-40';
const MAX_WIDTH_WRAPPER = 'max-w-6xl mx-auto';
const HEADER_WRAPPER = 'text-center mb-16';
const TITLE = 'text-4xl md:text-5xl font-bold mb-6';
const DESCRIPTION =
  'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto';


export default async function Page() {
  const images = GALLERY;

  return (
    <>
      <StructuredData data={gallerySchema} />
      <div className={CONTAINER}>
        <div className={MAX_WIDTH_WRAPPER}>
          <div className={HEADER_WRAPPER}>
            <h1 className={TITLE}>{GALLERY_TITLE}</h1>
            <p className={DESCRIPTION}>{GALLERY_DESCRIPTION}</p>
          </div>

          {images.length > 0 ? (
            <GalleryGrid images={images} />
          ) : (
            <p className="text-center text-muted-foreground">
              Loading gallery or no images found.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
