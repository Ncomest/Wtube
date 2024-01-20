import React, { useEffect, useState } from "react";

import SearchBar from "../../SearchBar";
import SearchMobileBtn from "./SearchMobileBtn/SearchMobileBtn";
import SearchMobileCard from "./SearchMobileCard/SearchMobileCard";

const SearchMobileMenu = ({setSearchOpen}) => {
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
   {searchTerm}
   {searchResult}
   <SearchBar onSetSearchTerm={setSearchTerm} onEnterPress={handleKeyPress} />
   <SearchMobileBtn onClick={handleSearchBtnClick} />
   <div>
    {searchTerm.length !== 0 && (
     <SearchMobileCard searchResult={searchResult} setSearchOpen={setSearchOpen}/>
    )}
   </div>
  </div>
 );
};

export default SearchMobileMenu;
