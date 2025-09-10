import { getMetadataForPath } from "@/lib/metadata";
import StructuredData from "@/components/StructuredData";
import { gallerySchema } from "@/constants/structuredData";
import {
  GALLERY,
  GALLERY_DESCRIPTION,
  GALLERY_TITLE,
} from "@/constants/gallery";
import GallerySingle from "@/components/gallery/gallery-single";

export const metadata = getMetadataForPath("/gallery");

const CONTAINER = "container mx-auto px-4 py-32 md:py-40";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <StructuredData data={gallerySchema} />
      <div className={CONTAINER}>
        {GALLERY.length > 0 ? (
            <GallerySingle images={GALLERY} initialId={params.id} />
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