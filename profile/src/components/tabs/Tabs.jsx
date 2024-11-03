import React, { useState } from "react";
import "./Tabs.scss";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const tabs = [
    { id: "posts", label: "Posts" },
    { id: "replies", label: "Replies" },
    { id: "media", label: "Media" },
    { id: "likes", label: "Likes" },
  ];

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
