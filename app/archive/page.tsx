import { getMetadataForPath } from '@/lib/metadata';
import ArchivePage from '@/components/archive/ArchivePage';
export const metadata = getMetadataForPath('/archive');

export default function Page() {
  return (
    <>
    <ArchivePage/>
    </>
  );
}
