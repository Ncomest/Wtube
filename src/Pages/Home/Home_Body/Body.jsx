import React, { useState, useEffect } from "react";
import "./Body.css";

import { Link } from "react-router-dom";

import MoviesContainer from "../../../UI/components/Card/MoviesContainer/MoviesContainer";
import ButtonFilterMenu from "../../../UI/components/Buttons/Filter_Menu/Button_Filter_Menu";
import { requests } from "../../../helpers/Requests";
import axios from "axios";
import SliderMain from "../../../helpers/Slider/Main/SliderMain";
import SliderPopular from "../../../helpers/Slider/SilderPopular/SliderPopular";

function Body({ setPage, page }) {
 const [movies, setMovies] = useState([]);
 const [upcomingMovies, setUpcomingMovies] = useState([]);
 const [topRatedMovies, setTopRatedMovies] = useState([]);

 //  const [genre, setGenre] = useState("");
 //  const [country, setCountry] = useState("");
 //  const [yearStart, setYearStart] = useState("2022");
 //  const [yearFinish, setYearFinish] = useState("2024");
 //  const [imdbStart, setImdbStart] = useState("5");
 //  const [imdbFinish, setImdbFinish] = useState("10");

 //  const states = {
 //   genre,
 //   setGenre,
 //   yearStart,
 //   setYearStart,
 //   country,
 //   setCountry,
 //   yearFinish,
 //   setYearFinish,
 //   imdbStart,
 //   setImdbStart,
 //   imdbFinish,
 //   setImdbFinish,
 //  };

 //  ${process.env.REACT_APP_API_TOKEN}

 //  const rMovie = movies[Math.floor(Math.random() * movies.length)]
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
     axios.get(requests.requestPopular + options),
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
 }, []);

//  const handlePagePlus = () => {
//   setPage((e) => e + 1);
//   window.scrollTo({ top: 0, behavior: "smooth" });
//  };
//  const handlePageMinus = () => {
//   if (page > 1) {
//    setPage((e) => e - 1);
//    window.scrollTo({ top: 0, behavior: "smooth" });
//   }
//  };

 return (
  <div className="Body">
   <SliderMain upcomingMovies={upcomingMovies} />
   <div className="Body_Container">
    {/* <ButtonFilterMenu /> */}
    <h4>Popular</h4>
    {/* <div */}
    {/* // className="Body_Movies" */}
    {/* > */}
    <SliderPopular movies={movies} />
    <h4>Top Rated</h4>
    <SliderPopular movies={topRatedMovies} />
    {/* {movies.map((movie) => (
      <Link className="Router-link" key={movie.id} to={`/movies/${movie.id}`}>
       <MoviesContainer key={movie.id} {...movie} />
      </Link>
     ))} */}
    {/* </div> */}
    {/* <div className="Body_btn">
     {page > 1 ? (
      <button className="Body_btn-more" onClick={handlePageMinus}>
       Previous page
      </button>
     ) : (
      ""
     )}

     <button className="Body_btn-more" onClick={handlePagePlus}>
      Next page
     </button>
    </div> */}
   </div>
  </div>
 );
}

export default Body;
