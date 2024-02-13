import React, { useState } from "react";
import "./FilterMobile.css";
import SideBar from "../../../../Pages/Home/Home_Body/Home_SideBar/SideBar";

// import { BsFilterSquare } from "react-icons/bs";

function FilterMobile() {
 const [FilterMobileBtn, setFilterMobileBtn] = useState(false);

 const handleFilterMobileBtn = () => {
  setFilterMobileBtn(!FilterMobileBtn);
 };

 return (
  <div onClick={handleFilterMobileBtn}>
   {/* <BsFilterSquare className="CiFilter" size={40} /> */}
   {FilterMobileBtn && <SideBar />}
  </div>
 );
}

export default FilterMobile;
