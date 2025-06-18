// /src/components/MarketPlaceDetail/ReviewsContent.tsx

import SmileIcon from "@/components/icons/SmileIcon";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function ReviewsContent() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <View style={styles.tabContent}>
                <Text style={styles.sectionTitle}>Reviews</Text>
                <View style={styles.reviewsSection}>

                    <View style={styles.emojiContainer}>
                        <SmileIcon size={24} color="#fff" />
                    </View>

                    <Text style={styles.reviewMessage}>
                        Reviews Are Not Applicable To This Item{"\n"}
                        Please Check Seller Reviews Instead
                    </Text>
                    <Pressable
                        onHoverIn={() => setIsHovered(true)}
                        onHoverOut={() => setIsHovered(false)}
                        style={[
                            styles.reviewButton,
                            isHovered && styles.hoveredButton
                        ]}>
                        <Text
                            style={[
                                styles.reviewButtonText,
                                isHovered && styles.hoveredButton
                            ]}
                        >Check Seller Reviews</Text>
                    </Pressable>
                </View>
            </View>
        </>
    );
}