"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Masonry from "react-masonry-css";
import { GalleryImage } from "@/types/gallery";
import { Images } from "@/types/images";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { List, Grid3X3, LayoutGrid } from "lucide-react";

export default function GalleryGrid({
  images,
  type,
}: {
  images: Images[];
  type: string;
}) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeAlbum, setActiveAlbum] = useState("all");
  const [layout, setLayout] = useState<"masonry" | "grid" | "list">("masonry");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(9);

  // Album list
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

  // Pagination logic
  const totalPages = Math.ceil(filteredImages.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const paginatedImages = filteredImages.slice(
    startIndex,
    startIndex + perPage
  );

  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    500: 1,
  };

  const selectedIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage?.id)
    : -1;

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

  // Pagination number rendering
  const renderPaginationNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 4) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 3) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div>
      {/* Album Tabs */}
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

      {/* Layout & Per Page Options */}
      <div className="flex justify-between items-center mb-6 gap-4">
        {/* Layout Switcher */}
        <div className="flex gap-2">
          <Button
            variant={layout === "masonry" ? "default" : "outline"}
            size="icon"
            onClick={() => setLayout("masonry")}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={layout === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setLayout("grid")}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={layout === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setLayout("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>

        {/* Per Page Selector */}
        <Select
          onValueChange={(val) => {
            setPerPage(Number(val));
            setCurrentPage(1);
          }}
          defaultValue={perPage.toString()}
        >
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="6">6 / page</SelectItem>
            <SelectItem value="9">9 / page</SelectItem>
            <SelectItem value="12">12 / page</SelectItem>
            <SelectItem value="15">15 / page</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Gallery */}
      <AnimatePresence mode={"wait"}>
        <motion.div
          key={activeAlbum + layout + currentPage + perPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {layout === "masonry" ? (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className={"flex w-auto -ml-4"}
              columnClassName={"pl-4 bg-clip-padding"}
            >
              {paginatedImages?.map((image) => (
                <motion.div
                  key={image?.id}
                  className={"mb-4 cursor-pointer"}
                  onClick={() => setSelectedImage(image)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`/${type}/${image.alt.split(".")[0]}`}
                    className={"relative rounded-lg overflow-hidden"}
                  >
                    <Image
                      src={
                        image?.src ||
                        "/images/placeholder-syed-ali-naqi-hasni.webp"
                      }
                      alt={image?.alt || `Syed Ali Naqi Hasni`}
                      width={500}
                      height={300}
                      className={"w-full h-auto object-cover"}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className={"text-white font-medium"}>
                        {image?.caption}
                      </p>
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
                  </Link>
                </motion.div>
              ))}
            </Masonry>
          ) : (
            <div
              className={`grid ${
                layout === "grid" ? "grid-cols-3 gap-4" : "grid-cols-1 gap-6"
              }`}
            >
              {paginatedImages.map((image) => (
                <div
                  key={image.id}
                  className="relative rounded-lg overflow-hidden"
                >
                  <Image
                    src={
                      image?.src ||
                      "/images/placeholder-syed-ali-naqi-hasni.webp"
                    }
                    alt={image?.alt || "Syed Ali Naqi Hasni"}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                  <p className="mt-2 text-sm">{image.caption}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 gap-2">
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        >
          |&lt;
        </Button>
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          &lt;&lt;
        </Button>
        {renderPaginationNumbers().map((p, i) =>
          typeof p === "number" ? (
            <Button
              key={i}
              variant={p === currentPage ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(p)}
            >
              {p}
            </Button>
          ) : (
            <span key={i} className="px-2">
              ...
            </span>
          )
        )}
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          &gt;&gt;
        </Button>
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
        >
          &gt;|
        </Button>
      </div>
    </div>
  );
}
