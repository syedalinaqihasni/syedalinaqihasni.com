import { getMetadataForPath } from '@/lib/metadata';
import SocialPage from '@/components/social/SocialPage';
import StructuredData from '@/components/StructuredData';
import { socialsSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/socials');

export default function Page() {
  return (
    <>
      <StructuredData data={socialsSchema} />
      <SocialPage/>
    </>
  );
}