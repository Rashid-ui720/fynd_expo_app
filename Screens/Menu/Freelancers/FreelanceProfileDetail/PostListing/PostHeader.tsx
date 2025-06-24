import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Post } from './types';

interface Props {
    post: Post;
}

export const PostHeader: React.FC<Props> = ({ post }) => (
    <View style={styles.container}>
        <Image source={{ uri: post.userImage }} style={styles.avatar} />
        <View>
            <Text style={styles.username}>{post.username}</Text>
            <Text style={styles.timestamp}>{post.timestamp}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
    avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
    username: { fontWeight: 'bold' },
    timestamp: { color: 'gray', fontSize: 12 },
});
