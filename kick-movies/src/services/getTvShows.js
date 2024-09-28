import axios from "axios";
import React from "react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const FetchTvShows = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/tv`, {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching TV shows:", error.message);
    throw new Error("Failed to fetch TV shows. Please try again later.");
  }
};
