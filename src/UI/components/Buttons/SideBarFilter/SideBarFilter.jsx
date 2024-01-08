import React from "react";
import "./SideBarFilter.css";

function SideBarFilter({ onClick }) {
 const handleReload = () => {
  window.location.reload();
 };
 return (
  <div className="SideBarFilter">
   <div className="SideBarFilter_Container">
    <button className="SideBarFilterBtn" onClick={handleReload}>
     Сброс
    </button>
   </div>
   <div className="SideBarFilter_Container">
    <button className="SideBarFilterBtn" onClick={onClick}>
     Подтвердить
    </button>
   </div>
  </div>
 );
}

export default SideBarFilter;
