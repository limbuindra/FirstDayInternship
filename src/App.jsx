import React from "react";
import { useState, createContext, useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Post from "./Components/Post/Post";
import Album from "./Components/Album/Album";
import UserDetails from "./Components/UserDetails/userDetails";
import AlbumDetails from "./Components/AlbumDetails/AlbumDetails";
//url ;
export const ColorContext = createContext();
const App = () => {
	const [toggle, setToggle] = useState(false);
	const toggleBackgroundColor = () => {
		setToggle((prevTheme) => !prevTheme);
	};
	return (
		<>
			<ColorContext.Provider value={{ toggle, toggleBackgroundColor }}>
				<div
					style={{
						backgroundColor: toggle ? "#333" : "#fff",
					}}
				>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Navbar />} />
							<Route path="/:id" element={<UserDetails />} />
							<Route path="/post" element={<Post />} />
							<Route path="/album" element={<Album />} />
							<Route path="/album/:albumId" element={<AlbumDetails />} />
						</Route>
					</Routes>
				</div>
			</ColorContext.Provider>
		</>
	);
};

export default App;
