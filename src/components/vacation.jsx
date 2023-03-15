import React from 'react'
import {BiSwim} from 'react-icons/bi'
import { BsPencil } from "react-icons/bs"
import {AiOutlineSearch, AiOutlineWifi} from 'react-icons/ai'
import { MdDinnerDining, MdVerified } from "react-icons/md"
import mainbeach from '../images/mainbeach.jpg'

const Vacation=()=>{
    return (
      <div className="max-w-[1640px] mx-auto px-4">
        <div className="relative">
          <div className="relative z-0">
            <img
              className="max-h-[300px] w-full z-0 object-cover"
              src={mainbeach}
              alt="/"
            />
            <div className="absolute left-10 top-[5%] text-start">
              <p className="font-medium text-3xl">
                Enjoy Your <span className="block">Dream Vacation</span>
              </p>
              <p className="font-light max-w-[400px] text-md">
                We give you more of what you need and less of what you don't
                need
              </p>
            </div>
          </div>

          <div className="absolute p-4 top-[80%] z-10 bg-white left-[5%] w-[90%] max-h-[250px] border rounded-md shadow-lg">
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-between items-center">
                <div className="flex justify-between mb-7 ">
                  <p className=" font-medium">Facilities</p>
                  <button className="w-full font-medium h-full px-1 text-red-600 bg-orange-300 m-auto rounded-sm ml-11 text-[10px]">
                    See more
                  </button>
                </div>
                <div className="w-full h-full flex justify-start items-start">
                  <div className="mr-3  flex flex-col items-center justify-center">
                    <BiSwim
                      size={17}
                      className=" text-blue-400 justify-center  border shadow-md mx-auto"
                    />
                    <p className=" text-[0.5rem] mx-auto align-middle">
                      Swimming
                    </p>
                  </div>
                  <div className="w-full mr-3 flex flex-col items-center justify-center">
                    <AiOutlineWifi
                      size={17}
                      className=" text-red-600 border shadow-md mx-auto"
                    />
                    <p className=" text-[0.5rem] mx-auto align-top">Wi-Fi</p>
                  </div>
                  <div className="w-full mr-3 flex flex-col items-center justify-center">
                    <MdDinnerDining
                      size={17}
                      className="text-orange-500 border shadow-md mx-auto"
                    />
                    <p className=" text-[0.5rem] mx-auto align-top">Dinner</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="pb-2 font-medium text-[13px]">Hotel for you</p>
                <p className=" pb-2 text-blue-400 text-[13px]">
                  5 Days, Nights
                </p>
                <button className=" pb-2 flex justify-center items-center text-[10px] border rounded-sm p-1 border-black">
                  <MdVerified size={13} className="mr-3 text-blue-700" />
                  <span>USD $506.00</span>
                </button>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center text-[12px] text-blue-400 mb-12">
                  <p>150 Result</p>
                  <div className="flex justify-center items-center ml-12 cursor-pointer">
                    <BsPencil size={17} className="mr-2" />
                    <AiOutlineSearch size={17} className="cursor-pointer" />
                  </div>
                </div>
                <div className="flex justify-center items-center p-2 w-full h-full">
                  <img
                    className="w-[20px] rounded-full mr-2 h-full object-cover"
                    src={mainbeach}
                    alt="/"
                  />
                  <img
                    className="w-[20px] rounded-full mr-2 h-full object-cover"
                    src={mainbeach}
                    alt="/"
                  />
                  <img
                    className="w-[20px] rounded-full mr-2 h-full object-cover"
                    src={mainbeach}
                    alt="/"
                  />
                  <img
                    className="w-[20px] rounded-full mr-2 h-full object-cover"
                    src={mainbeach}
                    alt="/"
                  />
                  <img
                    className="w-[20px] rounded-full mr-2 h-full object-cover"
                    src={mainbeach}
                    alt="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Vacation