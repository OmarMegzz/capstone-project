import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function SearchInput() {
  return (
    <div className="relative">
      <input
        type="text"
        className="pl-10 pr-4 py-2 rounded border border-gray-300"
        placeholder="Search"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <i className="fas fa-search text-gray-400"></i>
      </div>
    </div>
  );
}

export default SearchInput;
