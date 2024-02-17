import React from "react";
import "./SliderMain.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

function SampleNextArrow(props) {
 const { className, style, onClick } = props;
 return (
  <div
   className={className}
   style={{
    ...style,
    display: "block",
    position: "absolute",
    right: "10px",
    zIndex: "2",
   }}
   onClick={onClick}
  />
 );
}

function SamplePrevArrow(props) {
 const { className, style, onClick } = props;
 return (
  <div
   className={className}
   style={{
    ...style,
    display: "block",
    position: "absolute",
    left: "10px",
    zIndex: "2",
   }}
   onClick={onClick}
  />
 );
}

function SliderMain({ upcomingMovies }) {
 const poster = "https://image.tmdb.org/t/p/w500";

 const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 8000,
  cssEase: "linear",
  responsive: [
   {
    breakpoint: 992,
    settings: {
     slidesToShow: 1,
     centerMode: false,
    },
   },
  ],
 };

 return (
  <div className="body_slider">
   <div className="slider_container">
    <Slider {...settings}>
     {upcomingMovies.map((upcom, index) => (
      <Link className="Router-link" key={upcom.id} to={`/movies/${upcom.id}`}>
       <div key={index} className="slider_card">
        <img
         src={poster + upcom.backdrop_path}
         alt={upcom.title}
         className="slider_img"
        />
       </div>
      </Link>
     ))}
    </Slider>
   </div>
  </div>
 );
}

export default SliderMain;
