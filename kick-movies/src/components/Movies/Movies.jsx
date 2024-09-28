import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services/getMovies";
import { Link } from "react-router-dom";
import MovieCard from "../movieCard/MovieCard";
import { Helmet } from "react-helmet";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  if (loading)
    return (
      <p className="flex justify-center items-center w-full h-screen">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="flex justify-center items-center w-full h-screen">
        {error}
      </p>
    );

  return (
    <>
      <Helmet>
        <title>Movies</title>
      </Helmet>

      <div className="movie-list my-8 w-full py-8 flex flex-col items-center">
        <div className="py-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center">Movies</h1>
        </div>
        <div className="w-full px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {movies.map((movie) => (
            <MovieCard to={`${movie.id}`} key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Movies;
