import React, { useState } from "react";
import "./FilterMobile.css";
import SideBar from "../../../../Pages/Home/Home_Body/Home_SideBar/SideBar";

function FilterMobile() {
 const [FilterMobileBtn, setFilterMobileBtn] = useState(false);

 const handleFilterMobileBtn = () => {
  setFilterMobileBtn(!FilterMobileBtn);
 };

 return (
  <div className="FilterMobile">
   <svg
    onClick={handleFilterMobileBtn}
    width="30"
    height="26"
    viewBox="0 0 30 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   >
    <path
     d="M28.7306 1.31625C28.6059 1.13506 28.3819 1.01562 28.125 1.01562H1.875C1.48687 1.01562 1.17188 1.28863 1.17188 1.625C1.17188 1.73387 1.20469 1.83544 1.26187 1.924L1.26 1.92075L10.5459 16.4084V21.125C10.5459 21.3622 10.7025 21.5678 10.9312 21.6677L10.935 21.6694L18.4341 24.9194C18.5241 24.96 18.6319 24.9844 18.7453 24.9844C18.7472 24.9844 18.7481 24.9844 18.75 24.9844C18.7509 24.9844 18.7509 24.9844 18.7519 24.9844C19.1391 24.9844 19.4531 24.7122 19.4531 24.3766C19.4531 24.3758 19.4531 24.3758 19.4531 24.375V16.4084L28.74 1.92075C28.7953 1.83544 28.8281 1.73387 28.8281 1.625C28.8281 1.51125 28.7916 1.404 28.7287 1.313L28.7306 1.31544V1.31625ZM18.135 15.9551C18.0797 16.0404 18.0478 16.1419 18.0469 16.25V23.3894L11.9531 20.7488V16.25C11.9531 16.1419 11.9203 16.0396 11.8622 15.9518L11.8641 15.9551L3.06937 2.23438H26.9288L18.135 15.9551Z"
     fill="white"
    />
   </svg>
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
