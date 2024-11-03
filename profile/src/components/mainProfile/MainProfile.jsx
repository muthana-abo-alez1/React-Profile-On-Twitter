import React from "react";
import "./MainProfile.scss";
import TopBar from "../topBar/TopBar";
import { FaEllipsisH, FaRegBell, FaRegCalendar } from "react-icons/fa";
import { RiLink } from "react-icons/ri";
import FollowersInfo from "../followersInfo/FollowersInfo";
import { FollowButton } from "../buttons/followButton/FollowButton";

const MainProfile = ({ followData, profileData }) => {
  const {
    title,
    numberPosts,
    description,
    link,
    joinedDate,
    following,
    followers,
  } = profileData || {};
  return (
    <div className="profile-container">
      <TopBar title={title} numberPosts={numberPosts} />
      <div className="profile-header">
        <img
          src="https://pbs.twimg.com/profile_banners/1566463268/1714619053/1500x500"
          alt="header"
          className="header-img"
        />
      </div>

      <div className="profile-content">
        <div className="profile-image">
          <img
            src="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png"
            alt="profile"
            className="profile-img"
          />
        </div>
        <div className="header-icons">
          <span>
            <FaEllipsisH />
          </span>
          <span>
            <FaRegBell />
          </span>
          <FollowButton Following={true} />
        </div>
        <div className="profile-details">
          <div className="profile-info">
            <h1 className="profile-name">{title}</h1>
            <p className="profile-username">@reactjs</p>
            <p className="profile-description">{description}</p>
            <div className="profile-meta">
              <div className="flex">
                <span className="icon">
                  <RiLink />
                </span>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                >
                  {link}
                </a>
              </div>
              <div className="flex">
                <span className="icon">
                  <FaRegCalendar />
                </span>
                <span>Joined {joinedDate}</span>
              </div>
            </div>
            <div className="profile-actions">
              <div className="profile-stats">
                <div className="stat">
                  <strong>{following}</strong>
                  <span className="text">Following</span>
                </div>
                <div className="stat">
                  <strong>{followers}</strong>
                  <span className="text">Followers</span>
                </div>
              </div>
            </div>
            <FollowersInfo followedBy={followData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
