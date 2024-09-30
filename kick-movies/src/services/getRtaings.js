import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "http://www.omdbapi.com/";

export const getRtaings = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?t=${query}`, {
      params: { apikey: API_KEY },
    });
    return response.data.Ratings;
  } catch (error) {}
};
