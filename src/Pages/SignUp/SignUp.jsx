import React, { useEffect, useRef, useState } from "react";
import "./SignUp.css";
import { USER_REGEX } from "../../helpers/Register";
import { PWD_REGEX } from "../../helpers/Register";
import { GrStatusGood } from "react-icons/gr";
import { LuBadgeInfo } from "react-icons/lu";
import ButtonCommon from "../../UI/components/Buttons/ButtonCommon/ButtonCommon";

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
  console.log(result);
  console.log(user);
  setValidName(result);
 }, [user]);

 useEffect(() => {
  const result = PWD_REGEX.test(pwd);
  console.log(result);
  console.log(pwd);
  setValidNPwd(result);
  const macth = pwd === matchPwd;
  setValidMatch(macth);
 }, [pwd, matchPwd]);

 useEffect(() => {
  setErrMsg("");
 }, [user, pwd, matchPwd]);

 return (
  <div className="signup">
   {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
    {errMsg}
   </p> */}
   <form className="form-singup">
    <div className="label-container">
     <label htmlFor="username">Username:</label>
     {validName ? <GrStatusGood size={25} color="green" /> : null}
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
     {validPwd ? <GrStatusGood size={25} color="green" /> : null}
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
     {matchPwd && !matchFocus && validMatch ? (
      <GrStatusGood size={25} color="green" />
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
    <div className="signup_btn_container">
     <ButtonCommon text="Accept"/>
    </div>
   </form>
   <button>go to Login</button>
  </div>
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
