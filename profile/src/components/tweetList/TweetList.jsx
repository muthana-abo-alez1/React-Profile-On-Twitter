import React from 'react'
import "./TweetList.scss"
import TweetCard from '../tweetCard/TweetCard'
const TweetList = () => {
    const user = {
        name: "danabramov.bsky.social",
        handle: "dan_abramov",
        profileImage: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg", 
        message:"happy 10th birthday to @reactjs! 🎂🎉",
        title:"React reposted",
      };
    
      const interaction = {
        comments: 46,
        reposts: 675,
        likes: "3,701",
        views: "1.1M",
      };
  return (
    <div className='tweet-list'>
      <TweetCard
        user={user}
        date="May 29"
        interaction={interaction}
      />
    </div>
  )
}

export default TweetList