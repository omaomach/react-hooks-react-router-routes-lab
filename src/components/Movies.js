import React from "react";
import { movies } from "../data";

function Movies() {

  const motionPictures = movies.map((movie) => (
    <div key={movie.time}>
      <h2>Name: {movie.title}</h2>
      Time: {movie.time} <br/>
      Genres:
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Movies Page</h1>
      {motionPictures}
    </div>
  );
}

export default Movies;
