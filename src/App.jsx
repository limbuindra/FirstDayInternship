import React from "react";
import { useState, createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Navbar/Layout";
import Post from "./pages/Post/Post";
import Album from "./pages/Album/Album";
import UserDetails from "./pages/UserDetails/userDetails";
import AlbumDetails from "./pages/AlbumDetails/AlbumDetails";
import Users from "./pages/Users/Users";
import Footer from "./Components/Footer/Footer";


export const ColorContext = createContext();
const App = () => {
	const [toggle, setToggle] = useState(false);
	const toggleBackgroundColor = () => {
		setToggle((prevTheme) => !prevTheme);
	};
	return (
		<>
			<div
				style={{
					backgroundColor: toggle ? "#333" : "#fff",
				}}
			>
				<ColorContext.Provider value={{ toggle, toggleBackgroundColor }}>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Users />} />
							<Route path="/:id" element={<UserDetails />} />
							<Route path="/post" element={<Post />} />
							<Route path="/album" element={<Album />} />
							<Route path="/album/:albumId" element={<AlbumDetails />} />
						</Route>
					</Routes>
				</ColorContext.Provider>
				<Footer/>
			</div>
		</>
	);
};

export default App;
