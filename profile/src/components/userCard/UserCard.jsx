import React from "react";
import "./UserCard.scss";
import { VerifiedIcon } from "../icons/VerifiedIcon";
import { FaEllipsisH } from "react-icons/fa";
import { FollowButton } from "../buttons/followButton/FollowButton";

const UserCard = ({
  name,
  username,
  profilePicture,
  isVerified,
  showFollowButton,
  isAdmin,
  hoverable = false,
}) => {
  return (
    <div className={`user-card ${hoverable ? "hoverable" : ""}`}>
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        className="user-card__image"
      />
      <div className="user-card__info">
        <div className="user-card__header">
          <h2
            className={`user-card__name ${
              isAdmin ? "user-card__overflow" : ""
            } ${
              !isVerified && !showFollowButton
                ? "user-card__overflow-verified"
                : ""
            } `}
          >
            {name}
          </h2>
          {isVerified && (
            <VerifiedIcon
              className="user-card__verified"
              width="20px"
              height="20px"
              fill="#1da1f2"
            />
          )}
        </div>
        <p
          className={`user-card__username ${
            !isAdmin ? "user-card__overflow" : ""
          } ${isVerified ? "user-card__overflow-verified" : ""}`}
        >
          @{username}
        </p>
      </div>
      {showFollowButton && <FollowButton />}
      {isAdmin && <FaEllipsisH />}
    </div>
  );
};

export default UserCard;
