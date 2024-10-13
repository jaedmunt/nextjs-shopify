// components/giatools/GIAAnatomyTool.tsx
'use client';

import React, { useEffect } from 'react';

const GIAAnatomyTool: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://4cs.gia.edu/interactive-4cs/js/embed.js?tool=anatomy';
    script.async = true;
    script.charset = 'UTF-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="gia-anatomy-tool"></div>;
};

export default GIAAnatomyTool;
