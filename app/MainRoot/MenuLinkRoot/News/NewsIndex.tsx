import NewsScreen from "@/Screens/Menu/News/NewsScreen";

// Simulate fetching news data
const newsData = [
    {
        id: '1',
        author: 'Fynd Akhbar',
        time: '1 year ago',
        location: 'Pakistan',
        title:
            "NASA’s Laser Transmission Milestone: Cat Video Beamed Over 19 Million Miles from Deep Space",
        image: require('@/assets/images/others/news/nasa-taters-articleLarge.webp'),
        content: "In a groundbreaking achievement, NASA successfully transmitted an ultra-high definition video from a cat named Taters located nearly 19 million miles away...",
    },
    {
        id: '2',
        author: 'Fynd Akhbar',
        time: '2 year ago',
        location: 'Pakistan',
        title:
            'University of British Columbia Announces Scholarships for International Students in 2024-25 Academic Year',
        image: require('@/assets/images/others/news/UBC-1024x576.webp'),
        content: "In a groundbreaking achievement, NASA successfully transmitted an ultra-high definition video from a cat named Taters located nearly 19 million miles away...",
    },
    {
        id: '3',
        author: 'Fynd Akhbar',
        time: '3 year ago',
        location: 'Pakistan',
        title:
            'Record-Breaking Viewership: ICC Men’s Cricket World Cup 2023 Surpasses 1 Trillion Viewing Minutes',
        image: require('@/assets/images/others/news/international-world-cup.jpg'),
        content: "In a groundbreaking achievement, NASA successfully transmitted an ultra-high definition video from a cat named Taters located nearly 19 million miles away...",
    },
    {
        id: '4',
        author: 'Fynd Akhbar',
        time: '4 year ago',
        location: 'Pakistan',
        title:
            'Crackdown on Smuggled Phones: Hundreds Identified for Selling CPID and Patched Devices',
        image: require('@/assets/images/others/news/smuggled-mobile-phones.webp'),
        content: "In a groundbreaking achievement, NASA successfully transmitted an ultra-high definition video from a cat named Taters located nearly 19 million miles away...",
    },
    {
        id: '5',
        author: 'Fynd Akhbar',
        time: '5 year ago',
        location: 'Pakistan',
        title:
            'Indonesia Welcomes Travelers with 5-Year Multiple Entry Visas',
        image: require('@/assets/images/others/news/indonesia-tips-cover.webp'),
        content: "In a groundbreaking achievement, NASA successfully transmitted an ultra-high definition video from a cat named Taters located nearly 19 million miles away...",
    },
];

export default function NewsIndex() {
    return <NewsScreen newsData={newsData} />;
}
