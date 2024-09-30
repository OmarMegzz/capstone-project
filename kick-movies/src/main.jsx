import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Movies from "./components/Movies/Movies.jsx";
import Home from "./components/Home/Home.jsx";
import MovieDetails from "./components/movieDetails/MovieDetails.jsx";
import TvSHows from "./components/tvShows/TvSHows.jsx";
import TvDetails from "./components/tvDetails/TvDetails.jsx";
import SearchPage from "./components/searchPage/searchPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:id" element={<MovieDetails />} />
      <Route path="TvShows" element={<TvSHows />} />
      <Route path="TvShows/:id" element={<TvDetails />} />
      <Route path="search/:searchQuery" element={<SearchPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
