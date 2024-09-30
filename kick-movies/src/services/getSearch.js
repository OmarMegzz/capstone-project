import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchSearchAll = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/multi?query=${query}`,
      {
        params: { api_key: API_KEY },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
  }
};
