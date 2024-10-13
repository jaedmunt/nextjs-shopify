// components/GIATool.builder.tsx
import { Builder } from '@builder.io/react';
import dynamic from 'next/dynamic';

const GIATool = dynamic(() => import('@components/giatools/GIAtool'), { ssr: false });

Builder.registerComponent(GIATool, {
  name: 'GIA Tool',
  inputs: [
    {
      name: 'toolType',
      type: 'string',
      enum: [
        { label: 'Complete 4Cs', value: '' },
        { label: 'Anatomy', value: 'anatomy' },
        { label: 'Color', value: 'color' },
        { label: 'Clarity', value: 'clarity' },
        { label: 'Carat Weight', value: 'carat-weight' },
      ],
      defaultValue: '',
    },
    {
      name: 'height',
      type: 'string',
      defaultValue: '600px',
    },
  ],
  noWrap: true,
});
