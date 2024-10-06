import React, { useEffect, useState } from "react";
import { FetchTvShows } from "../../services/getTvShows";
import { TvShowCard } from "../tvShowCard/TvShowCard";
import { Helmet, HelmetProvider } from "react-helmet-async";

function TvShows() {
  const [shows, setshows] = useState([]); // State to store fetched TV shows

  const [loading, setLoading] = useState(true); // State to track loading status

  const [error, setError] = useState(null); // State to store any error messages

  useEffect(() => {
    const getTvShows = async () => {
      try {
        const tvShowsData = await FetchTvShows(); // Fetch the data

        setshows(tvShowsData); // Update the state with fetched data
      } catch (err) {
        setError("Failed to fetch movies"); // Update error state with a message
      } finally {
        setLoading(false); // Update loading state to false
      }
    };
    getTvShows();
  }, []);

  // If loading, show loading message
  if (loading)
    return (
      <p className="flex justify-center items-center w-full h-screen">
        Loading...
      </p>
    );

  // If there is an error, display the error message
  if (error)
    return (
      <p className="flex justify-center items-center w-full h-screen">
        {error}
      </p>
    );

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Tv Show</title>
        </Helmet>
      </HelmetProvider>
      <div className="movie-list my-8 w-full py-8 flex flex-col items-center">
        <div className="py-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Tv Show
          </h1>
        </div>
        <div className="w-full px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {shows.map((show) => (
            <TvShowCard tv={show} to={`${show.id}`} key={show.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TvShows; // Export the TvShows component for use in other parts of the application
