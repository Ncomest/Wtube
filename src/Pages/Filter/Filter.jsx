import React, { useEffect, useState } from "react";
import "./Filter.css";
import { Link } from "react-router-dom";

import SideBar from "../../UI/components/SideBar/SideBar";
import { useTranslation } from "react-i18next";
import ButtonFilterMenu from "../../UI/components/Buttons/Filter_Menu/Button_Filter_Menu";
import genreId from "../../helpers/Genre";
import PageCount from "../../UI/components/PageCount/PageCount";
import ButtonCommon from "../../UI/components/Buttons/ButtonCommon/ButtonCommon";

export default function Filter({ selectedLanguage }) {
 const [movies, setMovies] = useState([]);
 const [startYear, setStartYear] = useState(1988);
 const [finishYear, setFinishYear] = useState(2024);
 const [country, setCountry] = useState("");
 const [genre, setGenre] = useState("");
 const [startImdb, setStartImdb] = useState(5);
 const [finishImdb, setFinishImdb] = useState(10);
 const initialPage = 1;
 const storedPage = JSON.parse(sessionStorage.getItem("filter-page"));
 if (!storedPage) {
  sessionStorage.setItem("filter-page", JSON.stringify(initialPage));
 }
 const [page, setPage] = useState(storedPage || initialPage);
 const [sortMovies, setSortMovies] = useState("primary_release_date.desc");
 const [inputChange, setInputChange] = useState("");
 const [pageNotFound, setPageNotFound] = useState(false);

 const { t } = useTranslation();
 const bck = "https://image.tmdb.org/t/p/w500";

 const filters = {
  setStartYear,
  setFinishYear,
  setCountry,
  setGenre,
  setStartImdb,
  setFinishImdb,
  startImdb,
  finishImdb,
  startYear,
  finishYear,
 };

 useEffect(() => {}, [sortMovies]);

 const options = {
  method: "GET",
  headers: {
   accept: "application/json",
   Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGQ4ZDg5MThlODg4ZmI3OTFmODcwNTdhYzE2NzRjMCIsInN1YiI6IjY1NTdiMjMyZWE4NGM3MTA5MjI4ZDJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f__dKykaUx73Pd6yuByZPnhdUetP7LYDjNnGWSicmFU",
  },
 };

 const API = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${selectedLanguage}&page=${page}&sort_by=${sortMovies}&primary_release_date.gte=${startYear}-01-01&primary_release_date.lte=${finishYear}-12-31&with_origin_country=${country}&with_genres=${genre}&vote_average.gte=${startImdb}&vote_average.lte=${finishImdb}`;
 const handleChangeFetch = () => {
  console.log(API);
  fetch(API, options)
   .then((response) => response.json())
   .then((response) => {
    setMovies(response);
    console.log(response);
   })
   .catch((err) => console.error(err));
 };

 const handleUp = () => {
  window.scrollTo(0, 0);
 };

 const handleNextPage = () => {
  setPage((nextPage) => {
   const nextPageValue = nextPage + 1;
   sessionStorage.setItem("filter-page", JSON.stringify(nextPageValue));
   return nextPageValue;
  });
  window.scrollTo(0, 0);
  setInputChange("");
 };

 const handlePrevPage = () => {
  setPage((nextPage) => {
   const nextPageValue = nextPage - 1;
   sessionStorage.setItem("filter-page", JSON.stringify(nextPageValue));
   return nextPageValue;
  });
  window.scrollTo(0, 0);
  setInputChange("");
 };

 useEffect(() => {
  handleChangeFetch();
 }, [page, selectedLanguage, sortMovies]);

 const genres = genreId();

 const handleSelectPage = () => {
  if (inputChange && inputChange <= movies?.total_pages && inputChange <= 500) {
   setPage(Number(inputChange));
   setInputChange("");
   window.scrollTo(0, 0);
   sessionStorage.setItem("filter-page", JSON.stringify(Number(inputChange)));
  } else {
   console.log("такой страницы не существует");
   setPageNotFound(true);
   setTimeout(() => {
    setPageNotFound(false);
   }, 3000);
  }
 };

 const handleSetPage = (e) => {
  const value = e.target.value;
  if (/^\d*$/.test(value)) {
   setInputChange(value);
  }
 };

 return (
  <div className="filterPage">
   <SideBar filters={filters} onClick={handleChangeFetch} />
   <div>
    <ButtonFilterMenu sortMovies={sortMovies} setSortMovies={setSortMovies} />
   </div>
   <div className="filterMenu">
    {movies?.results?.map((item) => (
     <Link className="Router-link" to={`/movies/${item.id}`} key={item.id}>
      <div key={item.id} onClick={handleUp}>
       <div className="filter-card_image">
        <img src={bck + item.poster_path} alt={item.title} />
        <p>
         {item.release_date.slice(0, 4)} •{" "}
         {item.genre_ids.map((id, index) => {
          const genre = genres.find((genre) => genre.id === id);
          return (
           <span key={id}>
            {genre ? t(genre.name) : "Unknown"}
            {index < item.genre_ids.length - 1 ? ", " : ""}
           </span>
          );
         })}
        </p>
        <h4>{item.title}</h4>
       </div>
      </div>
     </Link>
    ))}
   </div>
   <div className="btnNextPage">
    {page > 1 && <ButtonCommon text={t("back")} onClick={handlePrevPage} />}
    {console.log(page, "page")}
    {page < 500 && <ButtonCommon text={t("next")} onClick={handleNextPage} />}
   </div>

   {pageNotFound && <div className="filter-page-not-found">{t('pageNotFound')}</div>}
   <PageCount
    page={page}
    handleSetPage={handleSetPage}
    inputChange={inputChange}
    movies={movies}
    handleSelectPage={handleSelectPage}
   />
  </div>
 );
}
