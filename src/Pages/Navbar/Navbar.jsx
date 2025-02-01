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
			<nav className="max-w-screen mx-auto bg-white lg:p-4 lg:sticky lg:top-0  sticky top-0 z-50 lg:z-50">
				<div className="container mx-auto flex h-20 items-center justify-between lg:justify-evenly lg:space-x-38 px-4 lg:px-6">
					<div className="flex items-center text-xl space-x-2 lg:space-x-2 lg:text-4xl  lg:font-semibold text-black">
						<FaStar  />
						<Link to="/" className=" font-bold">
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
						<ul className="flex space-x-6 lg:space-x-14 text-gray-700 lg:text-black">
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
						<div className="border p-2 px-4 rounded-xl lg:rounded-2xl lg:px-9 lg:py-5">
							<button className="text-gray-700 lg:text-black hover:text-gray-900">
								Request a Quote
							</button>
						</div>
					</div>
				</div>

				<div
					className={`lg:hidden fixed top-0 left-0 z-50 w-55 bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out ${
						isMenuOpen ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					<div className="p-8 font-bold text-lg">
						<ul className="space-y-6  ">
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

				{isMenuOpen && (
					<div
						className="fixed inset-0 z-40 bg-black opacity-40"
						onClick={() => setMenuOpen(false)}
					></div>
				)}
			</nav>
		</>
	);
};

export default Navbar;
