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
  const [selectedImage, setSelectedImage] = useState<Images | null>(
    images?.find((image) => image.alt.split(".")[0] === initialId) || null
  );

  // Build album list
  const albumList = useMemo(() => {
    const albums = Array.from(new Set(images?.map((image) => image?.album).filter(Boolean)));
    return [{ id: "all", name: "All Photos" }, ...albums.map((album) => ({ id: album, name: album }))];
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

  // Navigation handlers
  const handlePrev = () => {
    if (selectedIndex > 0) setSelectedImage(filteredImages[selectedIndex - 1]);
  };
  const handleNext = () => {
    if (selectedIndex < filteredImages.length - 1)
      setSelectedImage(filteredImages[selectedIndex + 1]);
  };

  if (!selectedImage) {
    return (
      <p className="text-center text-muted-foreground">
        No image selected.
      </p>
    );
  }

  return (
    <div className={MAX_WIDTH_WRAPPER}>
          <div className={HEADER_WRAPPER}>
            <h1 className={TITLE}>{selectedImage?.title}</h1>
            <p className={DESCRIPTION}>{selectedImage?.paragraph}</p>
          </div>
    <div className="max-w-4xl mx-auto">
 {/* Prev / Next */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrev}
          disabled={selectedIndex <= 0}
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
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
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
          aria-label="Next image"
          type="button"
        >
          <ArrowRight />
        </button>
      </div>
      {/* Selected Image */}
      <div className="relative w-full h-[60vh] mb-4">
        <Image
          src={
            selectedImage?.src ||
            "https://www.syedalinaqihasni.com/images/placeholder-syed-ali-naqi-hasni.webp"
          }
          alt={selectedImage?.alt || "Gallery image"}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrev}
          disabled={selectedIndex <= 0}
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
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
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
          aria-label="Next image"
          type="button"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Caption + Tags */}
      <div>
        {selectedImage?.link ? (
          <Link
            href={selectedImage?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xl font-medium mb-2 text-blue-600 hover:underline"
          >
            {selectedImage?.caption}
            <ExternalLink />
          </Link>
        ) : (
          <h3 className="text-xl font-medium mb-2">{selectedImage?.caption}</h3>
        )}
        <div className="flex flex-wrap gap-2">
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
