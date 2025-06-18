// AuthLogin.tsx
import { CustomButton } from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export const AuthLogin = () => {
    const router = useRouter();

    return (
        <View style={styles.formContainer}>
            <Text style={styles.label}>Username or Email</Text>
            <TextInput placeholder="Enter Your Username" style={styles.input} />

            <Text style={styles.label}>Password</Text>
            <TextInput placeholder="Enter your Password" secureTextEntry style={styles.input} />

            <View style={styles.registerButton}>
                <CustomButton
                    title="Login"
                    onPress={() => router.push('/MainRoot/MenuLinkRoot/News/NewsIndex')}
                    style={styles.createAccountButton}
                    textStyle={styles.createAccountButtonText}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    registerButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    createAccountButton: {
        backgroundColor: '#61CE70',
        borderColor: '#61CE70',
    },
    createAccountButtonText: {
        color: '#fff',
    },
});
