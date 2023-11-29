import React from "react";
import "./ModalTrailer.css";

function ModalTrailer({ onClick, movieDetails }) {
 const trailerUrl = movieDetails.videos.trailers[0]?.url;

 return (
  <div
   style={{
    position: "absolute",
    top: "7rem",
    left: "40rem",
    width: "90rem",
    height: "40rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
   }}
  >
   <iframe
    width="100%"
    height="100%"
    src={trailerUrl}
    title="YouTube video player"
    frameborder="0"
    allowfullscreen
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
