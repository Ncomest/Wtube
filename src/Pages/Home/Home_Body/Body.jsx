import React, { useState, useEffect } from "react";
import "./Body.css";

import { Link } from "react-router-dom";

import SideBar from "./Home_SideBar/SideBar";
import MoviesContainer from "../../../UI/components/Card/MoviesContainer/MoviesContainer";
import ButtonFilterMenu from "../../../UI/components/Buttons/Filter_Menu/Button_Filter_Menu";

const API_DB =
 "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const itemsPerPage = 20;

function Body() {
 const [movies, setMovies] = useState([]);
 const [visibleMovies, setVisibleMovies] = useState(itemsPerPage);

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
 });

 const loadMoreMovies = () => {
  setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + itemsPerPage);
 };

 return (
  <div className="Body">
   <div className="Body_SideBar">
    <SideBar />
   </div>
   <div className="Body_Container">
    <ButtonFilterMenu />
    <div className="Body_Movies">
     {movies.slice(0, visibleMovies).map((movie) => (
      <Link className="Router-link" key={movie.id} to={`/movies/${movie.id}`}>
       <MoviesContainer key={movie.id} {...movie} />
      </Link>
     ))}
    </div>
    {visibleMovies < movies.length && (
     <button onClick={loadMoreMovies}>Показать еще</button>
    )}
   </div>
  </div>
 );
}

export default Body;
