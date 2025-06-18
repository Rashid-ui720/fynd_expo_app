import HeartIcon from '@/components/icons/HeartIcon';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface FreelancerCardProps {
    name: string;
    role: string;
    location: string;
    price: string;
    status: 'Verified' | 'Unverified';
    tag?: string;
    availability: string;
    bio: string;
    image: string;
}

export default function FreelancerCard(props: FreelancerCardProps) {
    const isVerified = props.status === 'Verified';

    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(prev => !prev);
    };

    return (
        <View style={styles.card}>
            <View style={styles.headerRow}>
                <Image source={{ uri: props.image }} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text style={styles.role}>{props.role}</Text>
                        <Text style={styles.location}>{props.location}</Text>

                    </View>
                    <View style={styles.heartWrapper}>
                        <TouchableOpacity onPress={toggleFavorite} style={{ alignContent: 'center', alignItems: 'center', }}>
                            <HeartIcon isActive={isFavorited} size={28} />
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.status, isVerified ? styles.verified : styles.unverified]}>
                        {isVerified ? '✔ Verified' : '❌ Unverified'}
                    </Text>

                    <View style={styles.badgeRow}>
                        <Text style={styles.price}>{props.price}</Text>
                        {props.tag && <Text style={styles.tag}>⭐ {props.tag}</Text>}
                        <Text style={styles.available}>{props.availability}</Text>
                    </View>

                    <Text style={styles.bio}>{props.bio}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 14,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    headerRow: {
        flexDirection: 'row',
        gap: 10,
    },
    avatar: {
        width: 65,
        height: 65,
        borderRadius: 50,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    role: {
        color: '#61CE70',
        fontWeight: '600',
    },
    location: {
        fontSize: 13,
        color: '#777',
    },
    heartWrapper: {
        position: 'absolute',
        right: 10,
        width: 40,                     // Fixed size ensures perfect circle
        height: 40,
        borderRadius: 20,             // Half of width/height = circle
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',         // Horizontal center
        justifyContent: 'center',     // Vertical center
    },
    badgeRow: {
        flexDirection: 'row',
        gap: 12,
        flexWrap: 'wrap',
        marginVertical: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    status: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    verified: {
        color: 'green',
    },
    unverified: {
        color: 'red',
    },
    tag: {
        backgroundColor: '#FFF3D1',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
        fontSize: 11,
    },
    available: {
        borderWidth: 1,
        borderColor: '#28A8E0',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 2,
        fontSize: 11,
        color: '#28A8E0',
    },
    price: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 4,
    },
    bio: {
        fontSize: 13,
        color: '#444',
        marginTop: 4,
    },
    button: {
        backgroundColor: '#61CE70',
        padding: 5,
        borderRadius: 25,
        marginTop: 12,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 500,
    },
});