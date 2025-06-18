import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import FreelancerCard from './FreelancerCard';
import freelancers from './freelancersData.json';

export default function FreelancerScreen() {
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f3f3', paddingTop: 20 }}>
                <FlatList
                    data={freelancers}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <FreelancerCard
                        {...{
                            ...item,
                            status: item.status === 'Verified' ? 'Verified' : 'Unverified',
                        }}
                    />
                    }
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </SafeAreaView>
        </>
    );
}