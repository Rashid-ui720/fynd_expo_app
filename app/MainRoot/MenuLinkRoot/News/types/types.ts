// app/MainRoot/MenuLinkRoot/News/Scenes/types/types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NewsDetailParams = {
    id: string;
    author: string;
    time: string;
    location: string;
    title: string;
    image: any;
    content: string;
};

export type RootStackParamList = {
    NewsIndex: undefined;
    NewsDetail: {
        post: NewsDetailParams;
    };
};

// For use with useNavigation
export type NewsScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'NewsIndex'
>;