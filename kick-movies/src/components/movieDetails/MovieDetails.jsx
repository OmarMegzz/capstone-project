import React, { useEffect, useState } from "react";
import { fetchMoviesDetails } from "../../services/getMovies";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MovieCredits from "../credits/MovieCredits";
import { HelmetProvider } from "react-helmet-async";
import Rating from "../Rating/Rating";

const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from URL parameters
  const [movieDetails, setMovieDetails] = useState({}); // State for movie details

  useEffect(() => {
    const getMovieDetails = async () => {
      // Fetch movie details when component mounts
      const movieDetailsData = await fetchMoviesDetails(id);
      setMovieDetails(movieDetailsData); // Update state with fetched data
    };
    getMovieDetails();
  }, [id]); // Run effect when `id` changes

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Movie Details</title>
        </Helmet>
      </HelmetProvider>
      <div
        className="flex flex-col justify-center items-center m-10 p-10 gap-2 h-screen"
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
          <span className="font-semibold">Overview: </span>
          {movieDetails.overview}
        </p>

        <div className="flex justify-center gap-x-1 items-center w-full max-w-3xl text-center text-gray-700 leading-relaxed">
          <span className="font-semibold">Genres: </span>
          {movieDetails.genres?.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </div>

        <h3 className="text-lg text-gray-600 mt-2">
          <span className="font-semibold">Runtime: </span>
          {movieDetails.runtime} minutes
        </h3>

        <h3 className="text-lg text-gray-600 mt-2">
          <span className="font-semibold">Popularity: </span>
          {movieDetails.popularity}
        </h3>

        <h3 className="text-lg text-gray-600 mt-2">
          <span className="font-semibold">Vote Average: </span>
          {movieDetails.vote_average}
        </h3>
      </div>
      <div className="flex justify-center items-center flex-col gap-4">
        <MovieCredits />
        <Rating searchQuery={movieDetails.original_title} />
      </div>
    </>
  );
};

export default MovieDetails;
