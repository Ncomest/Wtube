import React from "react";

function LogInForm({onClick}) {
 return (
  <div className="user-form">
   <form action="" className="form-login">
    <label htmlFor="login">Login</label>
    <input type="text" id="login" name="login" />

    <label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" />

    <button type="submit">Log In</button>
    <p onClick={onClick}>
     If you dont have an account, you can <span>Sign Up</span>
    </p>
   </form>
  </div>
 );
}

export default LogInForm;
