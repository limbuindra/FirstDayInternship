import React from "react";
import Card from "../../Components/Card/Card";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Data } from "../../data/data";

const Home = () => {
	const logos = ["Vector", "dribble", "hubspot", "netflix", "notion", "zoom"];
	const caseStudies = [
		{
			content:
				"For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
		},
		{
			content:
				"For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
		},
		{
			content:
				"For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
		},
	];
	return (
		<div className=" p-6 flex items-center justify-center flex-col lg:px-34 lg:justify-center lg:mt-12">
			<div className="grid lg:grid-cols-2 gap-8 items-center max-w-screen-xl mx-auto">
				<div className="order-1">
					<div className="text-4xl font-medium lg:text-6xl">
						<p className="space-y-5">
							<span className="lg:block">Navigating the </span>
							<span className="lg:block">digital landscape </span>
							<span className="lg:block">for success</span>
						</p>
					</div>
					<div className="mt-6 lg:text-xl lg:mt-8">
						<p>
							Our digital marketing agency helps businesses grow and succeed
							online with a range of services including SEO, PPC, social media
							marketing, and content creation.
						</p>
					</div>
					<div className="mt-6">
						<button className="bg-[#191A23] text-white px-20 py-4 rounded-xl lg:mt-6 lg:text-xl lg:py-6 lg:px-10">
							Book a consultation
						</button>
					</div>
				</div>

				<div className="order-2 lg:order-2 lg:w-[600px] w-[300px]">
					<img
						src="src/assets/illustration.png"
						alt="Digital Illustration"
						className="w-full"
					/>
				</div>
			</div>

			<div className="flex flex-wrap mt-24 justify-center lg:gap-22 items-center gap-5">
				{logos.map((logo) => (
					<div key={logo}>
						<img src={`src/assets/${logo}.png`} alt={logo} />
					</div>
				))}
			</div>

			<div className="mt-10 text-center justify-center rounded-xl lg:flex lg:gap-8 lg:mt-36 max-w-screen-xl mx-auto">
				<h1 className="text-4xl lg:py-1 bg-[#B9FF66] py-1 px-2 rounded-xl lg:font-semibold lg:text-5xl inline-block text-center">
					Services
				</h1>
				<p className="text-center mt-6 text-sm lg:mt-0 lg:text-xl ">
					At our digital marketing agency, we offer a range of services to help
					businesses grow and succeed online. These services include:
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-0 lg:gap-12 mt-10 max-w-screen-xl mx-auto">
				{Data.map((item, index) => (
					<Card
						key={index}
						title={item.title}
						image={item.image}
						btnClr={item.btnClr}
						cardBgClr={item.cardBgClr}
						textClr={item.textClr}
					/>
				))}
			</div>

			<div className="rounded-4xl mt-10 p-6 lg:flex lg:w-full lg:h-[500px] bg-[#f3f3f3] lg:items-center lg:justify-between lg:mt-20">
				<div className="mt-4 lg:p-6 lg:space-y-6 text-center">
					<h3 className="text-lg font-semibold text-gray-800 lg:text-3xl ">
						Let's make things happen
					</h3>
					<p className="text-xl">
						Contact us today to learn more about how our digital <br />
						marketing services can help your business grow and <br /> succeed
						online.
					</p>
					<button className="mt-4 border p-4 lg:px-8 lg:py-4 rounded-xl hover:bg-gray-600 focus:outline-none bg-black text-white lg:text-xl">
						Get your free proposal
					</button>
				</div>
				<div className="hidden lg:inline lg:w-[500px] lg:-mt-[60px]">
					<img src="src/assets/Card/image1.png" alt="img" />
				</div>
			</div>

			<div>
				<div className="mt-10 justify-center rounded-xl lg:flex lg:gap-8 lg:mt-36 text-center">
					<h1 className="text-4xl lg:py-1 bg-[#B9FF66] py-1 px-2 rounded-xl lg:font-semibold lg:text-5xl inline-block">
						Case Studies
					</h1>
					<p className="text-center mt-6 text-sm lg:mt-0 lg:text-xl lg:text-left">
						Explore Real-Life Examples of Our Proven Digital Marketing <br />
						Success through Our Case Studies
					</p>
				</div>
				<section className="max-w-3xl rounded-4xl p-8 text-white  mt-6 ">
					<div className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide m-10">
						{caseStudies.map((item, index) => (
							<div
								key={index}
								className="min-w-[45%] lg:min-w-[30%] p-4 bg-[#292A33] rounded-4xl"
							>
								<p>{item.content}</p>
								<div className="mt-4 flex items-center gap-2 cursor-pointer text-[#B9FF66]">
									<span>Learn more</span>
									<MdOutlineArrowOutward />
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
