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
import Drama from "./components/Drama/Drama.jsx";
import AboutUs from "./components/About/AboutUs.jsx";
import MovieDetails from "./components/movieDetails/MovieDetails.jsx";
import { register } from "swiper/element/bundle";
register();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:id" element={<MovieDetails />} />
      <Route path="drama" element={<Drama />} />
      <Route path="about" element={<AboutUs />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
