import LinksPage from '@/components/links/LinksPage';
import { getMetadataForPath } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import { linksSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/links');

export default function LinkPage() {
  return (
    <>
      <StructuredData data={linksSchema} />
      <LinksPage/>
    </>
  );
}