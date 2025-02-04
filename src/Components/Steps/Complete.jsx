import React from "react";

const Complete = () => {
	return (
		<>
			<div className="lg:flex lg:flex-col lg:items-center flex flex-col items-center justify-center text-center">
				<img src="src/assets/submit.svg" alt="submit" className="" />
				<h1 className="lg:font-bold">Submit your quote request</h1>
				<div className="text-slate-500 lg:mt-4">
					<p>Please review all the information you previously typed in</p>
					<p> the past steps, and if all is okay, submit your message to </p>
					<p>receive a project quote in 24 - 48 hours.</p>
				</div>
				<button
					className="bg-blue-700 text-white
         px-6 py-2 rounded-3xl font-semibold 
         cursor-pointer border-2 border-blue-700 hover:bg-slate-700 hover:text-white
         transition duration-200 ease-in-out lg:mt-6"
				>
					Submit
				</button>
			</div>
		</>
	);
};

export default Complete;
