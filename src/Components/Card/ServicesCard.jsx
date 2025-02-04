import React from "react";

const ServicesCard = ({ photo, title ,index, selected, onSelect }) => {
	return (
        <>
		  <div
      onClick={() => onSelect(index)}
      className={`w-full max-w-sm p-6 border shadow-sm rounded-3xl sm:w-full md:w-1/2 lg:w-[284px] lg:h-[114px] cursor-pointer transition-all duration-300 ${
        selected ? "border-2  border-blue-700 " : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center gap-4">
        <img src={photo} alt={title} className="w-12 h-12 object-cover" />
        <h2 className="text-lg font-semibold lg:text-xl">{title}</h2>
      </div>
    </div>
 
       
        </>
	);
};

export default ServicesCard;
