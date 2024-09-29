import React, { useEffect, useState } from "react";
import { fetchMoviesDetails } from "../../services/getMovies";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MovieCredits from "../credits/MovieCredits";
import { HelmetProvider } from "react-helmet-async";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
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
      <HelmetProvider>
        <Helmet>
          <title>Movie Details</title>
        </Helmet>
      </HelmetProvider>
      <div
        className="flex flex-col justify-center items-center  m-10 p-10 gap-2 h-screen"
        key={movieDetails.id}
      >
        <img
          className="w-full h-80 object-fit md:h-96 lg:h-2/3 rounded-lg shadow-lg"
          src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
          alt={movieDetails.original_title}
        />

        <h2 className="text-2xl font-semibold text-center mt-4">
          {movieDetails.original_title}
        </h2>

        <p className="w-full max-w-3xl text-center text-gray-700 leading-relaxed">
          <span className="font-semibold">Overview : </span>
          {movieDetails.overview}
        </p>

        <p className=" flex justify-center gap-x-1 items-center w-full max-w-3xl text-center text-gray-700 leading-relaxed">
          <span className="font-semibold">Geners : </span>
          {movieDetails.genres.map((genere) => (
            <p key={genere.id}>{genere.name}</p>
          ))}
        </p>

        <h3 className="text-lg text-gray-600 mt-2">
          <span className="font-semibold">Runtime : </span>
          {movieDetails.runtime} minutes
        </h3>

        <h3 className="text-lg text-gray-600 mt-2">
          <span className="font-semibold">Popularity : </span>
          {movieDetails.popularity}
        </h3>

        <h3 className="text-lg text-gray-600 mt-2">
          <span className="font-semibold">Vote Average : </span>
          {movieDetails.vote_average}
        </h3>
      </div>
      <MovieCredits />
    </>
  );
};

export default MovieDetails;
