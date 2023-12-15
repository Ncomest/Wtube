import React from "react";
import "./Button_Filter_Menu.css";

function ButtonFilterMenu() {
 return (
  <div className="FilterList">
   <select className="FilterList_Select" name="FilterList" id="FilterList">
    <option value="0">по рейтингу</option>
    <option value="1">по названию</option>
    <option value="2">по популярности</option>
   </select>
  </div>
 );
}

export default ButtonFilterMenu;
