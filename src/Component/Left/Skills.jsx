import React from "react";

function Skills() {
  return (
    <div className="w-full mt-6">
      <h2 className="text-lg xs:text-xl font-bold border-b border-gray-600 pb-2">
        SKILLS
        <div className="border-b-4 border-white mt-1"></div>
      </h2>

      <div className="mt-4">
        <ul className="ml-5 list-disc text-sm xs:text-base">
          <li className="font-semibold">Programming Languages</li>
            <p>Python, HTML, CSS, Java, C, Javascript, TypeScript, Dart</p>

          <li className="mt-5 font-semibold">Frameworks & Libraries</li>
          <p>
            React, Angular, Node.js, Bootstrap 5, Tailwind CSS, Flutter
          </p>

          <li className="mt-5 font-semibold">Tools & Platforms</li>
          <p>
            GitHub, MySQL, Figma, Draw.io, Unity, Android Studio, 
            Weka (Basic), Postman, MongoDB 
          </p>

        </ul>
      </div>
    </div>
  );
}

export default Skills;
