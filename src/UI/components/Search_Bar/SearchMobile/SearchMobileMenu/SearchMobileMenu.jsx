import React, { useEffect, useState } from "react";

import SearchBar from "../../SearchBar";
import SearchMobileBtn from "./SearchMobileBtn/SearchMobileBtn";
import SearchMobileCard from "./SearchMobileCard/SearchMobileCard";

const SearchMobileMenu = ({  inputRef ,selectedLanguage}) => {
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

 return (
  <div className="SearchMobileMenu">
   <SearchBar
    onSetSearchTerm={setSearchTerm}
    onEnterPress={handleKeyPress}
    inputRef={inputRef}
   />
   <SearchMobileBtn onClick={handleSearchBtnClick} />
   <div className="search-card_drop-down">
    {searchTerm.length !== 0 && (
     <SearchMobileCard searchResult={searchResult} selectedLanguage={selectedLanguage}/>
    )}
   </div>
  </div>
 );
};

export default SearchMobileMenu;
