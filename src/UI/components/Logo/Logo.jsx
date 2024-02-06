import React, { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
 return (
  <div className="Logo">
   <Link to="/" className="Router-link">
    <span>W</span>Tube
   </Link>
  </div>
 );
}

export default Logo;
