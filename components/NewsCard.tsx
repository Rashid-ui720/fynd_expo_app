// components/NewsCard.tsx
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface NewsCardProps {
    data: {
        id: string;
        author: string;
        time: string;
        location: string;
        title: string;
        image: ImageSourcePropType;
    };
    onPress: () => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({ data, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
            <View style={styles.header}>
                <Image source={require('@/assets/images/others/news/fynd-1.png')} style={styles.avatar} />
                <View>
                    <Text style={styles.author}>{data.author} ✅</Text>
                    <Text style={styles.meta}>{data.time} · News From {data.location}</Text>
                </View>
            </View>
            <Text style={styles.title}>{data.title}</Text>
            {data.image && (
                <View style={{ overflow: 'hidden', borderRadius: 10 }}>
                    <Image source={data.image} style={styles.image} resizeMode="cover" />
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginVertical: 10,
        padding: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        marginHorizontal: 12,
    },
    header: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 8,
    },
    author: {
        fontWeight: 'bold',
    },
    meta: {
        color: 'gray',
        fontSize: 12,
    },
    title: {
        fontSize: 16,
        marginVertical: 8,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 10,
    },
});

