import React, { useEffect, useState } from "react";
import "./Filter.css";
import { Link } from "react-router-dom";

import SideBar from "../../UI/components/SideBar/SideBar";
import { useTranslation } from "react-i18next";

export default function Filter({ selectedLanguage }) {
 const [movies, setMovies] = useState([]);
 const [startYear, setStartYear] = useState("");
 const [finishYear, setFinishYear] = useState("");
 const [country, setCountry] = useState("");
 const [genre, setGenre] = useState("");
 const [startImdb, setStartImdb] = useState("");
 const [finishImdb, setFinishImdb] = useState("");
 const [page, setPage] = useState(1);
 const { t } = useTranslation();
 const bck = "https://image.tmdb.org/t/p/w500";

 const filters = {
  setStartYear,
  setFinishYear,
  setCountry,
  setGenre,
  setStartImdb,
  setFinishImdb,
 };

 const options = {
  method: "GET",
  headers: {
   accept: "application/json",
   Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGQ4ZDg5MThlODg4ZmI3OTFmODcwNTdhYzE2NzRjMCIsInN1YiI6IjY1NTdiMjMyZWE4NGM3MTA5MjI4ZDJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f__dKykaUx73Pd6yuByZPnhdUetP7LYDjNnGWSicmFU",
  },
 };

 const handleChangeFetch = () => {
  fetch(
   `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${selectedLanguage}&page=${page}&sort_by=popularity.desc&primary_release_date.gte=${startYear}-01-01&primary_release_date.lte=${finishYear}-12-31&with_original_language=${country}&with_genres=${genre}&vote_average.gte=${startImdb}&vote_average.lte=${finishImdb}`,
   options
  )
   .then((response) => response.json())
   .then((response) => {
    setMovies(response.results);
    console.log(response);
   })
   .catch((err) => console.error(err));
 };

 const handleUp = () => {
  window.scrollTo(0, 0);
 };

 const handleNextPage = () => {
  setPage((nextPage) => nextPage + 1);
  window.scrollTo(0, 0);
 };

 const handlePrevPage = () => {
  setPage((prevPage) => prevPage - 1);
  window.scrollTo(0, 0);
 };

 useEffect(() => {
  handleChangeFetch();
 }, [page, selectedLanguage]);

 return (
  <div className="filterPage">
   <SideBar filters={filters} onClick={handleChangeFetch} />
   <div className="filterMenu">
    {movies.map((item) => (
     <Link className="Router-link" to={`/movies/${item.id}`} key={item.id}>
      <div key={item.id} onClick={handleUp}>
       <div className="filter-card_image">
        <img src={bck + item.poster_path} alt={item.title} />
        <p>{item.release_date.slice(0, 4)}</p>
        <h4>{item.title}</h4>
       </div>
      </div>
     </Link>
    ))}
   </div>
   <div className="btnNextPage">
    {page > 1 && (
     <button className="Sign btnRed" onClick={handlePrevPage}>
      {t("previous")}
     </button>
    )}

    <button className="Sign btnRed" onClick={handleNextPage}>
     {t('next')}
    </button>
   </div>
  </div>
 );
}
