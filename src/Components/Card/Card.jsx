import React from "react";
import { TiArrowForwardOutline } from "react-icons/ti";

const Card = ({ image, title }) => {
	return (
		<div className="max-w-sm rounded-3xl p-6 border border-gray-300 bg-[#f3f3f3] border-b-4 border-b-gray-900">
			<h2 className="text-lg font-semibold bg-[#B9FF66] text-gray-800">
				{title}
			</h2>
			<div className="flex justify-between items-center mt-4">
				<div className="mt-8 w-full flex items-center ">
					<button className="mt-4 border p-1 text-xl rounded-4xl hover:bg-gray-600 focus:outline-none">
						<TiArrowForwardOutline />
					</button>
					<div className="">Learn more</div>
				</div>
				<div>
					<img src={image} alt={title} className="w-32" />
				</div>
			</div>
		</div>
	);
};

export default Card;
