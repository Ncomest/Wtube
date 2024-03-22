import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Body.css";

import axios from "axios";
import SliderMain from "../../../helpers/Slider/Main/SliderMain";
import SliderPopular from "../../../helpers/Slider/SilderPopular/SliderPopular";

function Body({ selectedLanguage }) {
 const [upcomingMovies, setUpcomingMovies] = useState([]);
 const [popularMovies, setPopularMovies] = useState([]);
 const [topRatedMovies, setTopRatedMovies] = useState([]);
 const { t } = useTranslation();
 const myKey = "14d8d8918e888fb791f87057ac1674c0";

 const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=${selectedLanguage}&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${myKey}&language=${selectedLanguage}&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${myKey}&language=${selectedLanguage}&page=1`,
 };

 const options = {
  method: "GET",
  headers: {
   accept: "application/json",
   Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGQ4ZDg5MThlODg4ZmI3OTFmODcwNTdhYzE2NzRjMCIsInN1YiI6IjY1NTdiMjMyZWE4NGM3MTA5MjI4ZDJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f__dKykaUx73Pd6yuByZPnhdUetP7LYDjNnGWSicmFU",
  },
 };

 const fetchData = async () => {
  try {
   const [popularResponse, upcomingResponse, topRatedMovies] =
    await Promise.all([
     axios.get(requests.requestPopular, options),
     axios.get(requests.requestUpcoming, options),
     axios.get(requests.requestTopRated, options),
    ]);

   setPopularMovies(popularResponse.data.results);
   setUpcomingMovies(upcomingResponse.data.results);
   setTopRatedMovies(topRatedMovies.data.results);
   //  console.log("Popular", popularResponse.data);
   //  console.log("Upcoming", upcomingResponse.data);
   //  console.log("Top Rated", topRatedMovies.data);
  } catch (error) {
   console.error(error);
  }
 };

 console.log(upcomingMovies);
 useEffect(() => {
  fetchData();
  // eslint-disable-next-line
 }, [selectedLanguage]);

 return (
  <div className="Body">
   <div className="Body_Container">
    <div className="section-header">
     <h4>{t("upComming")}</h4>
     <Link className="Router-link" to={`/moviescategory/upcoming`}>
      <p>{t("lookingAll")}</p>
     </Link>
    </div>
    <SliderMain upcomingMovies={upcomingMovies} />

    <div className="section-header">
     <h4>{t("popular")}</h4>
     <Link className="Router-link" to={`/moviescategory/popular`}>
      <p>{t("lookingAll")}</p>
     </Link>
    </div>
    <SliderPopular movies={popularMovies} />

    <div className="section-header">
     <h4>{t("top_rated")}</h4>
     <Link className="Router-link" to={`/moviescategory/top_rated`}>
      <p>{t("lookingAll")}</p>
     </Link>
    </div>
    <SliderPopular movies={topRatedMovies} />
   </div>
  </div>
 );
}

export default Body;
