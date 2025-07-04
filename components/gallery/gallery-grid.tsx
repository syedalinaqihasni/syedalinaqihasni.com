"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Masonry from "react-masonry-css";
import { GalleryImage } from "@/types/gallery";
import { Images } from "@/types/images";
import Link from "next/link";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";

export default function GalleryGrid({ images }: { images: Images[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeAlbum, setActiveAlbum] = useState("all");

  // Dynamically generate album list from image data
  const albumList = [
    { id: "all", name: "All Photos" },
    ...Array.from(new Set(images.map((img) => img.album))).map((album) => ({
      id: album,
      name: album.charAt(0).toUpperCase() + album.slice(1),
    })),
  ];

  const filteredImages =
    activeAlbum === "all"
      ? images
      : images.filter((image) => image?.album === activeAlbum);

  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    500: 1,
  };

  // Find index of selected image in filteredImages
  const selectedIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1;

  // Handlers for next/prev
  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedImage(filteredImages[selectedIndex - 1]);
    }
  };

  const handleNext = () => {
    if (selectedIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[selectedIndex + 1]);
    }
  };

  return (
    <div>
      <Tabs
        defaultValue={"all"}
        className={"mb-8"}
        onValueChange={setActiveAlbum}
      >
        <TabsList
          className={"grid w-full grid-cols-2 md:grid-cols-4 max-w-lg mx-auto"}
        >
          {albumList.map((album) => (
            <TabsTrigger key={album.id} value={album.id}>
              {album.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <AnimatePresence mode={"wait"}>
        <motion.div
          key={activeAlbum}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={"flex w-auto -ml-4"}
            columnClassName={"pl-4 bg-clip-padding"}
          >
            {filteredImages?.map((image) => (
              <motion.div
                key={image?.id}
                className={"mb-4 cursor-pointer"}
                onClick={() => setSelectedImage(image)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={"relative rounded-lg overflow-hidden"}>
                  <Image
                    src={
                      image?.src ||
                      "https://www.syedalinaqihasni.com/images/placeholder-syed-ali-naqi-hasni.webp"
                    }
                    alt={image?.alt || `Syed Ali Naqi Hasni`}
                    width={500}
                    height={
                      image?.id === 1 || image?.id === 3 || image?.id === 8
                        ? 400
                        : 300
                    }
                    className={"w-full h-auto object-cover"}
                  />
                  <div
                    className={
                      "absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                    }
                  >
                    <p className={"text-white font-medium"}>{image?.caption}</p>
                    <div className={"flex flex-wrap gap-2 mt-2"}>
                      {image?.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          variant={"secondary"}
                          className={"text-xs"}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </AnimatePresence>

      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className={"max-w-3xl"}>
          {selectedImage && (
            <div>
              <div className={"relative w-full h-[60vh]"}>
                <Image
                  src={
                    selectedImage.src ||
                    "https://www.syedalinaqihasni.com/images/placeholder-syed-ali-naqi-hasni.webp"
                  }
                  alt={`${selectedImage.alt} - Syed Ali Naqi Hasni`}
                  fill
                  className={"object-contain"}
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={handlePrev}
                  disabled={selectedIndex <= 0}
                  className={`p-2 rounded hover:bg-gray-100 disabled:opacity-50`}
                  aria-label="Previous image"
                  type="button"
                >
                  <ArrowLeft />
                </button>
                <span className="text-sm text-gray-500">
                  {selectedIndex + 1} / {filteredImages.length}
                </span>
                <button
                  onClick={handleNext}
                  disabled={selectedIndex >= filteredImages.length - 1}
                  className={`p-2 rounded hover:bg-gray-100 disabled:opacity-50`}
                  aria-label="Next image"
                  type="button"
                >
                  <ArrowRight />
                </button>
              </div>
              <div className={"mt-4"}>
                {selectedImage?.link ? (
                  <Link
                    href={selectedImage?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xl font-medium mb-2 text-blue-600 hover:underline"
                  >
                    {selectedImage.caption}
                    <ExternalLink />
                  </Link>
                ) : (
                  <h3 className="text-xl font-medium mb-2">
                    {selectedImage.caption}
                  </h3>
                )}
                <div className={"flex flex-wrap gap-2"}>
                  {selectedImage.tags?.map((tag) => (
                    <Badge key={tag} variant={"secondary"}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
