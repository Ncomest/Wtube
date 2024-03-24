import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./MoviesBody.css";

import { ImPlay } from "react-icons/im";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

import SubTitle from "../../../UI/components/Title/Sub_Title/SubTitle";
import Reviews from "../../../UI/components/Reviews/Reviews";

function MoviesBody({ movieDetails }) {
 const [open, setOpen] = useState(false);
 const [isMoviesFavorite, setIsMoviesFavorite] = useState(false);
 const { t } = useTranslation();

 const handleOpenMovie = (e) => {
  setOpen((e) => !open);
 };

 const handleUp = () => {
  window.scrollTo(0, 0);
  setOpen(false);

  const startScroll = document.querySelectorAll(".sliderItem");

  startScroll.forEach((item) => {
   item.scrollLeft = 0;
  });
 };

 const handleFavorites = () => {
  const existData = JSON.parse(localStorage.getItem("Authorization")) || [];
  const existUserData = JSON.parse(localStorage.getItem("userData")) || [];
  console.log(
   "записываем данные из общего массива userData в переменную existUserData",
   existUserData
  );
  //Деструктуризировать данные из localStorage Auth
  const { user, pwd } = existData;
  console.log("Деструктурируем данные из авторизации", user, pwd);

  //Сравнить и найти данные нужного пользователя
  const userFindData = existUserData.find((item) => item.user === user);
  console.log(
   "Находим нужные нам данные из массива userData, сравниваем и записываем в переменную userFindData",
   userFindData
  );

  const { id, poster_path, title } = movieDetails;
  const newFavorite = { id, poster_path, title };

  // Если нет массива избранные, то создаем его
  if (userFindData && userFindData.hasOwnProperty("favorites")) {
   userFindData.favorites = [];
  }

  const updateData = {
   ...userFindData,
   favorites: userFindData
    ? [...userFindData.favorites, newFavorite]
    : [newFavorite],
  };
  console.log(
   "обновленные данные где мы добавили уже favorites в переменную updateData",
   updateData
  );

  const pushData = existUserData.map((item) => {
   if (item.user === user && item.pwd === pwd) {
    return { ...item, favorites: [...userFindData.favorites, newFavorite] };
   } else {
    return item;
   }
  });
  console.log("Отпраляем обновленные данные обратно", pushData);

  // Проверяем , если такой уже фильм
  const lookMoviesYet = userFindData?.favorites.some(
   (item) => item.id === newFavorite.id
  );
  console.log(lookMoviesYet);

  if (lookMoviesYet) {
   console.log("Уже есть фильм");
  } else if (existData && existData.online === true) {
   setIsMoviesFavorite(true);
   localStorage.setItem("userData", JSON.stringify(pushData));
   console.log("данные успешно обновленны в localStorage", pushData);
  }
 };

 // Обновляем значение 'добавить в избранное'
 useEffect(() => {
  const isMoviesInLocalStorage =
   JSON.parse(localStorage.getItem("userData")) || [];
  const userWhoOnline = JSON.parse(localStorage.getItem("Authorization")) || {};
  const compareUser = isMoviesInLocalStorage.find(
   (user) => user.user === userWhoOnline.user
  );
  const findMovies = compareUser?.favorites.some(
   (movie) => movie.id === movieDetails.id
  );
  setIsMoviesFavorite(findMovies);
 }, [movieDetails.id]);

 if (!movieDetails) {
  return <>Wait</>;
 }
 const bck = "https://image.tmdb.org/t/p/w500";
 return (
  <div className="MoviesBody">
   {/* About movies */}
   <div className="bgMovies">
    <img
     src={
      bck +
      (window.innerWidth >= 426
       ? movieDetails.backdrop_path
       : movieDetails.poster_path)
     }
     alt={movieDetails.title}
     loading="lazy"
    />
    <div className="overlay"></div>
    <div className="MovieBlock">
     <h1>{movieDetails.title}</h1>
     <p>
      <span>{t("overview")}: </span>
      {movieDetails.overview}
     </p>
     <p>
      <span>{t("release")}: </span>
      {movieDetails.release_date}
     </p>
     <div className="MoviesText">
      {" "}
      <span>{t("genres")}: </span>
      {movieDetails.genres.map((genre) => (
       <p key={genre.id}>{genre.name}</p>
      ))}
     </div>
     <p>
      {" "}
      <span>{t("ratingIMDB")}: </span>
      {Math.round(movieDetails.vote_average * 10) / 10}
     </p>
     <p>
      {" "}
      <span>{t("runtime")}: </span>
      {movieDetails.runtime + " "}
      {t("minute")}
     </p>
     <div
      className={`moviesbody_add-btn_container ${
       isMoviesFavorite ? "not-fill" : ""
      }`}
      onClick={handleFavorites}
     >
      <div>
       {isMoviesFavorite ? (
        <MdFavorite size={40} className="moviesbody_add-btn" />
       ) : (
        <MdFavoriteBorder size={40} className="moviesbody_add-btn" />
       )}
      </div>
      {isMoviesFavorite ? (
       <p>{t("alreadyInFavorites")}</p>
      ) : (
       <p>{t("addToFavorites")}</p>
      )}
      {console.log(isMoviesFavorite)}
     </div>
    </div>
   </div>

   {/* Btn Trailer DropDown */}
   <div className="MovieWatch" onClick={handleOpenMovie}>
    <ImPlay size={30} color="red" />
    <button>{t("watch")}</button>
   </div>
   <MdKeyboardDoubleArrowDown
    style={{ margin: "auto", width: "100%", marginTop: "5px" }}
   />
   {open ? <TrailerMovie movieDetails={movieDetails} /> : ""}

   <div className="main">
    {/* ACTORS */}
    {movieDetails.credits.cast !== 0 && (
     <>
      <SubTitle subTitle={t("actors")} />
      <div className="sliderItem">
       {movieDetails.credits.cast.map((item) => (
        <Link
         className="Router-link"
         to={`/actorscast/${item.id}`}
         key={item.id}
        >
         <div className="itemCard" key={item.id}>
          <div>
           <p>{item.name}</p>
           <img src={bck + item.profile_path} alt={item.name} loading="lazy" />
          </div>
         </div>
        </Link>
       ))}
      </div>
     </>
    )}

    {/* RECOMENDATIOM */}
    <>
     {movieDetails.recommendations.results.length !== 0 && (
      <>
       <SubTitle subTitle={t("recommendation")} />
       <div className="sliderItem">
        {movieDetails.recommendations.results.map((item) => (
         <Link className="Router-link" key={item.id} to={`/movies/${item.id}`}>
          <div className="itemCard" key={item.id} onClick={handleUp}>
           <div>
            <p>{item.title}</p>
            <img src={bck + item.poster_path} alt={item.name} loading="lazy" />
           </div>
          </div>
         </Link>
        ))}
       </div>
      </>
     )}
    </>

    {/* SIMILAR */}
    {movieDetails.similar.results.length !== 0 && (
     <>
      <SubTitle subTitle={t("similar")} />
      <div className="sliderItem">
       {movieDetails.similar.results.map((item) => (
        <Link className="Router-link" key={item.id} to={`/movies/${item.id}`}>
         <div className="itemCard" key={item.id} onClick={handleUp}>
          <div>
           <p>{item.title}</p>
           <img src={bck + item.poster_path} alt={item.name} loading="lazy" />
          </div>
         </div>
        </Link>
       ))}
      </div>
     </>
    )}

    {/* REVIEWS */}
    <SubTitle subTitle={t("reviews")} />
    <div className="sliderItem reviews">
     {movieDetails.reviews.results.length !== 0 && (
      <>
       {movieDetails.reviews.results.map((item) => (
        <Reviews key={item.id} {...item} />
       ))}
      </>
     )}
    </div>
   </div>
  </div>
 );
}

export default MoviesBody;

const TrailerMovie = ({ movieDetails }) => {
 if (movieDetails.videos.results.length === 0) {
  return (
   <>
    <p>No trailers available</p>
   </>
  );
 }

 return (
  <div className="trailerMovie">
   {movieDetails.videos.results.map((video) => (
    <div className="movieCard">
     <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${video.key}`}
      title={video.name}
      frameborder="0"
      allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
     ></iframe>
    </div>
   ))}
  </div>
 );
};
