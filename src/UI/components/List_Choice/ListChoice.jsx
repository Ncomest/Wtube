import React from "react";
import "./ListChoice.css";

function ListChoice({ children }) {
 return <div>{children}</div>;
}

export function Genre() {
 return (
  <>
   <p>Жанр</p>
   <select name="Genre" id="genre">
    <option value="0">Боевик</option>
    <option value="1">Комедия</option>
    <option value="2">Триллер</option>
   </select>
  </>
 );
}
export function Country() {
 return (
  <>
   <p>Страна</p>
   <select name="Country" id="country">
    <option value="0">Россия</option>
    <option value="1">Америка</option>
    <option value="2">Китай</option>
   </select>
  </>
 );
}

export default ListChoice;
