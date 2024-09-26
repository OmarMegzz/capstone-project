import React, { useEffect, useState } from "react";
import { fetchMoviesDetails } from "../../services/getMovies";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetils, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const movieDetailsData = await fetchMoviesDetails(id);
        setMovieDetails(movieDetailsData);
      } catch (err) {
        setError("Failed to fetch movies details");
      } finally {
        setLoading(false);
      }
    };
    movieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div
        className="flex flex-col justify-center items-center  m-10 p-10 gap-2 h-screen"
        key={movieDetils.id}
      >
        <img
          className="w-full h-80 object-cover md:h-96 lg:h-2/3 rounded-lg shadow-lg"
          src={`https://image.tmdb.org/t/p/original/${movieDetils.backdrop_path}`}
          alt={movieDetils.original_title}
        />

        <h2 className="text-2xl font-semibold text-center mt-4">
          {movieDetils.original_title}
        </h2>

        <p className="w-full max-w-3xl text-center text-gray-700 leading-relaxed">
          <span className="font-semibold">Overview : </span>
          {movieDetils.overview}
        </p>

        <h3 className="text-lg text-gray-600 mt-2">
          <span className="font-semibold">Runtime : </span>
          {movieDetils.runtime} minutes
        </h3>

        <h3 className="text-lg text-gray-600 mt-2">
          <span className="font-semibold">Popularity : </span>
          {movieDetils.popularity}
        </h3>

        <h3 className="text-lg text-gray-600 mt-2">
          <span className="font-semibold">Vote Average : </span>
          {movieDetils.vote_average}
        </h3>
      </div>
    </>
  );
};

export default MovieDetails;
