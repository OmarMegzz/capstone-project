import axios from "axios";

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

export const fetchTvDetails = async (series_id) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${series_id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchTvByquntity = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/tv
`,
      {
        params: {
          api_key: API_KEY,
          page: 2,
        },
      }
    );

    return response.data.results.slice(0, 6);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchTvCredits = async (Tv_id) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${Tv_id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
