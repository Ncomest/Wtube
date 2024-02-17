import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import Logo from "../../UI/components/Logo/Logo";
import Burger from "../../UI/components/Burger/Burger";
import SearchMobile from "../../UI/components/Search_Bar/SearchMobile/SearchMobile";
import { BsFilterSquare } from "react-icons/bs";

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
   <div className="Header_Logo" onClick={() => (setPage(1))}>
    <Logo />
   </div>
   <div className="Header_Container">
    {windowWidth > breakpoint && (
     <>
      <SearchMobile />
      <Link to="/filter">
       <BsFilterSquare className="BsFilterSquare" fill="white" size={40} />
      </Link>
     </>
    )}

    <div className="Header_Profile">
     {windowWidth <= breakpoint ? (
      <div className="Header_Mobile">
       <SearchMobile />
       <Link to="/filter">
        <BsFilterSquare className="CiFilter" size={40} />
       </Link>
       <Burger />
      </div>
     ) : (
      <div>
       <button className="Sign">Log In</button>
       <button className="Sign btnRed">Sign Up</button>
      </div>
     )}
    </div>
   </div>
  </div>
 );
}

export default Header;
