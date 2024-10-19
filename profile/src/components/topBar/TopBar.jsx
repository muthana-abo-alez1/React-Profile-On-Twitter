import React from "react";
import "./TopBar.scss";
import { FaArrowLeft } from "react-icons/fa";

const TopBar = ({ title, numberPosts }) => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <button className="back-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-arrow-left"
            viewBox="0 0 24 24"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
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
