import React, { useEffect, useState } from "react";
import "./UserPofile.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../helpers/AuthContext";
import ButtonCommon from "../../../UI/components/Buttons/ButtonCommon/ButtonCommon";
import SubTitle from "../../../UI/components/Title/Sub_Title/SubTitle";

import { LiaWindowClose } from "react-icons/lia";

function UserPofile() {
 const [userProf, setUserProf] = useState({});
 const [favorMovies, setFavorMovies] = useState({});

 const { setIsAuthenticated } = useAuth();
 const navigate = useNavigate();
 const { t } = useTranslation();

 useEffect(() => {
  const favor = JSON.parse(localStorage.getItem("userData")) || [];
  const userAuth = JSON.parse(localStorage.getItem("Authorization")) || {};
  const compareUser = favor.find((user) => user.user === userAuth.user);

  setFavorMovies(compareUser);
 }, []);

 useEffect(() => {
  console.log(favorMovies);
 }, [favorMovies]);

 useEffect(() => {
  const authData = JSON.parse(localStorage.getItem("Authorization")) || {};
  if (!authData.online) {
   navigate("/login");
  } else {
   setUserProf(authData);
  }
 }, [navigate]);

 const handleLogOut = () => {
  const authData = JSON.parse(localStorage.getItem("Authorization")) || {};
  authData.online = false;
  localStorage.setItem("Authorization", JSON.stringify(authData));
  navigate("/login");
  setIsAuthenticated(false);
 };

 const handleRemoveMovie = (movieId) => {
  const favor = JSON.parse(localStorage.getItem("userData")) || [];
  const userAuth = JSON.parse(localStorage.getItem("Authorization")) || {};
  const compareUser = favor.find((user) => user.user === userAuth.user);
  const findMovies = compareUser?.favorites.filter(
   (movie) => movie.id !== movieId
  );

  const newCompare = { ...compareUser, favorites: findMovies };

  const returnArray = favor.map((item) => {
   if (item.user === compareUser.user && item.pwd === compareUser.pwd) {
    return { ...newCompare };
   } else {
    return item;
   }
  });

  localStorage.setItem("userData", JSON.stringify(returnArray));
  setFavorMovies(newCompare);
 };

 console.log(favorMovies, "favormovies вот что");

 return (
  <>
   <div className="user-profile">
    <div className="user-porfile_header-section">
     <div>
      {t("hello")},{" "}
      <span style={{ textTransform: "capitalize", color: "red" }}>
       {userProf?.user}
      </span>
     </div>
     <ButtonCommon text={t("logout")} onClick={handleLogOut} />
    </div>
    <SubTitle
     subTitle={t("favorites")}
     style={{ textTransform: "capitalize", color: "red" }}
    />
    {!favorMovies ||
     (favorMovies?.favorites?.length === 0 && (
      <div>{t('yourMovieListIsEmpty')}</div>
     ))}
    <div className="user-profile_wrapper">
     {favorMovies?.favorites?.map((item) => (
      <Cards handleRemoveMovie={handleRemoveMovie} item={item} key={item.id} />
     ))}
    </div>
   </div>
  </>
 );
}

export default UserPofile;

const Cards = ({ handleRemoveMovie, item }) => {
 const [isHovered, setIsHovered] = useState(false);
 const bck = "https://image.tmdb.org/t/p/w500";

 const handleMouseEnter = () => {
  setIsHovered(true);
 };

 const handleMouseLeave = () => {
  setIsHovered(false);
 };

 return (
  <div
   className="user-profile_card"
   onMouseEnter={handleMouseEnter}
   onMouseLeave={handleMouseLeave}
  >
   {isHovered && (
    <div
     className="user-profile_delete-favor"
     onClick={() => {
      handleRemoveMovie(item.id);
     }}
    >
     <LiaWindowClose size={40} color="red" />
    </div>
   )}
   {window.innerWidth <= 992 && (
    <div
     className="user-profile_delete-favor"
     onClick={() => {
      handleRemoveMovie(item.id);
     }}
    >
     <LiaWindowClose size={40} color="red" />
    </div>
   )}
   <Link className="Router-link" key={item.id} to={`/movies/${item.id}`}>
    <div className="user-profile_card_image">
     <img src={bck + item.poster_path} alt={item.title} />
     <h4>{item.title}</h4>
    </div>
   </Link>
  </div>
 );
};
