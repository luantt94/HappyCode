import { useState, useEffect } from "react";
import Nav from "../../component/navbar/Nav";
import Banner from "../../component/banner/Banner";
function Browse() {
  const [movies, setMovies] = useState([
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/original/aoAZgnmMzY9vVy9VWnO3U5PZENh.jpg",
      first_air_date: "2023-01-23",
      genre_ids: [9648, 18],
      id: 202250,
      name: "Dirty Linen",
      origin_country: ["PH"],
      original_language: "tl",
      original_name: "Dirty Linen",
      overview:
        "To exact vengeance, a young woman infiltrates the household of an influential family as a housemaid to expose their dirty secrets. However, love will get in the way of her revenge plot.",
      popularity: 2848.643,
      poster_path: "/aoAZgnmMzY9vVy9VWnO3U5PZENh.jpg",
      vote_average: 4.9,
      vote_count: 14,
    },
  ]);

  // const getMovieRequest = async () ={
  //   const url = 'https://api.themoviedb.org/3/discover/tv?api_key=e75ba6800f1ed708ee86dead41f99008&with_network=123'

  //   const response = await fetch(url);
  //   const responseJson = await response.json();

  //   console.log(responseJson);
  // };

  // useEffect(() => {
  //   getMovieRequest();
  // }, []);

  return (
    <div className="app">
      <Nav />
      <Banner movies={movies} />
    </div>
  );
}

export default Browse;
