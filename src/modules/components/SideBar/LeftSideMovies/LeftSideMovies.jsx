import React from "react";
import "./LeftSideMovies.css";
import BlueInput from "../../../../UI/components/Input/Blue_Input/BlueInput";



function LeftSideMovies({ movieDetails }) {
 return (
  <div className="LeftSideMovies">
   <Picture movieDetails={movieDetails} />
   <Trailer />
   <Raiting raitingName={"IMDb"} />
   <Raiting raitingName={"WTube"} />
   
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

const Trailer = () => {
 return (
  <div className="TrailerContainer">
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="40"
    viewBox="0 0 27 40"
    fill="none"
   >
    <path d="M27 20L0 39.0526L0 0.947441L27 20Z" fill="#D9D9D9" />
   </svg>
   <p style={{textTransform: "uppercase"}}>трейлер</p>
  </div>
 );
};

const Raiting =({raitingName}) =>{
  return(
    <div className="Raiting">
      <p className="RaitingTitle">{raitingName}</p>
      <BlueInput/>
    </div>
  )
}

export default LeftSideMovies;
