import React, { useState } from "react";
import "./Reviews.css";

import { FaUserSecret } from "react-icons/fa6";

function Reviews({ author, content, author_details }) {
 const [showFull, setShowFull] = useState(false);

 const truncatedContent = showFull ? content : `${content.slice(0, 150)}`;

 const handleShowFull = () => {
  setShowFull(!showFull);
 };

 const bck = "https://image.tmdb.org/t/p/w500";

 return (
  <div className="RightSideMovies_Reviews">
   <div className="author_section">
    <div>
     {author_details.avatar_path === null ? (
      <FaUserSecret className="no-avatar" />
     ) : (
      <img src={bck + author_details.avatar_path} alt={author} />
     )}
    </div>
    <h3>{author}</h3>
   </div>
   <div className="author-review">
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
