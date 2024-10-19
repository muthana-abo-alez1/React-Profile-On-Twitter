import React from "react";
import "./MainProfile.scss";
import TopBar from "../topBar/TopBar";
import { FaEllipsisH, FaRegBell, FaRegCalendar } from "react-icons/fa";
import { RiLink } from "react-icons/ri";
import FollowersInfo from "../followersInfo/FollowersInfo";
import { Button } from "../buttons/Button";
import { FollowButton } from "../buttons/followButton/FollowButton";

const MainProfile = ({ followData, profileData }) => {
    return (
        <div className="profile-container">
            <TopBar title={profileData.title} numberPosts={profileData.numberPosts} />
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
                    <span><FaEllipsisH /></span>
                    <span><FaRegBell /></span>
                    <FollowButton Following={true}/>
                </div>
                <div className="profile-details">
                    <div className="profile-info">
                        <h1 className="profile-name">{profileData.title}</h1>
                        <p className="profile-username">@reactjs</p>
                        <p className="profile-description">
                            {profileData.description}
                        </p>
                        <div className="profile-meta">
                            <div className="flex">
                                <span className="icon"><RiLink /></span>
                                <a
                                    href={profileData.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="profile-link"
                                >
                                    {profileData.link}
                                </a>
                            </div>
                            <div className="flex">
                                <span className="icon"><FaRegCalendar /></span>
                                <span>Joined {profileData.joinedDate}</span>
                            </div>
                        </div>
                        <div className="profile-actions">
                            <div className="profile-stats">
                                <span>
                                    <strong>{profileData.following}</strong> <span className="text">Following</span>
                                </span>
                                <span>
                                    <strong>{profileData.followers}</strong> <span className="text">Followers</span>
                                </span>
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
