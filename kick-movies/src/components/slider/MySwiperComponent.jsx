import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { fetchMovies } from "../../services/getMovies";

export default function MySwiperComponent() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="h-2/6 m-8  ">
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        loop={true}
        className="swiper w-full h-2/6 "
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="swiper-slide flex justify-center items-center text-lg"
          >
            <img
              src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
              alt="Slide"
              className="h-2/6  m-auto  object-fill"
            />
            <h2 className="flex justify-center items-center flex-col">
              {movie.original_title}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
