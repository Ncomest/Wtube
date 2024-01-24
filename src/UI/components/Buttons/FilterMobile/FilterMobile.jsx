import React, { useState } from "react";
import "./FilterMobile.css";
import SideBar from "../../../../Pages/Home/Home_Body/Home_SideBar/SideBar";

import { CiFilter } from "react-icons/ci";

function FilterMobile() {
 const [FilterMobileBtn, setFilterMobileBtn] = useState(false);

 const handleFilterMobileBtn = () => {
  setFilterMobileBtn(!FilterMobileBtn);
 };

 return (
  <div onClick={handleFilterMobileBtn}>
   <CiFilter className="CiFilter" />
   {FilterMobileBtn && <FilterMobileMenu />}
  </div>
 );
}

const FilterMobileMenu = () => {
 return (
  <div className="FilterMobileMenu">
   <SideBar />
  </div>
 );
};

export default FilterMobile;
