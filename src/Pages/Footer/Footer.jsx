import React from "react";
import { FaStar, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-8 bg-[#191A23] lg:rounded-t-4xl text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-8 px-6 md:px-12 lg:px-16">
        <div className="w-full lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-center text-2xl md:text-3xl font-semibold space-x-2">
            <FaStar />
            <Link to="/" className="hover:text-gray-300">
              Positivus
            </Link>
          </div>

          <ul className="flex flex-col lg:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-md">
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/usecase" className="hover:text-gray-300">
                Use Cases
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-gray-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-300">
                Blog
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex space-x-6 text-2xl">
            <Link to="" className="hover:text-blue-500">
              <FaLinkedin />
            </Link>
            <Link to="" className="hover:text-blue-600">
              <FaFacebook />
            </Link>
            <Link to="" className="hover:text-blue-400">
              <FaTwitter />
            </Link>
          </div>
        </div>

        <div className="w-full lg:flex lg:space-x-60 mt-6 lg:mt-10 lg:text-xl">
          <div className="text-center lg:text-lg  lg:text-start text-sm md:text-base space-y-2">
            <p className="bg-[#B9FF66] text-black inline-block font-semibold rounded-sm px-2 py-1">
              Contact us:
            </p>
            <p>Email: info@positivus.communication</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St,</p>
            <p> Moonstone City, Stardust State 12345</p>
          </div>

          <div className="w-full max-w-xl mt-6 lg:mt-0">
            <form className="bg-[#292A32] lg:h-40 lg:flex lg:flex-row lg:items-center lg:justify-center p-6 lg:gap-4 rounded-lg text-white flex flex-col space-y-4">
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="p-3 lg:p-4 border text-white border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button
                type="submit"
                className="bg-[#B9FF66] lg:px-8 lg:py-4 hover:bg-green-400 text-black font-semibold lg:text-xl py-3 rounded-md transition"
              >
                Subscribe to news
              </button>
            </form>
          </div>
        </div>

        <div className="lg:hidden flex space-x-6 text-2xl mt-6">
          <Link to="" className="hover:text-blue-500">
            <FaLinkedin />
          </Link>
          <Link to="" className="hover:text-blue-600">
            <FaFacebook />
          </Link>
          <Link to="" className="hover:text-blue-400">
            <FaTwitter />
          </Link>
        </div>

        <div className="text-sm lg:text-start lg:flex lg:space-x-6 lg:text-lg text-gray-400 text-center border-t border-gray-600 w-full pt-4 mt-8">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <Link to="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
