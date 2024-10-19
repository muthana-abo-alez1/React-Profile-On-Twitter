import React from "react";
import "./Profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Search from "../../components/search/Search";
import YouMightLikeList from "../../components/youMightLikeList/YouMightLikeList";
import TrendingList from "../../components/trendingList/TrendingList";
import UserFollowSuggestionList from "../../components/userFollowSuggestionList/UserFollowSuggestionList";
import TweetList from "../../components/tweetList/TweetList";
import Tabs from "../../components/tabs/Tabs";
import MainProfile from "../../components/mainProfile/MainProfile";

const Profile = () => {
  const followData = {
    icons: [
        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvr9ZDMt022X8FxZsBV2fKP53gTb7qGtL_Q&s',
        'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'
    ], 
    names: ['JavaScript Daily', 'Angular', 'muthana', 'mut', 'aboalez'], 
    count: 7 
};

const profileData = {
    title: "React",
    numberPosts: "2,611",
    description: "The library for web and native user interfaces",
    link: "https://react.dev",
    joinedDate: "July 2013",
    following: 267,
    followers: "708.1K",
};
  return (
    <div className="profile">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="center">
      <MainProfile followData={followData} profileData={profileData} />
        <Tabs/>
      <TweetList/>
        <UserFollowSuggestionList/>
      </div>
      <div className="lists">
        <Search />
        <YouMightLikeList />
        <TrendingList/>
        <p className="Terms">
        Terms of Serice &nbsp; Privacy Policy&nbsp;  Cookie Policy<br/>
        Accessibility&nbsp;  Ads info &nbsp;  More... &nbsp; &copy; 2023 X Corp.
        </p>
      </div>
    </div>
  );
};

export default Profile;
