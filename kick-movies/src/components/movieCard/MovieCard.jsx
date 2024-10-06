import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, to, ...rest }) => {
  return (
    <Link {...rest} key={movie.id} to={to}>
      {/* Container for the movie card with hover and focus effects */}
      <div className="transform transition-transform duration-300 hover:scale-105 content-center focus:scale-105 shadow-lg w-56 h-full border rounded-lg p-4">
        {/* Movie poster image */}
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt=""
        />
        {/* Movie title */}
        <h2 className="font-semibold">{movie.title}</h2>
        {/* Movie release date */}
        <p>Release Date: {movie.release_date}</p>
        {/* Movie rating */}
        <p>Rating: {movie.vote_average}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
