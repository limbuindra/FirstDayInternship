import React from "react";

const BudgetCard = ({ range, isSelected, onSelect,selected }) => {
  return (
    <div
      className={`w-full p-8 lg:px-10 lg:py-10 border shadow-xl rounded-4xl lg:w-[284px] lg:h-[114px] ${
        selected ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center gap-6 cursor-pointer">
        <input
          type="radio"
          name="rangeOption"
          id={range} 
          className="form-radio h-5 w-5 text-blue-600"
          checked={isSelected}
          onChange={onSelect}
        />
        <h2 className="text-md font-semibold lg:text-xl">{range}</h2>
      </div>
    </div>
  );
};

export default BudgetCard;
