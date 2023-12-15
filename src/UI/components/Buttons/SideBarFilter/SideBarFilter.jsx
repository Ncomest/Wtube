import React from "react";
import "./SideBarFilter.css";

function SideBarFilter() {
 return (
  <div className="SideBarFilter">
   <div className="SideBarFilter_Container">
    <button className="SideBarFilterBtn">Сброс</button>
   </div>
   <div className="SideBarFilter_Container">
    <button className="SideBarFilterBtn">Подтвердить</button>
   </div>
  </div>
 );
}

export default SideBarFilter;
