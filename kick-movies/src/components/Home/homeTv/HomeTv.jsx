import React, { useEffect, useState } from "react";
import { TvShowCard } from "../../tvShowCard/TvShowCard";
import { fetchMoviesByquntity } from "../../../services/getMovies";
import { fetchTvByquntity } from "../../../services/getTvShows";

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
      <div className="flex justify-start m-4 flex-col">
        <div>
          <h2 className="text-2xl font-bold">Tv Show</h2>
        </div>
        <div className="h- flex justify-evenly   p-4 m-4 ">
          {shows.map((show) => (
            <TvShowCard key={show.id} to={`tvShows/${show.id}`} tv={show} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeTv;
