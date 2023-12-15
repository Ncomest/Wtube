import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Movies.css";

import Header from "../../modules/Header/Header";
import MoviesBody from "./Movies_Body/MoviesBody";

function Movies() {
 const { id } = useParams();
 const [movieDetails, setMovieDetails] = useState(null);
 const API_URL = `https://api.kinopoisk.dev/v1.4/movie/${id}`;

 useEffect(() => {
  fetch(API_URL, {
   method: "GET",
   headers: {
    Accept: "application/json",
    "X-API-KEY": "RPSV678-AFW4EBA-J28BMDC-CGDWZ4E",
   },
  })
   .then((response) => response.json())
   .then((data) => {
    console.log(data);
    setMovieDetails(data);
   });
 }, [id, API_URL]);

 if (!movieDetails) {
  return <p>Loading...</p>;
 }

 return (
  <div className="Movies">
   <Header />
   <MoviesBody movieDetails={movieDetails} />
  </div>
 );
}

export default Movies;
