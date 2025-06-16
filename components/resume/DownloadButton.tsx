"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadButton() {
  return (
    <Button onClick={() => window.open("https://www.syedalinaqihasni.com/resume.pdf", "_blank")}>
      <Download className="mr-2 h-4 w-4" />
      Download PDF
    </Button>
  );
}
