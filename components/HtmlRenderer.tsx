'use client';

import { useEffect, useRef, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';

export default function HtmlRenderer({ html, terms, path }: { html: string, terms?: string[], path?: string,  }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sanitizedHtml, setSanitizedHtml] = useState<string>(''); // state to hold processed HTML

  // Moved DOMParser usage into useEffect
 useEffect(() => {
  const sanitizePreCodeBlocks = (rawHtml: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawHtml, 'text/html');

    doc.querySelectorAll('pre').forEach((pre) => {
      const code = pre.querySelector('code');
      const raw = code?.innerHTML || pre.innerHTML;

      const newCode = doc.createElement('code');
      newCode.textContent = raw;

      pre.innerHTML = '';
      pre.appendChild(newCode);
    });

    return doc.body.innerHTML;
  };

  const linkifyTerms = (html: string, terms: string[],path:string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, null);

    const regex = new RegExp(`\\b(${terms?.join('|')})\\b`, 'gi');

    let node: Node | null;
    while ((node = walker.nextNode())) {
      if (
        node.parentElement &&
        !['A', 'CODE', 'PRE', 'SCRIPT', 'STYLE'].includes(node.parentElement.tagName)
      ) {
        const text = node.textContent || '';
        if (regex.test(text)) {
          const frag = doc.createDocumentFragment();
          let lastIndex = 0;
          text.replace(regex, (match, _p1, offset) => {
            if (offset > lastIndex) {
              frag.appendChild(doc.createTextNode(text.slice(lastIndex, offset)));
            }
            const a = doc.createElement('a');
            a.href = `${path.toLowerCase()}/${match.toLowerCase()}`;
            a.textContent = match;
            frag.appendChild(a);
            lastIndex = offset + match.length;
            return match;
          });
          if (lastIndex < text.length) {
            frag.appendChild(doc.createTextNode(text.slice(lastIndex)));
          }
          node.parentNode?.replaceChild(frag, node);
        }
      }
    }
    return doc.body.innerHTML;
  };

  const cleaned = sanitizePreCodeBlocks(html);
  const linked = terms?.length && path
    ? linkifyTerms(cleaned, terms, path)
    : cleaned; // Only linkify if terms and path are provided
  const purified = DOMPurify.sanitize(linked); // run last

  setSanitizedHtml(purified);
}, [html, terms, path]);

  // Handle copy buttons after HTML is rendered
  useEffect(() => {
    const pres = containerRef.current?.querySelectorAll('pre') || [];

    pres.forEach((pre) => {
      if (pre.querySelector('.copy-button')) return;

      const button = document.createElement('button');
      button.className = 'copy-button';
      button.innerText = 'Copy';

      button.onclick = () => {
        const code = pre.querySelector('code');
        if (!code) return;

        navigator.clipboard
          .writeText(code.innerText)
          .then(() => {
            button.innerText = 'Copied!';
            setTimeout(() => (button.innerText = 'Copy'), 2000);
          })
          .catch(() => {
            button.innerText = 'Failed!';
          });
      };

      button.style.position = 'absolute';
      button.style.top = '0.5rem';
      button.style.right = '0.5rem';
      button.style.padding = '0.2rem 0.5rem';
      button.style.fontSize = '0.8rem';
      button.style.cursor = 'pointer';
      button.style.zIndex = '10';

      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';

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
