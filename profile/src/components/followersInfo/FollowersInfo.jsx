import React from 'react';
import './FollowersInfo.scss';

const FollowersInfo = ({ followedBy }) => {
  return (
    <div className="follow-info">
      <div className="follow-icons">
        {followedBy.icons.map((icon, index) => (
          <img key={index} src={icon} alt="icon" className="icon" />
        ))}
      </div>
      <div className="follow-text">
        Followed by {followedBy.names.slice(0, 3).join(', ')}, and {followedBy.count - 3} others you follow
      </div>
    </div>
  );
};

export default FollowersInfo;
