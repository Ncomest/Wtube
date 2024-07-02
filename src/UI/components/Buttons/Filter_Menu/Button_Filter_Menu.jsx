import React from "react";
import "./Button_Filter_Menu.css";
import { useTranslation } from "react-i18next";

function ButtonFilterMenu({ sortMovies, setSortMovies }) {
 const { t } = useTranslation();
 const handleSort = (e) => {
  setSortMovies(e.target.value);
 };
 return (
  <>
   <select
    className="FilterList_Select"
    name="FilterList"
    id="FilterList"
    onChange={handleSort}
    value={sortMovies}
   >
    <option value="primary_release_date.desc">{t("byDateDescending")}</option>
    <option value="primary_release_date.asc">{t("byDateAscending")}</option>
    <option value="vote_average.desc">{t("byRatingDescending")}</option>
    <option value="vote_average.asc">{t("byRatingAscending")}</option>
    <option value="popularity.desc">{t("byPopularDescending")}</option>
    <option value="popularity.asc">{t("byPopularAscending")}</option>
   </select>
  </>
 );
}

export default ButtonFilterMenu;
