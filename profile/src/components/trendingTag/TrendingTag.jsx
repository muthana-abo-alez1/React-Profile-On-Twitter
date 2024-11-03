import React from 'react';
import './TrendingTag.scss';
import { FaEllipsisH } from 'react-icons/fa'; 

const TrendingTag = ({ category, hashtag, postCount, icon }) => {
  return (
    <div className="trending-tag">
      <div className="trending-tag__info">
        <p className="trending-tag__category">{category}</p>
        <div className="trending-tag__hashtag">
          <span className="trending-tag__name">{hashtag}</span>
          {icon && <img src={icon} alt="icon" className="trending-tag__icon" />}
        </div>
        <p className="trending-tag__post-count">{postCount} posts</p>
      </div>
      <FaEllipsisH className="trending-tag__ellipsis" />
    </div>
  );
};

export default TrendingTag;
