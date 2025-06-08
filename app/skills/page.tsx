
import SkillsList from '@/components/skills/skills-list';
import { HEADING, SUBHEADING } from '@/constants/skills';
import { getMetadataForPath } from '@/lib/metadata';

export const metadata = getMetadataForPath('/skills');

export default function Page() {
  return (
    <div className={'container mx-auto px-4 py-32 md:py-40'}>
      <div className={'max-w-6xl mx-auto'}>
        <div className={'text-center mb-16'}>
          <h1 className={'text-4xl md:text-5xl font-bold mb-6'}>{HEADING}</h1>
          <p className={'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto'}>
            {SUBHEADING}
          </p>
        </div>

        <SkillsList />
      </div>
    </div>
  );
}
