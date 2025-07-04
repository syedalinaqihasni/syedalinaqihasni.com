import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), 'public', 'certificates');

    if (!fs.existsSync(galleryPath)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(galleryPath);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg'];

    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    const images = imageFiles.map((file, index) => {
      const filePath = `https://www.syedalinaqihasni.com/certificates/${file}`;
      const meta = CERTIFICATES.find(m => m.src === filePath);

      return {
        id: meta?.id ?? index + 1,
        src: filePath,
        alt: meta?.alt ?? file,
        caption: meta?.caption ?? 'No caption available',
        album: meta?.album ?? 'default',
        tags: meta?.tags ?? [],
        link: meta?.link ?? '#',
      };
    });

    return NextResponse.json(images);
  } catch (error) {
    // console.error('Error reading gallery directory:', error);
    return NextResponse.json([]);
  }
}
