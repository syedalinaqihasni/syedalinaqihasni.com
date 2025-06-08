"use client";

import { useEffect, useRef } from "react";
import DOMPurify from "isomorphic-dompurify";

export default function HtmlRenderer({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sanitize the pre blocks
  const sanitizePreCodeBlocks = (rawHtml: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawHtml, "text/html");

    doc.querySelectorAll("pre").forEach((codeBlock) => {
      // Get text content (to remove embedded HTML)
      const rawText = codeBlock.textContent || "";
      // Escape it to render safely
      const escaped = DOMPurify.sanitize(rawText, { ALLOWED_TAGS: [] });
      codeBlock.textContent = escaped;
    });

    return doc.body.innerHTML;
  };

  const sanitizedHtml = sanitizePreCodeBlocks(html);

  useEffect(() => {
    const pres = containerRef.current?.querySelectorAll("pre") || [];
    pres.forEach((pre) => {
      if (pre.querySelector(".copy-button")) return;

      const button = document.createElement("button");
      button.className = "copy-button";
      button.innerText = "Copy";
      button.onclick = () => {
        const code = pre.querySelector("code");
        if (!code) return;
        navigator.clipboard.writeText(code.innerText).then(() => {
          button.innerText = "Copied!";
          setTimeout(() => (button.innerText = "Copy"), 2000);
        });
      };
      pre.appendChild(button);
    });
  }, [sanitizedHtml]);

  return (
    <div
      ref={containerRef}
      className="single-project"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
