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
  setErrMsg("");
 }, [user]);

 return (
  <div className="signup">
   <form className="form-singup">
    <label htmlFor="username">Username:</label>
    {!userFocus && user && !validName ? (
     <Instruct text="Must be 4-16 letter or numbers" />
    ) : null}
    <div className="input-container">
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
     {validName ? <GrStatusGood size={25} /> : null}
    </div>
    <div className="signup_btn_container">
    <ButtonCommon text="Accept" />
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
