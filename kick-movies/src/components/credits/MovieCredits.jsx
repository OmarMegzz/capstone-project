import React, { useEffect } from "react";
import { useState } from "react";
import { fetchMovieCredits } from "../../services/getMovies";
import { useParams } from "react-router-dom";

const MovieCredits = () => {
  const { id } = useParams();
  const [moviecasts, setMovieCasts] = useState([]);

  useEffect(() => {
    const getMovieCasts = async () => {
      const moviecastData = await fetchMovieCredits(id);
      setMovieCasts(moviecastData);
    };
    getMovieCasts();
  }, [id]);

  return (
    <>
      <div className="flex justify-center items-center  w-full h-full gap-6 flex-col p-4 md:p-8">
        <div>
          <h1 className=" flex justify-center items-center text-2xl md:text-2xl lg:text-3xl font-semibold">
            Cast
          </h1>
        </div>
        <div className="flex flex-wrap justify-center  items-center w-full gap-4 md:gap-8 p-4 md:p-8">
          {moviecasts.map((cast) => (
            <div
              className="w-full md:w-1/3 lg:w-1/4 flex justify-between items-center flex-col gap-4 p-4"
              key={cast.id}
            >
              <div className="flex justify-center items-center flex-col gap-1">
                <h2 className="text-lg font-medium text-center">{cast.name}</h2>
                <h2 className="text-sm text-gray-600 text-center">
                  {cast.known_for_department}
                </h2>
              </div>
              <img
                className="w-32 h-48 md:w-48 md:h-64 lg:w-56 lg:h-72 object-cover rounded-lg shadow-lg"
                src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                alt={cast.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieCredits;
