import React from "react";

import SearchBar from "../../SearchBar";
import SearchMobileBtn from "./SearchMobileBtn/SearchMobileBtn";
import SearchMobileCard from "./SearchMobileCard/SearchMobileCard";

const SearchMobileMenu = () => {
 return (
  <div className="SearchMobileMenu">
   <SearchBar />
   <SearchMobileBtn />
   <div>
    <SearchMobileCard /> 
   </div>
  </div>
 );
};

export default SearchMobileMenu;
