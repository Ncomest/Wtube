import React from "react";
import "./SearchBar.css";

function SearchBar({ text }) {
 return (
  <div className="SearchBar">
   <input className="SearchBar SearchBar_Input SearchBar_Input_Header" type="text" placeholder="Введите название фильма" value={text} />
  </div>
 );
}

export default SearchBar;
