// components/giatools/GIAColorTool.tsx
'use client';

import React, { useEffect } from 'react';

const GIAColorTool: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://4cs.gia.edu/interactive-4cs/js/embed.js?tool=color';
    script.async = true;
    script.charset = 'UTF-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="gia-color-tool"></div>;
};

export default GIAColorTool;
