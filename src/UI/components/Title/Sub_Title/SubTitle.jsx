import React from "react";
import "./SubTitle.css";

function SubTitle({ subTitle }) {
 return (
  <div className="borderVision">
   <div className="borderGet"></div>
   <h3 className="SubTitle">{subTitle}</h3>
   <div className="borderGet"></div>
  </div>
 );
}

export default SubTitle;
