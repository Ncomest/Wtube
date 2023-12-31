import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Movies.css";

import Header from "../../modules/Header/Header";
import MoviesBody from "./Movies_Body/MoviesBody";

function Movies() {
 const { id } = useParams();
 const [movieDetails, setMovieDetails] = useState(null);
 const [movieDetailsRev, setMovieDetailsRev] = useState(null);
 const API_URL = `https://api.kinopoisk.dev/v1.4/movie/${id}`;
 const API_REVIEWS = `https://api.kinopoisk.dev/v1.4/review?page=1&limit=2&movieId=${id}`;

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
  fetch(API_REVIEWS, {
   method: "GET",
   headers: {
    Accept: "application/json",
    "X-API-KEY": "RPSV678-AFW4EBA-J28BMDC-CGDWZ4E",
   },
  })
   .then((response) => response.json())
   .then((data) => {
    console.log(data);
    setMovieDetailsRev(data.docs);
   });
 }, [API_REVIEWS, API_URL]);

 if (!movieDetails) {
  return <p>Loading...</p>;
 }

 return (
  <div className="Movies">
   <Header />
   <MoviesBody movieDetails={movieDetails} movieDetailsRev={movieDetailsRev} />
  </div>
 );
}

export default Movies;
