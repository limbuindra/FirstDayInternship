import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="bg-slate-200  shadow-xl fixed w-full top-0 z-90  md:p-4 md:flex md:justify-between md:items-center md:px-20">
			<div className="container text-blue-600 font-bold mx-auto flex justify-between items-center">
				<div className="text-3xl font-bold md:flex md:justify-start">
					<Link to="/">Movies </Link>
				</div>
				<div className="text-xl  md:space-x-8 ">
					<Link to="/"  className="hover:bg-slate-500 px-4 py-2 rounded-3xl hover:text-white">Home</Link>
					<Link to="/favorites" className="hover:bg-slate-500 px-4 py-2 rounded-3xl hover:text-white">Favorites</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
