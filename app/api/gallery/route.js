import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), "public", "gallery");
    const dataFilePath = path.join(process.cwd(), "galleryData.js");

    if (!fs.existsSync(galleryPath)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(galleryPath);

    const images = files.map((file, index) => {
      const filePath = `/gallery/${file}`;
      return {
        id: index + 1,
        src: filePath,
        alt: file,
        caption: "Syed Ali Naqi Hasni - Web Developer",
        album: "all",
        tags: ["photo"],
      };
    });

    // Save images array to galleryData.js as a JS const
    const jsonContent = JSON.stringify(images, null, 2);
    fs.writeFileSync(dataFilePath, jsonContent, "utf8");

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json([]);
  }
}
