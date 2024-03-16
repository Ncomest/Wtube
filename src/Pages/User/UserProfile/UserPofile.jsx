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

 const bck = "https://image.tmdb.org/t/p/w500";
 return (
  <>
   <div className="user-profile">
    <div>
     Welcome, <span>{userProf?.user}</span>
     <ButtonCommon text="Log Out" onClick={handleLogOut} />
    </div>
    <div>Фильмы с карточками</div>
    <div>
     {userProf?.favorites?.map((item) => (
      <div key={item.id} className="user-profile_card">
       <div>
        <img src={bck + item.poster_path} alt={item.title} />
        <h4>{item.title}</h4>
       </div>
      </div>
     ))}
    </div>
   </div>
  </>
 );
}

export default UserPofile;
