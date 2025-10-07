"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Images } from "@/types/images";

const MAX_WIDTH_WRAPPER = "max-w-6xl mx-auto";
const HEADER_WRAPPER = "text-center mb-16";
const TITLE = "text-4xl md:text-5xl font-bold mb-6";
const DESCRIPTION =
  "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto";

export default function GallerySingle({
  images,
  initialId,
}: {
  images: Images[];
  initialId: string;
}) {
  const [activeAlbum, setActiveAlbum] = useState("all");

  const selectedImage =
    images?.find((image) => image.alt.split(".")[0] === initialId) || null;

  // Build album list
  const albumList = useMemo(() => {
    const albums = Array.from(
      new Set(images?.map((image) => image?.album).filter(Boolean))
    );
    return [
      { id: "all", name: "All Photos" },
      ...albums.map((album) => ({ id: album, name: album })),
    ];
  }, [images]);

  // Filter images by album
  const filteredImages = useMemo(() => {
    return activeAlbum === "all"
      ? images
      : images?.filter((image) => image?.album === activeAlbum);
  }, [activeAlbum, images]);

  // Find index of selected image in filtered list
  const selectedIndex = selectedImage
    ? filteredImages.findIndex((image) => image?.id === selectedImage?.id)
    : -1;

  if (!selectedImage) {
    return (
      <p className="text-center text-muted-foreground">No image selected.</p>
    );
  }

  return (
    <div className={MAX_WIDTH_WRAPPER}>
      {/* Header */}
      <div className={HEADER_WRAPPER}>
        <h1 className={TITLE}>{selectedImage?.title}</h1>
        <p className={DESCRIPTION}>{selectedImage?.paragraph}</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Prev / Next Navigation */}
        <div className="flex items-center justify-between mb-4">
          {selectedIndex > 0 ? (
            <Link
              href={`/gallery/${
                filteredImages[selectedIndex - 1]?.alt.split(".")[0]
              }`}
              className="p-2 rounded hover:bg-gray-100 hover:text-gray-700"
              aria-label="Previous image"
            >
              <ArrowLeft />
            </Link>
          ) : (
            <span className="p-2 opacity-50">
              <ArrowLeft />
            </span>
          )}

          <span className="text-sm text-gray-500">
            {selectedIndex + 1} / {filteredImages.length}
          </span>

          {selectedIndex < filteredImages.length - 1 ? (
            <Link
              href={`/gallery/${
                filteredImages[selectedIndex + 1]?.alt.split(".")[0]
              }`}
              className="p-2 rounded hover:bg-gray-100 hover:text-gray-700"
              aria-label="Next image"
            >
              <ArrowRight />
            </Link>
          ) : (
            <span className="p-2 opacity-50">
              <ArrowRight />
            </span>
          )}
        </div>

        {/* Selected Image */}
        <div className="relative w-full h-[60vh] mb-4">
          <Image
            src={
              selectedImage?.src ||
              "/images/placeholder-syed-ali-naqi-hasni.webp"
            }
            alt={selectedImage?.alt || "Gallery image"}
            fill
            className="object-contain rounded-lg"
          />
        </div>

        {/* Prev / Next Navigation (Bottom) */}
        <div className="flex items-center justify-between mb-4">
          {selectedIndex > 0 ? (
            <Link
              href={`/gallery/${
                filteredImages[selectedIndex - 1]?.alt.split(".")[0]
              }`}
              className="p-2 rounded hover:bg-gray-100 hover:text-gray-700"
              aria-label="Previous image"
            >
              <ArrowLeft />
            </Link>
          ) : (
            <span className="p-2 opacity-50">
              <ArrowLeft />
            </span>
          )}

          <span className="text-sm text-gray-500">
            {selectedIndex + 1} / {filteredImages.length}
          </span>

          {selectedIndex < filteredImages.length - 1 ? (
            <Link
              href={`/gallery/${
                filteredImages[selectedIndex + 1]?.alt.split(".")[0]
              }`}
              className="p-2 rounded hover:bg-gray-100 hover:text-gray-700"
              aria-label="Next image"
            >
              <ArrowRight />
            </Link>
          ) : (
            <span className="p-2 opacity-50">
              <ArrowRight />
            </span>
          )}
        </div>

        {/* Caption + Tags */}
        <div>
          {selectedImage?.link ? (
            <div className="flex gap-2 mb-2">
              {selectedImage?.caption}
              <Link
                href={selectedImage?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xl font-medium mb-2 text-blue-600 hover:underline"
              >
                <ExternalLink />
              </Link>
            </div>
          ) : (
            <h3 className="text-xl font-medium mb-2">
              {selectedImage?.caption}
            </h3>
          )}

          <div className="flex flex-wrap gap-2 capitalize">
            {selectedImage?.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
