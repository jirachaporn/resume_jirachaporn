import React from "react";

function Languages() {
  return (
    <div className="w-full mt-6">
      <h2 className="text-lg xs:text-xl font-bold border-b border-gray-600 pb-2">
        LANGUAGES
        <div className="border-b-4 border-white mt-1"></div>
      </h2>
      <div className="">
        <ul className="ml-5 list-disc text-sm xs:text-base">
          <li>Thai (Native)</li>
          <li className="">English (Basics)</li>
        </ul>
      </div>
    </div>
  );
}

export default Languages;
