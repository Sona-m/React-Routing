import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get("query");
  console.log(value);

  return (
    <div className="flex items-center justify-center flex-col pt-48">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="border rounded bg-blue-400 text-white px-3 py-1"
        >
          Search
        </button>
        <div className="w-50 h-50 bg-blue-400 mt-10">
          <h1 className="font-bold text-white text-xl text-center">{value}</h1>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
