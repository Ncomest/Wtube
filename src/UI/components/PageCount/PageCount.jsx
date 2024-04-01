import React from "react";
import "./PageCount.css";
import { useTranslation } from "react-i18next";

function PageCount({
 page,
 movies,
 handleSetPage,
 inputChange,
 handleSelectPage,
}) {
 const { t } = useTranslation();

 return (
  <div className="page-count_count">
   {t("page")}: {page}
   <input
    type="text"
    className="page-count_input-count"
    onChange={handleSetPage}
    value={inputChange}
    pattern="[0-9]{3}"
   />
   {movies?.total_pages <= 500 ? movies?.total_pages : "500"}
   <p className="page-count_btn-count" onClick={handleSelectPage}>
    {t("select")}
   </p>
  </div>
 );
}

export default PageCount;
