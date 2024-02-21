import React, { useState } from "react";
import "./User.css";

import LogInForm from "./LogSignForm/LogInForm";
import SignUpForm from "./LogSignForm/SignUpForm";

function User() {
 const [toogleLog, setToogleLog] = useState(true);


 //toogle btn login signin
 const handleToogle = () => {
  setToogleLog((e) => setToogleLog(!toogleLog));
 };

 return (
  <div className="user">
   {toogleLog ? (
    <LogInForm onClick={handleToogle} />
   ) : (
    <SignUpForm onClick={handleToogle} />
   )}
  </div>
 );
}

export default User;
