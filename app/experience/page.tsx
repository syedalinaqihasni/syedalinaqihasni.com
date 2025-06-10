import ExperiencePage from '@/components/experience/ExperiencePage'
import { getMetadataForPath } from '@/lib/metadata';
export const metadata = getMetadataForPath('/experience');

const Page = () => (
  <ExperiencePage/>
);

export default Page;
