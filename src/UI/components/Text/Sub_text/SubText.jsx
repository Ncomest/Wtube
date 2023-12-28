import React from "react";
import "./SubText.css";

function SubText({data, renderFuction, text}) {
 return <div className="SubText">
  <div className="Subtext_Text">{text} {renderFuction(data).map((item) => (
    <p key={item}>{item}, </p>
  ))}</div>
 </div>;
}

export default SubText;
