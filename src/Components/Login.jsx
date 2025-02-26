import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="relative w-[800px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden flex border border-gray-300">
        
        {/* Sign Up Form */}
        <div
          className={`w-1/2 p-8 transition-opacity duration-500 ${
            isSignUp ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Create Account</h1>
          <div className="flex gap-4 mb-5">
            <Link to="/" className="text-blue-500 text-3xl"><FaFacebook /></Link>
            <Link to="/" className="text-red-500 text-3xl"><FcGoogle /></Link>
            <Link to="/" className="text-blue-700 text-3xl"><FaLinkedin /></Link>
          </div>
          <span className="text-gray-500">or use your email for registration</span>
          <input type="text" placeholder="Name" className="block w-full p-2 mt-2 border rounded" />
          <input type="email" placeholder="Email" className="block w-full p-2 mt-2 border rounded" />
          <input type="password" placeholder="Password" className="block w-full p-2 mt-2 border rounded" />
          <button className="bg-red-500 text-white px-4 py-2 rounded mt-4 w-full">Sign Up</button>

        </div>

        {/* Sign In Form */}
        <div
          className={`w-1/2 p-20 lg:p-8 transition-opacity duration-500 ${
            !isSignUp ? "opacity-100" : "opacity-0 "
          }`}
        >
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Sign in</h1>
          <div className="flex gap-4 mb-5">
            <Link to="/" className="text-blue-500 text-3xl"><FaFacebook /></Link>
            <Link to="/" className="text-red-500 text-3xl"><FcGoogle /></Link>
            <Link to="/" className="text-blue-700 text-3xl"><FaLinkedin /></Link>
          </div>
          <span className="text-gray-500">or use your account</span>
          <input type="email" placeholder="Email" className="block w-full p-2 mt-2 border rounded border-slate-700" />
          <input type="password" placeholder="Password" className="block w-full p-2 mt-2 border rounded" />
          <Link to="/" className="text-blue-500 mt-2 inline-block">Forgot your password?</Link>
          <button className="bg-red-500 text-white px-4 py-2 rounded mt-4 w-full">Sign In</button>
        </div>

        {/* Overlay Panel */}
        <div
          className="absolute top-0 w-[400px] h-full bg-red-500 text-white flex flex-col justify-center items-center transition-all duration-500"
          style={{ left: isSignUp ? "50%" : "0%" }}
        >
          <h1 className="text-2xl font-bold mb-3">{isSignUp ? "Hello, Friend!" : "Welcome Back!"}</h1>
          <p className="text-center text-sm px-8">
            {isSignUp
              ? "Enter your details and start your journey with us."
              : "To keep connected with us, please sign in."}
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="border border-white text-white px-6 py-2 rounded-lg mt-6 hover:bg-white hover:text-red-500 transition-all"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
