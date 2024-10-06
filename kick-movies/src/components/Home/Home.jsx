import React from "react";
import MySwiper from "../slider/MySwiper";
import HomeMovies from "./homeMovies/HomeMovies";
import HomeTv from "./homeTv/HomeTv";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";

function Home() {
  return (
    <div className="h-full">
      {/* Provide a context for using React Helmet, which helps manage the document head */}
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>

      {/* Carousel/Slider Component */}
      <MySwiper />

      {/* Movies Section */}
      <HomeMovies />

      {/* TV Shows Section */}
      <HomeTv />
    </div>
  );
}

export default Home;
