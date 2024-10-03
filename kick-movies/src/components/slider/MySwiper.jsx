import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { fetchMovies } from "../../services/getMovies";

export default function MySwiper() {
  const [slider, setslider] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getslider = async () => {
      try {
        const sliderData = await fetchMovies();
        setslider(sliderData);
      } catch (err) {
        setError("Failed to fetch slider");
      } finally {
        setLoading(false);
      }
    };
    getslider();
  }, []);

  if (loading)
    return (
      <p className="flex justify-center items-center w-full h-screen">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="flex justify-center items-center w-full h-screen">
        {error}
      </p>
    );

  return (
    <div className=" h-2/6 m-8 ">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="swiper w-full h-2/6 "
      >
        {slider.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="swiper-slide flex justify-center items-center text-lg"
          >
            <img
              src={`https://image.tmdb.org/t/p/w780/${slide.backdrop_path}`}
              alt="Slide"
              className="h-2/6  m-auto  object-fill"
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
