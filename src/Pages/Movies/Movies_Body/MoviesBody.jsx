import React from "react";
import "./MoviesBody.css";

import LeftSideMovies from "./LeftSideMovies/LeftSideMovies";
import RightSideMovies from "./RightSideMovies/RightSideMovies";

function MoviesBody({ movieDetails }) {
  
 if (!movieDetails) {
  return <>Wait</>;
 }

 return (
  <div className="MoviesBody">
   <LeftSideMovies movieDetails={movieDetails} />
   <RightSideMovies movieDetails={movieDetails} />
  </div>
 );
}

export default MoviesBody;
