import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PlusIconModal } from '../AddModalHeader/PlusIconModal';
import { OffCanvasSidebar } from '../OffCanvasSidebar/OffCanvasSidebar';
import { SearchFilter } from './SearchFilter';

export const MainHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleSearch = (query: string) => {
        console.log('Searching for:', query);
        // Your search logic here
    };

    const handleCloseSearch = () => {
        console.log('Closing search');
        setIsSearchOpen(false);
    };

    return (
        <>
            <View style={{ zIndex: 1 }}>
                <View style={styles.headerContainer}>
                    {/* Left: Menu + Logo */}
                    <View style={styles.leftSection}>
                        <TouchableOpacity onPress={() => setIsMenuOpen(true)}>
                            <Ionicons name="menu" size={26} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.logoText}>
                            <Text style={styles.logoTextBlack}>Fynd</Text>
                            <Text style={styles.logoTextGreen}>Feed</Text>
                        </Text>
                    </View>

                    {/* Right: Search + Add + Profile */}
                    <View style={styles.rightSection}>
                        <TouchableOpacity style={styles.iconWrapper} onPress={() => setIsSearchOpen(prev => !prev)}>
                            <Ionicons name="search" size={20} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconWrapper} onPress={() => setModalVisible(true)}>
                            <MaterialIcons name="add" size={20} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg ' }}
                                style={styles.profileImage}
                            />
                        </TouchableOpacity>
                    </View>

                    <PlusIconModal visible={modalVisible} onClose={() => setModalVisible(false)} />

                    {/* Off-canvas Modal */}
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={isMenuOpen}
                        onRequestClose={() => setIsMenuOpen(false)}
                    >
                        <OffCanvasSidebar onClose={() => setIsMenuOpen(false)} />
                    </Modal>

                    {/* Search Filter Dropdown */}
                    {isSearchOpen && (
                        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 9999 }}>
                            <SearchFilter
                                isVisible={isSearchOpen}
                                onClose={handleCloseSearch}
                                onSearch={handleSearch}
                            />
                        </View>
                    )}
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    logoTextBlack: {
        color: '#000',
    },
    logoTextGreen: {
        color: '#32CD32',
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    iconWrapper: {
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        padding: 12,
        marginHorizontal: 6,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 2,
        borderColor: '#00BFFF',
    },
});