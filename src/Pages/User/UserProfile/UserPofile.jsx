import React, { useEffect, useState } from "react";
import "./UserPofile.css";
import { useNavigate } from "react-router-dom";

function UserPofile() {
 const [userProf, setUserProf] = useState(
  JSON.parse(localStorage.getItem("loggedInUser")) || {}
 );
 const navigate = useNavigate();

 useEffect(() => {
  setUserProf(JSON.parse(localStorage.getItem("loggedInUser")) || {});
 }, []);

 const handleLogOut = () => {
  localStorage.removeItem("loggedInUser");
  setUserProf({});
  navigate("/user");
  console.log("userLogOut");
 };

 return (
  <>
   <div className="user-profile">
    <div>
     Welcome, <span>{userProf.login}</span>
    </div>
    <div>
     <button className="Sign btnRed" onClick={handleLogOut}>
      Log Out
     </button>
    </div>
   </div>
  </>
 );
}

export default UserPofile;
