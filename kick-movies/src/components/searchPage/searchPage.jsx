import React, { useEffect, useState } from "react";
import MovieCard from "../movieCard/MovieCard";
import { fetchSearchAll } from "../../services/getSearch";
import { useParams } from "react-router-dom";

function SearchPage() {
  const { searchQuery } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const handleSearch = async () => {
      const searchData = await fetchSearchAll(searchQuery);
      setResults(searchData);
    };
    handleSearch();
  }, [searchQuery]);

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-4 p-4 m-4">
        {results.map((result) => (
          <MovieCard
            key={result.id}
            movie={result}
            to={`/movies/${result.id}`}
          />
        ))}
      </div>
    </>
  );
}

export default SearchPage;
