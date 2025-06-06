"use client";

import { useEffect, useRef } from "react";

export default function HtmlRenderer({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

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
  }, [html]);

  return (
    <div
      ref={containerRef}
      className="single-project"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
