import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const certificatesPath = path.join(process.cwd(), "public", "certificates");
    const dataFilePath = path.join(process.cwd(), "certificatesData.js");

    if (!fs.existsSync(certificatesPath)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(certificatesPath);
    const imageExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".webp",
      ".bmp",
      ".svg",
    ];

    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    const images = files.map((file, index) => {
      const filePath = `/certificates/${file}`;
      return {
        id: index + 1,
        src: filePath,
        alt: file,
        caption: "Syed Ali Naqi Hasni - Web Developer",
        album: "all",
        tags: ["certificate"],
      };
    });

    // Save images array to certificatesData.js as a JS const

    // Save images array to galleryData.js as a JS const
    const jsonContent = JSON.stringify(images, null, 2);
    fs.writeFileSync(dataFilePath, jsonContent, "utf8");

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json([]);
  }
}
