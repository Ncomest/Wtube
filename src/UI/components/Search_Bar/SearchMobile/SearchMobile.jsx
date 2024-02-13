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
  <div>
   <BsSearch
    size="40px"
    strokeWidth="0.1"
    onClick={handleSearchOpen}
    className="BsSearch"
   />
   {searchOpen && (
    <SearchMobileMenu setSearchOpen={setSearchOpen} inputRef={inputRef} />
   )}
  </div>
 );
}

export default SearchMobile;
