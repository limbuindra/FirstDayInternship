import React, { useState } from "react";
import Card from "../Components/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovies = async () => {
	const response = await axios.get(`http://localhost:3000/movies`);
	return response.data;
};
const Homepage = () => {
	const [search, setSearch] = useState("");
	console.log("search data", search);

	const { data } = useQuery({
		queryKey: ["movies"],
		queryFn: fetchMovies,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch("");
	};
	return (
		<>
			<div className="mt-18 p-4 bg-slate-100">
				<form
					onSubmit={handleSubmit}
					className="md:flex md:mt-4 md:gap-4 md:justify-center md:items-center"
				>
					<input
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search for movies...."
						className="border md:w-[500px] border-slate-400 md:p-3 md:rounded-xl  focus:outline-none "
					/>
					<button
						type="submit"
						className="border border-blue-100 md:py-3 md:px-5 md:bg-slate-800 rounded-xl md:text-white"
					>
						Search
					</button>
				</form>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-6 md:gap-6">
					{data?.map(
						(movie) => (
							// movie.title.toLowerCase().startsWith(search) && (
							<Card
								title={movie.title}
								release_date={movie.release_date}
								key={movie.id}
								image={movie.image}
							/>
						)
						// )
					)}
				</div>
			</div>
		</>
	);
};

export default Homepage;
