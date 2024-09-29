import React from "react";
import MySwiperComponent from "../slider/MySwiperComponent";
import HomeMovies from "./homeMovies/HomeMovies";
import HomeTv from "./homeTv/HomeTv";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";

function Home() {
  return (
    <div className="h-full ">
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>
      <MySwiperComponent />

      <HomeMovies />

      <HomeTv />
    </div>
  );
}

export default Home;
