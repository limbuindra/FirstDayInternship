import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CiUser } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsBuildings } from "react-icons/bs";
import { Data, BudgetData } from "./Components/Data/Data";
import ServicesCard from "./Components/Card/ServicesCard";
import BudgetCard from "./Components/Card/BudgetCard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SuccessPage from "./Components/SuccessPage/SuccessPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [userData, setUserData] = useState([]);
	const [selectedCard, setSelectedCard] = useState([]);
	const [selectedRange, setSelectedRange] = useState([]);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			company: "",
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Name is required"),
			email: Yup.string()
				.email("Invalid email format")
				.required("Email is required"),
			phone: Yup.string()
				.matches(/^[0-9]+$/, "Phone number must be digits")
				.min(10, "Phone number must be at least 10 digits")
				.required("Phone number is required"),
			company: Yup.string().required("Company name is required"),
		}),
		onSubmit: (values) => {
			setUserData(values);
			console.log(values);
			setCurrentStep(2);
		},
	});
	const handleSelect = (index) => {
		setSelectedCard((prev) => {
			const newSelection = prev.includes(index)
				? prev.filter((card) => card !== index)
				: [...prev, index];

			setUserData({ ...userData, services: newSelection });
			return newSelection;
		});
	};

	const handleNext = async () => {
		if (currentStep === 1) {
			await formik.validateForm();
			if (formik.isValid) {
				formik.handleSubmit();
			}
		} else if (currentStep === 2 && selectedCard.length === 0) {
			toast.info("Please select at least one service.");
		} else if (currentStep === 3 && !userData.budget) {
			toast.info("Please select a budget range.");
		} else if (currentStep < 4) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleBudgetSelect = (index) => {
		setUserData({ ...userData, budget: BudgetData[index].range });
	};

	const handlePrevious = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleSubmit = () => {
		setIsSubmitted(true);
		setSelectedCard([]);
		setSelectedRange([]);
	};
	if (isSubmitted) {
		return (
			<SuccessPage
				onClose={() => {
					setIsSubmitted(false);
					setCurrentStep(1);
				}}
			/>
		);
	}
	return (
		<>
			<Header />
			<div className="max-w-screen-md mx-auto px-4 lg:px-14 lg:py-2">
				<h1 className="font-bold text-2xl text-center lg:mt-8">
					Get a Project Quote
				</h1>
				<div className="text-slate-500 text-sm lg:mt-2 text-center mb-6">
					<p>
						Please fill the form below to receive a quote for your project. Feel
					</p>
					<p>free to add as much detail as needed.</p>
				</div>

				<div className="lg:shadow-lg lg:border lg:px-2 lg:py-10 lg:pb-14 lg:border-slate-200 lg:rounded-4xl">
					<div className="flex justify-center mb-8">
						{[1, 2, 3, 4].map((num, index) => (
							<div key={num}>
								<div className="flex items-center gap-2">
									<div
										className={`w-8 h-8 flex items-center justify-center text-sm font-semibold rounded-full transition-all duration-300 ${
											currentStep > num
												? "bg-blue-700 text-white"
												: currentStep === num
												? "bg-blue-700 text-white"
												: "bg-gray-300 text-gray-700"
										}`}
									>
										{num}
									</div>

									{index !== 3 && (
										<div className="relative w-30 h-1">
											<div className="absolute w-full h-full bg-gray-300 rounded"></div>

											<div
												className={`absolute h-full rounded transition-all duration-300 ${
													currentStep > num
														? "w-full bg-blue-700"
														: currentStep === num
														? "w-1/2 bg-blue-700"
														: "w-0 bg-transparent"
												}`}
											></div>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
					<hr className="text-slate-200 " />

					{currentStep === 1 && (
						<div className="lg:px-10 lg:py-4">
							<h2 className="font-bold text-xl lg:mb-2 lg:mt-14 ">
								Contact Details
							</h2>
							<p className="text-slate-500 text-sm lg:mb-8">
								Lorem ipsum dolor sit amet consectetur adipisc.
							</p>
							<form onSubmit={formik.handleSubmit}>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
									<div className="w-full">
										<label className="block text-gray-900 text-sm font-bold mb-2">
											Name
										</label>
										<div className="flex items-center border border-gray-200 rounded-4xl shadow py-3 px-4">
											<input
												type="text"
												name="name"
												className="w-full focus:outline-none"
												placeholder="John Carter"
												value={formik.values.name}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
											/>
											<CiUser className="text-gray-400 text-2xl" />
										</div>
										{formik.touched.name && formik.errors.name && (
											<p className="text-red-500 text-xs mt-1">
												{formik.errors.name}
											</p>
										)}
									</div>

									<div className="w-full">
										<label className="block text-gray-900 text-sm font-bold mb-2">
											Email
										</label>
										<div className="flex items-center border border-gray-200 rounded-4xl shadow py-3 px-4">
											<input
												type="email"
												name="email"
												className="w-full focus:outline-none"
												placeholder="Email address"
												value={formik.values.email}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
											/>
											<AiOutlineMail className="text-gray-400 ml-2 text-2xl" />
										</div>
										{formik.touched.email && formik.errors.email && (
											<p className="text-red-500 text-xs mt-1">
												{formik.errors.email}
											</p>
										)}
									</div>
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
									<div className="w-full">
										<label className="block text-gray-700 text-sm font-bold mb-2">
											Phone Number
										</label>
										<div className="flex items-center border border-gray-200 rounded-4xl shadow py-3 px-4">
											<input
												type="text"
												name="phone"
												className="w-full focus:outline-none"
												placeholder="(123) 456 - 7890"
												value={formik.values.phone}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
											/>
											<IoPhonePortraitOutline className="text-gray-400 ml-2 text-2xl" />
										</div>
										{formik.touched.phone && formik.errors.phone && (
											<p className="text-red-500 text-xs mt-1">
												{formik.errors.phone}
											</p>
										)}
									</div>

									<div className="w-full">
										<label className="block text-gray-700 text-sm font-bold mb-2">
											Company
										</label>
										<div className="flex items-center border border-gray-200 rounded-4xl shadow py-3 px-4">
											<input
												type="text"
												name="company"
												className="w-full focus:outline-none"
												placeholder="Company Name"
												value={formik.values.company}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
											/>
											<BsBuildings className="text-gray-400 ml-2 text-2xl" />
										</div>
										{formik.touched.company && formik.errors.company && (
											<p className="text-red-500 text-xs mt-1">
												{formik.errors.company}
											</p>
										)}
									</div>
								</div>
							</form>
						</div>
					)}

					{currentStep === 2 && (
						<div>
							<div className="max-w-screen-xl mx-auto px-4 lg:px-6 lg:mt-12">
								<h1 className="font-semibold text-xl">Our Services</h1>
								<p className="text-slate-500 text-sm">
									Please select which service you are interested in.
								</p>
								<div className="lg:mt-14 mt-4">
									<div className="grid lg:grid md:grid-cols-2 lg:grid-cols-2 lg:gap-8 gap-6">
										{Data.map((service, index) => (
											<ServicesCard
												key={index}
												photo={service.photo}
												title={service.title}
												index={index}
												selected={selectedCard.includes(index)}
												onSelect={handleSelect}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					)}

					{currentStep === 3 && (
						<div>
							<div className="max-w-screen-xl mx-auto px-4 lg:px-8 lg:mt-14">
								<h1 className="font-semibold text-xl">
									What's your project budget?
								</h1>
								<p className="text-slate-500 text-sm lg:mt-2">
									Please select which budget range you have in mind.
								</p>
								<div className="lg:mt-10">
									<div className="grid lg:grid md:grid-cols-2 lg:grid-cols-2 gap-6">
										{BudgetData.map((item, index) => (
											<BudgetCard
												key={item.id}
												range={item.range}
												isSelected={userData.budget === item.range}
												onSelect={() => handleBudgetSelect(index)}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					)}

					{currentStep === 4 && (
						<div className="lg:flex lg:flex-col lg:items-center lg:mt-12 flex flex-col  items-center justify-center text-center">
							<img src="src/assets/submit.svg" alt="submit" className="" />
							<h1 className="lg:font-bold">Submit your quote request</h1>
							<div className="text-slate-500 lg:mt-4">
								<p>Please review all the information you previously typed in</p>
								<p>
									the past currentSteps, and if all is okay, submit your message
									to
								</p>
								<p>receive a project quote in 24 - 48 hours.</p>
							</div>
							<button
								className="bg-blue-700 text-white
			 px-7 py-3 rounded-3xl font-semibold 
			 cursor-pointer border-2 border-blue-700 hover:bg-slate-700 hover:text-white
			 transition duration-200 ease-in-out lg:mt-6"
								onClick={handleSubmit}
							>
								Submit
							</button>
						</div>
					)}
				</div>
				<div className="flex justify-between mt-8">
					{currentStep > 1 && (
						<button
							onClick={handlePrevious}
							className="px-6 py-2 text-blue-500 border rounded-3xl"
						>
							Previous Step
						</button>
					)}
					{currentStep < 4 && (
						<button
							onClick={handleNext}
							className="px-6 py-2 bg-blue-700 text-white rounded-3xl "
						>
							Next Step
						</button>
					)}
				</div>
				<ToastContainer
					position="top-center"
					autoClose={1000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
			</div>
			<Footer />
		</>
	);
};

export default App;
