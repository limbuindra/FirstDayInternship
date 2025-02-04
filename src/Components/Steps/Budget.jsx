import React from "react";
import { BudgetData } from "../Data/Data";
import BudgetCard from "../Card/BudgetCard";

const Budget = () => {
	return (
		<div>
			<div className="max-w-screen-xl mx-auto px-4 lg:px-8">
				<h1 className="font-semibold text-xl">What's your project budget?</h1>
				<p className="text-slate-500 text-sm">Please select which budget range you have in mind.</p>
				<div className="lg:mt-18 mt-4">
					<div className="grid lg:grid md:grid-cols-2 lg:grid-cols-2 gap-6">
						{BudgetData.map((item, index) => (
							<BudgetCard key={index} id={item.id} range={item.range} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Budget;
