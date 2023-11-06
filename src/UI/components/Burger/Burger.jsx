import React from "react";
import { useState } from "react";
import "./Burger.css";
import DropDown from "../DropDown_Background/DropDown";
import ToogleDarkLight from "../ToogleDarkLight/ToogleDarkLight";

const Burger = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleBurger = () => {
  setIsOpen(!isOpen);
 };

 return (
  <div>
   <div className={`Burger ${isOpen ? "open" : ""}`} onClick={toggleBurger}>
    <div className="BurgerBar"></div>
    <div className="BurgerBar"></div>
    <div className="BurgerBar"></div>
   </div>
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
   <ToogleDarkLight/>
  </div>
 );
};


export default Burger;
