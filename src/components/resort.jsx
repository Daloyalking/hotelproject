import React from "react";
import { MdOutlineWbSunny, MdPool } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaUmbrellaBeach } from "react-icons/fa";
import mainbeach from "../images/mainbeach.jpg"
import beachpart from "../images/beachpart.jpg";
const Resort=()=>{
    return (
      <div className="max-w-[1640px] w-full">
        <div className="relative  w-[90%]">
          <div className="absolute top-[250px] flex w-full mx-[5%]">
            <div className="w-full flex flex-col text-xl">
              <h2 className="text-3xl font-semibold">Resort Surprises</h2>
              <p className="text-[15px] pt-2 ">
                It has a variety of room types to select from.
              </p>
              <p className="text-[15px] w-[70%]">
                The standard room, deluxe room, executive suite & the
                presidential suite
              </p>
              <div className="flex flex-col mt-6">
                <p className="flex items-center">
                  <MdPool
                    size={20}
                    className=" bg-blue-500/80 rounded-full text-blue-800 p-1 mr-2"
                  />
                  <span className="text-[15px]">Infinity Pool</span>
                </p>
                <p className="flex items-center">
                  <FaUmbrellaBeach
                    size={20}
                    className=" bg-blue-500/80 rounded-full text-blue-800 p-1 mr-2"
                  />{" "}
                  <span className="text-[15px]">The Beach</span>
                </p>
                <p className="flex items-center">
                  <FaUmbrellaBeach
                    size={20}
                    className=" bg-blue-500/80 rounded-full text-blue-800 p-1 mr-2"
                  />{" "}
                  <span className="text-[15px]">The Beach</span>
                </p>
                <p className="flex items-center">
                  <MdOutlineWbSunny
                    size={20}
                    className=" bg-blue-500/80 rounded-full text-blue-800 p-1 mr-2"
                  />
                  <span className="text-[15px]">Beach Activities</span>
                </p>
              </div>
            </div>

            <div className="w-full flex  flex-col px-6">
              <div className="relative">
                <img
                  src={beachpart}
                  className="w-full mb-3 h-[300px] rounded-md"
                />
                <div className="absolute top-[50%] left-[50%] p-2 cursor-pointer bg-gray-600 border rounded-full border-white">
                  <AiOutlineArrowRight className="text-white " size={20} />
                </div>
              </div>
              <div className="p-2 w-full h-full relative">
                <div className="">
                  <div className="flex justify-center items-center">
                    <img
                      className="w-[30px] rounded-full mr-2 h-full object-cover"
                      src={mainbeach}
                      alt="/"
                    />
                    <img
                      className="w-[30px] rounded-full mr-2 h-full object-cover"
                      src={mainbeach}
                      alt="/"
                    />
                    <img
                      className="w-[30px] rounded-full mr-2 h-full object-cover"
                      src={mainbeach}
                      alt="/"
                    />
                    <img
                      className="w-[30px] rounded-full mr-2 h-full object-cover"
                      src={mainbeach}
                      alt="/"
                    />
                    <img
                      className="w-[20px] rounded-full mr-2 h-full object-cover"
                      src={mainbeach}
                      alt="/"
                    />
                  </div>
                  <p className="text-center pt-2 font-semibold text-xl">Play your favorite</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-blue-400/30 w-[53%] rounded-md h-[180px] right-[-6%] top-[450px]"></div>
        </div>
      </div>
    );
}

export default Resort