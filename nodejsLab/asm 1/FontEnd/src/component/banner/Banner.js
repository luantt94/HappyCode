import React from "react";

import "./Banner.css";

const Banner = (props) => {
  if (props.users !== "") {
    let movie =
      props.users.results[
        Math.floor(Math.random() * props.users.results.length)
      ];
    let tmp = 0;
    while (movie.poster_path === null && tmp++ < 100) {
      movie =
        props.users.results[
          Math.floor(Math.random() * props.users.results.length)
        ];
    }
    if (movie.poster_path === null) {
      console.log("Most of the poster_path are null");
      return <></>;
    }

    console.log(movie);
    return (
      <div className="banner">
        <>
          <div className="banner_1">
            <img
              src={
                "https://image.tmdb.org/t/p/original/" +
                movie.poster_path +
                "?api_key=e75ba6800f1ed708ee86dead41f99008&with_network=123"
              }
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
      </div>
    );
  }
  return <></>;
};

export default Banner;
