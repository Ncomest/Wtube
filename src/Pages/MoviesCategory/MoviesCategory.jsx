import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./MoviesCategory.css";
import ButtonCommon from "../../UI/components/Buttons/ButtonCommon/ButtonCommon";

function MoviesCategory({ selectedLanguage }) {
 const { category } = useParams();
 const [movies, setMovies] = useState([]);
 const [page, setPage] = useState(1);
 const { t } = useTranslation();
 const myKey = "14d8d8918e888fb791f87057ac1674c0";
 const handleNextPage = () => {
  setPage((nextPage) => nextPage + 1);
  window.scrollTo(0, 0);
 };

 const handlePrevPage = () => {
  setPage((prevPage) => prevPage - 1);
  window.scrollTo(0, 0);
 };

 const request = `https://api.themoviedb.org/3/movie/${category}?api_key=${myKey}&language=${selectedLanguage}&page=${page}`;

 useEffect(() => {
  const options = {
   method: "GET",
   headers: {
    accept: "application/json",
    Authorization:
     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGQ4ZDg5MThlODg4ZmI3OTFmODcwNTdhYzE2NzRjMCIsInN1YiI6IjY1NTdiMjMyZWE4NGM3MTA5MjI4ZDJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f__dKykaUx73Pd6yuByZPnhdUetP7LYDjNnGWSicmFU",
   },
  };
  async function fetchData() {
   try {
    const response = await fetch(request, options);
    const data = await response.json();
    setMovies(data);
    console.log(data);
   } catch (error) {
    console.error("Error", error);
   }
  }
  fetchData();
 }, [request]);

 const bck = "https://image.tmdb.org/t/p/w500";
 return (
  <div className="MoviesCategory">
   <h2>{t(`${category}`)}</h2>
   <div>
    <div className="MoviesCategory-grid">
     {movies?.results?.map((item) => (
      <Link className="Router-link" to={`/movies/${item.id}`} key={item.id}>
       <div key={item.id} className="grid_card">
        <div className="grid-card-image">
         <img src={bck + item.poster_path} alt={item.title} />
         <h4>{item.title}</h4>
        </div>
       </div>
      </Link>
     ))}
    </div>
    <div className="MoviesCategory-btn_container">
     {page > 1 && (
      <ButtonCommon text={t("previous")} onClick={handlePrevPage} />
     )}
     <p>{page}</p>
     <ButtonCommon text={t("next")} onClick={handleNextPage} />
    </div>
   </div>
  </div>
 );
}

export default MoviesCategory;
