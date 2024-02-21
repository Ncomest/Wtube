import React from "react";
import "./BtnLogin.css";
import { Link } from "react-router-dom";

function BtnLogin() {
 return (
  <>
   <button className="Sign">
    <Link className="Router-link" to={`/user`}>
     Log In
    </Link>
   </button>
  </>
 );
}

export default BtnLogin;
