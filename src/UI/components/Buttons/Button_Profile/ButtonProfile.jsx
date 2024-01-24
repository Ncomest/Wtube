import React from "react";
import { useState } from "react";
import "./ButtonProfile.css";
import DropDown from "../../Background_DropDown/Drop_Down_Menu/DropDown";
import ToogleDarkLight from "../../ToogleDarkLight/ToogleDarkLight";
import { LuUserCircle2 } from "react-icons/lu";

function ButtonProfile() {
 const [isOpen, setIsOpen] = useState(false);

 const toggleBurger = () => {
  setIsOpen(!isOpen);
 };

 return (
  <div>
   <div onClick={toggleBurger}>
    <Profile />
   </div>
   <div className={`Profile_DropDown ${isOpen ? "" : "open"}`}>
    <DropDown>
     <ProfileText />
    </DropDown>
   </div>
  </div>
 );
}

const Profile = () => {
 return (
  <div className="ButtonProfile">
   <LuUserCircle2 className="LuUserCircle2" />
  </div>
 );
};

const ProfileText = () => {
 return (
  <div>
   <p>Войти</p>
   <br />
   <div className="ProfifeText_Theme">
    <p>Сменить тему</p>
    <ToogleDarkLight />
   </div>
  </div>
 );
};

export default ButtonProfile;
