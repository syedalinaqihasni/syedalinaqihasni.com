import { getMetadataForPath } from '@/lib/metadata';
import PricingPage from '../../components/pricing/PricingPage';
import StructuredData from '@/components/StructuredData';
import { pricingSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/pricing');

export default function Page() {
  return (
    <>
      <StructuredData data={pricingSchema} />
      <PricingPage/>
    </>
  );
}