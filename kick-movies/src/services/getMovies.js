import axios from "axios"; // Importing axios for making HTTP requests

// Retrieve the API key from environment variables
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3"; // Base URL for TMDb API

export const fetchMovies = async () => {
  try {
    // Making a GET request to fetch movies
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY, // Pass the API key as a query parameter
        page: 1, // Specify the page number for pagination
      },
    });

    // Return the results array from the response data
    return response.data.results;
  } catch (error) {
    // Log the error and rethrow it for handling in the calling function
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchMoviesDetails = async (movie_id) => {
  try {
    // Making a GET request to fetch movie details
    const response = await axios.get(`${BASE_URL}/movie/${movie_id}`, {
      params: {
        api_key: API_KEY, // Pass the API key as a query parameter
      },
    });

    // Return the entire movie details object from the response data
    return response.data;
  } catch (error) {
    // Log the error and rethrow it for handling in the calling function
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchMoviesByQuantity = async () => {
  try {
    // Making a GET request to fetch movies
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    });

    // Return only the first 6 results from the response data
    return response.data.results.slice(0, 6);
  } catch (error) {
    // Log the error and rethrow it for handling in the calling function
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchMovieCredits = async (movie_id) => {
  try {
    // Making a GET request to fetch movie credits
    const response = await axios.get(`${BASE_URL}/movie/${movie_id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });

    // Return the cast array from the response data
    return response.data.cast;
  } catch (error) {
    // Log the error and rethrow it for handling in the calling function
    console.error("Error fetching data:", error);
  }
};
