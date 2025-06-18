import EmailIcon from '@/components/icons/EmailIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import RedditIcon from '@/components/icons/RedditIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import WhatsappIcon from '@/components/icons/WhatsappIcon';
import { RootStackParamList } from '@/Screens/Menu/News/types/types';
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type NewsDetailRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;

export default function NewsDetail() {
    const route = useRoute<NewsDetailRouteProp>();
    const post = route.params?.post;


    {
        post ? (
            <Text>{post.title}</Text>
        ) : (
            <Text>No news item found.</Text>
        )
    }


    return (
        <>
            <View style={{ flex: 1, paddingBottom: 0, paddingTop: 15, }}>
                <ScrollView style={styles.container}>
                    {/* Hero Image */}
                    <Image
                        source={require('@/assets/images/others/news/nasa-taters-articleLarge.webp')}
                        style={styles.headerImage}
                        resizeMode="cover"
                    />

                    {/* Title and Author */}
                    <View style={styles.headerContent}>
                        <Text style={styles.title}>
                            NASA’s Laser Transmission Milestone: Cat Video Beamed Over 19 Million Miles from Deep Space
                        </Text>
                        <View style={styles.authorMetaContainer}>
                            <Image
                                source={require('@/assets/images/others/news/fynd-1.png')}
                                style={styles.avatar}
                            />
                            <View>
                                <Text style={styles.author}>Fynd Akhbar ✅</Text>
                                <Text style={styles.meta}>1 year ago · News From Pakistan</Text>
                            </View>
                        </View>
                    </View>

                    {/* Article Content */}
                    <View style={styles.contentContainer}>
                        <Text style={styles.content}>
                            In a groundbreaking achievement, NASA successfully transmitted an ultra-high definition video from a cat named Taters located nearly 19 million miles away. This feat is part of NASA’s Deep Space Optical Communications experiment, demonstrating the capability of streaming high-bandwidth video and data from deep space.
                        </Text>
                        <Text style={styles.content}>
                            On December 11, the experiment beamed a 15-second test video using a state-of-the-art instrument called a flight laser transceiver. The video signal covered a record-setting distance of 19 million miles, taking 101 seconds to travel back to Earth. The instrument utilized an encoded near-infrared laser to transmit the video to the Hale Telescope at Caltech’s Palomar Observatory in California.
                        </Text>
                        <Text style={styles.content}>
                            From there, the video was downloaded and sent “live” to NASA’s Jet Propulsion Laboratory in Southern California, where it was played in real time.
                        </Text>
                        <Text style={styles.content}>
                            The laser communications demonstration, launched with NASA’s Psyche mission, aims to transmit data from deep space at rates 10 to 100 times faster than current radio frequency systems. As the Psyche mission travels to the main asteroid belt between Mars and Jupiter, this technology will enable high-data-rate signals to be sent as far as Mars.
                        </Text>
                        <Text style={styles.content}>
                            The milestone not only showcases technological advancements but also adds a touch of whimsy...
                        </Text>
                    </View>


                    {/* Footer Section */}
                    <View style={styles.footer}>
                        <View style={styles.socialIconsContainer}>
                            <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
                                <FacebookIcon size={20} background="#4267B2" color="#fff" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
                                <TwitterIcon size={20} color="#fff" background="#1DA1F2" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com')}>
                                <LinkedinIcon size={20} color="#fff" background="#0A66C2" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.reddit.com/')}>
                                <RedditIcon size={20} color="#fff" background="#f64300" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.whatsapp.com/')}>
                                <WhatsappIcon size={20} color="#fff" background="#24cc63" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('mailto:support@example.com')}>
                                <EmailIcon size={20} color="#fff" background="#e54134" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerImage: {
        width: '100%',
        height: 250,
    },
    headerContent: {
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    authorMetaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 8,
    },
    author: {
        fontWeight: 'bold',
    },
    meta: {
        color: '#888',
        fontSize: 12,
    },
    contentContainer: {
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
    content: {
        fontSize: 16,
        lineHeight: 26,
        marginBottom: 16,
    },
    footer: {
        paddingTop: 8,
        paddingRight: 15,
        paddingBottom: 8,
        paddingLeft: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'flex-end',
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10, // Android shadow
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0,
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '15px',
    },
});
