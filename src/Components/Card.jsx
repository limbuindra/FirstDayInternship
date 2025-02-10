import React, { useState } from "react";

const Card = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavourite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="relative bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-64 md:w-80">
      <div className="relative group">
        <img
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          src={movie.url}
          alt={movie.title}
        />
        <div className="absolute top-0 right-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between p-4">
          <button
            onClick={handleFavourite}
            className={`text-white text-2xl p-2 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 hover:bg-black/70 ${
              isFavorite ? "text-red-500" : ""
            }`}
          >
            ♥
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-white truncate">{movie.title}</h3>
        <p className="text-sm text-gray-400">{movie.release_date}</p>

        <div className="mt-4 flex items-center space-x-2">
          <button className="text-white bg-[#ff4757] py-1 px-4 rounded-lg hover:bg-[#e84118] transition-colors duration-200 text-sm">
            Rate
          </button>
          <button className="text-white border border-[#ff4757] py-1 px-4 rounded-lg hover:bg-[#ff4757] hover:text-white transition-colors duration-200 text-sm">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
