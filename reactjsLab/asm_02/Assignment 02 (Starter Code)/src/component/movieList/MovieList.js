import React from "react";
import "./MovieList.css";

const MovieList = (props) => {
  if (props.movies !== "") {
    return (
      <div className="movie_list">
        <div className="movie_list_1">
          {props.movies.results.map((movie) => (
            <div className="movie">
              <img
                src={
                  "https://image.tmdb.org/t/p/original/" +
                  movie.poster_path +
                  "?api_key=e75ba6800f1ed708ee86dead41f99008&with_network=123"
                }
                alt="movie"
                className="movie_img"
              ></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <></>;
};

export default MovieList;
