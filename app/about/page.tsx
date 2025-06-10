import { getMetadataForPath } from '@/lib/metadata';
import AboutPage from '@/components/about/AboutPage';
import StructuredData from '@/components/StructuredData';
import { aboutMe } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/about');

export default function Page() {
  return (
    <>
      <StructuredData data={aboutMe} />
      <AboutPage/>
    </>
  );
}