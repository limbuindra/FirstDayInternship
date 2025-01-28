import React from "react";

const TeamsCard = ({ photo, name, designation, work }) => {
	return (
        <>
		<div className="w-full p-8 lg:px-10 lg:py-8 border border-gray-800  border-b-6 border-b-gray-900 rounded-4xl lg:w-[385px] lg:h-[331px]">
			<div className="flex items-center  gap-6">
				<img src={photo} alt={name} className=" object-cover" />
				<div className="mt-">
					<h2 className="text-lg font-semibold  rounded-sm lg:text-xl">
						{name}
					</h2>
					<p className="text-sm text-gray-700 lg:text-lg">{designation}</p>
				</div>
				<img src="src/assets/Social.png" className="lg:-mt-[70px] -mt-[70px]" />
			</div>

			<hr className="my-4 border border-slate-900" />

			<div>
				<p className="text-sm lg:text-lg lg:mt-8 text-gray-800">{work}</p>
			</div>
		</div>
       
        </>
	);
};

export default TeamsCard;
