import React from "react";
import "./TopBar.scss";
import { FaArrowLeft } from "react-icons/fa";
import BackIcon from "../BackIcon/BackIcon";

const TopBar = ({ title, numberPosts }) => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
      <button className="back-button">
          <BackIcon width={24} height={24} color="currentColor" />
        </button>
        <div className="title-section">
          <h1 className="topbar-title">{title}</h1>
          <p className="topbar-subtext">{numberPosts} posts</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
