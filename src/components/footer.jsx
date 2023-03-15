import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiOutlineWhatsApp,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="max-w-[1640px]">
      <div className="relative w-full h-full top-[900px] bg-blue-400/30">
        <div className="w-[100%] py-8 px-1 mx-auto border-b-2 border-black flex justify-between items-center">
          <div>
            <div className="flex flex-col px-10 w-[500px] mb-[16px] mr-2">
              <h2 className=" font-serif text-2xl mb-4">HOTEL DE'LUNA</h2>
              <p className="text-[13px] font-semibold mb-4">
                We'll make your stay with us a lifetime experience, your meets a
                pathway to success & your celebrations an affair to reckon with
              </p>
              <div className="flex border border-black/25 w-[280px]">
                <input
                  className="px-2 py-1 outline-none"
                  type="text"
                  placeholder="Enter your Email"
                />
                <span className=" cursor-pointer text-white bg-blue-600 w-full text-center">
                  Subscribe
                </span>
              </div>
              <div className="mt-5 flex">
                <BsFacebook className="mr-2 mt-2 cursor-pointer" size={20} />
                <AiOutlineWhatsApp
                  className="mr-2 mt-2 cursor-pointer"
                  size={20}
                />
                <AiOutlineTwitter
                  className="mr-2 mt-2 cursor-pointer"
                  size={20}
                />
                <AiOutlineInstagram className="mt-2 cursor-pointer" size={20} />
              </div>
            </div>
          </div>
          <div className="w-full pl-2">
            <div className="flex flex-col">
              <h1 className="font-bold  mb-4">Links</h1>
              <p className="mb-4 font-semibold">Home</p>
              <p className="mb-4 font-semibold">About Us</p>
              <p className="mb-4 font-semibold">Service</p>
              <p className="mb-4 font-semibold">Blog</p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col mb-20">
              <h2 className="font-bold  mb-4">Resources</h2>
              <p className="mb-4 font-semibold">Our Work</p>
              <p className="mb-4 font-semibold">FAQ</p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col mb-12">
              <h2 className="font-bold  mb-4">Contact Us</h2>
              <p className="mb-4 font-semibold">+2348103573852</p>
              <p className="mb-4 font-semibold">hotelluna@gmail.com</p>
              <p className="mb-4 font-semibold">Paris</p>
            </div>
          </div>
        </div>

        <div className="w-[93%] mx-auto">
          <div className="flex justify-between">
            <h2 className="font-semibold py-3">Copyright@Hotel De'Luna</h2>
            <div className="flex justify-center items-center font-semibold">
              <p className="mr-6">
                <a>Privacy</a>
              </p>
              <p>Term of Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
