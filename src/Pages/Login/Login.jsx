import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { PWD_REGEX, USER_REGEX } from "../../helpers/Register";
import { GrStatusGood } from "react-icons/gr";
import { LuBadgeInfo } from "react-icons/lu";

function Login() {
 const navigate = useNavigate();
 const userRef = useRef();
 const [userData, setUserData] = useState({
  user: "",
  pwd: "",
 });

 const [validName, setValidName] = useState(false);
 const [userFocus, setUserFocus] = useState(false);

 const [validPwd, setValidPwd] = useState(false);
 const [pwdFocus, setPwdFocus] = useState(false);

 const [failed, setFailed] = useState(false);

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
 };

 useEffect(() => {
  const result = USER_REGEX.test(userData.user);
  setValidName(result);
 }, [userData.user]);

 useEffect(() => {
  const result = PWD_REGEX.test(userData.pwd);
  setValidPwd(result);
 }, [userData.pwd]);

 const handleLogin = (e) => {
  e.preventDefault();

  const v1 = USER_REGEX.test(userData.user);
  const v2 = PWD_REGEX.test(userData.pwd);
  if (!v1 || !v2) {
   return;
  }

  const userDataStorage = JSON.parse(localStorage.getItem("userData")) || [];
  const { user, pwd } = userData;
  const userFind = userDataStorage.find((data) => data.user === user);

  if (userFind && userFind.pwd === pwd) {
   console.log("success");
   localStorage.setItem(
    "Authorization",
    JSON.stringify({ online: true, userData })
   );
   navigate("/user_profile");
  } else {
   console.log("failrue");
   setFailed(true);
  }
 };

 const existAuth = JSON.parse(localStorage.getItem("Authorization")) || [];
 useEffect(() => {
  existAuth.online === true ? console.log("online") : console.log("offline");
 }, [existAuth.online]);
 if (existAuth.online === true) {
  return <Navigate to="/user_profile" />;
 }

 return (
  <>
   {failed ? (
    <div className="login">
     <h1>Failed, try again</h1>
     <button
      className="login-failed_btn"
      onClick={() => window.location.reload()}
     >
      Reload
     </button>
    </div>
   ) : (
    <div className="login">
     <section className="login-section">
      <form className="login-form" onSubmit={handleLogin}>
       <div className="login_label-container">
        <label htmlFor="username">Username:</label>
        {validName ? <GrStatusGood size={15} color="green" /> : null}
       </div>
       <div
        className={`login_err-msg ${
         !userFocus && userData.user && !validName ? "visible" : "hidden"
        }`}
       >
        {!userFocus && userData.user && !validName ? (
         <Instruct text="Must be 4-16 letter or numbers" />
        ) : null}
       </div>
       <input
        type="text"
        name="user"
        autoComplete="off"
        ref={userRef}
        value={userData.user}
        onChange={handleInputChange}
        required
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
       />

       <div className="login_label-container">
        <label htmlFor="password">Password:</label>
        {validPwd ? <GrStatusGood size={15} color="green" /> : null}
       </div>
       <div
        className={`login_err-msg ${
         !pwdFocus && userData.pwd && !validPwd ? "visible" : "hidden"
        }`}
       >
        {!pwdFocus && userData.pwd && !validPwd ? (
         <Instruct text="Must include letter and number 8-32" />
        ) : null}
       </div>

       <input
        type="password"
        name="pwd"
        value={userData.pwd}
        onChange={handleInputChange}
        required
        onFocus={() => setPwdFocus(true)}
        onBlur={() => setPwdFocus(false)}
       />

       <button
        className="login-btn"
        disabled={!validName || !validPwd ? true : false}
       >
        Log In
       </button>
      </form>
      <p>
       If you don't have an account, you can{" "}
       <Link className="Router-link" to={`/signup`}>
        Sign Up
       </Link>
      </p>

      {/* <button>go to Sign Up</button> */}
     </section>
    </div>
   )}
  </>
 );
}

export default Login;

const Instruct = ({ text }) => {
 return (
  <div className="instruct">
   <LuBadgeInfo size={25} />
   <p id="uidnote">{text}</p>
  </div>
 );
};
