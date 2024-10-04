import React, { useEffect, useState } from "react";
import { TvShowCard } from "../../tvShowCard/TvShowCard";
import { fetchMoviesByquntity } from "../../../services/getMovies";
import { fetchTvByquntity } from "../../../services/getTvShows";
import HomeCard from "../HomeCard/HomeCard";

function HomeTv() {
  const [shows, setshows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTvShows = async () => {
      try {
        const tvShowsData = await fetchTvByquntity();
        setshows(tvShowsData);
      } catch (err) {
        setError("Failed to fetch series");
      } finally {
        setLoading(false);
      }
    };
    getTvShows();
  }, []);

  if (loading)
    return (
      <p className="flex justify-center items-center w-full h-full">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="flex justify-center items-center w-full h-screen">
        {error}
      </p>
    );
  return (
    <>
      <div className="flex flex-col m-4 gap-8">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">TV Show</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100 rounded-lg">
          <HomeCard homeData={shows} />
        </div>
      </div>
    </>
  );
}

export default HomeTv;
