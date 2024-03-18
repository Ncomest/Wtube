import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import Logo from "../../UI/components/Logo/Logo";
import Burger from "../../UI/components/Burger/Burger";
import SearchMobile from "../../UI/components/Search_Bar/SearchMobile/SearchMobile";
import BtnLogin from "../../UI/components/Buttons/LogIn/BtnLogin";
import BtnSignUp from "../../UI/components/Buttons/LogIn/BtnSignUp";

import { BsFilterSquare } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../helpers/AuthContext";
function Header({ selectedLanguage }) {
 const { t } = useTranslation();
 const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 const { isAuthenticated } = useAuth();
 const [authChanged, setAuthChanged] = useState(false);

 console.log(isAuthenticated);
 useEffect(() => {
  const handleResize = () => {
   setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", handleResize);
  return () => {
   window.removeEventListener("resize", handleResize);
  };
 }, []);

 useEffect(() => {
  // Обновляем состояние authChanged при изменении isAuthenticated
  setAuthChanged(!authChanged);
 }, [isAuthenticated]);

 const breakpoint = 768;

 return (
  <div className="Header">
   <div className="Header_Logo">
    <Logo />
   </div>

   <div className="Header_Container">
    <>
     <SearchMobile selectedLanguage={selectedLanguage} />
     <div>
      <Link to="/filter">
       <BsFilterSquare className="BsFilterSquare" fill="white" size={40} />
      </Link>
     </div>
     {windowWidth <= breakpoint ? (
      <Burger />
     ) : (
      <>
       {isAuthenticated ? (
        <div className="header_profile-container">
         <Link className="Router-link" to={`/user_profile`}>
          <p>
           {t("hello")},{" "}
           <span style={{ textTransform: "capitalize", color: "red" }}>
            {JSON.parse(localStorage.getItem("Authorization"))?.user}
           </span>
          </p>
         </Link>
        </div>
       ) : (
        <>
         <BtnLogin />
         <BtnSignUp />
        </>
       )}
      </>
     )}
    </>
   </div>
  </div>
 );
}

export default Header;
