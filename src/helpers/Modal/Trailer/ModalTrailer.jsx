import React from "react";
import "./ModalTrailer.css";


function ModalTrailer({ onClick, movieDetails }) {
 const trailerUrl = movieDetails.videos.results[0];

 return (
  <div className="ModalTrailer">
   <iframe
    width="100%"
    height="100%"
    src={`https://www.youtube.com/embed/${trailerUrl.key}`}
    title={`https://www.youtube.com/embed/${trailerUrl.name}`}
    frameborder="0"
    allowfullscreen
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
   ></iframe>
   <button
    onClick={onClick}
    style={{ position: "absolute", top: "-0.5rem", right: "-0.5rem" }}
   >
    Close
   </button>
  </div>
 );
}

export default ModalTrailer;
