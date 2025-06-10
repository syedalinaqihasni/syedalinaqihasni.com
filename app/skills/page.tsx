import SkillsPage from "@/components/skills/SkillsPage"
import { getMetadataForPath } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import { skillsSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/skills');

export default function Page() {
  return (
    <>
      <StructuredData data={skillsSchema} />
      <SkillsPage/>
    </>
  );
}