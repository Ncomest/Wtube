import React, { useState, useEffect } from "react";
import "./Body.css";

import { Link } from "react-router-dom";

import SideBar from "./Home_SideBar/SideBar";
import MoviesContainer from "../../../UI/components/Card/MoviesContainer/MoviesContainer";
import ButtonFilterMenu from "../../../UI/components/Buttons/Filter_Menu/Button_Filter_Menu";

function getCurrentDate(date) {
 const day = date.getDate().toString().padStart(2, "0");
 const month = (date.getMonth() + 1).toString().padStart(2, "0");
 const year = date.getFullYear();

 return `${day}.${month}.${year}`;
}

const today = new Date();
const currentDate = getCurrentDate(today);

const API_URL = `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=1&selectFields=id&selectFields=name&selectFields=poster&createdAt=01.05.2023-${currentDate}`;
//  "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=1&selectFields=id&selectFields=name&selectFields=poster&selectFields=updatedAt";
//  "https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=1&query=spider%20man";

function Body() {
 const [movies, setMovies] = useState([]);

//  useEffect(() => {
//   fetch(API_URL, {
//    method: "GET",
//    headers: {
//     Accept: "application/json",
//     "X-API-KEY": "RPSV678-AFW4EBA-J28BMDC-CGDWZ4E",
//    },
//   })
//    .then((response) => response.json())
//    .then((data) => {
//     console.log(data);
//     setMovies(data.docs);
//    });
//  }, []);

 return (
  <div className="Body">
   <div className="Body_SideBar">
    <SideBar />
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
   </div>
  </div>
 );
}

export default Body;
