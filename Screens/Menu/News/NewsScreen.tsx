import { NewsCard } from '@/components/NewsCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { RootStackParamList } from './types/types';

interface NewsScreenProps {
    newsData: {
        id: string;
        author: string;
        time: string;
        location: string;
        title: string;
        image: any;
        content: string; // Add content for the detail page
    }[];
}

export default function NewsScreen({ newsData }: NewsScreenProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const router = useRouter();

    return (
        <FlatList
            data={newsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <NewsCard
                    data={item}
                    // onPress={() => {
                    //     console.log('Navigating to NewsDetail with post:', item);
                    //     navigation.navigate('NewsDetail', { post: item });
                    // }}
                    onPress={() => router.push('/MainRoot/MenuLinkRoot/News/NewsDetail')}
                />
            )}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
});