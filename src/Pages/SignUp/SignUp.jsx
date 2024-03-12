import React, { useEffect, useRef, useState } from "react";
import { Link, json } from "react-router-dom";
import "./SignUp.css";
import { USER_REGEX } from "../../helpers/Register";
import { PWD_REGEX } from "../../helpers/Register";
import { GrStatusGood } from "react-icons/gr";
import { LuBadgeInfo } from "react-icons/lu";

function SignUp() {
 const userRef = useRef();
 const errRef = useRef();

 const [user, setUser] = useState("");
 const [validName, setValidName] = useState(false);
 const [userFocus, setUserFocus] = useState(false);

 const [pwd, setPwd] = useState("");
 const [validPwd, setValidNPwd] = useState(false);
 const [pwdFocus, setPwdFocus] = useState(false);

 const [matchPwd, setMatchPwd] = useState("");
 const [validMatch, setValidMatch] = useState(false);
 const [matchFocus, setMatchFocus] = useState(false);

 const [errMsg, setErrMsg] = useState("");
 const [success, setSuccess] = useState(false);

 useEffect(() => {
  userRef.current.focus();
 }, []);

 useEffect(() => {
  const result = USER_REGEX.test(user);
  setValidName(result);
 }, [user]);

 useEffect(() => {
  const result = PWD_REGEX.test(pwd);
  setValidNPwd(result);
  const macth = pwd === matchPwd;
  setValidMatch(macth);
 }, [pwd, matchPwd]);

 useEffect(() => {
  setErrMsg("");
 }, [user, pwd, matchPwd]);

 const handleSubmit = async (e) => {
  e.preventDefault();
  const v1 = USER_REGEX.test(user);
  const v2 = PWD_REGEX.test(pwd);
  if (!v1 || !v2) {
   setErrMsg("Invalid Entry");
   return;
  }
  try {
   const storedData = localStorage.getItem("userData");
   let userDataArray = [];
   if (storedData) {
    userDataArray = JSON.parse(storedData);
   }

   const userExists = userDataArray.some((userData) => userData.user === user);
   if (userExists) {
    setErrMsg("Username already exist");
    console.log("Username already exist");
    return;
   }

   userDataArray.push({ user, pwd });

   localStorage.setItem("userData", JSON.stringify(userDataArray));

   setUser("");
   setPwd("");
   setMatchPwd("");

   setSuccess(true);
  } catch (err) {
   console.error("Registration failed", err);
   setErrMsg("Registration failed");
  }
 };

 return (
  <>
   {success ? (
    <div className="signup">
     <h1>Success</h1>
     <Link className="Router-link" to={`/login`}>
      <span>Log In</span>
     </Link>
    </div>
   ) : (
    <div className="signup">
     <form className="form-singup" onSubmit={handleSubmit}>
      <div className="label-container">
       <label htmlFor="username">Username:</label>
       {validName ? <GrStatusGood size={15} color="green" /> : null}
      </div>
      <div
       className={`err-msg ${
        !userFocus && user && !validName ? "visible" : "hidden"
       }`}
      >
       {!userFocus && user && !validName ? (
        <Instruct text="Must be 4-16 letter or numbers" />
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
       <label htmlFor="password">Password:</label>
       {validPwd ? <GrStatusGood size={15} color="green" /> : null}
      </div>
      <div
       className={`err-msg ${
        !pwdFocus && pwd && !validPwd ? "visible" : "hidden"
       }`}
      >
       {!pwdFocus && pwd && !validPwd ? (
        <Instruct text="Must include letter and number 8-32" />
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
       <label htmlFor="confirm_pwd">Confirm password:</label>
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
        <Instruct text="Must match the first password input field" />
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
       Sign Up
      </button>
      <p>
       If you have an account{" "}
       <Link className="Router-link" to={`/login`}>
        <span>Log In</span>
       </Link>
      </p>
     </form>
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
