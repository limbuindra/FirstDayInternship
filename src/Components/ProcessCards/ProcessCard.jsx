import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";

const ProcessCard = ({ id, title, content }) => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleContent = () => setIsVisible((toggle) => !toggle);

	return (
        <>
		  <div
      className={`w-full p-6 lg:p-14 border border-gray-600 ${
        isVisible ? "bg-[#B9FF66]" : "bg-[#f3f3f3]"
      } border-b-6 border-b-gray-900 rounded-4xl transition-all duration-200`}
    >
			<div className="flex items-center justify-between ">

            <div className="flex items-center justify-center  space-x-6 ">
				<h1 className="lg:text-6xl text-3xl font-semibold lg:font-semibold">{id}</h1>
				<h2 className="text-lg font-semibold rounded-sm lg:text-3xl">
					{title}
				</h2>
			</div>
			<div className="divide-x">
				<button
					onClick={toggleContent}
					className="mt-4 border p-1 text-xl rounded-4xl  lg:text-4xl"
				>
					{isVisible ? <FaMinus/> : <IoAddOutline />}
				</button>
			</div>

            </div>
			{isVisible && (
                <>
                <hr className="my-4 border-gray-900 lg:mt-10" />
                <div className="mt-8 lg:text-xl ">
					<p>{content}</p>
				</div>
                </>
			)}
		</div>
        </>
	);
};

export default ProcessCard;
