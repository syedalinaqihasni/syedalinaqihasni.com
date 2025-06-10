import { getMetadataForPath } from "@/lib/metadata";
import ResumePage from '@/components/resume/ResumePage';

export const metadata = getMetadataForPath('/resume');

export default function Page() {<ResumePage/>
}
