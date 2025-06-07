
import CertificateGrid from '@/components/certificates/certificates-grid';
import { getMetadataForPath } from '@/lib/metadata';

export const metadata = getMetadataForPath('/certificates');

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
          <h1 className={TITLE}>{'Professional Certifications'}</h1>
          <p className={DESCRIPTION}>{'Here are some of the certificates I have earned throughout my career and education.'}</p>
        </div>
        <CertificateGrid />
      </div>
    </div>
  );
}
