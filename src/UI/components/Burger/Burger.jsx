import { useState, useEffect, useRef } from "react";
import "./Burger.css";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

import BtnLogin from "../Buttons/LogIn/BtnLogin";
import BtnSignUp from "../Buttons/LogIn/BtnSignUp";

const Burger = () => {
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
   {isOpen && <BurgerText />}
  </div>
 );
};

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

export default Burger;
