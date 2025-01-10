import React from "react";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Post from "./Components/Post/Post";
import Album from "./Components/Album/Album";
import UserDetails from "./Components/UserDetails/userDetails";
//url ;
const App = () => {
	const [toggle, setToggle] = useState(true);

	const handleToggle = () => {
		setToggle(!toggle);
	};
	const backgroundColor = toggle ? " White" : "gray";
	return (
		<>
			<div style={{ backgroundColor,height:"100%"}}>
				<button className="button"
				
					onClick={handleToggle}
				>
					Change Background Color
				</button>
				<Routes>
					<Route
						path="/"
						handleToggle={handleToggle}
						toggle={toggle}
						element={<Layout />}
					>
						<Route index element={<Navbar />} />
						<Route path="/:id" element={<UserDetails/>}/>
						<Route path="post" element={<Post />} />
						<Route path="album" element={<Album />} />
					</Route>
				</Routes>
			</div>
		</>
	);
};

export default App;
