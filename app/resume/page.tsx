import { getMetadataForPath } from "@/lib/metadata";
import ResumePage from '@/components/resume/ResumePage';
import StructuredData from '@/components/StructuredData';
import { resumeSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/resume');

export default function Page() {
  return (
    <>
      <StructuredData data={resumeSchema} />
      <ResumePage/>
    </>
  );
}