import React from "react";
import Card from "../../Components/Card/Card";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Data, Process, Teams, caseStudies } from "../../data/data";
import ProcessCard from "../../Components/ProcessCards/ProcessCard";
import TeamsCard from "../../Components/Teams/TeamsCard";
import Sliders from "../../Components/Slider/Sliders";

const Home = () => {
	const logos = ["Vector", "dribble", "hubspot", "netflix", "notion", "zoom"];

	return (
		<div className="">
			<div className="max-w-screen-xl mx-auto px-4 lg:px-8 lg:mt-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="order-1">
						<div className="text-3xl font-medium lg:text-6xl text-center lg:text-left">
							<p className="space-y-3  text-left ">
								<span className="block">Navigating the </span>
								<span className="block">digital landscape </span>
								<span className="block">for success</span>
							</p>
						</div>
						<div className="lg:hidden mt-6">
							<img
								src="src/assets/illustration.png"
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
							<button className="bg-[#191A23] text-white px-6 py-2 rounded-xl lg:mt-6 lg:text-xl lg:py-4 lg:px-10 w-full lg:w-auto">
								Book a consultation
							</button>
						</div>
					</div>

					<div className="hidden lg:block order-2 lg:order-2 lg:mt-6 lg:w-[600px]">
						<img
							src="src/assets/illustration.png"
							alt="Digital Illustration"
							className="w-full"
						/>
					</div>
				</div>
			</div>

			<div className="max-w-screen-xl mx-auto px-4 lg:px-8">
				<div className="flex flex-wrap md:grid-cols-4 lg:grid-cols-6 mt-12 justify-center lg:gap-24 items-center gap-4">
					{logos.map((logo) => (
						<div key={logo}>
							<img
								src={`src/assets/${logo}.png`}
								alt={logo}
								className="w-16 lg:w-30 filter grayscale-100"
							/>
						</div>
					))}
				</div>
			</div>

			<div className="max-w-screen-xl mx-auto px-4 lg:px-8">
				<div className="mt-8 text-center justify-center rounded-xl lg:flex lg:justify-start lg:gap-8 lg:mt-36">
					<h1 className="text-2xl lg:text-4xl bg-[#B9FF66] py-1 px-2 rounded-xl lg:font-semibold inline-block">
						Services
					</h1>
					<p className="text-center mt-4 text-sm lg:mt-0 lg:text-xl">
						At our digital marketing agency, we offer a range of services to{" "}
						<br /> help businesses grow and succeed online. These services
						include:
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
							btnClr={item.btnClr}
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

			<div className="max-w-screen-xl mx-auto px-4 lg:px-8">
				<div className="mt-8 text-center justify-center lg:justify-start rounded-xl lg:flex lg:gap-8 lg:mt-36">
					<h1 className="text-2xl lg:text-4xl bg-[#B9FF66] py-1 px-2 rounded-xl lg:font-semibold inline-block">
						Case Studies
					</h1>
					<p className="text-center mt-4 text-sm lg:mt-0 lg:text-xl ">
						<span className="block">
							Explore Real-Life Examples of Our Proven Digital Marketing
						</span>
						<span className="">Success through Our Case Studies</span>
					</p>
				</div>
				<section className="w-full rounded-2xl p-4 text-white mt-6 lg:mt-20 lg:bg-[#191A23]">
					<div className="flex lg:flex-row lg:gap-0 gap-4 overflow-x-auto scroll-smooth scrollbar-hide lg:divide-x lg:divide-white">
						{caseStudies.map((item, index) => (
							<div
								key={index}
								className={`min-w-[80%] lg:min-w-0 lg:flex-1 lg:text-xl p-4 lg:p-14 bg-[#191A23] rounded-2xl lg:rounded-none`}
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

			<div className="max-w-screen-xl mx-auto px-4 lg:px-8">
				<section>
					<div className="mt-8 text-center justify-center rounded-xl lg:flex lg:items-center lg:justify-start lg:gap-8 lg:mt-32">
						<h1 className="text-2xl lg:text-4xl bg-[#B9FF66] py-1 px-2 rounded-xl lg:font-semibold inline-block">
							Our Working Process
						</h1>
						<p className="text-center mt-4 text-sm lg:mt-0 lg:text-xl">
							Step-by-Step Guide to Achieving Your Business Goals
						</p>
					</div>
				</section>

				<section className="process">
					<div className="mt-18">
						<div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-12">
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
			</div>

			<div className="max-w-screen-xl mx-auto px-4 lg:px-8">
				<section className="team">
					<div className="mt-8 text-center justify-center rounded-xl lg:flex lg:items-center lg:justify-start lg:gap-8 lg:mt-36">
						<h1 className="text-2xl lg:text-4xl bg-[#B9FF66] py-1 px-2 rounded-xl lg:font-semibold inline-block">
							Team
						</h1>
						<p className="text-center mt-4 text-sm lg:mt-0 lg:text-xl">
							Meet the skilled and experienced team behind our successful
							digital marketing strategies
						</p>
					</div>

					<div className="lg:mt-18 mt-4">
						<div className="grid lg:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
						<div className="bg-[#191A23]  w-full mx-auto flex justify-center mt-6  text-md text-white px-6 py-4 rounded-xl lg:mt-10 lg:text-xl lg:py-5 lg:px-16 lg:w-[269px] lg:ml-auto">
							<button>See all Team</button>
						</div>
					</div>
				</section>
			</div>

			<div className="max-w-screen-xl mx-auto px-4 lg:px-8 lg:mt-6">
				<section>
					<div className="mt-8 text-center justify-center rounded-xl lg:space-x-2 lg:flex lg:items-center lg:justify-start lg:gap-8 lg:mt-16">
						<h2 className="text-2xl lg:text-4xl bg-[#B9FF66] lg:px-2 lg:py-2 px-1 rounded-xl lg:font-medium inline-block">
							Testimonials
						</h2>
						<p className="text-center mt-4 text-sm lg:mt-0 lg:text-xl">
							Hear from Our Satisfied Clients: Read Our Testimonials to Learn
							More about Our Digital Marketing Services
						</p>
					</div>
				</section>

				<section className="lg:mt-18 mt-14 p-4 ">
					<Sliders />
				</section>
			</div>

			{/* Contact Section */}
			<div className="max-w-screen-xl mx-auto px-4 lg:px-8">
				<section className="m-4">
					<div className="bg-white h-fit p-4 pt-20 ">
						<div className="mt-8 text-center justify-center rounded-xl lg:space-x-2 lg:flex lg:items-center lg:justify-start lg:gap-8 lg:mt-16">
							<h2 className="text-2xl lg:text-4xl bg-[#B9FF66] lg:px-2 lg:py-2 px-1 rounded-xl lg:font-medium inline-block">
								Contact us
							</h2>
							<p className="text-center mt-4 text-sm lg:mt-0 lg:text-xl">
								Connect with Us: Let's Discuss Your Digital Marketing Needs
							</p>
						</div>
						<div className="pt-[30px] lg:text-lg ">
							<div className="flex flex-row lg:flex-row lg:px-16 lg:py-10 bg-[#F3F3F3] relative max-w-[1240px] m-auto rounded-4xl  overflow-hidden">
								<div className="flex flex-col flex-1 p-6 lg:p-10 gap-4 ">
									<div className="max-w-[556px] flex flex-col">
										<div className="mb-6 flex space-x-14">
											<label className="flex items-center space-x-3 text-gray-800 font-semibold">
												<input
													type="radio"
													name="name"
													className="w-6 h-6 rounded-full  border-gray-500 text-green-500 "
												/>
												<span>Say Hi</span>
											</label>
											<label className="flex items-center space-x-3 text-gray-800 font-semibold">
												<input
													type="radio"
													name="name"
													className="w-6 h-6 rounded-full border-gray-500 text-blue-500 "
												/>
												<span>Get a Quote</span>
											</label>
										</div>

										<label htmlFor="name" className="pt-2 ">
											Name
										</label>
										<input
											id="name"
											type="text"
											placeholder="Name"
											className="p-3 border-1 border-black bg-white rounded-xl mt-2"
										/>
										<label htmlFor="email" className=" pt-3">
											Email*
										</label>
										<input
											id="email"
											type="email"
											placeholder="Email"
											className="p-3 border border-black bg-white rounded-xl mt-2"
										/>
										<label htmlFor="message" className=" pt-3">
											Message*
										</label>
										<textarea
											id="message"
											placeholder="Message"
											className="p-3 bg-white border border-black rounded-xl h-42 resize-none mt-2"
										></textarea>
										<button className=" hidden justify-center items-center md:flex mt-[40px] bg-[#191A23] text-white  rounded-xl hover:bg-[#333] transition p-4">
											Send Message
										</button>
									</div>
								</div>

								<div className="hidden lg:flex  justify-center items-center">
									<img
										src="src/assets/star.png"
										alt="Contact Us"
										className="w-[591px] h-[648] absolute right-[-280px]"
									/>
								</div>
							</div>
							<button className="md:hidden w-full mx-auto  mt-4 bg-[#191A23] text-white py-2 px-4 rounded-xl hover:bg-[#333] transition pt-6 pb-4">
								Send Message
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
