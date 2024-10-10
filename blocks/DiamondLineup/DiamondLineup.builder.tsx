"use client";

import React from 'react';
import { Builder } from '@builder.io/react';

interface DiamondLineupProps {
    splineUrl: string;
}

const DiamondLineup: React.FC<DiamondLineupProps> = ({ splineUrl }) => {
    return (
        <div>
            {/* Your component implementation */}
            <iframe src={splineUrl} />
        </div>
    );
}

Builder.registerComponent(DiamondLineup, {
    name: 'Diamond Lineup',
    inputs: [
        {
            name: 'splineUrl',
            type: 'string',
            defaultValue: 'https://prod.spline.design/YPvOKODLW6B9q0Q8/scene.splinecode',
            required: true,
        },
    ],
});

export default DiamondLineup;
