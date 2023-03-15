import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import beachhouse1 from "../images/beachhouse1.jpg";
import beachhouse2 from "../images/beachhouse2.jpg";
import beachhouse3 from "../images/beachhouse3.jpg";


const Reservation=()=>{
    return (
      <div className="max-w-[1640px] mx-2 w-[92%]">
        <div className="relative top-[800px] left-[4%]">
          <div className="flex">
            <div className="relative w-[50%]">
              <div className="absolute flex justify-center mx-[12%]">
                <diV className="rounded-md mr-4">
                  <img
                    className="left-0 w-[140px] object-cover rounded-md h-[200px]"
                    src={beachhouse1}
                  />
                </diV>
                <diV className="rounded-md mr-4">
                  <img
                    className="absolute left-[150px] top-[-30%] w-[140px] object-cover rounded-md h-[200px]"
                    src={beachhouse2}
                  />
                </diV>
                <diV className="rounded-md mr-4">
                  <img
                    className="absolute left-[300px] w-[140px] object-cover rounded-md h-[200px]"
                    src={beachhouse3}
                  />
                </diV>
              </div>
              <div className="absolute md:left-[39%] md:top-[50%] lg:left-[31%] lg:top-[60%] bg-white outline-none border p-2 shadow-md rounded-md w-[200px]">
                <p className="flex justify-between items-center border-b-2 border-black">
                  <span className=" font-medium">
                    Hotel <span className=' text-orange-500'>De'Luna</span>
                  </span>
                  <p className="flex justify-center items-center">
                    <AiOutlineHeart size={20} className=" text-red-600" />
                    <span className="font-medium">47</span>
                  </p>
                </p>
                <button className=" bg-orange-400/75 font-medium text-orange-700 px-1 mt-1 rounded-sm text-sm">
                  Learn More
                </button>
              </div>
            </div>

            <div className="w-[50%]">
              <div className="flex flex-col">
                <p className="text-[15px] text-red-500 font-medium mb-4">
                  Welcome to Hotel <span>De'Luna</span>
                </p>
                <p className="text-3xl mb-4 font-semibold">Relaxing Pleasure</p>
                <p className="text-[13px] font-semibold">
                  Nestled in heart of Paris, the hotel offers seamless to the
                  attractions of Paris. For your stay, explore our in-house
                  benefits with great values. Dine in our spectacular Royal
                  Restaurant to authentic cuisines, relax to exotic wines &
                  liquor at Royal Lounge and dance the night away at our lush
                  night club. Be it pleasure, business or family getaway, we
                  have a unique & spectacular offer for you. Come, give us the
                  honour to spoil you - just a little and you'll keep coming
                  back for more.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Reservation