import React from "react";
import { Link } from "react-router-dom";

export const TvShowCard = ({ tv, to }) => {
  return (
    <Link to={to}>
      <div className="transform transition-transform duration-300 hover:scale-105 focus:scale-105 shadow-lg w-56 h-full border rounded-lg p-4">
        <img
          src={`https://image.tmdb.org/t/p/original/${tv.poster_path}`}
          alt=""
          className="w-full h-auto"
        />
        <h2 className="font-semibold text-lg mt-2">{tv.name}</h2>
        <p>Release Date: {tv.release_date}</p>
        <p>Rating: {tv.vote_average}</p>
      </div>
    </Link>
  );
};
