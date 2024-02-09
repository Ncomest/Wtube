import React, { useRef, useState } from "react";
import "./SearchMobile.css";
import { BsSearch } from "react-icons/bs";

import SearchMobileMenu from "./SearchMobileMenu/SearchMobileMenu";

function SearchMobile() {
 const [searchOpen, setSearchOpen] = useState(false);
 const inputRef = useRef(null);

 const handleSearchOpen = (e) => {
  setSearchOpen((e) => !searchOpen);
  if (inputRef.current) {
   inputRef.current.focus();
  }
 };

 return (
  <>
   <BsSearch size="40px" strokeWidth="0.1" onClick={handleSearchOpen} />
   {searchOpen && (
    <SearchMobileMenu setSearchOpen={setSearchOpen} inputRef={inputRef} />
   )}
  </>
 );
}

export default SearchMobile;
