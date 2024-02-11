import React, { useState, useEffect } from "react";

import "./Header.css";

import Logo from "../../UI/components/Logo/Logo";
import Burger from "../../UI/components/Burger/Burger";
import FilterMobile from "../../UI/components/Buttons/FilterMobile/FilterMobile";
import SearchMobile from "../../UI/components/Search_Bar/SearchMobile/SearchMobile";

function Header({ setPage }) {
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
   <div className="Header_Logo" setPage={(e) => e(1)}>
    <Logo />
   </div>
   <div className="Header_Container">
    {windowWidth > breakpoint && (
     <>
      <SearchMobile /> <FilterMobile />
     </>
    )}

    <div className="Header_Profile">
     {windowWidth <= breakpoint ? (
      <div className="Header_Mobile">
       <SearchMobile />
       <FilterMobile />
       <Burger />
      </div>
     ) : (
      <div>
       <button className="Sign">Sign In</button>
       <button className="Sign signRed">Sign Up</button>
      </div>
     )}
    </div>
   </div>
  </div>
 );
}

export default Header;
