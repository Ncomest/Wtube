import React from "react";
import "./SearchBar.css";

function SearchBar({ onSetSearchTerm }) {
 const handleSearch = (e) => {
  onSetSearchTerm(e.target.value);
 };

 return (
  <div className="SearchBar SearchBar_Mobile">
   <input
    className="SearchBar SearchBar_Input SearchBar_Input_Header SearchBar_Mobile_Input"
    type="text"
    onChange={handleSearch}
    placeholder="Введите название фильма"
   />
  </div>
 );
}

export default SearchBar;
