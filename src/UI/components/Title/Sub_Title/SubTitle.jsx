import React from "react";
import "./SubTitle.css";

function SubTitle({ subTitle, children }) {
 return (
  <div>
   <h3 className="SubTitle">{subTitle}</h3>
   <div className="SubTitleText">{children}</div>
  </div>
 );
}

export default SubTitle;
