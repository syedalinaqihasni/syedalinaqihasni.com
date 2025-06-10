import { getMetadataForPath } from '@/lib/metadata';
import SocialPage from '@/components/social/SocialPage';

export const metadata = getMetadataForPath('/socials');

export default function Page() {
  return (
    <SocialPage/>
  );
}
