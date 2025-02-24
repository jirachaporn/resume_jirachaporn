import React from "react";
import Profile from "../assets/Profile.jpg";  
import Contact from "./Left/contact ";
import Skills from "./Left/Skills";
import Languages from "./Left/Languages";
import Reference from "./Left/Reference";
import ProfileImage from "./Left/ProfileImage";

function Left() {
  return (

    <div className="bg-[#545454] text-white w-full xs:w-1/3 p-6 flex flex-col items-center justify-around">
        <ProfileImage />
        <Contact />
        <Skills />
        <Languages />
        <Reference />
    </div>
    );
};

export default Left;