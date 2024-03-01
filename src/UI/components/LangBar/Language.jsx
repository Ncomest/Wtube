import React from "react";
import "./Language.css";

const Language = ({ onChange }) => {
 const handleChg = (e) => {
  onChange(e);
 };
 console.log(onChange);
 return (
  <div className="language">
   <select onChange={handleChg}>
    <option value="en-US">EN</option>
    <option value="ru-RU">RU</option>
   </select>
  </div>
 );
};

export default Language;
