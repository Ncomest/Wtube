import React from "react";
import "./MoviesBody.css";

import LeftSideMovies from "../../SideBar/LeftSideMovies/LeftSideMovies";

function MoviesBody({movieDetails}) {
 return (
  <div className="MoviesBody">
   <LeftSideMovies movieDetails={movieDetails}/>
  </div>
 );
}

export default MoviesBody;
