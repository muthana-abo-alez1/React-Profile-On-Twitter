import React, { useState } from 'react';
import './FollowButton.scss'; 

export const FollowButton = ({Following}) => {
  const [isFollowing, setIsFollowing] = useState(Following);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <button
      className={`follow-button ${isFollowing ? 'following' : ''}`} 
      onClick={toggleFollow}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  );
};
