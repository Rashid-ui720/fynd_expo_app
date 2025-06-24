import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import posts from './PostListing/dummyPosts.json';
import PostCard from './PostListing/PostCard';
import { Post } from './PostListing/types';

const FreelancerProfileDetailIndex = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={posts as Post[]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PostCard post={item} />}
            />
        </View>
    );
};

export default FreelancerProfileDetailIndex;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 10
    }
});
