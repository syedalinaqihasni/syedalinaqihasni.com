import { getMetadataForPath } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import { gallerySchema } from '@/constants/structuredData';
import GalleryGrid from '@/components/gallery/gallery-grid';
import { GALLERY_DESCRIPTION, GALLERY_TITLE } from '@/constants/certificates';
import { Images } from '@/types/images';

export const metadata = getMetadataForPath('/gallery');

const CONTAINER = 'container mx-auto px-4 py-32 md:py-40';
const MAX_WIDTH_WRAPPER = 'max-w-6xl mx-auto';
const HEADER_WRAPPER = 'text-center mb-16';
const TITLE = 'text-4xl md:text-5xl font-bold mb-6';
const DESCRIPTION =
  'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto';

// Helper to fetch images from API
async function fetchGalleryImages(): Promise<Images[]> {
  try {
    const res = await fetch(`http://localhost:3000/api/certificates`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      // console.error('Failed to fetch gallery images');
      return [];
    }

    const data = await res.json();
    // console.log(data,'data');
    
    return data|| [];
  } catch (error) {
    // console.error('Error fetching gallery images:', error);
    return [];
  }
}

export default async function Page() {
  const images = await fetchGalleryImages();

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
            <p className="text-center text-muted-foreground">Loading gallery or no images found.</p>
          )}
        </div>
      </div>
    </>
  );
}
