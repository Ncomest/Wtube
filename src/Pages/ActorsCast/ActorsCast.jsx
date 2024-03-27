import React, { useEffect, useState } from "react";
import "./ActorsCast.css";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ActorsCast({ selectedLanguage }) {
 const { id } = useParams();
 const [movies, setMovies] = useState([]);
 const [addSlice, setAddSlice] = useState(20);
 const { t } = useTranslation();

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
     `https://api.themoviedb.org/3/person/${id}?api_key=14d8d8918e888fb791f87057ac1674c0&language=${selectedLanguage}&append_to_response=credits`,
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
 }, [id, selectedLanguage]);

 const handleUp = () => {
  window.scrollTo(0, 0);
 };

 const handleAdd = () => {
  setAddSlice((e) => e + 20);
  console.log(addSlice);
 };

 const bck = "https://image.tmdb.org/t/p/w500";

 return (
  <div className="main-container">
   <div className="background-image_container">
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
    </div>
   </div>

   <div className="wrapp-actors">
    <div className="title-movies">
     <h3>{t("movies")}</h3>
    </div>
    <div className="card-container">
     {movies?.credits?.cast.slice(0, `${addSlice}`).map((item) => (
      <Link className="Router-link" to={`/movies/${item.id}`} key={item.id}>
       <div key={item.id} className="movies_card" onClick={handleUp}>
        <div className="card-image">
         <img src={bck + item.poster_path} alt={item.title} />
         <h4>{item.title}</h4>
        </div>
       </div>
      </Link>
     ))}
    </div>
   </div>
   {movies?.credits?.cast.length > addSlice && (
    <button className="Sign btnRed add-more" onClick={handleAdd}>
     {t("more")}
    </button>
   )}
  </div>
 );
}

export default ActorsCast;
