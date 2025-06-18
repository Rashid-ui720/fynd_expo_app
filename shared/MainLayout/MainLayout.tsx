import { View } from 'react-native';
import { MainHeader } from './MainHeader';

type Props = {
};

export default function MainLayout({ }: Props) {
    return (
        <>
            <View style={{ flex: 1 }}>
                <MainHeader />
            </View>
        </>
    );
}