import React from "react"; 

import Profile from "./Right/Profile";
import Name from "./Right/Name";
import Experience from "./Right/Experience";
import Education from "./Right/Education";


function Right() {

    return (
        <div className="w-full md:w-2/3 p-6">
            <Name/>
            <Profile/>
            <Education/>
            <Experience/>
        </div>
    );
};

export default Right;