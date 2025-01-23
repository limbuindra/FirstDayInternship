import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About us/About";
import Services from "./Pages/Services/Services";
import UseCases from "./Pages/UseCases/useCases";
import Pricing from "./Pages/Pricing/Pricing";
import Blog from "./Pages/blog/Blog";
import Navbar from "./Pages/Layout/Navbar";

const App = () => {
	return (
		<>
        <Navbar/>
			<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/usecase" element={<UseCases />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/blog" element={<Blog />} />
			</Routes>
		</>
	);
};

export default App;
