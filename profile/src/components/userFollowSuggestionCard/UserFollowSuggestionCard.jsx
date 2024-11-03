import React from "react";
import UserCard from "../userCard/UserCard";
import "./UserFollowSuggestionCard.scss";
import { FaUser } from "react-icons/fa";
import { renderDescription } from "../../utils/renderDescription";

const UserFollowSuggestionCard = ({ user }) => {
  return (
    <div className="user-follow-suggestion">
      <div className="user-follow-suggestion__follow-info">
        <span>
          <FaUser />
          {`${user.firstFollowerName} and ${user.numberFollow} others follow`}
        </span>
      </div>
      <UserCard
        key={user.id}
        name={user.name}
        username={user.username}
        profilePicture={user.profilePicture}
        isVerified={user.isVerified}
        showFollowButton={user.showFollowButton}
        isAdmin={user.isAdmin}
      />
      <p className="user-follow-suggestion__desc">{renderDescription(user.description)}</p>
    </div>
  );
};

export default UserFollowSuggestionCard;
