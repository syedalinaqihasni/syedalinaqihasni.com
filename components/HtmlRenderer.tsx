"use client";

import { useEffect, useRef } from "react";
import DOMPurify from "isomorphic-dompurify";

export default function HtmlRenderer({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sanitize <pre> blocks and wrap content in <code>
const sanitizePreCodeBlocks = (rawHtml: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, "text/html");

  doc.querySelectorAll("pre").forEach((pre) => {
    const code = pre.querySelector("code");
    const raw = code?.innerHTML || pre.innerHTML;

    // Create new <code> element and set raw HTML as textContent to escape everything
    const newCode = doc.createElement("code");
    newCode.textContent = raw;

    pre.innerHTML = ""; // Remove existing children
    pre.appendChild(newCode);
  });

  return doc.body.innerHTML;
};



  const sanitizedHtml = sanitizePreCodeBlocks(html);

  useEffect(() => {
    const pres = containerRef.current?.querySelectorAll("pre") || [];

    pres.forEach((pre) => {
      // Avoid duplicate buttons
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
        }).catch(() => {
          button.innerText = "Failed!";
        });
      };

      // Position button at top-right of <pre>
      button.style.position = "absolute";
      button.style.top = "0.5rem";
      button.style.right = "0.5rem";
      button.style.padding = "0.2rem 0.5rem";
      button.style.fontSize = "0.8rem";
      button.style.cursor = "pointer";
      button.style.zIndex = "10";
      

      // Wrap <pre> in a relative container to position button
      const wrapper = document.createElement("div");
      wrapper.style.position = "relative";

      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
      wrapper.appendChild(button);
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
