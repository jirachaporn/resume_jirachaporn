import React from "react";
import Profile from "../../assets/Profile.jpg";

function ProfileImage() {
  return (
    <div className="flex justify-center items-center w-full"> 
      <img
        src={Profile}
        alt="Profile"
        className="w-60 h-auto xs:w-48 xs:h-48 border-4 border-white mt-10
                   xs:rounded-full rounded-md object-cover "
      />
    </div>
  );
}

export default ProfileImage;
