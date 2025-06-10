
import ContactPage from '@/components/contact/Contactpage';
import { getMetadataForPath } from '@/lib/metadata';

export const metadata = getMetadataForPath('/contact');

export default function Page() {
  return (
    <ContactPage/>
  )}