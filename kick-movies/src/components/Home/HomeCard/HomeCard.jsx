import React from "react";
import { TvShowCard } from "../../tvShowCard/TvShowCard";

const HomeCard = ({ homeData }) => {
  return (
    <>
      {/* Map through homeData to render TvShowCard components for each TV show */}
      {homeData.map((hd) => (
        <TvShowCard key={hd.id} to={`tvShows/${hd.id}`} tv={hd} />
      ))}
    </>
  );
};

export default HomeCard;
