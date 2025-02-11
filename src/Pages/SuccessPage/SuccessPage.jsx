import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SuccessPage = ({ onClose }) => {
	const navigate= useNavigate()
	return (
		<div className="flex flex-col h-screen  items-center justify-center bg-slate-100">
			<div className="shadow-lg rounded-2xl">
				<div className="bg-green-600 p-6 rounded-t-2xl text-center ">
					<div className="text-white">
						<FaCheckCircle className="text-5xl mx-auto mt-4" />
						<h2 className="text-2xl font-semibold uppercase  mt-4">Success</h2>
					</div>
				</div>
				<div className=" p-8 flex flex-col items-center justify-center bg-white rounded-b-3xl">
					<p className="text-gray-600 mt-4 text-xl">
						Congratulations, your form has been submitted successfully.
					</p>
					<button
						className=" px-8 py-2 text-white rounded-4xl shadow-2xl mt-4 hover:text-gray-700 bg-green-600"
						onClick={()=>navigate("/")}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default SuccessPage;
