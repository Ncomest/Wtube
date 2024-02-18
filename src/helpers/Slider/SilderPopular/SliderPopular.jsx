import React from "react";
import "./SliderPopular.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function SliderPopular({ movies }) {
 const poster = "https://image.tmdb.org/t/p/w500";

 function SampleNextArrow(props) {
  return (
   <div
    className="custom-arrow"
    style={{
     ...props.style,
     display: "flex",
     right: "10px",
    }}
    onClick={props.onClick}
   >
    <MdArrowForwardIos size={30} />
   </div>
  );
 }

 function SamplePrevArrow(props) {
  return (
   <div
    className="custom-arrow"
    style={{
     ...props.style,
     display: "flex",
     left: "10px",
    }}
    onClick={props.onClick}
   >
    <MdArrowBackIos size={30} />
   </div>
  );
 }

 const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,
  centerMode: false,
  rows: 2,
  slidesPerRow: 2,
  responsive: [
   {
    breakpoint: 992,
    settings: {
     slidesToShow: 3,
     slidesToScroll: 1,
    },
   },
   {
    breakpoint: 768,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 1,
    },
   },
   {
    breakpoint: 425,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
    },
   },
  ],
 };

 return (
  <div className="slider-popular">
   <Slider {...settings}>
    {movies.map((movie) => (
     <div key={movie.id} className="slider-popular_card">
      <div>
       <img
        className="slider-popular_img"
        src={poster + movie.poster_path}
        alt={movie.title}
        loading="lazy"
       />
       <p>{movie.release_date.slice(0, 4)}•</p>
       <h3>{movie.title}</h3>
      </div>
     </div>
    ))}
   </Slider>
  </div>
 );
}

export default SliderPopular;
