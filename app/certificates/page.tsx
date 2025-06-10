import CertificatePage from '@/components/certificates/certificatesPage';
import { getMetadataForPath } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import { certificatesSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/certificates');

export default function Page() {
  return (
    <>
      <StructuredData data={certificatesSchema} />
      <CertificatePage/>
    </>
  );
}