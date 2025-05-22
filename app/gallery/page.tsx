"use client"
import { Metadata } from "next";
import GalleryGrid from "@/components/gallery/gallery-grid";

// export const metadata: Metadata = {
//   title: "Gallery | Portfolio",
//   description: "Browse my photo gallery showcasing events, projects, and creative work",
// };

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of images from my projects, events, and creative work.
          </p>
        </div>
        
        <GalleryGrid />
      </div>
    </div>
  );
}