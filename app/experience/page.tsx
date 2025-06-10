import ExperiencePage from '@/components/experience/ExperiencePage'
import { getMetadataForPath } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import { experienceSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/experience');

const Page = () => (
  <>
    <StructuredData data={experienceSchema} />
    <ExperiencePage/>
  </>
);

export default Page;