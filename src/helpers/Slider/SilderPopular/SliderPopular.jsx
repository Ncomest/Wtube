import React from "react";
import { useTranslation } from "react-i18next";

import "./SliderPopular.css";

import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import genreId from "../../Genre";

function SliderPopular({ movies }) {
  const poster = "https://image.tmdb.org/t/p/w500";
  const { t } = useTranslation();

  const handleUp = () => {
    window.scrollTo(0, 0);

    const startScroll = document.querySelectorAll(".slider-popular");

    startScroll.forEach((item) => {
      item.scrollLeft = 0;
    });
  };

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
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    rows: 2,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const genres = genreId();

  return (
    <div className="slider-popular">
      <Slider {...settings}>
        {movies.map((movie) => (
          <Link
            className="Router-link"
            key={movie.id}
            to={`/movies/${movie.id}`}
          >
            <div
              key={movie.id}
              className="slider-popular_card"
              onClick={handleUp}
            >
              <div className="slider-popular_img_container">
                <div className="slider-popular__img-wrapper">
                  <img
                    className="slider-popular_img"
                    src={poster + movie.poster_path}
                    alt={movie.title}
                    loading="lazy"
                  />
                </div>
                <p>
                  {movie.release_date.slice(0, 4)} •{" "}
                  {movie.genre_ids.map((id, index) => {
                    const genre = genres.find((genre) => genre.id === id);
                    return (
                      <span key={id}>
                        {genre ? t(genre.name) : "Unknown"}
                        {index < movie.genre_ids.length - 1 ? ", " : ""}
                      </span>
                    );
                  })}
                </p>
                <h3>{movie.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default SliderPopular;
