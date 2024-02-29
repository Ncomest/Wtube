import React from "react";
import "./Language.css";

const Language = ({ onChange, selectedLanguage }) => {
 return (
  <div className="language">
   <select value={selectedLanguage} onChange={onChange}>
    <option value="en-US">EN</option>
    <option value="ru-RU">RU</option>
   </select>
  </div>
 );
};

export default Language;
