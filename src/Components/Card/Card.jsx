import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Card = ({ image, title, btnClr, cardBgClr,textClr }) => {
	return (
		<div
			style={{ backgroundColor: cardBgClr }}
			className="w-full  p-6 lg:p-12 border border-gray-600 bg-[#f3f3f3] border-b-6 border-b-gray-900 rounded-4xl lg:w-[560px] lg:h-[310px] "
		>
			<h2 className="text-lg font-semibold bg-[#B9FF66] inline-block rounded-sm lg:text-3xl">
				{title}
			</h2>
			<div className="flex justify-between items-center mt-4">
				<div className="mt-12 w-full flex items-center lg:flex lg:items-center lg:gap-4">
					<button
						style={{ backgroundColor: btnClr, color:textClr }}
						className="mt-4 border p-1 text-xl text-white rounded-4xl hover:bg-gray-600 focus:outline-none lg:text-4xl"
					>
						<MdOutlineArrowOutward />
					</button>
					<div className="hidden lg:block text-3xl lg:mt-4" style={{color:textClr}}>Learn more</div>
				</div>
				<div>
					<img
						src={image}
						alt={title}
						className="w-32 lg:w-82 lg:-mt-[5px] "
					/>
				</div>
			</div>
		</div>
	);
};

export default Card;
