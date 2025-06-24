import { FontAwesome } from '@expo/vector-icons';
import { ResizeMode, Video } from 'expo-av';
import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Post } from './types';

const PostCard = ({ post }: { post: Post }) => {
    const renderMedia = () => {
        switch (post.mediaType) {
            case 'video':
                return (
                    <Video
                        source={{ uri: post.mediaUrl }}
                        resizeMode={ResizeMode.COVER}
                        useNativeControls
                        style={styles.media}
                    />
                );
            case 'image':
                return <Image source={{ uri: post.mediaUrl }} style={styles.media} />;
            case 'link':
                return (
                    <TouchableOpacity onPress={() => Linking.openURL(post.mediaUrl)}>
                        <Image
                            source={{
                                uri: 'https://via.placeholder.com/350x200.png?text=Visit+Website'
                            }}
                            style={styles.media}
                        />
                        <Text style={styles.link}>Open Website</Text>
                    </TouchableOpacity>
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.card}>
            {/* Header */}
            <View style={styles.header}>
                <Image source={{ uri: post.userImage }} style={styles.avatar} />
                <View>
                    <Text style={styles.username}>{post.username}</Text>
                    <Text style={styles.timestamp}>{post.timestamp}</Text>
                </View>
            </View>

            {/* Media */}
            {renderMedia()}

            {/* Caption */}
            <Text style={styles.caption}>{post.caption}</Text>

            {/* Stats */}
            <View style={styles.stats}>
                <Text>{post.views} Views</Text>
                <Text>{post.likes} Likes</Text>
                <Text>{post.shares} Impressions</Text>
            </View>

            {/* Actions */}
            <View style={styles.actions}>
                <TouchableOpacity style={styles.action}>
                    <FontAwesome name="heart-o" size={18} color="red" />
                    <Text style={styles.actionText}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                    <FontAwesome name="gift" size={18} color="green" />
                    <Text style={styles.actionText}>Give</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                    <FontAwesome name="bookmark-o" size={18} color="orange" />
                    <Text style={styles.actionText}>Bookmark</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginVertical: 8,
        elevation: 2
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    avatar: {
        width: 40, height: 40, borderRadius: 20, marginRight: 10
    },
    username: {
        fontWeight: 'bold'
    },
    timestamp: {
        fontSize: 12, color: 'gray'
    },
    media: {
        width: '100%', height: 200, borderRadius: 8, marginVertical: 8
    },
    link: {
        color: '#0066cc',
        textAlign: 'center',
        marginVertical: 4
    },
    caption: {
        marginVertical: 6,
        fontSize: 14
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 12,
        marginBottom: 6
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 6
    },
    action: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 6,
    },
    actionText: {
        fontSize: 16,
        marginTop: 2,
    }
});

export default PostCard;
