import React from "react";
import "./SideBar.css";

import SideBarFilter from "../../../../UI/components/Buttons/SideBarFilter/SideBarFilter";

const SideBar = ({ states }) => {
 const {
  genre,
  setGenre,
  yearStart,
  setYearStart,
  country,
  setCountry,
  yearFinish,
  setYearFinish,
  imdbStart,
  setImdbStart,
  imdbFinish,
  setImdbFinish,
 } = states;

 const handeFilterChange = () => {
  const APIFound = `${genre}+${country}${yearStart}+${yearFinish}+${imdbStart}+${imdbFinish}`;
  console.log(APIFound);
 };

 return (
  <div className="SideBar">
   <FilterBarContainerGenre setGenre={setGenre} />
   <FilterBarContainerCountry setCountry={setCountry} />
   <FilterBarContainerYear
    setYearStart={setYearStart}
    setYearFinish={setYearFinish}
   />
   <FilterBarContainerImdb
    setImdbStart={setImdbStart}
    setImdbFinish={setImdbFinish}
   />
   <SideBarFilter onClick={handeFilterChange} />
  </div>
 );
};

const FilterBarContainerGenre = ({ setGenre }) => {
 const handleFilterChange = (e) => {
  setGenre(e.target.value);
 };

 return (
  <div className="FilterBarContainer_Container">
   <p className="FilterBarContainer_Text">Genre</p>
   <select className="FilterBarContainer_Select" onChange={handleFilterChange}>
    <option value="0">-- Choose genre --</option>
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

const FilterBarContainerCountry = ({ setCountry }) => {
 const handleFilterChange = (e) => {
  setCountry(e.target.value);
 };
 return (
  <div className="FilterBarContainer_Container">
   <p className="FilterBarContainer_Text">Country</p>
   <select className="FilterBarContainer_Select" onChange={handleFilterChange}>
    <option value="0">-- Choose country --</option>
    <option value="Canada">Canada</option>
    <option value="Switzerland">Switzerland</option>
    <option value="China">China</option>
    <option value="Cuba">Cuba</option>
    <option value="Germany">Germany</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="France">France</option>
    <option value="Greece">Greece</option>
    <option value="Italy">Italy</option>
    <option value="Poland">Poland</option>
   </select>
  </div>
 );
};

const FilterBarContainerYear = ({ setYearStart, setYearFinish }) => {
 const handleFilterChangeStart = (e) => {
  setYearStart(e.target.value);
 };
 const handleFilterChangeFinish = (e) => {
  setYearFinish(e.target.value);
 };

 const currentYear = new Date().getFullYear();
 return (
  <div className="FilterBarContainer_Container">
   <p className="FilterBarContainer_Text">Год</p>
   <div className="FilterBarContainer_Items">
    <select
     name="YearStart"
     id="YearStart"
     className="FilterBarContainer_Select"
     onChange={handleFilterChangeStart}
     defaultValue={currentYear - 3}
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
     defaultValue={currentYear}
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
   </div>
  </div>
 );
};

const FilterBarContainerImdb = ({ setImdbStart, setImdbFinish }) => {
 const handleFilterChangeStart = (e) => {
  setImdbStart(e.target.value);
 };
 const handleFilterChangeFinish = (e) => {
  setImdbFinish(e.target.value);
 };

 return (
  <div className="FilterBarContainer_Container">
   <p className="FilterBarContainer_Text">Рейтинг Imdb</p>
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
