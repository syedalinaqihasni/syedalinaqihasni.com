

import CertificatePage from '@/components/certificates/certificatesPage';
import { getMetadataForPath } from '@/lib/metadata';

export const metadata = getMetadataForPath('/certificates');

export default function Page() {
  return (
    <CertificatePage/>
  );
}
