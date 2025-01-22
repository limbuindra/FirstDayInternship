import React, { useState, useContext, useRef } from "react";
import { MyContext } from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { IoMdClose } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
	const {
		toggle,
		toggleBackgroundColor,
		backgroundImage,
		backgroundColor,
		textColor,
		inputField,
	} = useContext(MyContext);

	const [formData, setFormData] = useState({ todo: "" });
	const [checked, setChecked] = useState(false);

	const [items, setItems] = useState([
		{ id: 1, task: "Buy groceries", checked: false, status: "active" },
		{ id: 2, task: "Walk the dog", checked: false, status: "active" },
		{ id: 3, task: "Read a book", checked: false, status: "active" },
		{ id: 4, task: "Workout", checked: false, status: "active" },
		{ id: 5, task: "Write the journal", checked: false, status: "active" },
	]);

	const [filter, setFilter] = useState("all");

	const handleInputChange = (e) => {
		setFormData({ todo: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!checked) {
			toast.error("You must check the box to add a task!");
			return;
		}

		if (formData.todo.trim() === "") {
			toast.error("Task cannot be empty!");
			return;
		}

		if (
			items.some(
				(item) => item.task.toLowerCase() === formData.todo.trim().toLowerCase()
			)
		) {
			toast.warning("Task already exists!");
			return;
		}

		setItems((prevItems) => [
			...prevItems,
			{
				id: items.length + 1,
				task: formData.todo.trim(),
				checked: false,
				status: "active",
			},
		]);

		toast.success("Task added successfully!!!");
		setFormData({ todo: "" });
		setChecked(false);
	};

	const handleDelete = (id) => {
		setItems(items.filter((task) => task.id !== id));
		toast.info("Task deleted!");
	};

	const handleCheckboxChange = (id) => {
		setItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id
					? {
							...item,
							checked: !item.checked,
							status: item.checked ? "completed" : "active",
					  }
					: item
			)
		);
		console.log(id);
		const task = items.find((item) => item.id === id);
		toast.success(task.checked ? "Marked as active!" : "Marked as completed!");
	};

	const clearCompletedTasks = () => {
		const completedTasks = items.filter((item) => item.checked);
		if (completedTasks.length === 0) {
			toast.info("No completed tasks to clear.");
		} else {
			setItems(items.filter((item) => !item.checked));
			toast.success("Cleared all completed tasks!");
		}
	};
	const handleFilterChange = (newFilter) => {
		setFilter(newFilter);
		const filterMessages = {
			all: "Showing all tasks.",
			active: "Showing active tasks.",
		};
		toast.info(filterMessages[newFilter]);
	};
	const filteredItems =
		filter === "all"
			? items
			: filter === "active"
			? items.filter((item) => !item.checked)
			: items.filter((item) => item.checked);

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

			<div className="flex flex-col w-full lg:w-[600px] items-center -mt-[150px] md:-mt-[220px] px-6 md:px-8">
				<div className="flex justify-between pb-4 items-center md:max-w-xl text-white w-full lg:max-w-2xl ">
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

				<div className="pt-6 text-sm rounded-lg md:max-w-xl lg:max-w-2xl w-full">
					<div
						style={inputField}
						className="flex items-center space-x-3 px-4 py-2 rounded-md shadow-md md:px-2"
					>
						<form>
							<label className="relative flex items-center justify-center w-8 h-8 ">
								<input
									style={{ inputField }}
									type="checkbox"
									onChange={() => setChecked(!checked)}
									className="absolute opacity-0 w-0 h-0 "
									checked={checked}
								/>
								<div
									className={`flex items-center justify-center w-6 h-6 rounded-full border cursor-pointer ${
										checked ? "bg-white" : "border-gray-300"
									}`}
								>
									{checked && (
										<FaCircleCheck className="text-2xl text-blue-600 " />
									)}
								</div>
							</label>
						</form>
						<input
							style={inputField}
							type="text"
							name="todo"
							onChange={handleInputChange}
							value={formData.todo}
							placeholder="Create a new Todo..."
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleSubmit(e);
								}
							}}
							className="flex-1 p-2 text-sm focus:outline-none"
						/>
					</div>
					<div
						className="mt-6 shadow-lg bg-white rounded-md "
						style={inputField}
					>
						<ul className="space-y-1 max-h-60 overflow-y-auto">
							{filteredItems.map((item) => (
								<li
									key={item.id}
									className={`flex items-center space-x-6 p-4 md:p-2 ${
										toggle ? "border-b border-gray-700" : "border-b"
									} relative group`}
								>
									<label className="relative flex items-center justify-center w-8 h-8">
										<input
											type="checkbox"
											checked={item.checked}
											onChange={() => handleCheckboxChange(item.id)}
											className="absolute opacity-0 w-0 h-0"
										/>
										<div
											style={inputField}
											className={`flex items-center bg-white justify-center w-6 h-6 rounded-full border cursor-pointer ${
												item.checked
													? " text-blue-500 "
													: "border-gray-300 bg-white "
											}`}
										>
											{item.checked && <FaCircleCheck className="text-2xl" />}
										</div>
									</label>
									<span
										className={`text-sm ${
											item.checked ? "line-through text-gray-400" : ""
										}`}
									>
										{item.task}
									</span>
									<span
										onClick={() => handleDelete(item.id)}
										className="absolute right-4 opacity-50 group-hover:opacity-100 text-gray-500 hover:text-red-500 transition-opacity cursor-pointer"
									>
										<IoMdClose className="w-5 h-5 md:w-6 md:h-6" />
									</span>
								</li>
							))}
						</ul>

						<div className="mt-4 font-semibold text-gray-500 p-4 text-xs w-full flex flex-col sm:flex-row items-center sm:justify-between">
							<div className="flex justify-between w-full sm:w-auto mb-4 sm:mb-0">
								<span>
									{filter === "all" && `${items.length} items left`}
									{filter === "active" &&
										`${
											items.filter((item) => !item.checked).length
										} active items`}
									{filter === "completed" &&
										`${
											items.filter((item) => item.checked).length
										} completed items`}
								</span>
								<button
									onClick={clearCompletedTasks}
									className="hover:text-red-400 sm:hidden"
								>
									Clear Completed
								</button>
							</div>

							<div className="flex  justify-center space-x-4 w-full lg:w-auto">
								<button
									onClick={() => handleFilterChange("all")}
									className={`${
										filter === "all" ? "text-blue-400" : "hover:text-blue-400"
									}`}
								>
									All
								</button>
								<button
									onClick={() => handleFilterChange("active")}
									className={`${
										filter === "active"
											? "text-blue-400"
											: "hover:text-blue-400"
									}`}
								>
									Active
								</button>
								<button
									onClick={() => handleFilterChange("completed")}
									className={`${
										filter === "completed"
											? "text-blue-400"
											: "hover:text-blue-400"
									}`}
								>
									Completed
								</button>
							</div>
							<button
								onClick={clearCompletedTasks}
								className="hidden sm:block hover:text-red-400"
							>
								Clear Completed
							</button>
						</div>
					</div>
				</div>
				<span className="font-thin text-[10px] italic mt-4">
					Drag and Drop list items to reorder.
				</span>
			</div>
			<ToastContainer
				position="top-center"
				autoClose={3000}
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
	);
};

export default Form;
