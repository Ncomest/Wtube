import "./Burger.css";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

import BtnLogin from "../Buttons/LogIn/BtnLogin";
import BtnSignUp from "../Buttons/LogIn/BtnSignUp";

const Burger = ({ isAuthenticated }) => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleBurger = () => {
  setIsOpen(!isOpen);
 };

 const closeMenu = () => {
  setIsOpen(false);
 };

 const burgerRef = useRef();

 useEffect(() => {
  const handleClickOutSide = (e) => {
   if (burgerRef.current && !burgerRef.current.contains(e.target)) {
    closeMenu();
   }
  };
  document.addEventListener("mousedown", handleClickOutSide);

  return () => {
   document.removeEventListener("mousedown", handleClickOutSide);
  };
 }, [burgerRef]);

 return (
  <div ref={burgerRef}>
   {isOpen ? (
    <IoCloseOutline size={50} className="BurgerIcon" onClick={toggleBurger} />
   ) : (
    <RxHamburgerMenu size={50} className="BurgerIcon" onClick={toggleBurger} />
   )}
   {isOpen && !isAuthenticated && <BurgerText />}
   {isOpen && isAuthenticated && <AuthText setIsOpen={setIsOpen} />}
  </div>
 );
};

export default Burger;

const BurgerText = () => {
 return (
  <div className="BurgerDropDown">
   <div className="BurgerText">
    <BtnLogin />
    <BtnSignUp />
   </div>
  </div>
 );
};

const AuthText = ({ setIsOpen }) => {
 const { t } = useTranslation();

 return (
  <div className="BurgerDropDown" onClick={() => setIsOpen(false)}>
   <Link className="Router-link" to={`/user_profile`}>
    <p>
     {t("hello")},{" "}
     <span style={{ textTransform: "capitalize", color: "red" }}>
      {JSON.parse(localStorage.getItem("Authorization"))?.user}
     </span>
    </p>
   </Link>
  </div>
 );
};
