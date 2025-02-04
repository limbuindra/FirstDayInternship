import React from "react";
import image from "../assets/brixs.svg";

const Footer = () => {
	return (
		<div>
			<div className="flex justify-around mt-6 items-center space-x-4 lg:border-t border-slate-200 lg:pt-14 lg:m-6">
				<div>

                <div className="flex space-x-4">
					<img src={image} alt="image" className="w-7" />
					<h1 className="font-extrabold text-xl">
						brix <span className="text-blue-600">templates</span>
					</h1>
				</div>
				<p className="text-xs text-slate-700 lg:mt-2">Copyright © 2021 BRIX Templates | All Rights Reserved</p>
                </div>
				<div className="shadow-lg border border-gray-200 rounded-4xl lg:p-2">
					<input type="text" placeholder="Enter your email" className="pl-4 focus:outline-none"/>
					<button
						className="bg-blue-700 text-white
                    px-6 py-2 rounded-3xl text-sm
                    cursor-pointer border-2 border-blue-700 hover:bg-slate-700 hover:text-white
                    transition duration-200 ease-in-out "
					>
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
