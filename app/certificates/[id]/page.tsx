import { getMetadataForPath } from "@/lib/metadata";
import StructuredData from "@/components/StructuredData";
import { gallerySchema } from "@/constants/structuredData";
import {
  GALLERY,
} from "@/constants/gallery";
import GallerySingle from "@/components/gallery/gallery-single";
import { CERTIFICATES } from "@/constants/certificates";

export const metadata = getMetadataForPath("/certificates");

const CONTAINER = "container mx-auto px-4 py-32 md:py-40";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <StructuredData data={gallerySchema} />
      <div className={CONTAINER}>
        {GALLERY.length > 0 ? (
            <GallerySingle images={CERTIFICATES} initialId={params.id} />
          ) : (
            <p className="text-center text-muted-foreground">
              Loading gallery or no images found.
            </p>
          )}
      </div>
    </>
  );
};

export default Page;