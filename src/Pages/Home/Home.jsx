import React from "react";
import "./Home.css";
import "./../../index.css";

import Body from "./Home_Body/Body";

const Home = ({ page, setPage }) => {
 return (
  <div className="Home">
   <Body setPage={setPage} page={page} />
  </div>
 );
};

export default Home;
