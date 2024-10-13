'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

interface DiamondLineupProps {
  splineUrl: string;
}

const DiamondLineup: React.FC<DiamondLineupProps> = ({ splineUrl }) => {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <Spline scene={splineUrl} />
    </div>
  );
};

export default DiamondLineup;
