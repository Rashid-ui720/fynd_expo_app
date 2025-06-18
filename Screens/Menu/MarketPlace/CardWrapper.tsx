// CardWrapper.tsx

import React from 'react';
import { View } from 'react-native';

interface CardWrapperProps {
    children: React.ReactNode;
}

export const CardWrapper = ({ children }: CardWrapperProps) => {
    return (
        <View style={{ marginBottom: 16, }}>
            {children}
        </View>
    );
};