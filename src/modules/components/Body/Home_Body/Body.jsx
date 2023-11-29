import React, { useState, useEffect } from "react";
import "./Body.css";

import SideBar from "../../SideBar/Home_SideBar/SideBar";
import MoviesContainer from "../../MoviesContainer/MoviesContainer";
import { Link } from "react-router-dom";


const API_URL =
 "https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=2&query=spider%20man";

function Body() {
 const [movies, setMovies] = useState([]);

 useEffect(() => {
  fetch(API_URL, {
   method: "GET",
   headers: {
    Accept: "application/json",
    // "X-API-KEY": "RPSV678-AFW4EBA-J28BMDC-CGDWZ4E",
   },
  })
   .then((response) => response.json())
   .then((data) => {
    console.log(data);
    setMovies(data.docs);
   });
 }, []);

 return (
  <div className="Body">
   <SideBar />
   <div className="Body_Movies">
    {movies.map((movie) => (
     <Link key={movie.id} to={`/movies/${movie.id}`}>
      <MoviesContainer key={movie.id} {...movie} />
     </Link>
    ))}
   </div>
  </div>
 );
}

export default Body;
