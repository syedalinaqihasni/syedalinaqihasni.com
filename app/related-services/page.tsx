import { getMetadataForPath } from '@/lib/metadata';
import RelatedServicesPage from '../../components/related-services/RelatedServicesPage';
import StructuredData from '@/components/StructuredData';
import { servicesSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/services');

export default function Page() {
  return (
    <>
      <StructuredData data={servicesSchema} />
      <RelatedServicesPage/>
    </>
  );
}