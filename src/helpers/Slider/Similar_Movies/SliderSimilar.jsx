import React from "react";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import CardList from "../../../UI/components/Card/Card_List/CardList";



const SliderSimilar = ({ movieDetails }) => {
 const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 6,
  slidesToScroll: 3,
 };

 return (
  <div style={{width: '105rem'}}>
    <Slider {...settings}>
    {movieDetails.similarMovies.map((movie) => (
      <Link key={movie.id} to={`/movies/${movie.id}`}>
        <CardList key={movie.id} {...movie} />
      </Link>
      ))}
    </Slider>

  </div>
 );
};

export default SliderSimilar;
