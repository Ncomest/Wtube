import React, { useState, useEffect } from "react";
import "./Body.css";

import { Link } from "react-router-dom";

import SideBar from "./Home_SideBar/SideBar";
import MoviesContainer from "../../../UI/components/Card/MoviesContainer/MoviesContainer";
import ButtonFilterMenu from "../../../UI/components/Buttons/Filter_Menu/Button_Filter_Menu";

function Body({setPage, page}) {
 const [movies, setMovies] = useState([]);
 
 const API_DB = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
 
 const [genre, setGenre] = useState("");
 const [country, setCountry] = useState("");
 const [yearStart, setYearStart] = useState("2022");
 const [yearFinish, setYearFinish] = useState("2024");
 const [imdbStart, setImdbStart] = useState("5");
 const [imdbFinish, setImdbFinish] = useState("10");

 

 const states = {
  genre,
  setGenre,
  yearStart,
  setYearStart,
  country,
  setCountry,
  yearFinish,
  setYearFinish,
  imdbStart,
  setImdbStart,
  imdbFinish,
  setImdbFinish,
 };

 const fetchOption = {
  method: "GET",
  headers: {
   accept: "aplication/json",
   Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
 };

 useEffect(() => {
  const fetchMovies = async () => {
   try {
    const response = await fetch(API_DB, fetchOption);
    const data = await response.json();
    setMovies(data.results);
    console.log(data);
   } catch (err) {
    console.error(err);
   }
  };
  fetchMovies();
  // eslint-disable-next-line
 }, [API_DB]);

 const handlePagePlus = () => {
  setPage((e) => e + 1);
  window.scrollTo({ top: 0, behavior: "smooth" });
 };
 const handlePageMinus = () => {
  if (page > 1) {
   setPage((e) => e - 1);
   window.scrollTo({ top: 0, behavior: "smooth" });
  }
 };

 return (
  <div className="Body">
   <div className="Body_SideBar">
    <SideBar states={states} />
   </div>
   <div className="Body_Container">
    <ButtonFilterMenu />
    <div className="Body_Movies">
     {movies.map((movie) => (
      <Link className="Router-link" key={movie.id} to={`/movies/${movie.id}`}>
       <MoviesContainer key={movie.id} {...movie} />
      </Link>
     ))}
    </div>
    <div className="Body_btn">
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
    </div>
   </div>
  </div>
 );
}

export default Body;
