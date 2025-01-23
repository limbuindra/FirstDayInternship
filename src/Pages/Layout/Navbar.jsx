import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<nav className="">
				<div className="mx-auto max-w-7xl  px-6 lg:px-8 flex justify-end text-xl lg:p-4" >
					<div className="relative flex h-16 items-center flex-end ">
						<div className="absolute inset-y-0 left-0 justify-center flex  items-center sm:hidden">
							<button
								onClick={toggleMenu}
								type="button"
								className="inline-flex  justify-center rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							>
								<GiHamburgerMenu />
							</button>
						</div>
						

						<div className=" hidden sm:flex sm:ml-6 items-center justify-end space-x-4">
						<div className="text-4xl ">
							<h1 >	Positivus</h1>
						</div>
							<ul className="flex space-x-8">
								<li>
									<Link
										to="/about"
										className="text-gray-700 hover:text-gray-900"
									>
										About us
									</Link>
								</li>
								<li>
									<Link
										to="/services"
										className="text-gray-700 hover:text-gray-900"
									>
										Services
									</Link>
								</li>
								<li>
									<Link
										to="/usecase"
										className="text-gray-700 hover:text-gray-900"
									>
										Use Cases
									</Link>
								</li>
								<li>
									<Link
										to="/pricing"
										className="text-gray-700 hover:text-gray-900"
									>
										Pricing
									</Link>
								</li>
								<li>
									<Link
										to="/blog"
										className="text-gray-700 hover:text-gray-900"
									>
										Blogs
									</Link>
								</li>
							</ul>
						<div className="border p-4 rounded-2xl">
							<button>Request from quote</button>
						</div>
						</div>
					</div>
				</div>

				<div
					className={`sm:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
						isMenuOpen ? "translate-x-0" : "-translate-x-full"
					} transition-transform duration-300 ease-in-out`}
				>
					<div className="p-4 space-y-2">
						<ul className="space-y-2">
							<li>
								<Link
									to="/about"
									className="block text-gray-700 hover:text-gray-900"
									onClick={() => setMenuOpen(false)}
								>
									About us
								</Link>
							</li>
							<li>
								<Link
									to="/services"
									className="block text-gray-700 hover:text-gray-900"
									onClick={() => setMenuOpen(false)}
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									to="/usecase"
									className="block text-gray-700 hover:text-gray-900"
									onClick={() => setMenuOpen(false)}
								>
									Use Cases
								</Link>
							</li>
							<li>
								<Link
									to="/pricing"
									className="block text-gray-700 hover:text-gray-900"
									onClick={() => setMenuOpen(false)}
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									to="/blog"
									className="block text-gray-700 hover:text-gray-900"
									onClick={() => setMenuOpen(false)}
								>
									Blog
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Overlay to close menu when clicking outside */}
				{isMenuOpen && (
					<div
						className="fixed inset-0 z-40 bg-black opacity-50 sm:hidden"
						onClick={() => setMenuOpen(false)}
					></div>
				)}
			</nav>
		</>
	);
};

export default Navbar;
