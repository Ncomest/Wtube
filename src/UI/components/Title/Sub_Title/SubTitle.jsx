import React from "react";
import "./SubTitle.css";

function SubTitle({ subTitle, children }) {
 return (
  <div className="borderVision">
   <div className="borderGet"></div>
   <h3 className="SubTitle">{subTitle}</h3>
   <div className="borderGet"></div>
   {/* <div className="SubTitleText">{children}</div> */}
  </div>
 );
}

export default SubTitle;
