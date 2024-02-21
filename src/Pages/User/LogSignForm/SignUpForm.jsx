import React, { useState } from "react";

function SignUpForm({ children, onToogleLogin }) {
 const [formData, setformData] = useState({
  login: "",
  password: "",
  email: "",
  agree: false,
 });

 // Получение массива пользователей из localStorage (если он уже есть)
 const usersFromStorage = JSON.parse(localStorage.getItem("userArray")) || [];

 // Функция, которая добавляет нового пользователя в массив
 const addUser = (user) => {
  usersFromStorage.push(user);
  localStorage.setItem("userArray", JSON.stringify(usersFromStorage));
 };

 const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  if (name === "login" && value.match(/[^a-zA-Z]/)) {
   return;
  }

  setformData((prevData) => ({
   ...prevData,
   [name]: type === "checkbox" ? checked : value,
  }));
 };

 const handleSumbit = (e) => {
  e.preventDefault();

  if (formData.login && formData.password && formData.agree && formData.email) {
   // Проверка на уникальность логина и email
   const isLoginExist = usersFromStorage.some(
    (user) => user.login === formData.login
   );
   const isEmailExist = usersFromStorage.some(
    (user) => user.email === formData.email
   );

   if (isLoginExist) {
    console.log("This login is already taken. Please choose another login.");
    return;
   }

   if (isEmailExist) {
    console.log("This email is already taken. Please choose another email.");
    return;
   }

   const userObject = {
    login: formData.login,
    password: formData.password,
    email: formData.email,
   };

   // Добавление нового пользователя в массив и сохранение в localStorage
   addUser(userObject);

   setformData({
    login: "",
    password: "",
    email: "",
    agree: false,
   });

   onToogleLogin();
   console.log("Success, data saved to localStorage!");
  } else {
   console.log("Please confirm all data places!");
  }
 };

 return (
  <form className="form-login" onSubmit={handleSumbit}>
   <label htmlFor="login">Login</label>
   <input
    type="text"
    id="login"
    name="login"
    value={formData.login}
    onChange={handleChange}
   />

   <label htmlFor="password">Password</label>
   <input
    type="password"
    id="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
   />

   <label htmlFor="email">Email</label>
   <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
   />

   <div className="checkbox-login">
    <input
     id="check"
     type="checkbox"
     name="agree"
     onChange={handleChange}
     checked={formData.agree}
    />
    <label htmlFor="check">I agree with the rules</label>
   </div>

   <button type="submit">Accept</button>
   {/* <div>{children}</div> */}
  </form>
 );
}

export default SignUpForm;
