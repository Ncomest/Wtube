import React from "react";

import "./SliderActors.css";

import ActorsCard from "../../../UI/components/Card/ActorsCard/ActorsCard";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function SliderActors({ movieDetails }) {
 const slideLeft = () => {
  let slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft - 300;
 };

 const slideRight = () => {
  let slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft + 300;
 };

 return (
  <>
   <div className="slider-test-parent">
    <MdOutlineArrowBackIos onClick={slideLeft} className="ArrowSlider" />
    <div id={"slider"} className="slider-test">
     {movieDetails.credits.cast.map((person) => (
      <ActorsCard key={person.id} {...person} />
     ))}
    </div>
    <MdOutlineArrowForwardIos onClick={slideRight} className="ArrowSlider" />
   </div>
  </>
 );
}
