import React from "react";
import "./ActorsCard.css";

function ActorsCard({ photo, name }) {
 return (
  <div className="Card">
   <div className="Card-Block">
    <img className="Card_Container_img" src={photo} alt={name} loading="lazy" />
   </div>
   <h2 className="Card-title">{name}</h2>
  </div>
 );
}

export default ActorsCard;
