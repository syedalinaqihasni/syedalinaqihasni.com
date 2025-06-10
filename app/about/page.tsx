import { getMetadataForPath } from '@/lib/metadata';
import AboutPage from '@/components/about/AboutPage'

export const metadata = getMetadataForPath('/about');

export default function Page() {
  return (
   <AboutPage/>
  );
}
