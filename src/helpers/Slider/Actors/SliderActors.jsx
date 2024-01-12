import React,{Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import ActorsCard from "../../../UI/components/Card/ActorsCard/ActorsCard";

export default class SliderActors extends Component {
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
   <Slider {...settings}>
    {movieDetails.credits.cast.map((person) => (
     <ActorsCard key={person.id} {...person} />
    ))}
   </Slider>
  );
 }
}
// export default SliderActors;
