import React from "react";
import "./MoviesContainer.css";
import "../../../index.css";

function MoviesContainer({ poster, name }) {
 return (
  <div className="Card">
   <div className="Card-Block">
    <img
     className="Movies_Container_img"
     src={poster.url}
     alt={name}
     loading="lazy"
    />
    <h2 className="Card-title">{name}</h2>
   </div>
  </div>
 );
}

export default MoviesContainer;
