// components/giatools/GIAComplete4CsTool.tsx
'use client';

import React, { useEffect } from 'react';

const GIAComplete4CsTool: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://4cs.gia.edu/interactive-4cs/js/embed.js';
    script.async = true;
    script.charset = 'UTF-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="gia-complete-4cs-tool"></div>;
};

export default GIAComplete4CsTool;
