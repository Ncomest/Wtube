import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Movies.css";

import Header from "../../modules/Header/Header";
import MoviesBody from "./Movies_Body/MoviesBody";

function Movies() {
 const { id } = useParams();
 const [movieDetails, setMovieDetails] = useState(null);
 const API_DB = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits,similar,recommendations,videos,reviews`;
 //572802

 const fetchOption = {
  method: "GET",
  headers: {
   accept: "aplication/json",
   Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
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
 }, [id]);

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
