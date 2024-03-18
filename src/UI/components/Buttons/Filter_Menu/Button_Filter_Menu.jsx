import React from "react";
import "./Button_Filter_Menu.css";

function ButtonFilterMenu({ sortMovies, setSortMovies }) {
 const handleSort = (e) => {
  setSortMovies(e.target.value);
 };
 console.log(sortMovies);
 return (
  <>
   <select
    className="FilterList_Select"
    name="FilterList"
    id="FilterList"
    onChange={handleSort}
    value={sortMovies}
   >
    <option value="primary_release_date.desc">по дате: по убыванию</option>
    <option value="primary_release_date.asc">по дате: по возрастанию</option>
    <option value="vote_average.desc">по рейтингу: по убыванию</option>
    <option value="vote_average.asc">по рейтингу: по возрастанию</option>
   </select>
  </>
 );
}

export default ButtonFilterMenu;
