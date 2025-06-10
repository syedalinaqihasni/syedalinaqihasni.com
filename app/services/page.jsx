import { getMetadataForPath } from '@/lib/metadata';
import ServicesPage from '../../components/services/ServicePage';

export const metadata = getMetadataForPath('/services');

export default function Page() {
  return (
   <ServicesPage/>
  );
}