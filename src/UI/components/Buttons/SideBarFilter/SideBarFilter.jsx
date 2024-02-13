import React from "react";
import "./SideBarFilter.css";

function SideBarFilter({ onClick }) {
 const handleReload = () => {
  window.location.reload();
 };
 return (
  <div className="SideBarFilter">
   <div className="SideBarFilter_Container">
    <button
     className="SideBarFilterBtn"
     // onClick={handleReload}
    >
     Reload
    </button>
   </div>
   <div className="SideBarFilter_Container">
    <button className="SideBarFilterBtn btnRed" onClick={onClick}>
     Accept
    </button>
   </div>
  </div>
 );
}

export default SideBarFilter;
