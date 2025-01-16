import React, { useState, useContext } from "react";
import { MyContext } from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
	const [items, setItems] = useState([
		"Buy groceries",
		"Walk the dog",
		"Read a book",
		"Workout",
		"Write the journal",
	]);
	const { toggle, toggleBackgroundColor, backgroundImage } =
		useContext(MyContext);

	const backgroundColor = toggle ? "#333" : "#fff";
	const textColor = toggle ? "#fff" : "#000";
	const inputField = toggle
		? { backgroundColor: "#25273C" }
		: { backgroundColor: "white" };

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
			className=" min-h-screen flex flex-col items-center"
			style={{
				backgroundImage,
                backgroundSize:"fit",
                backgroundPosition:" top",
				backgroundColor,
				backgroundRepeat: "no-repeat",
				color: textColor,
			}}
		>
			<div className="w-full justify-center text-center mt-20">
				<div className="flex items-center justify-evenly space-x-24 text-center ">
					<h2 className="text-center text-white font-bold text-5xl space-x-8 uppercase">
						Todo
					</h2>
					<button className="" onClick={toggleBackgroundColor}>
						{toggle ? (
							<FontAwesomeIcon icon={faSun} className="text-3xl" />
						) : (
							<FontAwesomeIcon icon={faMoon} className="text-3xl" />
						)}
					</button>
				</div>
				<div className=" p-10 rounded-lg  md:w-2/3 sm:w-auto mx-auto lg:w-1/2">
					<form onSubmit={handleSubmit}>
						<div className="flex justify-center items-center">
							<input
								style={inputField}
								type="text"
								value={formData.todo}
								onChange={handleChange}
								name="todo"
								placeholder="Create a Todo"
								className="border border-gray-300 shadow p-3 w-full rounded mb-5 focus:outline-none focus:ring-2 "
							></input>
						</div>
					</form>
					<div className="shadow-lg bg-white rounded-sm" style={inputField}>
						<ul className="space-y-1">
							{items.map((item, index) => (
								<li
									key={index}
									className="flex items-center space-x-4 p-3 border-b border-gray-300 hover:bg-gray-200"
								>
									<input
										type="checkbox"
										className="h-6 w-6 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
									/>
									<span className="text-lg">{item}</span>
								</li>
							))}
						</ul>
						<div className="mt-2 font-medium p-4 text-xs w-full max-w-2xl flex items-center justify-between text-gray-600">
							<span>5 items left</span>
							<div className="flex space-x-4">
								<button className="hover:text-blue-400">All</button>
								<button className="hover:text-blue-400">Active</button>
								<button className="hover:text-blue-400">Completed</button>
							</div>
							<button className="hover:text-red-400">Clear Completed</button>
						</div>
					</div>
				</div>
			</div>
			<div className="text-slate-600">Drag and drop to reorder List</div>
		</div>
	);
};

export default Form;
