import React from 'react'
import "./TrendingList.scss"
import TrendingTag from '../trendingTag/TrendingTag';

const TrendingList = () => {
    const trendingData = [
        { category: "Gaming · Trending", hashtag: "#VALORANTChampions", postCount: "27.9K", icon: "https://img.icons8.com/?size=100&id=aUZxT3Erwill&format=png&color=000000" },
        { category: "", hashtag: "#الانستا", postCount: "1,441", icon: "https://img.icons8.com/?size=100&id=32323&format=png&color=000000" },
         { category: "Gaming · Trending", hashtag: "Mako", postCount: "14.1K", icon: null },
         { category: "", hashtag: "#فرسان_اليوم", postCount: "22.3K", icon: null },
        { category: "", hashtag: "#Messi", postCount: "77.2K", icon: "https://img.icons8.com/?size=100&id=21578&format=png&color=000000" }, 
         { category: "", hashtag: "#جامعة_طيبة", postCount: "27.6K", icon: null },
        { category: "Gaming · Trending", hashtag: "fnatic", postCount: "8,748", icon: null },
         { category: "", hashtag: "#InterMiamiCF", postCount: "68.4K", icon: null }, 
         { category: "", hashtag: "#الاعلام_العربي", postCount: "68.4K", icon: null },
      ];
  return (
    <div className='trendsForYouList'>
        <p className='title'>Trends for you</p>
        {trendingData.map((item, index) => (
        <TrendingTag 
          key={index}
          category={item.category}
          hashtag={item.hashtag}
          postCount={item.postCount}
          icon={item.icon}
        />
      ))}

        <a href="" className='show-more'>Show more</a>
    </div>
  )
}

export default TrendingList