import React from "react";
import "./SliderMain.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

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

function SliderMain({ upcomingMovies }) {
  const poster = "https://image.tmdb.org/t/p/w500";

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "center",
    centerMode: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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
    <div className="body_slider">
      <div className="slider_container">
        <Slider {...settings}>
          {upcomingMovies.map((upcom, index) => (
            <Link
              className="Router-link"
              key={upcom.id}
              to={`/movies/${upcom.id}`}
            >
              <div key={index} className="slider_card">
                <div className="slider_card__img-wrapper">
                  <img
                    src={
                      poster +
                      (window.innerWidth <= 425
                        ? upcom.backdrop_path
                        : upcom.poster_path)
                    }
                    alt={upcom.title}
                    className="slider_img"
                  />
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderMain;
