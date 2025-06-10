import ContactPage from '@/components/contact/Contactpage';
import { getMetadataForPath } from '@/lib/metadata';
import StructuredData from '@/components/StructuredData';
import { contactSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/contact');

export default function Page() {
  return (
    <>
      <StructuredData data={contactSchema} />
      <ContactPage/>
    </>
  );
}