import React, { useEffect, useState } from "react";
import { fetchMoviesByquntity } from "../../services/getMovies";
import { Link } from "react-router-dom";
import MovieCard from "../movieCard/MovieCard";

const HomeMovies = () => {
  const [movies, setmovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movieData = await fetchMoviesByquntity();
        setmovies(movieData);
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);
  return (
    <>
      <div className="flex justify-start m-4 flex-col">
        <div>
          <h2 className="text-2xl font-bold"> Movies</h2>
        </div>
        <div className="h- flex justify-evenly   p-4 m-4 ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} to={`movies/${movie.id}`} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeMovies;
