import React from "react";
import "./PageCount.css";

function PageCount() {
 return (
  <div className="movies-category_page-count">
   {t("page")}: {page}
   <input
    type="text"
    className="movies-category_input-count"
    onChange={handleSetPage}
    value={inputChange}
    pattern="[0-9]{3}"
   />
   {movies?.total_pages}
   <p className="movies-category_btn-count" onClick={handleSelectPage}>
    {t("select")}
   </p>
  </div>
 );
}

export default PageCount;
