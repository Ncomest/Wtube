import React from "react";
import "./MoviesBody.css";

import LeftSideMovies from "./LeftSideMovies/LeftSideMovies";
import RightSideMovies from "./RightSideMovies/RightSideMovies";

function MoviesBody({ movieDetails, movieDetailsRev }) {
 return (
  <div className="MoviesBody">
   <LeftSideMovies movieDetails={movieDetails} />
   <RightSideMovies movieDetails={movieDetails} movieDetailsRev={movieDetailsRev}/>
  </div>
 );
}

export default MoviesBody;
