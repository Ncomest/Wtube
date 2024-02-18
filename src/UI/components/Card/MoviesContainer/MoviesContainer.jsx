import React from "react";
import "./MoviesContainer.css";

const poster = "https://image.tmdb.org/t/p/w500";

function MoviesContainer({ poster_path, title, release_date }) {
 return (
  <div className="MoviesContainer">
   <div>
    <img src={poster + poster_path} alt={title} loading="lazy" />
   </div>
   <p>{release_date.slice(0, 4)}•</p>
   <h3>{title}</h3>
  </div>
 );
}

export default MoviesContainer;
