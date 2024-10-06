import React from "react";
import { TvShowCard } from "../../tvShowCard/TvShowCard";
import MovieCard from "../../movieCard/MovieCard";
import { HomeCardContextProvider } from "./HomeCardContext";

const HomeCard = ({ homeData, card }) => {
  return (
    <>
      {homeData.map((hd) => (
        <HomeCardContextProvider key={hd.id} cardInfo={hd}>
          {card}
        </HomeCardContextProvider>
      ))}
    </>
  );
};

export default HomeCard;
