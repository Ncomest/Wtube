import React, { useEffect, useState } from "react";
import "./UserPofile.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../helpers/AuthContext";
import ButtonCommon from "../../../UI/components/Buttons/ButtonCommon/ButtonCommon";
import SubTitle from "../../../UI/components/Title/Sub_Title/SubTitle";

function UserPofile() {
 const { setIsAuthenticated } = useAuth();
 const [userProf, setUserProf] = useState({});
 const [favorMovies, setFavorMovies] = useState({});
 const navigate = useNavigate();
 const { t } = useTranslation();

 useEffect(() => {
  const favor = JSON.parse(localStorage.getItem("userData")) || [];
  const userAuth = JSON.parse(localStorage.getItem("Authorization")) || {};
  const compareUser = favor.find((user) => user.user === userAuth.user);

  setFavorMovies(compareUser);
 }, []);

 useEffect(() => {
  console.log("favorMovies", favorMovies);
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

 const bck = "https://image.tmdb.org/t/p/w500";
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
    <div className="user-profile_wrapper">
     {favorMovies?.favorites?.map((item) => (
      <div key={item.id} className="user-profile_card">
       <button onClick={() => handleRemoveMovie(item.id)}>delete</button>
       <div className="user-profile_card_image">
        <img src={bck + item.poster_path} alt={item.title} />
        <h4>{item.title}</h4>
       </div>
      </div>
     ))}
    </div>
   </div>
  </>
 );
}

export default UserPofile;
