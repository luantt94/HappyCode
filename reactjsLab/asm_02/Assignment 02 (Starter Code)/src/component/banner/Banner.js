import React from "react";

import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="banner">
      {props.movies.map((movie, index) => (
        <>
          <div className="banner_1">
            <img
              src={movie.backdrop_path}
              alt="movie"
              className="banner_img"
            ></img>
          </div>
          <div className="banner_2">
            <h1>{movie.name}</h1>
            <div>
              <button>Play</button>
              <button>My list</button>
            </div>
            <p>{movie.overview}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Banner;
