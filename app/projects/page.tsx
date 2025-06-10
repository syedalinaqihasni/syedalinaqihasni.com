import ProjectList from "@/components/projects/project-list";
import { 
    PAGE_TITLE,
    PAGE_DESCRIPTION, } from "@/constants/projects";
import { getMetadataForPath } from "@/lib/metadata";
import StructuredData from '@/components/StructuredData';
import { portfolioSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/projects');

const CONTAINER_styles = 'container mx-auto px-4 py-32 md:py-40';
const CONTENT_WRAPPER_styles = 'max-w-6xl mx-auto';
const HEADER_WRAPPER_styles = 'text-center mb-16';
const TITLE_styles = 'text-4xl md:text-5xl font-bold mb-6';
const DESCRIPTION_styles =
  'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto';

export default async function Page() {
  return (
    <>
      <StructuredData data={portfolioSchema} />
      <div className={CONTAINER_styles}>
        <div className={CONTENT_WRAPPER_styles}>
          <div className={HEADER_WRAPPER_styles}>
            <h1 className={TITLE_styles}>{PAGE_TITLE}</h1>
            <p className={DESCRIPTION_styles}>{PAGE_DESCRIPTION}</p>
          </div>

          <ProjectList />
        </div>
      </div>
    </>
  );
}