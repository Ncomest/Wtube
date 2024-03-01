import React, { useEffect } from "react";
import "./SearchBar.css";
import { useTranslation } from "react-i18next";

function SearchBar({ onSetSearchTerm, onEnterPress, inputRef }) {
 const { t } = useTranslation();

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
    placeholder={t("search")}
    ref={inputRef}
   />
  </div>
 );
}

export default SearchBar;
