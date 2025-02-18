import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { auth, signInWithEmailAndPassword } from "../Config/Firebase";
import { toast } from "react-toastify";

const Login = () => {
	const navigate = useNavigate();
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		if (!formValues.email || !formValues.password) {
			toast.error("Please fill all fields.");
			setLoading(false);
			return;
		}

		try {
			await signInWithEmailAndPassword(
				auth,
				formValues.email,
				formValues.password
			);
			toast.success("Login successful!");
			navigate("/chat"); 
		} catch (error) {
			toast.error(error.message);
		}
		setLoading(false);
	};

	return (
		<div className="bg-slate-200 p-10 flex justify-center items-center h-screen">
			<form
				onSubmit={handleSubmit}
				className="w-96 p-8 bg-white rounded-xl shadow-lg"
			>
				<h1 className="text-center font-bold text-3xl">Login</h1>
				<div className="mt-4">
					<label htmlFor="email" className="block text-base mb-2">
						Email
					</label>
					<input
						id="email"
						name="email"
						value={formValues.email}
						onChange={handleChange}
						className="border p-2 rounded-lg w-full text-base focus:outline-none focus:ring-0 focus:border-blue-500"
						type="email"
						placeholder="Email"
					/>
				</div>
				<div className="mt-4">
					<label htmlFor="password" className="block text-base mb-2">
						Password
					</label>
					<input
						id="password"
						name="password"
						value={formValues.password}
						onChange={handleChange}
						className="border p-2 rounded-lg w-full text-base focus:outline-none focus:ring-0 focus:border-blue-300"
						type="password"
						placeholder="Password"
					/>
				</div>
				<div className="text-center mt-4">
					<button
						type="submit"
						className="text-lg bg-gray-500 hover:bg-gray-600 rounded-xl text-white py-2 w-full"
						disabled={loading}
					>
						Sign In
					</button>
				</div>
				<span className="flex justify-end">
					Don't have an account?
					<button className="underline text-blue-500 cursor-pointer">
						<Link to="/register"> Sign up instead</Link>
					</button>
				</span>
			</form>
		</div>
	);
};

export default Login;
