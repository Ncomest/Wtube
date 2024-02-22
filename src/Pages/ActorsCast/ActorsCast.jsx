import React, { useEffect, useState } from "react";
import "./ActorsCast.css";
import { useParams } from "react-router-dom";

function ActorsCast() {
 const { id } = useParams();
 const [movies, setMovies] = useState([]);

 const options = {
  method: "GET",
  headers: {
   accept: "application/json",
   Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGQ4ZDg5MThlODg4ZmI3OTFmODcwNTdhYzE2NzRjMCIsInN1YiI6IjY1NTdiMjMyZWE4NGM3MTA5MjI4ZDJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f__dKykaUx73Pd6yuByZPnhdUetP7LYDjNnGWSicmFU",
  },
 };

 useEffect(() => {
  async function fetchData() {
   try {
    const res = await fetch(
     `https://api.themoviedb.org/3/person/${id}api_key=14d8d8918e888fb791f87057ac1674c0&append_to_response=credits`,
     options
    );
    const data = await res.json();
    console.log(data);
    setMovies(data);
   } catch (error) {
    console.error("Error", error);
   }
  }
  fetchData();
 }, [id]);

 const bck = "https://image.tmdb.org/t/p/w500";

 return (
  <div className="main-container">
   <div className="actors_backdrop">
    <img src={bck + movies?.credits?.cast[0].backdrop_path} alt="" />
   </div>

   <div className="wrapp-actors">
    <div className="actors-card">
     <div className="actors-card_image">
      <img src={bck + movies.profile_path} alt={movies.name} />
     </div>
     <div className="about-actors">
      <h3>{movies.name}</h3>
      <p>{movies.birthday}</p>
      <p>{movies.place_of_birth}</p>
      <p>{movies.biography}</p>
     </div>
    </div>

    <div className="card-container">
     {movies?.credits?.cast.slice(0, 20).map((item) => (
      <div key={item.id} className="movies_card">
       <div className="card-image">
        <img src={bck + item.poster_path} alt={item.title} />
       </div>
       <h3>{item.title}</h3>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}

export default ActorsCast;
