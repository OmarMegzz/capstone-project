import React from "react";
import MySwiper from "../slider/MySwiper";
import HomeMovies from "./homeMovies/HomeMovies";
import HomeTv from "./homeTv/HomeTv";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";

function Home() {
  return (
    <div className="h-full">
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>
      <MySwiper />

      <HomeMovies />

      <HomeTv />
    </div>
  );
}

export default Home;
