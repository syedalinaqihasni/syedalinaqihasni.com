'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Masonry from 'react-masonry-css';

/**
 * Image type definition for gallery images.
 */
type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  album: string;
  tags: string[];
};

// /**
//  * Albums definition for filtering images.
//  */
const albums = [
  { id: 'all', name: 'All Photos' },
  { id: 'work', name: 'Work' },
  { id: 'events', name: 'Events' },
  { id: 'personal', name: 'Personal' },
];

/**
 * Mock image data for the gallery.
 * In a real app, this would be fetched from a CMS like Sanity.
 */
const images = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg',
    alt: 'Coding on a laptop',
    caption: 'Working on a new project',
    album: 'work',
    tags: ['coding', 'webdev'],
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    alt: 'Conference presentation',
    caption: 'Speaking at ReactConf 2023',
    album: 'events',
    tags: ['conference', 'speaking'],
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg',
    alt: 'Design mockup',
    caption: 'UI design for a new application',
    album: 'work',
    tags: ['design', 'ui/ux'],
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg',
    alt: 'Team meeting',
    caption: 'Brainstorming session with the team',
    album: 'work',
    tags: ['team', 'collaboration'],
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
    alt: 'Coding setup',
    caption: 'My workspace setup',
    album: 'personal',
    tags: ['workspace', 'setup'],
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg',
    alt: 'Workshop',
    caption: 'Leading a workshop on Next.js',
    album: 'events',
    tags: ['workshop', 'teaching'],
  },
  {
    id: '7',
    src: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg',
    alt: 'Laptop with code',
    caption: 'Late night coding session',
    album: 'work',
    tags: ['coding', 'webdev'],
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg',
    alt: 'Conference audience',
    caption: 'Full house at my last talk',
    album: 'events',
    tags: ['conference', 'audience'],
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg',
    alt: 'Vacation photo',
    caption: 'Taking a break in nature',
    album: 'personal',
    tags: ['travel', 'nature'],
  },
];

/**
 * GalleryGrid Component
 *
 * Displays a masonry grid of images with tabs to filter by album.
 * Clicking an image opens a modal dialog with a larger view and details.
 *
 * @returns JSX.Element
 */
export default function GalleryGrid() {
  // State for currently selected image in modal
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  // State for active album filter
  const [activeAlbum, setActiveAlbum] = useState('all');

  // Filter images based on active album or show all if 'all' selected
  const filteredImages =
    activeAlbum === 'all'
      ? images
      : images.filter((image) => image.album === activeAlbum);

  // Responsive breakpoints for masonry layout
  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    500: 1,
  };

  return (
    <div>
      {/* Album filter tabs */}
      <Tabs defaultValue={'all'}className={'mb-8'}onValueChange={setActiveAlbum}>
        <TabsList className={'grid w-full grid-cols-2 md:grid-cols-4 max-w-lg mx-auto'}>
          {albums.map((album) => (
            <TabsTrigger key={album.id} value={album.id}>
              {album.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* AnimatePresence for smooth tab content transitions */}
      <AnimatePresence mode={'wait'}>
        <motion.div
          key={activeAlbum}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Masonry grid for responsive image layout */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={'flex w-auto -ml-4'}
            columnClassName={'pl-4 bg-clip-padding'}
          >
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                className={'mb-4 cursor-pointer'}
                onClick={() => setSelectedImage(image)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={'relative rounded-lg overflow-hidden'}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={
                      image.id === '1' || image.id === '3' || image.id === '8'
                        ? 400
                        : 300
                    }
                    className={'w-full h-auto object-cover'}
                  />
                  {/* Overlay with caption and tags on hover */}
                  <div className={'absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'}>
                    <p className={'text-white font-medium'}>{image.caption}</p>
                    <div className={'flex flex-wrap gap-2 mt-2'}>
                      {image.tags.map((tag) => (
                        <Badge key={tag} variant={'secondary'}className={'text-xs'}>
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

      {/* Modal dialog for selected image details */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className={'max-w-3xl'}>
          {selectedImage && (
            <div>
              <div className={'relative w-full h-[60vh]'}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className={'object-contain'}
                />
              </div>
              <div className={'mt-4'}>
                <h3 className={'text-xl font-medium mb-2'}>
                  {selectedImage.caption}
                </h3>
                <div className={'flex flex-wrap gap-2'}>
                  {selectedImage.tags.map((tag) => (
                    <Badge key={tag} variant={'secondary'}>
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