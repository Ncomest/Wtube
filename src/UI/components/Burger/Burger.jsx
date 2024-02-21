import React from "react";
import { useState } from "react";
import "./Burger.css";
// import ToogleDarkLight from "../ToogleDarkLight/ToogleDarkLight";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

import BtnLogin from "../Buttons/LogIn/BtnLogin";
import BtnSignUp from "../Buttons/LogIn/BtnSignUp";

const Burger = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleBurger = () => {
  setIsOpen(!isOpen);
 };

 return (
  <div>
   {isOpen ? (
    <IoCloseOutline size={50} className="BurgerIcon" onClick={toggleBurger} />
   ) : (
    <RxHamburgerMenu size={50} className="BurgerIcon" onClick={toggleBurger} />
   )}
   <div className={`BurgerDropDown ${isOpen ? "open" : ""}`}>
    <BurgerText />
   </div>
  </div>
 );
};

const BurgerText = () => {
 return (
  <div className="BurgerText">
   <BtnLogin />
   <br />
   <BtnSignUp />
  </div>
 );
};

export default Burger;