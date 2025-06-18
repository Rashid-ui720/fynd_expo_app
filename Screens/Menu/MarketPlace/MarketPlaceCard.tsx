// MarketPlaceCard.tsx
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    Dimensions,
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;
const gap = 16;
const sidePadding = 16;

const cardWidth = (screenWidth - sidePadding * 2 - gap * (numColumns - 1)) / numColumns;

export interface MarketplaceItem {
    id: number;
    category: string;
    price: string;
    title: string;
    location: string;
    updatedAt: string;
    verified: boolean;
    imageUrl: ImageSourcePropType;
}

export const MarketPlaceCard = ({ item }: { item: MarketplaceItem }) => {
    const getCategoryColor = (category: string) => {
        const colors: Record<string, string> = {
            Phone: '#3498db',
            Laptop: '#9b59b6',
            Property: '#e67e22',
            Car: '#e74c3c',
            Furniture: '#27ae60',
        };
        return colors[category] || '#34495e';
    };


    return (
        <TouchableOpacity
            style={[styles.card, { width: cardWidth }]}
            activeOpacity={0.85}
            onPress={() => router.push('/MainRoot/MenuLinkRoot/MarketPlace/MarketPlaceDetail')}
        >
            {/* Card content remains unchanged */}
            <View style={styles.imageWrapper}>
                <Image source={item.imageUrl} style={styles.image} />
                <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(item.category) }]}>
                    <Text style={styles.categoryText}>{item.category}</Text>
                </View>
                <View style={styles.updatedContainer}>
                    <Ionicons name="time-outline" size={12} color="#000" />
                    <Text style={styles.updatedText}>{item.updatedAt}</Text>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                <View style={styles.locationContainer}>
                    <Ionicons name="location-outline" size={14} color="#2ecc71" />
                    <Text style={styles.location} numberOfLines={1}>{item.location}</Text>
                </View>
                {item.verified && (
                    <View style={styles.verifiedContainer}>
                        <View style={styles.verifiedWrapper}>
                            <Image
                                source={require('@/assets/images/others/news/fynd-1.png')}
                                style={styles.avatar}
                            />
                            <Text style={styles.verifiedText}>@fynd...</Text>
                        </View>
                        <View style={styles.verifiedWrapper}>
                            <Ionicons name="checkmark-circle" size={14} color="#2ecc71" />
                            <Text style={styles.verifiedText}> Verified</Text>
                        </View>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    imageWrapper: {
        height: 140,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    categoryBadge: {
        position: 'absolute',
        left: 10,
        bottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    categoryText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    updatedContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    updatedText: {
        color: '#000',
        fontSize: 11,
        marginLeft: 2,
    },
    content: {
        padding: 12,
    },
    price: {
        fontSize: 18,
        fontWeight: '800',
        color: '#2c3e50',
        marginBottom: 4,
    },
    title: {
        fontSize: 14,
        color: '#34495e',
        marginBottom: 6,
        fontWeight: '500',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    location: {
        fontSize: 12,
        color: '#7f8c8d',
        marginLeft: 4,
        flex: 1,
    },
    verifiedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        gap: 12,
    },
    verifiedWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 25,
        height: 25,
        borderRadius: 18,
    },
    verifiedText: {
        fontSize: 12,
        color: '#474747',
        marginLeft: 5,
        fontWeight: '600',
    },
});
