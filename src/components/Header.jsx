import React from 'react'

const Header=()=>{
    return (
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Hotel <span className="text-red-400">De'Luna</span>
          </h1>
          <div className="flex items-center">
            <p className="mr-4 font-medium hover:bg-slate-600 hover:text-white p-2 rounded-md duration-30">
              <a>Home</a>
            </p>
            <p className="mr-4 font-medium hover:bg-slate-600 hover:text-white p-2 rounded-md duration-30">
              <a>About</a>
            </p>
            <p className="mr-4 font-medium hover:bg-slate-600 hover:text-white p-2 rounded-md duration-30">
              <a>Types of House</a>
            </p>
            <p className="mr-4 font-medium hover:bg-slate-600 hover:text-white p-2 rounded-md duration-300">
              <a>Contact</a>
            </p>
            <button className="border p-2 font-medium border-black rounded-md duration-30 hover:bg-slate-600 hover:text-white">
              Login
            </button>
          </div>
        </div>
      </div>
    );
}

export default Header