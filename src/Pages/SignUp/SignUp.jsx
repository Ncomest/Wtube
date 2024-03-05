import React, { useEffect, useRef, useState } from "react";
import "./SignUp.css";

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

 useEffect(() => {}, []);

 return (
  <div className="signup">
   <form action="">
    <label htmlFor="">
     <input type="text" />
    </label>
    <button>Accept</button>
   </form>
   <button>go to Login</button>
  </div>
 );
}

export default SignUp;
