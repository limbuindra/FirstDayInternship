import axios from "axios";
const API_KEY = "c54ac67e45a7940b3ebcf697947b6346";
const BASE_URL = "https://api.themoviedb.org/3"



// export const searchMovies = async (query)=> {
//     const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
//   const data = await response.json();
//   return data.results
// }

export const getPopularMovies = async (page = 1) => {
	const { data } = await axios.get(`${BASE_URL}/movie/popular`, {
		params: {
			api_key:"c54ac67e45a7940b3ebcf697947b6346",
			page,
		},
	});
	return data.results;
};
