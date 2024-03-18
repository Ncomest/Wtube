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
 const navigate = useNavigate();
 const { t } = useTranslation();

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
  let authData = JSON.parse(localStorage.getItem("Authorization")) || {};
  let favorites = authData.favorites || [];
  favorites = favorites.filter((movie) => movie.id !== movieId);
  authData = { ...authData, favorites };
  localStorage.setItem("Authorization", JSON.stringify(authData));
  setUserProf(authData);
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
    {/* <h2 className="user-profile_">{t('favorites')}</h2> */}
    <SubTitle
     subTitle={t("favorites")}
     style={{ textTransform: "capitalize", color: "red" }}
    />
    <div className="user-profile_wrapper">
     {userProf?.favorites?.map((item) => (
      <div key={item.id} className="user-profile_card">
       <button onClick={() => handleRemoveMovie(item.id)}>delete</button>
       <div className="user-profile_card_image">
        <img src={bck + item.poster_path} alt={item.title} />
        <h4>{item.title}</h4>
       </div>
      </div>
     ))}
    </div>
    <div>
     {/* <div>
      <img src={bck + item.poster_path} alt={item.title} />
      <h4>{item.title}</h4>
     </div> */}
    </div>
   </div>
  </>
 );
}

export default UserPofile;
