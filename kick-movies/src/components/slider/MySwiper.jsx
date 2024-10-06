import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { fetchMovies } from "../../services/getMovies";

export default function MySwiper() {
  const [slider, setslider] = useState([]); // State to hold slider data

  const [loading, setLoading] = useState(true); // State for loading status

  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const getslider = async () => {
      try {
        const sliderData = await fetchMovies(); // Fetch movies

        setslider(sliderData); // Update state with fetched data
      } catch (err) {
        setError("Failed to fetch slider"); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };
    getslider(); // Call the fetch function
  }, []); // Empty dependency array to run once

  if (loading)
    // Show loading indicator
    return (
      <p className="flex justify-center items-center w-full h-screen">
        Loading...
      </p>
    );
  if (error)
    // Show error message
    return (
      <p className="flex justify-center items-center w-full h-screen">
        {error}
      </p>
    );

  return (
    <div className="h-2/6 m-8">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="swiper w-full h-2/6"
      >
        {slider.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="swiper-slide flex justify-center items-center text-lg"
          >
            <img
              src={`https://image.tmdb.org/t/p/w780/${slide.backdrop_path}`}
              alt="Slide"
              className="h-2/6 m-auto object-fill"
            />
            <h2 className="flex justify-center items-center flex-col font-bold text-2xl">
              {slide.original_title}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
