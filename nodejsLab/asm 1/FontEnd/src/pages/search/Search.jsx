import React from "react";
import SearchMovie from "../../component/searchMovie/SearchMovie";
import Nav from "../../component/navbar/Nav";
import "./Search.css";

const Search = () => {
  return (
    <div className="app">
      <Nav />
      <SearchMovie />
    </div>
  );
};

export default Search;
