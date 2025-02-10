import React from "react";
import Card from "../Components/Card";

const Homepage = () => {
	const movies = [
		{ id: 1, title: "Home alone", release_date: "2020" },
		{ id: 2, title: "Terminator", release_date: "2022" },
		{ id: 3, title: "John wick", release_date: "2024" },
		{ id: 4, title: "The matrix", release_date: "1999" },
	];
	return (
		<>
			<div className="grid">
				{movies.map((movie) => (
					<Card movie={movie.title} key={movie.id}/>
				))}
			</div>
		</>
	);
};

export default Homepage;
