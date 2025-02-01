import React,{useRef} from 'react'
import emailjs from "@emailjs/browser";

const ContactSection = () => {
    const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_709elus",
				"template_vb4bm0d",
				form.current,
				"Fk2k-gsv7OdxRA3rM"
			)
			.then(
				(result) => {
					console.log("Email sent successfully", result.text);
					alert("Email Sent successfully!!!");
				},
				(error) => {
					console.log("Failed to send email", error.text);
				}
			);

		e.target.reset();
	};
  return (
    <>
<div className="max-w-screen-xl mx-auto  lg:px-8">
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
						<form
							ref={form}
							onSubmit={sendEmail}
							className="pt-[30px] lg:text-lg "
						>
							<div className="flex flex-row lg:flex-row lg:px-1 lg:py-10 bg-[#F3F3F3] relative max-w-[1240px]  rounded-4xl  overflow-hidden">
								<div className="flex flex-col flex-1 p-6 lg:p-10 gap-4 ">
									<div className="max-w-[556px] flex flex-col">
										<div className="mb-6 flex space-x-14">
											<label className="flex items-center space-x-3 text-gray-800 font-semibold">
												<input
													type="radio"
													name="name"
													value="say_hello"
													className="w-6 h-6 rounded-full  border-gray-500 text-green-500 "
												/>
												<span>Say Hi</span>
											</label>
											<label className="flex items-center space-x-3 text-gray-800 font-semibold">
												<input
													type="radio"
													name="name"
													value="quote"
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
											name="name"
											type="text"
											placeholder="Name"
											required
											className="p-3 border-1 border-black bg-white rounded-xl mt-2"
										/>
										<label htmlFor="email" className=" pt-3">
											Email*
										</label>
										<input
											id="email"
											type="email"
											name="email"
											placeholder="Email"
											required
											className="p-3 border border-black bg-white rounded-xl mt-2"
										/>
										<label htmlFor="message" className=" pt-3">
											Message*
										</label>
										<textarea
											id="message"
											name="message"
											placeholder="Message"
											required
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
						</form>
					</div>
				</section>
			</div>
    </>
  )
}

export default ContactSection