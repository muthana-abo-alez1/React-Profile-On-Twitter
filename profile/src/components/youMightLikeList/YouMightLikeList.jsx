import React from 'react'
import UserCard from '../userCard/UserCard';
import "./YouMightLikeList.scss"
const YouMightLikeList = () => {
    const users = [
        {
          id: 1,
          name: "Tailwind CSS",
          username: "tailwindCSS",
          profilePicture: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          isVerified: true,
          showFollowButton: true,
        },
        {
          id: 2,
          name: "TypeScript",
          username: "typescript",
          profilePicture: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
          isVerified: false,
          showFollowButton: true,
        },
        {
          id: 3,
          name: "freeCodeCamp.org",
          username: "freeCodeCamp",
          profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvr9ZDMt022X8FxZsBV2fKP53gTb7qGtL_Q&s",
          isVerified: true,
          showFollowButton: true,
        },
      ];
  return (
    <div className='YouMightLikeList'>
        <p className='title'>You might like</p>
        {users.map(user => (
        <UserCard
          key={user.id}
          name={user.name}
          username={user.username}
          profilePicture={user.profilePicture}
          isVerified={user.isVerified}
          showFollowButton={user.showFollowButton}
          isAdmin={user.isAdmin}
          hoverable={true}
        />
      ))}

        <a href="" className='show-more'>Show more</a>
    </div>
  )
}

export default YouMightLikeList