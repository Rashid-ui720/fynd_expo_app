import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type FacebookIconProps = {
    size?: number;
    color?: string;
    background?: string;
};

const FacebookIcon = ({
    size = 20,
    color = '#fff',
    background = '#4267B2',
}: FacebookIconProps) => (
    <View
        style={[
            styles.iconContainer,
            {
                backgroundColor: background,
                padding: 10,
                borderRadius: (size + 20) / 2, // makes it circular even with padding
            },
        ]}
    >
        <Svg width={size} height={size} viewBox="0 0 512 512" fill={color}>
            <Path d="M504 256C504 119 393 8 256 8S8 119 8 256
        c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64
        c0-62.15 37-96.48 93.67-96.48
        27.14 0 55.52 4.84 55.52 4.84v61h-31.28
        c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501
        C413.31 482.38 504 379.78 504 256z" />
        </Svg>
    </View>
);

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FacebookIcon;
