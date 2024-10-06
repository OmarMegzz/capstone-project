import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [searchQuery, setsearchQuery] = useState(""); // State for the search query

  const navigate = useNavigate(); // Hook for navigation

  const handleSearch = () => {
    if (!searchQuery) return; // Prevents empty search
    setsearchQuery(""); // Clears the input after searching
    navigate(`/search/${searchQuery}`); // Navigates to the search results page
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Triggers search on Enter key press
    }
  };

  return (
    <>
      <div className="relative flex flex-col sm:flex-row items-center sm:items-stretch">
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            className="w-full sm:w-64 pl-10 pr-4 py-2 rounded border border-gray-300"
            placeholder="Search"
            onChange={(e) => setsearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            value={searchQuery}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <i className="fas fa-search text-black"></i>
          </div>
        </div>
        <button
          className="mt-2 sm:mt-0 sm:ml-3 py-2 px-4 sm:px-6 bg-gray-500 hover:bg-gray-400 rounded w-full sm:w-auto"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
}

export default SearchInput;
