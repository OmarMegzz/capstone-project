import React, { useEffect, useState } from "react";
import { fetchMoviesByquntity } from "../../../services/getMovies";
import MovieCard from "../../movieCard/MovieCard";
import HomeCard from "../HomeCard/HomeCard";

const HomeMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movieData = await fetchMoviesByquntity();
        setMovies(movieData);
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  if (loading) {
    return <p className="text-center">Loading movies...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <>
      <div className="flex flex-col m-4 gap-8">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">Movies</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <HomeCard homeData={movies} />
        </div>
      </div>
    </>
  );
};

export default HomeMovies;

/** 
 *   {movies.map((movie) => (
            <MovieCard key={movie.id} to={`movies/${movie.id}`} movie={movie} />
          ))}
*/
