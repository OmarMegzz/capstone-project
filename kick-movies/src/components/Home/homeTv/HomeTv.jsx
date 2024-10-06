import React, { useEffect, useState } from "react";
import HomeCard from "../HomeCard/HomeCard";
import { fetchTvByquntity } from "../../../services/getTvShows";
import { TvShowCard } from "../../tvShowCard/TvShowCard";

function HomeTv() {
  // State to store TV show data
  const [shows, setShows] = useState([]);

  // State to indicate loading status
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);

  // useEffect to fetch TV shows when the component mounts
  useEffect(() => {
    const getTvShows = async () => {
      try {
        // Fetch TV shows data and update state
        const tvShowsData = await fetchTvByquntity();
        setShows(tvShowsData);
      } catch (err) {
        // Handle error and set error message
        setError("Failed to fetch series");
      } finally {
        // Set loading to false once the request is complete
        setLoading(false);
      }
    };
    getTvShows();
  }, []);

  // Display a loading message while fetching data
  if (loading)
    return (
      <p className="flex justify-center items-center w-full h-full">
        Loading...
      </p>
    );

  // Display an error message if fetching TV shows failed
  if (error)
    return (
      <p className="flex justify-center items-center w-full h-screen">
        {error}
      </p>
    );

  // Render the TV shows once data is loaded successfully
  return (
    <>
      <div className="flex flex-col m-4 gap-8">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">TV Show</h2>
        </div>

        {/* Container to display the list of TV show cards */}
        <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100 rounded-lg">
          <HomeCard homeData={shows} card={<TvShowCard />} />
        </div>
      </div>
    </>
  );
}

export default HomeTv;
