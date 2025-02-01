import React from "react";
import ServicesSection from "./HomeComponents/ServicesSection";
import CaseStudieSection from "./HomeComponents/CaseStudieSection";
import WorkingSection from "./HomeComponents/WorkingSection";
import TeamSection from "./HomeComponents/TeamSection";
import TestimonialsSection from "./HomeComponents/TestimonialsSection";
import ContactSection from "./HomeComponents/ContactSection";

const Home = () => {
	const logos = ["Vector", "dribble", "hubspot", "netflix", "notion", "zoom"];

	return (
		<>
			<div className="max-w-screen-xl mx-auto px-4 lg:px-9 lg:mt-18">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="order-1">
						<div className="text-3xl font-medium lg:font-bold lg:text-6xl text-center lg:text-left">
							<p className="space-y-3  text-left ">
								<span className="block">Navigating the </span>
								<span className="block">digital landscape </span>
								<span className="block">for success</span>
							</p>
						</div>
						<div className="lg:hidden mt-2">
							<img
								src="src/assets/image.png"
								alt="Digital Illustration"
								className="w-full"
							/>
						</div>
						<div className="mt-4 text-sm lg:text-xl lg:mt-9 text-center lg:text-left">
							<p>
								Our digital marketing agency helps businesses <br /> grow and
								succeed online with a range of <br /> services including SEO,
								PPC, social media marketing, <br /> and content creation.
							</p>
						</div>
						<div className="mt-4 flex justify-center lg:justify-start">
							<button className="bg-[#191A23] text-white px-6 lg:rounded-2xl py-2 rounded-xl lg:mt-6 lg:text-xl lg:py-5 lg:px-12 w-full lg:w-auto">
								Book a consultation
							</button>
						</div>
					</div>

					<div className="hidden lg:block order-2 lg:order-2 lg:w-[601px]">
						<img
							src="src/assets/image.png"
							alt="Digital Illustration"
							className="w-full"
						/>
					</div>
				</div>
			</div>

			<div className="overflow-hidden whitespace-nowrap mt-6 py-4">
				<div className="inline-block animate-marquee">
					{logos.map((logo, index) => (
						<img
							key={index}
							src={`src/assets/${logo}.png`}
							alt={logo}
							className="w-16 lg:w-30 filter grayscale-100 mx-8 inline-block"
						/>
					))}
				</div>
			</div>

			<ServicesSection />

			<CaseStudieSection />

			<WorkingSection />
			<TeamSection />

			<TestimonialsSection />

			<ContactSection />
		</>
	);
};

export default Home;
