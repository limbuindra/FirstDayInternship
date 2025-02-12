import React, { useState } from "react";
import Users from "./Components/Users";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import InfiniteScroll from "./Components/InfiniteScroll";
import Favorites from "./Pages/Favorites";
import Navbar from "./Components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";

const App = () => {
	return (
		<>
			{/* <Routes>

<Route path="/" element={<Users/>}/>

</Routes>  */}
			{/* <InfiniteScroll/> */}
      <MovieProvider>

			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="favorites/" element={<Favorites />} />
			</Routes>
      </MovieProvider>
		</>
	);
};

export default App;
