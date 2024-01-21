import React, { Link } from "react-router-dom";
import "./Logo.css";

function Logo({ setPage }) {
 return (
  <div className="Logo" onClick={() => setPage(1)}>
   <Link to="/" className="Router-link">
    WTube
   </Link>
  </div>
 );
}

export default Logo;
