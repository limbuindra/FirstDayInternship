import React from "react";

const BudgetCard = ({range}) => {
	return (
<div>
  <div className="w-full p-8 lg:px-10 lg:py-10 border border-gray-300 shadow-xl rounded-4xl lg:w-[284px] lg:h-[114px]">
    <div className="flex items-center gap-6">
      <input type="radio" name="rangeOption" id="range1" className="form-radio h-5 w-5 text-blue-600" />
      
      <div className="mt-">
        <h2 className="text-md font-semibold rounded-sm lg:text-xl">
          {range}
        </h2>
      </div>
    </div>
  </div>
</div>

	);
};

export default BudgetCard;
