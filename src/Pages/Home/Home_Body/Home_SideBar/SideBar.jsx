import React, { useState } from "react";
import "./SideBar.css";

import SideBarFilter from "../../../../UI/components/Buttons/SideBarFilter/SideBarFilter";

function SideBar() {
 return (
  <div className="SideBar">
   <FilterBar />
  </div>
 );
}

const FilterBar = () => {
 const [genre, setGenre] = useState("");
 const [country, setCountry] = useState("");
 const [yearStart, setYearStart] = useState("2022");
 const [yearFinish, setYearFinish] = useState("2024");
 const [imdbStart, setImdbStart] = useState("5");
 const [imdbFinish, setImdbFinish] = useState("10");
 const [kpStart, setKpStart] = useState("5");
 const [kpFinish, setKpFinish] = useState("10");

 const [apiChange, setApiChange] = useState("");

 const handleApiChange = () => {
  const APIFound = `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=1&genres.name=${genre}`;
  //  `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=1&selectFields=top10`;
  // const APIFound = `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=1&selectFields=year=${yearStart}-${yearFinish}&selectFields=rating.imdb=${imdbStart}-${imdbFinish}&selectFields=genres=${genre}&selectFields=countries=${country}`;
  // const APIFound = `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=1&selectFields=year&selectFields=rating&selectFields=genres.name=комедия&selectFields=countries`;
  fetch(APIFound, {
   method: "GET",
   headers: {
    Accept: "application/json",
    "X-API-KEY": "RPSV678-AFW4EBA-J28BMDC-CGDWZ4E",
   },
  })
   .then((response) => response.json())
   .then((data) => {
    console.log(data);
    setApiChange(data.docs);
   });
  //  console.log(APIFound);
 };

 return (
  <>
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
   <FilterBarContainerKP setKpStart={setKpStart} setKpFinish={setKpFinish} />
   <SideBarFilter onClick={handleApiChange} />
  </>
 );
};

const FilterBarContainerGenre = ({ setGenre }) => {
 const handleFilterChange = (e) => {
  setGenre(e.target.value);
 };

 return (
  <div className="FilterBarContainer_Container">
   <p className="FilterBarContainer_Text">Жанр</p>
   <select
    name="Genre"
    id="genre"
    className="FilterBarContainer_Select"
    onChange={handleFilterChange}
   >
    <option value="0">--Выберите жанр--</option>
    <option value="%D0%BA%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F">Комедия</option>
    <option value="%D0%B4%D1%80%D0%B0%D0%BC%D0%B0">Драма</option>
    <option value="%D1%83%D0%B6%D0%B0%D1%81%D1%8B">Ужасы</option>
    <option value="%D0%B1%D0%BE%D0%B5%D0%B2%D0%B8%D0%BA">Боевик</option>
    <option value="%D1%82%D1%80%D0%B8%D0%BB%D0%BB%D0%B5%D1%80">Триллер</option>
    <option value="%D0%BC%D0%B5%D0%BB%D0%BE%D0%B4%D1%80%D0%B0%D0%BC%D0%B0">
     Мелодрама
    </option>
    <option value="%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5">Аниме</option>
    <option value="%D0%B2%D0%B5%D1%81%D1%82%D0%B5%D1%80%D0%BD">Вестерн</option>
    <option value="%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9">
     Документальный
    </option>
    <option value="%D0%B4%D0%B5%D1%82%D0%B5%D0%BA%D1%82%D0%B8%D0%B2">
     Детектив
    </option>
    <option value="%D0%BA%D1%80%D0%B8%D0%BC%D0%B8%D0%BD%D0%B0%D0%BB">
     Криминал
    </option>
    <option value="%D0%BF%D1%80%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5">
     Приключение
    </option>
    <option value="%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC">
     Мультфильм
    </option>
    <option value="%D1%84%D0%B0%D0%BD%D1%82%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0">
     Фантастика
    </option>
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
   <p className="FilterBarContainer_Text">Страна</p>
   <select
    name="Genre"
    id="genre"
    className="FilterBarContainer_Select"
    onChange={handleFilterChange}
   >
    <option value="0">--Выберите жанр--</option>
    <option value="Америка">Америка</option>
    <option value="Россия">Россия</option>
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

const FilterBarContainerKP = ({ setKpStart, setKpFinish }) => {
 const handleFilterChangeStart = (e) => {
  setKpStart(e.target.value);
 };
 const handleFilterChangeFinish = (e) => {
  setKpFinish(e.target.value);
 };
 return (
  <div className="FilterBarContainer_Container">
   <p className="FilterBarContainer_Text">Рейтинг КП</p>
   <div className="FilterBarContainer_Items">
    <select
     name="KpStart"
     id="KpStart"
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
     name="KpFinish"
     id="KpFinish"
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
