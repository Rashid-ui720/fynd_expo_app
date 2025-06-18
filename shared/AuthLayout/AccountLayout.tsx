import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    Linking,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

type AuthLayoutProps = {
    children: React.ReactNode;
};

type TabType = 'Create Account' | 'Login';

export const AuthLayout = ({ children }: AuthLayoutProps) => {
    const [activeTab, setActiveTab] = useState<TabType>('Create Account'); // Default active tab
    const [hoveredTab, setHoveredTab] = useState<TabType | null>(null);

    const router = useRouter();
    const handlePolicyPress = () => Linking.openURL('https://fynd.pk/privacy-policy/');

    const renderTabButton = (tab: TabType) => {
        const isActive = activeTab === tab;
        const isHovered = Platform.OS === 'web' && hoveredTab === tab;

        const backgroundColor = isActive
            ? '#61CE70'
            : isHovered
                ? '#e5fbe9'
                : tab === 'Create Account'
                    ? '#61CE70'
                    : '#fff';

        const textColor =
            isActive || (tab === 'Create Account' && !isHovered) ? '#fff' : '#61CE70';

        return (
            <Pressable
                key={tab}
                onPress={() => {
                    setActiveTab(tab);
                    router.push(tab === 'Create Account' ? '/registration' : '/login');
                }}
                onHoverIn={() => Platform.OS === 'web' && setHoveredTab(tab)}
                onHoverOut={() => Platform.OS === 'web' && setHoveredTab(null)}
                style={[
                    styles.tabButton,
                    {
                        backgroundColor,
                        borderColor: '#61CE70',
                    },
                ]}
            >
                <Text style={[styles.tabButtonText, { color: textColor }]}>{tab}</Text>
            </Pressable>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('@/assets/images/auths/fynd-logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.buttonContainer}>
                {renderTabButton('Create Account')}
                {renderTabButton('Login')}
            </View>

            {children}

            <Pressable onPress={handlePolicyPress} style={styles.privacyContainer}>
                <Text style={styles.linkText}>Privacy Policy</Text>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 150,
        height: 80,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12,
        marginBottom: 30,
    },
    tabButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 50,
        borderWidth: 1,
    },
    tabButtonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    privacyContainer: {
        marginTop: 30,
    },
    linkText: {
        color: '#61CE70',
        fontSize: 14,
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
});
