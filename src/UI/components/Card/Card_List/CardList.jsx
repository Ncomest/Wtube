import React from "react";
import "./CardList.css";

function CardList({ name, poster }) {
 return (
  <div className="CardList">
   <div className="CardList-Block">
    <img
     className="CardList_Container_img"
     src={poster.url}
     alt={name}
     loading="lazy"
    />
   </div>
   <h2 className="CardList-title">{name}</h2>
  </div>
 );
}

export default CardList;
