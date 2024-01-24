import React from "react";
import { useState } from "react";
import "./Burger.css";
import DropDown from "../Background_DropDown/Drop_Down_Menu/DropDown";
import ToogleDarkLight from "../ToogleDarkLight/ToogleDarkLight";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Burger = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleBurger = () => {
  setIsOpen(!isOpen);
 };

 return (
  <div>
   {isOpen ? (
    <IoCloseOutline className="BurgerIcon" onClick={toggleBurger} />
   ) : (
    <RxHamburgerMenu className="BurgerIcon" onClick={toggleBurger} />
   )}
   <div className={`BurgerDropDown ${isOpen ? "" : "open"}`}>
    <DropDown>
     <BurgerText />
    </DropDown>
   </div>
  </div>
 );
};

const BurgerText = () => {
 return (
  <div>
   <p>Войти</p>
   <br />
   <p>Сменить тему</p>
   <br />
   <ToogleDarkLight />
  </div>
 );
};

export default Burger;
