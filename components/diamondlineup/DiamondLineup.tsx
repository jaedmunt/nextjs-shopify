"use client";

import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url?: string }, HTMLElement>;
    }
  }
}

interface DiamondLineupProps {
  splineUrl: string;
}

export default function DiamondLineup({ splineUrl }: DiamondLineupProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <spline-viewer url={splineUrl}></spline-viewer>
  );
}