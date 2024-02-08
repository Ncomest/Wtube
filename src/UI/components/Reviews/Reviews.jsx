import React, { useState } from "react";
import "./Reviews.css";

function Reviews({ author, content }) {
 const [showFull, setShowFull] = useState(false);

 const truncatedContent = showFull ? content : `${content.slice(0, 150)}`;

 const handleShowFull = () => {
  setShowFull(!showFull);
 };

 

 return (
  <div className="RightSideMovies_Reviews">
   <h3>{author}</h3>
   <div style={{ display: "flex" }}>
    <p>
     {truncatedContent}
     <span
      style={{ cursor: "pointer", color: "var(--blue)" }}
      onClick={handleShowFull}
     >
      {showFull ? " hide" : " ...next"}
     </span>
    </p>
   </div>
  </div>
 );
}

export default Reviews;
