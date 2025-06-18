// /src/components/MarketPlaceDetail/MarketPlaceDetailScreen.tsx

import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CardWrapper } from "../CardWrapper";
import { MarketPlaceCard } from "../MarketPlaceCard";
import { MarketPlaceData } from "../MarketPlaceData";
import DetailsContent from "./DetailsContent";
import ImagesVideosContent from "./ImagesVideosContent";
import ReviewsContent from "./ReviewsContent";
import { styles } from "./styles";
import { TabType } from "./types";

export const IndexDetail = () => {
    const [activeTab, setActiveTab] = useState<TabType>("Details");

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    {/* Product Header Image */}
                    <Image
                        source={require('@/assets/images/others/marketplace/oppo-reno.jpeg')}
                        style={styles.productImage}
                    />

                    {/* Tabs */}
                    <View style={styles.tabsContainer}>
                        {(["Details", "Images & Videos", "Reviews"] as TabType[]).map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                style={[styles.tab, activeTab === tab && styles.activeTab]}
                                onPress={() => setActiveTab(tab)}
                            >
                                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                                    {tab}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Conditional Rendering of Tab Content */}
                    {activeTab === "Details" && <DetailsContent />}
                    {activeTab === "Images & Videos" && <ImagesVideosContent />}
                    {activeTab === "Reviews" && <ReviewsContent />}


                    <View style={styles.profileBottomWrap}>
                        <TouchableOpacity>
                            <Text style={styles.profileBottomText}>Your Profile Is Being Reviewed.</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.sectionTitle}>Might Be Interested</Text>

                        <View style={styles.interestList}>
                            {MarketPlaceData.map((item) => (
                                <CardWrapper key={item.id}>
                                    <MarketPlaceCard item={item} />
                                </CardWrapper>
                            ))}
                        </View>
                    </View>
                </View>

            </ScrollView>
        </>
    );
};
