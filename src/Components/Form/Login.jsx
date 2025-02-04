import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const initialValues = {
		email: "",
		password: "",
	};
	const [formValues, setFormValues] = useState(initialValues);
    const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div className=" bg-slate-200 flex justify-center items-center h-screen">
				<form onSubmit={handleSubmit}
					className="w-96 p-8 bg-white rounded-xl shadow-lg "
				>
					<h1 className="text-center font-medium text-4xl p-2">Login</h1>
					<div className="mt-4">
						<label
							htmlFor="email"
							className="block text-base mb-2 font-medium"
						>
							Email
						</label>
						<input
							id="email"
							type="text"
							name="email"
							// value={formValues.email}
							onChange={handleChange}
							className="border p-2 rounded-lg w-full text-base focus:outline-none focus:ring-0 focus:border-blue-300"
							placeholder="Email or phone number"
							autoComplete="off"
						/>
					</div>

					<div className="mt-4">
						<label
							htmlFor="password"
							className="block text-base mb-2 font-medium"
						>
							Password
						</label>

						<input
							id="password"
							name="password"
							// value={formValues.password}
							className="border p-2 rounded-lg w-full text-base focus:outline-none focus:ring-0 focus:border-blue-300"
							type="password"
							placeholder="Password"
							onChange={handleChange}
						/>
					</div>
					{/* <div className="flex justify-end underline text-blue-500 cursor-pointer text-sm mt-2">
						<Link>
							<i>Forget Password?</i>
						</Link>
					</div> */}

					<div className="text-center mt-4">
						<button
							type="submit"
							className="text-lg bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white py-2 w-full"
						>
							Login
						</button>
					</div>
					{/* <span className="flex justify-end ">
						Don't have an account?
						<button className="underline text-blue-500 cursor-pointer mx-2">
							<Link className="text-sm" to="/register">
								<i>Register here</i>
							</Link>
						</button>
					</span> */}
				</form></div>
  )
}

export default Login