import React, { useState, useEffect } from "react";

import "./Header.css";
import "../../../index.css";

import Logo from "../../../UI/components/Logo/Logo";
import SearchBar from "../../../UI/components/Search_Bar/SearchBar";
import ButtonProfile from "../../../UI/components/Buttons/Button_Profile/ButtonProfile";
import Burger from "../../../UI/components/Burger/Burger";

function Header() {
 const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 useEffect(() => {
  // Обновляем windowWidth при изменении размера окна браузера
  const handleResize = () => {
   setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => {
   // Удаляем обработчик события при размонтировании компонента
   window.removeEventListener("resize", handleResize);
  };
 }, []);

 const breakpoint = 768;

 return (
  <div className="Header">
   <div className="Header_Logo">
    <Logo />
   </div>
   <div className="Header_Container">
    <div className="Header_SearchBar">
     <SearchBar />
    </div>
    <div className="Header_Profile">
     {windowWidth <= breakpoint ? <Burger /> : <ButtonProfile />}
    </div>
   </div>
  </div>
 );
}

export default Header;
