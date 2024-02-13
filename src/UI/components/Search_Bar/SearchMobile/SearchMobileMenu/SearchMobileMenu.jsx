import React, { useEffect, useState } from "react";

import SearchBar from "../../SearchBar";
import SearchMobileBtn from "./SearchMobileBtn/SearchMobileBtn";
import SearchMobileCard from "./SearchMobileCard/SearchMobileCard";

const SearchMobileMenu = ({ setSearchOpen, inputRef }) => {
 const [searchTerm, setSearchTerm] = useState("");
 const [searchResult, setSearchResult] = useState("");

 const handleSearchBtnClick = () => {
  setSearchResult(searchTerm);
 };

 const handleKeyPress = (e) => {
  if (e.key === "Enter") {
   setSearchResult(searchTerm);
  }
 };

 useEffect(() => {
  if (!searchTerm) {
   setSearchResult("");
  }
 }, [searchTerm, searchResult]);

 //  close search DropDown menu
 const hanldeClose = (e) => {
  if (!e.target.closest(".SearchMobileMenu") || e.key === "Escape") {
   setSearchOpen(false);
  }
 };

 useEffect(() => {
  document.addEventListener("mousedown", hanldeClose);
  document.addEventListener("keydown", hanldeClose);
  return () => {
   document.removeEventListener("mousedown", hanldeClose);
   document.removeEventListener("keydown", hanldeClose);
  };
 }, [setSearchOpen]);

 return (
  <div className="SearchMobileMenu">
   <SearchBar
    onSetSearchTerm={setSearchTerm}
    onEnterPress={handleKeyPress}
    inputRef={inputRef}
   />
   <SearchMobileBtn onClick={handleSearchBtnClick} />
   <div>
    {searchTerm.length !== 0 && (
     <SearchMobileCard
      searchResult={searchResult}
      setSearchOpen={setSearchOpen}
     />
    )}
   </div>
  </div>
 );
};

export default SearchMobileMenu;
