import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogInForm({ children}) {
 const [formData, setFormData] = useState({
  login: "",
  password: "",
 });

 const navigate = useNavigate();

 //  const [currentUser, setCurrentUser] = useState({
 //   login: "",
 //   password: "",
 //  });

 const handleLogin = () => {
  const usersFromStorage = JSON.parse(localStorage.getItem("userArray")) || [];

  const user = usersFromStorage.find(
   (item) =>
    item.login === formData.login && item.password === formData.password
  );

  if (user) {
   localStorage.setItem("loggedInUser", JSON.stringify(user));
   //  const currentUser =
   //   JSON.stringify(localStorage.setItem("currentUser")) || [];
   //   setFormData(currentUser);
   navigate("/userprofile");
   console.log("Successful");
  } else {
   console.log("Failed");
  }
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
   ...prevData,
   [name]: value,
  }));
 };

 return (
  <div className="user-form">
   <form className="form-login">
    <label htmlFor="login">Login</label>
    <input
     type="text"
     id="login"
     name="login"
     required
     value={formData.login}
     onChange={handleChange}
    />

    <label htmlFor="password">Password</label>
    <input
     type="password"
     id="password"
     name="password"
     required
     value={formData.password}
     onChange={handleChange}
    />
    <button onClick={handleLogin}>Log In</button>
    {/* <div>{children}</div> */}
   </form>
  </div>
 );
}

export default LogInForm;
