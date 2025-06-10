import { getMetadataForPath } from '@/lib/metadata';
import ServicesPage from '../../components/services/ServicePage';
import StructuredData from '@/components/StructuredData';
import { servicesSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/services');

export default function Page() {
  return (
    <>
      <StructuredData data={servicesSchema} />
      <ServicesPage/>
    </>
  );
}