import React from "react";
import { Link } from "react-router-dom";
import { useHomeCardContext } from "../Home/HomeCard/HomeCardContext";

export const TvShowCard = ({ tv, to }) => {
  const { cardData } = useHomeCardContext();

  return (
    <Link key={cardData.id} to={`tvShows/${cardData.id}`}>
      <div className="transform transition-transform duration-300 content-center hover:scale-105 focus:scale-105 shadow-lg w-56 h-full border rounded-lg p-4">
        <img
          src={`https://image.tmdb.org/t/p/original/${cardData.poster_path}`}
          alt=""
          className="w-full h-auto"
        />
        <h2 className="font-semibold text-lg mt-2">{cardData.name}</h2>
        <p>Release Date: {cardData.first_air_date}</p>
        <p>Rating: {cardData.vote_average}</p>
      </div>
    </Link>
  );
};
