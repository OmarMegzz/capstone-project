import React from "react";
import MySwiperComponent from "../slider/MySwiperComponent";
import HomeMovies from "../homeMovies/HomeMovies";

function Home() {
  return (
    <div className="h-full ">
      <MySwiperComponent />

      <HomeMovies />
    </div>
  );
}

export default Home;
