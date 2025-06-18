// /src/components/MarketPlaceDetail/ImagesVideosContent.tsx

import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function ImagesVideosContent() {
    return (
        <>
            <View style={styles.tabContent}>
                <Text style={styles.sectionTitle}>Images & Videos</Text>
                <View style={styles.imageGallery}>
                    <Image
                        source={require('@/assets/images/others/marketplace/lenovo-thinkpad.jpeg')}
                        style={styles.galleryImage}
                    />
                    <Image
                        source={require('@/assets/images/others/marketplace/8mirla-plat.jpeg')}
                        style={styles.galleryImage}
                    />
                    <Image
                        source={require('@/assets/images/others/marketplace/redmi-phone.jpeg')}
                        style={styles.galleryImage}
                    />
                    <Image
                        source={require('@/assets/images/others/marketplace/8mirla-plat.jpeg')}
                        style={styles.galleryImage}
                    />
                </View>
            </View>
        </>
    );
}