import { Builder } from '@builder.io/react';
import dynamic from 'next/dynamic';

// Import the component dynamically
const DiamondLineup = dynamic(() => import('@components/diamondlineup/DiamondLineup'), { ssr: false });

Builder.registerComponent(DiamondLineup, {
  name: 'DiamondLineup',
  inputs: [
    {
      name: 'splineUrl',
      type: 'string',
      defaultValue: 'https://prod.spline.design/YPvOKODLW6B9q0Q8/scene.splinecode',
    },
  ],
  // Optional: prevent Builder from wrapping the component in a div
  noWrap: true,
});
