import React, { useEffect, useRef, useState } from "react";
import "./SearchMobile.css";
import { BsSearch } from "react-icons/bs";

import SearchMobileMenu from "./SearchMobileMenu/SearchMobileMenu";

function SearchMobile() {
 const [searchOpen, setSearchOpen] = useState(false);
 const inputRef = useRef(null);
 const searchRef = useRef();

 const closeSearch = () => {
  setSearchOpen(false);
 };

 useEffect(() => {
  const handleClickOutside = (event) => {
   if (searchRef.current && !searchRef.current.contains(event.target)) {
    closeSearch();
   }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
   document.removeEventListener("mousedown", handleClickOutside);
  };
 }, [searchRef]);

 return (
  <div ref={searchRef}>
   <BsSearch
    size="40px"
    strokeWidth="0.1"
    className="BsSearch"
    onClick={() => setSearchOpen(!searchOpen)}
   />
   {searchOpen && <SearchMobileMenu inputRef={inputRef} />}
  </div>
 );
}

export default SearchMobile;
