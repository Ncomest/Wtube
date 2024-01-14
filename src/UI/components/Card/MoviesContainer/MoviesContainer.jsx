import React from "react";
import "./MoviesContainer.css";

const imger = "https://image.tmdb.org/t/p/w500";

function MoviesContainer({ poster_path, title }) {
 return (
  <div className="Card">
   <div className="Card-Block">
    <img
     className="Card_Container_img"
     src={imger + poster_path}
     alt={title}
     loading="lazy"
    />
   </div>
   <h2 className="Card-title">
    {title}
    {/* {title.length <= 17 ? title : `${title.slice(0, 17)} ...`} */}
   </h2>
  </div>
 );
}

export default MoviesContainer;
