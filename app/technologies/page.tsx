import { getMetadataForPath } from '@/lib/metadata';
import TechnologiesPage from '../../components/technologies/TechnologiesPage';
import StructuredData from '@/components/StructuredData';
import { technologiesSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/technologies');

export default function Page() {
  return (
    <>
      <StructuredData data={technologiesSchema} />
      <TechnologiesPage/>
    </>
  );
}