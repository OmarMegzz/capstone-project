import React from "react";
import { TvShowCard } from "../../tvShowCard/TvShowCard";

const HomeCard = ({ homeData }) => {
  return (
    <>
      {homeData.map((hd) => (
        <TvShowCard key={hd.id} to={`tvShows/${hd.id}`} tv={hd} />
      ))}
    </>
  );
};

export default HomeCard;
