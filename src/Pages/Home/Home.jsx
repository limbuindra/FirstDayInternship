import React from "react";
import Card from "../../Components/Card/Card";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Data, Process, Teams } from "../../data/data";
import ProcessCard from "../../Components/ProcessCards/ProcessCard";
import TeamsCard from "../../Components/Teams/TeamsCard";

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
					<div className="lg:hidden mt-3 ">
						<img
							src="src/assets/illustration.png"
							alt="Digital Illustration"
							className="w-full"
						/>
					</div>
					<div className="mt-6 lg:text-xl lg:mt-9">
						<p>
							Our digital marketing agency helps businesses <br />
							grow and succeed online with a range of <br /> services including
							SEO, PPC, social media marketing, <br />
							and content creation.
						</p>
					</div>
					<div className="mt-6">
						<button className="bg-[#191A23] text-white px-20 py-4 rounded-xl lg:mt-6 lg:text-xl lg:py-6 lg:px-10">
							Book a consultation
						</button>
					</div>
				</div>

				<div className="hidden lg:block order-2 lg:order-2 lg:w-[600px] w-[300px]">
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

			<div className="container mx-auto mt-10 px-4 lg:px-0">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
			</div>

			<div className="rounded-4xl mt-10 p-10 lg:flex lg:w-full lg:h-[350px] bg-[#f3f3f3] lg:items-center lg:justify-between lg:mt-30">
				<div className="mt-4 lg:p-6 lg:space-y-6 ">
					<h3 className="text-lg font-semibold text-gray-800 lg:text-3xl ">
						Let's make things happen
					</h3>
					<p className="text-xl">
						Contact us today to learn more about how our digital <br />
						marketing services can help your business grow and <br /> succeed
						online.
					</p>
					<button className="mt-2 border p-4 lg:px-8 lg:py-4 rounded-xl hover:bg-gray-600 focus:outline-none bg-black text-white lg:text-xl">
						Get your free proposal
					</button>
				</div>
				<div className="hidden lg:inline ">
					<img src="src/assets/Card/image1.png" alt="img" />
				</div>
			</div>

			<div>
				<div className="mt-10 text-center justify-center lg:justify-start rounded-xl lg:flex lg:gap-8 lg:mt-36 max-w-screen-xl mx-auto">
					<h1 className="text-4xl lg:py-1 bg-[#B9FF66] py-1 px-2 rounded-xl lg:font-semibold lg:text-5xl inline-block text-center">
						Case Studies
					</h1>
					<p className="text-center mt-6 text-sm lg:mt-0 lg:text-xl ">
						Explore Real-Life Examples of Our Proven Digital Marketing <br />
						Success through Our Case Studies
					</p>
				</div>
				<section className="max-w-screen rounded-4xl p-4 text-white mt-6 lg:mt-20 lg:bg-[#191A23]">
					<div className="flex lg:flex-row lg:gap-0 gap-4 overflow-x-auto scroll-smooth scrollbar-hide lg:divide-x lg:divide-white">
						{caseStudies.map((item, index) => (
							<div
								key={index}
								className={`min-w-[80%] lg:min-w-0 lg:flex-1 lg:text-xl p-4 lg:p-20 bg-[#191A23] rounded-4xl lg:rounded-none`}
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

				<section>
					<div className="mt-10 text-center justify-center rounded-xl lg:flex lg:items-center lg:justify-start lg:gap-8 lg:mt-36 max-w-screen">
						<h1 className="text-3xl  bg-[#B9FF66] py-1 px-2 rounded-xl lg:font-semibold lg:text-4xl inline-block ">
							Our Working Process
						</h1>
						<p className="text-center mt-6 text-sm lg:mt-0 lg:text-xl ">
							Step-by-Step Guide to Achieving Your Business Goals
						</p>
					</div>
				</section>

				<section className="process">
					<div className="container mx-auto mt-10 px-4 lg:px-0">
						<div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12">
							{Process.map((item, index) => (
								<ProcessCard
									key={index}
									id={item.id}
									title={item.title}
									content={item.content}
								/>
							))}
						</div>
					</div>
				</section>
				<section className="team">
					<div className="mt-10 text-center justify-center rounded-xl lg:flex lg:items-center lg:justify-start lg:gap-8 lg:mt-36 max-w-screen">
						<h1 className="text-3xl  bg-[#B9FF66] py-1 px-2 rounded-xl lg:font-semibold lg:text-4xl inline-block ">
							Team
						</h1>
						<p className="text-center mt-6 text-sm lg:mt-0 lg:text-xl ">
							Meet the skilled and experienced team behind our successful
							digital marketing strategies
						</p>
					</div>

					<div className="container lg:mt-18 mx-auto mt-4 lg:px-0 p-4">
						<div className="flex flex-wrap gap-8">
							{Teams.map((item, index) => (
								<TeamsCard
									key={index}
									id={item.id}
									name={item.name}
									photo={item.photo}
									designation={item.designation}
									work={item.work}
								/>
							))}
						</div>
						<div className="bg-[#191A23] m-6 text-white px-20 text-center py-4 rounded-xl lg:mt-10 lg:text-xl lg:py-5  lg:px-16 lg:w-[269px] lg:ml-auto">
							<button>See all Team</button>
						</div>
					</div>
				</section>
				<section>
					<div className="mt-10 text-center justify-center rounded-xl lg:space-x-2 lg:flex lg:items-center lg:justify-start lg:gap-8 lg:mt-16 max-w-screen">
						<h2 className="text-3xl  bg-[#B9FF66] lg:px-2 lg:py-2  px-1 rounded-xl lg:font-medium lg:text-4xl inline-block ">
							Testimonials
						</h2>
						<p className="text-center mt-6 text-sm lg:mt-0 lg:text-xl ">
							Hear from Our Satisfied Clients: Read Our Testimonials <br />
							to Learn More about Our Digital Marketing Services
						</p>
					</div>
				</section>
				<section>
					<div className="m-4 rounded-4xl mt-10 p-10 lg:flex lg:w-full lg:h-[350px] bg-[#191A23] lg:items-center lg:justify-between lg:mt-20">
						<div className=""></div>
					</div>
				</section>
				<section>
					<div className="mt-10 text-center justify-center rounded-xl lg:space-x-2 lg:flex lg:items-center lg:justify-start lg:gap-8 lg:mt-16 max-w-screen">
						<h2 className="text-3xl  bg-[#B9FF66] lg:px-2 lg:py-2  px-1 rounded-xl lg:font-medium lg:text-4xl inline-block ">
							Contact Us
						</h2>
						<p className="text-center mt-6 text-sm lg:mt-0 lg:text-xl ">
							Connect with Us: Let's Discuss Your Digital Marketing Needs
						</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
