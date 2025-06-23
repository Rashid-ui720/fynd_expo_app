import { Ionicons } from '@expo/vector-icons';
import { Link, usePathname } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Dimensions,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

type Props = {
    onClose: () => void;
};

export const OffCanvasSidebar = ({ onClose }: Props) => {
    const translateXValue = useRef(new Animated.Value(-width)).current;
    const pathname = usePathname();

    useEffect(() => {
        Animated.spring(translateXValue, {
            toValue: 0,
            useNativeDriver: true,
        }).start();
    }, []);

    const hideSidebar = () => {
        Animated.spring(translateXValue, {
            toValue: -width,
            useNativeDriver: true,
        }).start(() => {
            onClose();
        });
    };

    const isActive = (route: string) => {
        return pathname?.startsWith(route) ?? false;
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <Pressable style={styles.backdrop} onPress={hideSidebar} />

            <Animated.View
                style={[
                    styles.sidebar,
                    { transform: [{ translateX: translateXValue }] },
                ]}
            >

                {/* Scrollable Content */}
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={true}>

                    {/* Menu Section */}
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuTitle}>Menu</Text>
                        <Link
                            href="/MainRoot/MenuLinkRoot/News/NewsIndex"
                            style={[styles.menuItem, isActive('/MainRoot/MenuLinkRoot/News/NewsIndex') && styles.activeMenuItem]}
                            asChild
                        >
                            <Pressable style={styles.menuItemContent}>
                                <Ionicons
                                    name="newspaper"
                                    size={20}
                                    color={isActive('/MainRoot/MenuLinkRoot/News/NewsIndex') ? '#fff' : '#333'}
                                />
                                <Text style={[styles.menuItemText, isActive('/MainRoot/MenuLinkRoot/News/NewsIndex') && styles.activeMenuItemText]}>
                                    News
                                </Text>
                            </Pressable>
                        </Link>

                        <Link
                            href="/MainRoot/MenuLinkRoot/MarketPlace/MarketPlaceIndex"
                            style={[styles.menuItem, isActive('/MainRoot/MenuLinkRoot/MarketPlace/MarketPlaceIndex') && styles.activeMenuItem]}
                            asChild
                        >
                            <Pressable style={styles.menuItemContent}>
                                <Ionicons
                                    name="cart"
                                    size={20}
                                    color={isActive('/MainRoot/MenuLinkRoot/MarketPlace/MarketPlaceIndex') ? '#fff' : '#333'}
                                />
                                <Text style={[styles.menuItemText, isActive('/MainRoot/MenuLinkRoot/MarketPlace/MarketPlaceIndex') && styles.activeMenuItemText]}>
                                    Marketplace
                                </Text>
                            </Pressable>
                        </Link>

                        <Link
                            href="/MainRoot/MenuLinkRoot/Freelancers/FreelancersIndex"
                            style={[styles.menuItem, isActive('/MainRoot/MenuLinkRoot/Freelancers/FreelancersIndex') && styles.activeMenuItem]}
                            asChild
                        >
                            <Pressable style={styles.menuItemContent}>
                                <Ionicons
                                    name="briefcase"
                                    size={20}
                                    color={isActive('/MainRoot/MenuLinkRoot/Freelancers/FreelancersIndex') ? '#fff' : '#333'}
                                />
                                <Text style={[styles.menuItemText, isActive('/MainRoot/MenuLinkRoot/Freelancers/FreelancersIndex') && styles.activeMenuItemText]}>
                                    Freelancers
                                </Text>
                            </Pressable>
                        </Link>

                        <Link
                            href="/MainRoot/MenuLinkRoot/Scenes/ScenesIndex"
                            style={[styles.menuItem, isActive('/MainRoot/MenuLinkRoot/Scenes/ScenesIndex') && styles.activeMenuItem]}
                            asChild
                        >
                            <Pressable style={styles.menuItemContent}>
                                <Ionicons
                                    name="film"
                                    size={20}
                                    color={isActive('/MainRoot/MenuLinkRoot/Scenes/ScenesIndex') ? '#fff' : '#333'}
                                />
                                <Text style={[styles.menuItemText, isActive('/MainRoot/MenuLinkRoot/Scenes/ScenesIndex') && styles.activeMenuItemText]}>
                                    Scenes
                                </Text>
                            </Pressable>
                        </Link>
                    </View>

                    {/* Profile Section */}
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuTitle}>Profile</Text>
                        <Link
                            href="/MainRoot/MenuLinkRoot/Scenes/ScenesIndex"
                            style={[styles.menuItem, isActive('/MainRoot/MenuLinkRoot/Scenes/ScenesIndex') && styles.activeMenuItem]}
                            asChild
                        >
                            <Pressable style={styles.menuItemContent}>
                                <Ionicons name="person" size={20} color="#333" />
                                <Text style={styles.menuItemText}>My Posts</Text>
                            </Pressable>
                        </Link>
                        <Link
                            href="/MainRoot/MenuLinkRoot/Scenes/ScenesIndex"
                            style={styles.menuItem}
                            asChild
                        >
                            <Pressable style={styles.menuItemContent}>
                                <Ionicons name="chatbubble" size={20} color="#333" />
                                <Text style={styles.menuItemText}>Messages</Text>
                            </Pressable>
                        </Link>
                        <Link
                            href="/MainRoot/MenuLinkRoot/Scenes/ScenesIndex"
                            style={styles.menuItem}
                            asChild
                        >
                            <Pressable style={styles.menuItemContent}>
                                <Ionicons name="settings" size={20} color="#333" />
                                <Text style={styles.menuItemText}>Account</Text>
                            </Pressable>
                        </Link>
                    </View>

                    {/* Earnings Section */}
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuTitle}>Earnings</Text>
                        <Link
                            href="/MainRoot/MenuLinkRoot/Scenes/ScenesIndex"
                            style={styles.menuItem}
                            asChild
                        >
                            <Pressable style={styles.menuItemContent}>
                                <Ionicons name="gift" size={20} color="#333" />
                                <Text style={styles.menuItemText}>Invite & Earn</Text>
                            </Pressable>
                        </Link>
                        <Link
                            href="/MainRoot/MenuLinkRoot/Scenes/ScenesIndex"
                            style={styles.menuItem}
                            asChild
                        >
                            <Pressable style={styles.menuItemContent}>
                                <Ionicons name="book" size={20} color="#333" />
                                <Text style={styles.menuItemText}>Read News & Earn</Text>
                            </Pressable>
                        </Link>
                        <Link
                            href="/MainRoot/MenuLinkRoot/Scenes/ScenesIndex"
                            style={styles.menuItem}
                            asChild
                        >
                            <Pressable style={styles.menuItemContent}>
                                <Ionicons name="camera" size={20} color="#333" />
                                <Text style={styles.menuItemText}>Post & Earn</Text>
                            </Pressable>
                        </Link>
                    </View>

                    {/* Help Section */}
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuTitle}>Help</Text>
                        <Link
                            href="/MainRoot/MenuLinkRoot/Scenes/ScenesIndex"
                            style={styles.menuItem}
                            asChild
                        >
                            <Pressable style={styles.menuItemContent}>
                                <Ionicons name="help-circle" size={20} color="#333" />
                                <Text style={styles.menuItemText}>Contact Support</Text>
                            </Pressable>
                        </Link>
                    </View>
                </ScrollView>
            </Animated.View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1000,
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 999,
    },
    sidebar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 250,
        height: Dimensions.get('window').height,
        backgroundColor: '#f9fafb',
        paddingVertical: 20,
        paddingHorizontal: 16,
        zIndex: 1000,
        elevation: 5,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    menuContainer: {
        marginTop: 20,
    },
    menuTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    menuItem: {
        borderRadius: 8,
        marginBottom: 8,
        overflow: 'hidden', // Ensure background clips corners
    },
    menuItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    menuItemText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 12,
    },
    activeMenuItem: {
        backgroundColor: '#61CE70',
    },
    activeMenuItemText: {
        color: '#fff',
    },
});