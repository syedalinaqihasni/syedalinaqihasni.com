import { getMetadataForPath } from '@/lib/metadata';
import JobsPage from '../../components/jobs/JobsPage';
import StructuredData from '@/components/StructuredData';
import { jobsSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/jobs');

export default function Page() {
  return (
    <>
      <StructuredData data={jobsSchema} />
      <JobsPage/>
    </>
  );
}