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
    <option value="28">Action</option>
    <option value="12">Adventure</option>
    <option value="16">Animation</option>
    <option value="35">Comedy</option>
    <option value="99">Documentary</option>
    <option value="18">Drama</option>
    <option value="10751">Family</option>
    <option value="14">Fantasy</option>
    <option value="36">History</option>
    <option value="27">Horror</option>
    <option value="10402">Music</option>
    <option value="9648">Mystery</option>
    <option value="10749">Romance</option>
    <option value="878">Science Fiction</option>
    <option value="10770">TV Movie</option>
    <option value="53">Thriller</option>
    <option value="10752">War</option>
    <option value="37">Western</option>
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
    <option value="pl">Poland</option>
    <option value="ca">Canada</option>
    <option value="cn">China</option>
    <option value="de">Germany</option>
    <option value="us">US America</option>
    <option value="gb">United Kingdom</option>
    <option value="fr">France</option>
    <option value="it">Italy</option>
    <option value="ru">Russia</option>
    <option value="in">India</option>
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

 useEffect(() => {}, []);

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
     defaultValue={new Date().getFullYear()}
    >
     {Array.from({ length: currentYear - startYear + 1 }, (_, index) => {
      const year = currentYear - startYear + index;
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
 const { t } = useTranslation();
 const handleFilterChangeStart = (e) => {
  filters.setStartImdb(e.target.value);
 };
 const handleFilterChangeFinish = (e) => {
  filters.setFinishImdb(e.target.value);
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
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="10">10</option>
    </select>
    <select
     name="ImdbFinish"
     id="ImdbFinish"
     className="FilterBarContainer_Select"
     onChange={handleFilterChangeFinish}
     defaultValue={10}
    >
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="10">10</option>
    </select>
   </div>
  </div>
 );
};

export default SideBar;
