import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

interface SearchFilterProps {
    isVisible: boolean;
    onClose: () => void;
    onSearch: (query: string) => void;
    forceClose?: boolean; // Optional prop to force close
}

export const SearchFilter = ({ isVisible, onClose, onSearch, forceClose }: SearchFilterProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [shouldRender, setShouldRender] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const slideAnim = useRef(new Animated.Value(-100)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;
    const textInputRef = useRef<TextInput | null>(null);

    // Handle search submission
    const handleSubmit = () => {
        const trimmedQuery = searchQuery.trim();
        if (trimmedQuery.length > 0) {
            setIsLoading(true);
            onSearch(trimmedQuery);
            Keyboard.dismiss();

            // Stop loading after delay
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        }
    };

    // Handle clearing the search input
    const handleClear = () => {
        setSearchQuery('');
        setIsLoading(false);
        // Refocus the input after clearing
        setTimeout(() => {
            if (textInputRef.current) {
                textInputRef.current.focus();
            }
        }, 100);
    };

    // Handle closing the dropdown
    const handleClose = () => {
        console.log('🔴 Close button pressed');

        // Dismiss keyboard first
        Keyboard.dismiss();

        // Reset all states immediately
        setSearchQuery('');
        setIsLoading(false);

        // Force close animation and call parent
        try {
            // Call parent's onClose immediately
            if (onClose && typeof onClose === 'function') {
                console.log('🔴 Calling parent onClose');
                onClose();
            } else {
                console.error('🔴 onClose is not a function or is undefined');
            }
        } catch (error) {
            console.error('🔴 Error calling onClose:', error);
        }
    };

    // Handle text input changes
    const handleTextChange = (text: string) => {
        setSearchQuery(text);
        // Reset loading state when user types
        if (isLoading) {
            setIsLoading(false);
        }
    };

    // Animation effect
    useEffect(() => {
        console.log('🔵 isVisible changed:', isVisible);

        if (isVisible) {
            setShouldRender(true);

            // Reset states when opening
            setIsLoading(false);

            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                // Focus input after animation completes
                setTimeout(() => {
                    if (textInputRef.current) {
                        textInputRef.current.focus();
                    }
                }, 100);
            });
        } else {
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: -100,
                    duration: 250,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 0,
                    duration: 250,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                setShouldRender(false);
                // Reset all states after closing animation
                setSearchQuery('');
                setIsLoading(false);
            });
        }
    }, [isVisible, slideAnim, opacityAnim]);

    // Handle force close
    useEffect(() => {
        if (forceClose) {
            handleClose();
        }
    }, [forceClose]);

    // Don't render if not visible
    if (!shouldRender) return null;

    // Determine what icon to show
    const hasText = searchQuery.trim().length > 0;
    const showSearchIcon = hasText && !isLoading;
    const showClearIcon = hasText && !isLoading;
    const showLoadingIcon = isLoading;

    return (
        <Animated.View
            style={[
                styles.searchDropdown,
                {
                    transform: [{ translateY: slideAnim }],
                    opacity: opacityAnim,
                },
            ]}
        >
            <View style={styles.searchBar}>
                <TextInput
                    ref={textInputRef}
                    placeholder="Find..."
                    value={searchQuery}
                    onChangeText={handleTextChange}
                    style={styles.searchInput}
                    returnKeyType="search"
                    onSubmitEditing={handleSubmit}
                    autoCorrect={false}
                    autoCapitalize="none"
                />

                {/* Search/Clear/Loading Button */}
                {showLoadingIcon ? (
                    <TouchableOpacity
                        style={[styles.actionButton, styles.loadingButton]}
                        activeOpacity={1}
                        disabled={true}
                    >
                        <Text style={styles.loadingIcon}>⟳</Text>
                    </TouchableOpacity>
                ) : showClearIcon ? (
                    <TouchableOpacity
                        onPress={handleClear}
                        style={[styles.actionButton, styles.clearButton]}
                        activeOpacity={0.6}
                        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                        <Text style={styles.clearIcon}>✕</Text>
                    </TouchableOpacity>
                ) : showSearchIcon ? (
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={[styles.actionButton, styles.searchButton]}
                        activeOpacity={0.6}
                        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                        <Text style={styles.searchIcon}>🔍</Text>
                    </TouchableOpacity>
                ) : null}

                {/* Close Button - Always visible and prioritized */}
                <TouchableOpacity
                    onPress={handleClose}
                    style={[styles.actionButton, styles.closeButton]}
                    activeOpacity={0.7}
                    hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                    testID="close-button"
                >
                    <Text style={styles.closeIcon}>✕</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    searchDropdown: {
        position: 'absolute',
        top: 76,
        right: 16,
        left: 16,
        backgroundColor: '#ffffff',
        borderRadius: 24,
        zIndex: 999,
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 24,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 16,
        backgroundColor: '#f8fafc',
        borderRadius: 20,
        paddingVertical: 12,
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        color: '#1e293b',
    },
    actionButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4,
        borderWidth: 1,
    },
    searchButton: {
        backgroundColor: '#3b82f6',
        borderColor: '#2563eb',
    },
    clearButton: {
        backgroundColor: '#f1f5f9',
        borderColor: '#cbd5e1',
    },
    loadingButton: {
        backgroundColor: '#dbeafe',
        borderColor: '#93c5fd',
    },
    closeButton: {
        backgroundColor: '#dc2626',
        borderColor: '#b91c1c',
        marginLeft: 8,
        zIndex: 1001, // Ensure it's on top
        elevation: 10, // Android elevation
    },
    searchIcon: {
        fontSize: 16,
        color: '#ffffff',
    },
    clearIcon: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#64748b',
    },
    loadingIcon: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2563eb',
    },
    closeIcon: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});