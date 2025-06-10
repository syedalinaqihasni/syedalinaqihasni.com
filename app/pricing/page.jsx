import { getMetadataForPath } from '@/lib/metadata';
import PricingPage from '../../components/pricing/PricingPage';

export const metadata = getMetadataForPath('/pricing');


export default function Page() {
  return (
    <PricingPage/>
  );
}