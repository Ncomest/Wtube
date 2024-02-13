import React, { useEffect } from "react";
import "./SearchBar.css";

function SearchBar({ onSetSearchTerm, onEnterPress, inputRef }) {
 const handleSearch = (e) => {
  onSetSearchTerm(e.target.value);
 };

 useEffect(() => {
  if (inputRef.current) {
   inputRef.current.focus();
  }
 }, [inputRef]);

 return (
  <div className="SearchBar">
   <input
    className="SearchBar_Input"
    type="text"
    onChange={handleSearch}
    onKeyUp={onEnterPress}
    placeholder="Search..."
    ref={inputRef}
   />
  </div>
 );
}

export default SearchBar;
