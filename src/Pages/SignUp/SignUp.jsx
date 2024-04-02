import "./SignUp.css";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { USER_REGEX } from "../../helpers/Register";
import { PWD_REGEX } from "../../helpers/Register";
import { GrStatusGood } from "react-icons/gr";
import { LuBadgeInfo } from "react-icons/lu";

function SignUp() {
 const userRef = useRef();
 const { t } = useTranslation();

 const [user, setUser] = useState("");
 const [validName, setValidName] = useState(false);
 const [userFocus, setUserFocus] = useState(false);

 const [pwd, setPwd] = useState("");
 const [validPwd, setValidPwd] = useState(false);
 const [pwdFocus, setPwdFocus] = useState(false);

 const [matchPwd, setMatchPwd] = useState("");
 const [validMatch, setValidMatch] = useState(false);
 const [matchFocus, setMatchFocus] = useState(false);

 const [success, setSuccess] = useState(false);
 const [userExist, setUserExist] = useState(false);

 useEffect(() => {
  userRef.current.focus();
 }, []);

 useEffect(() => {
  const result = USER_REGEX.test(user);
  setValidName(result);
 }, [user]);

 useEffect(() => {
  const result = PWD_REGEX.test(pwd);
  setValidPwd(result);
  const macth = pwd === matchPwd;
  setValidMatch(macth);
 }, [pwd, matchPwd]);

 const handleSubmit = (e) => {
  e.preventDefault();
  const v1 = USER_REGEX.test(user);
  const v2 = PWD_REGEX.test(pwd);
  if (!v1 || !v2) {
   return;
  }

  const storedData = localStorage.getItem("userData");
  let userDataArray = [];
  if (storedData) {
   userDataArray = JSON.parse(storedData);
   if (!Array.isArray(userDataArray)) {
    userDataArray = [];
   }
  }

  const userExists = userDataArray.some((userData) => userData.user === user);
  if (userExists) {
   setUserExist(true);
   console.log("userExist in true", userExist);
   // !Тут надо доделать визуальное изменение
   setTimeout(() => {
    console.log("Username already exist");
    setUserExist(false);
    console.log("userExist in false", userExist);
   }, 4000);
   return;
  }

  userDataArray.push({ user, pwd });
  //тут ту ловеркейс сделать можно
  localStorage.setItem("userData", JSON.stringify(userDataArray));

  setUser("");
  setPwd("");
  setMatchPwd("");

  setSuccess(true);
 };

 return (
  <>
   {success ? (
    <div className="signup">
     <h1>{t("success")}</h1>
     <Link className="Router-link" to={`/login`}>
      <span className="signup-span">{t("logIn")}</span>
     </Link>
    </div>
   ) : (
    <div className="signup">
     <section className="signup-section">
      <form className="form-singup" onSubmit={handleSubmit}>
       {userExist && <Instruct text={t("userIsAlreadyExist")} />}

       <div className="label-container">
        <label htmlFor="username">{t("username")}:</label>
        {validName ? <GrStatusGood size={15} color="green" /> : null}
       </div>
       <div
        className={`err-msg ${
         !userFocus && user && !validName ? "visible" : "hidden"
        }`}
       >
        {!userFocus && user && !validName ? (
         <Instruct text={t("mustBe416LetterOrNumbers")} />
        ) : null}
       </div>
       <input
        type="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)}
        required
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
       />

       <div className="label-container">
        <label htmlFor="password">
         {t("enter")} {t("password")}:
        </label>
        {validPwd ? <GrStatusGood size={15} color="green" /> : null}
       </div>
       <div
        className={`err-msg ${
         !pwdFocus && pwd && !validPwd ? "visible" : "hidden"
        }`}
       >
        {!pwdFocus && pwd && !validPwd ? (
         <Instruct text={t("mustIncludeLetterAndNumber8-32")} />
        ) : null}
       </div>
       <input
        type="password"
        id="password"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setPwd(e.target.value)}
        required
        onFocus={() => setPwdFocus(true)}
        onBlur={() => setPwdFocus(false)}
       />

       <div className="label-container">
        <label htmlFor="confirm_pwd">
         {t("confirm")} {t("password")}:
        </label>
        {matchPwd && validMatch ? (
         <GrStatusGood size={15} color="green" />
        ) : null}
       </div>
       <div
        className={`err-msg ${
         !matchFocus && matchPwd && !validMatch ? "visible" : "hidden"
        }`}
       >
        {!matchFocus && matchPwd && !validMatch ? (
         <Instruct text={t("mustMatchTheFirstPasswordInputField")} />
        ) : null}
       </div>
       <input
        type="password"
        id="confirm_pwd"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setMatchPwd(e.target.value)}
        required
        onFocus={() => setMatchFocus(true)}
        onBlur={() => setMatchFocus(false)}
       />
       <button
        className="sign-up_btn"
        disabled={!validName || !validPwd || !validMatch ? true : false}
       >
        {t("signUp")}
       </button>
      </form>
      <p>
       {t("ifYouHaveAnAccount")}{" "}
       <Link className="Router-link" to={`/login`}>
        <span className="signup-span">{t("logIn")}</span>
       </Link>
      </p>
     </section>
    </div>
   )}
  </>
 );
}

export default SignUp;

const Instruct = ({ text }) => {
 return (
  <div className="instruct">
   <LuBadgeInfo size={25} />
   <p id="uidnote">{text}</p>
  </div>
 );
};
