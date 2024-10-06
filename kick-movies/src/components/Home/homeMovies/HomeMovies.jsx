import React, { useEffect, useState } from "react";
import { fetchMoviesByQuantity } from "../../../services/getMovies";
import MovieCard from "../../movieCard/MovieCard";
import HomeCard from "../HomeCard/HomeCard";

const HomeMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movieData = await fetchMoviesByQuantity();
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

  console.log("🚀 ~ HomeMovies ~ movies:", movies);
  return (
    <>
      <div className="flex flex-col m-4 gap-8">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">Movies</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <HomeCard homeData={movies} card={<MovieCard />} />
        </div>
      </div>
    </>
  );
};

export default HomeMovies;
