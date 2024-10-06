import axios from "axios"; // Importing axios for making HTTP requests

// Retrieve the API key from environment variables
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3"; // Base URL for The Movie Database (TMDb) API

export const fetchSearchAll = async (query) => {
  try {
    // Making a GET request to search for multiple types of content
    const response = await axios.get(
      `${BASE_URL}/search/multi?query=${query}`,
      {
        params: { api_key: API_KEY },
      }
    );

    // Return the array of results from the response data
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
