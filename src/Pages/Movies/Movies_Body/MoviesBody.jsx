import React, { useState } from "react";
import "./MoviesBody.css";

import { ImPlay } from "react-icons/im";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import LeftSideMovies from "./LeftSideMovies/LeftSideMovies";
import RightSideMovies from "./RightSideMovies/RightSideMovies";
import SubTitle from "../../../UI/components/Title/Sub_Title/SubTitle";

function MoviesBody({ movieDetails }) {
 const [open, setOpen] = useState(false);
 if (!movieDetails) {
  return <>Wait</>;
 }

 const handleOpenMovie = (e) => {
  setOpen((e) => !open);
 };

 const bck = "https://image.tmdb.org/t/p/w500";
 return (
  <div className="MoviesBody">
   <div className="bgMovies">
    <img src={bck + movieDetails.backdrop_path} alt={movieDetails.title} />
    <div className="overlay"></div>
    <div className="MovieBlock">
     <h1>{movieDetails.original_title}</h1>
     <p>
      <span>Overview: </span>
      {movieDetails.overview}
     </p>
     <p>
      <span>Release: </span>
      {movieDetails.release_date}
     </p>
     <div className="MoviesText">
      {" "}
      <span>Genres: </span>
      {movieDetails.genres.map((genre) => (
       <p key={genre.id}>{genre.name}</p>
      ))}
     </div>
     <p>
      {" "}
      <span>Raiting Imdb: </span>
      {Math.round(movieDetails.vote_average * 10) / 10}
     </p>
     <p>
      {" "}
      <span>Runtime: </span>
      {movieDetails.runtime + " "}
      minute
     </p>
    </div>
   </div>
   <div className="MovieWatch" onClick={handleOpenMovie}>
    <ImPlay size={30} color="red" />
    <button>Watch</button>
   </div>
   <MdKeyboardDoubleArrowDown
    style={{ margin: "auto", width: "100%", marginTop: "5px" }}
   />
   {open ? <TrailerMovie movieDetails={movieDetails} /> : ""}

   <div className="actorsMain">
   <SubTitle subTitle={"Актеры"} />
    <div className="actorsSlider">
     {movieDetails.credits.cast.map((item) => (
      <div className="actorsCard" key={item.id}>
       <p>{item.name}</p>
       <div>
        <img src={bck + item.profile_path} alt={item.name} />
       </div>
      </div>
     ))}
    </div>
   </div>

   {/* <LeftSideMovies movieDetails={movieDetails} /> */}
   <RightSideMovies movieDetails={movieDetails} />
  </div>
 );
}

export default MoviesBody;

const TrailerMovie = ({ movieDetails }) => {
 if (movieDetails.videos.results.length === 0) {
  return (
   <>
    <p>No trailers available</p>
   </>
  );
 }

 return (
  <div className="trailerMovie">
   {movieDetails.videos.results.map((video) => (
    <div className="movieCard">
     <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${video.key}`}
      title={video.name}
      frameborder="0"
      allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
     ></iframe>
    </div>
   ))}
  </div>
 );
};
