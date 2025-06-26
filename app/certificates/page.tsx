import { getMetadataForPath } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import { gallerySchema } from '@/constants/structuredData';
import GalleryGrid from '@/components/gallery/gallery-grid';
import { GALLERY_DESCRIPTION, GALLERY_TITLE } from '@/constants/certificates';
import { Images } from '@/types/images';

export const metadata = getMetadataForPath('/certificates');

const CONTAINER = 'container mx-auto px-4 py-32 md:py-40';
const MAX_WIDTH_WRAPPER = 'max-w-6xl mx-auto';
const HEADER_WRAPPER = 'text-center mb-16';
const TITLE = 'text-4xl md:text-5xl font-bold mb-6';
const DESCRIPTION =
  'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto';

// ✅ Use relative path to avoid hardcoded domain issues
async function fetchCertificateImages(): Promise<Images[]> {
  try {
    const res = await fetch('/api/certificates', {
      cache: 'no-store',
      next: { revalidate: 0 }, // optional for full no-cache
    });

    if (!res.ok) return [];

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

export default async function Page() {
  const images = await fetchCertificateImages();

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
              Loading certificates or no data available.
            </p>
          )}
        </div>
      </div>
    </>
  );
}