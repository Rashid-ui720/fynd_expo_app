import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Post } from './types';

interface Props {
    post: Post;
}

export const PostFooter: React.FC<Props> = ({ post }) => (
    <View style={styles.footer}>
        <Text style={styles.caption}>{post.caption}</Text>
        <View style={styles.stats}>
            <Text>{post.likes} Likes</Text>
            <Text>{post.views} Views</Text>
            <Text>{post.shares} Shares</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    footer: { paddingVertical: 8 },
    caption: { marginBottom: 6 },
    stats: { flexDirection: 'row', justifyContent: 'space-between' }
});
