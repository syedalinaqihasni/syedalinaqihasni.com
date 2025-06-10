import LinksPage from '@/components/links/LinksPage';
import { getMetadataForPath } from '@/lib/metadata';

export const metadata = getMetadataForPath('/links');

export default function LinkPage() {
  return (
    <>
     <LinksPage/>
    </>
  );
}
