import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="bg-slate-200  shadow-xl fixed w-full top-0 z-90  md:p-4 md:flex md:justify-between md:items-center md:px-20">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-3xl font-bold md:flex md:justify-start">
					<Link to="/">Movie App </Link>
				</div>
				<div className="text-xl hover:text-slate-500 md:space-x-8 ">
					<Link to="/">Home</Link>
					<Link to="/favorites">
						<button className="border text-white md:py-2 md:px-4 md:rounded-2xl md:bg-slate-700 md:hover:bg-slate-600">
							Favorites
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
