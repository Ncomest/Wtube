import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import ActorsCard from '../../../UI/components/Card/ActorsCard/ActorsCard';

const SliderActors = ({ movieDetails }) => {
  const settings = {
   dots: true,
   infinite: false,
   speed: 2000,
   slidesToShow: 6,
   slidesToScroll: 3,
  };

  return (
    <div style={{width: '105rem'}}>
      <Slider {...settings}>
      {movieDetails.persons.map((person) => (
      <ActorsCard key={person.id} {...person} />
      ))}
      </Slider>
    </div>
  )
}

export default SliderActors