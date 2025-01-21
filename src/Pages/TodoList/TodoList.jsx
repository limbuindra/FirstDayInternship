import React, { useState, useContext } from "react";
import { MyContext } from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { IoMdClose } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";

const Form = () => {
	const [items, setItems] = useState([
		{ text: "Buy groceries", checked: false },
		{ text: "Walk the dog", checked: false },
		{ text: "Read a book", checked: false },
		{ text: "Workout", checked: false },
		{ text: "Write the journal", checked: false },
	]);

	const { toggle, toggleBackgroundColor, backgroundImage } =
		useContext(MyContext);

	const backgroundColor = toggle ? "#333 " : "#fff";
	const textColor = toggle ? "#fff" : "#25273C";
	const inputField = toggle
		? { backgroundColor: "#25273C" }
		: { backgroundColor: "white" };

	const [formData, setFormData] = useState({ todo: "" });

	// Add new item
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.todo.trim() !== "") {
			setItems([...items, { text: formData.todo.trim(), checked: false }]);
			setFormData({ todo: "" });
		}
	};

	// Delete item
	const handleDelete = (index) => {
		setItems(items.filter((_, i) => i !== index));
	};

	// Toggle checkbox
	const handleCheckboxChange = (index) => {
		setItems(
			items.map((item, i) =>
				i === index ? { ...item, checked: !item.checked } : item
			)
		);
	};

	return (
		<div
			className="min-h-screen flex flex-col items-center"
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
				className="w-full h-[200px] md:h-[290px]"
			></div>

			<div className="flex flex-col w-full items-center -mt-[150px] md:-mt-[200px] px-6 md:px-8">
				<div className="flex justify-between items-center  text-white w-full max-w-2xl ">
					<h2 className="font-bold text-2xl md:text-4xl lg:text-5xl uppercase">
						T o d o
					</h2>
					<button onClick={toggleBackgroundColor}>
						<FontAwesomeIcon
							icon={toggle ? faSun : faMoon}
							className="text-2xl md:text-2xl lg:text-4xl"
						/>
					</button>
				</div>

				<div className="pt-6 text-sm rounded-lg  lg:max-w-2xl w-full">
					<form onSubmit={handleSubmit}>
						<div
							style={inputField}
							className="flex items-center space-x-3 px-3 py-2 rounded-md shadow-md"
						>
							<input
								style={inputField}
								type="text"
								id="todo"
								value={formData.todo}
								onChange={handleChange}
								name="todo"
								placeholder="Create a new Todo..."
								className="focus:outline-none flex-1 p-2 text-sm sm:text-md"
							/>
						</div>
					</form>

					<div
						className="mt-6 shadow-lg bg-white rounded-md"
						style={inputField}
					>
						<ul className="space-y-1 max-h-60 overflow-y-auto">
							{items.map((item, index) => (
								<li
									key={index}
									className={`flex items-center space-x-6 p-4 ${
										toggle ? "border-b border-gray-700" : "border-b "
									} relative group`}
								>
									<label className="relative flex items-center justify-center w-8 h-8">
										<input
											type="checkbox"
											checked={item.checked}
											onChange={() => handleCheckboxChange(index)}
											className="absolute opacity-0 w-0 h-0"
										/>
										<div
											className={`flex items-center justify-center w-6 h-6 rounded-full border cursor-pointer ${
												item.checked
													? "bg-blue-400 text-white"
													: "border-gray-300 bg-white"
											}`}
										>
											{item.checked && (
												<FaCircleCheck className="text-xl" />
											)}
										</div>
									</label>
									<span
										className={`text-sm ${
											item.checked ? "line-through text-gray-400" : ""
										}`}
									>
										{item.text}
									</span>
									<span
										onClick={() => handleDelete(index)}
										className="absolute right-4 opacity-50 group-hover:opacity-100 text-gray-500 hover:text-red-500 transition-opacity cursor-pointer"
									>
										<IoMdClose className="w-5 h-5 md:w-6 md:h-6" />
									</span>
								</li>
							))}
						</ul>

						<div className="mt-2 font-semibold text-gray-500 p-4 text-xs w-full flex flex-col sm:flex-row items-center sm:justify-between">
							<span>{items.filter((item) => !item.checked).length} items left</span>
						</div>
					</div>
				</div>

				<div className="text-gray-500 text-xs mt-6">
					Drag and drop to reorder list
				</div>
			</div>
		</div>
	);
};

export default Form;
