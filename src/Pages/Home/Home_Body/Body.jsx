import React, { useState, useEffect } from "react";
import "./Body.css";

// import { Link } from "react-router-dom";

// import MoviesContainer from "../../../UI/components/Card/MoviesContainer/MoviesContainer";
// import ButtonFilterMenu from "../../../UI/components/Buttons/Filter_Menu/Button_Filter_Menu";
// import { requests } from "../../../helpers/Requests";
import axios from "axios";
import SliderMain from "../../../helpers/Slider/Main/SliderMain";
import SliderPopular from "../../../helpers/Slider/SilderPopular/SliderPopular";

function Body({ selectedLanguage }) {
 const [movies, setMovies] = useState([]);
 const [upcomingMovies, setUpcomingMovies] = useState([]);
 const [topRatedMovies, setTopRatedMovies] = useState([]);

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

   setMovies(popularResponse.data.results);
   setUpcomingMovies(upcomingResponse.data.results);
   setTopRatedMovies(topRatedMovies.data.results);
   console.log("Popular", popularResponse.data);
   console.log("Upcoming", upcomingResponse.data);
   console.log("Top Rated", topRatedMovies.data);
  } catch (error) {
   console.error(error);
  }
 };

 useEffect(() => {
  fetchData();
  // eslint-disable-next-line
 }, [selectedLanguage]);

 return (
  <div className="Body">
   <SliderMain upcomingMovies={upcomingMovies} />
   <div className="Body_Container">
    <h4>Popular</h4>

    <SliderPopular movies={movies} />
    <h4>Top Rated</h4>
    <SliderPopular movies={topRatedMovies} />
   </div>
  </div>
 );
}

export default Body;
