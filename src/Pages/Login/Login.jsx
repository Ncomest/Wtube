import React, { useEffect, useRef, useState } from "react";
import "./Login.css";

function Login() {
 const userRef = useRef();
 const [userData, setUserData] = useState({
  user: "",
  pwd: "",
 });
 //  const [success, setSuccess] = useState(false);

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
 };

 const handleLogin = (e) => {
  e.preventDefault();
  const userDataStorage = JSON.parse(localStorage.getItem("userData")) || [];
  const { user, pwd } = userData;
  const userFind = userDataStorage.find((data) => data.user === user);
  if (userFind && userFind.pwd === pwd) {
   console.log("success");
  } else {
   console.log("failrue");
  }
 };

 return (
  <div className="login">
   <form className="login-form" onSubmit={handleLogin}>
    <label htmlFor="username">Username:</label>
    <input
     type="text"
     name="user"
     value={userData.user}
     onChange={handleInputChange}
     required
    />
    <label htmlFor="password">Password:</label>
    <input
     type="password"
     name="pwd"
     value={userData.pwd}
     onChange={handleInputChange}
     required
    />
    <button className="login-btn">Login</button>
    <button>go to Sign Up</button>
   </form>
  </div>
 );
}

export default Login;
