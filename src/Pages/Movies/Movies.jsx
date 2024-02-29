import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Movies.css";
// import { myKey } from "../../helpers/Requests.js";

import MoviesBody from "./Movies_Body/MoviesBody";

function Movies({ selectedLanguage }) {
 const { id } = useParams();
 const [movieDetails, setMovieDetails] = useState(null);
 const myKey = "14d8d8918e888fb791f87057ac1674c0";
 const API_DB = `https://api.themoviedb.org/3/movie/${id}?api_key=${myKey}&language=${selectedLanguage}&append_to_response=credits,similar,recommendations,videos,reviews`;

 const fetchOption = {
  method: "GET",
  headers: {
   accept: "aplication/json",
   Authorization: `Bearer eyJhdWQiOiIxNGQ4ZDg5MThlODg4ZmI3OTFmODcwNTdhYzE2NzRjMCIsInN1YiI6IjY1NTdiMjMyZWE4NGM3MTA5MjI4ZDJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ`,
  },
 };

 useEffect(() => {
  const fetchMovies = async () => {
   try {
    const response = await fetch(API_DB, fetchOption);
    const data = await response.json();
    setMovieDetails(data);
    console.log(data);
   } catch (err) {
    console.error(err);
   }
  };
  fetchMovies();
 }, [id, selectedLanguage]);

 if (!movieDetails) {
  return <div className="waitLoading">Loading...</div>;
 }

 return (
  <div className="Movies">
   <MoviesBody movieDetails={movieDetails} />
  </div>
 );
}

export default Movies;
