import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen name="index" options={{ headerTitle: "Oops! Not Found" }} />
            <View
                style={styles.container}
            >
                <Text style={styles.text}>This one is the not found screen to show manually.</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#25292e',
    },
    text: {
        color: '#fff',
        fontSize: 26,
    },
    button: {
        backgroundColor: 'yellow',
        color: '#000',
        padding: 10,
    }
});