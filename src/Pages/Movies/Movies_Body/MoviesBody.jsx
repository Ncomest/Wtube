import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MoviesBody.css";

import { ImPlay } from "react-icons/im";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import SubTitle from "../../../UI/components/Title/Sub_Title/SubTitle";
import Reviews from "../../../UI/components/Reviews/Reviews";

function MoviesBody({ movieDetails }) {
 const [open, setOpen] = useState(false);

 if (!movieDetails) {
  return <>Wait</>;
 }

 const handleOpenMovie = (e) => {
  setOpen((e) => !open);
 };

 const handleUp = () => {
  window.scrollTo(0, 0);
  setOpen(false);

  const startScroll = document.querySelectorAll(".sliderItem");

  startScroll.forEach((item) => {
   item.scrollLeft = 0;
  });
 };

 const bck = "https://image.tmdb.org/t/p/w500";
 return (
  <div className="MoviesBody">
   {/* About movies */}
   <div className="bgMovies">
    <img
     src={
      bck +
      (window.innerWidth >= 426
       ? movieDetails.backdrop_path
       : movieDetails.poster_path)
     }
     alt={movieDetails.title}
     loading="lazy"
    />
    <div className="overlay"></div>
    <div className="MovieBlock">
     <h1>{movieDetails.title}</h1>
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

   {/* Btn Trailer DropDown */}
   <div className="MovieWatch" onClick={handleOpenMovie}>
    <ImPlay size={30} color="red" />
    <button>Watch</button>
   </div>
   <MdKeyboardDoubleArrowDown
    style={{ margin: "auto", width: "100%", marginTop: "5px" }}
   />
   {open ? <TrailerMovie movieDetails={movieDetails} /> : ""}

   <div className="main">
    {/* ACTORS */}
    {/* {movieDetails.credits.cast !== 0 && (
     <>
      <SubTitle subTitle={"Actors"} />
      <div className="sliderItem">
       {movieDetails.credits.cast.map((item) => (
        <Link
         className="Router-link"
         to={`/actorscast/${item.id}`}
         key={item.id}
        >
         <div className="itemCard" key={item.id}>
          <div>
           <p>{item.name}</p>
           <img src={bck + item.profile_path} alt={item.name} loading="lazy" />
          </div>
         </div>
        </Link>
       ))}
      </div>
     </>
    )} */}

    {/* RECOMENDATIOM */}
    <>
     {/* {movieDetails.recommendations.results.length !== 0 && (
      <>
       <SubTitle subTitle={"Recommendation"} />
       <div className="sliderItem">
        {movieDetails.recommendations.results.map((item) => (
         <Link className="Router-link" key={item.id} to={`/movies/${item.id}`}>
          <div className="itemCard" key={item.id} onClick={handleUp}>
           <div>
            <p>{item.title}</p>
            <img src={bck + item.poster_path} alt={item.name} loading="lazy" />
           </div>
          </div>
         </Link>
        ))}
       </div>
      </>
     )} */}
    </>

    {/* SIMILAR */}
    {/* {movieDetails.similar.results.length !== 0 && (
     <>
      <SubTitle subTitle={"Similar"} />
      <div className="sliderItem">
       {movieDetails.similar.results.map((item) => (
        <Link className="Router-link" key={item.id} to={`/movies/${item.id}`}>
         <div className="itemCard" key={item.id} onClick={handleUp}>
          <div>
           <p>{item.title}</p>
           <img src={bck + item.poster_path} alt={item.name} loading="lazy" />
          </div>
         </div>
        </Link>
       ))}
      </div>
     </>
    )} */}

    {/* REVIEWS */}
    <SubTitle subTitle={"Reviews"} />
    <div className="sliderItem">
     {movieDetails.reviews.results.length !== 0 && (
      <>
       {movieDetails.reviews.results.map((item) => (
        <Reviews key={item.id} {...item} />
       ))}
      </>
     )}
    </div>
   </div>
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
