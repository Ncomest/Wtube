import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./SearchMobileCard.css";
import { useTranslation } from "react-i18next";
import genreId from "../../../../../../helpers/Genre";

const SearchMobileCard = ({
 searchResult,
 setSearchOpen,
 selectedLanguage,
}) => {
 const [loading, setLoading] = useState(true);
 const [searchMovie, setSearchMovie] = useState(null);
 const { t } = useTranslation();

 const API_URL_TWO = `https://api.themoviedb.org/3/search/movie?query=${searchResult}&?api_key=14d8d8918e888fb791f87057ac1674c0&language=${selectedLanguage}`;

 const fetchOption = {
  method: "GET",
  headers: {
   accept: "aplication/json",
   Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGQ4ZDg5MThlODg4ZmI3OTFmODcwNTdhYzE2NzRjMCIsInN1YiI6IjY1NTdiMjMyZWE4NGM3MTA5MjI4ZDJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f__dKykaUx73Pd6yuByZPnhdUetP7LYDjNnGWSicmFU`,
  },
 };

 useEffect(() => {
  const fetchMovies = async () => {
   try {
    const response = await fetch(API_URL_TWO, fetchOption);
    const data = await response.json();
    setSearchMovie(data.results);
    console.log(data);
    setLoading(false);
   } catch (err) {
    console.error(err);
    setLoading(false);
   }
  };
  fetchMovies();
  // eslint-disable-next-line
 }, [API_URL_TWO]);

 const handleScrollAndClose = () => {
  setSearchOpen(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
 };

 if (loading) {
  return <div className="loading_searchbar">{t("loading")}...</div>;
 }

 if (searchResult && searchMovie.length === 0) {
  return <>{t("loading")}...</>;
 }

 return (
  <>
   {searchMovie.map((movie) => (
    <Link
     className="Router-link"
     key={movie.id}
     to={`/movies/${movie.id}`}
     onClick={handleScrollAndClose}
    >
     <MobileCard key={movie.id} {...movie} />
    </Link>
   ))}
  </>
 );
};

const MobileCard = ({ ...movie }) => {
 const imger = "https://image.tmdb.org/t/p/w500";
 const { poster_path, title, genre_ids, vote_average, release_date, overview } =
  movie;
 const { t } = useTranslation();
 const genres = genreId();

 if (!movie) {
  return <div>{t("loading")}</div>;
 }

 const handleUp = () => {
  window.scrollTo(0, 0);

  const startScroll = document.querySelectorAll(".SearchMobileCard");

  startScroll.forEach((item) => {
   item.scrollLeft = 0;
  });
 };

 console.log("genre_ids", genre_ids);
 return (
  <div className="SearchMobileCard" onClick={handleUp}>
   <div className="SearchMobileCard_Left">
    <div className="SearchMobileCard_ImgContainer">
     <img
      className="SearchMobileCard_Img"
      src={imger + poster_path ? imger + poster_path : "placeholder_url"}
      alt={title}
      loading="lazy"
     />
    </div>
   </div>

   <div>
    <h2>{title}</h2>
    <div className="SearchMobileCard_Text">
     <p>{t("genres")}:</p>
     <div className="SearchMobileCard_List">
      {genre_ids.map((id, index) => {
       const genre = genres?.find((genre) => genre.id === id);
       return (
        <span key={id}>
         {genre ? t(genre.name) : "Unknown"}
         {index < movie.genre_ids.length - 1 ? ", " : ""}
        </span>
       );
      })}
     </div>
    </div>

    <div className="SearchMobileCard_Text">
     <p>{t("rating")}:</p>
     <p>{Math.round(vote_average * 10) / 10}</p>
    </div>

    <div className="SearchMobileCard_Text">
     <p>{t("year")}:</p>
     <p>{release_date}</p>
    </div>

    <div className="SearchMobileCard_Text overv">
     <p>{t("overview")}:</p>
     {window.innerWidth < 427 ? (
      <p>{overview.slice(0, 100)}...</p>
     ) : (
      <p>{overview}</p>
     )}
    </div>
   </div>
  </div>
 );
};

export default SearchMobileCard;
