// components/TawkToWidget.jsx
'use client';

import { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/689376b063300d1924bc567e/1j200f8tb';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TawkToWidget;
