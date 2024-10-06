import React from "react";
import { Link } from "react-router-dom";
import { useHomeCardContext } from "../Home/HomeCard/HomeCardContext";

const MovieCard = ({ movie, ...rest }) => {
  const { cardData } = useHomeCardContext();
  return (
    <Link {...rest} key={cardData.id} to={`/movies/${cardData.id}`}>
      {/* Container for the movie card with hover and focus effects */}
      <div className="transform transition-transform duration-300 hover:scale-105 content-center focus:scale-105 shadow-lg w-56 h-full border rounded-lg p-4">
        {/* Movie poster image */}
        <img
          src={`https://image.tmdb.org/t/p/original/${cardData.poster_path}`}
          alt=""
        />
        {/* Movie title */}
        <h2 className="font-semibold">{cardData.title}</h2>
        {/* Movie release date */}
        <p>Release Date: {cardData.release_date}</p>
        {/* Movie rating */}
        <p>Rating: {cardData.vote_average}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
