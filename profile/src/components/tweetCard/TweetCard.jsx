import React from "react";
import "./TweetCard.scss";
import { renderDescription } from "../../utils/renderDescription";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaChartBar, FaRegHeart, FaRegComment, FaEllipsisH } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
const TweetCard = ({ user, date, interaction }) => {
  return (
    <div className="tweet-card">
      <div className="tweet-card__title">
        <span>
          <AiOutlineRetweet />
          {`  ${user.title}`}
        </span>
      </div>
      <div className="tweet-card__content">
        <img
          src={user.profileImage}
          alt={`${user.name}'s profile`}
          className="user-card__image"
        />
        <div className="tweet-card__header">
          <div className="header-info">
            <div>
              <span className="user-name">{user.name}</span>
              <span className="user-handle">@{user.handle}</span>
              <span className="tweet-date">{date}</span>
            </div>
            <span ><FaEllipsisH/></span>
          </div>
          <div className="tweet-card__message">
            {renderDescription(user.message)}
          </div>
        </div>
      </div>
      <div className="tweet-card__footer">
        <span className="tweet-action">
          <FaRegComment /> {interaction.comments}
        </span>
        <span className="tweet-action">
          <AiOutlineRetweet /> {interaction.reposts}
        </span>
        <span className="tweet-action">
          <FaRegHeart /> {interaction.likes}
        </span>
        <span className="tweet-action">
          <FaChartBar /> {interaction.views}
        </span>
        <span className="tweet-action">
          <FiUpload />
        </span>
      </div>
    </div>
  );
};

export default TweetCard;
