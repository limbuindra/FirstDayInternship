import React, { useState, useEffect, useRef } from "react";
import Card from "../Components/Card";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../Services/api";

const Homepage = () => {
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const observerRef = useRef(null);

  const allMoviesRef = useRef([]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({ pageParam = 1 }) => getPopularMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
  });

  useEffect(() => {
    if (data) {
      const allMovies = data.pages.flat();
      allMoviesRef.current = allMovies; 
      setFilteredMovies(allMovies); 
    }
  }, [data]);

  useEffect(() => {
    const filtered = search.trim()
      ? allMoviesRef.current.filter((movie) =>
          movie.original_title.toLowerCase().includes(search.toLowerCase())
        )
      : allMoviesRef.current;

    setFilteredMovies(filtered); 
  }, [search]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );
    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setFilteredMovies(allMoviesRef.current); 
    }
  };

  if (isError)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      )}

      <div className="mt-16 p-4 bg-slate-100">
        <form
          onSubmit={handleSubmit}
          className="md:flex md:mt-4 md:gap-4 md:justify-center md:items-center"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for movies...."
            className="border md:w-[500px] border-slate-400 md:p-3 md:rounded-xl focus:outline-none"
          />
          <button
            type="submit"
            className="border cursor-pointer border-blue-100 md:py-3 md:px-5 md:bg-slate-800 rounded-xl md:text-white"
          >
            Search
          </button>
        </form>

        <div className="min-h-[400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-6 md:gap-6">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <Card
                key={movie.id}
				movie={movie}
                title={movie.original_title}
                release_date={movie.release_date}
                rating={movie.vote_average}
                image={movie.poster_path}
              />
            ))
          ) : (
            <p className="text-center col-span-4">No movies found</p>
          )}
        </div>

        {isFetchingNextPage && (
          <div className="flex justify-center items-center mt-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
          </div>
        )}

        <div ref={observerRef} className="h-16" />
      </div>
    </>
  );
};

export default Homepage;
