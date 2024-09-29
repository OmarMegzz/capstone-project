import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTvCredits } from "../../services/getTvShows";

const TvCredits = () => {
  const { id } = useParams();
  const [Tvcasts, setTvCasts] = useState([]);

  useEffect(() => {
    const getTvCasts = async () => {
      const TvcastData = await fetchTvCredits(id);
      setTvCasts(TvcastData);
    };
    getTvCasts();
  }, [id]);

  return (
    <>
      <div className="flex  justify-center items-center w-full h-full gap-8 flex-col p-4 md:p-8">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Cast
          </h1>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between items-center w-full gap-4 md:gap-8 p-4 md:p-8">
          {Tvcasts.map((TvCast) => (
            <div
              className="w-full md:w-1/3 lg:w-1/4 flex justify-between items-center flex-col gap-4 p-4"
              key={TvCast.id}
            >
              <div className="flex justify-center items-center flex-col gap-1">
                <h2 className="text-lg font-medium text-center">
                  {TvCast.name}
                </h2>
                <h2 className="text-sm text-gray-600 text-center">
                  {TvCast.known_for_department}
                </h2>
              </div>
              <img
                className="w-32 h-48 md:w-48 md:h-64 lg:w-56 lg:h-72 object-cover rounded-lg shadow-lg"
                src={`https://image.tmdb.org/t/p/original/${TvCast.profile_path}`}
                alt={TvCast.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TvCredits;
