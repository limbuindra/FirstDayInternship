import React, { useState } from "react";

const Card = ({ image, title, release_date }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	const handleFavourite = () => {
		alert("clicked");
	};

	return (
		<div className="relative bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-64 md:w-80">
			<div className="relative group">
				<img
					className="w-full h-70 object-fit group-hover:scale-100 transition-transform duration-300"
					src={image}
					alt={title}
				/>
				<div className="absolute top-0 right-0 bg-gradient-to-t  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between p-4">
					<button
						onClick={handleFavourite}
						className={`text-red-500 text-2xl p-2 bg-black/60 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 hover:bg-black/70 `}
					>
						♥
					</button>
				</div>
			</div>

			<div className="p-6">
				<h3 className="text-xl font-semibold text-white truncate">{title}</h3>
				<p className="text-sm text-gray-400">{release_date}</p>

				<div className="mt-4 flex items-center space-x-2">
					<button className="text-white bg-[#fe2d3f] py-1 px-4 rounded-lg hover:bg-[#e84118] transition-colors duration-200 text-sm">
						Rate
					</button>
					<button className="text-white border border-[#ff4757] py-1 px-4 rounded-lg hover:bg-[#ff4757] hover:text-white transition-colors duration-200 text-sm">
						Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
