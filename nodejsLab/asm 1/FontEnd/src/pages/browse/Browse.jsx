import { useState, useEffect } from "react";
import Nav from "../../component/navbar/Nav";
import Banner from "../../component/banner/Banner";
import MovieList from "../../component/movieList/MovieList";

function Browse() {
  // const [users, setUsers] = useState("");
  const [movies, setMovies] = useState("");

  // const fetchUserData = () => {
  //   fetch("http://localhost:3000/trending/all/week")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // };

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  // const fetchMovieData = () => {
  //   fetch(
  //     "https://api.themoviedb.org/3/discover/movie?api_key=e75ba6800f1ed708ee86dead41f99008&with_genres=28"
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setMovies(data);
  //     });
  // };

  // useEffect(() => {
  //   fetchMovieData();
  // }, []);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/trending/all/week");
    const json = await response.json();
    setMovies(JSON.parse(json));
  };

  return (
    <div className="app">
      <Nav />
      {/* <Banner users={users} /> */}
      <MovieList movies={movies} /> <MovieList movies={movies} />
      <MovieList movies={movies} /> <MovieList movies={movies} />
    </div>
  );
}

export default Browse;
