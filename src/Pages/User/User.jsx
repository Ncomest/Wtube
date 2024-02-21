import React, { useState } from "react";
import "./User.css";

import LogInForm from "./LogSignForm/LogInForm";
import SignUpForm from "./LogSignForm/SignUpForm";

function User() {
 const [toggleLog, setToggleLog] = useState(false);
 const [toggleToLogin, setToggleToLogin] = useState(false);

 //toogle btn login signin
 const handleToggle = () => {
  setToggleLog((e) => !e);
  setToggleToLogin(false);
 };

 const handleToLogin = () => {
  setToggleToLogin(true);
 };

 return (
  <div className="user">
   {toggleToLogin || toggleLog ? (
    <LogInForm onClick={handleToggle} />
   ) : (
    <SignUpForm onClick={handleToggle} onToogleLogin={handleToLogin} />
   )}
   <button className="toogleBtn" onClick={handleToggle}>
    {toggleLog ? "Switch to Sign Up" : "Switch to Log In"}
   </button>
  </div>
 );
}

export default User;
