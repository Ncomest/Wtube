import React from "react";
import "./SearchBar.css";

function SearchBar({ text }) {
 return (
  <div className="SearchBar SearchBar_Mobile">
   <input className="SearchBar SearchBar_Input SearchBar_Input_Header SearchBar_Mobile_Input" type="text" placeholder="Введите название фильма" value={text} />
  </div>
 );
}

export default SearchBar;
