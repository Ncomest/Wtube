import React, { useEffect, useState } from "react";
import "./UserPofile.css";
import { useNavigate } from "react-router-dom";
import ButtonCommon from "../../../UI/components/Buttons/ButtonCommon/ButtonCommon";

function UserPofile() {
 const [userProf, setUserProf] = useState({});
 const navigate = useNavigate();

 useEffect(() => {
  setUserProf(JSON.parse(localStorage.getItem("Authorization")) || {});
 }, []);

 const handleLogOut = () => {
  localStorage.removeItem("Authorization");
  setUserProf({});
  navigate("/login");
 };

 return (
  <>
   <div className="user-profile">
    <div>
     Welcome, <span>{userProf?.user}</span>
    </div>
    <div>
     <ButtonCommon text="Log Out" onClick={handleLogOut} />
    </div>
   </div>
  </>
 );
}

export default UserPofile;
