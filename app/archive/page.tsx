import { getMetadataForPath } from '@/lib/metadata';
import ArchivePage from '@/components/archive/ArchivePage';
import StructuredData from '@/components/StructuredData';
import { archiveSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/archive');

export default function Page() {
  return (
    <>
      <StructuredData data={archiveSchema} />
      <ArchivePage/>
    </>
  );
}