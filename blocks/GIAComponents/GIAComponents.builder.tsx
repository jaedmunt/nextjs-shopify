// /blocks/GIAComponents/GIAComponents.builder.tsx
import { Builder } from '@builder.io/react';
import dynamic from 'next/dynamic';

// Dynamic imports with ssr: false
const GIAAnatomyTool = dynamic(() => import('@components/giatools/GIAAnatomyTool'), { ssr: false });
const GIAComplete4CsTool = dynamic(() => import('@components/giatools/GIAComplete4CsTool'), { ssr: false });
const GIAColorTool = dynamic(() => import('@components/giatools/GIAColorTool'), { ssr: false });
const GIAClarityTool = dynamic(() => import('@components/giatools/GIAClarityTool'), { ssr: false });
const GIACaratTool = dynamic(() => import('@components/giatools/GIACaratTool'), { ssr: false });

// Register GIA Anatomy Tool
Builder.registerComponent(GIAAnatomyTool, {
  name: 'GIA Anatomy Tool',
  noWrap: true,
});

// Register GIA Complete 4Cs Tool
Builder.registerComponent(GIAComplete4CsTool, {
  name: 'GIA Complete 4Cs Tool',
  noWrap: true,
});

// Register GIA Color Tool
Builder.registerComponent(GIAColorTool, {
  name: 'GIA Color Tool',
  noWrap: true,
});

// Register GIA Clarity Tool
Builder.registerComponent(GIAClarityTool, {
  name: 'GIA Clarity Tool',
  noWrap: true,
});

// Register GIA Carat Tool
Builder.registerComponent(GIACaratTool, {
  name: 'GIA Carat Tool',
  noWrap: true,
});
