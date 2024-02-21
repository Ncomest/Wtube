import React from "react";
import "./User.css";

function User() {
 return (
  <div className="user">
   <div className="user-form">
    <form action="" className="form-login">
     <label htmlFor="login">Login</label>
     <input type="text" id="login" name="login" />

     <label htmlFor="password">Password</label>
     <input type="password" id="password" name="password" />

     <div className="checkbox-login">
      <input id="check" type="checkbox" />
      <label htmlFor="check">I agree with the rules</label>
     </div>

     <button type="submit">Log In</button>
    </form>
   </div>
  </div>
 );
}

export default User;
