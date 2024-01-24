import React, { useState } from "react";
import "./SearchMobile.css";
import { BsSearch } from "react-icons/bs";

import SearchMobileMenu from "./SearchMobileMenu/SearchMobileMenu";

function SearchMobile() {
 const [searchOpen, setSearchOpen] = useState(false);

 const handleSearchOpen = () => {
  setSearchOpen(!searchOpen);
 };

 return (
  <>
   <BsSearch size="40px" strokeWidth="0.1" onClick={handleSearchOpen} />
   {searchOpen && <SearchMobileMenu setSearchOpen={setSearchOpen} />}
  </>
 );
}

export default SearchMobile;
