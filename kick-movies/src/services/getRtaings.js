import axios from "axios"; // Importing axios for making HTTP requests

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "http://www.omdbapi.com/"; // Base URL for OMDb API

export const getRatings = async (query) => {
  try {
    // Making a GET request to fetch ratings based on the provided title
    const response = await axios.get(`${BASE_URL}?t=${query}`, {
      params: { apikey: API_KEY },
    });

    // Return the ratings array from the response data
    return response.data.Ratings;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("Movie not found!");
    } else {
      console.error("An error occurred:", error);
    }
  }
};
