import React, { useState, useContext } from "react";
import { MyContext } from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { IoMdClose } from "react-icons/io";

const Form = () => {
	const [items, setItems] = useState([
		"Buy groceries",
		"Walk the dog",
		"Read a book",
		"Workout",
		"Write the journal",
		"hell",
	]);
	const { toggle, toggleBackgroundColor, backgroundImage } =
		useContext(MyContext);

	const backgroundColor = toggle ? "#333" : "#fff";
	const textColor = toggle ? "#fff" : "#25273C";
	const inputField = toggle
		? { backgroundColor: "#25273C" }
		: { backgroundColor: "white" };

	const border = toggle ? "text-red" : "text-blue";

	const [formData, setFormData] = useState({ todo: "" });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		console.log(formData);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div
			className=" min-h-screen flex flex-col items-center "
			style={{
				backgroundColor,
				color: textColor,
			}}
		>
			<div
				style={{
					backgroundImage,
					backgroundPosition: "top",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
				className="w-full justify-center text-center h-[290px]"
			>
				<div className="flex space-x-20 items-center md:space justify-evenly lg:space-x-12 text-center mt-24">
					<h2 className="text-center flex flex-row text-white font-bold text-5xl space-x-8 uppercase">
						T o d o
					</h2>
					<button onClick={toggleBackgroundColor}>
						{toggle ? (
							<FontAwesomeIcon icon={faSun} className="text-3xl" />
						) : (
							<FontAwesomeIcon icon={faMoon} className="text-3xl" />
						)}
					</button>
				</div>
				<div  className=" p-10 rounded-lg w-full md:w-2/3 sm:w-auto mx-auto lg:w-1/2">
					<form onSubmit={handleSubmit}>
						<div
							style={inputField}
							class="flex items-center space-x-1 bg-white p-2 mb-4 rounded-md"
						>
							<input
								type="checkbox"
								class="form-checkbox  h-6 w-8 text-blue-500"
							/>
							<input
								style={inputField}
								type="text"
								value={formData.todo}
								onChange={handleChange}
								name="todo"
								placeholder="Create a new Todo.."
								class="focus:outline-none  p-2 rounded"
							/>
						</div>
					</form>
					<div className="shadow-lg bg-white rounded-md " style={inputField}>
						<ul className="space-y-1 max-h-60 overflow-y-auto scrollbar-hide">
							{items.map((item, index) => (
								<li
									style={{ border }}
									key={index}
									className={`flex items-center space-x-4 p-3 ${
										toggle ? " border-b border-gray-700" : "border-b "
									}  relative group`}
								>
									<input
										style={inputField}
										type="checkbox"
										className="h-6 w-6 border-2 rounded-full border-gray-300 focus:ring-2 focus:ring-blue-500"
									/>
									<span className="text-md">{item}</span>
									<span className="absolute right-4 opacity-2 group-hover:opacity-100  text-gray-500 hover:text-red-500 transition-opacity cursor-pointer">
										<IoMdClose className="w-6 h-8" />
									</span>
								</li>
							))}
						</ul>

						<div className="mt-2 font-medium p-4 text-xs w-full max-w-2xl flex flex-col sm:flex-row items-center sm:justify-between text-gray-600">
							<div className="flex justify-between w-full sm:w-auto mb-8 sm:mb-0">
								<span>5 items left</span>
								<button className="hover:text-red-400 sm:hidden">
									Clear Completed
								</button>
							</div>


							<div className="flex justify-center space-x-4 w-full sm:w-auto sm:mt-0">
								<button className="hover:text-blue-400">All</button>
								<button className="hover:text-blue-400">Active</button>
								<button className="hover:text-blue-400">Completed</button>
							</div>
							<button className="hidden sm:block hover:text-red-400">
								Clear Completed
							</button>
						</div>
					</div>
				</div>
			<div className="text-slate-600 text-xs">
				Drag and drop to reorder List
			</div>
			</div>
		</div>
	);
};

export default Form;
