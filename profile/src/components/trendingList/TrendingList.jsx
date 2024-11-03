import React from 'react';
import "./TrendingList.scss";
import TrendingTag from '../trendingTag/TrendingTag';

const TrendingList = () => {
    const trendingData = [
        { id: 1, category: "Gaming · Trending", hashtag: "#VALORANTChampions", postCount: "27.9K", icon: "https://img.icons8.com/?size=100&id=aUZxT3Erwill&format=png&color=000000" },
        { id: 2, category: "", hashtag: "#الانستا", postCount: "1,441", icon: "https://img.icons8.com/?size=100&id=32323&format=png&color=000000" },
        { id: 3, category: "Gaming · Trending", hashtag: "Mako", postCount: "14.1K", icon: null },
        { id: 4, category: "", hashtag: "#فرسان_اليوم", postCount: "22.3K", icon: null },
        { id: 5, category: "", hashtag: "#Messi", postCount: "77.2K", icon: "https://img.icons8.com/?size=100&id=21578&format=png&color=000000" },
        { id: 6, category: "", hashtag: "#جامعة_طيبة", postCount: "27.6K", icon: null },
        { id: 7, category: "Gaming · Trending", hashtag: "fnatic", postCount: "8,748", icon: null },
        { id: 8, category: "", hashtag: "#InterMiamiCF", postCount: "68.4K", icon: null },
        { id: 9, category: "", hashtag: "#الاعلام_العربي", postCount: "68.4K", icon: null },
    ];

    return (
        <div className='trends-List'>
            <p className='title'>Trends for you</p>
            {trendingData.map((item) => (
                <TrendingTag 
                    key={item.id}
                    category={item.category}
                    hashtag={item.hashtag}
                    postCount={item.postCount}
                    icon={item.icon}
                />
            ))}
            <a href="" className='show-more'>Show more</a>
        </div>
    );
};

export default TrendingList;
