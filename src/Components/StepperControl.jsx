import React from "react";

const StepperControl = ({ handleClick, steps, currentStep }) => {
  return (
    <>
      <div className="container flex justify-center items-center lg:gap-60 mt-4 mb-8">
        <button
          onClick={() => handleClick("previous")}
          className={`bg-white text-blue-400
            px-4 py-2 rounded-3xl font-semibold 
            cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white
            transition duration-200 ease-in-out ${
              currentStep === 1 ? " opacity-50 cursor-not-allowed" : "block"
            }`}
          disabled={currentStep === 1}
        >
          Previous Step
        </button>

        <button
          onClick={() => handleClick("next")}
          className="bg-blue-500 text-white
            px-6 py-2 rounded-3xl font-semibold 
            cursor-pointer border-2 border-blue-300 hover:bg-slate-700 hover:text-white
            transition duration-200 ease-in-out text-end"
        >
          Next step
          {/* {currentStep === steps.length - 1 ? "Confirm" : "Next Step"} */}
        </button>
      </div>
    </>
  );
};

export default StepperControl;
