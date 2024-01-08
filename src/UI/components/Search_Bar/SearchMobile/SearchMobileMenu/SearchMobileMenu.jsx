import React, { useState } from "react";

import SearchBar from "../../SearchBar";
// import SearchMobileBtn from "./SearchMobileBtn/SearchMobileBtn";
import SearchMobileCard from "./SearchMobileCard/SearchMobileCard";

const SearchMobileMenu = () => {
 const [searchTerm, setSearchTerm] = useState("");

 return (
  <div className="SearchMobileMenu">
   <SearchBar onSetSearchTerm={setSearchTerm}/>
   {/* <SearchMobileBtn /> */}
   <div>
    {searchTerm.length !== 0 && <SearchMobileCard searchTerm={searchTerm}/>}
   </div>
  </div>
 );
};

export default SearchMobileMenu;
