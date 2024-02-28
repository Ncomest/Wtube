import React, { useState } from "react";
import "./Reviews.css";

import { FaUserSecret } from "react-icons/fa6";

function Reviews({ author, content, avatar_path }) {
 const [showFull, setShowFull] = useState(false);

 const truncatedContent = showFull ? content : `${content.slice(0, 150)}`;

 const handleShowFull = () => {
  setShowFull(!showFull);
 };

 return (
  <div className="RightSideMovies_Reviews">
   <div className="author_section">
    <div>
     {avatar_path === null ? (
      <img src={avatar_path} alt={author} />
     ) : (
      <FaUserSecret size={100} />
     )}
    </div>
    <h3>{author}</h3>
   </div>
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
