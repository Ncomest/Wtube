import React, { useEffect } from "react";
import "./CardList.css";

function CardList({ id, title, poster_path }) {
 const imger = "https://image.tmdb.org/t/p/w500";


 useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
 }, [id]);

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
