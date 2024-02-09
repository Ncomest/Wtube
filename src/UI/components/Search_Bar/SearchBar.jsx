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
  <div className="SearchBar SearchBar_Mobile">
   <input
    className="SearchBar SearchBar_Input SearchBar_Input_Header SearchBar_Mobile_Input"
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
