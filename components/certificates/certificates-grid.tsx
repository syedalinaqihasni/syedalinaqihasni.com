"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs";
import Masonry from "react-masonry-css";
import Link from "next/link";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

export interface CertificatesImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  album: string;
  tags: string[];
  link?: string;
}

const albums = [
  { id: "all", name: "All" },
  { id: "certificates", name: "Certificates" },
  { id: "badges", name: "Badges" },
];

const images: CertificatesImage[] = [
  {
    id: 1,
    src: "https://via.placeholder.com/600x400?text=Next.js+Certificate",
    alt: "Next.js Certificate",
    caption: "Certified in Advanced Next.js",
    album: "certificates",
    tags: ["Next.js", "Web Development"],
    link: "https://certificates.example.com/nextjs",
  },
  {
    id: 2,
    src: "https://via.placeholder.com/600x400?text=React+Badge",
    alt: "React Badge",
    caption: "React Developer Badge",
    album: "badges",
    tags: ["React", "JavaScript"],
    link: "https://certificates.example.com/react-badge",
  },
  {
    id: 3,
    src: "https://via.placeholder.com/600x400?text=Frontend+Certificate",
    alt: "Frontend Cert",
    caption: "Frontend Mastery Certification",
    album: "certificates",
    tags: ["Frontend", "CSS", "HTML"],
    link: "https://certificates.example.com/frontend-mastery",
  },
  {
    id: 4,
    src: "https://via.placeholder.com/600x400?text=GitHub+Badge",
    alt: "GitHub Badge",
    caption: "Open Source Contributor Badge",
    album: "badges",
    tags: ["GitHub", "Open Source"],
    link: "https://certificates.example.com/github-contributor",
  },
];


export default function CertificateGrid() {
  const [selectedImage, setSelectedImage] = useState<CertificatesImage | null>(
    null
  );
  const [activeAlbum, setActiveAlbum] = useState("all");

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

  return (
    <div>
      <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveAlbum}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 max-w-lg mx-auto">
          {albums.map((album) => (
            <TabsTrigger key={album.id} value={album.id}>
              {album.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeAlbum}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-4"
            columnClassName="pl-4 bg-clip-padding"
          >
            {filteredImages.map((image) => (
              <motion.div
                key={image?.id}
                className="mb-4 cursor-pointer"
                onClick={() => setSelectedImage(image)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src={image?.src  || 'https://www.syedalinaqihasni.com/images/blogs/blogs-placeholder-syed-ali-naqi-hasni.jpg'}
                    alt={`${image?.alt} - Syed Ali Naqi Hasni`}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white font-medium">{image?.caption}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {image?.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
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
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <div>
              <div className="relative w-full h-[60vh]">
                <Image
                  src={selectedImage.src || 'https://www.syedalinaqihasni.com/images/blogs/blogs-placeholder-syed-ali-naqi-hasni.jpg'}
                  alt={`${selectedImage.alt} - Syed Ali Naqi Hasni`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="mt-4">
                  <h3 className="text-xl font-medium mb-2">
                    {selectedImage.caption}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedImage.tags?.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {selectedImage?.link && (
                  <Button size="sm" variant="outline" asChild>
                    <Link
                      href={selectedImage?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Link
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
