import React from "react";
import "./ListChoice.css";

function ListChoice({ children }) {
 return <div>{children}</div>;
}

export function Genre() {
 return (
  <div className="ListChoice_Container">
   <p className="ListChoice_Text">Жанр</p>
   <select name="Genre" id="genre" className="ListChoice_Select">
    <option value="0">--Выберите жанр--</option>
    <option value="1">Комедия</option>
    <option value="2">Триллер</option>
   </select>
  </div>
 );
}
export function Country() {
 return (
  <div className="ListChoice_Container">
   <p className="ListChoice_Text">Страна</p>
   <select name="Country" id="country" className="ListChoice_Select">
    <option value="0">--Выберите страну--</option>
    <option value="1">Америка</option>
    <option value="2">Китай</option>
   </select>
  </div>
 );
}

export default ListChoice;
