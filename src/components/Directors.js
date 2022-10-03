import React from "react";
import { directors } from "../data";

function Directors() {

  const movieDirectors = directors.map((movieDirector) => (
    <div key={movieDirector.name}>
      <h2>Name: {movieDirector.name}</h2>
      Movies: <br />
      <ul>
        {movieDirector.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return <div>
    <h1>Directors Page</h1>
    {movieDirectors}
  </div>;
}

export default Directors;
