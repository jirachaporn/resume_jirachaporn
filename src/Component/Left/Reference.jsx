import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Reference  () {
  return (
    <div className="w-full mt-6">
        <h2 className="text-lg font-bold border-b border-gray-600 pb-2">
            REFERENCE
            <div className="border-b-4 border-white mt-1"></div>
        </h2>
        <p className="font-bold ">Kritsana Treechalong</p>
        <p className="mb-2" >Project's Adviser, Computer Science
            Department, Faculty of Art and Sciences,
            Kasetsart University, Kamphaeng Saen
            Campus
        </p>

        <div className="flex flex-col items-start">
            <div className="flex items-center mb-2">
                <MdEmail size={20} />
                <p className="ml-3">kritsana.tre@ku.th</p>
            </div>
            <div className="flex items-center mb-2">
                <IoCall size={20} />
                <p className="ml-3">082-202-2512</p>
            </div>
        </div>  
    </div>
    );
};

export default Reference  ;