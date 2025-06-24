// types.ts
export interface Post {
    id: string;
    username: string;
    userImage: string;
    timestamp: string;
    mediaType: 'image' | 'video' | 'link' | 'text'; // ✅ Add these types
    mediaUrl: string;
    caption: string;
    likes: number;
    shares: number;
    views: number;
}
