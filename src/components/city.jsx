import React, {useState} from "react";
import {data} from './citydata'
import { BsPeople } from 'react-icons/bs'
import { MdOutlineBed } from 'react-icons/md';
import { TbBed } from "react-icons/tb";




const City = () => {
  const [cityData, setCityData]=useState(data)
 return (
   <div className="max-w-[1640px]">
     <div className="relative top-[130px]">
       <div className="ml-5 px-14">
         <h2 className=" text-center font-medium text-2xl pb-6">
           Entire city of your choice
         </h2>
         <div className="grid grid-cols-4 gap-6 ">
           {cityData.map((item, index) => (
             <div key={index}>
               <img src={item.image} className="w-[90%] rounded-md h-[150px]" />
               <div className="flex flex-col items-start justify-center mt-3">
                 <h2 className="font-[600] pb-[1px] text-[15px]">
                   {item.name}
                 </h2>
                 <h2 className="font-[600] pb-[1px] text-[15px]">
                   {item.location}
                 </h2>
                 <p className="flex items-center justify-center pb-[1px]">
                   <p className="flex items-center justify-center mr-2">
                     <BsPeople />
                     <span className=" text-[11px]">{item.numberPeople}</span>
                   </p>
                   <span className="flex items-center justify-center mr-2">
                     <TbBed />
                     <span className=" text-[11px]">{item.room1}</span>
                   </span>
                   <span className="flex pb-[1px] items-center justify-center">
                     <MdOutlineBed />
                     <span className=" text-[11px]">{item.room2}</span>
                   </span>
                 </p>
                 <p>
                   <span className=" text-blue-600  text-[12px]">
                     {item.fromPrice}
                   </span>{" "}
                   to{" "}
                   <span className=" text-blue-600 text-[12px]">
                     {item.toPrice}
                   </span>
                 </p>
               </div>
             </div>
           ))}
         </div>
         <div className="absolute left-[3%] right-0 rounded-md md:top-[45%] lg:top-[50%] bg-blue-400/30 w-[93%] h-[200px]"></div>
       </div>
     </div>
   </div>
 );
};

export default City;
