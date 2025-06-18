// components/AddModal.tsx
import React from 'react';
import {
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface PlusIconModalProps {
    visible: boolean;
    onClose: () => void;
}

export const PlusIconModal: React.FC<PlusIconModalProps> = ({ visible, onClose }) => {
    return (
        <>
            <Modal visible={visible} transparent animationType="fade">
                <View style={styles.overlay}>
                    <View style={styles.modalContainer}>
                        <ScrollView contentContainerStyle={styles.scrollContainer}>
                            <Text style={styles.title}>What are you gonna add ?</Text>

                            {/* Modal Options */}
                            {modalOptions.map((option, idx) => (
                                <TouchableOpacity key={idx} style={styles.button}>
                                    <Text style={styles.buttonText}>{option}</Text>
                                </TouchableOpacity>
                            ))}

                            {/* Close Button */}
                            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                                <Text style={{ color: 'white' }}>Close</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const modalOptions: string[] = [
    'Post a Scene & Earn 💸',
    'Post Valuable Content & Earn 🧠',
    'Item For Sale 💰',
    'Item For Rent 🏷️',
    'Request to Buy on Demand 🛒',
    'Fast Food 🍟',
    'Home Made Food 🥘',
    'Grocery 🛍️',
    'Delivery On Demand 🚚',
    'Ride Share or Car/Bike Pool 🚗',
    'Service 🧰',
    'Job 💼',
    'Event 🎟️',
    'Freelance Profile 🌐',
    'Create Gig 🔧',
    'Ask A Question From Experts 🧠',
];

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalContainer: {
        margin: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 15,
        maxHeight: '80%',
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        padding: 12,
        marginVertical: 6,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 14,
        color: '#333',
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#000',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
});

