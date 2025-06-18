// /src/components/MarketPlaceDetail/DetailsContent.tsx
import HeartIcon from "@/components/icons/HeartIcon";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function DetailsContent() {

    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(prev => !prev);
    };

    return (
        <>
            <View style={styles.tabContent}>
                {/* Product Title with Heart Icon */}
                <View style={styles.titleWrap}>
                    <Text style={styles.title}>Oppo Reno Z 8 256</Text>
                    <TouchableOpacity onPress={toggleFavorite} style={styles.heartWrapper}>
                        <HeartIcon isActive={isFavorited} size={30} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.price}>Price in Pakistan: Rs. 35,000</Text>
                <Text style={styles.location}>
                    <Ionicons name="location-outline" size={14} color="#000" /> Manawan, Lahore
                </Text>

                <TouchableOpacity
                    style={styles.chatButton}
                    onPress={(() => { })}
                >
                    <Text style={styles.chatButtonText}>Chat</Text>
                </TouchableOpacity>

                <View>
                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.description}>new ha ha used ha 8 256</Text>
                </View>

                <View style={styles.sellerInfo}>
                    <Image
                        source={require('@/assets/images/others/news/fynd-1.png')}
                        style={styles.sellerAvatar}
                    />
                    <View>
                        <Text style={styles.sellerName}>Fynd</Text>
                        <Text>Member Since Sep 30, 2023</Text>
                        <Text style={styles.verified}>
                            <Ionicons name="checkmark-circle" size={18} color="#2ecc71" /> Verified •{" "}
                            <Text style={styles.link}>View Profile</Text>
                        </Text>
                    </View>
                </View>

            </View>
        </>
    );
}