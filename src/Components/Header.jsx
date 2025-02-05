import React from 'react'
import image from "../assets/brixs.svg";


const Header = () => {
  return (
    <div>    <div className="flex justify-around lg:gap-60 mt-6 items-center space-x-4">
                        <div className="flex space-x-4">
                            <img src={image} alt="image" className="w-7" />
                        <h1 className="font-extrabold text-2xl">
                            brix <span className="text-blue-600">templates</span>
                        </h1>
                        </div>
                        <button
                            className="bg-blue-700 text-white
             px-6 py-2 rounded-3xl text-sm
             cursor-pointer border-2 border-blue-700 hover:bg-slate-700 hover:text-white
             transition duration-200 ease-in-out "
                        >
                            Clone now
                        </button>
                    </div></div>
  )
}

export default Header;