import React
// ,{useState} 
from "react";
import "./SearchBar.css";

function SearchBar() {
//  const [searchInput, setSearchInput] = useState("");
  
 return (
  <div className="SearchBar SearchBar_Mobile">
   <input
    className="SearchBar SearchBar_Input SearchBar_Input_Header SearchBar_Mobile_Input"
    type="text"
    // value={searchInput}
    // onChange={(e) => setSearchInput(e.target.value)}
    placeholder="Введите название фильма"
   />
  </div>
 );
}

export default SearchBar;
