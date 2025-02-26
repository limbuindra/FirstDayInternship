import React from "react";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { Routes, Route } from "react-router-dom";
import CartTab from "./Components/CartTab";
import Login from "./Components/Login";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/cart" element={<CartTab />} />
					<Route path="/details/:id" element={<Details />} />
					<Route path="/login" element={<Login/>}/>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
