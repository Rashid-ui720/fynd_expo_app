// components/HeartIcon.tsx
import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface HeartIconProps {
    isActive: boolean;
    size?: number;
}

export default function HeartIcon({ isActive, size = 28 }: HeartIconProps) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill={isActive ? '#32BF44' : 'none'}
            stroke={isActive ? '#32BF44' : '#32BF44'}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M20.8 4.6c-1.5-1.4-3.9-1.4-5.4 0L12 8l-3.4-3.4c-1.5-1.4-3.9-1.4-5.4 0s-1.5 3.6 0 5l8.8 8.8 8.8-8.8c1.5-1.4 1.5-3.6 0-5z" />
        </Svg>
    );
}
