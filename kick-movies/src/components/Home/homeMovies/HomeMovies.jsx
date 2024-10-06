import React, { useEffect, useState } from "react";
import { fetchMoviesByquntity } from "../../../services/getMovies";
import MovieCard from "../../movieCard/MovieCard";
import HomeCard from "../HomeCard/HomeCard";

const HomeMovies = () => {
  // State to store movie data
  const [movies, setMovies] = useState([]);

  // State to indicate loading status
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);

  // useEffect to fetch movies when the component mounts
  useEffect(() => {
    const getMovies = async () => {
      try {
        // Fetch movie data and update state
        const movieData = await fetchMoviesByquntity();
        setMovies(movieData);
      } catch (err) {
        // Handle error and set error message
        setError("Failed to fetch movies");
      } finally {
        // Set loading to false once the request is complete
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  // Display a loading message while fetching data
  if (loading) {
    return <p className="text-center">Loading movies...</p>;
  }

  // Display an error message if fetching movies failed
  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  // Render the movies once data is loaded successfully
  return (
    <>
      <div className="flex flex-col m-4 gap-8">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">Movies</h2>
        </div>

        {/* Container to display the list of movie cards */}
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <HomeCard homeData={movies} />
        </div>
      </div>
    </>
  );
};

export default HomeMovies;
