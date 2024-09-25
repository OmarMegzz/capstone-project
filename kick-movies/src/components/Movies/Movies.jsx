import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services/getMovies";
import { Link } from "react-router-dom";

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
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="movie-list my-8  ">
        <div className="flex  justify-start flex-wrap items-center  flex-row gap-8">
          {movies.map((movie) => (
            <Link key={movie.id} to={`${movie.id}`}>
              <div className=" w-56 h-96 border rounded-lg p-4">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                />
                <h2 className="font-semibold">{movie.title}</h2>
                <p>Release Date: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movies;
