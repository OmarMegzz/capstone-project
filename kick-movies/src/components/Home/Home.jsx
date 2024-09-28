import React from "react";
import MySwiperComponent from "../slider/MySwiperComponent";
import HomeMovies from "./homeMovies/HomeMovies";
import HomeTv from "./homeTv/HomeTv";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="h-full ">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <MySwiperComponent />

      <HomeMovies />

      <HomeTv />
    </div>
  );
}

export default Home;
