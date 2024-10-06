import React, { useEffect, useState } from "react";
import { fetchTvDetails } from "../../services/getTvShows";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import TvCredits from "../credits/TvCredits";
import Rating from "../Rating/Rating";

const TvDetails = () => {
  const { id } = useParams(); // Extracting id from the URL parameters

  const [seriesDetails, setSeriesDetails] = useState([]); // State for TV show details

  const [loading, setLoading] = useState(true); // State for loading status

  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const seriesDetails = async () => {
      try {
        const seriesDetailsData = await fetchTvDetails(id); // Fetching TV show details

        setSeriesDetails(seriesDetailsData); // Updating state with fetched data
      } catch (err) {
        setError("Failed to fetch movies details"); // Setting error message
      } finally {
        setLoading(false); // Setting loading to false
      }
    };
    seriesDetails(); // Calling the fetch function
  }, [id]); // Dependency on id

  if (loading) return <p>Loading...</p>; // Loading state
  if (error) return <p>{error}</p>; // Error state

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Tv Shows Details</title>
        </Helmet>
      </HelmetProvider>
      <div
        className="flex flex-col justify-center items-center  m-10 p-10 gap-2 h-screen"
        key={seriesDetails.id}
      >
        <img
          className="w-full h-80 object-fit md:h-96 lg:h-2/3 rounded-lg shadow-lg"
          src={`https://image.tmdb.org/t/p/original/${seriesDetails.backdrop_path}`}
          alt={seriesDetails.name}
        />

        <h2 className="text-2xl font-semibold text-center mt-4">
          {seriesDetails.name}
        </h2>

        <h3 className="text-lg text-gray-600 mt-2">
          <span className="font-semibold">Runtime : </span>
          {seriesDetails.runtime} minutes
        </h3>

        <div className="flex justify-center gap-x-1 items-center w-full max-w-3xl text-center text-gray-700 leading-relaxed">
          <span className="font-semibold">Genres : </span>
          {seriesDetails.genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </div>

        <h3 className="text-lg text-gray-600 mt-2">
          <span className="font-semibold">Popularity : </span>
          {seriesDetails.popularity}
        </h3>

        <h3 className="text-lg text-gray-600 mt-2">
          <span className="font-semibold">Vote Average : </span>
          {seriesDetails.vote_average}
        </h3>
      </div>
      <TvCredits />
      <Rating searchQuery={seriesDetails.name} />
    </>
  );
};

export default TvDetails;
