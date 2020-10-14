import React from "react";
import MovieCard from "./moviecard";
import "./movilist.css";

function MovieList(props) {
  return (
    <div className="MovieList">
      {console.log(props.movies)}
      {props.movies
        .filter((movie) =>
          movie.title.toLowerCase().includes(props.inputText.toLowerCase()) && movie.rate>=props.inputrate
        )
        .map((movie, i) => (
          <MovieCard movie={movie} key={i} />
        ))}
    </div>
  );
}
export default MovieList;
