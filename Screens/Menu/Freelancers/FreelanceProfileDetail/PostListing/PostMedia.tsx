import { ResizeMode, Video } from 'expo-av'; // if using Expo
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Post } from './types';

interface Props {
    post: Post;
}

export const PostMedia: React.FC<Props> = ({ post }) => {
    return (
        <View style={styles.container}>
            {post.mediaType === 'image' ? (
                <Image source={{ uri: post.mediaUrl }} style={styles.media} />
            ) : (
                <Video
                    source={{ uri: post.mediaUrl }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode={ResizeMode.COVER}  // ✅ Correct usage
                    useNativeControls
                    style={styles.media}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { marginVertical: 8 },
    media: { width: '100%', height: 200, borderRadius: 10 },
});
