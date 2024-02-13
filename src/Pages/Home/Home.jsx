import React, { useState, useEffect } from "react";
import "./Home.css";
import "./../../index.css";

// import Header from "../../modules/Header/Header";
import Body from "./Home_Body/Body";

const Home = ({ page, setPage }) => {
 return (
  <div className="Home">
   {/* <Header setPage={setPage} /> */}
   <Body setPage={setPage} page={page} />
  </div>
 );
};

export default Home;
