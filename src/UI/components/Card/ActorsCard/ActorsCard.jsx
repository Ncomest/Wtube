import React from "react";
import "./ActorsCard.css";

function ActorsCard({ profile_path, name }) {
 const imger = "https://image.tmdb.org/t/p/w500";

 return (
  <div className="CardListTest">
   <div className="CardList-Block">
    <img
     className="Card_Container_img"
     src={imger + profile_path}
     alt={name}
     loading="lazy"
    />
   </div>
   <h2 className="CardList-title">{name}</h2>
  </div>
 );
}

export default ActorsCard;
