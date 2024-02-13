import React from "react";
import "./Button_Filter_Menu.css";

function ButtonFilterMenu() {
 return (
  <>
   <select className="FilterList_Select" name="FilterList" id="FilterList">
    <option value="1">popular</option>
    <option value="2">raiting</option>
    <option value="3">upcoming</option>
   </select>
  </>
 );
}

export default ButtonFilterMenu;
