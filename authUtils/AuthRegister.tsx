// AuthRegister.tsx
import { CustomButton } from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export const AuthRegister = () => {
    const router = useRouter();

    return (
        <View style={styles.formContainer}>
            <Text style={styles.label}>Username *</Text>
            <TextInput placeholder="Choose Your Username Without Spaces" style={styles.input} />

            <Text style={styles.label}>Email *</Text>
            <TextInput placeholder="Add Your Professional or Work Email" style={styles.input} />

            <Text style={styles.label}>Password *</Text>
            <TextInput placeholder="Choose a Strong Password" secureTextEntry style={styles.input} />

            <Text style={styles.label}>Invite Code (Optional)</Text>
            <TextInput placeholder="Enter your friend’s invite code" style={styles.input} />
            <Text style={styles.optionalNote}>Ask your friends for their Fynd invite code</Text>

            <View style={styles.registerButton}>
                <CustomButton
                    title="Register"
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
        borderRadius: 7,
        color: '#ccc',
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
    optionalNote: {
        fontSize: 12,
        color: '#666',
    },
});
