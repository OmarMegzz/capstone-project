import React from "react";
import SearchInput from "../searchInput/SearchInput";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-gray-600 flex justify-evenly items-center p-3 content-center">
      <div className="w-full flex justify-evenly items-center ">
        <Link to="/" className="flex items-center">
          <img
            className="w-14 h-12 rounded-lg"
            src="public/Kick.svg"
            alt="logo"
          />
        </Link>
        <SearchInput />
      </div>
      <div className="w-full">
        <ul className=" w-full flex justify-evenly items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` ${isActive ? "text-black" : "text-white"} hover:text-black `
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                ` ${isActive ? "text-black" : "text-white"} hover:text-black `
              }
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tvShows"
              className={({ isActive }) =>
                ` ${isActive ? "text-black" : "text-white"} hover:text-black `
              }
            >
              Tv Shows
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
