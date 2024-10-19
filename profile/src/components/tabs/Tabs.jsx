import React, { useState } from 'react';
import './Tabs.scss';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('posts');



  return (
    <div className="tabs-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          Posts
        </div>
        <div
          className={`tab ${activeTab === 'replies' ? 'active' : ''}`}
          onClick={() => setActiveTab('replies')}
        >
          Replies
        </div>
        <div
          className={`tab ${activeTab === 'media' ? 'active' : ''}`}
          onClick={() => setActiveTab('media')}
        >
          Media
        </div>
        <div
          className={`tab ${activeTab === 'likes' ? 'active' : ''}`}
          onClick={() => setActiveTab('likes')}
        >
          Likes
        </div>
      </div>
    </div>
  );
};

export default Tabs;
