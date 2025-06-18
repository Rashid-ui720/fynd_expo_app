// types.ts

export interface NewsType {
    id: string;
    author: string;
    time: string;
    location: string;
    title: string;
    image: any;
    content: string;
}



export type RootStackParamList = {
    NewsScreen: undefined;
    NewsDetail: { post: NewsType }; // use correct type
};
