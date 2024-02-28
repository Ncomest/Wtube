import React, { useState } from "react";
import "./Reviews.css";

import { FaUserSecret } from "react-icons/fa6";

function Reviews({ author, content, author_details }) {
 const [showFull, setShowFull] = useState(false);

 //  const truncatedContent = showFull ? content : `${content.slice(0, 150)}`;

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
    <div>
     <h3>{author}</h3>
     <p>rating:{` ${author_details.rating}`}</p>
    </div>
   </div>
   <div className="author-review">
    <p className={showFull ? "overviews-open" : "overviews-line-three"}>
     {content}
    </p>
    {showFull ? (
     <span onClick={handleShowFull}>...hide</span>
    ) : (
     <span onClick={handleShowFull}>show...</span>
    )}
   </div>
  </div>
 );
}

export default Reviews;
