import React from 'react';
import './SidebarItem.scss'; 

const SidebarItem = ({ icon, text, showIcon = true }) => {
  return (
    <div className="sidebar-item">
      {showIcon && icon && <span className="sidebar-icon">{icon}</span>}
      <span className="sidebar-text">{text}</span>
    </div>
  );
};

export default SidebarItem;