import React, { useEffect, useState } from "react";
import { fetchMoviesDetails } from "../../services/getMovies";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetils, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const movieDetailsData = await fetchMoviesDetails(id);
        setMovieDetails(movieDetailsData);
      } catch (err) {
        setError("Failed to fetch movies details");
      } finally {
        setLoading(false);
      }
    };
    movieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div key={movieDetils.id}>
        <img
          className="w-full h-2/5"
          src={`https://image.tmdb.org/t/p/original/${movieDetils.backdrop_path}`}
          alt=""
        />
        <h2>{movieDetils.original_title}</h2>
        <p>{movieDetils.overview}</p>
        <h3>{movieDetils.runtime}</h3>
      </div>
    </>
  );
};

export default MovieDetails;
