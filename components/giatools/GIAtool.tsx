// components/GIATool.tsx
'use client';

import React, { useEffect, useState } from 'react';

interface GIAToolProps {
  toolType?: string; // 'anatomy', 'color', 'clarity', 'carat-weight', or undefined for the complete tool
  height?: string; // Optional height parameter
}

const GIATool: React.FC<GIAToolProps> = ({ toolType = '', height = '600px' }) => {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    const toolSource = 'https://4cs.gia.edu/interactive-4cs';
    const standalone = toolType ? `/standalone/${toolType}.html` : '';
    const embedURL = encodeURIComponent(window.location.hostname);
    const embedPath = encodeURIComponent(window.location.pathname);
    const queryString = `embedURL=${embedURL}&embedPath=${embedPath}`;
    const src = `${toolSource}${standalone}?${queryString}`;
    setIframeSrc(src);
  }, [toolType]);

  return (
    <iframe
      src={iframeSrc}
      style={{ width: '100%', minWidth: '100%', height, border: 'none' }}
      scrolling="no"
    ></iframe>
  );
};

export default GIATool;
