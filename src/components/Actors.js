import React from "react";
import { actors } from "../data";

function Actors() {

  const movieActors = actors.map((movieActor) => (
    <div key={movieActor.name}>
      <h2>Name: {movieActor.name}</h2>
      Movies: <br />
      <ul>
        {movieActor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
    
  ))

  return <div>
    <h1>Actors Page</h1>
    {movieActors}
  </div>;
}

export default Actors;
