import React from "react";

const MovieCard = ({ movie }) => {
	const handleFavorite = () => {
		alert("clicekd");
	};
	return (
		<>
			<div className="movie-card">
				<div className="movie-poster">
					<img src={movie} alt={movie} />
					<div className="movie-overlay">
						<button className="favorite-btn" onClick={handleFavorite}>
							Favourite
						</button>
					</div>
				</div>
                <div className="">

                </div>
			</div>
		</>
	);
};

export default MovieCard;
