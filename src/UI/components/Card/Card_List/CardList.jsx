import React from "react";
import "./CardList.css";

function CardList({ title, poster_path }) {

  const imger = "https://image.tmdb.org/t/p/w500";


 return (
  <div className="CardList">
   <div className="CardList-Block">
    <img
     className="CardList_Container_img"
     src={imger + poster_path}
     alt={title}
     loading="lazy"
    />
   </div>
   <h2 className="CardList-title">{title}</h2>
  </div>
 );
}

export default CardList;
