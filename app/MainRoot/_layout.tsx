import { MainHeader } from "@/shared/MainLayout/MainHeader";
import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";


export default function MainLayout() {
    return (
        <View style={styles.container}>
            <MainHeader />
            <Slot /> {/* This renders the child screens like index.tsx or feed.tsx */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 16,
    }
});
