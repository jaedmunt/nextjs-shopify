// components/giatools/GIACaratTool.tsx
'use client';

import React, { useEffect } from 'react';

const GIACaratTool: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://4cs.gia.edu/interactive-4cs/js/embed.js?tool=carat-weight';
    script.async = true;
    script.charset = 'UTF-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="gia-carat-tool"></div>;
};

export default GIACaratTool;
