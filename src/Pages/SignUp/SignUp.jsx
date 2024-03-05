import React, { useEffect, useRef, useState } from "react";
import "./SignUp.css";
import { USER_REGEX } from "../../helpers/Register";
import { PWD_REGEX } from "../../helpers/Register";

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
   <p
    ref={errRef}
    className={errMsg ? "errmsg" : "offcreen"}
    aria-live="assertive"
   >
    {errMsg}
   </p>
   <form>
    <label htmlFor="username">
     Username:
     <span className={validName ? "valid" : "hide"}></span>
     <span className={validName || !user ? "hide" : "invalid"}>Not good</span>
     <input
      type="text"
      id="username"
      ref={userRef}
      autoComplete="off"
      onChange={(e) => setUser(e.target.value)}
      required
      aria-invalid={validName ? "false" : "true"}
      aria-describedby="uidnote"
      onFocus={() => setUserFocus(true)}
      onBlur={() => setUserFocus(false)}
     />
     <p
      id="uidnote"
      className={userFocus && user && !validName ? "instruction" : "offscreen"}
     >
      4 to 16 characters.
      <br />
      Must begin with a letter.
      <br />
      Letters,numbers
     </p>
    </label>
    <button>Accept</button>
   </form>
   <button>go to Login</button>
  </div>
 );
}

export default SignUp;
