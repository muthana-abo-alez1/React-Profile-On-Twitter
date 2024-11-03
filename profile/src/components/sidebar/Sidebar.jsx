import React from "react";
import SidebarItem from "./SidebarItem.jsx/SidebarItem";
import {
  FaHome,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaUsers,
  FaUser,
  FaEllipsisH,
  FaListAlt,
  FaSearch,
  FaRegBell,
  FaRegBookmark,
  FaRegListAlt,
  FaRegUser,
  FaRegEnvelope,
} from "react-icons/fa";
import "./Sidebar.scss";
import { Button } from "../buttons/Button";
import UserCard from "../userCard/UserCard";
const Sidebar = () => {
  const sidebarItems = [
    { id: 1, icon: <FaHome />, text: "Home" },
    { id: 2, icon: <FaSearch />, text: "Explore" },
    { id: 3, icon: <FaRegBell />, text: "Notifications" },
    { id: 4, icon: <FaRegEnvelope />, text: "Messages" },
    { id: 5, icon: <FaRegListAlt />, text: "Lists" },
    { id: 6, icon: <FaRegBookmark />, text: "Bookmarks" },
    { id: 7, icon: <FaUsers />, text: "Communities" },
    { id: 8, icon: <FaRegUser />, text: "Profile" },
    { id: 9, icon: <FaEllipsisH />, text: "More" },
  ];

  return (
    <div className="sidebar">
      <div>
        <img
          className="twitter-icon"
          src="https://pbs.twimg.com/media/GZZQbdPWgAEJj9R?format=jpg&name=large"
          alt="Twitter Logo"
        />
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            text={item.text}
            showIcon={item.showIcon}
          />
        ))}
        <Button text="Post" size="large" />
      </div>
      <div className="admin">
        <UserCard
          name="Muthana Abo Aleez"
          username="mutaboaleez"
          profilePicture="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg"
          isVerified
          isAdmin
          hoverable
        />
      </div>
    </div>
  );
};

export default Sidebar;
