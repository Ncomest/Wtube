import React, { useEffect, useState } from "react";
import "./SideBar.css";

import SideBarFilter from "../Buttons/SideBarFilter/SideBarFilter";
import { useTranslation } from "react-i18next";

const SideBar = ({ filters, onClick }) => {
 return (
  <div className="SideBar">
   <div className="sidebar_items">
    <FilterBarContainerGenre filters={filters} />
    <FilterBarContainerCountry filters={filters} />
    <FilterBarContainerYear filters={filters} />
    <FilterBarContainerImdb filters={filters} />
   </div>

   <SideBarFilter onClick={onClick} />
  </div>
 );
};

const FilterBarContainerGenre = ({ filters }) => {
 const { t } = useTranslation();
 const handleFilterChange = (e) => {
  filters.setGenre(e.target.value);
 };

 return (
  <div className="FilterBarContainer_Container">
   <p className="FilterBarContainer_Text">{t("genres")}</p>
   <select className="FilterBarContainer_Select" onChange={handleFilterChange}>
    <option value="">-- {t("chooseGenre")} --</option>
    <option value="28">{t("Action")}</option>
    <option value="12">{t("Adventure")}</option>
    <option value="16">{t("Animation")}</option>
    <option value="35">{t("Comedy")}</option>
    <option value="99">{t("Documentary")}</option>
    <option value="18">{t("Drama")}</option>
    <option value="10751">{t("Family")}</option>
    <option value="14">{t("Fantasy")}</option>
    <option value="36">{t("History")}</option>
    <option value="27">{t("Horror")}</option>
    <option value="10402">{t("Music")}</option>
    <option value="9648">{t("Mystery")}</option>
    <option value="10749">{t("Romance")}</option>
    <option value="878">{t("ScienceFiction")}</option>
    <option value="10770">{t("TVMovie")}</option>
    <option value="53">{t("Thriller")}</option>
    <option value="10752">{t("War")}</option>
    <option value="37">{t("Western")}</option>
   </select>
  </div>
 );
};

const FilterBarContainerCountry = ({ filters }) => {
 const { t } = useTranslation();
 const handleFilterChange = (e) => {
  filters.setCountry(e.target.value);
 };
 return (
  <div className="FilterBarContainer_Container">
   <p className="FilterBarContainer_Text">{t("country")}</p>
   <select className="FilterBarContainer_Select" onChange={handleFilterChange}>
    <option value="">-- {t("chooseCountry")} --</option>
    <option value="PL">{t("Poland")}</option>
    <option value="CA">{t("Canada")}</option>
    <option value="CN">{t("China")}</option>
    <option value="DE">{t("Germany")}</option>
    <option value="US">{t("USAmerica")}</option>
    <option value="GB">{t("UnitedKingdom")}</option>
    <option value="FR">{t("France")}</option>
    <option value="IT">{t("Italy")}</option>
    <option value="RU">{t("Russia")}</option>
    <option value="IN">{t("India")}</option>
   </select>
  </div>
 );
};

const FilterBarContainerYear = ({ filters }) => {
 const { startYear, finishYear, setStartYear, setFinishYear } = filters;
 const { t } = useTranslation();

 const handleFilterChangeStart = (e) => {
  const newStartYear = parseInt(e.target.value);
  setStartYear(newStartYear);
 };
 const handleFilterChangeFinish = (e) => {
  const newFinishYear = parseInt(e.target.value);
  setFinishYear(newFinishYear);
 };

 const currentYear = new Date().getFullYear();
 return (
  <div className="FilterBarContainer_Container">
   <p className="FilterBarContainer_Text">{t("year")}</p>
   <div className="FilterBarContainer_Items">
    <select
     name="YearStart"
     id="YearStart"
     className="FilterBarContainer_Select"
     onChange={handleFilterChangeStart}
     value={startYear}
    >
     {Array.from({ length: 37 }, (_, index) => {
      const year = currentYear - 36 + index;
      return (
       <option key={year} value={year}>
        {year}
       </option>
      );
     })}
    </select>
    <select
     name="YearFinish"
     id="YearFinish"
     className="FilterBarContainer_Select"
     onChange={handleFilterChangeFinish}
     value={finishYear}
     defaultValue={currentYear}
    >
     {Array.from({ length: currentYear - startYear + 1 }, (_, index) => {
      const year = startYear + index;
      return (
       <option key={year} value={year}>
        {year}
       </option>
      );
     })}
    </select>
   </div>
  </div>
 );
};

const FilterBarContainerImdb = ({ filters }) => {
 const { setStartImdb, startImdb, setFinishImdb, finishImdb } = filters;
 const { t } = useTranslation();
 const handleFilterChangeStart = (e) => {
  setStartImdb(e.target.value);
 };
 const handleFilterChangeFinish = (e) => {
  setFinishImdb(e.target.value);
 };

 return (
  <div className="FilterBarContainer_Container">
   <p className="FilterBarContainer_Text">{t("ratingIMDB")}</p>
   <div className="FilterBarContainer_Items">
    <select
     name="ImdbStart"
     id="ImdbStart"
     className="FilterBarContainer_Select"
     onChange={handleFilterChangeStart}
     defaultValue={5}
    >
     {Array.from({ length: 11 }, (_, index) => {
      const imdb = 0 + index;
      return (
       <option key={imdb} value={imdb}>
        {imdb}
       </option>
      );
     })}
    </select>
    <select
     name="ImdbFinish"
     id="ImdbFinish"
     className="FilterBarContainer_Select"
     onChange={handleFilterChangeFinish}
     defaultValue={10}
    >
     {Array.from({ length: 11 - +startImdb }, (_, index) => {
      const imdb = +startImdb + index;
      return (
       <option key={imdb} value={imdb}>
        {imdb}
       </option>
      );
     })}
    </select>
   </div>
  </div>
 );
};

export default SideBar;
