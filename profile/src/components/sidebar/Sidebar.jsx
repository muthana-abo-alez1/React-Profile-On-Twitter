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
    { icon: <FaHome />, text: "Home" },
    { icon: <FaSearch />, text: "Explore" },
    { icon: <FaRegBell />, text: "Notifications" },
    { icon: <FaRegEnvelope />, text: "Messages" },
    { icon: <FaRegListAlt />, text: "Lists" },
    { icon: <FaRegBookmark />, text: "Bookmarks" },
    { icon: <FaUsers />, text: "Communities" },
    { icon: <FaRegUser />, text: "Profile" },
    { icon: <FaEllipsisH />, text: "More" },
  ];

  return (
    <div className="sidebar">
      <div>
        <img
          className="twitter-icon"
          src="https://pbs.twimg.com/media/GZZQbdPWgAEJj9R?format=jpg&name=large"
          alt="Twitter Logo"
        />
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            showIcon={item.showIcon}
          />
        ))}
        <Button text={"Post"} size={"large"} />
      </div>
      <div className="admin">
        <UserCard
          name="Muthana Abo Aleez"
          username="mutaboaleez"
          profilePicture="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg"
          isVerified={true}
          isAdmin={true}
          hoverable={true}
        />
      </div>
    </div>
  );
};

export default Sidebar;
