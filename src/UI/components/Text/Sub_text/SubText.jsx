import React from "react";
import "./SubText.css";

function SubText({data, renderFuction, text}) {
 return <div className="SubText">
  <p className="Subtext_Text">{text} {renderFuction(data).map((item) => (
    <p key={item}>{item}, </p>
  ))}</p>
 </div>;
}

export default SubText;
