import React, { useEffect, useState } from "react";
import { fetchTvDetails } from "../../services/getTvShows";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const TvDetails = () => {
  const { id } = useParams();
  const [seriesDetails, setSeriesDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const seriesDetails = async () => {
      try {
        const seriesDetailsData = await fetchTvDetails(id);

        setSeriesDetails(seriesDetailsData);
      } catch (err) {
        setError("Failed to fetch movies details");
      } finally {
        setLoading(false);
      }
    };
    seriesDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Helmet>
        <title>Tv Shows Details</title>
      </Helmet>
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

        <h3 className="text-lg text-gray-600 mt-2">
          <span className="font-semibold">Popularity : </span>
          {seriesDetails.popularity}
        </h3>

        <h3 className="text-lg text-gray-600 mt-2">
          <span className="font-semibold">Vote Average : </span>
          {seriesDetails.vote_average}
        </h3>
      </div>
    </>
  );
};

export default TvDetails;
