// /src/components/MarketPlaceDetail/styles.ts

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingBottom: 0,
        backgroundColor: "#fff",
    },
    productImage: {
        width: "100%",
        height: 250,
        borderRadius: 10,
        marginBottom: 16,
    },
    tabsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 16,
    },
    tab: {
        paddingVertical: 12,
        paddingHorizontal: 16, // Add padding for better spacing
        alignItems: "center",
        justifyContent: "center", // Center content vertically and horizontally
        backgroundColor: "#f1f2f3",
        borderRadius: 10, // Rounded corners for tabs
    },
    activeTab: {
        backgroundColor: "#61ce70", // Green background for active tab
        borderRadius: 10, // Circular highlight effect
    },
    tabText: {
        fontSize: 14,
        color: "#54595f",
        fontWeight: '400',
    },
    activeTabText: {
        color: "#fff",
    },
    tabContent: {
        paddingHorizontal: 8,
    },
    titleWrap: {
        flexDirection: "row", // To align text and heart icon horizontally
        justifyContent: "space-between",
        alignItems: "center", // Aligns text and heart vertically
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
    },
    heartWrapper: {
        position: 'absolute',
        top: 8,
        right: 4,
    },
    chatButton: {
        backgroundColor: '#32bf44',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center', // Center align text horizontally
        justifyContent: 'center', // Center align text vertically
    },
    chatButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 500,
    },
    price: {
        fontSize: 18,
        color: "#333",
        marginBottom: 8,
    },
    location: {
        fontSize: 14,
        color: "#000",
        marginBottom: 16,
    },
    sellerInfo: {
        flexDirection: "row",
        gap: 12,
        marginBottom: 16,
    },
    sellerAvatar: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    sellerName: {
        fontWeight: "bold",
    },
    verified: {
        color: "#61ce70",
    },
    link: {
        textDecorationLine: "underline",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 8,
    },
    description: {
        fontSize: 14,
        color: "#555",
        marginBottom: 16,
    },
    imageGallery: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        marginBottom: 10,
    },
    galleryImage: {
        width: "30%",
        height: 100,
        borderRadius: 8,
    },
    reviewsSection: {
        alignItems: "center",
        paddingBottom: 20,
    },
    reviewMessage: {
        textAlign: "center",
        color: "#666",
        fontWeight: 600,
        marginBottom: 16,
    },
    reviewButton: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: "#61ce70",
        padding: 12,
        borderRadius: 8,
    },
    hoveredButton: {
        backgroundColor: "#61ce70",
        color: '#fff',
    },
    reviewButtonText: {
        color: "#61ce70",
        fontWeight: "bold",
    },
    interestList: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 1,
    },
    emojiContainer: {
        width: 50, // Size of the circle
        height: 50,
        borderRadius: 50, // Half the width/height to make it a circle
        backgroundColor: "#61ce70", // Green color
        justifyContent: "center",
        alignItems: "center",
        margin: 16, // Optional: Add spacing around the circle
    },
    profileBottomWrap: {
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
    profileBottomText: {
        textAlign: 'center',
        color: "#519F59",
        fontWeight: 600,
        fontSize: 15,
    },
});