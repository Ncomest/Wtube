import React from "react";
import "./SideBarFilter.css";
import { useTranslation } from "react-i18next";

function SideBarFilter({ onClick }) {
 const { t } = useTranslation();
 const handleReload = () => {
  window.location.reload();
 };
 return (
  <div className="SideBarFilter">
   <div className="SideBarFilter_Container">
    <button className="SideBarFilterBtn" onClick={handleReload}>
     {t("reset")}
    </button>
   </div>
   <div className="SideBarFilter_Container">
    <button className="SideBarFilterBtn btnRed" onClick={onClick}>
     {t("accept")}
    </button>
   </div>
  </div>
 );
}

export default SideBarFilter;
