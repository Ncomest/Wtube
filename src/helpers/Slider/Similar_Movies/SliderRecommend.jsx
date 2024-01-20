import React, { Component } from "react";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import CardList from "../../../UI/components/Card/Card_List/CardList";

export default class SliderRecommend extends Component {
 render() {
  const { movieDetails } = this.props;
  
  const settings = {
   dots: false,
   infinite: false,
   speed: 500,
   slidesToShow: 8,
   slidesToScroll: 4,
   initialSlide: 0,
   responsive: [
    {
     breakpoint: 1025,
     settings: {
      slidesToShow: 6,
      slidesToScroll: 2,
     },
    },
    {
     breakpoint: 768,
     settings: {
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 2,
     },
    },
    {
     breakpoint: 426,
     settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
     },
    },
    {
     breakpoint: 320,
     settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
     },
    },
   ],
  };

  return (
   <>
    <Slider {...settings}>
     {movieDetails.recommendations.results.map((movie) => (
      <Link className="Router-link" key={movie.id} to={`/movies/${movie.id}`}>
       <CardList key={movie.id} {...movie} />
      </Link>
     ))}
    </Slider>
   </>
  );
 }
}
// export default SliderRecommend;
