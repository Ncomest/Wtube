import React, { useRef, useState } from "react";
import "./Login.css";

function Login() {
 const userRef = useRef();
 const [pwd, setPwd] = useState("");
 const [userData, setUserData] = useState({
  username: "",
  password: "",
 });

 const userDataStorage = JSON.parse(localStorage.getItem("userData")) || [];
 console.log(userDataStorage);


 return (
  <div className="login">
   <form className="login-form">
    <label htmlFor="username">Username:</label>
    <input type="text" name="username" />
    <label htmlFor="password">Password:</label>
    <input type="password" name="password" />
    <button className="login-btn">Login</button>
    <button>go to Sign Up</button>
   </form>
  </div>
 );
}

export default Login;
