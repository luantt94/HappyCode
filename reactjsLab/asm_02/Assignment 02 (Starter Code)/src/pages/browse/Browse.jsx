import { useState, useEffect } from "react";
import Nav from "../../component/navbar/Nav";
import Banner from "../../component/banner/Banner";
import MovieList from "../../component/movieList/MovieList";

function Browse() {
  const [users, setUsers] = useState("");
  const [movies, setMovies] = useState("");

  const fetchUserData = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=e75ba6800f1ed708ee86dead41f99008&with_network=123"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchMovieData = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=e75ba6800f1ed708ee86dead41f99008&with_genres=28"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data);
      });
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
  return (
    <div className="app">
      <Nav />
      <Banner users={users} />

      <MovieList movies={movies} />
    </div>
  );
}

export default Browse;
