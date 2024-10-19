import React from "react";
import "./UserFollowSuggestionList.scss";
import UserFollowSuggestionCard from "../userFollowSuggestionCard/UserFollowSuggestionCard";

const UserFollowSuggestionList = () => {
  const userSuggestions = [
    {
      name: "freeCodeCamp.org",
      username: "freeCodeCamp",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvr9ZDMt022X8FxZsBV2fKP53gTb7qGtL_Q&s",
      description:
        "We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity. Tweets by @abbeyrenn.",
      isVerified: true,
      showFollowButton: true,
      isAdmin: false,
      numberFollow: 9,
      firstFollowerName: "Node.js",
    },
    {
      name: "TypeScript",
      username: "typescript",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      description:
        "TypeScript is a language for application-scale JavaScript development. It's a typed superset of JavaScript that compiles to plain JavaScript.",
      isVerified: true,
      showFollowButton: true,
      isAdmin: false,
      numberFollow: 5,
      firstFollowerName: "Node.js",
    },
    {
      name: "Tailwind CSS",
      username: "tailwindcss",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      description:
        "The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML.",
      isVerified: true,
      showFollowButton: true,
      isAdmin: false,
      numberFollow: 3,
      firstFollowerName: "Yazeed Obaid",
    },
  ];

  return (
    <div className="Who-to-follow">
      <p className="title">Who to follow</p>
      <div className="user-follow-suggestion-list">
        {userSuggestions.map((user, index) => (
          <UserFollowSuggestionCard key={index} user={user} />
        ))}
      </div>
      <a href="" className="show-more">
        Show more
      </a>
    </div>
  );
};

export default UserFollowSuggestionList;
