import React from "react";

import "./SearchMovie.css";

const SearchMovie = () => {
  return (
    <div className="search">
      <div className="search_1">
        <input type="text" placeholder="Search..." name="search" />
        <button type="submit" className="search_icon">
          <i className="fa fa-search "></i>
        </button>
      </div>
      <div className="search_2">
        <button className="button_1">Reset</button>
        <button className="button_2">Search</button>
      </div>
    </div>
  );
};

export default SearchMovie;
