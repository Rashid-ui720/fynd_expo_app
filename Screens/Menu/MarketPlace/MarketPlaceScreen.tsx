// MarketPlaceScreen.tsx

import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CardWrapper } from './CardWrapper';
import { MarketPlaceCard } from './MarketPlaceCard';
import { MarketPlaceData } from './MarketPlaceData';

export default function MarketPlaceScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={MarketPlaceData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CardWrapper>
                        <MarketPlaceCard item={item} />
                    </CardWrapper>
                )}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingTop: 16,
                    paddingBottom: 32,
                }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
});