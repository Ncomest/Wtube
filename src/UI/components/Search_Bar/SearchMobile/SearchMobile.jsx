import React, { useState } from "react";
import "./SearchMobile.css";
import SearchBar from "../SearchBar";

function SearchMobile() {
 const [SearchOpen, setSearchOpen] = useState(false);

 const handleSearchOpen = () => {
  setSearchOpen(!SearchOpen);
 };

 return (
  <div className="SearchMobile">
   <div className="SearchMobileSvg" onClick={handleSearchOpen}>
    <svg
     width="31"
     height="27"
     viewBox="0 0 31 27"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
    >
     <path
      d="M12.8182 21.4848C19.3453 21.4848 24.6365 16.8992 24.6365 11.2424C24.6365 5.58569 19.3453 1 12.8182 1C6.29121 1 1 5.58569 1 11.2424C1 16.8992 6.29121 21.4848 12.8182 21.4848Z"
      stroke="white"
      strokeLinejoin="round"
     />
     <path
      d="M29.4481 26.7693C29.8032 27.0769 30.3789 27.0769 30.734 26.7693C31.0889 26.4616 31.0889 25.9627 30.734 25.6549L29.4481 26.7693ZM30.734 25.6549L21.643 17.7761L20.3572 18.8905L29.4481 26.7693L30.734 25.6549Z"
      fill="white"
     />
    </svg>
   </div>
   {SearchOpen && <SearchMobileMenu />}
  </div>
 );
}

const SearchMobileMenu = () => {
 return (
  <div className="SearchMobileMenu">
   <SearchBar />
   <SearchMobileBtn />
   <SearchMobileCard />
  </div>
 );
};

const SearchMobileBtn = () => {
 return (
  <div className="SearchMobileBtn">
   <button className="SearchMobileBtnBtn">Поиск</button>
  </div>
 );
};

const SearchMobileCard = () => {
 return (
  <div className="SearchMobileCard">
   <div className="SearchMobileCard_Left" >
    <div className="SearchMobileCard_ImgContainer">
     <img className="SearchMobileCard_Img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/58239d8d-44d3-475e-ab3f-878679c64290/orig" alt="zaglushka" />
    </div>
   </div>

   <div>
    <h2>Иван Васильевич меняет профессию</h2>
    <div className="SearchMobileCard_Text">
     <p>Жанр</p>
     <p>Комедия</p>
    </div>
    <div className="SearchMobileCard_Text">
     <p>Страна</p>
     <p>Россия</p>
    </div>
    <div className="SearchMobileCard_Text">
     <p>Год</p>
     <p>1993</p>
    </div>
    <div className="SearchMobileCard_Text">
     <p>Длительность</p>
     <p>120</p>
    </div>
   </div>
  </div>
 );
};
export default SearchMobile;
