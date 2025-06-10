import SkillsPage from "@/components/skills/SkillsPage"
import { getMetadataForPath } from '@/lib/metadata';

export const metadata = getMetadataForPath('/skills');

export default function Page() {
  return (
  <SkillsPage/>
  );
}
