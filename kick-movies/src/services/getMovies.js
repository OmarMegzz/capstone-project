import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie
`,
      {
        params: {
          api_key: API_KEY,
          page: 1,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchMoviesDetails = async (movie_id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movie_id}`, {
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

export const fetchMoviesByquntity = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie
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
