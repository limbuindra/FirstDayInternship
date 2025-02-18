import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { IoCloudyNight, IoPersonAdd } from "react-icons/io5";
import { auth, createUserWithEmailAndPassword } from "../Config/Firebase"; // Import Firebase functions
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
	const displayName = e.target[0].value;
	const email = e.target[1].value;
	const password = e.target[2].value;
	const confirmpassword = e.target[3].value;

	// const file = e.target[3].files[0];
	createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
	  // Signed up 
	  const user = userCredential.user;
	  console.log("user", user)
	  // ...
	})
	.catch((error) => {
	  const errorCode = error.code;
	  const errorMessage = error.message;
	  // ..
	}
	)
    // setLoading(true);
	// console.log(e.target[0].value)

    // if (
    //   !formValues.username ||
    //   !formValues.email ||
    //   !formValues.password ||
    //   !formValues.confirmpassword
    // ) {
    //   toast.error("Please fill all fields.");
    //   setLoading(false);
    //   return;
    // }

    // if (formValues.password !== formValues.confirmpassword) {
    //   toast.error("Passwords do not match.");
    //   setLoading(false);
    //   return;

    // }

    // try {
    //   await createUserWithEmailAndPassword(auth, formValues.email, formValues.password);
    //   toast.success("Registration successful!");
    //   navigate("/login"); // Redirect to login after successful registration
    // } catch (error) {
    //   toast.error(error.message); // Show error message
    // }
    // setLoading(false);


  };

  return (
    <div className="bg-slate-200 p-10 flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-96 p-8 bg-white rounded-xl shadow-lg"
      >
        <h1 className="text-center font-bold text-3xl">Register</h1>
        <div className="mt-4">
          <label htmlFor="username" className="block text-base mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            className="border p-2 rounded-lg w-full text-base focus:outline-none focus:ring-0 focus:border-blue-500"
            placeholder="Username"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-base mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="border p-2 rounded-lg w-full text-base focus:outline-none focus:ring-0 focus:border-blue-300"
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
        <div className="mt-4">
          <label htmlFor="confirmpassword" className="block text-base mb-2">
            Confirm Password
          </label>
          <input
            id="confirmpassword"
            name="confirmpassword"
            value={formValues.confirmpassword}
            onChange={handleChange}
            className="border p-2 rounded-lg w-full text-base focus:outline-none focus:ring-0 focus:border-blue-300"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            className="text-lg bg-gray-500 hover:bg-gray-600 rounded-xl text-white py-2 w-full"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>
        <span className="flex justify-end">
          Already have an account?
          <button className="underline text-blue-500 cursor-pointer">
            <Link to="/"> Sign in instead</Link>
          </button>
        </span>
      </form>
    </div>
  );
};

export default Register;
