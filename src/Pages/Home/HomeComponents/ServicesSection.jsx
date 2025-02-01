import React from "react";
import { Data } from "../../../data/data";
import Card from "../../../Components/Card/Card";

const ServicesSection = () => {
	return (
		<>
			<div className="max-w-screen-xl mx-auto px-4 lg:px-8">
				<div className="mt-8 text-center justify-center rounded-xl lg:flex lg:justify-start lg:gap-8 lg:mt-36">
					<h1 className="text-2xl lg:text-4xl bg-[#B9FF66] py-1 px-2 rounded-xl lg:font-semibold inline-block">
						Services
					</h1>
					<p className="text-center mt-4 text-sm lg:mt-0 lg:text-xl">
						<p>
							At our digital marketing agency, we offer a range of services to
						</p>
						<p>
							help businesses grow and succeed online. These services include:
						</p>
					</p>
				</div>
			</div>

			<div className="max-w-screen-xl mx-auto px-4 lg:px-8 lg:mt-24">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-12 mt-8">
					{Data.map((item, index) => (
						<Card
							key={index}
							title={item.title}
							image={item.image}
							textbg={item.textbg}
							btnClr={item.btnClr}
							Clr={item.Clr}
							cardBgClr={item.cardBgClr}
							textClr={item.textClr}
						/>
					))}
				</div>
			</div>
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 relative">
				<div className="rounded-4xl mt-10 p-6 lg:p-10 lg:flex lg:h-[350px] bg-[#f3f3f3] lg:items-center lg:space-x-30 lg:justify-between lg:mt-30">
					<div className="mt-4 lg:p-6 lg:space-y-6">
						<h3 className="text-lg font-semibold text-gray-800 lg:text-3xl">
							Let's make things happen
						</h3>
						<p className="text-sm lg:text-xl">
							Contact us today to learn more about how our digital <br />
							marketing services can help your business grow and <br /> succeed
							online.
						</p>
						<button className="mt-2 border p-4 lg:px-8 lg:py-4 rounded-xl hover:bg-gray-600 focus:outline-none bg-black text-white lg:text-xl">
							Get your free proposal
						</button>
					</div>
					<div className="hidden lg:inline absolute right-[5px]">
						<img src="src/assets/Card/image1.png" alt="img" />
					</div>
				</div>
			</div>
		</>
	);
};

export default ServicesSection;
