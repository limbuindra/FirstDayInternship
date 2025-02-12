import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import Card from "../Components/Card";

const Favorites = () => {
	const { favorites } = useMovieContext();

	if (favorites) {
		return (
			<div className=" mt-24">
				<h2 className="text-5xl text-center">Your Favorites</h2>
				<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-6 md:gap-6">
					{favorites.map((movie) => (
						<Card
							key={movie.id}
							movie={movie}
							title={movie.original_title}
							release_date={movie.release_date}
							rating={movie.vote_average}
							image={movie.poster_path}
						/>
					))}
				</div>
			</div>
		);
	}
	return (
		<div className="flex justify-center text-center  h-screen items-center bg-slate-300">
			<div className="bg-white p-6 rounded-2xl ">
				<h2 className="text-4xl text-red-500">No Favorite Movies Yet</h2>
				<p className="text-xl mt-8">
					Start adding movies to your favourites and they will appear here!!!{" "}
				</p>
			</div>
		</div>
	);
};

export default Favorites;
