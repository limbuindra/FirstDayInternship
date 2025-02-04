import React from "react";
import { useFormik } from "formik";

const Form = () => {

    const formik = useFormik({})
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
	return (
		<>
			<div className="flex justify-center items-center ">
				<form className="flex flex-col " onSubmit={handleSubmit}>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" className="border" />
					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" className="border" autoComplete="off"/>
					<label htmlFor="name">Password</label>
					<input type="password" id="password" name="password" autoComplete="off" />
					<button className="bg-green-500 mt-4 py-2 rounded-xl">Sign in </button>
				</form>
			</div>
		</>
	);
};

export default Form;
