import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, to }) => {
  return (
    <Link key={movie.id} to={to}>
      <div className="transform transition-transform duration-300 hover:scale-105 focus:scale-105 shadow-lg w-56 h-full border rounded-lg p-4">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt=""
        />
        <h2 className="font-semibold">{movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
