import React, { useState } from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress?: () => void;
    isActive?: boolean;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

export const CustomButton = ({
    title,
    onPress,
    isActive,
    style,
    textStyle,
}: CustomButtonProps) => {
    const [isPressed, setIsPressed] = useState(false);

    const getButtonStyles = (): StyleProp<ViewStyle> => {
        const stylesArray: StyleProp<ViewStyle>[] = [styles.button];

        if (isPressed || isActive) {
            stylesArray.push(styles.activeButton);
        }

        if (style) {
            stylesArray.push(style);
        }

        return StyleSheet.flatten(stylesArray);
    };

    const getTextStyles = (): StyleProp<TextStyle> => {
        const textStyles: StyleProp<TextStyle>[] = [styles.buttonText];

        if (isPressed || isActive) {
            textStyles.push(styles.activeButtonText);
        }

        if (textStyle) {
            textStyles.push(textStyle);
        }

        return StyleSheet.flatten(textStyles);
    };

    return (
        <TouchableOpacity
            style={getButtonStyles()}
            onPress={onPress}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
        >
            <Text style={getTextStyles()}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#61CE70',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    activeButton: {
        backgroundColor: '#61CE70',
        borderColor: '#61CE70',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#61CE70',
    },
    activeButtonText: {
        color: '#fff',
    },
});
