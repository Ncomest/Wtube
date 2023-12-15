import React from "react";
import "./SideBarFilter.css";

function SideBarFilter() {
 return (
  <div className="SideBarFilter">
   <div>
    <button className="SideBarFilterBtn">Сброс</button>
   </div>
   <div>
    <button className="SideBarFilterBtn">Подтвердить</button>
   </div>
  </div>
 );
}

export default SideBarFilter;
