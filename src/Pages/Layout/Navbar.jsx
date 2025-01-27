import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
		<>
			<nav className="bg-white ">
				<div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-4">
					<div className="flex items-center text-xl space-x-2 lg:space-x-2 lg:text-4xl text-gray-800">
						<FaStar />
						<Link to="/" className="hover:text-gray-900  font-semibold">
							Positivus
						</Link>
					</div>

					<div className="lg:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="text-gray-500 hover:text-gray-900 focus:outline-none"
						>
							<GiHamburgerMenu size={24} />
						</button>
					</div>

					<div className="hidden lg:flex items-center lg:text-xl lg:space-x-10">
						<ul className="flex space-x-6 lg:space-x-14 text-gray-700">
							<li>
								<Link to="/about" className="hover:text-gray-900">
									About us
								</Link>
							</li>
							<li>
								<Link to="/services" className="hover:text-gray-900">
									Services
								</Link>
							</li>
							<li>
								<Link to="/usecase" className="hover:text-gray-900">
									Use Cases
								</Link>
							</li>
							<li>
								<Link to="/pricing" className="hover:text-gray-900">
									Pricing
								</Link>
							</li>
							<li>
								<Link to="/blog" className="hover:text-gray-900">
									Blog
								</Link>
							</li>
						</ul>
						<div className="border p-2 px-4 rounded-lg lg:px-9 lg:py-4">
							<button className="text-gray-700 hover:text-gray-900">
								Request a Quote
							</button>
						</div>
					</div>
				</div>

				<div
					className={`lg:hidden fixed top-0 left-0 z-50 w-64 bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out ${
						isMenuOpen ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					<div className="p-6">
						<ul className="space-y-6 text-gray-700">
							<li>
								<Link
									to="/about"
									className="block hover:text-gray-900"
									onClick={() => setMenuOpen(false)}
								>
									About us
								</Link>
							</li>
							<li>
								<Link
									to="/services"
									className="block hover:text-gray-900"
									onClick={() => setMenuOpen(false)}
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									to="/usecase"
									className="block hover:text-gray-900"
									onClick={() => setMenuOpen(false)}
								>
									Use Cases
								</Link>
							</li>
							<li>
								<Link
									to="/pricing"
									className="block hover:text-gray-900"
									onClick={() => setMenuOpen(false)}
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									to="/blog"
									className="block hover:text-gray-900"
									onClick={() => setMenuOpen(false)}
								>
									Blog
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Overlay */}
				{isMenuOpen && (
					<div
						className="fixed inset-0 z-40 bg-black opacity-50"
						onClick={() => setMenuOpen(false)}
					></div>
				)}
			</nav>
		</>
	);
};

export default Navbar;
