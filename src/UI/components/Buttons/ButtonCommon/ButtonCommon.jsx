import React from "react";
import "./ButtonCommon.css";

function ButtonCommon({ text, onClick }) {
 return (
  <div className="button-common button-red" onClick={onClick}>
   {text}
  </div>
 );
}

export default ButtonCommon;
