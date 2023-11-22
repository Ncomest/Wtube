import React from "react";
import "./Button_Filter_Menu.css";

function Button_Filter_Menu() {
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

export default Button_Filter_Menu;
