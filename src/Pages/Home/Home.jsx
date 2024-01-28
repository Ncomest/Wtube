import React, { useState, useEffect } from "react";
import "./Home.css";
import "./../../index.css";

// import { useTheme } from "../../helpers/hooks/useTheme";
import Header from "../../modules/Header/Header";
import Body from "./Home_Body/Body";

const Home = () => {
 const [page, setPage] = useState(
  parseInt(localStorage.getItem("current"), 10) || 1
 );

 useEffect(() => {
    localStorage.setItem("current", page);
 }, [page]);

 return (
  <div className="Home">
   {console.log(page)}
   <Header setPage={setPage} />
   <Body setPage={setPage} page={page} />
  </div>
 );
};

export default Home;
