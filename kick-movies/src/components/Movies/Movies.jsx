import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services/getMovies";
import { Link } from "react-router-dom";
import MovieCard from "../movieCard/MovieCard";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import HomeCard from "../Home/HomeCard/HomeCard";

function Movies() {
  const [movies, setMovies] = useState([]); // State for storing fetched movies

  const [loading, setLoading] = useState(true); // State for loading status

  const [error, setError] = useState(null); // State for error messages

  useEffect(() => {
    const getMovies = async () => {
      try {
        const moviesData = await fetchMovies(); // Fetch movies from API

        setMovies(moviesData); // Update state with fetched movies
      } catch (err) {
        setError("Failed to fetch movies"); // Handle fetch error
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    getMovies(); // Call the function to fetch movies
  }, []); // Run effect once when component mounts

  if (loading)
    // Show loading message while fetching
    return (
      <p className="flex justify-center items-center w-full h-screen">
        Loading...
      </p>
    );
  if (error)
    // Show error message if fetching fails
    return (
      <p className="flex justify-center items-center w-full h-screen">
        {error}
      </p>
    );

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Movies</title>
        </Helmet>
      </HelmetProvider>
      <div className="movie-list my-8 w-full py-8 flex flex-col items-center">
        <div className="py-4 md:py-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center">Movies</h1>
        </div>
        <div className="w-full px-2 sm:px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center">
          <HomeCard homeData={movies} card={<MovieCard />} />
        </div>
      </div>
    </>
  );
}

export default Movies;
