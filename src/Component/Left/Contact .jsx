import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";

function Contact() {
  return (
    <div className="w-full mt-10">
      <h2 className="text-lg font-bold border-b border-gray-600 pb-2">
        CONTACT
        <div className="border-b-4 border-white mt-1"></div>
      </h2>

      
        <div className="flex flex-col items-start mt-5">
            <div className="flex items-center mb-3">
                <IoCall size={20} />
                <p className="ml-3">096-825-3588</p>
            </div>
            <div className="flex items-center mb-3">
                <MdEmail size={20} />
                <p className="ml-3">jirachaporn.p@gmail.com</p>
            </div>
            <div className="flex items-center mb-3">
                <HiMapPin size={40} />
                <p className="ml-3">
                    407/2 Village No.1 Tha Yang,
                    Tha Yang, Phetchaburi 76130
                    Thailand
                </p>
            </div>
            <div className="flex items-center">
                <IoLogoGithub size={20} />
                <a href="https://github.com/jirachaporn" className="ml-3 "> https://github.com/jirachaporn </a>
            </div>
        </div>
      
    </div>
  );
}

export default Contact;
