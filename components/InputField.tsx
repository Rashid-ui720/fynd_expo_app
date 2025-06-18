import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface InputFieldProps {
    label: string;
    placeholder: string;
    secureTextEntry?: boolean;
}

export const InputField = ({ label, placeholder, secureTextEntry }: InputFieldProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isVisited, setIsVisited] = useState(false);

    return (
        <View style={styles.fieldWrapper}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[
                    styles.input,
                    isFocused && styles.inputFocused,
                    isVisited && styles.inputVisited,
                ]}
                placeholder={placeholder}
                placeholderTextColor="#aaa"
                secureTextEntry={secureTextEntry}
                onFocus={() => {
                    setIsFocused(true);
                    setIsVisited(true);
                }}
                onBlur={() => setIsFocused(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    fieldWrapper: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        color: '#333',
    },
    inputFocused: {
        borderColor: '#61CE70',
        color: '#000',
    },
    inputVisited: {
        borderColor: '#61CE70',
    },
});
