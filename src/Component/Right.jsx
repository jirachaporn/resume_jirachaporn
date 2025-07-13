import React from "react"; 

import Profile from "./Right/Profile";
import Name from "./Right/Name";
import Experience from "./Right/Experience";
import Education from "./Right/Education";
import Project from "./Right/project";


function Right() {

    return (
        <div className="w-full xs:w-2/3 p-6">
            <Name/>
            <Profile/>
            <Education/>
            <Experience/>
            <Project/>

        </div>
    );
};

export default Right;