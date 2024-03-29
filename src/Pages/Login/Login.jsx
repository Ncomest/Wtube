import "./Login.css";
import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { PWD_REGEX, USER_REGEX } from "../../helpers/Register";
import { GrStatusGood } from "react-icons/gr";
import { LuBadgeInfo } from "react-icons/lu";
import { useAuth } from "../../helpers/AuthContext";

function Login() {
 const { t } = useTranslation();
 const { setIsAuthenticated } = useAuth();
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

  if (!validName || !validPwd) {
   return;
  }

  const userDataStorage = JSON.parse(localStorage.getItem("userData")) || [];
  console.log("its localStorage", userDataStorage);

  const { user, pwd } = userData;
  console.log("its state", userData);

  const userFind = userDataStorage.find((data) => data.user === user);
  console.log("im find user", userFind);

  if (userFind && userFind.pwd === pwd) {
   console.log("success");
   setIsAuthenticated(true);

   let existData = JSON.parse(localStorage.getItem("Authorization")) || {};
   const updateAuth = {
    ...existData,
    online: true,
    user: userFind.user,
    pwd: userFind.pwd,
   };
   console.log("updateAuth", updateAuth);

   localStorage.setItem("Authorization", JSON.stringify(updateAuth));

   navigate("/user_profile");
  } else {
   console.log("failrue");
   setFailed(true);
  }
 };

 const existAuth = JSON.parse(localStorage.getItem("Authorization")) || [];
 useEffect(() => {}, [existAuth.online]);
 if (existAuth.online === true) {
  return <Navigate to="/user_profile" />;
 }

 return (
  <>
   {failed ? (
    <div className="login">
     <h1>
      {t("failed")}, {t("try")} {t("again")}
     </h1>
     <button className="login-failed_btn" onClick={() => setFailed(false)}>
      {t("again")}
     </button>
    </div>
   ) : (
    <div className="login">
     <section className="login-section">
      <form className="login-form" onSubmit={handleLogin}>
       <div className="login_label-container">
        <label htmlFor="username">{t("username")}:</label>
        {validName ? <GrStatusGood size={15} color="green" /> : null}
       </div>
       <div
        className={`login_err-msg ${
         !userFocus && userData.user && !validName ? "visible" : "hidden"
        }`}
       >
        {!userFocus && userData.user && !validName ? (
         <Instruct text={t("mustBe416LetterOrNumbers")} />
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
        <label htmlFor="password" className="login_label-container_password">
         {t("password")}:
        </label>
        {validPwd ? <GrStatusGood size={15} color="green" /> : null}
       </div>
       <div
        className={`login_err-msg ${
         !pwdFocus && userData.pwd && !validPwd ? "visible" : "hidden"
        }`}
       >
        {!pwdFocus && userData.pwd && !validPwd ? (
         <Instruct text={t("mustIncludeLetterAndNumber8-32")} />
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

       <button className="login-btn" disabled={!validName || !validPwd}>
        {t("logIn")}
       </button>
      </form>
      <p>
       {t(`ifYouDontHaveAnAccount`)}{" "}
       <Link className="Router-link" to={`/signup`}>
        <span style={{ color: "red" }}>{t("signUp")}</span>
       </Link>
      </p>

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
