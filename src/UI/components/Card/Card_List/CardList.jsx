import React from "react";
import "./CardList.css";

function CardList({ name, poster }) {
 return (
  <div className="Card">
   <div className="Card-Block">
    <img
     className="Card_Container_img"
     src={poster.url}
     alt={name}
     loading="lazy"
    />
   </div>
   <h2 className="Card-title">{name}</h2>
  </div>
 );
}

export default CardList;
