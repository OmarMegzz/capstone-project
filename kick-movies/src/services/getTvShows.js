import axios from "axios";

// Retrieve the API key from environment variables
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3"; // Base URL for The Movie Database (TMDb) API

export const FetchTvShows = async () => {
  try {
    // Making a GET request to discover TV shows
    const response = await axios.get(`${BASE_URL}/discover/tv`, {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    });

    // Return the array of results from the response data
    return response.data.results;
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching TV shows:", error.message);
    // Throw a new error with a user-friendly message
    throw new Error("Failed to fetch TV shows. Please try again later.");
  }
};

export const fetchTvDetails = async (series_id) => {
  try {
    // Making a GET request to fetch details for a specific TV series
    const response = await axios.get(`${BASE_URL}/tv/${series_id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    // Return the details of the TV series
    return response.data;
  } catch (error) {
    // Log the error in case of failure
    console.error("Error fetching data:", error);
    throw error; // Optional: rethrow the error for handling in the calling function
  }
};

export const fetchTvByquntity = async () => {
  try {
    // Making a GET request to discover TV shows
    const response = await axios.get(`${BASE_URL}/discover/tv`, {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    });

    // Return the first 6 results from the response data
    return response.data.results.slice(0, 6);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchTvCredits = async (Tv_id) => {
  try {
    // Making a GET request to fetch the cast credits for a specific TV series
    const response = await axios.get(`${BASE_URL}/tv/${Tv_id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    // Return the array of cast members
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
