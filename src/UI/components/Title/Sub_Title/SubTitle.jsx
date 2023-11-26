import React from "react";
import "./SubTitle.css";

function SubTitle({ subTitle, children }) {
 return (
  <div>
   <h3 className="SubTitle">{subTitle}</h3>
   <p className="SubTitleText">{children}</p>
  </div>
 );
}

export default SubTitle;
