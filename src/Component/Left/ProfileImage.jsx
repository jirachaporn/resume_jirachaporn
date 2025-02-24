import React from "react";
import Profile from "../../assets/Profile.jpg";

function ProfileImage() {
  return (
    <div className="flex justify-center items-center"> 
      <img
        src={Profile}
        alt="Profile"
        className="w-48 h-48 rounded-full border-8 border-white object-cover mt-10" 
      />
    </div>
  );
}

export default ProfileImage;
