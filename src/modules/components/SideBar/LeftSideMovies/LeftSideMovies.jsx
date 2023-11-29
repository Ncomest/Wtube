import React from "react";
import "./LeftSideMovies.css";
import BlueInput from "../../../../UI/components/Input/Blue_Input/BlueInput";
import ModalTrailer from "../../../../helpers/Modal/Trailer/ModalTrailer";
import { useState } from "react";

function LeftSideMovies({ movieDetails }) {
 const [modal, setModal] = useState(false);

 const handleModal = () => {
  setModal(!modal);
 };

 return (
  <div className="LeftSideMovies">
   <Picture movieDetails={movieDetails} />
   <Trailer onClick={handleModal}/>
   <Raiting
    raitingName={"IMDb"}
    value={Math.round(movieDetails.rating.imdb * 10) / 10}
   />
   <Raiting
    raitingName={"KP"}
    value={Math.round(movieDetails.rating.kp * 10) / 10}
   />
   {modal ? <ModalTrailer onClick={handleModal} movieDetails={movieDetails}/> : ""}
  </div>
 );
}

const Picture = ({ movieDetails }) => {
 return (
  <div className="PictureContainer">
   <img className="Picture_Image" src={movieDetails.poster.url} alt="" />
  </div>
 );
};

const Trailer = ({onClick}) => {
 return (
  <div className="TrailerContainer" onClick={onClick}>
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="40"
    viewBox="0 0 27 40"
    fill="none"
   >
    <path d="M27 20L0 39.0526L0 0.947441L27 20Z" fill="#D9D9D9" />
   </svg>
   <p style={{ textTransform: "uppercase" }}>трейлер</p>
  </div>
 );
};

const Raiting = ({ raitingName, value }) => {
 return (
  <div className="Raiting">
   <p className="RaitingTitle">{raitingName}</p>
   <BlueInput value={value} />
  </div>
 );
};

export default LeftSideMovies;
